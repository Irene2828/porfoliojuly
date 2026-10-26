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
          .prefooter-closing-line {
            color: rgba(255, 255, 255, 0.8) !important;
            -webkit-text-fill-color: rgba(255, 255, 255, 0.8) !important;
          }
          .prefooter-closing-subtext {
            color: rgba(255, 255, 255, 0.8) !important;
            -webkit-text-fill-color: rgba(255, 255, 255, 0.8) !important;
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
            background: #f0a38d !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            border: 1px solid #f0a38d !important;
            border-radius: 40px !important;
            box-shadow: none !important;
            text-shadow: none !important;
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
            transition: all 0.25s ease !important;
            -webkit-text-stroke: 0 !important;
          }
          .prefooter-btn-primary svg {
            stroke: #000000 !important;
          }
          .prefooter-btn-primary:hover {
            background: #f0a38d !important;
            border-color: #f0a38d !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            border-radius: 40px !important;
            transform: translateY(-2px) scale(1.05) !important;
            box-shadow: 0 8px 24px rgba(240, 163, 141, 0.35) !important;
          }
          .prefooter-btn-primary:hover svg {
            stroke: #000000 !important;
          }
          /* Primary CTA: matching About Me hovered pill button style (#f0a38d, border-radius: 40px) */
          .prefooter-section .prefooter-btn-primary.face-cta {
            background: #f0a38d !important;
            border: 1px solid #f0a38d !important;
            border-radius: 40px !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            box-shadow: none !important;
            transform: scale(1.05) !important;
          }
          .prefooter-section .prefooter-btn-primary.face-cta:hover {
            background: #f0a38d !important;
            border-color: #f0a38d !important;
            border-radius: 40px !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            transform: translateY(-2px) scale(1.05) !important;
            box-shadow: 0 8px 24px rgba(240, 163, 141, 0.35) !important;
          }
          @media (max-width: 900px) {
            .prefooter-closing-line {
              font-size: clamp(1.48rem, 7.7vw, 2.08rem) !important;
              line-height: 1.35 !important;
            }
            .prefooter-section .prefooter-btn-primary.face-cta,
            .prefooter-btn-primary {
              background: #f0a38d !important;
              height: 3.09rem !important;
              width: auto !important;
              min-width: min(84%, 280px) !important;
              max-width: 92% !important;
              padding: 0 1.35rem !important;
              margin: 0 auto !important;
              justify-content: center !important;
              white-space: nowrap !important;
              border-radius: 40px !important;
              border: 1px solid #f0a38d !important;
              box-shadow: none !important;
              transform: none !important;
              box-sizing: border-box !important;
            }
            .prefooter-section .prefooter-btn-primary.face-cta span,
            .prefooter-btn-primary span {
              font-size: 0.76rem !important;
              letter-spacing: 0.05em !important;
              white-space: nowrap !important;
              display: inline-block !important;
            }
            .prefooter-cta-container {
              justify-content: center !important;
              align-items: center !important;
              width: 100% !important;
            }
          }
          @media (min-width: 901px) {
            .prefooter-section {
              padding-bottom: 5rem !important; /* halved from 10rem */
            }
            .prefooter-cta-container {
              margin-bottom: 2.5rem !important; /* halved from 5rem */
            }
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
              color: 'rgba(255, 255, 255, 0.8)',
              WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)',
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
              color: 'rgba(255, 255, 255, 0.8)',
              WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
              margin: '0 auto 2rem auto', /* 50% closer to button (was 4rem) */
              maxWidth: '46ch',
              textWrap: 'balance'
            }}
          >
            <p style={{ margin: 0 }}>
              <strong style={{ fontWeight: 700, letterSpacing: '0.005em', color: '#f2908f', WebkitTextFillColor: '#f2908f' }}>Let’s solve this.</strong> I’ll build the fix.
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
