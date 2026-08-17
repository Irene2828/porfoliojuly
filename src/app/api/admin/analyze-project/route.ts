import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { z } from 'zod';

import { authOptions } from '@/lib/auth';
import {
  GeminiConfigError,
  generateGeminiJson,
  projectAnalysisResponseSchema,
  projectAnalysisValidator,
} from '@/lib/gemini';
import { checkRateLimit } from '@/lib/rate-limit';

export const runtime = 'nodejs';

const requestSchema = z.object({
  title: z.string().min(1),
  brief: z.string().min(10),
  audience: z.string().optional(),
  screenshots: z.array(z.string().url()).optional(),
});

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const rateLimit = checkRateLimit(`analyze:${session.user.email || 'admin'}`);
  if (!rateLimit.allowed) {
    return NextResponse.json({ error: 'Too many analysis requests. Try again shortly.' }, { status: 429 });
  }

  const body = requestSchema.safeParse(await request.json());
  if (!body.success) {
    return NextResponse.json({ error: 'Invalid request.', details: body.error.flatten() }, { status: 400 });
  }

  const { title, brief, audience, screenshots = [] } = body.data;

  try {
    const analysis = await generateGeminiJson({
      validator: projectAnalysisValidator,
      responseSchema: projectAnalysisResponseSchema,
      images: screenshots.map((uri) => ({ uri })),
      prompt: `
You are helping write concise portfolio case-study content for a designer/product builder.

Project title: ${title}
Audience: ${audience || 'portfolio visitors and prospective collaborators'}
Brief:
${brief}

Screenshot URLs:
${screenshots.length ? `${screenshots.length} screenshot image(s) attached.` : 'No screenshots provided.'}

Write in a crisp, grounded, non-hype voice. Avoid generic phrases.
      `.trim(),
    });

    return NextResponse.json({ analysis });
  } catch (error) {
    if (error instanceof GeminiConfigError) {
      return NextResponse.json({ error: error.message }, { status: 503 });
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Analysis failed.' },
      { status: 500 },
    );
  }
}
