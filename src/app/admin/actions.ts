'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { asc, eq } from 'drizzle-orm';

import { db } from '@/db';
import { projects } from '@/db/schema';

function requiredString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

function optionalString(formData: FormData, key: string) {
  const value = requiredString(formData, key);
  return value.length > 0 ? value : null;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function createProject(formData: FormData) {
  const title = requiredString(formData, 'title');
  if (!title) return;

  const slug = slugify(requiredString(formData, 'slug') || title);

  const [project] = await db.insert(projects).values({
    title,
    slug,
    caseStudyIntro: optionalString(formData, 'caseStudyIntro'),
    problem: optionalString(formData, 'problem'),
    buildApproach: optionalString(formData, 'buildApproach'),
    impact: optionalString(formData, 'impact'),
    status: 'draft',
    displayOrder: Date.now(),
  }).returning();

  revalidatePath('/admin');
  redirect(`/admin/projects/${project.id}`);
}

export async function updateProject(projectId: string, formData: FormData) {
  const title = requiredString(formData, 'title');
  if (!title) return;

  await db.update(projects).set({
    title,
    slug: slugify(requiredString(formData, 'slug') || title),
    caseStudyIntro: optionalString(formData, 'caseStudyIntro'),
    problem: optionalString(formData, 'problem'),
    buildApproach: optionalString(formData, 'buildApproach'),
    impact: optionalString(formData, 'impact'),
    bullet1: optionalString(formData, 'bullet1'),
    bullet2: optionalString(formData, 'bullet2'),
    bullet3: optionalString(formData, 'bullet3'),
    updatedAt: new Date(),
  }).where(eq(projects.id, projectId));

  revalidatePath('/');
  revalidatePath('/admin');
  revalidatePath(`/admin/projects/${projectId}`);
}

export async function setProjectStatus(projectId: string, status: 'draft' | 'published' | 'archived') {
  await db.update(projects).set({
    status,
    updatedAt: new Date(),
  }).where(eq(projects.id, projectId));

  revalidatePath('/');
  revalidatePath('/admin');
  revalidatePath(`/admin/projects/${projectId}`);
}

export async function deleteProject(projectId: string) {
  await db.delete(projects).where(eq(projects.id, projectId));
  revalidatePath('/');
  revalidatePath('/admin');
  redirect('/admin');
}

export async function moveProject(projectId: string, direction: 'up' | 'down') {
  const allProjects = await db.query.projects.findMany({
    orderBy: [asc(projects.displayOrder)],
  });

  const index = allProjects.findIndex((project) => project.id === projectId);
  const targetIndex = direction === 'up' ? index - 1 : index + 1;

  if (index < 0 || targetIndex < 0 || targetIndex >= allProjects.length) return;

  const current = allProjects[index];
  const target = allProjects[targetIndex];

  await db.update(projects).set({ displayOrder: target.displayOrder }).where(eq(projects.id, current.id));
  await db.update(projects).set({ displayOrder: current.displayOrder }).where(eq(projects.id, target.id));

  revalidatePath('/');
  revalidatePath('/admin');
}
