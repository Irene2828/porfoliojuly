'use client';

import { useState, useEffect } from 'react';
import heroImage from '@/app/assets/test.webp';
import './Header.css';

export default function Header() {
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
              fontFamily: 'var(--font-heading), Outfit, sans-serif', 
              fontSize: '14.5px', 
              fontWeight: 500, 
              color: '#3d4454', 
              letterSpacing: '0.04em', 
              lineHeight: '1.2'
            }}>
              IRYNA SHEREMETA
            </span>
            <span style={{ 
              fontFamily: 'var(--font-heading), Outfit, sans-serif', 
              fontSize: '13px', 
              fontWeight: 400, 
              color: 'rgba(0, 0, 0, 0.75)', 
              lineHeight: '1.2', 
              letterSpacing: '0.03em' 
            }}>
              / Creative technologist /
            </span>
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

      {/* Mobile Header Elements: Avatar + Name on Left, CASES/ABOUT on Right */}
      <div className="mobile-header-left">
        <a href="/" aria-label="Home" className="mobile-brand-link">
          <img 
            src={heroImage.src} 
            alt="Iryna Sheremeta" 
            className="mobile-header-avatar" 
          />
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
