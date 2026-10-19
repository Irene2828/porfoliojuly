'use client';

export default function Footer() {
  return (
    <footer 
      className="site-footer-minimal"
      style={{
        background: `
          radial-gradient(ellipse 50% 85% at 0% 100%, rgba(70, 201, 219, 0.28) 0%, rgba(70, 201, 219, 0.10) 35%, rgba(255, 255, 255, 0) 72%),
          radial-gradient(ellipse 50% 85% at 100% 100%, rgba(70, 201, 219, 0.25) 0%, rgba(70, 201, 219, 0.09) 35%, rgba(255, 255, 255, 0) 72%),
          #ffffff
        `,
        backgroundColor: '#ffffff',
        width: '100%',
        padding: '1.5rem 0 1.8rem 0',
        borderTop: '1px solid rgba(59, 163, 184, 0.15)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <style>{`
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
          color: #4a5461 !important;
          margin: 0;
          text-align: left;
          opacity: 1;
        }
        .footer-hire-link {
          font-family: var(--font-label), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 14px !important;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: #4a5461 !important;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
          transition: color 0.2s ease;
        }
        .footer-hire-link:hover {
          color: #1d4e5b !important;
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
          &copy; 2026 Iryna Sheremeta &middot; Websites &amp; tools &middot; Worldwide
        </p>
        <a href="/hire" className="footer-hire-link">
          Hiring? &rarr;
        </a>
      </div>
    </footer>
  );
}
