'use client';

import { motion } from 'framer-motion';

export default function ServicesV2() {
  const websitesBullets = [
    {
      text: <span>Generate <strong style={{ fontWeight: 600 }}>qualified leads</strong> for your business</span>,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
        </svg>
      )
    },
    {
      text: <span>Showcase your <strong style={{ fontWeight: 600 }}>offer</strong> in a premium way that converts</span>,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      )
    },
    {
      text: <span>Build <strong style={{ fontWeight: 600 }}>trust &amp; authority</strong> with your audience</span>,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    }
  ];

  const aiToolsBullets = [
    {
      text: <span>Audit your ops to find <strong style={{ fontWeight: 600 }}>bottlenecks &amp; manual tasks</strong></span>,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      )
    },
    {
      text: <span>Build &amp; integrate <strong style={{ fontWeight: 600 }}>custom AI workflows &amp; agents</strong></span>,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>
        </svg>
      )
    },
    {
      text: <span>Deploy <strong style={{ fontWeight: 600 }}>practical automation</strong> directly into daily operations</span>,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      )
    }
  ];

  const steps = [
    {
      num: '01',
      label: '// 01 - DRAFT',
      title: 'First Draft',
      desc: 'A fast, working build you can click through in days - not polished, but real enough to react to and easy to build on.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          <path d="M15 5l4 4"></path>
        </svg>
      )
    },
    {
      num: '02',
      label: '// 02 - TEST',
      title: 'Test & Refine',
      desc: 'We test where it matters - internally if it\'s a team tool, with real users if it\'s client-facing - and refine based on what we find.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    },
    {
      num: '03',
      label: '// 03 - LAUNCH',
      title: 'Delivery',
      desc: 'Launch, handover, and maintenance - we figure out where it lives and how it\'s supported together, based on what actually fits.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.18-1.81-.47-2.47l-.06-.06c-.66-.66-1.76-1.18-2.47-.47z" />
          <path d="M12 15l-3-3" />
          <path d="M15 4.5A13.8 13.8 0 0 1 21 11c0 0-3.5 1.5-6.5-1.5S13 3 13 3a13.8 13.8 0 0 1 2 1.5z" />
          <path d="M9 18l-1.5 2.5" />
          <path d="M15 12l2.5 -1.5" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="expertise" 
      style={{ 
        backgroundColor: '#ffffff',
        padding: '5.1rem 0 10.2rem 0',
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
          background-color: #3b7ac8;
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
          .services-left-split-bg {
            display: none !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .services-col-left {
            background-color: #ffffff !important;
            background-image: radial-gradient(circle, rgba(0, 0, 0, 0.04) 1px, transparent 1px) !important;
            background-size: 24px 24px !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;
            padding: 3.5rem 2rem !important;
          }
          .services-col-right {
            background-color: #333842 !important;
            background-image: radial-gradient(circle, rgba(255, 255, 255, 0.06) 1px, transparent 1px) !important;
            background-size: 24px 24px !important;
            padding: 3.5rem 2rem !important;
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
          backgroundColor: '#18191e', 
          margin: '0 auto 2.5rem auto', 
          opacity: 0.6 
        }} />

        <h2 style={{ 
          fontFamily: "var(--font-serif)",
          fontSize: 'clamp(24px, 4vw, 38px)', 
          color: '#333842', 
          fontWeight: 500,
          lineHeight: 1.25,
          letterSpacing: '-0.02em',
          textAlign: 'center',
          width: '100%',
          margin: '0 auto 16px auto',
          WebkitTextStroke: '0.35px #333842'
        }}>
          How I Can Help Your Business
        </h2>
        <p style={{
          fontFamily: "var(--font-sans), Inter, sans-serif",
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: 1.6,
          color: '#2a3036',
          opacity: 0.7,
          maxWidth: '640px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          as a Digital Product Builder
        </p>
      </motion.div>

      {/* Matte Charcoal Container for 2 Columns of Services */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          backgroundColor: '#333842', // Premium matte charcoal grey full opacity
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '5.1rem'
        }}
      >
        {/* Full Edge-to-Edge Left Side Fill for Solution 01 (White + Minimal Dot Matrix Grid) */}
        <div 
          className="services-left-split-bg"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: '50%',
            backgroundColor: '#ffffff',
            backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.04) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
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

        {/* Content Container (Center-aligned 2 Columns inside edge-to-edge frame) */}
        <div 
          style={{
            maxWidth: '1550px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 5
          }}
        >
          <div 
            className="services-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              minHeight: '460px'
            }}
          >
            {/* Column 1: Custom Websites (Left Column - White BG with Dot Matrix) */}
            <div 
              className="services-col-left"
              style={{
                padding: '5rem 4rem 5rem 4rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: '#18191e',
                borderRight: '1px solid rgba(0, 0, 0, 0.08)',
                position: 'relative',
                zIndex: 2
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <span style={{ 
                    fontFamily: "'JetBrains Mono', Menlo, monospace",
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#333842',
                    fontWeight: 600,
                    opacity: 0.6,
                    WebkitTextStroke: '0.35px #333842'
                  }}>
                    // 01 &mdash; WEBSITES
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 'clamp(1.48rem, 2.4vw, 2rem)',
                  fontWeight: 400,
                  color: '#333842',
                  margin: '0 0 1.25rem 0',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  WebkitTextStroke: '0.35px #333842'
                }}>
                  Custom Websites
                </h3>
                <div style={{ width: '48px', height: '1px', backgroundColor: '#333842', opacity: 0.25, marginBottom: '2.25rem' }} />
                
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {websitesBullets.map((bullet, idx) => (
                    <li key={idx} style={{ fontSize: '1.02rem', color: '#2a3036', display: 'flex', alignItems: 'flex-start', gap: '16px', lineHeight: 1.55, WebkitTextStroke: '0.35px #2a3036' }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '50%', 
                        backgroundColor: '#F3F4F6',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                        flexShrink: 0,
                        border: '1px solid #D1D5DB'
                      }}>
                        {bullet.icon}
                      </div>
                      <div style={{ paddingTop: '0.55rem' }}>
                        {bullet.text}
                      </div>
                    </li>
                  ))}
                </ul>
                <a href="#cases" style={{ display: 'inline-block', marginTop: '32px', fontFamily: 'var(--font-mono), monospace', fontSize: '11px', letterSpacing: '0.1em', opacity: 0.7, textDecoration: 'none', color: '#111827', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>
                  SEE WEBSITE EXAMPLES &darr;
                </a>
              </div>
            </div>

            {/* Column 2: Custom AI Tools (Right Column - Dark Charcoal BG) */}
            <div 
              className="services-col-right"
              style={{
                padding: '5rem 4rem 5rem 4rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: '#ffffff',
                backgroundColor: '#333842',
                backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.06) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                position: 'relative',
                zIndex: 2
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <span style={{ 
                    fontFamily: "'JetBrains Mono', Menlo, monospace",
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#eaecf0',
                    fontWeight: 600,
                    opacity: 0.6,
                    WebkitTextStroke: '0.35px #eaecf0'
                  }}>
                    // 02 &mdash; AI TOOLS
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 'clamp(1.48rem, 2.4vw, 2rem)',
                  fontWeight: 400,
                  color: '#ffffff',
                  margin: '0 0 1.25rem 0',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  WebkitTextStroke: '0.35px #ffffff'
                }}>
                  Custom AI Tools
                </h3>
                <div style={{ width: '48px', height: '1px', backgroundColor: '#ffffff', opacity: 0.25, marginBottom: '2.25rem' }} />
                
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {aiToolsBullets.map((bullet, idx) => (
                    <li key={idx} style={{ fontSize: '1.02rem', color: '#e2e8f0', display: 'flex', alignItems: 'flex-start', gap: '16px', lineHeight: 1.55, WebkitTextStroke: '0.35px #e2e8f0' }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '50%', 
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                        flexShrink: 0,
                        border: '1px solid rgba(255, 255, 255, 0.15)'
                      }}>
                        {bullet.icon}
                      </div>
                      <div style={{ paddingTop: '0.55rem' }}>
                        {bullet.text}
                      </div>
                    </li>
                  ))}
                </ul>
                <a href="#cases" style={{ display: 'inline-block', marginTop: '32px', fontFamily: 'var(--font-mono), monospace', fontSize: '11px', letterSpacing: '0.1em', opacity: 0.7, textDecoration: 'none', color: '#ffffff', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>
                  SEE AI TOOL EXAMPLES &darr;
                </a>
              </div>
            </div>
          </div>
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
      </motion.div>

      {/* Section 2 Heading: How the Process Looks */}
      <div className="container" style={{ textAlign: 'center', marginBottom: '3.5rem', paddingTop: '5.1rem' }}>
        {/* Short decor line above section heading */}
        <div style={{ 
          width: '60px', 
          height: '1px', 
          backgroundColor: '#0b0c10', 
          margin: '0 auto 2.5rem auto', 
          opacity: 0.6 
        }} />

        {/* Intro Section Heading */}
        <h2 style={{ 
          fontFamily: "var(--font-serif)",
          fontSize: 'clamp(24px, 4vw, 38px)', 
          color: '#333842', 
          fontWeight: 500,
          lineHeight: 1.25,
          letterSpacing: '-0.01em',
          textAlign: 'center',
          width: '100%',
          margin: '0 auto 0.75rem auto',
          WebkitTextStroke: '0.35px #333842'
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
          From concept to launch in 3 simple steps:
        </p>
      </div>

      {/* Edge-to-Edge Matte Black Frame for 3-Step Process Flow */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="services-black-frame-wrapper"
        style={{
          position: 'relative',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          backgroundColor: '#252A3A',
          borderTop: '1px solid rgba(240, 242, 245, 0.1)',
          borderBottom: '1px solid rgba(240, 242, 245, 0.1)',
          boxShadow: '0 20px 48px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden'
        }}
      >
        {/* Geometric Decorative Background Layer */}
        <div 
          className="hide-on-mobile"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: 0.15,
            zIndex: 2
          }}
        >
          <div style={{ position: 'absolute', width: '180px', height: '180px', border: '1.5px dashed rgba(240, 242, 245, 0.06)', top: '10%', left: '4%' }} />
          <div style={{ position: 'absolute', width: '90px', height: '90px', border: '1.5px dashed rgba(240, 242, 245, 0.06)', top: '18%', left: '12%' }} />
          <div style={{ position: 'absolute', width: '240px', height: '130px', border: '1.5px dashed rgba(240, 242, 245, 0.06)', top: '-5%', right: '8%' }} />
          <div style={{ position: 'absolute', width: '70px', height: '70px', border: '1.5px dashed rgba(240, 242, 245, 0.06)', bottom: '15%', left: '15%' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 3, paddingTop: '4rem', paddingBottom: '5rem', paddingLeft: '32%' }}>
          {/* Vertical Creative Process Flow */}
          <div style={{ 
            maxWidth: '740px', 
            margin: '0', 
            position: 'relative', 
            padding: '1.5rem 0'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}>
              {steps.map((step, i) => (
                <div key={step.num} style={{ position: 'relative' }}>
                  {i < steps.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        position: 'absolute',
                        top: '54px',
                        left: '23.5px',
                        width: '1px',
                        height: 'calc(100% + 3.5rem - 48px - 12px)',
                        borderLeft: '1px dashed rgba(255,255,255,0.35)',
                        transformOrigin: 'top center',
                        pointerEvents: 'none',
                        zIndex: 1
                      }}
                    />
                  )}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.18 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.75rem',
                      position: 'relative',
                      marginBottom: i < steps.length - 1 ? '3.5rem' : 0
                    }}
                  >
                    {/* Step Icon & Number Badge */}
                    <motion.div 
                      initial={{ borderColor: 'rgba(255,255,255,0.12)', boxShadow: 'none' }}
                      whileInView={{ borderColor: '#00FFA3', boxShadow: '0 0 12px rgba(0,255,163,0.4)' }}
                      viewport={{ once: true, margin: '-20%' }}
                      transition={{ duration: 0.4, delay: i * 0.18 + 0.2 }}
                      style={{
                        flexShrink: 0,
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: '#3A3F52',
                        border: '1px solid rgba(255,255,255,0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 3
                      }}
                    >
                      {step.icon}
                    </motion.div>

                    {/* Step Details */}
                    <div style={{ flex: 1, paddingTop: '0' }}>
                      <div style={{ marginBottom: '0.4rem' }}>
                        <div style={{ 
                          fontFamily: "'JetBrains Mono', Menlo, monospace",
                          fontSize: '10px',
                          letterSpacing: '0.15em',
                          opacity: 0.5,
                          color: '#eaecf0',
                          marginBottom: '6px'
                        }}>
                          {step.label}
                        </div>
                        <h3 style={{ 
                          fontFamily: "var(--font-serif)",
                          fontSize: '20px', 
                          color: '#eaecf0',
                          fontWeight: 600,
                          margin: 0,
                          lineHeight: 1.2
                        }}>
                          {step.title}
                        </h3>
                      </div>

                      <p style={{
                        fontFamily: "var(--font-sans), Inter, sans-serif",
                        fontSize: '15px',
                        lineHeight: 1.6,
                        color: '#d0d3d9',
                        opacity: 0.75,
                        fontWeight: 300,
                        margin: 0,
                        maxWidth: '520px'
                      }}>
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
