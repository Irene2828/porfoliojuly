'use client';

import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('iryna@irynasheremeta.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition when user scrolls down (e.g. past top hero area, ~80px)
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`premium-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <style>{`
        .premium-header,
        .v2-theme .premium-header {
          background: #121316 !important;
          background-color: #121316 !important;
          border-bottom: 1px solid rgba(242, 144, 143, 0.18) !important;
          box-shadow: none !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          transition: background 0.25s ease, backdrop-filter 0.25s ease, -webkit-backdrop-filter 0.25s ease, box-shadow 0.25s ease, border-bottom 0.25s ease !important;
        }
        .premium-header.header-scrolled,
        .v2-theme .premium-header.header-scrolled {
          background: rgba(18, 19, 22, 0.80) !important;
          background-color: rgba(18, 19, 22, 0.80) !important;
          border-bottom: 1px solid rgba(242, 144, 143, 0.22) !important;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25) !important;
          backdrop-filter: blur(20px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
        }
        .v2-theme .premium-header .mobile-brand-title,
        .v2-theme .header-spacer-desktop a span:last-child {
          color: rgba(201, 206, 214, 0.7) !important;
          -webkit-text-fill-color: rgba(201, 206, 214, 0.7) !important;
        }
        .mobile-brand-title {
          color: rgba(201, 206, 214, 0.7) !important;
          -webkit-text-fill-color: rgba(201, 206, 214, 0.7) !important;
        }
        .v2-theme .header-nav-desktop,
        .header-nav-desktop {
          gap: 1.75rem !important; /* Less generous spacing between links */
        }
        .v2-theme .premium-header .header-nav-desktop a[href^="mailto:"] svg,
        .v2-theme .premium-header .drawer-nav-links a[href^="mailto:"] svg,
        .premium-header a[href^="mailto:"] svg {
          stroke: #e2e4e9 !important;
        }
        @media (max-width: 900px) {
          .premium-header {
            padding-left: 0.1rem !important;
            padding-right: 1rem !important;
          }
          .mobile-header-left {
            right: 1rem !important;
          }
          .mobile-header-right {
            transform: translateY(0.9rem) !important;
          }
        }
      `}</style>
      <div className="header-inner-wrapper">
        {/* Left side (Desktop): Name and Title */}
        <div className="header-spacer-desktop">
          <a href="/" aria-label="Home" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ 
              fontFamily: 'var(--font-heading), -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif', 
              fontSize: '13.8px', 
              fontWeight: 500, 
              color: 'var(--header-brand-color, #e2e4e9)', 
              letterSpacing: '0.04em', 
              lineHeight: '1.2'
            }}>
              IRYNA SHEREMETA
            </span>
            <span style={{ 
              fontFamily: 'var(--font-heading), -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif', 
              fontSize: '13px', 
              fontWeight: 400, 
              color: 'var(--header-title-color, rgba(201, 206, 214, 0.7))', 
              lineHeight: '1.2', 
              letterSpacing: '0.03em' 
            }}>
              / Custom websites, tools and workflows /
            </span>
          </a>
        </div>

        {/* Center (Desktop): Empty */}
        <div className="header-center-empty"></div>

        {/* Right side (Desktop): Nav links + Hamburger */}
        <nav className="header-nav header-nav-desktop" style={{ marginLeft: 'auto', marginRight: '0', justifyContent: 'flex-end', alignItems: 'center' }}>
          <a href="/about" className="nav-link">ABOUT</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">AI SOLUTIONS</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">WEBSITES</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">CONSULTING</a>
          <button
            className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            style={{ marginLeft: '0.4rem', cursor: 'pointer' }}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </nav>
      </div>

      {/* Mobile Header Elements: Name and Title on Left, ABOUT ME on Right */}
      <div className="mobile-header-left">
        <a href="/" aria-label="Home" className="mobile-brand-link">
          <span className="mobile-brand-name">IRYNA SHEREMETA</span>
          <span className="mobile-brand-title">/ Custom websites, tools and workflows /</span>
        </a>
      </div>

      <div className="mobile-header-right">
        <button
          className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>

      {/* Drawer Overlay Menu */}
      {isMenuOpen && (
        <div className="header-drawer-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="header-drawer-content" onClick={(e) => e.stopPropagation()}>
            <button className="drawer-close-btn" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">&times;</button>
            <div className="drawer-nav-links">
              <a href="/about" onClick={() => setIsMenuOpen(false)} className="drawer-link">ABOUT</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }} className="drawer-link">AI SOLUTIONS</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }} className="drawer-link">WEBSITES</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }} className="drawer-link">CONSULTING</a>
              <a 
                href="mailto:iryna@irynasheremeta.com" 
                onClick={(e) => { handleCopyEmail(e); setIsMenuOpen(false); }} 
                className="drawer-link"
                style={{ 
                  color: copied ? '#f2908f' : undefined,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>{copied ? 'COPIED ✓' : 'EMAIL'}</span>
                <svg 
                  width="17" 
                  height="12" 
                  viewBox="0 0 22 15" 
                  fill="none" 
                  stroke="#e2e4e9" 
                  strokeWidth="1.6" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="1" y="1" width="20" height="13" rx="1.5"></rect>
                  <polyline points="1.5 2.5 11 9 20.5 2.5"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="header-bottom-hairline"></div>
    </header>
  );
}
