import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { asc, eq } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/db';
import { projects, screens } from '@/db/schema';
import { authOptions } from '@/lib/auth';
import {
  agentProjectGenerationResponseSchema,
  agentProjectGenerationValidator,
  GeminiConfigError,
  generateGeminiJson,
} from '@/lib/gemini';
import { checkRateLimit } from '@/lib/rate-limit';

export const runtime = 'nodejs';

const requestSchema = z.object({
  prompt: z.string().min(10),
  screenId: z.string().uuid().optional(),
});

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const rateLimit = checkRateLimit(`agent:${session.user.email || 'admin'}`, 8, 60_000);
  if (!rateLimit.allowed) {
    return NextResponse.json({ error: 'Too many AI generation requests. Try again shortly.' }, { status: 429 });
  }

  const parsed = requestSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request.', details: parsed.error.flatten() }, { status: 400 });
  }

  const project = await db.query.projects.findFirst({
    where: eq(projects.id, id),
    with: {
      screens: {
        orderBy: [asc(screens.displayOrder)],
      },
    },
  });

  if (!project) {
    return NextResponse.json({ error: 'Project not found.' }, { status: 404 });
  }

  const targetScreen = parsed.data.screenId
    ? project.screens.find((screen) => screen.id === parsed.data.screenId)
    : project.screens.at(-1) || project.screens[0];

  if (!targetScreen) {
    return NextResponse.json({ error: 'Upload a screen before running the agent.' }, { status: 400 });
  }

  try {
    const generated = await generateGeminiJson({
      validator: agentProjectGenerationValidator,
      responseSchema: agentProjectGenerationResponseSchema,
      prompt: `
You are an autonomous portfolio editor for Iryna Sheremeta's case-study site.

Your job:
- Use the uploaded screen and the user's instruction to produce a finished project section.
- Generate a project name, a short subline, exactly 3 captions/annotations, and exactly 3 result chips.
- Keep copy concrete, visual, and portfolio-ready.
- Avoid generic hype.
- The result chips map to Problem, Built with, and Impact.
- Captions must explain key strategic design/build decisions: why the UI was built this way, what friction it removes, or how AI/product thinking helped.
- Impact/value must describe user or workflow value, not fake metrics unless the user explicitly provides them.
- Keep the structure aligned to the existing homepage sections: title, origin subline, visual, strategic captions beside the visual, and value chips below.
- Annotation x/y coordinates must be normalized from 0 to 1, estimating where the caption should point on the screen.

Existing project:
Title: ${project.title}
Subline: ${project.caseStudyIntro || 'None yet'}
Screen URL: ${targetScreen.originalUrl}
Screen alt text: ${targetScreen.altText || 'None'}

User instruction:
${parsed.data.prompt}
      `.trim(),
    });

    return NextResponse.json({
      projectId: id,
      screenId: targetScreen.id,
      screenUrl: targetScreen.originalUrl,
      generated,
    });
  } catch (error) {
    if (error instanceof GeminiConfigError) {
      return NextResponse.json({ error: error.message }, { status: 503 });
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Agent generation failed.' },
      { status: 500 },
    );
  }
}
