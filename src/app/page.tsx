import type { Metadata } from 'next';
import Header from './components/Header';
import HeroV2 from './v2/components/HeroV2';
import ProjectsV2 from './v2/components/ProjectsV2';
import HowItWorks from './v2/components/HowItWorks';
import ProcessSection from './v2/components/ProcessSection';
import PackagesSection from './v2/components/PackagesSection';
import FaqSection from './v2/components/FaqSection';
import { HireClosing } from './hire/HireSections';
import Footer from './components/Footer';
import ClientWrapper from './components/ClientWrapper';

export const metadata: Metadata = {
  title: 'Iryna Sheremeta — Custom Websites for Businesses',
  description:
    'Custom websites designed and built around your business: research first, then a site that explains what you do, builds trust, and turns visitors into inquiries. Montreal, working remotely across Canada.',
  alternates: {
    canonical: 'https://www.irynasheremeta.com/',
  },
  openGraph: {
    title: 'Iryna Sheremeta — Custom Websites for Businesses',
    description:
      'Custom websites designed and built around your business — research first, no templates, no WordPress.',
    url: 'https://www.irynasheremeta.com/',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <ClientWrapper>
      <div className="v2-theme">
        <Header />
        <HeroV2 variant="websites" />

        {/* Recent projects: BuyUkrainian, Isabelle Guertin, Terry Fox poster tool */}
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
              <ProjectsV2 recentProjects />
            </div>
          </div>
        </section>

        {/* How I build (3 simple steps process) */}
        <HowItWorks />

        {/* Client feedback — Isabelle Guertin's review */}
        <ProcessSection />

        <div id="packages" style={{ scrollMarginTop: '88px' }}>
          <PackagesSection mode="website" />
        </div>

        <FaqSection variant="websites" />

        {/* Closing — prefooter with email CTA */}
        <HireClosing />

        <Footer />
      </div>
    </ClientWrapper>
  );
}
