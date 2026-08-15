import Link from 'next/link';
import { asc } from 'drizzle-orm';

import { db } from '@/db';
import { projects } from '@/db/schema';

import { moveProject, setProjectStatus } from './actions';

export const dynamic = 'force-dynamic';

export default async function AdminProjectsPage() {
  const projectList = await db.query.projects.findMany({
    orderBy: [asc(projects.displayOrder)],
  });

  return (
    <section className="admin-page">
      <p className="admin-eyebrow">Admin Workspace</p>
      <div className="admin-heading-row">
        <div>
          <h1>Projects</h1>
          <p className="admin-intro">Manage drafts, publishing, archive state, and project order.</p>
        </div>
        <Link className="admin-button" href="/admin/projects/new">New Project</Link>
      </div>

      <div className="admin-card-list">
        {projectList.map((project, index) => (
          <article key={project.id} className="admin-project-card">
            <div>
              <span className={`admin-status admin-status-${project.status}`}>{project.status}</span>
              <h2>{project.title}</h2>
              <p>{project.caseStudyIntro || project.summary || 'No intro yet.'}</p>
            </div>

            <div className="admin-card-actions">
              <Link href={`/admin/projects/${project.id}`}>Edit</Link>
              <form action={moveProject.bind(null, project.id, 'up')}>
                <button type="submit" disabled={index === 0}>Up</button>
              </form>
              <form action={moveProject.bind(null, project.id, 'down')}>
                <button type="submit" disabled={index === projectList.length - 1}>Down</button>
              </form>
              <form action={setProjectStatus.bind(null, project.id, project.status === 'published' ? 'draft' : 'published')}>
                <button type="submit">{project.status === 'published' ? 'Unpublish' : 'Publish'}</button>
              </form>
              <form action={setProjectStatus.bind(null, project.id, 'archived')}>
                <button type="submit">Archive</button>
              </form>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
