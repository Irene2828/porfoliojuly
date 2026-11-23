import type { Metadata } from 'next';
import Header from '../components/Header';
import HeroV2 from '../v2/components/HeroV2';
import HowItWorks from '../v2/components/HowItWorks';
import PackagesSection from '../v2/components/PackagesSection';
import FaqSection from '../v2/components/FaqSection';
import EditorialStatement from '../v2/components/EditorialStatement';
import Footer from '../components/Footer';
import ClientWrapper from '../components/ClientWrapper';
import ToolsPageSections from './ToolsPageSections';

export const metadata: Metadata = {
  title: 'Tools & automations — Iryna Sheremeta',
  description: 'Custom tools and automations built around the routines your team repeats.',
  alternates: {
    canonical: 'https://www.irynasheremeta.com/tools',
  },
};

export default function ToolsPage() {
  return (
    <ClientWrapper>
      <div className="v2-theme">
        <Header />
        <HeroV2 variant="tools" />
        <ToolsPageSections />
        <HowItWorks variant="tools" />
        <div id="packages" style={{ scrollMarginTop: '88px' }}>
          <PackagesSection mode="tools" />
        </div>
        <FaqSection variant="tools" />
        <EditorialStatement variant="tools" />
        <Footer variant="ticker" />
      </div>
    </ClientWrapper>
  );
}
