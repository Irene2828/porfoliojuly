import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '../assets/hero_new.png';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-text top-text"
        >
          <h1 className="title-serif text-huge">Iryna Sheremeta</h1>
        </motion.div>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="hero-image-wrapper"
        >
          <img src={heroImage} alt="Iryna Sheremeta" className="hero-image" />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="hero-text bottom-text"
        >
          <h1 className="text-sans text-huge">PORTFOLIO</h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hero-subtitle"
        >
          <p>Illustrator and Designer</p>
        </motion.div>
      </div>
    </section>
  );
}
