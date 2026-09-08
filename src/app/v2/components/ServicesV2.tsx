'use client';

import { motion } from 'framer-motion';

const SKY_BLUE_BG = '#d0e8fc';

export default function ServicesV2() {
  const cards = [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
      title: 'Custom Websites',
      bullets: [
        <span>Generate <strong>qualified leads</strong> for your business</span>,
        <span>Showcase your <strong>work &amp; services</strong> in a modern, premium way</span>,
        <span>Build <strong>trust &amp; authority</strong> with your audience</span>
      ]
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
      title: 'AI Workflows',
      bullets: [
        <span>Identify <strong>bottlenecks &amp; manual repetitive tasks</strong></span>,
        <span>Build <strong>custom AI workflow</strong> solutions</span>,
        <span>Deploy and integrate <strong>automation into daily use</strong></span>
      ]
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
      title: 'Agentic Tools',
      bullets: [
        <span>Develop custom <strong>web or mobile apps</strong> powered by AI</span>,
        <span>Automate <strong>client acquisition</strong>, qualification &amp; scheduling</span>,
        <span>Optimize for <strong>SEO &amp; Generative AI Search Engines (GEO)</strong></span>
      ]
    }
  ];

  return (
    <section 
      id="expertise" 
      style={{ 
        backgroundColor: '#ffffff',
        padding: '0 0 0 0',
        margin: '0',
        position: 'relative'
      }}
    >
      {/* Edge-to-edge divider 88px tall */}
      <div 
        style={{ 
          width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)', 
          marginRight: 'calc(-50vw + 50%)', 
          height: '88px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(0, 0, 0, 0.12)' }} />
      </div>

      <div className="container">

        {/* Intro Section Heading */}
        <div style={{ marginBottom: '1.4rem', textAlign: 'center' }}>
          <h2 style={{ 
            fontFamily: "'Times New Roman', Times, Georgia, serif",
            fontSize: 'clamp(24px, 4vw, 38px)', 
            color: '#5a9ad4', 
            fontWeight: 500,
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
            <span style={{ 
              display: 'block',
              fontFamily: "var(--font-serif), 'Times New Roman', Times, Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 400
            }}>
              {'as\u00A0a\u00A0Digital\u00A0Product\u00A0Builder'}
            </span>
          </h2>
        </div>

        {/* Three Separate Service Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem', 
          width: '100%',
          marginBottom: '3.5rem'
        }}>
          {cards.map((card, i) => (
            <motion.div 
              key={card.title}
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              style={{
                backgroundColor: '#d0e8fc', // Sky blue background matching hero right side
                padding: '3.5rem 2.2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.045), 0 2px 6px rgba(0, 0, 0, 0.02)',
                border: '1.5px dashed rgba(18, 18, 18, 0.45)'
              }}
            >
              <div>
                <h3 style={{ 
                  fontFamily: "'Times New Roman', Times, Georgia, serif", 
                  fontSize: 'clamp(1.35rem, 2.16vw, 1.71rem)', 
                  fontWeight: 400, 
                  color: '#121212', 
                  margin: '0 0 1rem 0',
                  letterSpacing: '-0.01em',
                  textAlign: 'center'
                }}>
                  {card.title}
                </h3>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#121212', opacity: 0.25, marginBottom: '3rem' }} />
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {card.bullets.map((b, idx) => (
                    <li key={idx} style={{ fontSize: '0.95rem', color: '#2a3036', display: 'flex', alignItems: 'flex-start', gap: '0.6rem', lineHeight: 1.5 }}>
                      <span style={{ color: '#121212', fontWeight: 'bold', fontSize: '1.1rem', lineHeight: '1' }}>·</span> {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                <span className="see-example-link" style={{ 
                  fontFamily: "'JetBrains Mono', Menlo, monospace", 
                  fontSize: '12px', 
                  fontWeight: 400, 
                  letterSpacing: '0.22em', 
                  textTransform: 'uppercase',
                  color: '#121212',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  cursor: 'pointer',
                  position: 'relative',
                  paddingBottom: '2px'
                }}>
                  <span>SEE EXAMPLE</span> <span style={{ fontSize: '1rem' }}>↓</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
