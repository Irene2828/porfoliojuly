import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { z } from 'zod';

import { authOptions } from '@/lib/auth';
import {
  annotationGenerationResponseSchema,
  annotationGenerationValidator,
  GeminiConfigError,
  generateGeminiJson,
} from '@/lib/gemini';
import { checkRateLimit } from '@/lib/rate-limit';

export const runtime = 'nodejs';

const requestSchema = z.object({
  projectTitle: z.string().min(1),
  screenUrl: z.string().url(),
  context: z.string().min(10),
  count: z.number().int().min(1).max(6).default(3),
});

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const rateLimit = checkRateLimit(`annotations:${session.user.email || 'admin'}`);
  if (!rateLimit.allowed) {
    return NextResponse.json({ error: 'Too many annotation requests. Try again shortly.' }, { status: 429 });
  }

  const body = requestSchema.safeParse(await request.json());
  if (!body.success) {
    return NextResponse.json({ error: 'Invalid request.', details: body.error.flatten() }, { status: 400 });
  }

  const { projectTitle, screenUrl, context, count } = body.data;

  try {
    const result = await generateGeminiJson({
      validator: annotationGenerationValidator,
      responseSchema: annotationGenerationResponseSchema,
      images: [{ uri: screenUrl }],
      prompt: `
Generate ${count} portfolio annotations for this project screen.

Project: ${projectTitle}
Context:
${context}

Each annotation should identify a meaningful UX/product/design decision.
Use normalized x/y coordinates from 0 to 1, estimating placement on the screen.
Keep titles short and explanations specific.
      `.trim(),
    });

    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof GeminiConfigError) {
      return NextResponse.json({ error: error.message }, { status: 503 });
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Annotation generation failed.' },
      { status: 500 },
    );
  }
}
