import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '../assets/999.webp';

export default function Hero() {
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
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="hero-image-wrapper"
        >
          <img src={heroImage} alt="Iryna Sheremeta" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
}
