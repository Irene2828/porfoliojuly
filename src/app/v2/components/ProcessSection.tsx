'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const SILVER_BG = '#f7f7f8';
const SKY_BLUE_ACCENT_BG = 'rgba(167, 199, 231, 0.3)';

export default function ProcessSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const steps = [
    {
      num: '01',
      title: 'First Draft',
      desc: 'A fast, working build — not polished, but real enough to react to and easy to build on.', // Sketch / Wireframe icon
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            color: '#5a9ad4', 
            fontWeight: 500,
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

        {/* Vertical Creative Process Flow (Frameless, clean layout with curved dashed SVG connector) */}
        <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', padding: '1rem 0' }}>
          {/* SVG Curved Dashed Connecting Path running vertically */}
          <svg 
            style={{ 
              position: 'absolute', 
              top: '40px', 
              left: '23px', 
              width: '40px', 
              height: 'calc(100% - 100px)', 
              pointerEvents: 'none', 
              zIndex: 1 
            }}
            viewBox="0 0 40 400"
            preserveAspectRatio="none"
          >
            <path 
              d="M 20,0 C 40,100 0,200 20,400" 
              fill="none" 
              stroke="#5a9ad4" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
              opacity="0.6"
            />
          </svg>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', position: 'relative', zIndex: 2 }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.18 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.75rem',
                  position: 'relative'
                }}
              >
                {/* Step Icon & Number Badge */}
                <div style={{
                  flexShrink: 0,
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #5a9ad4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(90, 154, 212, 0.18)',
                  zIndex: 3
                }}>
                  {step.icon}
                </div>

                {/* Step Details */}
                <div style={{ flex: 1, paddingTop: '0.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                    <span style={{ 
                      fontFamily: "'JetBrains Mono', monospace", 
                      fontSize: '0.8rem', 
                      fontWeight: 700, 
                      color: '#5a9ad4',
                      letterSpacing: '0.08em'
                    }}>
                      STEP {step.num}
                    </span>
                    <h3 style={{ 
                      fontFamily: "'Times New Roman', Times, Georgia, serif",
                      fontSize: '1.5rem', 
                      color: '#0b0c10',
                      fontWeight: 500,
                      margin: 0,
                      lineHeight: 1.2
                    }}>
                      {step.title}
                    </h3>
                  </div>

                  <p style={{
                    fontFamily: "var(--font-sans), Inter, sans-serif",
                    fontSize: '1rem',
                    lineHeight: 1.65,
                    color: '#444444',
                    margin: 0,
                    maxWidth: '560px'
                  }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


