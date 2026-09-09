import Header from './components/Header';
import HeroV2 from './v2/components/HeroV2';
import ProjectsV2 from './v2/components/ProjectsV2';
import ServicesV2 from './v2/components/ServicesV2';

import ProcessSection from './v2/components/ProcessSection';
import EditorialStatement from './v2/components/EditorialStatement';
import ClientWrapper from './components/ClientWrapper';

import { db } from '@/db';
import { projects, screens, annotations } from '@/db/schema';
import { eq, asc } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
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
      <div className="v2-theme">
        <Header />
        <HeroV2 />

        <ServicesV2 />

        {/* Short decor line directly above Cases heading */}
        <div style={{ 
          width: '60px', 
          height: '1px', 
          backgroundColor: '#0b0c10', 
          margin: '10rem auto 2rem auto', 
          opacity: 0.6 
        }} />

        {/* Cases Section Header */}
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <h2 style={{ 
            fontFamily: "'Times New Roman', Times, Georgia, serif",
            fontSize: 'clamp(24px, 4vw, 38px)', 
            color: '#5a9ad4', 
            fontWeight: 500,
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
            textAlign: 'center',
            margin: '0 auto'
          }}>
            / Featured Cases /
          </h2>
        </div>

        <div style={{ marginBottom: '8rem' }}>
          <ProjectsV2 initialProjects={publishedProjects as any} />
        </div>

        {/* Process Section */}
        <ProcessSection />

        {/* Editorial Statement */}
        <EditorialStatement />
      </div>
    </ClientWrapper>
  );
}
