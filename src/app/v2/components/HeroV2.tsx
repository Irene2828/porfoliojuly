'use client';

import { useState, useEffect, useRef } from 'react';
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
              {/* Outer Ring (210px -> r=104) - White */}
              <circle cx="105" cy="105" r="104" stroke="#ffffff" strokeWidth="1.3" strokeOpacity="0.8" />

              {/* Middle Dashed Ring (154px -> r=77) - White */}
              <circle cx="105" cy="105" r="77" stroke="#ffffff" strokeWidth="1.3" strokeDasharray="4 4" strokeOpacity="0.9" />

              {/* Inner Ring (98px -> r=49) - White */}
              <circle cx="105" cy="105" r="49" stroke="#ffffff" strokeWidth="1.3" strokeOpacity="0.75" />
            </svg>
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
                      Looking for a <span className="headline-teal-underline">custom</span> website
                    </span>
                    <span className="headline-line headline-light">
                      or an <span className="headline-teal-underline">internal</span> AI tool?
                    </span>
                  </span>

                  {/* Mobile Headline (3 lines) */}
                  <span className="headline-mobile">
                    <span className="headline-line headline-light">
                      Looking for
                    </span>
                    <span className="headline-line headline-light">
                      a <span className="headline-teal-underline">custom</span> website
                    </span>
                    <span className="headline-line headline-light">
                      <span className="headline-or">or</span> an <span className="headline-teal-underline">internal</span> AI tool?
                    </span>
                  </span>
                </h1>
                <p className="hero-frame-paragraph hero-paragraph-anim" style={{ marginTop: '1.7rem', fontSize: '1.213rem', lineHeight: '1.75', color: '#4a5461', maxWidth: '100%', fontWeight: 400, opacity: 1 }}>
                  I design and build custom digital products end-to-end for business and professionals &mdash; <span className="br-desktop"><br /></span>
                  <span style={{ fontStyle: 'italic' }}>from figuring out what solution you need to shipping a working product.</span>
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
              {/* Outer Ring (420px -> r=209.25) - White */}
              <circle cx="210" cy="210" r="209" stroke="#ffffff" strokeWidth="1.4" strokeOpacity="0.85" />

              {/* Middle Dashed Ring (310px -> r=154.25) - White */}
              <circle cx="210" cy="210" r="154" stroke="#ffffff" strokeWidth="1.4" strokeDasharray="5 5" strokeOpacity="0.9" />

              {/* Inner Ring (200px -> r=99.25) - White */}
              <circle cx="210" cy="210" r="99" stroke="#ffffff" strokeWidth="1.4" strokeOpacity="0.75" />
            </svg>

            {/* Circular Hugging Chart Labels - Creative Tech Indicators */}
            {/* 1. "Websites" hugging the top-left curve of the middle ring */}
            <div className="hero-badge-anchor badge-anchor-websites" style={{ position: 'absolute', top: '56px', left: '12px', zIndex: 10 }}>
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

            {/* 2. "AI products" hugging the right edge of the outer ring */}
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
            </div>

            {/* 3. "AI consultations" hugging the bottom-left curve of the outer ring */}
            <div className="hero-badge-anchor badge-anchor-consultations" style={{ position: 'absolute', bottom: '40px', left: '42px', zIndex: 10 }}>

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
