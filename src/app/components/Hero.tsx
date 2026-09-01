'use client';

import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '../assets/test.webp';

export default function Hero() {
  return (
    <section className="section hero-section" id="home">
      <div className="container hero-container">
        {/* Mobile Name & Title above everything */}
        <div className="hero-mobile-intro">
          <h2 className="hero-mobile-name">IRYNA SHEREMETA</h2>
          <p className="hero-mobile-role">Product builder / Designer</p>
        </div>

        <div className="hero-content">
          <div className="hero-copy-motion">
            <div className="hero-name-group">
              <div className="hero-connector-line"></div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="hero-text"
              >
                <h1 className="title-serif hero-statement">
                  I turn unclear <em>problems</em><br />
                  into clear digital <em>solutions</em>
                </h1>
                <ul className="hero-frame-bullets">
                  <li>&mdash; Workflow tools & internal products</li>
                  <li>&mdash; Rapid prototyping & AI-assisted development</li>
                  <li>&mdash; End-to-end UX & product design</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="hero-ctas hero-ctas-outside"
              >
                <a href="#contact" className="btn btn-primary btn-primary-outline">LET'S WORK ON YOUR NEXT BUILD</a>
                <a href="#work" className="btn btn-secondary btn-secondary-stacked">
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
            <div
              className="cv-annotation cv-ann-1"
            >
              <div className="cv-pointer-line"></div>
              <div className="cv-label">
                <span className="cv-label-dot"></span>
                DESIGN SENSIBILITY
              </div>
            </div>

            <div
              className="cv-annotation cv-ann-2"
            >
              <div className="cv-pointer-line"></div>
              <div className="cv-label">
                <span className="cv-label-dot"></span>
                SYSTEMS THINKING
              </div>
            </div>

            <div
              className="cv-annotation cv-ann-3"
            >
              <div className="cv-pointer-line"></div>
              <div className="cv-label">
                <span className="cv-label-dot"></span>
                TECHNICAL FLUENCY
              </div>
            </div>
          </div>
          <span className="hero-hover-surface" aria-hidden="true"></span>
          

          <div className="hero-image-tagline-stacked">
            <div className="tagline-name">IRYNA SHEREMETA</div>
            <div className="tagline-title">Product builder / Designer</div>
          </div>
        </div>
      </div>
      <div className="hero-bottom-hairline-line"></div>
    </section>
  );
}
