'use client';

import { motion } from 'framer-motion';

export default function EditorialStatement() {
  return (
      <section
        className="prefooter-section"
        style={{
          backgroundColor: '#ffffff', // White background
          padding: '80px 0 120px 0', /* doubled bottom space */
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
            font-size: 0.803rem !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.08em !important;
            justify-content: center;
            height: 3.43rem !important;
            padding: 0 1.98rem !important;
            background: rgba(59, 163, 184, 0.88) !important;
            color: #0b1116 !important;
            -webkit-text-fill-color: #0b1116 !important;
            border: none !important;
            border-radius: 0px !important;
            box-shadow: 6px 6px 0px rgba(59, 163, 184, 0.28) !important;
            text-shadow: 0 1px 1px rgba(255, 255, 255, 0.32), 0 0 1px rgba(255, 255, 255, 0.2) !important;
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
            transition: background 0.22s ease, border-color 0.22s ease, transform 0.2s ease, box-shadow 0.2s ease !important;
            -webkit-text-stroke: 0 !important;
          }
          .prefooter-btn-primary:hover {
            background: rgba(59, 163, 184, 1) !important;
            border-color: rgba(59, 163, 184, 1) !important;
            color: #0b1116 !important;
            -webkit-text-fill-color: #0b1116 !important;
            box-shadow: 6px 6px 0px rgba(59, 163, 184, 0.42) !important;
          }
          .face-cta {
            background-color: rgba(59, 163, 184, 0.88) !important;
            color: #0b1116 !important;
            -webkit-text-fill-color: #0b1116 !important;
            transition: box-shadow 0.3s ease, background 0.22s ease !important;
            border: none !important;
            box-shadow: 6px 6px 0px rgba(59, 163, 184, 0.28) !important;
            text-shadow: 0 1px 1px rgba(255, 255, 255, 0.32), 0 0 1px rgba(255, 255, 255, 0.2) !important;
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
          }
          .face-cta:hover {
            box-shadow: 6px 6px 0px rgba(59, 163, 184, 0.42) !important;
            background-color: rgba(59, 163, 184, 1) !important;
          }
          @media (max-width: 767px) {
            .prefooter-closing-line {
              font-size: clamp(1.48rem, 7.7vw, 2.95rem) !important;
              line-height: 1.35 !important;
            }
          }
          @media (min-width: 901px) {
            .prefooter-closing-subtext {
              font-size: 1.23rem !important; /* 15% smaller on desktop (was 1.45rem) */
            }
            .prefooter-closing-line {
              font-size: 2.08rem !important; /* 20% smaller on desktop (was 2.6rem) */
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
          {/* Short decor line above closing image */}
          <div className="prefooter-decor-line" style={{ 
            width: '48px', 
            height: '1px', 
            backgroundColor: '#0b0c10', 
            margin: '0 auto 2rem auto', 
            opacity: 0.6 
          }} />

          {/* Closing headline — moved above image */}
          <h2
            className="prefooter-closing-line"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.48rem, 7.7vw, 2.08rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.35,
              color: '#3ba3b8',
              WebkitTextFillColor: '#3ba3b8',
              textAlign: 'center',
              margin: '0 0 2.25rem 0',
              maxWidth: '28ch',
            }}
          >
            An <span style={{ fontWeight: 700 }}>outdated</span> website or <span style={{ fontWeight: 700 }}>repetitive</span> work is slowing your business down.
          </h2>

          {/* Text under closing headline */}
          <div
            className="prefooter-closing-subtext"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.15rem, 2.8vw, 1.23rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.55,
              color: 'var(--color-heading-silver, #4a5461)',
              WebkitTextFillColor: 'var(--color-heading-silver, #4a5461)',
              textAlign: 'center',
              margin: '0 auto 2rem auto',
              maxWidth: '46ch',
              textWrap: 'balance'
            }}
          >
            <p style={{ margin: 0 }}>
              <strong style={{ fontWeight: 700, color: 'inherit' }}>Let’s solve this.</strong> I’ll build the fix.
            </p>
          </div>

          {/* Action CTAs: doubled space underneath */}
          <div className="prefooter-cta-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '0.5rem', marginBottom: '2.5rem', justifyContent: 'center' }}>
            <a 
              href="mailto:iryna@irynasheremeta.com" 
              className="btn prefooter-btn-primary face-cta"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', transform: 'scale(1.05)' }}
            >
              <span>SEND YOUR PROBLEM MY WAY</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </motion.div>
      </section>


  );
}
