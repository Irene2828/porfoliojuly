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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5a9ad4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5a9ad4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5a9ad4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        backgroundColor: '#d0e8fc', // Sky blue background matching hero right side
        padding: '0 0 2.75rem 0',
        margin: '3rem 0 2rem 0',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid #121212'
      }}
    >
      {/* Top Edge-to-Edge 5px Black Divider Bar */}
      <div 
        style={{
          width: '100%',
          height: '5px',
          backgroundColor: '#121212',
          position: 'relative',
          zIndex: 10
        }}
      />

      {/* Geometric Decorative Background Layer */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.65,
          zIndex: 2
        }}
      >
        <div style={{ position: 'absolute', width: '180px', height: '180px', border: '1.5px dashed rgba(34, 34, 34, 0.25)', top: '10%', left: '4%' }} />
        <div style={{ position: 'absolute', width: '90px', height: '90px', border: '1.5px solid rgba(34, 34, 34, 0.35)', top: '18%', left: '12%' }} />
        <div style={{ position: 'absolute', width: '240px', height: '130px', border: '1.5px dashed rgba(34, 34, 34, 0.25)', top: '-5%', right: '8%' }} />
        <div style={{ position: 'absolute', width: '70px', height: '70px', border: '1.5px dashed rgba(34, 34, 34, 0.25)', bottom: '15%', left: '15%' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3, paddingTop: '3.5rem' }}>
        {/* Short decor line above section heading */}
        <div style={{ 
          width: '60px', 
          height: '1px', 
          backgroundColor: '#4b85bb', 
          margin: '0 auto 2.5rem auto', 
          opacity: 0.8 
        }} />

        {/* Intro Section Heading (On Blue Background) */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 style={{ 
            fontFamily: "'Times New Roman', Times, Georgia, serif",
            fontSize: 'clamp(24px, 4vw, 38px)', 
            color: '#4b85bb', 
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
            fontSize: '1.175rem',
            fontWeight: 500,
            lineHeight: 1.6,
            color: '#2a3036',
            maxWidth: '640px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            Every project follows a simple 3-step sequence from concept to launch:
          </p>
        </div>

        {/* Vertical Creative Process Flow */}
        <div style={{ 
          maxWidth: '740px', 
          margin: '0 auto', 
          position: 'relative', 
          padding: '1.5rem 3rem'
        }}>
          {/* SVG Curved Dashed Connecting Path running vertically */}
          <svg 
            style={{ 
              position: 'absolute', 
              top: '48px', 
              left: '71px', 
              width: '40px', 
              height: 'calc(100% - 96px)', 
              pointerEvents: 'none', 
              zIndex: 1 
            }}
            viewBox="0 0 40 400"
            preserveAspectRatio="none"
          >
            <path 
              d="M 20,0 C 40,100 0,200 20,400" 
              fill="none" 
              stroke="#a7c7e7" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
              opacity="0.8"
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
                  border: '1.5px solid #4a90e2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
                  zIndex: 3
                }}>
                  {step.icon}
                </div>

                {/* Step Details */}
                <div style={{ flex: 1, paddingTop: '0.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <h3 style={{ 
                      fontFamily: "'Times New Roman', Times, Georgia, serif",
                      fontSize: '1.55rem', 
                      color: '#2a3036',
                      fontWeight: 600,
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
                    color: '#2a3036',
                    fontWeight: 300,
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


