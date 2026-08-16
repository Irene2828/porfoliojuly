import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/db';
import { annotations, projects } from '@/db/schema';
import { authOptions } from '@/lib/auth';
import { agentProjectGenerationValidator } from '@/lib/gemini';

export const runtime = 'nodejs';

const requestSchema = z.object({
  screenId: z.string().uuid(),
  generated: agentProjectGenerationValidator,
  publish: z.boolean().default(true),
});

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const parsed = requestSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid approval payload.', details: parsed.error.flatten() }, { status: 400 });
  }

  const { generated, screenId, publish } = parsed.data;

  await db.update(projects).set({
    title: generated.title,
    slug: slugify(generated.title),
    caseStudyIntro: generated.caseStudyIntro,
    problem: generated.resultChips.problem,
    buildApproach: generated.resultChips.buildApproach,
    impact: generated.resultChips.impact,
    status: publish ? 'published' : 'draft',
    updatedAt: new Date(),
  }).where(eq(projects.id, id));

  await db.delete(annotations).where(eq(annotations.screenId, screenId));
  await db.insert(annotations).values(generated.annotations.map((annotation, index) => ({
    screenId,
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
  revalidatePath(`/admin/projects/${id}`);

  return NextResponse.json({ ok: true });
}
