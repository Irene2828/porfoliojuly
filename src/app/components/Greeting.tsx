'use client';

import { motion } from 'framer-motion';
import './Greeting.css';

export default function Greeting() {
  return (
    <section className="greeting-section">
      <div className="container greeting-container">
        <motion.div 
          className="greeting-frame"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="greeting-text">
            Looking for a strategic tech creative?
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
