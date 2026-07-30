import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '../assets/999.webp';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-row-1">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-text stair-1"
          >
            <h1 className="title-serif text-huge">Clarity.</h1>
          </motion.div>

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hero-text stair-2"
          >
            <h1 className="title-serif text-huge">Logic.</h1>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="hero-image-wrapper"
        >
          <img src={heroImage} alt="Iryna Sheremeta" className="hero-image" />
        </motion.div>

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hero-text stair-3"
        >
          <h1 className="title-serif text-huge">Care.</h1>
        </motion.div>
      </div>

      <div className="hero-divider-stroke" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="hero-subtitle"
      >
        <p>Product Designer and Builder</p>
      </motion.div>
    </section>
  );
}
