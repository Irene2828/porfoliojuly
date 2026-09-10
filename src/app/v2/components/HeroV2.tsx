'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '@/app/components/Hero.css';
import heroImage from '@/app/assets/test.webp';

export default function HeroV2() {
  const [hasAnimated, setHasAnimated] = useState(true);

  useEffect(() => {
    const animatedBefore = sessionStorage.getItem('heroV2Animated');
    if (!animatedBefore) {
      setHasAnimated(false);
      sessionStorage.setItem('heroV2Animated', 'true');
    }
  }, []);

  return (
    <section className="section hero-section" id="home">
      {/* Background Split */}
      <div className="hero-bg-split" />
      <div className="container hero-container" style={{ position: 'relative' }}>
        {/* Geometric support layer (z-index 1, under content z-10) */}
        <div className="hero-decor-layer hide-on-mobile" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', opacity: 0.7, transform: 'translateX(1%)' }}>
          {/* Right & center decor squares */}
          <div style={{ position: 'absolute', width: '160px', height: '100px', border: '1.5px dashed rgba(235, 235, 237, 0.45)', top: '-25px', left: '47%' }} />
          <div style={{ position: 'absolute', width: '40px', height: '40px', border: '1.5px solid rgba(235, 235, 237, 0.45)', top: '-10px', left: '53%' }} />
          <div style={{ position: 'absolute', width: '120px', height: '120px', border: '2px solid rgba(235, 235, 237, 0.55)', top: '60px', left: '43%' }} />
        </div>

        <div className="hero-content">
          <div className="hero-copy-motion">
            <div className="hero-name-group" style={{ position: 'relative' }}>
              <div className="hero-connector-line"></div>
              <motion.div
                initial={hasAnimated ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="hero-text"
                style={{ transform: 'translateY(-0.4rem)' }}
              >
                <h1 className="title-serif hero-statement" style={{ fontSize: 'clamp(52.5px, 6.45vw, 57.75px)', color: '#4b85bb', fontWeight: 500, fontStyle: 'normal', marginTop: '0.6rem', textTransform: 'none', letterSpacing: '-0.04em' }}>
                  Looking for a <span className="premium-hover"><span className="word-custom" style={{ fontStyle: 'italic' }}>custom</span></span> <span className="br-mobile"><br /></span><span className="premium-hover">website</span> <span className="br-desktop"><br /></span>or an <span className="br-mobile"><br /></span><span className="premium-hover"><span className="word-internal" style={{ fontStyle: 'italic' }}>internal</span> AI tool</span>?
                </h1>
                <p className="hero-frame-paragraph" style={{ marginTop: '1.7rem', fontSize: '1.16rem', lineHeight: '1.75', color: '#444444', maxWidth: '673px' }}>
                  <strong>I design and build custom digital products end-to-end</strong> &mdash; from figuring out what solution your business needs to shipping working solution.
                </p>
              </motion.div>
              <motion.div
                initial={hasAnimated ? false : { y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: hasAnimated ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="hero-ctas hero-ctas-outside"
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
              </motion.div>
            </div>
          </div>
        </div>

        <div
          className="hero-image-wrapper cv-scanner"
          tabIndex={0}
        >
          {/* Mobile Name & Title directly on top of image, centered */}
          <div className="hero-mobile-intro" style={{ position: 'relative', zIndex: 2 }}>
            <h2 className="hero-mobile-name">IRYNA SHEREMETA</h2>
            <p className="hero-mobile-role" style={{ color: '#d1d5db' }}>WEB &amp; AI PRODUCT BUILDER</p>
          </div>

          <div className="hero-image-container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="hero-image-offset-frame"></div>
            <div className="hero-image-brackets"></div>
            <div className="hero-image-brackets-left"></div>
            {/* Decor squares poking out bottom-right under image */}
            <div className="hero-decor-square" style={{ position: 'absolute', width: '125px', height: '125px', border: '1.5px dashed rgba(235, 235, 237, 0.4)', bottom: '-45px', right: '-35px', zIndex: 0, opacity: 0.7, pointerEvents: 'none' }} />
            <div className="hero-decor-square" style={{ position: 'absolute', width: '65px', height: '65px', border: '1.5px dashed rgba(75, 133, 187, 0.55)', bottom: '-20px', right: '-50px', zIndex: 0, opacity: 0.8, pointerEvents: 'none' }} />
            <div className="hero-decor-square" style={{ position: 'absolute', width: '135px', height: '135px', border: '1.5px solid rgba(235, 235, 237, 0.3)', bottom: '-35px', right: '-65px', zIndex: 0, opacity: 0.6, pointerEvents: 'none' }} />
            <img src={heroImage.src} alt="Iryna Sheremeta" className="hero-image" />
            <div className="hero-dot-overlay"></div>

            {/* CV Scanning Overlay */}
            <div className="cv-overlay">
              <div className="cv-scanline"></div>
              <div className="cv-corner cv-tl"></div>
              <div className="cv-corner cv-tr"></div>
              <div className="cv-corner cv-bl"></div>
              <div className="cv-corner cv-br"></div>
              <div className="cv-crosshair"></div>
            </div>

            {/* Annotation Pointers */}
            <div className="cv-annotation cv-ann-1">
              <div className="cv-pointer-line"></div>
              <div className="cv-label">
                <span className="cv-label-dot"></span>
                MARKET POSITIONING
              </div>
            </div>

            <div className="cv-annotation cv-ann-2">
              <div className="cv-pointer-line"></div>
              <div className="cv-label">
                <span className="cv-label-dot"></span>
                AI &amp; GEO ENGINE
              </div>
            </div>

            <div className="cv-annotation cv-ann-3">
              <div className="cv-pointer-line"></div>
              <div className="cv-label">
                <span className="cv-label-dot"></span>
                LEAD AUTOMATION
              </div>
            </div>
          </div>
          <span className="hero-hover-surface" aria-hidden="true"></span>
          
          <div className="hero-image-tagline-stacked">
            <div className="tagline-name">IRYNA SHEREMETA</div>
            <div className="tagline-title">WEB &amp; AI PRODUCT BUILDER</div>
          </div>
        </div>
      </div>
      <div className="hero-bottom-hairline-line"></div>
    </section>
  );
}
