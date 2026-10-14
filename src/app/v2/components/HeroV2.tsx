'use client';

import '@/app/components/Hero.css';
import heroImage from '@/app/assets/test.webp';

export default function HeroV2() {
  return (
    <section className="section hero-section" id="home">
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

          {/* Silver concentric rings decor: twice smaller (210px), under top-left of headline */}
          <div 
            className="hero-teal-concentric-rings" 
            aria-hidden="true" 
            style={{ 
              position: 'absolute', 
              top: '-48px', 
              left: '-60px', 
              width: '210px', 
              height: '210px', 
              pointerEvents: 'none', 
              zIndex: 0 
            }}
          >
            <svg 
              width="210" 
              height="210" 
              viewBox="0 0 210 210" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ 
                width: '100%', 
                height: '100%',
                maskImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.65) 50%, rgba(0, 0, 0, 0.25) 100%)',
                WebkitMaskImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.65) 50%, rgba(0, 0, 0, 0.25) 100%)'
              }}
            >
              {/* Outer Ring (210px -> r=104) - Light Silver */}
              <circle cx="105" cy="105" r="104" stroke="#d2d7de" strokeWidth="1.3" strokeOpacity="0.8" />

              {/* Middle Dashed Ring (154px -> r=77) - Light Silver */}
              <circle cx="105" cy="105" r="77" stroke="#c4cad3" strokeWidth="1.3" strokeDasharray="4 4" strokeOpacity="0.85" />

              {/* Inner Ring (98px -> r=49) - Light Silver */}
              <circle cx="105" cy="105" r="49" stroke="#d2d7de" strokeWidth="1.3" strokeOpacity="0.7" />
            </svg>
          </div>

          <div className="hero-copy-motion" style={{ position: 'relative', zIndex: 1 }}>
            <div className="hero-name-group" style={{ position: 'relative', width: 'fit-content', maxWidth: '100%' }}>
              <div
                className="hero-text"
                style={{ transform: 'translateY(-0.4rem)' }}
              >
                <h1 className="hero-statement hero-statement-anim" style={{ display: 'flex', flexDirection: 'column', gap: '0px', lineHeight: '1.12' }}>
                  <span className="headline-line headline-light">
                    Looking for a <span className="headline-spaced-word headline-emphasis-custom" style={{ fontStyle: 'italic', fontWeight: 500 }}>custom website</span>
                  </span>
                  <span className="headline-line headline-light">
                    or an <span className="headline-spaced-word headline-emphasis-custom" style={{ fontStyle: 'italic', fontWeight: 500 }}>internal AI tool</span>
                  </span>
                  <span className="headline-line headline-light">
                    to <span className="headline-italic-thinner" style={{ fontStyle: 'italic', fontWeight: 200, opacity: 0.95 }}>scale your business?</span>
                  </span>
                </h1>
                <p className="hero-frame-paragraph hero-paragraph-anim" style={{ marginTop: '1.7rem', fontSize: '1.213rem', lineHeight: '1.75', color: 'var(--color-body-dark, #333842)', maxWidth: '100%', fontWeight: 400, opacity: 0.9 }}>
                  I <strong style={{ fontWeight: 600, color: '#1a1d24' }}>design</strong> and <strong style={{ fontWeight: 600, color: '#1a1d24' }}>build</strong> custom digital products <strong style={{ fontWeight: 600, color: '#1a1d24' }}>end-to-end</strong> &mdash; <span className="br-desktop"><br /></span>
                  <span style={{ fontStyle: 'italic' }}>from figuring out what solution you need to shipping a working product.</span>
                </p>
              </div>

              {/* CTAs: right-aligned with headline, lifted 50% closer to body */}
              <div
                className="hero-ctas hero-ctas-outside hero-ctas-anim"
                style={{ 
                  width: '100%', 
                  display: 'flex', 
                  justifyContent: 'flex-end', 
                  alignItems: 'center', 
                  gap: '1.5rem', 
                  marginTop: '3.9rem' 
                }}
              >
                <a href="#contact" className="btn btn-primary btn-primary-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>BOOK MY SERVICES</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-light, #7fc5d5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
                <a href="#process" className="btn btn-secondary btn-secondary-stacked">
                  SEE WORK EXAMPLES <span className="arrow" style={{ color: '#2d8293' }}>↓</span>
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
            <img src={heroImage.src} alt="Iryna Sheremeta" className="hero-image" />
            <div className="hero-dot-overlay"></div>
          </div>

          {/* Concentric Geometric Rings & Hugging Labels */}
          <div className="hero-rings-badge-container" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '420px', height: '420px', pointerEvents: 'none', zIndex: 1 }}>
            {/* Pure Silver Concentric Rings with left-to-right fade mask */}
            <svg 
              className="hero-concentric-rings" 
              width="420" 
              height="420" 
              viewBox="0 0 420 420" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ 
                position: 'absolute', 
                inset: 0,
                maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.65) 40%, rgba(0, 0, 0, 1) 100%)',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.65) 40%, rgba(0, 0, 0, 1) 100%)'
              }}
            >
              {/* Outer Ring (420px -> r=209.25) - Light Silver */}
              <circle cx="210" cy="210" r="209" stroke="#d2d7de" strokeWidth="1.5" strokeOpacity="0.85" />

              {/* Middle Dashed Ring (310px -> r=154.25) - Light Silver */}
              <circle cx="210" cy="210" r="154" stroke="#c4cad3" strokeWidth="1.5" strokeDasharray="5 5" strokeOpacity="0.9" />

              {/* Inner Ring (200px -> r=99.25) - Light Silver */}
              <circle cx="210" cy="210" r="99" stroke="#d2d7de" strokeWidth="1.5" strokeOpacity="0.75" />
            </svg>

            {/* Circular Hugging Chart Labels - Creative Tech Indicators */}
            {/* 1. "Websites" hugging the top-left curve of the middle ring + Hand pointer */}
            <div className="hero-badge-anchor badge-anchor-websites" style={{ position: 'absolute', top: '56px', left: '12px', zIndex: 10 }}>
              {/* Pointing Hand Icon */}
              <div 
                className="badge-hand-pointer"
                style={{
                  position: 'absolute',
                  top: '-24px',
                  left: '-18px',
                  width: '26px',
                  height: '26px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.12))',
                  pointerEvents: 'none'
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" stroke="#256678" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
                </svg>
              </div>

              <div className="hero-ring-badge badge-designer" style={{
                transform: 'rotate(-16deg)',
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

            {/* 2. "AI products" hugging the right edge of the outer ring + Thick 2D Arrow under label */}
            <div className="hero-badge-anchor badge-anchor-products" style={{ position: 'absolute', top: '190px', right: '-18px', zIndex: 10 }}>
              <div className="hero-ring-badge badge-builder" style={{
                transform: 'rotate(6deg)',
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
                AI products
              </div>

              {/* Thick 2D icon arrow under the label (outlined teal, not filled) pointing up at label */}
              <div 
                className="badge-arrow-pointer"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 5px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                  zIndex: 20
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#256678" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L4 12H9V20H15V12H20L12 4Z" />
                </svg>
              </div>
            </div>

            {/* 3. "AI consultations" hugging the bottom-left curve of the outer ring + Pulsing circles */}
            <div className="hero-badge-anchor badge-anchor-consultations" style={{ position: 'absolute', bottom: '40px', left: '42px', zIndex: 10 }}>
              {/* Pulsing radar circles indicator */}
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: 'calc(100% + 10px)',
                  transform: 'translateY(-50%)',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none'
                }}
              >
                {/* Outer animated ripple */}
                <span 
                  className="badge-radar-circle-outer"
                  style={{
                    position: 'absolute',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    border: '1.5px solid #3ba3b8',
                    backgroundColor: 'rgba(59, 163, 184, 0.2)'
                  }} 
                />
                {/* Middle ring */}
                <span 
                  style={{
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: '1px solid rgba(37, 102, 120, 0.5)'
                  }} 
                />
                {/* Center dot */}
                <span 
                  style={{
                    position: 'absolute',
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: '#256678'
                  }} 
                />
              </div>

              <div className="hero-ring-badge badge-ai" style={{
                transform: 'rotate(12deg)',
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
                AI consultations
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
