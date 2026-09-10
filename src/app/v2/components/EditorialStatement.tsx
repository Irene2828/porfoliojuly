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
        backgroundColor: '#ffffff', // White background
        padding: '3.25rem 1.5rem 1.75rem 1.5rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style>{`
        .prefooter-btn-primary {
          font-family: var(--font-sans), Inter, sans-serif !important;
          font-size: 0.81rem !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.08em !important;
          justify-content: center;
          height: 3.48rem !important;
          padding: 0 2rem !important;
          background: #b8d9f7 !important;
          color: #0b0c10 !important;
          -webkit-text-fill-color: #0b0c10 !important;
          border: 1.5px dashed rgba(18, 18, 18, 0.45) !important;
          box-shadow: none !important;
          transition: background 0.22s ease, border-color 0.22s ease, transform 0.2s ease, box-shadow 0.2s ease !important;
          -webkit-text-stroke: 0 !important;
        }
        .prefooter-btn-primary:hover {
          background: #a3cdf4 !important;
          border-color: rgba(18, 18, 18, 0.75) !important;
          color: #0b0c10 !important;
          -webkit-text-fill-color: #0b0c10 !important;
        }
      `}</style>
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
        {/* Short decor line above section heading */}
        <div style={{ 
          width: '60px', 
          height: '1px', 
          backgroundColor: '#0b0c10', 
          margin: '0 auto 2rem auto', 
          opacity: 0.6 
        }} />

        {/* Section Heading */}
        <h2 style={{ 
          fontFamily: "'Times New Roman', Times, Georgia, serif",
          fontSize: 'clamp(19px, 3.2vw, 30px)', 
          color: '#5a9ad4', 
          fontWeight: 400,
          fontStyle: 'italic',
          lineHeight: 1.25,
          letterSpacing: '-0.01em',
          textAlign: 'center',
          width: '100%',
          margin: '0 auto 1.25rem auto'
        }}>
          {'How\u00A0I\u00A0Can\u00A0Help\u00A0Your\u00A0Business'}
        </h2>

        {/* Statement Subtitle */}
        <p style={{
          fontFamily: "var(--font-sans), Inter, sans-serif",
          fontSize: '1.175rem',
          lineHeight: 1.6,
          color: 'rgba(42, 48, 54, 0.8)',
          maxWidth: '640px',
          margin: '0 auto',
          textAlign: 'center',
          fontWeight: 500
        }}>
          The tools exist <em>now</em> to solve what used to seem too hard, too slow, or too expensive.
        </p>

        {/* Action CTAs with reduced spacing (marginTop: 1.75rem) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '1.75rem', justifyContent: 'center' }}>
          <a 
            href="mailto:hello@example.com" 
            className="btn face-cta"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
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
              color: '#555555',
              fontFamily: "'JetBrains Mono', Menlo, monospace",
              fontSize: '11px',
              fontWeight: 300,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              textDecoration: 'none',
              padding: '0.5rem',
              opacity: 0.75,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              transition: 'opacity 0.22s ease'
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>{copied ? 'Email Copied!' : 'Copy email'}</span>
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







