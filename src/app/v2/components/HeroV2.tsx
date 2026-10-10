'use client';

import '@/app/components/Hero.css';
import heroImage from '@/app/assets/test.webp';

export default function HeroV2() {
  return (
    <section className="section hero-section" id="home">
      {/* Background Split */}
      <div className="hero-bg-split" />
      <div className="container hero-container" style={{ position: 'relative' }}>
        {/* Geometric support layer (z-index 1, under content z-10) */}
        <div className="hero-decor-layer hide-on-mobile" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', opacity: 0.7 }}>
          {/* Right & center decor squares */}
          <div style={{ position: 'absolute', width: '160px', height: '100px', border: '1.5px dashed rgba(235, 235, 237, 0.45)', top: '-25px', left: '47%' }} />
          <div style={{ position: 'absolute', width: '40px', height: '40px', border: '1.5px solid rgba(235, 235, 237, 0.45)', top: '-10px', left: '53%' }} />
          <div style={{ position: 'absolute', width: '120px', height: '120px', border: '2px solid rgba(235, 235, 237, 0.55)', top: '60px', left: '43%' }} />
        </div>

        {/* Left side (now visually Left): Content, Headline frame, and CTAs */}
        <div className="hero-content">
          <div className="hero-copy-motion">
            <div className="hero-name-group" style={{ position: 'relative' }}>
              <div className="hero-connector-line"></div>
              <div
                className="hero-text"
                style={{ transform: 'translateY(-0.4rem)' }}
              >
                <h1 className="title-serif hero-statement hero-statement-anim">
                  Looking for a <span className="br-mobile"><br /></span><span className="premium-hover"><span className="word-custom">custom</span></span> <span className="premium-hover">website</span> <span className="br-desktop"><br /></span>or <span className="br-mobile"><br /></span>an <span className="premium-hover"><span className="word-internal">internal</span> AI tool</span>?
                </h1>
                <p className="hero-frame-paragraph hero-paragraph-anim" style={{ marginTop: '1.7rem', fontSize: '1.10rem', lineHeight: '1.75', color: '#333842', maxWidth: '100%', fontWeight: 400 }}>
                  I design and build custom digital products end-to-end for business <span className="br-desktop"><br /></span>and professionals &mdash; <span style={{ fontStyle: 'italic' }}>from figuring out what solution you need to <span className="br-desktop"><br /></span>shipping a working product.</span>
                </p>
              </div>
              <div
                className="hero-ctas hero-ctas-outside hero-ctas-anim"
                style={{ marginTop: '3.8rem' }}
              >
                <a href="#contact" className="btn btn-primary btn-primary-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>BOOK MY SERVICES</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
                <a href="#process" className="btn btn-secondary btn-secondary-stacked">
                  SEE WORK EXAMPLES <span className="arrow">↓</span>
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
            {/* Decor removed as requested */}
            <div className="hero-image-brackets"></div>
            <div className="hero-image-brackets-left"></div>
            <img src={heroImage.src} alt="Iryna Sheremeta" className="hero-image" />
            <div className="hero-dot-overlay"></div>
          </div>
          
          <div className="mobile-hero-name-badge">
            <span style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif', fontSize: '12px', fontWeight: 600, color: '#000000', letterSpacing: '0.15em', textTransform: 'uppercase', lineHeight: '1.2' }}>IRYNA SHEREMETA</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 400, color: '#5C6672', lineHeight: '1.2' }}>/ Web &amp; AI product builder /</span>
          </div>
          <span className="hero-hover-surface" aria-hidden="true"></span>
          

        </div>
      </div>
      <div className="hero-bottom-hairline-line"></div>
    </section>
  );
}
