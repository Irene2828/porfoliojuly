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
            font-size: 0.81rem !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.08em !important;
            justify-content: center;
            height: 3.48rem !important;
            padding: 0 2rem !important;
            background: rgba(59, 163, 184, 0.85) !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            border: none !important;
            border-radius: 0px !important;
            box-shadow: 6px 6px 0px rgba(59, 163, 184, 0.28) !important;
            transition: background 0.22s ease, border-color 0.22s ease, transform 0.2s ease, box-shadow 0.2s ease !important;
            -webkit-text-stroke: 0 !important;
          }
          .prefooter-btn-primary:hover {
            background: rgba(59, 163, 184, 0.98) !important;
            border-color: rgba(59, 163, 184, 0.98) !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            box-shadow: 6px 6px 0px rgba(59, 163, 184, 0.42) !important;
          }
          .face-cta {
            background-color: rgba(59, 163, 184, 0.85) !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            transition: box-shadow 0.3s ease, background 0.22s ease !important;
            border: none !important;
            box-shadow: 6px 6px 0px rgba(59, 163, 184, 0.28) !important;
          }
          .face-cta:hover {
            box-shadow: 6px 6px 0px rgba(59, 163, 184, 0.42) !important;
            background-color: rgba(59, 163, 184, 0.98) !important;
          }
          @media (min-width: 901px) {
            .prefooter-closing-subtext {
              font-size: 1.23rem !important; /* 15% smaller on desktop (was 1.45rem) */
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
              fontSize: 'clamp(2rem, 8vw, 2.6rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              color: '#3ba3b8',
              WebkitTextFillColor: '#3ba3b8',
              textAlign: 'center',
              margin: '0 0 2.25rem 0',
              maxWidth: '20ch',
            }}
          >
            The future is <span style={{ fontWeight: 700, color: '#3ba3b8', WebkitTextFillColor: '#3ba3b8' }}>agentic.</span>
            <br />
            The future is <span style={{ fontWeight: 700, color: '#3ba3b8', WebkitTextFillColor: '#3ba3b8' }}>custom.</span>
          </h2>

          {/* Text under closing headline — styled matching closing headline */}
          <p
            className="prefooter-closing-subtext"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.15rem, 2.8vw, 1.23rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.45,
              color: 'var(--color-heading-silver, #4a5461)',
              WebkitTextFillColor: 'var(--color-heading-silver, #4a5461)',
              textAlign: 'center',
              margin: '0 auto 2rem auto',
              maxWidth: '38ch',
              textWrap: 'balance'
            }}
          >
            I&apos;ll help your business <strong style={{ fontWeight: 700 }}>stand out and get future-ready</strong> with a <em style={{ fontStyle: 'italic' }}>custom digital product you need to grow.</em>
          </p>

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
