'use client';

import '@/app/components/Hero.css';
import heroImage from '@/app/assets/test.webp';

export default function HeroV2() {
  return (
    <section className="section hero-section" id="home" style={{ backgroundColor: '#121316', background: '#121316' }}>
      {/* Off-black matte theme rules */}
      <style>{`
        .hero-section,
        .v2-theme .hero-section {
          background: #121316 !important;
          background-color: #121316 !important;
        }
        .hero-bg-split {
          display: none !important;
        }
        .v2-theme .hero-statement,
        .hero-statement {
          color: #f7d6d0 !important;
          -webkit-text-fill-color: #f7d6d0 !important;
        }
        .v2-theme .headline-mockup-bold,
        .headline-mockup-bold {
          font-weight: 700 !important;
          letter-spacing: 0.025em !important;
          color: #f795a9 !important;
          -webkit-text-fill-color: #f795a9 !important;
        }
        .v2-theme .headline-mockup-light,
        .headline-mockup-light {
          font-weight: 300 !important;
          letter-spacing: normal !important;
          color: #f7d6d0 !important;
          -webkit-text-fill-color: #f7d6d0 !important;
        }
        .v2-theme .headline-light,
        .headline-light {
          font-weight: 400 !important;
          color: #f7d6d0 !important;
          -webkit-text-fill-color: #f7d6d0 !important;
        }
        .v2-theme .hero-frame-paragraph,
        .hero-frame-paragraph {
          color: #f7d6d0 !important;
          -webkit-text-fill-color: #f7d6d0 !important;
        }
        .v2-theme .hero-frame-paragraph .hero-body-bold,
        .hero-frame-paragraph .hero-body-bold,
        .hero-body-bold {
          color: #f7d6d0 !important;
          -webkit-text-fill-color: #f7d6d0 !important;
          font-weight: 700 !important;
        }
        .hero-offer-item {
          display: inline;
          cursor: pointer;
          text-decoration: underline transparent;
          text-decoration-thickness: 1.5px;
          text-underline-offset: 4.5px;
          transition: text-decoration-color 0.22s ease;
        }
        .hero-offer-item:hover {
          text-decoration-color: #f7d6d0;
        }
        @media (max-width: 900px) {
          .hero-text .hero-frame-paragraph {
            text-align: left !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .v2-theme .hero-image-wrapper,
          .hero-image-wrapper {
            padding-top: 3.8rem !important;
            padding-bottom: 2.2rem !important;
            margin-bottom: 1.5rem !important;
          }
          .v2-theme .hero-content,
          .hero-content {
            margin-top: 0.4rem !important;
          }
        }
      `}</style>

      <div className="container hero-container" style={{ position: 'relative' }}>
        {/* Left side (now visually Left): Content, Headline frame, and CTAs */}
        <div className="hero-content" style={{ position: 'relative' }}>
          <div className="hero-copy-motion" style={{ position: 'relative', zIndex: 1 }}>
            <div className="hero-name-group" style={{ position: 'relative', width: 'fit-content', maxWidth: '100%' }}>
              <div
                className="hero-text"
                style={{ transform: 'translateY(-0.4rem)' }}
              >
                <h1 className="hero-statement hero-statement-anim" style={{ display: 'flex', flexDirection: 'column', gap: '0px', lineHeight: '1.22', color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>
                  {/* Desktop Headline (2 lines) */}
                  <span className="headline-desktop" style={{ color: '#f7d6d0' }}>
                    <span className="headline-line headline-light" style={{ color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>
                      <strong className="headline-mockup-bold" style={{ fontWeight: 700, letterSpacing: '0.025em', color: '#f795a9', WebkitTextFillColor: '#f795a9' }}>Websites</strong>{' '}
                      <span className="headline-mockup-light" style={{ fontWeight: 300, color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>that work harder.</span>
                    </span>
                    <span className="headline-line headline-light" style={{ color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>
                      <strong className="headline-mockup-bold" style={{ fontWeight: 700, letterSpacing: '0.025em', color: '#f795a9', WebkitTextFillColor: '#f795a9' }}>Tools</strong>{' '}
                      <span className="headline-mockup-light" style={{ fontWeight: 300, color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>that save hours.</span>
                    </span>
                  </span>

                  {/* Mobile Headline (3 lines, left-aligned) */}
                  <span className="headline-mobile" style={{ gap: '0px', lineHeight: 1.05, color: '#f7d6d0' }}>
                    <span className="headline-line" style={{ lineHeight: 1.05, color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>
                      <strong className="headline-mockup-bold" style={{ fontWeight: 700, letterSpacing: '0.025em', color: '#f795a9', WebkitTextFillColor: '#f795a9' }}>Websites</strong>{' '}
                      <span className="headline-mockup-light" style={{ fontWeight: 300, color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>that work</span>
                    </span>
                    <span className="headline-line" style={{ lineHeight: 1.05, color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>
                      <span className="headline-mockup-light" style={{ fontWeight: 300, color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>harder.</span>
                    </span>
                    <span className="headline-line headline-pair-gap" style={{ lineHeight: 1.05, marginTop: '0.45rem', color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>
                      <strong className="headline-mockup-bold" style={{ fontWeight: 700, letterSpacing: '0.025em', color: '#f795a9', WebkitTextFillColor: '#f795a9' }}>Tools</strong>{' '}
                      <span className="headline-mockup-light" style={{ fontWeight: 300, color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>that save hours.</span>
                    </span>
                  </span>
                </h1>
                <p className="hero-frame-paragraph hero-paragraph-anim" style={{ marginTop: '1.7rem', fontSize: '1.213rem', lineHeight: '1.75', color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0', maxWidth: '100%', fontWeight: 400, opacity: 1 }}>
                  <strong className="hero-body-bold" style={{ fontWeight: 700, color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>You tell me what&apos;s not working. I take it from there</strong>{' '}—{' '}
                  <span className="hero-offer-item">a modern website</span>,{' '}
                  <span className="hero-offer-item">a custom tool</span>, or{' '}
                  <span className="hero-offer-item">a smarter workflow</span>,{' '}
                  <em style={{ fontStyle: 'italic', color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>built around what your business actually needs.</em>
                </p>
              </div>

              {/* CTAs: right-aligned flush with the content block */}
              <div
                className="hero-ctas hero-ctas-outside hero-ctas-anim"
                style={{ 
                  width: '100%', 
                  maxWidth: '100%',
                  display: 'flex', 
                  justifyContent: 'flex-end', 
                  alignItems: 'center', 
                  gap: '1.5rem', 
                  marginTop: '3.9rem' 
                }}
              >
                <a href="#contact" className="btn btn-primary btn-primary-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>SEND YOUR PROBLEM MY WAY</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
                <a href="#cases" className="btn btn-secondary btn-secondary-stacked">
                  SEE WHAT I’VE BUILT <span className="arrow" style={{ color: '#e5e7eb' }}>↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side (now visually Right): Image with Concentric Geometric Rings & Hugging Labels */}
        <div className="hero-image-wrapper">
          <div className="hero-image-container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="hero-image-brackets"></div>
            <div className="hero-image-brackets-left"></div>
            <img src={heroImage.src} alt="Iryna Sheremeta" className="hero-image" style={{ position: 'relative', zIndex: 2 }} />
            <div className="hero-dot-overlay"></div>

            {/* Geometric square shapes: Bottom-Left of Image */}
            <div 
              className="hero-shape-bottom-left" 
              aria-hidden="true" 
              style={{ 
                position: 'absolute', 
                bottom: '-35px', 
                left: '-45px', 
                width: '200px', 
                height: '200px', 
                pointerEvents: 'none', 
                zIndex: 1 
              }}
            >
              <svg 
                width="200" 
                height="200" 
                viewBox="0 0 200 200" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ 
                  width: '100%', 
                  height: '100%',
                  maskImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.15) 100%)',
                  WebkitMaskImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.15) 100%)'
                }}
              >
                {/* Outer Rectangle - Lined (solid), Pale subtle stroke */}
                <rect x="6" y="6" width="188" height="188" stroke="rgba(247, 214, 208, 0.45)" strokeWidth="1.2" strokeOpacity="0.4" />
                {/* Middle Rectangle - Dashed, Pale subtle stroke */}
                <rect x="36" y="36" width="128" height="128" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1.2" strokeDasharray="4 4" strokeOpacity="0.35" />
                {/* Inner Rectangle - Lined (solid), Pale subtle stroke */}
                <rect x="66" y="66" width="68" height="68" stroke="rgba(247, 214, 208, 0.35)" strokeWidth="1.2" strokeOpacity="0.3" />
              </svg>
            </div>

            {/* Geometric square shapes: Top-Right of Image (Mirror looking) */}
            <div 
              className="hero-shape-top-right" 
              aria-hidden="true" 
              style={{ 
                position: 'absolute', 
                top: '-35px', 
                right: '-45px', 
                width: '200px', 
                height: '200px', 
                pointerEvents: 'none', 
                zIndex: 1 
              }}
            >
              <svg 
                width="200" 
                height="200" 
                viewBox="0 0 200 200" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ 
                  width: '100%', 
                  height: '100%',
                  maskImage: 'linear-gradient(315deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.15) 100%)',
                  WebkitMaskImage: 'linear-gradient(315deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.15) 100%)'
                }}
              >
                {/* Outer Rectangle - Lined (solid), Pale subtle stroke */}
                <rect x="6" y="6" width="188" height="188" stroke="rgba(247, 214, 208, 0.45)" strokeWidth="1.2" strokeOpacity="0.4" />
                {/* Middle Rectangle - Dashed, Pale subtle stroke */}
                <rect x="36" y="36" width="128" height="128" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1.2" strokeDasharray="4 4" strokeOpacity="0.35" />
                {/* Inner Rectangle - Lined (solid), Pale subtle stroke */}
                <rect x="66" y="66" width="68" height="68" stroke="rgba(247, 214, 208, 0.35)" strokeWidth="1.2" strokeOpacity="0.3" />
              </svg>
            </div>


            {/* Label 1: Bottom badge "Product Designer & Builder" at bottom of bottom-left shape */}
            <div className="hero-badge-anchor badge-anchor-websites" style={{ position: 'absolute', bottom: '-46px', left: '-15px', zIndex: 10 }}>
              <div className="hero-ring-badge badge-designer" style={{
                transform: 'none',
                padding: '4px 12px',
                borderRadius: '20px',
                background: 'rgba(24, 26, 32, 0.94)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(247, 214, 208, 0.45)',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)',
                fontFamily: 'var(--font-heading)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: '#f1f5f9',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                whiteSpace: 'nowrap',
                pointerEvents: 'auto'
              }}>
                {/* Builder Icon (Wrench / Tool) */}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f7d6d0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                Product Designer &amp; Builder
              </div>
            </div>

            {/* Label 2: Top badge "Iryna Sheremeta" at top of top-right shape */}
            <div className="hero-badge-anchor badge-anchor-products" style={{ position: 'absolute', top: '-46px', right: '-15px', zIndex: 10 }}>
              <div className="hero-ring-badge badge-builder" style={{
                transform: 'none',
                padding: '4px 12px',
                borderRadius: '20px',
                background: 'rgba(24, 26, 32, 0.94)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(247, 214, 208, 0.45)',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)',
                fontFamily: 'var(--font-heading)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: '#f1f5f9',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                whiteSpace: 'nowrap',
                pointerEvents: 'auto'
              }}>
                {/* Profile Icon (User / Person) */}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f7d6d0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Iryna Sheremeta
              </div>
            </div>
          </div>
          
          <span className="hero-hover-surface" aria-hidden="true"></span>
        </div>
      </div>
      <div className="hero-bottom-hairline-line"></div>
    </section>
  );
}
