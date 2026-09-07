'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function EditorialStatement() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('hello@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      style={{
        backgroundColor: '#7cb5eb', // Sky blue background matching hero right side
        padding: '6.5rem 1.5rem 3rem 1.5rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Hero-inspired Geometric Decorative Background Layer */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.28,
          zIndex: 1
        }}
      >
        {/* Subtle geometric grid & floating wireframe squares (tones of white & grey) */}
        <div style={{ position: 'absolute', width: '180px', height: '180px', border: '1px dashed #ffffff', top: '10%', left: '4%' }} />
        <div style={{ position: 'absolute', width: '90px', height: '90px', border: '1px solid #ffffff', top: '18%', left: '12%' }} />
        <div style={{ position: 'absolute', width: '240px', height: '130px', border: '1px dashed rgba(255, 255, 255, 0.6)', top: '-5%', right: '8%' }} />
        <div style={{ position: 'absolute', width: '110px', height: '110px', border: '1.5px solid #ffffff', bottom: '12%', right: '6%' }} />
        <div style={{ position: 'absolute', width: '70px', height: '70px', border: '1px dashed #ffffff', bottom: '15%', left: '15%' }} />
        <div style={{ position: 'absolute', width: '140px', height: '90px', border: '1px solid rgba(255, 255, 255, 0.5)', bottom: '5%', right: '22%' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: '820px',
          width: '100%',
          textAlign: 'center',
          padding: '2rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Statement Headline (30% smaller font size) */}
        <h2 style={{
          fontFamily: "var(--font-serif), 'Times New Roman', Times, Georgia, serif",
          fontSize: 'clamp(1.22rem, 2.8vw, 1.9rem)',
          lineHeight: 1.5,
          color: '#ffffff',
          fontWeight: 600,
          letterSpacing: '0em',
          margin: 0
        }}>
          The tools exist <em>now</em> to solve what used to seem too hard, too slow, or too expensive. The only real advantage left is who moves first &mdash; I'd like that to be <em>you</em>.
        </h2>

        {/* Action CTAs with double spacing (margin-top: 3.5rem) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem', marginTop: '3.5rem' }}>
          <a 
            href="mailto:hello@example.com" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#ffffff',
              color: '#0b0c10',
              padding: '0.9rem 2rem',
              borderRadius: '0px', // Sharp corners
              fontWeight: 500,
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: 'none',
              transform: 'scale(1)',
              transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span>Send your problem my way</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>

          <button 
            onClick={handleCopyEmail}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontFamily: "'JetBrains Mono', Menlo, monospace",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              textDecoration: 'none',
              padding: '0.5rem',
              opacity: 0.9,
              transition: 'transform 0.22s ease, opacity 0.22s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.opacity = '0.9';
            }}
          >
            {copied ? 'Email Copied!' : 'Copy email'}
          </button>
        </div>
      </motion.div>

      {/* Back to top button positioned at bottom right of teal section */}
      <a 
        href="#home" 
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        title="Back to top" 
        aria-label="Back to top"
        style={{
          position: 'absolute',
          bottom: '1rem',
          right: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          color: '#ffffff',
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
          textDecoration: 'none',
          zIndex: 3,
          transition: 'all 0.25s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#ffffff';
          e.currentTarget.style.color = '#187a73';
          e.currentTarget.style.transform = 'translateY(-3px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
          e.currentTarget.style.color = '#ffffff';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </a>
    </section>
  );
}







