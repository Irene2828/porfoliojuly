'use client';

import { motion } from 'framer-motion';

export default function ServicesV2() {
  const websitesBullets = [
    {
      text: <span>Generate <strong style={{ fontWeight: 600, color: '#FFFFFF' }}>qualified leads</strong> for your business</span>,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8ebee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
        </svg>
      )
    },
    {
      text: <span>Showcase your <strong style={{ fontWeight: 600, color: '#FFFFFF' }}>offer</strong> in a premium way that converts</span>,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8ebee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      )
    },
    {
      text: <span>Build <strong style={{ fontWeight: 600, color: '#FFFFFF' }}>trust &amp; authority</strong> with your audience</span>,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8ebee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    }
  ];

  const aiToolsBullets = [
    {
      text: <span>Audit your ops to find <strong style={{ fontWeight: 600, color: '#1A1F2B' }}>bottlenecks &amp; manual tasks</strong></span>,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1F2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      )
    },
    {
      text: <span>Build &amp; integrate <strong style={{ fontWeight: 600, color: '#1A1F2B' }}>custom AI workflows &amp; agents</strong></span>,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1F2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>
        </svg>
      )
    },
    {
      text: <span>Deploy <strong style={{ fontWeight: 600, color: '#1A1F2B' }}>practical automation</strong> directly into daily operations</span>,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1F2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      )
    }
  ];

  return (
    <section 
      id="expertise" 
      style={{ 
        backgroundColor: '#ffffff',
        padding: '5.1rem 0 2.5rem 0',
        margin: '5.1rem 0 0 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style>{`
        .see-example-link-dark::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1px;
          background-color: rgba(234, 236, 240, 0.85);
          transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .see-example-link-dark:hover::after {
          width: 100%;
        }
        .see-example-link-light-bg::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1px;
          background-color: #121212;
          transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .see-example-link-light-bg:hover::after {
          width: 100%;
        }
        @media (max-width: 860px) {
          #expertise {
            padding-top: 2.55rem !important;
            margin-top: 2.55rem !important;
          }
          .services-right-split-bg,
          .services-left-split-bg {
            display: none !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .services-col-left {
            background-color: #18191e !important;
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
            border-radius: 0px !important;
            padding: 3.5rem 2rem !important;
          }
          .services-col-right {
            background-color: #C8CCD1 !important;
            border-radius: 0px !important;
            padding: 3.5rem 2rem !important;
          }
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

      {/* Section 1 Heading: How I Can Help Your Business */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '3.5rem', textAlign: 'center', padding: '0 1.5rem' }}
      >
        {/* Short decor line */}
        <div style={{ 
          width: '60px', 
          height: '1px', 
          backgroundColor: 'var(--accent, #1d4e5b)', 
          margin: '0 auto 2.5rem auto', 
          opacity: 0.9 
        }} />

        <h2 style={{ 
          fontFamily: "var(--font-heading)",
          fontSize: 'clamp(28px, 4.4vw, 42px)', 
          color: 'var(--color-heading-silver)', 
          fontWeight: 400,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          textAlign: 'center',
          width: '100%',
          margin: '0 auto 14px auto',
          WebkitTextStroke: '0'
        }}>
          How I Can Help Your Business
        </h2>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: '17px',
          fontWeight: 400,
          lineHeight: 1.6,
          color: '#333842',
          opacity: 0.9,
          maxWidth: '640px',
          margin: '0 auto',
          textAlign: 'center',
          letterSpacing: '-0.01em'
        }}>
          as a digital product builder
        </p>
      </motion.div>

      {/* Matte Charcoal Container for 2 Columns of Services */}
      <div 
        style={{
          backgroundColor: '#ffffff',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '5.1rem'
        }}
      >
        {/* Full Edge-to-Edge Left Side Fill for Solution 01 (Matte Black) */}
        <div 
          className="services-left-split-bg"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: '50%',
            backgroundColor: '#18191e',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />
        {/* Full Edge-to-Edge Right Side Fill for Solution 02 (Custom AI Tools - Pure White) */}
        <div 
          className="services-right-split-bg"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            right: 0,
            backgroundColor: '#ffffff',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />
        {/* Top Edge-to-Edge 1px Subtle Grey Divider Bar */}
        <div 
          className="process-divider"
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
            position: 'relative',
            zIndex: 10
          }}
        />

        <div 
          className="container"
          style={{
            margin: '0 auto',
            position: 'relative',
            zIndex: 5
          }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="services-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2.5rem',
              minHeight: '460px'
            }}
          >
            {/* Column 1: Custom Websites (Left Card - #18191e Matte Black) */}
            <div 
              className="services-col-left"
              style={{
                backgroundColor: '#18191e',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '0px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                position: 'relative',
                overflow: 'visible',
                padding: '5rem 4rem 5rem 4rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: '#FFFFFF',
                zIndex: 2
              }}
            >
              {/* Premium Geometric Decor Layer for Left Card */}
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
                <div style={{ position: 'absolute', width: '140px', height: '140px', border: '1px solid rgba(29, 78, 91, 0.16)', top: '-30px', left: '-30px', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', width: '70px', height: '70px', border: '1px dashed rgba(29, 78, 91, 0.18)', bottom: '10%', right: '-20px', transform: 'rotate(15deg)' }} />
                <svg style={{ position: 'absolute', top: '35%', left: '8%', opacity: 0.15 }} width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--accent, #1d4e5b)" strokeWidth="1">
                  <line x1="14" y1="0" x2="14" y2="28" /><line x1="0" y1="14" x2="28" y2="14" />
                </svg>
              </div>

              {/* Premium Ghost Geometry (Replacing 01) */}
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: '0px', pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', border: '1px solid rgba(29, 78, 91, 0.12)', top: '-60px', right: '-40px' }} />
                <div style={{ position: 'absolute', width: '240px', height: '240px', borderRadius: '50%', border: '1px dashed rgba(29, 78, 91, 0.14)', top: '-20px', right: '0px' }} />
                <div style={{ position: 'absolute', width: '160px', height: '160px', borderRadius: '50%', border: '1px solid rgba(29, 78, 91, 0.10)', top: '20px', right: '40px' }} />
              </div>

              {/* Real Card Content (zIndex: 1) */}
              <div style={{ position: 'relative', zIndex: 1, paddingTop: '1.25rem' }}>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 'clamp(1.48rem, 2.4vw, 1.95rem)',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  margin: '0 0 3.5rem 0',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  WebkitTextStroke: '0'
                }}>
                  Custom Websites
                </h3>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {websitesBullets.map((bullet, idx) => (
                    <li key={idx} style={{ 
                      fontSize: '1.02rem', 
                      color: '#e8ebee', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '16px', 
                      lineHeight: 1.55,
                      background: 'rgba(255, 255, 255, 0.04)',
                      borderRadius: '0px',
                      boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '8px 24px 8px 8px'
                    }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '0px', 
                        backgroundColor: '#18191e',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                        flexShrink: 0,
                        border: 'none'
                      }}>
                        {bullet.icon}
                      </div>
                      <div style={{ color: '#e8ebee' }}>
                        {bullet.text}
                      </div>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '64px' }}>
                  <a href="#cases" className="see-example-link-dark" style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-label), sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', opacity: 0.9, textDecoration: 'none', color: '#A9B4C0', paddingBottom: '4px', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}>
                    <span>SEE WEBSITE EXAMPLES <span style={{ color: 'var(--accent, #1d4e5b)', marginLeft: '4px' }}>&darr;</span></span>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Custom AI Tools (Right Card - Pure White) */}
            <div 
              className="services-col-right"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '0px',
                boxShadow: 'none',
                position: 'relative',
                overflow: 'visible',
                padding: '5rem 4rem 5rem 4rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: '#1A1F2B',
                zIndex: 2
              }}
            >
              {/* Premium Ghost Geometry (Replacing 02) */}
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: '0px', pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', border: '1px solid rgba(29, 78, 91, 0.12)', top: '-60px', right: '-40px' }} />
                <div style={{ position: 'absolute', width: '240px', height: '240px', borderRadius: '50%', border: '1px dashed rgba(29, 78, 91, 0.14)', top: '-20px', right: '0px' }} />
                <div style={{ position: 'absolute', width: '160px', height: '160px', borderRadius: '50%', border: '1px solid rgba(29, 78, 91, 0.10)', top: '20px', right: '40px' }} />
              </div>

              {/* Real Card Content (zIndex: 1) */}
              <div style={{ position: 'relative', zIndex: 1, paddingTop: '1.25rem' }}>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 'clamp(1.48rem, 2.4vw, 1.95rem)',
                  fontWeight: 400,
                  color: '#3a3d46',
                  margin: '0 0 3.5rem 0',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  WebkitTextStroke: '0'
                }}>
                  Custom AI Tools
                </h3>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {aiToolsBullets.map((bullet, idx) => (
                    <li key={idx} style={{ 
                      fontSize: '1.02rem', 
                      color: '#1A1F2B', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '16px', 
                      lineHeight: 1.55,
                      background: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '0px',
                      boxShadow: '0 1px 6px rgba(0, 0, 0, 0.03)',
                      border: '1px solid #ffffff',
                      padding: '8px 24px 8px 8px'
                    }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '0px', 
                        backgroundColor: '#FFFFFF',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.025)',
                        flexShrink: 0,
                        border: 'none'
                      }}>
                        {bullet.icon}
                      </div>
                      <div style={{ color: '#1A1F2B' }}>
                        {bullet.text}
                      </div>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '64px' }}>
                  <a href="#cases" className="see-example-link-light-bg" style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-label), sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', opacity: 0.9, textDecoration: 'none', color: '#5C6672', paddingBottom: '4px', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}>
                    <span>SEE AI TOOL EXAMPLES <span style={{ color: 'var(--accent, #1d4e5b)', marginLeft: '4px' }}>&darr;</span></span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Edge-to-Edge 1px Subtle Grey Divider Bar */}
        <div 
          className="process-divider"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
            zIndex: 10
          }}
        />
      </div>
    </section>
  );
}
