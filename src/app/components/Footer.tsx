'use client';

import { motion } from 'framer-motion';
import FooterGarden from './FooterGarden';

export default function Footer() {
  return (
    <footer 
      className="site-footer-minimal"
      style={{
        backgroundColor: '#17130f',
        background: '#17130f',
        width: '100%',
        padding: '1.2rem 0 1.44rem 0',
        borderTop: '1px solid rgba(0, 0, 0, 0.45)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <style>{`
        .site-footer-minimal {
          background-color: #17130f !important;
          background: #17130f !important;
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
          font-size: 14px !important;
          font-weight: 400;
          letter-spacing: 0.02em;
          color: rgba(201, 206, 214, 0.77) !important;
          -webkit-text-fill-color: rgba(201, 206, 214, 0.77) !important;
          margin: 0;
          text-align: left;
        }
        .footer-hire-link {
          font-family: var(--font-label), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 14px !important;
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
      <FooterGarden />
      <motion.div
        className="footer-inner-container"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="footer-copy-text">
          &copy; 2026 Iryna Sheremeta
        </p>
      </motion.div>
    </footer>
  );
}
