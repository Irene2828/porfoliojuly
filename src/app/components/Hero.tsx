import { useMemo } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '../assets/999.webp';

export default function Hero() {
  const heroBlocks = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => {
      const delay = Math.random() * 1.2;
      return { id: i, delay };
    });
  }, []);

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-name-group">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="hero-text"
            >
              <h1 className="title-serif text-huge">Iryna</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="hero-text"
            >
              <h1 className="title-serif text-huge">Sheremeta</h1>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="hero-intro-text"
          >
            I turn vague problems into working tools — from first prototype to something real people use.
          </motion.p>

          <ul className="hero-bullets">
            {[
              'Workflow tools and internal products',
              'Prototyping with AI-assisted development',
              'UX and product design, start to shipped'
            ].map((bullet, idx) => (
              <motion.li
                key={bullet}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 + idx * 0.1, ease: "easeOut" }}
              >
                &ndash; {bullet}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hero-ctas"
          >
            <a href="#contact" className="btn btn-primary">LET'S WORK ON YOUR NEXT BUILD</a>
            <a href="#work" className="btn btn-secondary">
              VIEW SELECTED WORK <span className="arrow">↓</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="hero-image-wrapper"
        >
          <div className="hero-image-container">
            <img src={heroImage.src} alt="Iryna Sheremeta" className="hero-image" />
            <div className="hero-dot-overlay"></div>
          </div>
          
          {/* Mosaic Grid Overlay on Mobile */}
          <div className="hero-mosaic-grid">
            {heroBlocks.map(b => (
              <motion.div 
                key={b.id}
                style={{ 
                  backgroundColor: '#ffffff',
                  transformOrigin: 'center'
                }} 
                initial={{ scale: 1 }}
                animate={{ scale: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8 + b.delay,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
