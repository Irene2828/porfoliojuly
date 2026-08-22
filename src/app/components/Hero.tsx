'use client';

import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '../assets/999.webp';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-copy-motion">
          <div className="hero-name-group">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="hero-text"
            >
              <h1 className="title-serif text-huge">Iryna</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
              className="hero-text"
            >
              <h1 className="title-serif text-huge">Sheremeta</h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.09, ease: "easeOut" }}
              className="hero-name-eyebrow"
            >
              Product builder / designer
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
            className="hero-intro-text"
          >
            I turn unclear problems into clear digital solutions:
          </motion.p>

          <ul className="hero-bullets">
            {[
              'Workflow tools and internal products',
              'Rapid prototyping and AI-assisted development',
              'End-to-end UX and product design'
            ].map((bullet, idx) => (
              <motion.li
                key={bullet}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.28 + idx * 0.08, ease: "easeOut" }}
              >
                &ndash; {bullet}
              </motion.li>
            ))}
          </ul>

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
        </div>
      </div>
    </section>
  );
}
