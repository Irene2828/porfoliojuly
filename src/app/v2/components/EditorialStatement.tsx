'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EditorialStatement() {
  const [copied, setCopied] = useState(false);
  const [hoverEmail, setHoverEmail] = useState(false);
  const [statementIndex, setStatementIndex] = useState(0);

  const statements = [
    <span key="1" style={{ fontSize: '0.81em', display: 'inline-block' }}>Turn <span style={{ color: 'var(--color-heading-silver)' }}>visitors into clients</span> with a custom website.</span>,
    <span key="2" style={{ fontSize: '0.81em', display: 'inline-block' }}>Turn <span style={{ color: 'var(--color-heading-silver)' }}>hours of work into minutes</span> with a custom AI tool.</span>
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStatementIndex((prev) => (prev + 1) % statements.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [statements.length]);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('iryna@irynasheremeta.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section 
        style={{
          backgroundColor: '#ffffff', // White background
          padding: '80px 0 60px 0',
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
            font-family: var(--font-label), sans-serif !important;
            font-size: 0.81rem !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.08em !important;
            justify-content: center;
            height: 3.48rem !important;
            padding: 0 2rem !important;
            background: var(--color-matte-black, #18191e) !important;
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
            border: none !important;
            border-radius: 56px !important;
            box-shadow: 6px 6px 0px #dcdfe3 !important;
            transition: background 0.22s ease, border-color 0.22s ease, transform 0.2s ease, box-shadow 0.2s ease !important;
            -webkit-text-stroke: 0 !important;
          }
          .prefooter-btn-primary:hover {
            background: var(--color-matte-black-hover, #24252a) !important;
            border-color: var(--color-matte-black-hover, #24252a) !important;
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
            box-shadow: 0 8px 24px rgba(180, 186, 196, 0.4) !important;
          }
          .face-cta {
            background-color: var(--color-matte-black, #18191e) !important;
            color: #ffffff !important;
            transition: box-shadow 0.3s ease !important;
            border: none !important;
          }
          .face-cta:hover {
            box-shadow: 0 8px 24px rgba(180, 186, 196, 0.4) !important;
            background-color: var(--color-matte-black-hover, #24252a) !important;
          }
          /* Mobile: rotating statements in header-title text style */
          @media (max-width: 900px) {
            .editorial-blue-heading,
            .editorial-blue-heading span {
              font-family: var(--font-heading), -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif !important;
              font-size: 15.81px !important;
              font-weight: 400 !important;
              letter-spacing: 0.04em !important;
              color: #64748b !important;
              -webkit-text-fill-color: #64748b !important;
            }
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
            width: '48px', 
            height: '1px', 
            backgroundColor: '#0b0c10', 
            margin: '0 auto 2rem auto', 
            opacity: 0.6 
          }} />

          {/* Closing headline — hero-headline style, single uniform treatment */}
          <h2
            className="prefooter-closing-line"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 8vw, 3.25rem)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              color: '#333842',
              textAlign: 'center',
              margin: '0 0 1.75rem 0',
              maxWidth: '20ch',
            }}
          >
            AI is changing how business gets done.{' '}
            <span style={{ color: '#3ba3b8', WebkitTextFillColor: '#3ba3b8' }}>
              Let&rsquo;s put it to work for yours.
            </span>
          </h2>

          {/* Section Heading Animated Loop */}
          <div style={{ minHeight: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <AnimatePresence mode="wait">
              <motion.h2 
                key={statementIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="editorial-blue-heading"
                style={{ 
                  fontFamily: "var(--font-heading)",
                  fontSize: 'clamp(24px, 4vw, 34px)', 
                  color: '#3a3d46', 
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  textAlign: 'center',
                  width: '100%',
                  margin: 0,
                  WebkitTextStroke: '0'
                }}
              >
                {statements[statementIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '1.4rem', justifyContent: 'center' }}>
            <a 
              href="mailto:iryna@irynasheremeta.com" 
              className="btn prefooter-btn-primary face-cta"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', transform: 'scale(1.05)' }}
            >
              <span>SEND YOUR PROBLEM MY WAY</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-light, #7fc5d5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Slim Footer */}
      <footer 
        style={{
          width: '100%',
          borderTop: '1px solid rgba(0, 0, 0, 0.08)',
          backgroundColor: '#ffffff',
          padding: '1.25rem max(1.5rem, calc((100vw - 1283px) / 2 + 1.5rem))',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
          fontSize: '12px',
          color: 'var(--color-heading-silver, #5c6574)',
          letterSpacing: '0.04em'
        }}>
          &copy; {new Date().getFullYear()}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={handleCopyEmail}
            onMouseEnter={() => setHoverEmail(true)}
            onMouseLeave={() => setHoverEmail(false)}
            title="Click to copy email"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              padding: '0.4rem 0.6rem',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              color: copied ? '#3ba3b8' : '#111111',
              transition: 'color 0.2s ease, opacity 0.2s ease',
              position: 'relative'
            }}
          >
            {/* Mail Icon */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>

            <span>{copied ? 'COPIED ✓' : 'EMAIL'}</span>

            {/* Copy Icon on hover */}
            {hoverEmail && !copied && (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3ba3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginLeft: '2px' }}>
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            )}
          </button>
        </div>
      </footer>
    </>
  );
}
