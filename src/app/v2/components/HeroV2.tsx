'use client';

import '@/app/components/Hero.css';
import heroImage from '@/app/assets/test.webp';

export default function HeroV2() {
  return (
    <section className="section hero-section" id="home">
      {/* Mobile: left-align hero body copy (beats the centered .hero-frame-paragraph rule in Hero.css) */}
      <style>{`@media (max-width:900px){.hero-text .hero-frame-paragraph{text-align:left !important;margin-left:0 !important;margin-right:0 !important}}`}</style>
      {/* Background Split */}
      <div className="hero-bg-split"></div>

      <div className="container hero-container" style={{ position: 'relative' }}>
        {/* Left side (now visually Left): Content, Headline frame, and CTAs */}
        <div className="hero-content" style={{ position: 'relative' }}>
          {/* Subtle architectural pixel accents on left edge only */}
          <div 
            className="hero-decor-pixels" 
            aria-hidden="true" 
            style={{ 
              position: 'absolute', 
              inset: '-10px 0 -20px -30px', 
              pointerEvents: 'none', 
              zIndex: 0 
            }}
          >
            {/* High-left airy accent */}
            <span style={{ position: 'absolute', top: '14px', left: '-20px', width: '5px', height: '5px', border: '1px solid rgba(160, 170, 182, 0.38)', backgroundColor: 'transparent' }} />
            <span style={{ position: 'absolute', top: '22px', left: '-12px', width: '2px', height: '2px', backgroundColor: 'rgba(160, 170, 182, 0.45)' }} />

            {/* Over-headline subtle offset marker */}
            <span style={{ position: 'absolute', top: '-12px', left: '160px', width: '7px', height: '7px', border: '1px solid rgba(255, 255, 255, 0.75)', backgroundColor: 'transparent' }} />

            {/* Transition zone between copy & CTAs */}
            <span style={{ position: 'absolute', top: '248px', left: '-14px', width: '4px', height: '4px', border: '1px solid rgba(160, 170, 182, 0.35)', backgroundColor: 'transparent' }} />
            <span style={{ position: 'absolute', bottom: '16px', left: '-18px', width: '6px', height: '6px', border: '1px solid rgba(160, 170, 182, 0.32)', backgroundColor: 'transparent' }} />
          </div>

          <div className="hero-copy-motion" style={{ position: 'relative', zIndex: 1 }}>
            <div className="hero-name-group" style={{ position: 'relative', width: 'fit-content', maxWidth: '100%' }}>
              <div
                className="hero-text"
                style={{ transform: 'translateY(-0.4rem)' }}
              >
                <h1 className="hero-statement hero-statement-anim" style={{ display: 'flex', flexDirection: 'column', gap: '0px', lineHeight: '1.22' }}>
                  {/* Desktop Headline (2 lines) */}
                  <span className="headline-desktop">
                    <span className="headline-line headline-light">
                      From problem to
                    </span>
                    <span className="headline-line headline-light">
                      working solution.
                    </span>
                  </span>

                  {/* Mobile Headline (2 lines, left-aligned) */}
                  <span className="headline-mobile" style={{ gap: '0.12rem', lineHeight: 1.08 }}>
                    <span className="headline-line" style={{ lineHeight: 1.08 }}>
                      From problem to
                    </span>
                    <span className="headline-line" style={{ lineHeight: 1.08 }}>
                      working solution.
                    </span>
                  </span>
                </h1>
                <p className="hero-frame-paragraph hero-paragraph-anim" style={{ marginTop: '1.7rem', fontSize: '1.213rem', lineHeight: '1.75', color: '#4a5461', maxWidth: '100%', fontWeight: 400, opacity: 1 }}>
                  Websites, tools, and smarter workflows — built around what your business actually needs.
                  <br className="br-desktop" />{' '}
                  <strong className="hero-body-bold" style={{ fontWeight: 700, color: '#1a202c' }}>You bring the problem. I turn it into something that works.</strong>
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
                  <span>SEND YOUR PROBLEM</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
                <a href="#cases" className="btn btn-secondary btn-secondary-stacked">
                  SEE WHAT I’VE BUILT <span className="arrow" style={{ color: '#2d8293' }}>↓</span>
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
                {/* Outer Rectangle - Lined (solid), Pale subtle black */}
                <rect x="6" y="6" width="188" height="188" stroke="#1c1e23" strokeWidth="1.2" strokeOpacity="0.14" />
                {/* Middle Rectangle - Dashed, Pale subtle black */}
                <rect x="36" y="36" width="128" height="128" stroke="#1c1e23" strokeWidth="1.2" strokeDasharray="4 4" strokeOpacity="0.16" />
                {/* Inner Rectangle - Lined (solid), Pale subtle black */}
                <rect x="66" y="66" width="68" height="68" stroke="#1c1e23" strokeWidth="1.2" strokeOpacity="0.12" />
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
                {/* Outer Rectangle - Lined (solid), Pale subtle black */}
                <rect x="6" y="6" width="188" height="188" stroke="#1c1e23" strokeWidth="1.2" strokeOpacity="0.14" />
                {/* Middle Rectangle - Dashed, Pale subtle black */}
                <rect x="36" y="36" width="128" height="128" stroke="#1c1e23" strokeWidth="1.2" strokeDasharray="4 4" strokeOpacity="0.16" />
                {/* Inner Rectangle - Lined (solid), Pale subtle black */}
                <rect x="66" y="66" width="68" height="68" stroke="#1c1e23" strokeWidth="1.2" strokeOpacity="0.12" />
              </svg>
            </div>

            {/* Curved text along right side of the circular image: "built around your needs" */}
            <div 
              className="hero-curved-text-container" 
              aria-hidden="true" 
              style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                width: '270px', 
                height: '270px', 
                pointerEvents: 'none', 
                zIndex: 4 
              }}
            >
              <svg width="270" height="270" viewBox="0 0 270 270" fill="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                <defs>
                  {/* Arc tracing along the right side of the circle from ~2 o'clock down to ~5:30 o'clock */}
                  <path
                    id="hero-curve-path"
                    d="M 198 42 A 114 114 0 0 1 176 236"
                    fill="none"
                  />
                </defs>
                <text 
                  fill="#3ba3b8" 
                  fontSize="12.5px" 
                  fontFamily="var(--font-heading), -apple-system, BlinkMacSystemFont, sans-serif" 
                  fontWeight="500" 
                  letterSpacing="0.08em"
                >
                  <textPath href="#hero-curve-path" startOffset="50%" textAnchor="middle">
                    built around your needs
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Label 1: "✓ Websites" at the bottom of bottom-left shape (straight, horizontal) */}
            <div className="hero-badge-anchor badge-anchor-websites" style={{ position: 'absolute', bottom: '-46px', left: '-15px', zIndex: 10 }}>
              <div className="hero-ring-badge badge-designer" style={{
                transform: 'none',
                padding: '4px 12px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                boxShadow: '0 4px 14px rgba(85, 96, 106, 0.12)',
                fontFamily: 'var(--font-heading)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: '#3d4454',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
                pointerEvents: 'auto'
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#256678" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Websites
              </div>
            </div>

            {/* Label 2: "✓ Custom tools" at the top of top-right shape (straight, horizontal) */}
            <div className="hero-badge-anchor badge-anchor-products" style={{ position: 'absolute', top: '-46px', right: '-15px', zIndex: 10 }}>
              <div className="hero-ring-badge badge-builder" style={{
                transform: 'none',
                padding: '4px 12px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                boxShadow: '0 4px 14px rgba(85, 96, 106, 0.12)',
                fontFamily: 'var(--font-heading)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: '#3d4454',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
                pointerEvents: 'auto'
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#256678" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Custom tools
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
