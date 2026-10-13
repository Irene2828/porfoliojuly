'use client';

import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="premium-header">
      <div className="header-inner-wrapper">
        {/* Left side (Desktop): Name and Title */}
        <div className="header-spacer-desktop">
          <a href="/" aria-label="Home" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: '0.5rem' }}>
            <span style={{ fontFamily: 'var(--font-heading), Outfit, sans-serif', fontSize: '13.65px', fontWeight: 600, color: 'var(--color-heading-silver)', letterSpacing: '0.14em', textTransform: 'uppercase', lineHeight: '1.3' }}>IRYNA SHEREMETA</span>
            <span style={{ fontFamily: 'var(--font-body), "Plus Jakarta Sans", sans-serif', fontSize: '0.827rem', fontWeight: 500, color: '#5C6672', lineHeight: '1.2', letterSpacing: '0.06em' }}>/ Creative technologist /</span>
          </a>
        </div>

        {/* Center (Desktop): Empty */}
        <div className="header-center-empty"></div>

        {/* Right side (Desktop): Nav links */}
        <nav className="header-nav header-nav-desktop" style={{ marginLeft: 'auto', marginRight: '0', justifyContent: 'flex-end' }}>
          <a href="#expertise" className="nav-link">EXPERTISE</a>
          <a href="#cases" className="nav-link">CASES</a>
          <a href="#about" className="nav-link">ABOUT</a>
        </nav>
      </div>

      {/* Mobile Header Elements: Name and Title on Left, CASES/ABOUT on Right */}
      <div className="mobile-header-left">
        <a href="/" aria-label="Home" className="mobile-brand-link">
          <span className="mobile-brand-name">IRYNA SHEREMETA</span>
          <span className="mobile-brand-title">/ Creative technologist /</span>
        </a>
      </div>

      <div className="mobile-header-right">
        <a href="#cases" className="mobile-featured-link">CASES</a>
        <span style={{ color: '#888888', fontWeight: 400, fontSize: '0.75rem', margin: '0 0.1rem' }}>/</span>
        <a href="#about" className="mobile-featured-link">ABOUT</a>
      </div>

      {/* Drawer Overlay Menu */}
      {isMenuOpen && (
        <div className="header-drawer-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="header-drawer-content" onClick={(e) => e.stopPropagation()}>
            <button className="drawer-close-btn" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">&times;</button>
            <div className="drawer-nav-links">
              <a href="#expertise" onClick={() => setIsMenuOpen(false)} className="drawer-link">EXPERTISE</a>
              <a href="#cases" onClick={() => setIsMenuOpen(false)} className="drawer-link">CASES</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="drawer-link">ABOUT</a>
              <a href="#process" onClick={() => setIsMenuOpen(false)} className="drawer-link">PROCESS</a>
            </div>
          </div>
        </div>
      )}

      <div className="header-bottom-hairline"></div>
    </header>
  );
}
