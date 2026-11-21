'use client';

import { motion } from 'framer-motion';

const TICKER_SEGMENTS = [
  'Iryna Sheremeta',
  'Product Designer & AI Builder',
  'Custom websites — from problem to shipped product',
  'Montréal',
  'Remote across Canada',
];

export default function Footer({ variant }: { variant?: 'standard' | 'ticker' }) {
  if (variant === 'ticker') {
    return (
      <footer
        className="site-footer-ticker"
        style={{
          backgroundColor: '#121316',
          background: '#121316',
          width: '100%',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <style>{`
          .site-footer-ticker {
            background-color: #121316 !important;
            background: #121316 !important;
          }
          .footer-ticker-strip {
            opacity: 0.2;
            overflow: hidden;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.012));
            -webkit-backdrop-filter: blur(18px) saturate(160%);
            backdrop-filter: blur(18px) saturate(160%);
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding: 0.95rem 0;
          }
          .footer-ticker-track {
            display: flex;
            width: max-content;
            animation: footerTickerScroll 30s linear infinite;
          }
          .site-footer-ticker:hover .footer-ticker-track {
            animation-play-state: paused;
          }
          .footer-ticker-group {
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .footer-ticker-item {
            font-family: var(--font-label), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 0.684rem;
            font-weight: 600;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            white-space: nowrap;
            color: rgba(255, 255, 255, 0.72);
            -webkit-text-fill-color: rgba(255, 255, 255, 0.72);
            padding: 0 1.5rem;
          }
          .footer-ticker-item-dim {
            color: rgba(255, 255, 255, 0.72);
            -webkit-text-fill-color: rgba(255, 255, 255, 0.72);
            font-weight: 500;
          }
          .footer-ticker-dot {
            color: rgba(255, 255, 255, 0.38);
            -webkit-text-fill-color: rgba(255, 255, 255, 0.38);
            font-size: 0.72rem;
          }
          @keyframes footerTickerScroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .footer-ticker-track {
              animation: none;
              width: 100%;
              justify-content: center;
            }
            .footer-ticker-group-dup {
              display: none;
            }
          }
        `}</style>
        <div className="footer-ticker-strip">
          <div className="footer-ticker-track">
            {[0, 1].map((n) => (
              <div
                className={`footer-ticker-group${n === 1 ? ' footer-ticker-group-dup' : ''}`}
                aria-hidden={n === 1}
                key={n}
              >
                {TICKER_SEGMENTS.map((segment, i) => (
                  <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
                    <span className={`footer-ticker-item${i > 0 ? ' footer-ticker-item-dim' : ''}`}>
                      {segment}
                    </span>
                    <span className="footer-ticker-dot">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer 
      className="site-footer-minimal"
      style={{
        backgroundColor: '#121316',
        background: '#121316',
        width: '100%',
        padding: '1.2rem 0 1.2rem 0',
        borderTop: '1px solid rgba(0, 0, 0, 0.45)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <style>{`
        .site-footer-minimal {
          background-color: #121316 !important;
          background: #121316 !important;
          border-top: 1px solid rgba(0, 0, 0, 0.45) !important;
        }
        .footer-inner-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: nowrap;
          gap: 1rem;
          width: 100%;
          box-sizing: border-box;
          padding: 0 var(--space-md, 2rem);
          margin: 0 auto;
        }
        @media (min-width: 1200px) {
          .footer-inner-container {
            max-width: 1267.2px;
            padding: 0 1.76rem;
          }
        }
        @media (max-width: 900px) {
          .footer-inner-container {
            padding: 0 1.5rem !important;
          }
        }
        .footer-copy-text {
          font-family: var(--font-label), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: var(--text-small) !important;
          line-height: var(--lh-small);
          font-weight: 400;
          letter-spacing: 0.02em;
          color: rgba(201, 206, 214, 0.77) !important;
          -webkit-text-fill-color: rgba(201, 206, 214, 0.77) !important;
          margin: 0;
          text-align: left;
        }
        .footer-name-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.6rem;
          width: 100%;
          position: relative;
        }
        .footer-meta-block {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 1rem;
          width: 100%;
        }
        .footer-meta-text {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 300;
          letter-spacing: 0.015em;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.68) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.68) !important;
          margin: 0;
          text-align: center;
        }
        .footer-linkedin-icon {
          display: inline-flex;
          flex-shrink: 0;
          position: absolute;
          right: 0;
          color: rgba(255, 255, 255, 0.68);
          -webkit-text-fill-color: rgba(255, 255, 255, 0.68);
          transition: color 0.25s ease;
        }
        .footer-linkedin-icon:hover {
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
        }
        @media (max-width: 640px) {
          .footer-meta-block {
            flex-direction: column !important;
            align-items: center !important;
            gap: 0.75rem !important;
          }
          .footer-meta-text {
            text-align: center !important;
          }
        }
        .footer-hire-link {
          font-family: var(--font-label), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: var(--text-small) !important;
          line-height: var(--lh-small);
          font-weight: 500;
          letter-spacing: 0.02em;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .footer-hire-link:hover {
          color: #f7d6d0 !important;
          -webkit-text-fill-color: #f7d6d0 !important;
          transform: translateX(2px);
        }
        @media (max-width: 640px) {
          .footer-inner-container {
            flex-direction: column !important;
            justify-content: center !important;
            text-align: center !important;
            gap: 0.75rem !important;
            padding: 0 1.5rem !important;
          }
          .footer-copy-text {
            text-align: center !important;
          }
        }
      `}</style>
      <motion.div
        className="footer-inner-container"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        style={{ flexDirection: 'column', alignItems: 'stretch', gap: '1.8rem' }}
      >
        <div className="footer-name-row">
          <p className="footer-copy-text">
            &copy; 2026 Iryna Sheremeta
          </p>
          <a
            className="footer-linkedin-icon"
            href="https://www.linkedin.com/in/iryna-sheremeta-643316414/"
            target="_blank"
            rel="noreferrer"
            aria-label="Find me on LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
