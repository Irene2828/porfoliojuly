'use client';

import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="premium-header">
      {/* Left side (Desktop): Name & Title in one line */}
      <div className="header-socials header-socials-desktop" style={{ flexDirection: 'row', alignItems: 'center', gap: '0.6rem', whiteSpace: 'nowrap' }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', color: '#111111', textTransform: 'uppercase' }}>
          IRYNA SHEREMETA
        </span>
        <span style={{ color: '#888888', fontWeight: 400, fontSize: '0.75rem' }}>/</span>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', color: '#b0b4bc', textTransform: 'uppercase' }}>
          WEB &amp; AI PRODUCT BUILDER
        </span>
      </div>

      {/* Right side (Desktop): Nav links */}
      <nav className="header-nav header-nav-desktop">
        <a href="#expertise" className="nav-link">EXPERTISE</a>
        <a href="#cases" className="nav-link">CASES</a>
        <a href="#about" className="nav-link">ABOUT</a>
      </nav>

      {/* Mobile Header Elements: Standard Social Icons on Left, CASES link + Hamburger on Right */}
      <div className="mobile-header-left">
        <a href="mailto:hello@example.com" className="social-link-icon-mobile" title="Email" aria-label="Email">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link-icon-mobile" title="LinkedIn" aria-label="LinkedIn">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
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
