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
      <div className="container hero-container" style={{ position: 'relative' }}>
        {/* Mobile Name & Title above everything */}
        <div className="hero-mobile-intro">
          <h2 className="hero-mobile-name">IRYNA SHEREMETA</h2>
          <p className="hero-mobile-role">Web &amp; AI Product Builder</p>
        </div>

        {/* Geometric support layer (z-index 1, under content z-10) */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', opacity: 0.7 }}>
          {/* Top-left decor squares next to headline frame */}
          <div style={{ position: 'absolute', width: '140px', height: '90px', border: '1px dashed rgba(34, 34, 34, 0.2)', top: '-3%', left: '-1%' }} />
          <div style={{ position: 'absolute', width: '65px', height: '65px', border: '1px solid rgba(26, 138, 136, 0.32)', top: '-5%', left: '14%' }} />
          <div style={{ position: 'absolute', width: '110px', height: '110px', border: '1px solid rgba(17, 17, 17, 0.15)', top: '10%', left: '22%' }} />
          <div style={{ position: 'absolute', width: '45px', height: '45px', border: '1px dashed rgba(26, 138, 136, 0.28)', top: '22%', left: '-2%' }} />

          {/* Right & center decor squares (balanced lower position) */}
          <div style={{ position: 'absolute', width: '160px', height: '100px', border: '1.5px dashed rgba(34, 34, 34, 0.38)', top: '45px', left: '52%' }} />
          <div style={{ position: 'absolute', width: '90px', height: '90px', border: '2px solid rgba(26, 138, 136, 0.6)', top: '25px', left: '65%' }} />
          <div style={{ position: 'absolute', width: '40px', height: '40px', border: '1.5px solid rgba(17, 17, 17, 0.35)', top: '70px', left: '58%' }} />
          <div style={{ position: 'absolute', width: '220px', height: '140px', border: '1.5px dashed rgba(34, 34, 34, 0.25)', top: '35px', left: '55%' }} />
          <div style={{ position: 'absolute', width: '120px', height: '120px', border: '1.5px solid rgba(26, 138, 136, 0.35)', top: '180px', left: '48%' }} />
          <div style={{ position: 'absolute', width: '180px', height: '80px', border: '1.5px dashed rgba(34, 34, 34, 0.32)', top: '110px', left: '78%' }} />
        </div>

        <div className="hero-content">
          <div className="hero-copy-motion">
            <div className="hero-name-group" style={{ position: 'relative' }}>
              {/* Decor squares poking out top-left of headline frame (30% reduced opacity) */}
              <div style={{ position: 'absolute', width: '160px', height: '100px', border: '1.5px dashed rgba(34, 34, 34, 0.42)', top: '-55px', left: '-40px', zIndex: 25, transform: 'translateZ(2px)', opacity: 0.7, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', width: '85px', height: '85px', border: '2px solid rgba(26, 138, 136, 0.63)', top: '-68px', left: '15px', zIndex: 25, transform: 'translateZ(2px)', opacity: 0.7, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', width: '60px', height: '60px', border: '1.5px dashed rgba(26, 138, 136, 0.49)', top: '-28px', left: '-55px', zIndex: 25, transform: 'translateZ(2px)', opacity: 0.7, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', width: '110px', height: '110px', border: '1.5px solid rgba(34, 34, 34, 0.31)', top: '-48px', left: '-75px', zIndex: 25, transform: 'translateZ(2px)', opacity: 0.7, pointerEvents: 'none' }} />

              <div className="hero-connector-line"></div>
              <motion.div
                initial={hasAnimated ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="hero-text"
              >
                <h1 className="title-serif hero-statement" style={{ fontSize: 'clamp(46px, 5.6vw, 50px)', color: '#000000', fontWeight: 600, marginTop: '1.2rem' }}>
                  High-Converting Websites<br />
                  &amp; Intelligent AI Workflows
                </h1>
                <p className="hero-frame-paragraph" style={{ marginTop: '1.73rem', fontSize: '1.1rem', lineHeight: '1.85', color: '#444444', maxWidth: '594px' }}>
                  You're the expert in your field &mdash; not in websites or AI products.<br />
                  I build both, combining design, tech &amp; AI expertise to solve your unique business problem.
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
                <a href="#work" className="btn btn-secondary btn-secondary-stacked" style={{ opacity: 0.85 }}>
                  EXPLORE SOLUTIONS <span className="arrow">↓</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        <div
          className="hero-image-wrapper cv-scanner"
          tabIndex={0}
        >
          <div className="hero-image-container">
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
            <div className="tagline-title">Web &amp; AI Product Builder</div>
          </div>
        </div>
      </div>
      <div className="hero-bottom-hairline-line"></div>
      
      {/* Sticky Bottom-Left "Request a Callback" Floating Button */}
      <a 
        href="mailto:hello@example.com?subject=Request%20a%20Callback" 
        className="sticky-callback-btn"
      >
        <span className="callback-dot"></span>
        <span>REQUEST A CALLBACK</span>
        <svg className="callback-phone-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>
    </section>
  );
}
