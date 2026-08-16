import Link from 'next/link';
import { asc } from 'drizzle-orm';

import { db } from '@/db';
import { projects } from '@/db/schema';

import AdminAgentConsole from './components/AdminAgentConsole';

export const dynamic = 'force-dynamic';

export default async function AdminProjectsPage() {
  const projectList = await db.query.projects.findMany({
    orderBy: [asc(projects.displayOrder)],
  });

  return (
    <section className="admin-page">
      <AdminAgentConsole
        projects={projectList.map((project) => ({
          id: project.id,
          title: project.title,
          status: project.status,
        }))}
      />
    </section>
  );
}
