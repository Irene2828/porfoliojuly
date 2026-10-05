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

        {/* Cases Section Header */}
        <section id="cases-section" style={{ padding: '5.1rem 0 0 0', backgroundColor: '#ffffff' }}>
          <div className="container" style={{ textAlign: 'center', marginBottom: '0.875rem' }}>
            {/* Short decor line directly above Cases heading */}
            <div style={{ 
              width: '60px', 
              height: '1px', 
              backgroundColor: '#0b0c10', 
              margin: '0 auto 2.5rem auto', 
              opacity: 0.6 
            }} />

            <h2 style={{ 
              fontFamily: "var(--font-serif)",
              fontSize: 'clamp(29px, 4.8vw, 46px)', 
              color: '#3b7ac8', 
              fontWeight: 500,
              lineHeight: 1.25,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              width: '100%',
              margin: '0 auto 16px auto',
              WebkitTextStroke: '0.35px #3b7ac8'
            }}>
              Featured Cases
            </h2>
            <p style={{
              fontFamily: "var(--font-sans), Inter, sans-serif",
              fontSize: '18px',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.6,
              color: '#3b7ac8',
              opacity: 1,
              maxWidth: '640px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              custom websites &amp; ai tools built end-to-end.
            </p>
          </div>

          {/* Frame starting under subline with dot matrix pattern */}
          <div 
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

        {/* Process Section */}
        <ProcessSection />

        {/* Editorial Statement */}
        <EditorialStatement />
      </div>
    </ClientWrapper>
  );
}
