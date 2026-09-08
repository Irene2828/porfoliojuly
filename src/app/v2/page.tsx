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

        {/* Edge-to-Edge Divider 1 above Services (5px height, pale blue 30% opacity) */}
        <div
          style={{
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            height: '5px',
            backgroundColor: 'rgba(75, 133, 187, 0.3)',
            margin: '6rem 0 0 0',
            position: 'relative',
            zIndex: 10
          }}
        />
        <ServicesV2 />

        {/* Edge-to-Edge Divider 2 above Projects (5px height, pale blue 30% opacity) */}
        <div
          style={{
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            height: '5px',
            backgroundColor: 'rgba(75, 133, 187, 0.3)',
            margin: '6rem 0 2.5rem 0',
            position: 'relative',
            zIndex: 10
          }}
        />

        {/* Short decor line directly above Recent Projects heading */}
        <div style={{ 
          width: '60px', 
          height: '1px', 
          backgroundColor: '#0b0c10', 
          margin: '0 auto 2.5rem auto', 
          opacity: 0.6 
        }} />

        {/* Recent Projects Section Header */}
        <SectionDivider theme="light" label="Recent Projects" align="center" />
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
