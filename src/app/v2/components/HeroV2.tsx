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
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
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
          color: #e2e4e9 !important;
          -webkit-text-fill-color: #e2e4e9 !important;
        }
        .v2-theme .hero-frame-paragraph .hero-body-bold,
        .hero-frame-paragraph .hero-body-bold,
        .hero-body-bold {
          color: #e2e4e9 !important;
          -webkit-text-fill-color: #e2e4e9 !important;
          font-weight: 700 !important;
        }
        .v2-theme .hero-frame-paragraph em,
        .hero-frame-paragraph em {
          color: #e2e4e9 !important;
          -webkit-text-fill-color: #e2e4e9 !important;
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
            margin-top: 1.4rem !important; /* headline-body spacing, tightened 30% */
          }
          .v2-theme .hero-image-wrapper,
          .hero-image-wrapper {
            padding-top: 1.2rem !important;
            padding-bottom: 0rem !important; /* tight: text pulled up toward image */
            margin-bottom: 0rem !important;
          }
          .v2-theme .hero-image-container,
          .hero-image-container {
            transform: scale(0.75) !important;
            transform-origin: center center !important;
          }
          .v2-theme .hero-content,
          .hero-content {
            margin-top: 0rem !important;
          }
          .v2-theme .hero-container,
          .hero-container {
            gap: 0.5rem !important;
          }
          .v2-theme .headline-mobile,
          .headline-mobile {
            line-height: 1.17 !important;
            gap: 0px !important;
          }
          .v2-theme .headline-line,
          .headline-line {
            display: block !important;
            line-height: 1.17 !important;
          }
          .v2-theme .headline-pair-gap,
          .headline-pair-gap {
            margin-top: 0.45rem !important;
          }
          .v2-theme .hero-ctas,
          .v2-theme .hero-ctas-outside {
            margin-top: 1.4rem !important; /* body-buttons spacing, tightened 30% */
            gap: 0.85rem !important;
          }
          .v2-theme .hero-ctas-outside .btn-primary-outline.btn-primary {
            width: 90% !important;
            align-self: flex-start !important;
          }
        }
        /* Primary CTA: pink -> light silver grey */
        .v2-theme .hero-ctas-outside .btn-primary-outline.btn-primary {
          background: #C9CED6 !important;
          border-color: rgba(255, 255, 255, 0.45) !important;
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
        }
        .v2-theme .hero-ctas-outside .btn-primary-outline.btn-primary:hover {
          background: #DCE0E6 !important;
          border-color: #ffffff !important;
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
        }
        .v2-theme .hero-ctas-outside .btn-primary-outline.btn-primary:hover svg {
          stroke: #000000 !important;
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
                      <strong className="headline-mockup-bold" style={{ fontWeight: 700, letterSpacing: '0.025em', color: '#f2908f', WebkitTextFillColor: '#f2908f' }}>Websites</strong>{' '}
                      <span className="headline-mockup-light" style={{ fontWeight: 300, color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>that work harder.</span>
                    </span>
                    <span className="headline-line headline-light" style={{ color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>
                      <strong className="headline-mockup-bold" style={{ fontWeight: 700, letterSpacing: '0.025em', color: '#f2908f', WebkitTextFillColor: '#f2908f' }}>Tools</strong>{' '}
                      <span className="headline-mockup-light" style={{ fontWeight: 300, color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>that save hours.</span>
                    </span>
                  </span>

                  {/* Mobile Headline (3 lines, left-aligned) */}
                  <span className="headline-mobile" style={{ gap: '0px', lineHeight: 1.17, color: '#f7d6d0' }}>
                    <span className="headline-line" style={{ lineHeight: 1.17, color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>
                      <strong className="headline-mockup-bold" style={{ fontWeight: 700, letterSpacing: '0.025em', color: '#f2908f', WebkitTextFillColor: '#f2908f' }}>Websites</strong>{' '}
                      <span className="headline-mockup-light" style={{ fontWeight: 300, color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>that work</span>
                    </span>
                    <span className="headline-line" style={{ lineHeight: 1.17, color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>
                      <span className="headline-mockup-light" style={{ fontWeight: 300, color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>harder.</span>
                    </span>
                    <span className="headline-line headline-pair-gap" style={{ lineHeight: 1.17, marginTop: '0.45rem', color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>
                      <strong className="headline-mockup-bold" style={{ fontWeight: 700, letterSpacing: '0.025em', color: '#f2908f', WebkitTextFillColor: '#f2908f' }}>Tools</strong>{' '}
                      <span className="headline-mockup-light" style={{ fontWeight: 300, color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>that save hours.</span>
                    </span>
                  </span>
                </h1>
                <p className="hero-frame-paragraph hero-paragraph-anim" style={{ marginTop: '1.7rem', fontSize: '1.213rem', lineHeight: '1.75', color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0', maxWidth: '100%', fontWeight: 400, opacity: 1 }}>
                  <strong className="hero-body-bold" style={{ fontWeight: 700, color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>You tell me what&apos;s not working. I take it from there</strong>{' '}&mdash;{' '}
                  <span className="hero-offer-item" style={{ whiteSpace: 'nowrap' }}>a modern website</span>,{' '}
                  <span className="hero-offer-item" style={{ whiteSpace: 'nowrap' }}>a custom tool</span>, or{' '}
                  <span className="hero-offer-item" style={{ whiteSpace: 'nowrap' }}>a smarter workflow</span>,{' '}
                  <em style={{ fontStyle: 'italic', color: '#f7d6d0', WebkitTextFillColor: '#f7d6d0' }}>built around what your business needs.</em>
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
                {/* Builder Icons: Wrench / Tool + Lightbulb */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f7d6d0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f7d6d0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                    <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z" />
                  </svg>
                </div>
                Product Designer &amp; Builder
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
