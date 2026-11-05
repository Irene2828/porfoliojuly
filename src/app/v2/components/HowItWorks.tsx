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
        /* Refined precision focus / crosshair beacon illustrating diagnosing the problem */
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8"></circle>
          <line x1="12" y1="2" x2="12" y2="5"></line>
          <line x1="12" y1="19" x2="12" y2="22"></line>
          <line x1="2" y1="12" x2="5" y2="12"></line>
          <line x1="19" y1="12" x2="22" y2="12"></line>
          <circle cx="12" cy="12" r="2.2" fill="rgba(255, 255, 255, 0.8)" stroke="none"></circle>
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
        /* Architectural prototype viewport with interactive cursor */
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3.5" width="18" height="14" rx="1.5"></rect>
          <line x1="3" y1="7.5" x2="21" y2="7.5"></line>
          <circle cx="5.5" cy="5.5" r="0.75" fill="rgba(255, 255, 255, 0.8)" stroke="none"></circle>
          <circle cx="8" cy="5.5" r="0.75" fill="rgba(255, 255, 255, 0.8)" stroke="none"></circle>
          <path d="M12.5 11l4.5 4.5m0-3v3h-3"></path>
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
        /* Minimalist editorial release arrow with compass precision ring */
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8.5" strokeDasharray="2 3"></circle>
          <line x1="8" y1="16" x2="16" y2="8"></line>
          <polyline points="10 8 16 8 16 14"></polyline>
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
          .process-decor-top-right-squares,
          .process-decor-bottom-circle {
            display: none !important;
          }
          .process-card-title {
            align-items: flex-start !important;
          }
          .process-card-icon {
            margin-top: 4px !important;
            transform: none !important;
          }
        }
        @media (min-width: 861px) {
          .process-svg-mobile {
            display: none !important;
          }
        }
      `}</style>

      {/* Section Heading: How I work — Narrative Scroll-Arrival Choreography */}
      <div className="how-it-works-heading container" style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
        {/* 1. Short architectural decor line draws from center */}
        <motion.div
          className="how-it-works-decor-line"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            width: '60px', 
            height: '1px', 
            backgroundColor: '#2d3139', 
            margin: '0 auto 2.5rem auto',
            transformOrigin: 'center'
          }}
        />

        {/* 2. Section Heading rises */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
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
          }}
        >
          <span style={{ fontWeight: 400, color: 'var(--color-heading-silver, #4a5461)' }}>How I </span><span style={{ fontWeight: 700, color: '#3ba3b8', WebkitTextFillColor: '#3ba3b8' }}>work</span>
        </motion.h2>

        {/* 3. Three-word cadence subline settles in */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: '17px',
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'var(--color-body-dark, #2b3038)',
            maxWidth: '640px',
            margin: '0 auto',
            textAlign: 'center',
            letterSpacing: '-0.01em',
            fontStyle: 'italic'
          }}
        >
          Clarity. Logic. Care.
        </motion.p>
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
        {/* Premium Geometric Abstract Decor Layer (Process) — Subtle Architectural Expansion */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.93 }}
          whileInView={{ opacity: 0.8, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 2
          }}
        >
          {/* Top-Left Cluster (Circle) */}
          <div style={{ position: 'absolute', width: '200px', height: '200px', border: '1px solid rgba(247, 214, 208, 0.45)', borderRadius: '50%', top: '-5%', left: '-2%' }} />
          
          {/* Top-Right Cluster (Square Shapes - Hidden on Mobile) */}
          <div className="process-decor-top-right-squares" style={{ position: 'absolute', width: '120px', height: '180px', border: '1px dashed rgba(247, 214, 208, 0.45)', top: '10%', right: '5%' }} />
          <div className="process-decor-top-right-squares" style={{ position: 'absolute', width: '80px', height: '80px', border: '1px solid rgba(247, 214, 208, 0.5)', top: '25%', right: '12%' }} />

          {/* Center-Left subtle lines */}
          <div style={{ position: 'absolute', top: '50%', left: '0', width: '8%', height: '1px', backgroundColor: 'rgba(247, 214, 208, 0.45)' }} />
          <div style={{ position: 'absolute', top: '52%', left: '0', width: '5%', height: '1px', backgroundColor: 'rgba(247, 214, 208, 0.5)' }} />

          {/* Bottom-Right Cluster (Circle - Hidden on Mobile) */}
          <div className="process-decor-bottom-circle" style={{ position: 'absolute', width: '160px', height: '160px', border: '1px dashed rgba(247, 214, 208, 0.45)', borderRadius: '50%', bottom: '10%', right: '8%' }} />
        </motion.div>

        <div className="container" style={{ position: 'relative', zIndex: 3, paddingTop: '4rem', paddingBottom: '5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          {/* Zigzag Process Flow */}
          <div 
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
                const stepBaseDelay = i * 0.18;
                return (
                  <motion.div
                    key={step.num}
                    className="process-step-container"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.75, delay: stepBaseDelay, ease: [0.16, 1, 0.3, 1] }}
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
                    {/* Step Number — Sequential Milestone Arrival */}
                    <motion.div 
                      initial={{ scale: 0.86, y: 16, opacity: 0 }}
                      whileInView={{ scale: 1, y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.65, delay: stepBaseDelay + 0.06, ease: [0.16, 1, 0.3, 1] }}
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

                    {/* Step Content Frame with Alternating Lateral Reveal */}
                    <motion.div 
                      initial={{ opacity: 0, x: isOdd ? 26 : -26, y: 12 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.72, delay: stepBaseDelay + 0.14, ease: [0.16, 1, 0.3, 1] }}
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
                      <h3 
                        className="process-card-title"
                        style={{ 
                          fontFamily: "var(--font-heading)",
                          fontSize: '22px', 
                          color: '#f8fafc',
                          fontWeight: 400,
                          margin: '0 0 0.95rem 0',
                          paddingBottom: '0.75rem',
                          borderBottom: '1px solid rgba(215, 222, 232, 0.16)',
                          letterSpacing: '0em',
                          lineHeight: 1.25,
                          WebkitTextStroke: '0',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.65rem'
                        }}
                      >
                        <motion.span 
                          className="process-card-icon"
                          initial={{ scale: 0.75, rotate: -10, opacity: 0 }}
                          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                          viewport={{ once: true, amount: 0.35 }}
                          transition={{ duration: 0.55, delay: stepBaseDelay + 0.24, ease: [0.16, 1, 0.3, 1] }}
                          style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            flexShrink: 0,
                            transform: 'translateY(-0.5px)'
                          }}
                        >
                          {step.icon}
                        </motion.span>
                        <span>{step.title}</span>
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
                          <motion.li 
                            key={bIdx}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: 0.6, delay: stepBaseDelay + 0.3, ease: [0.16, 1, 0.3, 1] }}
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
                              <strong style={{ fontWeight: 600, color: '#f8fafc', letterSpacing: '0.025em' }}>{bullet.bold}</strong>
                              {bullet.rest}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
