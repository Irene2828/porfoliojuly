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
          <p className="hero-mobile-role">Web Strategist & AI Integration Partner</p>
        </div>

        {/* Geometric support layer (z-index 1, under content z-10) */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', width: '160px', height: '100px', border: '1px dashed rgba(34, 34, 34, 0.35)', top: '8%', left: '52%' }} />
          <div style={{ position: 'absolute', width: '90px', height: '90px', border: '1px solid rgba(26, 138, 136, 0.5)', top: '4%', left: '65%' }} />
          <div style={{ position: 'absolute', width: '40px', height: '40px', border: '1px solid rgba(17, 17, 17, 0.3)', top: '12%', left: '58%' }} />
          <div style={{ position: 'absolute', width: '220px', height: '140px', border: '1px dashed rgba(34, 34, 34, 0.18)', top: '6%', left: '55%' }} />
          <div style={{ position: 'absolute', width: '120px', height: '120px', border: '1px solid rgba(26, 138, 136, 0.25)', top: '35%', left: '48%' }} />
          <div style={{ position: 'absolute', width: '180px', height: '80px', border: '1px dashed rgba(34, 34, 34, 0.22)', top: '20%', left: '78%' }} />
        </div>

        <div className="hero-content">
          <div className="hero-copy-motion">
            <div className="hero-name-group">
              <div className="hero-connector-line"></div>
              <motion.div
                initial={hasAnimated ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="hero-text"
              >
                <h1 className="title-serif hero-statement" style={{ fontSize: 'clamp(42px, 5.1vw, 45.5px)' }}>
                  High-Converting Websites<br />
                  &amp; Intelligent AI Workflows
                </h1>
                <ul className="hero-frame-bullets">
                  <li>&mdash; Directing AI agents to build production-grade web tools &amp; automations</li>
                  <li>&mdash; High-converting showcase sites &amp; custom web applications</li>
                  <li>&mdash; Streamlined operations, automated lead capture &amp; AI workflows</li>
                </ul>
              </motion.div>
              <motion.div
                initial={hasAnimated ? false : { y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: hasAnimated ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="hero-ctas hero-ctas-outside"
              >
                <a href="#contact" className="btn btn-primary btn-primary-outline">BUILD YOUR DIGITAL PRESENCE</a>
                <a href="#work" className="btn btn-secondary btn-secondary-stacked">
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
            <div className="tagline-title">Web Strategist &amp; AI Integration</div>
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
        REQUEST A CALLBACK
      </a>
    </section>
  );
}
