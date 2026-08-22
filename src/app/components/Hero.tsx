'use client';

import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '../assets/999.webp';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Tech Pixel Decor in Top-Left */}
      <div className="hero-pixel-decor">
        <svg width="240" height="320" viewBox="0 0 240 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Column 1 */}
          <rect x="20" y="40" width="6" height="6" fill="#3f87ac" opacity="0.4" className="pixel-pulse-1" />
          <rect x="20" y="110" width="4" height="4" fill="#a8d8f2" opacity="0.6" className="pixel-pulse-2" />
          <rect x="20" y="180" width="8" height="8" fill="#63c0e7" opacity="0.3" className="pixel-pulse-3" />
          
          {/* Column 2 */}
          <rect x="60" y="20" width="8" height="8" fill="#2494c8" opacity="0.35" className="pixel-pulse-2" />
          <rect x="60" y="75" width="5" height="5" fill="#3f87ac" opacity="0.5" className="pixel-pulse-1" />
          <rect x="60" y="140" width="7" height="7" fill="#a8d8f2" opacity="0.4" className="pixel-pulse-3" />
          <rect x="60" y="220" width="4" height="4" fill="#3f87ac" opacity="0.6" className="pixel-pulse-2" />

          {/* Column 3 */}
          <rect x="100" y="50" width="5" height="5" fill="#63c0e7" opacity="0.45" className="pixel-pulse-3" />
          <rect x="100" y="105" width="8" height="8" fill="#3f87ac" opacity="0.3" className="pixel-pulse-1" />
          <rect x="100" y="195" width="6" height="6" fill="#a8d8f2" opacity="0.5" className="pixel-pulse-2" />
          <rect x="100" y="260" width="4" height="4" fill="#2494c8" opacity="0.4" className="pixel-pulse-3" />

          {/* Column 4 */}
          <rect x="140" y="30" width="4" height="4" fill="#a8d8f2" opacity="0.6" className="pixel-pulse-2" />
          <rect x="140" y="90" width="7" height="7" fill="#63c0e7" opacity="0.35" className="pixel-pulse-3" />
          <rect x="140" y="155" width="5" height="5" fill="#3f87ac" opacity="0.5" className="pixel-pulse-1" />
          <rect x="140" y="230" width="8" height="8" fill="#2494c8" opacity="0.25" className="pixel-pulse-2" />

          {/* Column 5 */}
          <rect x="180" y="70" width="6" height="6" fill="#3f87ac" opacity="0.4" className="pixel-pulse-1" />
          <rect x="180" y="130" width="4" height="4" fill="#a8d8f2" opacity="0.55" className="pixel-pulse-3" />
          <rect x="180" y="200" width="7" height="7" fill="#63c0e7" opacity="0.3" className="pixel-pulse-2" />

          {/* Column 6 */}
          <rect x="220" y="45" width="5" height="5" fill="#2494c8" opacity="0.5" className="pixel-pulse-3" />
          <rect x="220" y="115" width="8" height="8" fill="#3f87ac" opacity="0.25" className="pixel-pulse-2" />
          <rect x="220" y="175" width="4" height="4" fill="#a8d8f2" opacity="0.6" className="pixel-pulse-1" />
        </svg>
      </div>

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
