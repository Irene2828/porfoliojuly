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
            font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
            font-weight: 300 !important;
            letter-spacing: 0.01em !important;
            color: rgba(255, 255, 255, 0.8) !important;
            -webkit-text-fill-color: rgba(255, 255, 255, 0.8) !important;
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
          }
          .prefooter-closing-line strong {
            font-weight: 600 !important;
            letter-spacing: 0.025em !important;
            color: #f2908f !important;
            -webkit-text-fill-color: #f2908f !important;
          }
          .prefooter-closing-subtext,
          .prefooter-closing-subtext p {
            font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
            font-weight: 300 !important;
            letter-spacing: -0.011em !important;
            color: rgba(255, 255, 255, 0.8) !important;
            -webkit-text-fill-color: rgba(255, 255, 255, 0.8) !important;
          }
          .prefooter-btn-primary {
            font-family: var(--font-label), sans-serif !important;
            font-size: 0.72rem !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.08em !important;
            justify-content: center;
            height: 3.01rem !important;
            padding: 0 1.74rem !important;
            background: linear-gradient(315deg, #d6b792 0%, #f2908f 100%) !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            border: 1px solid #e2a792 !important;
            border-radius: 40px !important;
            box-shadow: none !important;
            text-shadow: none !important;
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
            transition: all 0.25s ease !important;
            -webkit-text-stroke: 0 !important;
          }
          .prefooter-btn-primary span {
            font-size: 0.72rem !important;
            font-weight: 700 !important;
            letter-spacing: 0.08em !important;
          }
          .prefooter-btn-primary svg {
            stroke: #000000 !important;
          }
          .prefooter-btn-primary:hover {
            background: linear-gradient(315deg, #ddc19e 0%, #f49c9b 100%) !important;
            border-color: #e2a792 !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            border-radius: 40px !important;
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 24px rgba(242, 144, 143, 0.28) !important;
          }
          .prefooter-btn-primary:hover svg {
            stroke: #000000 !important;
          }
          /* Primary CTA: matching About Me hovered pill button style (#d6b792, border-radius: 40px) */
          .prefooter-section .prefooter-btn-primary.face-cta {
            background: linear-gradient(315deg, #d6b792 0%, #f2908f 100%) !important;
            border: 1px solid #e2a792 !important;
            border-radius: 40px !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            height: 3.01rem !important;
            padding: 0 1.74rem !important;
            font-size: 0.72rem !important;
            font-weight: 700 !important;
            box-shadow: none !important;
            transform: none !important;
          }
          .prefooter-section .prefooter-btn-primary.face-cta:hover {
            background: linear-gradient(315deg, #ddc19e 0%, #f49c9b 100%) !important;
            border-color: #e2a792 !important;
            border-radius: 40px !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 24px rgba(242, 144, 143, 0.28) !important;
          }
          @media (max-width: 900px) {
            .prefooter-closing-line {
              font-size: clamp(1.48rem, 7.7vw, 2.08rem) !important;
              line-height: 1.35 !important;
            }
            .prefooter-section .prefooter-btn-primary.face-cta,
            .prefooter-btn-primary {
              background: linear-gradient(315deg, #d6b792 0%, #f2908f 100%) !important;
              height: 3.01rem !important;
              width: auto !important;
              padding: 0 1.74rem !important;
              margin: 0 auto !important;
              justify-content: center !important;
              white-space: nowrap !important;
              border-radius: 40px !important;
              border: 1px solid #e2a792 !important;
              box-shadow: none !important;
              transform: none !important;
              box-sizing: border-box !important;
            }
            .prefooter-section .prefooter-btn-primary.face-cta span,
            .prefooter-btn-primary span {
              font-size: 0.72rem !important;
              font-weight: 700 !important;
              letter-spacing: 0.08em !important;
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
              max-width: 44ch !important;
            }
            .prefooter-closing-desktop {
              display: inline !important;
            }
            .prefooter-closing-mobile {
              display: none !important;
            }
          }
          @media (max-width: 900px) {
            .prefooter-closing-desktop {
              display: none !important;
            }
            .prefooter-closing-mobile {
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              gap: 0px !important;
            }
            .prefooter-closing-row {
              display: block !important;
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
              fontFamily: 'var(--font-body), "Plus Jakarta Sans", sans-serif',
              fontSize: 'clamp(1.48rem, 7.7vw, 2.08rem)',
              fontWeight: 300,
              letterSpacing: '-0.035em',
              lineHeight: 1.35,
              color: 'rgba(255, 255, 255, 0.8)',
              WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
              margin: '0 0 3.5rem 0',
              maxWidth: '44ch',
            }}
          >
            <span className="prefooter-closing-desktop">
              An outdated website or repetitive work{' '}
              <br />
              <strong style={{ fontWeight: 600, letterSpacing: '0.025em', color: '#f2908f', WebkitTextFillColor: '#f2908f' }}>
                is slowing your business down.
              </strong>
            </span>
            <span className="prefooter-closing-mobile">
              <span className="prefooter-closing-row">An outdated website</span>
              <span className="prefooter-closing-row">or repetitive work</span>
              <strong className="prefooter-closing-row" style={{ fontWeight: 600, letterSpacing: '0.025em', color: '#f2908f', WebkitTextFillColor: '#f2908f' }}>
                is slowing your
              </strong>
              <strong className="prefooter-closing-row" style={{ fontWeight: 600, letterSpacing: '0.025em', color: '#f2908f', WebkitTextFillColor: '#f2908f' }}>
                business down.
              </strong>
            </span>
          </h2>

          {/* Text under closing headline */}
          <div
            className="prefooter-closing-subtext"
            style={{
              fontFamily: 'var(--font-body), "Plus Jakarta Sans", sans-serif',
              fontSize: 'clamp(1.15rem, 2.8vw, 1.23rem)',
              fontWeight: 300,
              letterSpacing: '-0.011em',
              lineHeight: 1.55,
              color: 'rgba(255, 255, 255, 0.8)',
              WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
              margin: '0 auto 2rem auto', /* 50% closer to button (was 4rem) */
              maxWidth: '46ch',
              textWrap: 'balance'
            }}
          >
            <p style={{ margin: 0 }}>Let’s solve this.</p>
          </div>

          {/* Action CTAs */}
          <div className="prefooter-cta-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '0rem', marginBottom: '2.5rem', justifyContent: 'center' }}>
            <a 
              href="mailto:iryna@irynasheremeta.com" 
              className="btn prefooter-btn-primary face-cta"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
            >
              <span style={{ letterSpacing: '0.08em' }}>SEND YOUR PROBLEM MY WAY</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </motion.div>
      </section>


  );
}
