'use client';

import { motion } from 'framer-motion';

export default function EditorialStatement() {
  return (
      <section
        className="prefooter-section"
        style={{
          backgroundColor: '#121316',
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
          .prefooter-section {
            background-color: #121316 !important;
          }
          .prefooter-btn-primary {
            font-family: var(--font-label), sans-serif !important;
            font-size: 0.803rem !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.08em !important;
            justify-content: center;
            height: 3.43rem !important;
            padding: 0 1.98rem !important;
            background: #f7d6d0 !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            border: 1px solid rgba(255, 255, 255, 0.45) !important;
            border-radius: 0px !important;
            box-shadow: none !important;
            text-shadow: none !important;
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
            transition: background 0.22s ease, border-color 0.22s ease, transform 0.2s ease, box-shadow 0.2s ease !important;
            -webkit-text-stroke: 0 !important;
          }
          .prefooter-btn-primary svg {
            stroke: #000000 !important;
          }
          .prefooter-btn-primary:hover {
            background: #fae4e0 !important;
            border-color: #ffffff !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            box-shadow: none !important;
          }
          .prefooter-btn-primary:hover svg {
            stroke: #000000 !important;
          }
          /* Primary CTA: matches hero button style (soft pastel beige pink, no shadow) */
          .prefooter-section .prefooter-btn-primary.face-cta {
            background: #f7d6d0 !important;
            border-color: rgba(255, 255, 255, 0.45) !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            box-shadow: none !important;
          }
          .prefooter-section .prefooter-btn-primary.face-cta:hover {
            background: #fae4e0 !important;
            border-color: #ffffff !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            box-shadow: none !important;
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
          {/* Short decor line above closing headline */}
          <div className="prefooter-decor-line" style={{ 
            width: '48px', 
            height: '1px', 
            backgroundColor: '#2d3139', 
            margin: '4rem auto 2rem auto', 
            opacity: 0.9 
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
              color: '#f7d6d0',
              WebkitTextFillColor: '#f7d6d0',
              textAlign: 'center',
              margin: '0 0 3.5rem 0',
              maxWidth: '28ch',
            }}
          >
            An <span style={{ fontWeight: 700, letterSpacing: '0.025em', color: '#f2908f', WebkitTextFillColor: '#f2908f' }}>outdated</span> website or <span style={{ fontWeight: 700, letterSpacing: '0.025em', color: '#f2908f', WebkitTextFillColor: '#f2908f' }}>repetitive</span> work is slowing your business down.
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
              color: '#f7d6d0',
              WebkitTextFillColor: '#f7d6d0',
              textAlign: 'center',
              margin: '0 auto 2rem auto', /* 50% closer to button (was 4rem) */
              maxWidth: '46ch',
              textWrap: 'balance'
            }}
          >
            <p style={{ margin: 0 }}>
              <strong style={{ fontWeight: 700, letterSpacing: '0.02em', color: '#f2908f', WebkitTextFillColor: '#f2908f' }}>Let’s solve this.</strong> I’ll build the fix.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="prefooter-cta-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '0rem', marginBottom: '2.5rem', justifyContent: 'center' }}>
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
