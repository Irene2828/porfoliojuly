import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientWrapper from '../components/ClientWrapper';
import AboutStories from './AboutStories';
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
            <h2 className="about-cta-text">Need a creative technologist? <span className="about-cta-highlight">I'm here. Let's work.</span></h2>
            <div className="prefooter-cta-container">
              <a
                href="mailto:iryna@irynasheremeta.com"
                className="btn btn-primary btn-primary-outline about-cta-btn"
              >
                <span>SEND YOUR PROBLEM MY WAY</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ClientWrapper>
  );
}
