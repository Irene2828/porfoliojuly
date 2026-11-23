import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientWrapper from '../components/ClientWrapper';
import AboutStories from './AboutStories';
import AboutCtaButton from './AboutCtaButton';
import './page.css';

export const metadata = {
  title: 'My Story — Iryna Sheremeta',
  description: 'The story of how I became a product designer and builder.',
};

export default function AboutPage() {
  return (
    <ClientWrapper>
      <div className="v2-theme about-page-wrapper">
        <Header />

        <main>
          <AboutStories />

          <div className="about-cta-section prefooter-section">
            <h2 className="about-cta-text">
              <span className="about-cta-lead">Need your problem solved by someone who gets business, design and tech?</span>{' '}
              <span className="about-cta-highlight" style={{ display: 'block' }}>I’d love to help.</span>
            </h2>
            <div className="prefooter-cta-container">
              <AboutCtaButton />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ClientWrapper>
  );
}
