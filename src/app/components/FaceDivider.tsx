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
        backgroundColor: '#fafafa',
        borderTop: '1px solid #eaeaea',
        padding: '1.5rem 2rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div style={{
        fontFamily: "var(--font-sans), Inter, sans-serif",
        fontSize: '0.82rem',
        color: '#888888',
        letterSpacing: '0.02em',
        textAlign: 'center'
      }}>
        &copy; {new Date().getFullYear()} Iryna Sheremeta &middot; Web &amp; AI Product Builder
      </div>
    </footer>
  );
}


