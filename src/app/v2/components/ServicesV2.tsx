'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const SILVER_BG = 'linear-gradient(120deg, rgb(235, 235, 237) 0%, rgb(255, 255, 255) 55%, rgb(235, 235, 237) 100%)';
const TEAL_BG = 'rgba(0, 139, 139, 0.88)';

export default function ServicesV2() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const cards = [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
      title: 'Custom Websites',
      bullets: [
        <span>Generates <strong>qualified leads</strong> for your business</span>,
        <span>Showcases your <strong>work &amp; services</strong> in a modern, premium way</span>,
        <span>Builds <strong>trust &amp; authority</strong> with your audience</span>
      ]
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
      title: 'AI-automations & workflows',
      bullets: [
        <span>Finding <strong>bottlenecks</strong> &amp; manual repetitive tasks</span>,
        <span>Building <strong>custom AI workflow</strong> solutions</span>,
        <span>Deploying &amp; seeing <strong>automation live</strong> in daily use</span>
      ]
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
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
          backgroundColor: '#148281', 
          margin: '0 auto 2.5rem auto', 
          opacity: 0.8 
        }} />

        {/* Intro Section Heading */}
        <div style={{ marginBottom: '2.8rem', textAlign: 'center' }}>
          <h2 style={{ 
            fontFamily: "'Times New Roman', Times, Georgia, serif",
            fontSize: 'clamp(24px, 4vw, 38px)', 
            color: '#148281', 
            fontWeight: 400,
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
            textAlign: 'center',
            width: '100%',
            whiteSpace: 'nowrap',
            wordBreak: 'normal',
            overflowWrap: 'normal',
            margin: '0 auto'
          }}>
            <span style={{ display: 'block' }}>{'How\u00A0I\u00A0Can\u00A0Help\u00A0Your\u00A0Business'}</span>
            <span style={{ display: 'block' }}>{'as\u00A0a\u00A0Digital\u00A0Product\u00A0Builder'}</span>
          </h2>
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
            const isSilver = i !== 1;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  position: 'relative',
                  background: isSilver ? SILVER_BG : 'rgba(20, 130, 129, 0.88)',
                  border: isSilver ? '1px dashed #4a4a4a' : '1px solid rgba(20, 130, 129, 0.60)',
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
                      color: isSilver ? '#000000' : '#ffffff', 
                      backgroundColor: isSilver ? '#ffffff' : '#148281',
                      border: isSilver ? '1px solid rgba(26, 26, 26, 0.4)' : '1px solid rgba(255, 255, 255, 0.4)',
                      padding: '0.65rem', 
                      borderRadius: '50%', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                      transition: 'all 0.3s ease'
                    }}>
                      {card.icon}
                    </span>
                  </div>
                  <h3 style={{ 
                    fontFamily: "'Times New Roman', Times, Georgia, serif",
                    marginTop: '1.875rem',
                    fontSize: '1.5rem', 
                    color: isSilver ? '#148281' : '#ffffff',
                    WebkitTextStroke: isSilver ? '0.4px #148281' : '0.4px #ffffff',
                    fontWeight: 400,
                    textAlign: 'center',
                    marginBottom: '1.25rem', 
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                    transition: 'all 0.3s ease'
                  }}>
                    {card.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                    {card.bullets.slice(0, 3).map((b, idx) => (
                      <li 
                        key={idx} 
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
                          color: isSilver ? '#148281' : 'rgba(255, 255, 255, 0.85)', 
                          fontWeight: 'bold',
                          fontSize: '1.1rem',
                          lineHeight: '1',
                          transition: 'color 0.3s ease'
                        }}>·</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Centered 'SEE EXAMPLE' at card bottom */}
                <div style={{ 
                  marginTop: '1.25rem', 
                  textAlign: 'center'
                }}>
                  <span style={{ 
                    fontFamily: "'JetBrains Mono', Menlo, monospace", 
                    fontSize: '10px', 
                    fontWeight: 400, 
                    letterSpacing: '0.18em', 
                    textTransform: 'uppercase',
                    color: isSilver ? '#111111' : '#ffffff',
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
