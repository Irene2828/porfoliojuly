import { useRef, useMemo } from 'react';
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
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-text stair-1"
        >
          <h1 className="title-serif text-huge">Iryna</h1>
        </motion.div>

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hero-text stair-2"
        >
          <h1 className="title-serif text-huge">Sheremeta</h1>
        </motion.div>

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hero-subtitle"
        >
          Product Designer and Builder
        </motion.div>

        <ul className="hero-bullets">
          {['Logo Design', 'Brand Identity', 'Poster Design', 'Environmental Design'].map((bullet, idx) => (
            <motion.li
              key={bullet}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 + idx * 0.15, ease: "easeOut" }}
            >
              &ndash; {bullet}
            </motion.li>
          ))}
        </ul>
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="hero-image-wrapper"
        >
          <img src={heroImage} alt="Iryna Sheremeta" className="hero-image" />
          
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
