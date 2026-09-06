import Header from './components/Header';
import HeroV2 from './v2/components/HeroV2';
import Projects from './components/Projects';
import Services from './components/Services';
import ProcessSection from './v2/components/ProcessSection';
import EditorialStatement from './v2/components/EditorialStatement';
import SectionDivider from './components/SectionDivider';
import FaceDivider from './components/FaceDivider';
import ClientWrapper from './components/ClientWrapper';

import { db } from '@/db';
import { projects, screens, annotations } from '@/db/schema';
import { eq, asc } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  // Fetch published projects with nested screens and annotations
  const publishedProjects = await db.query.projects.findMany({
    where: eq(projects.status, 'published'),
    orderBy: [asc(projects.displayOrder)],
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

  return (
    <ClientWrapper>
      <Header />
      <HeroV2 />
      <SectionDivider theme="light" />


      <Projects initialProjects={publishedProjects as any} />

      <SectionDivider theme="light" label="EXPECTATIONS" align="right" />
      <Services />

      <ProcessSection />
      <EditorialStatement />
      <FaceDivider />
    </ClientWrapper>
  );
}
