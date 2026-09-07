'use client';

import { useRef } from 'react';
import './FaceDivider.css';

export default function FaceDivider() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <footer 
      id="about" 
      ref={containerRef}
      style={{
        backgroundColor: '#a7c7e7', // 10% deeper tone than #b8d9f7 button blue
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        padding: '1.75rem 3rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        boxSizing: 'border-box'
      }}
    >
      <div style={{
        fontFamily: "var(--font-sans), Inter, sans-serif",
        fontSize: '0.82rem',
        color: '#2a3036',
        letterSpacing: '0.02em',
        textAlign: 'right'
      }}>
        &copy; {new Date().getFullYear()} Iryna Sheremeta &middot; Web &amp; AI Product Builder
      </div>
    </footer>
  );
}


