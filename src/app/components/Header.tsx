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
              color: 'var(--header-title-color, #a0a6b1)', 
              lineHeight: '1.2', 
              letterSpacing: '0.03em' 
            }}>
              / Custom websites, tools and workflows /
            </span>
          </a>
        </div>

        {/* Center (Desktop): Empty */}
        <div className="header-center-empty"></div>

        {/* Right side (Desktop): Nav links */}
        <nav className="header-nav header-nav-desktop" style={{ marginLeft: 'auto', marginRight: '0', justifyContent: 'flex-end' }}>
          <a href="#cases" className="nav-link">WORK</a>
          <a href="#about" className="nav-link">ABOUT ME</a>
          <a 
            href="mailto:iryna@irynasheremeta.com" 
            className="nav-link"
            onClick={handleCopyEmail}
            title="iryna@irynasheremeta.com (click to copy)"
            style={{ 
              color: copied ? '#f2908f' : undefined,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>{copied ? 'COPIED ✓' : 'EMAIL'}</span>
            <svg 
              width="15" 
              height="11" 
              viewBox="0 0 22 15" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.6" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{ transform: 'translateY(-0.5px)', opacity: 0.9 }}
            >
              <rect x="1" y="1" width="20" height="13" rx="1.5"></rect>
              <polyline points="1.5 2.5 11 9 20.5 2.5"></polyline>
            </svg>
          </a>
        </nav>
      </div>

      {/* Mobile Header Elements: Name and Title on Left, CASES/ABOUT on Right */}
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
              <a href="#cases" onClick={() => setIsMenuOpen(false)} className="drawer-link">WORK</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="drawer-link">ABOUT ME</a>
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
                  stroke="currentColor" 
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
