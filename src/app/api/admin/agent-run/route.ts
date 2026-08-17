import { put } from '@vercel/blob';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { asc, eq } from 'drizzle-orm';

import { db } from '@/db';
import { annotations, projects, screens } from '@/db/schema';
import { authOptions } from '@/lib/auth';
import {
  agentProjectGenerationResponseSchema,
  agentProjectGenerationValidator,
  GeminiConfigError,
  generateGeminiJson,
} from '@/lib/gemini';
import { checkRateLimit } from '@/lib/rate-limit';
import {
  formatFileSize,
  isAllowedImageType,
  MAX_UPLOAD_SIZE_BYTES,
  sanitizeFilename,
} from '@/lib/upload';

export const runtime = 'nodejs';

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized. Sign into admin again.' }, { status: 401 });
  }

  const rateLimit = checkRateLimit(`agent-run:${session.user.email || 'admin'}`, 8, 60_000);
  if (!rateLimit.allowed) {
    return NextResponse.json({ error: 'Too many AI requests. Try again shortly.' }, { status: 429 });
  }

  try {
    const formData = await request.formData();
    const projectId = formData.get('projectId');
    const prompt = formData.get('prompt');
    const file = formData.get('visual');

    if (typeof projectId !== 'string' || !projectId) {
      return NextResponse.json({ error: 'Choose which project section to replace.' }, { status: 400 });
    }

    if (typeof prompt !== 'string' || prompt.trim().length < 10) {
      return NextResponse.json({ error: 'Tell AI what to make from this visual.' }, { status: 400 });
    }

    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'Upload one visual first.' }, { status: 400 });
    }

    if (!isAllowedImageType(file.type)) {
      return NextResponse.json({ error: `${file.name} is not a supported image type.` }, { status: 400 });
    }

    if (file.size > MAX_UPLOAD_SIZE_BYTES) {
      return NextResponse.json({ error: `${file.name} is larger than ${formatFileSize(MAX_UPLOAD_SIZE_BYTES)}.` }, { status: 400 });
    }

    const project = await db.query.projects.findFirst({
      where: eq(projects.id, projectId),
      with: {
        screens: {
          orderBy: [asc(screens.displayOrder)],
        },
      },
    });

    if (!project) {
      return NextResponse.json({ error: 'Project not found.' }, { status: 404 });
    }

    const safeName = sanitizeFilename(file.name) || 'project-visual';
    const blob = await put(`portfolio/screens/${Date.now()}-${safeName}`, file, {
      access: 'public',
      addRandomSuffix: true,
    });

    const [screen] = await db.insert(screens).values({
      projectId,
      originalUrl: blob.url,
      altText: file.name.replace(/\.[^.]+$/, ''),
      displayOrder: Date.now(),
    }).returning();

    const generated = await generateGeminiJson({
      validator: agentProjectGenerationValidator,
      responseSchema: agentProjectGenerationResponseSchema,
      images: [{ uri: blob.url, mimeType: file.type }],
      prompt: `
You are the agent inside Iryna Sheremeta's portfolio admin.

The user wants a Codex-like one-shot flow: upload a visual, prompt naturally, and have you replace the selected homepage project section.

Guardrails:
- Follow the existing section framework exactly: name, subline, visual, 3 strategic captions, 3 value/result chips.
- Captions must explain key strategic design/build decisions: why this was built this way, what friction it removes, how product/design/AI thinking helped.
- Result chips map to Problem, Built with, and Impact.
- Do not invent fake metrics. Use qualitative impact unless the user provides metrics.
- Keep copy concise, specific, and portfolio-ready.
- Avoid generic hype and vague agency language.
- Annotation coordinates must be normalized 0 to 1 and point to meaningful areas of the visual.

Selected section to replace:
Current title: ${project.title}
Current subline: ${project.caseStudyIntro || 'None'}
Visual filename: ${file.name}

User prompt:
${prompt}
      `.trim(),
    });

    await db.update(projects).set({
      title: generated.title,
      slug: slugify(generated.title),
      caseStudyIntro: generated.caseStudyIntro,
      problem: generated.resultChips.problem,
      buildApproach: generated.resultChips.buildApproach,
      impact: generated.resultChips.impact,
      coverImageId: screen.id,
      status: 'published',
      updatedAt: new Date(),
    }).where(eq(projects.id, projectId));

    await db.delete(annotations).where(eq(annotations.screenId, screen.id));
    await db.insert(annotations).values(generated.annotations.map((annotation, index) => ({
      screenId: screen.id,
      markerNumber: annotation.markerNumber || index + 1,
      title: annotation.title,
      explanation: annotation.explanation,
      category: annotation.category,
      x: annotation.x,
      y: annotation.y,
      confidence: annotation.confidence,
      visible: true,
      displayOrder: index,
    })));

    revalidatePath('/');
    revalidatePath('/admin');
    revalidatePath(`/admin/projects/${projectId}`);

    return NextResponse.json({
      ok: true,
      projectId,
      screenId: screen.id,
      title: generated.title,
      generated,
    });
  } catch (error) {
    if (error instanceof GeminiConfigError) {
      return NextResponse.json({ error: error.message }, { status: 503 });
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Agent run failed.' },
      { status: 500 },
    );
  }
}
