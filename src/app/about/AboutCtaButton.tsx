'use client';

import { openContact } from '../components/ContactModal';

export default function AboutCtaButton() {
  return (
    <a
      href="mailto:iryna@irynasheremeta.com"
      onClick={(e) => { e.preventDefault(); openContact(); }}
      className="btn prefooter-btn-primary face-cta"
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
    >
      <span>SEND YOUR PROBLEM MY WAY</span>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </a>
  );
}
