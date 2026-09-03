'use client';

import { useRef, useState } from 'react';
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

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('hello@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
        <motion.div variants={arriveIn} className="face-top-divider-line" />
        <motion.h2 variants={arriveIn} className="face-closure">
          Your business problem needs a thoughtful digital solution.
        </motion.h2>
        <motion.div variants={arriveIn} className="face-support" style={{ margin: '1rem 0 1.75rem 0' }}>
          <p className="face-preheadline" style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)', color: '#2a3036', maxWidth: '720px', lineHeight: 1.5, textAlign: 'center' }}>
            I'd love to build one for you.
          </p>
        </motion.div>
        
        <motion.div variants={arriveIn} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', margin: '0.5rem 0 1.5rem 0' }}>
          <a href="mailto:hello@example.com" className="btn btn-primary face-cta">
            Send your problem my way
          </a>
          <button 
            onClick={handleCopyEmail}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#1a1a1a',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              fontWeight: 300,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              textDecoration: 'none',
              padding: '0.5rem'
            }}
          >
            {copied ? 'Email Copied!' : 'Copy email'}
          </button>
        </motion.div>
        <a 
          href="#home" 
          className="back-to-top-btn" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          title="Back to top" 
          aria-label="Back to top"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
