import type { Metadata } from 'next';
import Header from '../components/Header';
import HeroV2 from '../v2/components/HeroV2';
import ProjectsV2 from '../v2/components/ProjectsV2';
import Footer from '../components/Footer';
import ClientWrapper from '../components/ClientWrapper';
import { CaseStories, HireClosing, HowIUseAI } from './HireSections';

export const metadata: Metadata = {
  title: 'Iryna Sheremeta — Product Designer & AI Builder',
  description:
    'For employers: live products designed and built end to end — an internal poster tool used by Terry Fox Foundation teams, a live map of Ukrainian products in Canada, and more. Remote, Canada.',
  alternates: {
    canonical: 'https://www.irynasheremeta.com/hire',
  },
  openGraph: {
    title: 'Iryna Sheremeta — Product Designer & AI Builder',
    description:
      'Live products designed and built end to end — not mockups. Remote, Canada.',
    url: 'https://www.irynasheremeta.com/hire',
    type: 'website',
  },
};

export default function HirePage() {
  return (
    <ClientWrapper>
      <div className="v2-theme">
        <Header />
        <HeroV2 variant="hire" />

        {/* Projects — same section as the homepage */}
        <section id="cases-section" className="cases-section-wrapper" style={{ padding: '5.1rem 0 0 0', backgroundColor: '#ffffff' }}>
          <div className="cases-section-frame"
            style={{
              backgroundColor: '#ffffff',
              width: '100%',
              padding: '2.55rem 0',
              marginBottom: '2.55rem'
            }}
          >
            <div style={{ width: '100%', margin: '0', padding: '0' }}>
              <ProjectsV2 />
            </div>
          </div>
        </section>

        {/* Case stories: Terry Fox + BuyUkrainian, problem to live use */}
        <CaseStories />

        {/* How I use AI — her story, replaces the homepage's How It Works */}
        <HowIUseAI />

        {/* Closing — recruiter version of the homepage prefooter */}
        <HireClosing />

        <Footer />
      </div>
    </ClientWrapper>
  );
}
