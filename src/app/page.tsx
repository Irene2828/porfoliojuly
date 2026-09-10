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
          margin: '7rem auto 2rem auto', 
          opacity: 0.6 
        }} />

        {/* Cases Section Header (Clean Background) */}
        <section id="cases-section" style={{ padding: '2rem 0 0 0', backgroundColor: '#ffffff' }}>
          <div className="container" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ 
              fontFamily: "'Times New Roman', Times, Georgia, serif",
              fontSize: 'clamp(24px, 4vw, 38px)', 
              color: '#5a9ad4', 
              fontWeight: 500,
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
              textAlign: 'center',
              margin: '0 auto 0.75rem auto'
            }}>
              / Featured Cases /
            </h2>
            <p style={{
              fontFamily: "var(--font-sans), Inter, sans-serif",
              fontSize: '1.175rem',
              fontWeight: 500,
              lineHeight: 1.6,
              color: '#2a3036',
              maxWidth: '640px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              Selected digital products, custom web tools, and AI solutions built end-to-end.
            </p>
          </div>

          {/* Frame starting under subline with dot matrix pattern & subtle top/bottom borders */}
          <div 
            style={{
              backgroundColor: '#ffffff',
              backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.065) 1.25px, transparent 1.25px)',
              backgroundSize: '28px 28px',
              borderTop: '1px solid #c0d8fc',
              borderBottom: '1px solid #c0d8fc',
              width: '100vw',
              marginLeft: 'calc(-50vw + 50%)',
              marginRight: 'calc(-50vw + 50%)',
              padding: '4.5rem 0',
              marginBottom: '2.8rem'
            }}
          >
            <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
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
