'use client';

import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'You tell me the problem.',
      bullets: [
        { bold: 'A short call or an email.', rest: ' No prep, no tech talk.' }
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f4f4f5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          <path d="M15 5l4 4"></path>
        </svg>
      )
    },
    {
      num: '02',
      title: 'I send a first version.',
      bullets: [
        { bold: 'Something clickable in days,', rest: ' so you react to a real thing.' }
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f4f4f5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    },
    {
      num: '03',
      title: 'We fix it and launch.',
      bullets: [
        { bold: 'I ship it, hand it over,', rest: ' and set up hosting and support.' }
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f4f4f5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      )
    }
  ];

  return (
    <section 
      id="how-it-works"
      style={{ 
        backgroundColor: '#ffffff',
        padding: '5.1rem 0 5.1rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style>{`
        @media (max-width: 860px) {
          .process-step-container {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .process-svg-desktop {
            display: none !important;
          }
          .process-svg-mobile {
            display: block !important;
          }
        }
        @media (min-width: 861px) {
          .process-svg-mobile {
            display: none !important;
          }
        }
      `}</style>

      {/* Section Heading: How the Process Looks / How it works */}
      <div className="how-it-works-heading container" style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
        {/* Short decor line above section heading */}
        <div className="how-it-works-decor-line" style={{ 
          width: '60px', 
          height: '1px', 
          backgroundColor: 'var(--accent, #1d4e5b)', 
          margin: '0 auto 2.5rem auto', 
          opacity: 0.9 
        }} />

        {/* Intro Section Heading */}
        <h2 style={{ 
          fontFamily: "var(--font-heading)",
          fontSize: 'clamp(28px, 4.4vw, 42px)', 
          color: 'var(--color-heading-silver)', 
          fontWeight: 400,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          textAlign: 'center',
          width: '100%',
          margin: '0 auto 0.75rem auto',
          WebkitTextStroke: '0',
          textWrap: 'balance'
        }}>
          <span style={{ fontWeight: 400, color: 'var(--color-heading-silver, #4a5461)' }}>How it </span><span style={{ fontWeight: 700, color: '#3ba3b8', WebkitTextFillColor: '#3ba3b8' }}>works</span>
        </h2>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: '17px',
          fontWeight: 400,
          lineHeight: 1.6,
          color: 'var(--color-body-dark, #2b3038)',
          opacity: 0.9,
          maxWidth: '640px',
          margin: '0 auto',
          textAlign: 'center',
          letterSpacing: '-0.01em',
          fontStyle: 'italic'
        }}>
          Fast first. Better second.
        </p>
      </div>

      {/* Edge-to-Edge Matte Black Frame for 3-Step Process Flow */}
      <div
        className="services-black-frame-wrapper"
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: 'var(--color-matte-black, #25282e)',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 20px 48px rgba(0, 0, 0, 0.03)',
          overflow: 'hidden'
        }}
      >
        {/* Premium Geometric Abstract Decor Layer (Process) */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 2,
            opacity: 0.8
          }}
        >
          {/* Top-Left Cluster */}
          <div style={{ position: 'absolute', width: '200px', height: '200px', border: '1px solid rgba(29, 78, 91, 0.45)', borderRadius: '50%', top: '-5%', left: '-2%' }} />
          
          {/* Top-Right Cluster */}
          <div style={{ position: 'absolute', width: '120px', height: '180px', border: '1px dashed rgba(29, 78, 91, 0.45)', top: '10%', right: '5%' }} />
          <div style={{ position: 'absolute', width: '80px', height: '80px', border: '1px solid rgba(29, 78, 91, 0.5)', top: '25%', right: '12%' }} />

          {/* Center-Left subtle lines */}
          <div style={{ position: 'absolute', top: '50%', left: '0', width: '8%', height: '1px', backgroundColor: 'rgba(29, 78, 91, 0.45)' }} />
          <div style={{ position: 'absolute', top: '52%', left: '0', width: '5%', height: '1px', backgroundColor: 'rgba(29, 78, 91, 0.5)' }} />

          {/* Bottom-Left Cluster */}
          <div style={{ position: 'absolute', width: '150px', height: '150px', border: '1px solid rgba(29, 78, 91, 0.4)', bottom: '5%', left: '10%', transform: 'rotate(45deg)' }} />

          {/* Bottom-Right Cluster */}
          <div style={{ position: 'absolute', width: '160px', height: '160px', border: '1px dashed rgba(29, 78, 91, 0.45)', borderRadius: '50%', bottom: '10%', right: '8%' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 3, paddingTop: '4rem', paddingBottom: '5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          {/* Zigzag Process Flow */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              maxWidth: '960px', 
              margin: '0 auto', 
              position: 'relative', 
              padding: '1.5rem 0'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem', position: 'relative', zIndex: 3 }}>
              {steps.map((step, i) => {
                const isOdd = i % 2 === 1; // Step 2 shifted to right side
                return (
                  <motion.div
                    key={step.num}
                    className="process-step-container"
                    initial={{ opacity: 0, y: 35, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.75, delay: i * 0.25, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      gap: '1.35rem',
                      position: 'relative',
                      width: '100%',
                      paddingLeft: isOdd ? '40%' : '0%',
                      paddingRight: isOdd ? '0%' : '20%'
                    }}
                  >
                    {/* Step Number */}
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-10%' }}
                      transition={{ duration: 0.5, delay: i * 0.25 + 0.15, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        flexShrink: 0,
                        width: '60px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        zIndex: 4,
                        marginTop: '-0.2rem',
                        fontFamily: "var(--font-heading)",
                        fontSize: '3.2rem',
                        fontWeight: 300,
                        color: 'rgba(215, 222, 232, 0.38)',
                        lineHeight: 1
                      }}
                    >
                      {step.num}
                    </motion.div>

                    {/* Step Content Frame with Reveal Arrival */}
                    <motion.div 
                      initial={{ opacity: 0, x: isOdd ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.65, delay: i * 0.25 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                      style={{ 
                        flex: 1, 
                        textAlign: 'left',
                        padding: '1.35rem 1.75rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255, 255, 255, 0.14)',
                        borderRadius: '2px',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      <h3 style={{ 
                        fontFamily: "var(--font-heading)",
                        fontSize: '22px', 
                        color: '#f8fafc',
                        fontWeight: 400,
                        margin: '0 0 0.95rem 0',
                        paddingBottom: '0.75rem',
                        borderBottom: '1px solid rgba(215, 222, 232, 0.16)',
                        letterSpacing: '0.025em',
                        lineHeight: 1.25,
                        WebkitTextStroke: '0'
                      }}>
                        {step.title}
                      </h3>

                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.45rem',
                        maxWidth: '520px'
                      }}>
                        {step.bullets.map((bullet, bIdx) => (
                          <li 
                            key={bIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'baseline',
                              gap: '0.65rem',
                              fontFamily: "var(--font-body)",
                              fontSize: '0.94rem',
                              lineHeight: 1.5,
                              color: '#cbd5e1',
                              fontWeight: 400
                            }}
                          >
                            <span 
                              style={{
                                display: 'inline-block',
                                width: '4px',
                                height: '4px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(215, 222, 232, 0.75)',
                                flexShrink: 0,
                                transform: 'translateY(-2px)'
                              }} 
                            />
                            <span>
                              <strong style={{ fontWeight: 600, color: '#f8fafc' }}>{bullet.bold}</strong>
                              {bullet.rest}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
