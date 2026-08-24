'use client';

import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '../assets/test.webp';

export default function Hero() {
  return (
    <section className="section hero-section" id="home">
      <div className="hero-top-hairline"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-copy-motion">
            <div className="hero-name-group">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="hero-text"
              >
                <h1 className="title-serif hero-statement">
                  From <span className="highlight-gold">unclear</span><br />
                  problems<br />
                  <span className="highlight-gold">to clear</span><br />
                  digital solutions:
                </h1>
              </motion.div>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="hero-ctas"
            >
              <a href="#contact" className="btn btn-primary">LET'S WORK ON YOUR NEXT BUILD</a>
              <a href="#work" className="btn btn-secondary">
                SEE WORK EXAMPLES <span className="arrow">↓</span>
              </a>
            </motion.div>
          </div>
        </div>

        <div
          className="hero-image-wrapper cv-scanner"
          tabIndex={0}
        >
          <div className="hero-image-container">
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
          
          <ul className="hero-bullets-right">
            <li><span className="hero-bullet-arrow"></span><span className="bullet-gold">&mdash;</span> Workflow tools and internal products</li>
            <li><span className="hero-bullet-arrow"></span><span className="bullet-gold">&mdash;</span> Rapid prototyping and AI-assisted development</li>
            <li><span className="hero-bullet-arrow"></span><span className="bullet-gold">&mdash;</span> End-to-end UX and product design</li>
          </ul>

          <div className="hero-image-tagline-stacked">
            <div className="tagline-name">Iryna Sheremeta</div>
            <div className="tagline-title">Product builder / designer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
