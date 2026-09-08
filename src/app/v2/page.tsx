import Header from '../components/Header';
import HeroV2 from './components/HeroV2';
import ProjectsV2 from './components/ProjectsV2';
import ServicesV2 from './components/ServicesV2';

import ProcessSection from './components/ProcessSection';
import EditorialStatement from './components/EditorialStatement';
import SectionDivider from '../components/SectionDivider';
import FaceDivider from '../components/FaceDivider';
import ClientWrapper from '../components/ClientWrapper';

import { db } from '@/db';
import { projects, screens, annotations } from '@/db/schema';
import { eq, asc } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export default async function V2Page() {
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

        {/* Projects Section Header Banner (100px edge-to-edge black divider) */}
        <div 
          style={{ 
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            height: '100px',
            backgroundColor: '#121212',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '6rem 0 4rem 0',
            position: 'relative',
            zIndex: 10
          }}
        >
          <h2 style={{
            fontFamily: "'Times New Roman', Times, Georgia, serif",
            fontSize: 'clamp(26px, 4vw, 36px)',
            color: '#ffffff',
            fontWeight: 500,
            fontStyle: 'italic',
            letterSpacing: '-0.01em',
            margin: 0,
            textAlign: 'center'
          }}>
            / Recent Projects /
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
