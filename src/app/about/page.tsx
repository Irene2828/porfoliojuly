import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientWrapper from '../components/ClientWrapper';
import AboutStories from './AboutStories';
import './page.css';

export const metadata = {
  title: 'About Me — Iryna Sheremeta',
  description: 'The story of how I became a product designer and builder.',
};

export default function AboutPage() {
  return (
    <ClientWrapper>
      <div className="v2-theme about-page-wrapper">
        <Header />

        <main>
          <AboutStories />

          <div className="about-cta-section prefooter-section" style={{ backgroundColor: '#f7f6f5', padding: '80px 24px' }}>
            <h2 className="about-cta-text" style={{ color: '#2b3038', WebkitTextFillColor: '#2b3038' }}>Need a creative technologist? I'm here. Let's work.</h2>
            <div className="prefooter-cta-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '0rem', marginBottom: '2.5rem', justifyContent: 'center' }}>
              <a
                href="mailto:iryna@irynasheremeta.com"
                className="btn btn-primary btn-primary-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
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
