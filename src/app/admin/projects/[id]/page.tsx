import Link from 'next/link';
import { notFound } from 'next/navigation';
import { asc, eq } from 'drizzle-orm';

import { db } from '@/db';
import { annotations, projects, screens } from '@/db/schema';
import ScreenUploader from '../../components/ScreenUploader';
import { deleteProject, setProjectStatus, updateProject } from '../../actions';

export const dynamic = 'force-dynamic';

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await db.query.projects.findFirst({
    where: eq(projects.id, id),
    with: {
      screens: {
        orderBy: [asc(screens.displayOrder)],
        with: {
          annotations: {
            orderBy: [asc(annotations.displayOrder)],
          },
        },
      },
    },
  });

  if (!project) notFound();

  return (
    <section className="admin-page">
      <p className="admin-eyebrow">Edit Project</p>
      <div className="admin-heading-row">
        <div>
          <h1>{project.title}</h1>
          <p className="admin-intro">Update project copy, upload screens, and manage publish state.</p>
        </div>
        <Link className="admin-button" href="/admin">Back to Projects</Link>
      </div>

      <form className="admin-form" action={updateProject.bind(null, project.id)}>
        <label>
          Title
          <input name="title" required defaultValue={project.title} />
        </label>
        <label>
          Slug
          <input name="slug" required defaultValue={project.slug} />
        </label>
        <label>
          Section tag / intro
          <textarea name="caseStudyIntro" rows={3} defaultValue={project.caseStudyIntro || ''} />
        </label>
        <label>
          Problem
          <textarea name="problem" rows={3} defaultValue={project.problem || ''} />
        </label>
        <label>
          Built with
          <textarea name="buildApproach" rows={3} defaultValue={project.buildApproach || ''} />
        </label>
        <label>
          Impact
          <textarea name="impact" rows={3} defaultValue={project.impact || ''} />
        </label>
        <label>
          Bullet 1
          <textarea name="bullet1" rows={2} defaultValue={project.bullet1 || ''} />
        </label>
        <label>
          Bullet 2
          <textarea name="bullet2" rows={2} defaultValue={project.bullet2 || ''} />
        </label>
        <label>
          Bullet 3
          <textarea name="bullet3" rows={2} defaultValue={project.bullet3 || ''} />
        </label>
        <div className="admin-form-actions">
          <button type="submit">Save Changes</button>
        </div>
      </form>

      <div className="admin-panel">
        <h2>Screens</h2>
        <ScreenUploader projectId={project.id} />
        {project.screens.length > 0 && (
          <ol className="admin-screen-grid">
            {project.screens.map((screen) => (
              <li key={screen.id}>
                <img src={screen.originalUrl} alt={screen.altText || project.title} />
                <span>{screen.altText || 'Untitled screen'}</span>
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className="admin-danger-zone">
        <form action={setProjectStatus.bind(null, project.id, project.status === 'published' ? 'draft' : 'published')}>
          <button type="submit">{project.status === 'published' ? 'Unpublish' : 'Publish'}</button>
        </form>
        <form action={setProjectStatus.bind(null, project.id, 'archived')}>
          <button type="submit">Archive</button>
        </form>
        <form action={deleteProject.bind(null, project.id)}>
          <button type="submit">Delete</button>
        </form>
      </div>
    </section>
  );
}
