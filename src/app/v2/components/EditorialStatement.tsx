'use client';

import { motion } from 'framer-motion';
import FooterGarden from '../../components/FooterGarden';

export default function EditorialStatement({ showGarden = false }: { showGarden?: boolean }) {
  return (
      <section
        className={`prefooter-section${showGarden ? ' prefooter-with-garden' : ''}`}
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
        {showGarden && <div className="prefooter-garden"><FooterGarden /></div>}
        <style>{`
          .prefooter-with-garden { margin-top: 10.5rem; }
          .prefooter-garden { position: absolute; right: 1rem; bottom: 1rem; width: min(336px, 60%); }
          @media (min-width: 1200px) {
            .prefooter-garden { top: 50%; bottom: auto; transform: translateY(-50%); }
          }
          @media (max-width: 1199px) {
            .prefooter-with-garden { padding-bottom: 220px !important; }
          }

          .prefooter-section {
            background-color: #121316 !important;
          }
          .prefooter-closing-line {
            font-family: var(--font-heading) !important;
            font-weight: 300 !important;
            font-style: normal !important;
            letter-spacing: 0.015em !important;
            color: rgba(255, 255, 255, 0.8) !important;
            -webkit-text-fill-color: rgba(255, 255, 255, 0.8) !important;
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
          }
          .prefooter-closing-line strong {
            font-weight: 500 !important;
            font-style: normal !important;
            letter-spacing: 0.015em !important;
            color: #f2908f !important;
            -webkit-text-fill-color: #f2908f !important;
          }
          .prefooter-closing-desktop,
          .prefooter-closing-mobile .prefooter-closing-row:not(strong) {
            font-weight: 300 !important;
            font-style: normal !important;
            letter-spacing: 0.015em !important;
            color: rgba(255, 255, 255, 0.8) !important;
            -webkit-text-fill-color: rgba(255, 255, 255, 0.8) !important;
          }
          .prefooter-closing-subtext,
          .prefooter-closing-subtext p {
            font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
            font-weight: 300 !important;
            letter-spacing: 0.005em !important;
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
            border: 1px solid #ffffff !important;
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
            border-color: #ffffff !important;
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
            border: 1px solid #ffffff !important;
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
            border-color: #ffffff !important;
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
              text-align: left !important;
              width: 100% !important;
              max-width: none !important;
              align-self: stretch !important;
              font-weight: 300 !important;
              color: rgba(255, 255, 255, 0.8) !important;
              -webkit-text-fill-color: rgba(255, 255, 255, 0.8) !important;
            }
            .prefooter-closing-line strong {
              font-weight: 500 !important;
              color: #f2908f !important;
              -webkit-text-fill-color: #f2908f !important;
            }
            .prefooter-closing-mobile .prefooter-closing-row {
              font-style: normal !important;
              letter-spacing: 0.015em !important;
              color: rgba(255, 255, 255, 0.8) !important;
              -webkit-text-fill-color: rgba(255, 255, 255, 0.8) !important;
            }
            .prefooter-closing-mobile strong.prefooter-closing-row {
              font-weight: 500 !important;
              color: #f2908f !important;
              -webkit-text-fill-color: #f2908f !important;
            }
            .prefooter-section .prefooter-btn-primary.face-cta,
            .prefooter-btn-primary {
              background: linear-gradient(315deg, #d6b792 0%, #f2908f 100%) !important;
              height: 3.25rem !important; /* -10% from 3.612rem */
              width: auto !important;
              padding: 0 1.88rem !important; /* -10% from 2.088rem */
              margin: 0 auto !important;
              justify-content: center !important;
              white-space: nowrap !important;
              border-radius: 44px !important;
              border: 1px solid #ffffff !important;
              box-shadow: none !important;
              transform: none !important;
              box-sizing: border-box !important;
              gap: 0.49rem !important;
            }
            .prefooter-section .prefooter-btn-primary.face-cta span,
            .prefooter-btn-primary span {
              font-size: 0.78rem !important; /* -10% from 0.864rem */
              font-weight: 700 !important;
              letter-spacing: 0.08em !important;
              white-space: nowrap !important;
              display: inline-block !important;
            }
            .prefooter-section .prefooter-btn-primary.face-cta svg,
            .prefooter-btn-primary svg {
              width: 11px !important;
              height: 11px !important;
            }
            .prefooter-cta-container {
              justify-content: center !important;
              align-items: center !important;
              width: 100% !important;
            }
          }
          @media (min-width: 901px) {
            .prefooter-closing-line,
            .prefooter-closing-desktop,
            .prefooter-closing-desktop > span {
              font-weight: 400 !important;
            }
            .prefooter-closing-line strong {
              font-weight: 600 !important;
            }
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
              font-size: var(--closing-heading-size) !important;
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
            .prefooter-content {
              padding-left: 1.5rem !important;
              padding-right: 1.5rem !important;
            }
            .prefooter-closing-desktop {
              display: none !important;
            }
            .prefooter-closing-mobile {
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              width: 100% !important;
              gap: 0px !important;
              text-align: center !important;
            }
            .prefooter-closing-row {
              display: block !important;
              width: 100% !important;
              text-align: center !important;
            }
          }
        `}</style>
        <div
          className="prefooter-content"
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
          {/* 1. Short architectural decor line draws from center */}
          <motion.div
            className="prefooter-decor-line"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 0.9 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              width: '48px', 
              height: '1px', 
              backgroundColor: '#2d3139', 
              margin: '4rem auto 2rem auto',
              transformOrigin: 'center'
            }}
          />

          {/* 2. Closing headline — Two-Beat Conviction Reveal (Setup -> Coral Punchline) */}
          <motion.h2
            className="prefooter-closing-line"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.78, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--closing-heading-size)',
              fontWeight: 300,
              letterSpacing: '0.015em',
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
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.72, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'inline', fontWeight: 300, color: 'rgba(255, 255, 255, 0.8)', WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)' }}
              >
                is <strong style={{ fontWeight: 500, fontStyle: 'normal', letterSpacing: '0.015em', color: '#f2908f', WebkitTextFillColor: '#f2908f' }}>slowing your business down.</strong>
              </motion.span>
            </span>
            <span className="prefooter-closing-mobile">
              <span className="prefooter-closing-row">An outdated website</span>
              <span className="prefooter-closing-row" style={{ fontWeight: 300, color: 'rgba(255, 255, 255, 0.8)', WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)' }}>or repetitive work is</span>
              <span className="prefooter-closing-row"><strong style={{ fontWeight: 500, fontStyle: 'normal', letterSpacing: '0.015em', color: '#f2908f', WebkitTextFillColor: '#f2908f' }}>slowing your</strong></span>
              <strong className="prefooter-closing-row" style={{ fontWeight: 500, fontStyle: 'normal', letterSpacing: '0.015em', color: '#f2908f', WebkitTextFillColor: '#f2908f' }}>
                business down.
              </strong>
            </span>
          </motion.h2>

          {/* 3. Resolution Subtext ("Let's solve this.") */}
          <motion.div
            className="prefooter-closing-subtext"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.68, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
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
          </motion.div>

          {/* 4. Action CTA Pill Arrival */}
          <motion.div
            className="prefooter-cta-container"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.72, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '0rem', marginBottom: '2.5rem', justifyContent: 'center' }}
          >
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
          </motion.div>
        </div>
      </section>


  );
}
