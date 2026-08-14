import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import SectionDivider from './components/SectionDivider';
import FaceDivider from './components/FaceDivider';
import Footer from './components/Footer';
import ClientWrapper from './components/ClientWrapper';

import { db } from '@/db';
import { projects, screens, annotations } from '@/db/schema';
import { eq, asc } from 'drizzle-orm';

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
      <Hero />
      <div className="page-section-divider page-section-divider-work">
        <SectionDivider label="Selected Work" />
      </div>
      <Projects initialProjects={publishedProjects as any} />
      <div className="page-section-divider page-section-divider-large">
        <SectionDivider label="Capabilities" />
      </div>
      <Services />
      <div className="page-section-divider page-section-divider-connect">
        <SectionDivider label="Let's Connect" />
      </div>
      <FaceDivider />
      <Footer />
    </ClientWrapper>
  );
}
