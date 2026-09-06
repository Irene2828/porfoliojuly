'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const SILVER_BG = '#f7f7f8';
const TEAL_BG = 'rgba(0, 139, 139, 0.3)';

export default function ProcessSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const steps = [
    {
      num: '01',
      title: 'First Draft',
      desc: 'A fast, working build — not polished, but real enough to react to and easy to build on.',
      // Sketch / Wireframe icon
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#148281" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          <path d="M15 5l4 4"></path>
        </svg>
      )
    },
    {
      num: '02',
      title: 'Test & Refine',
      desc: 'We test it where it matters — internally if it\'s a team tool, with real users if it\'s client-facing — and refine based on what we find.',
      // Loop / Magnifying glass icon
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#148281" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    },
    {
      num: '03',
      title: 'Delivery',
      desc: 'Where it lives and how it\'s maintained depends on the project. We figure that out together, based on what actually fits.',
      // Rocket icon
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#148281" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.19-1.81-.47-2.47l-.06-.06c-.66-.66-1.76-1.18-2.47-.47z"></path>
          <path d="M12 15l-3-3m0 0l3-3m-3 3h12M15 4.5a14.5 14.5 0 0 1 5 5 14.5 14.5 0 0 1-5 5M12 21l-3-3"></path>
          <path d="M4.5 16.5L9 12M15 4.5L12 9"></path>
          <path d="M14.5 3a10 10 0 0 1 6.5 6.5c0 0-3.5 1-6.5-2s-2-6.5-2-6.5z"></path>
        </svg>
      )
    }
  ];

  return (
    <section 
      id="process" 
      style={{ 
        backgroundColor: '#ffffff',
        padding: '5.5rem 0',
        margin: '3rem 0 2rem 0'
      }}
    >
      <div className="container">
        {/* Intro Section Heading */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 style={{ 
            fontFamily: "'Times New Roman', Times, Georgia, serif",
            fontSize: 'clamp(24px, 4vw, 38px)', 
            color: '#148281', 
            fontWeight: 400,
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
            textAlign: 'center',
            width: '100%',
            margin: '0 auto 0.75rem auto'
          }}>
            How the Process Looks
          </h2>
          <p style={{
            fontFamily: "var(--font-sans), Inter, sans-serif",
            fontSize: '1.05rem',
            lineHeight: 1.6,
            color: '#444444',
            maxWidth: '640px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            Every project follows a simple 3-step sequence from concept to launch:
          </p>
        </div>

        {/* 3 Numbered Cards in a row with sequence styling */}
        <div 
          className="services-v2-grid"
          style={{ 
            display: 'grid', 
            gap: '2.625rem',
            position: 'relative'
          }}
        >
          {steps.map((step, i) => {
            const isHovered = hoveredIdx === i;
            const isMiddle = i === 1;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  position: 'relative',
                  background: '#ffffff',
                  border: '1px dashed #4a4a4a',
                  borderRadius: '4px',
                  padding: '2rem 2rem 1.75rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '260px',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  overflow: 'visible' // ensures icon badges hanging over the edge are never hidden
                }}
              >
                {/* Large prominent background numeral for visual sequence differentiation */}
                <div style={{
                  position: 'absolute',
                  right: '0.75rem',
                  bottom: '-0.25rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '5.25rem',
                  fontWeight: 800,
                  lineHeight: 1,
                  color: '#148281',
                  opacity: 0.14,
                  userSelect: 'none',
                  pointerEvents: 'none',
                  letterSpacing: '-0.05em',
                  zIndex: 1
                }}>
                  {step.num}
                </div>

                <div>
                  {/* Circle Icon Badge hanging on top layer over card boundary */}
                  <div style={{ 
                    position: 'absolute', 
                    top: '-0.875rem', 
                    left: '1.25rem', 
                    zIndex: 20 
                  }}>
                    <span style={{ 
                      color: '#000000', 
                      backgroundColor: '#ffffff',
                      border: '1.5px solid #148281',
                      padding: '0.6rem', 
                      borderRadius: '50%', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.12)',
                      transition: 'all 0.3s ease'
                    }}>
                      {step.icon}
                    </span>
                  </div>

                  {/* Header Row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem', marginBottom: '0.75rem' }}>
                    <h3 style={{ 
                      fontFamily: "'Times New Roman', Times, Georgia, serif",
                      fontSize: '1.45rem', 
                      color: '#148281',
                      fontWeight: 400,
                      margin: 0,
                      lineHeight: 1.2,
                      WebkitTextStroke: '0.4px #148281'
                    }}>
                      {step.title}
                    </h3>
                  </div>

                  <p style={{
                    fontFamily: "var(--font-sans), Inter, sans-serif",
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: '#2a3036',
                    margin: 0,
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {step.desc}
                  </p>
                </div>

                {/* Arrow connector indicator to next step (for items 01 and 02) */}
                {i < 2 && (
                  <div className="step-arrow-indicator" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#148281',
                    marginTop: '1.25rem',
                    opacity: 0.85,
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <span>NEXT STEP</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                )}
                {i === 2 && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#148281',
                    marginTop: '1.25rem',
                    opacity: 0.85,
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <span>LAUNCH</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


