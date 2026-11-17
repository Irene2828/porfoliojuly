'use client';

import { motion } from 'framer-motion';

export default function Footer() {
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
        .footer-meta-block {
          display: flex;
          justify-content: space-between;
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
          text-align: left;
        }
        .footer-linkedin-icon {
          display: inline-flex;
          flex-shrink: 0;
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
        style={{ flexDirection: 'column', alignItems: 'stretch', gap: '0.9rem' }}
      >
        <div className="footer-meta-block">
          <div>
            <p className="footer-meta-text">
              Open to remote roles across Canada · Based in Montréal
            </p>
            <p className="footer-meta-text">
              Certified in UX design · Hands-on with most agentic tools · Master’s degree in social science · Startup life, from my own experience
            </p>
          </div>
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
        <p className="footer-copy-text">
          &copy; 2026 Iryna Sheremeta
        </p>
      </motion.div>
    </footer>
  );
}
