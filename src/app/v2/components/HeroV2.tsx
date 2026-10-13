'use client';

import '@/app/components/Hero.css';
import heroImage from '@/app/assets/test.webp';

export default function HeroV2() {
  return (
    <section className="section hero-section" id="home">
      {/* Background Split */}
      <div className="hero-bg-split">
        {/* Off-white concentric circled graphics matching Services grey bg style */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
          <div style={{ position: 'absolute', width: '420px', height: '420px', borderRadius: '50%', border: '1.5px solid rgba(255, 255, 255, 0.55)', top: '10%', right: '5%' }} />
          <div style={{ position: 'absolute', width: '310px', height: '310px', borderRadius: '50%', border: '1.5px dashed rgba(255, 255, 255, 0.65)', top: '17%', right: '9%' }} />
          <div style={{ position: 'absolute', width: '200px', height: '200px', borderRadius: '50%', border: '1.5px solid rgba(255, 255, 255, 0.45)', top: '24%', right: '13%' }} />
        </div>
      </div>

      <div className="container hero-container" style={{ position: 'relative' }}>
        {/* Left side (now visually Left): Content, Headline frame, and CTAs */}
        <div className="hero-content">
          <div className="hero-copy-motion" style={{ position: 'relative' }}>
            <div className="hero-name-group" style={{ position: 'relative' }}>
              <div
                className="hero-text"
                style={{ transform: 'translateY(-0.4rem)' }}
              >
                <h1 className="hero-statement hero-statement-anim">
                  <span className="headline-line">Looking for a <span className="br-mobile"><br /></span><span className="headline-emphasis">custom</span> website</span> <span className="br-desktop"><br /></span>
                  <span className="headline-line">or <span className="br-mobile"><br /></span>an <span className="headline-emphasis">internal</span> AI tool?</span>
                </h1>
                <p className="hero-frame-paragraph hero-paragraph-anim" style={{ marginTop: '1.7rem', fontSize: '1.10rem', lineHeight: '1.75', color: '#333842', maxWidth: '100%', fontWeight: 400 }}>
                  I design and build custom digital products end-to-end <span className="br-desktop"><br /></span>
                  for business and professionals &mdash; <span style={{ fontStyle: 'italic' }}>from figuring out what solution you need <span className="br-desktop"><br /></span>
                  to shipping a working product.</span>
                </p>
              </div>
              <div
                className="hero-ctas hero-ctas-outside hero-ctas-anim"
                style={{ marginTop: '3.8rem' }}
              >
                <a href="#contact" className="btn btn-primary btn-primary-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>BOOK MY SERVICES</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent, #EC9177)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
                <a href="#process" className="btn btn-secondary btn-secondary-stacked">
                  SEE WORK EXAMPLES <span className="arrow" style={{ color: 'var(--accent, #EC9177)' }}>↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side (now visually Right): Image / Portrait on white background */}
        <div
          className="hero-image-wrapper"
        >
          <div className="hero-image-container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="hero-image-brackets"></div>
            <div className="hero-image-brackets-left"></div>
            <img src={heroImage.src} alt="Iryna Sheremeta" className="hero-image" />
            <div className="hero-dot-overlay"></div>
          </div>

          {/* 3 Labels Under Image */}
          <div 
            className="hero-image-labels"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '11px',
              marginTop: '1.25rem',
              position: 'relative',
              zIndex: 3
            }}
          >
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '14.5px', fontWeight: 500, letterSpacing: '0.04em', color: '#3d4454' }}>
              Designer
            </span>
            <span style={{ color: '#888888', fontSize: '12px', opacity: 0.5 }}>•</span>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '14.5px', fontWeight: 500, letterSpacing: '0.04em', color: '#3d4454' }}>
              Builder
            </span>
            <span style={{ color: '#888888', fontSize: '12px', opacity: 0.5 }}>•</span>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '14.5px', fontWeight: 500, letterSpacing: '0.04em', color: '#3d4454' }}>
              AI consultant
            </span>
          </div>
          
          <span className="hero-hover-surface" aria-hidden="true"></span>
        </div>
      </div>
      <div className="hero-bottom-hairline-line"></div>
    </section>
  );
}
