'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const SILVER_BG = 'linear-gradient(120deg, rgb(235, 235, 237) 0%, rgb(255, 255, 255) 55%, rgb(235, 235, 237) 100%)';
const TEAL_BG = 'rgba(0, 139, 139, 0.88)';

export default function ServicesV2() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const cards = [
    {
      step: 'SOLUTION 01',
      title: 'Custom Websites',
      bullets: [
        <span>Generates <strong>qualified leads</strong> for your business</span>,
        <span>Showcases your <strong>work &amp; services</strong> in a modern, premium way</span>,
        <span>Builds <strong>trust &amp; authority</strong> with your audience</span>
      ]
    },
    {
      step: 'SOLUTION 02',
      title: 'AI-automations & workflows',
      bullets: [
        <span>Finding <strong>bottlenecks</strong> &amp; manual repetitive tasks</span>,
        <span>Building <strong>custom AI workflow</strong> solutions</span>,
        <span>Deploying &amp; seeing <strong>automation live</strong> in daily use</span>
      ]
    },
    {
      step: 'SOLUTION 03',
      title: 'Agentic tools',
      bullets: [
        <span>Custom <strong>web or mobile apps</strong> powered by AI</span>,
        <span>Automated <strong>client acquisition</strong>, qualification &amp; scheduling</span>,
        <span>SEO &amp; Generative AI <strong>Search Engine (GEO)</strong> optimization</span>
      ]
    }
  ];

  return (
    <section 
      id="expertise" 
      style={{ 
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #008b8b',
        padding: '6rem 0',
        margin: '4rem 0 3rem 0'
      }}
    >
      <div className="container">
        {/* Short decor line between Hero and Services */}
        <div style={{ 
          width: '60px', 
          height: '1px', 
          backgroundColor: '#008b8b', 
          margin: '0 auto 2.5rem auto', 
          opacity: 0.8 
        }} />

        {/* Intro Section Heading */}
        <div style={{ marginBottom: '2.8rem', textAlign: 'center' }}>
          <h2 className="title-serif" style={{ 
            fontSize: 'clamp(2.1rem, 3.675vw, 2.8875rem)', 
            color: '#008b8b', 
            fontWeight: 600,
            WebkitTextStroke: '0.6px rgba(0, 139, 139, 0.65)',
            textStroke: '0.6px rgba(0, 139, 139, 0.65)',
            paintOrder: 'stroke fill'
          }}>
            How I Can Help Your Business Move Faster
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: '#1a1a1a',
            marginTop: '0.8rem',
            lineHeight: 1.5,
            fontWeight: 400
          }}>
            I bring the technical skills, creativity and strategic thinking<br />
            to build this solution for you.
          </p>
        </div>

        {/* Single Row of 3 Cards */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '2.625rem' 
          }}
        >
          {cards.map((card, i) => {
            const isHovered = hoveredIdx === i;
            const isSilver = i === 1 ? isHovered : !isHovered;
            return (
              <motion.div
                key={card.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  position: 'relative',
                  background: isSilver ? SILVER_BG : 'rgba(0, 139, 139, 0.60)',
                  border: isSilver ? '1px dashed #4a4a4a' : '1px solid rgba(0, 115, 115, 0.60)',
                  borderRadius: '4px',
                  padding: '1.75rem 2rem 1.25rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '340px',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer'
                }}
              >
                <div>
                  <div style={{ position: 'absolute', top: '0.875rem', left: '-1rem', zIndex: 10 }}>
                    <span style={{ 
                      fontFamily: 'monospace', 
                      fontSize: '0.75rem', 
                      color: isSilver ? 'rgba(26, 26, 26, 0.9)' : 'rgba(0, 139, 139, 0.9)', 
                      backgroundColor: '#ffffff',
                      border: isSilver ? '1px dashed rgba(26, 26, 26, 0.3)' : '1px dashed rgba(0,139,139,0.4)',
                      fontWeight: 700, 
                      letterSpacing: '0.08em', 
                      padding: '0.4rem 0.8rem', 
                      borderRadius: '2px', 
                      display: 'inline-block',
                      textTransform: 'uppercase',
                      transition: 'all 0.3s ease'
                    }}>
                      {card.step}
                    </span>
                  </div>
                  <h3 className="title-serif" style={{ 
                    marginTop: '1.875rem',
                    fontSize: '1.6rem', 
                    color: isSilver ? '#008b8b' : '#ffffff',
                    fontWeight: 600,
                    textAlign: 'center',
                    WebkitTextStroke: isSilver ? '0.45px rgba(0, 139, 139, 0.7)' : '0.45px rgba(255, 255, 255, 0.7)',
                    textStroke: isSilver ? '0.45px rgba(0, 139, 139, 0.7)' : '0.45px rgba(255, 255, 255, 0.7)',
                    paintOrder: 'stroke fill',
                    marginBottom: '1.25rem', 
                    lineHeight: 1.3,
                    transition: 'all 0.3s ease'
                  }}>
                    {card.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                    {card.bullets.slice(0, 3).map((b, idx) => (
                      <motion.li 
                        key={idx} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (i * 0.15) + (idx * 0.12) }}
                        style={{ 
                          fontSize: '0.92rem', 
                          color: isSilver ? '#2a3036' : 'rgba(255, 255, 255, 0.98)',
                          fontWeight: isSilver ? 500 : 400,
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          gap: '0.6rem', 
                          lineHeight: 1.5,
                          transition: 'color 0.3s ease'
                        }}
                      >
                        <span style={{ 
                          color: isSilver ? '#008b8b' : 'rgba(255, 255, 255, 0.85)', 
                          fontWeight: 'bold',
                          fontSize: '1.1rem',
                          lineHeight: '1',
                          transition: 'color 0.3s ease'
                        }}>·</span> {b}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Centered 'SEE EXAMPLE' at card bottom */}
                <div style={{ 
                  marginTop: '1.25rem', 
                  textAlign: 'center'
                }}>
                  <span style={{ 
                    fontFamily: 'monospace', 
                    fontSize: '0.72rem', 
                    fontWeight: 400, 
                    letterSpacing: '0.18em', 
                    color: isSilver ? '#008b8b' : '#ffffff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'color 0.3s ease'
                  }}>
                    SEE EXAMPLE <span style={{ fontSize: '0.85rem' }}>↓</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
