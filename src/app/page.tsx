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

        {/* Cases Section Header */}
        <section id="cases-section" style={{ padding: '5.1rem 0 0 0', backgroundColor: '#ffffff' }}>
          <div className="container" style={{ textAlign: 'center', marginBottom: '0.875rem' }}>
            {/* Short decor line directly above Cases heading */}
            <div style={{ 
              width: '60px', 
              height: '1px', 
              backgroundColor: 'var(--accent, #EC9177)', 
              margin: '0 auto 2.5rem auto', 
              opacity: 0.9 
            }} />

            <h2 style={{ 
              fontFamily: "var(--font-heading)",
              fontSize: 'clamp(28px, 4.4vw, 42px)', 
              color: 'var(--color-heading-silver)', 
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              width: '100%',
              margin: '0 auto 14px auto',
              WebkitTextStroke: '0'
            }}>
              Examples of my work
            </h2>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: '17px',
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#333842',
              opacity: 0.9,
              maxWidth: '640px',
              margin: '0 auto',
              textAlign: 'center',
              letterSpacing: '-0.01em'
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
