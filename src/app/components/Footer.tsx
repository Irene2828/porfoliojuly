'use client';

export default function Footer() {
  return (
    <footer 
      className="site-footer-minimal"
      style={{
        backgroundColor: '#1e2126',
        background: '#1e2126',
        width: '100%',
        padding: '1.2rem 0 1.44rem 0',
        borderTop: '1px solid rgba(247, 214, 208, 0.35)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <style>{`
        .site-footer-minimal {
          background-color: #1e2126 !important;
          background: #1e2126 !important;
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
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          margin: 0;
          text-align: left;
          opacity: 0.95;
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
      <div className="footer-inner-container">
        <p className="footer-copy-text">
          &copy; 2026 Iryna Sheremeta &middot; Websites &amp; tools
        </p>
        <a href="/hire" className="footer-hire-link">
          Hiring? &rarr;
        </a>
      </div>
    </footer>
  );
}
