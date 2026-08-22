'use client';

import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '../assets/999.webp';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Tech Asymmetrical Pixel Curtain across all top hero part */}
      <div className="hero-pixel-curtain">
        {[
          { left: '2%', depths: [20, 60, 110, 160], sizes: [5, 7, 4, 8], opacities: [0.4, 0.3, 0.6, 0.25], colors: ['#3f87ac', '#63c0e7', '#a8d8f2', '#2494c8'], pulses: [1, 2, 3, 2] },
          { left: '6%', depths: [15, 55, 95, 135], sizes: [8, 4, 6, 5], opacities: [0.3, 0.6, 0.45, 0.5], colors: ['#2494c8', '#a8d8f2', '#3f87ac', '#63c0e7'], pulses: [2, 1, 3, 1] },
          { left: '10%', depths: [30, 80, 120], sizes: [6, 8, 4], opacities: [0.5, 0.25, 0.6], colors: ['#63c0e7', '#2494c8', '#a8d8f2'], pulses: [3, 2, 1] },
          { left: '14%', depths: [20, 50, 90, 150, 190], sizes: [4, 7, 5, 8, 6], opacities: [0.6, 0.4, 0.5, 0.3, 0.4], colors: ['#a8d8f2', '#3f87ac', '#63c0e7', '#2494c8', '#3f87ac'], pulses: [1, 3, 2, 1, 3] },
          { left: '18%', depths: [25, 70, 110], sizes: [6, 5, 7], opacities: [0.4, 0.5, 0.35], colors: ['#3f87ac', '#a8d8f2', '#63c0e7'], pulses: [2, 1, 3] },
          { left: '22%', depths: [15, 45, 80, 115], sizes: [8, 4, 6, 5], opacities: [0.3, 0.6, 0.4, 0.5], colors: ['#2494c8', '#3f87ac', '#a8d8f2', '#63c0e7'], pulses: [3, 2, 1, 2] },
          { left: '26%', depths: [35, 75], sizes: [5, 8], opacities: [0.5, 0.3], colors: ['#63c0e7', '#2494c8'], pulses: [1, 3] },
          { left: '30%', depths: [20, 60, 100, 140], sizes: [4, 6, 7, 5], opacities: [0.6, 0.45, 0.35, 0.5], colors: ['#a8d8f2', '#3f87ac', '#2494c8', '#63c0e7'], pulses: [2, 1, 3, 1] },
          { left: '34%', depths: [15, 40, 70], sizes: [6, 5, 4], opacities: [0.4, 0.5, 0.6], colors: ['#3f87ac', '#63c0e7', '#a8d8f2'], pulses: [3, 2, 3] },
          { left: '38%', depths: [30, 85, 130, 175], sizes: [7, 8, 5, 6], opacities: [0.35, 0.25, 0.5, 0.4], colors: ['#2494c8', '#3f87ac', '#a8d8f2', '#63c0e7'], pulses: [1, 2, 1, 3] },
          { left: '42%', depths: [20, 60, 95], sizes: [5, 4, 8], opacities: [0.5, 0.6, 0.3], colors: ['#63c0e7', '#a8d8f2', '#2494c8'], pulses: [2, 3, 2] },
          { left: '46%', depths: [15, 50, 80, 110], sizes: [8, 6, 5, 7], opacities: [0.35, 0.4, 0.5, 0.3], colors: ['#3f87ac', '#63c0e7', '#a8d8f2', '#2494c8'], pulses: [1, 2, 1, 3] },
          { left: '50%', depths: [25, 65], sizes: [4, 6], opacities: [0.6, 0.45], colors: ['#a8d8f2', '#3f87ac'], pulses: [3, 1] },
          { left: '54%', depths: [20, 55, 90, 135, 170], sizes: [7, 5, 8, 4, 6], opacities: [0.4, 0.5, 0.3, 0.6, 0.45], colors: ['#63c0e7', '#a8d8f2', '#2494c8', '#3f87ac', '#63c0e7'], pulses: [2, 3, 2, 1, 3] },
          { left: '58%', depths: [15, 45, 75, 105], sizes: [5, 7, 4, 8], opacities: [0.5, 0.35, 0.6, 0.25], colors: ['#3f87ac', '#2494c8', '#a8d8f2', '#63c0e7'], pulses: [1, 2, 3, 2] },
          { left: '62%', depths: [30, 80, 120], sizes: [6, 8, 5], opacities: [0.4, 0.3, 0.5], colors: ['#a8d8f2', '#63c0e7', '#3f87ac'], pulses: [3, 1, 2] },
          { left: '66%', depths: [20, 50, 90, 140], sizes: [8, 4, 7, 5], opacities: [0.3, 0.6, 0.4, 0.5], colors: ['#2494c8', '#3f87ac', '#63c0e7', '#a8d8f2'], pulses: [2, 3, 1, 3] },
          { left: '70%', depths: [25, 65, 100], sizes: [5, 6, 4], opacities: [0.5, 0.45, 0.6], colors: ['#3f87ac', '#63c0e7', '#a8d8f2'], pulses: [1, 2, 1] },
          { left: '74%', depths: [15, 45, 75, 115, 160], sizes: [7, 8, 5, 6, 4], opacities: [0.4, 0.25, 0.5, 0.4, 0.6], colors: ['#63c0e7', '#2494c8', '#3f87ac', '#a8d8f2', '#3f87ac'], pulses: [3, 2, 1, 3, 2] },
          { left: '78%', depths: [35, 85, 125], sizes: [6, 5, 8], opacities: [0.45, 0.5, 0.3], colors: ['#a8d8f2', '#63c0e7', '#2494c8'], pulses: [2, 1, 3] },
          { left: '82%', depths: [20, 55, 90], sizes: [8, 4, 6], opacities: [0.3, 0.6, 0.45], colors: ['#2494c8', '#3f87ac', '#a8d8f2'], pulses: [1, 3, 2] },
          { left: '86%', depths: [15, 45, 75, 110], sizes: [5, 7, 4, 6], opacities: [0.5, 0.4, 0.6, 0.45], colors: ['#3f87ac', '#63c0e7', '#a8d8f2', '#2494c8'], pulses: [2, 1, 3, 1] },
          { left: '90%', depths: [25, 60], sizes: [6, 8], opacities: [0.4, 0.3], colors: ['#63c0e7', '#2494c8'], pulses: [3, 2] },
          { left: '94%', depths: [20, 50, 85, 120, 155], sizes: [4, 5, 7, 6, 8], opacities: [0.6, 0.5, 0.35, 0.45, 0.25], colors: ['#a8d8f2', '#3f87ac', '#63c0e7', '#2494c8', '#3f87ac'], pulses: [1, 2, 3, 1, 2] },
          { left: '98%', depths: [15, 40, 70], sizes: [7, 6, 5], opacities: [0.4, 0.45, 0.5], colors: ['#3f87ac', '#a8d8f2', '#63c0e7'], pulses: [3, 2, 1] }
        ].map((col, colIdx) => (
          <div key={colIdx} className="curtain-col" style={{ left: col.left }}>
            {col.depths.map((depth, pIdx) => (
              <div
                key={pIdx}
                className={`curtain-pixel pixel-pulse-${col.pulses[pIdx]}`}
                style={{
                  top: `${depth * 0.5}px`,
                  width: `${col.sizes[pIdx]}px`,
                  height: `${col.sizes[pIdx]}px`,
                  backgroundColor: col.colors[pIdx],
                  opacity: col.opacities[pIdx]
                }}
              />
            ))}
          </div>
        ))}
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
