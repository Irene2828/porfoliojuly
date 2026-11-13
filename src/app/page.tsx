import Header from './components/Header';
import HeroV2 from './v2/components/HeroV2';
import ProjectsV2 from './v2/components/ProjectsV2';
import ServicesV2 from './v2/components/ServicesV2';
import HowItWorks from './v2/components/HowItWorks';
import ProcessSection from './v2/components/ProcessSection';
import PackagesSection from './v2/components/PackagesSection';
import AiShowcase from './v2/components/AiShowcase';
import FaqSection from './v2/components/FaqSection';
import Footer from './components/Footer';
import ClientWrapper from './components/ClientWrapper';

export default function HomePage() {

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
              <ProjectsV2 />
            </div>
          </div>
        </section>

        {/* How It Works (3 simple steps process) */}
        <HowItWorks />

        {/* Process Section */}
        <ProcessSection />

        {/* Why Hire Someone If There's AI — showcase */}
        <AiShowcase />

        {/* Packages Section */}
        <PackagesSection />

        <FaqSection />

        {/* Minimal subtle footer */}
        <Footer />
      </div>
    </ClientWrapper>
  );
}
