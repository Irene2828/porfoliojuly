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
        <div className="hero-decor-layer hide-on-mobile" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', opacity: 0.7 }}>
          {/* Top-left decor squares next to headline frame */}
          <div style={{ position: 'absolute', width: '140px', height: '90px', border: '1px dashed rgba(34, 34, 34, 0.2)', top: '-3%', left: '-1%' }} />
          <div style={{ position: 'absolute', width: '65px', height: '65px', border: '1.5px solid #e8f4f8', top: '-5%', left: '14%' }} />
          <div style={{ position: 'absolute', width: '110px', height: '110px', border: '1px solid rgba(17, 17, 17, 0.15)', top: '10%', left: '22%' }} />
          <div style={{ position: 'absolute', width: '45px', height: '45px', border: '1.5px dashed #e8f4f8', top: '22%', left: '-2%' }} />

          {/* Right & center decor squares (balanced lower position) */}
          <div style={{ position: 'absolute', width: '160px', height: '100px', border: '1.5px dashed rgba(34, 34, 34, 0.38)', top: '45px', left: '52%' }} />
          <div style={{ position: 'absolute', width: '90px', height: '90px', border: '2px solid #e8f4f8', top: '25px', left: '65%' }} />
          <div style={{ position: 'absolute', width: '40px', height: '40px', border: '1.5px solid rgba(17, 17, 17, 0.35)', top: '70px', left: '58%' }} />
          <div style={{ position: 'absolute', width: '220px', height: '140px', border: '1.5px dashed rgba(34, 34, 34, 0.25)', top: '35px', left: '55%' }} />
          <div style={{ position: 'absolute', width: '120px', height: '120px', border: '2px solid #e8f4f8', top: '180px', left: '48%' }} />
          <div style={{ position: 'absolute', width: '180px', height: '80px', border: '1.5px dashed rgba(34, 34, 34, 0.32)', top: '110px', left: '78%' }} />
        </div>

        <div className="hero-content">
          <div className="hero-copy-motion">
            <div className="hero-name-group" style={{ position: 'relative' }}>
              {/* Decor squares poking out top-left of headline frame (30% reduced opacity) */}
              <div className="hero-decor-square" style={{ position: 'absolute', width: '160px', height: '100px', border: '1.5px dashed rgba(34, 34, 34, 0.42)', top: '-55px', left: '-40px', zIndex: 25, transform: 'translateZ(2px)', opacity: 0.7, pointerEvents: 'none' }} />
              <div className="hero-decor-square" style={{ position: 'absolute', width: '85px', height: '85px', border: '2px solid #e8f4f8', top: '-68px', left: '15px', zIndex: 25, transform: 'translateZ(2px)', opacity: 0.9, pointerEvents: 'none' }} />
              <div className="hero-decor-square" style={{ position: 'absolute', width: '60px', height: '60px', border: '1.5px dashed #e8f4f8', top: '-28px', left: '-55px', zIndex: 25, transform: 'translateZ(2px)', opacity: 0.9, pointerEvents: 'none' }} />
              <div className="hero-decor-square" style={{ position: 'absolute', width: '160px', height: '110px', border: '1.5px solid rgba(34, 34, 34, 0.31)', top: '-48px', left: '-75px', zIndex: 25, transform: 'translateZ(2px)', opacity: 0.7, pointerEvents: 'none' }} />

              <div className="hero-connector-line"></div>
              <motion.div
                initial={hasAnimated ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="hero-text"
                style={{ transform: 'translateY(-0.4rem)' }}
              >
                <h1 className="title-serif hero-statement" style={{ fontSize: 'clamp(48px, 5.9vw, 52px)', color: '#4b85bb', fontWeight: 500, fontStyle: 'normal', marginTop: '0.6rem', textTransform: 'none', letterSpacing: '-0.04em' }}>
                  Looking for a <span className="premium-hover"><span className="word-custom" style={{ fontStyle: 'italic' }}>custom</span> website</span><br />
                  or an <span className="premium-hover"><span className="word-internal" style={{ fontStyle: 'italic' }}>internal</span> AI tool</span>?
                </h1>
                <p className="hero-frame-paragraph" style={{ marginTop: '1.54rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#444444', maxWidth: '680px' }}>
                  <strong>I design and build custom digital products end-to-end</strong> &mdash; from figuring out what kind of solution your business needs to shipping the product that solves its problem.
                </p>
              </motion.div>
              <motion.div
                initial={hasAnimated ? false : { y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: hasAnimated ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="hero-ctas hero-ctas-outside"
              >
                <a href="#contact" className="btn btn-primary btn-primary-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span>BOOK MY SERVICES</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
                <a href="#process" className="btn btn-secondary btn-secondary-stacked" style={{ opacity: 0.85 }}>
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
            <p className="hero-mobile-role">WEB &amp; AI PRODUCT BUILDER</p>
          </div>

          <div className="hero-image-container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="hero-image-offset-frame"></div>
            <div className="hero-image-brackets"></div>
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
