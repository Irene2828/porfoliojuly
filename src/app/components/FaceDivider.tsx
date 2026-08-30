'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import './FaceDivider.css';

export default function FaceDivider() {
  const containerRef = useRef<HTMLElement>(null);
  const arriveIn: any = {
    hidden: { y: 28, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="face-divider-section" ref={containerRef}>
      <motion.div
        className="face-divider-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ staggerChildren: 0.14 }}
      >
        <motion.h2 variants={arriveIn} className="face-closure">Have a <span className="highlight-gold-bridge-footer">messy problem?</span></motion.h2>
        <motion.div variants={arriveIn} className="face-support">
          <p className="face-preheadline">I&apos;ll approach it as a designer, strategist and product builder.</p>
        </motion.div>
        <motion.a variants={arriveIn} href="mailto:hello@example.com" className="btn btn-primary face-cta">
          Start a conversation
        </motion.a>
        <motion.div variants={arriveIn} className="face-footer-copyright">
          &copy; {new Date().getFullYear()} IRYNA SHEREMETA — BASED IN MONTREAL • REMOTE
        </motion.div>
      </motion.div>
    </section>
  );
}
