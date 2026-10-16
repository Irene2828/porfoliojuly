import Header from './components/Header';
import HeroV2 from './v2/components/HeroV2';
import ProjectsV2 from './v2/components/ProjectsV2';
import ServicesV2 from './v2/components/ServicesV2';
import HowItWorks from './v2/components/HowItWorks';
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

        {/* Cases Section */}
        <section id="cases-section" className="cases-section-wrapper" style={{ padding: '5.1rem 0 0 0', backgroundColor: '#ffffff' }}>
           {/* Frame starting under subline with dot matrix pattern */}
          <div className="cases-section-frame"
            style={{
              backgroundColor: '#ffffff',
              width: '100%',
              padding: '2.25rem 0',
              marginBottom: '3.3rem'
            }}
          >
            <div style={{ width: '100%', margin: '0', padding: '0' }}>
              <ProjectsV2 initialProjects={publishedProjects as any} />
            </div>
          </div>
        </section>

        {/* How It Works (3 simple steps process) */}
        <HowItWorks />

        {/* Process Section */}
        <ProcessSection />

        {/* Editorial Statement */}
        <EditorialStatement />
      </div>
    </ClientWrapper>
  );
}
