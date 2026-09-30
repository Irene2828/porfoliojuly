'use client';

import { motion } from 'framer-motion';

export default function ServicesV2() {
  const websitesBullets = [
    {
      text: <span>Generate <strong style={{ fontWeight: 500 }}>qualified leads</strong> for your business</span>,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8ebee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
        </svg>
      )
    },
    {
      text: <span>Showcase your <strong style={{ fontWeight: 500 }}>offer</strong> in a premium way that converts</span>,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8ebee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      )
    },
    {
      text: <span>Build <strong style={{ fontWeight: 500 }}>trust &amp; authority</strong> with your audience</span>,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8ebee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    }
  ];

  const aiToolsBullets = [
    {
      text: <span>Audit your ops to find <strong style={{ fontWeight: 500 }}>bottlenecks &amp; manual tasks</strong></span>,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1F2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      )
    },
    {
      text: <span>Build &amp; integrate <strong style={{ fontWeight: 500 }}>custom AI workflows &amp; agents</strong></span>,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1F2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>
        </svg>
      )
    },
    {
      text: <span>Deploy <strong style={{ fontWeight: 500 }}>practical automation</strong> directly into daily operations</span>,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1F2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333842" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333842" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333842" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
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
          fontSize: 'clamp(29px, 4.8vw, 46px)', 
          color: '#25150C', 
          fontWeight: 500,
          lineHeight: 1.25,
          letterSpacing: '-0.02em',
          textAlign: 'center',
          width: '100%',
          margin: '0 auto 16px auto',
          WebkitTextStroke: '0.35px #25150C'
        }}>
          How I Can Help Your Business
        </h2>
        <p style={{
          fontFamily: "var(--font-sans), Inter, sans-serif",
          fontSize: '18px',
          fontWeight: 500,
          fontStyle: 'normal',
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
        {/* Full Edge-to-Edge Right Side Fill for Solution 02 (Silver gradient matching Hero right side) */}
        <div 
          className="services-right-split-bg"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            right: 0,
            background: 'radial-gradient(ellipse at 60% 40%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.35) 55%, rgba(255, 255, 255, 0) 85%), linear-gradient(135deg, #e8ebee 0%, #dcdfe3 45%, #c9ced3 100%)',
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
                <div style={{ position: 'absolute', width: '140px', height: '140px', border: '1px solid rgba(232, 216, 178, 0.15)', top: '-30px', left: '-30px', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', width: '70px', height: '70px', border: '1px dashed rgba(232, 216, 178, 0.2)', bottom: '10%', right: '-20px', transform: 'rotate(15deg)' }} />
                <svg style={{ position: 'absolute', top: '35%', left: '8%', opacity: 0.2 }} width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#e8d8b2" strokeWidth="1">
                  <line x1="14" y1="0" x2="14" y2="28" /><line x1="0" y1="14" x2="28" y2="14" />
                </svg>
              </div>

              {/* Premium Ghost Geometry (Replacing 01) */}
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: '0px', pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', border: '1.5px solid rgba(232, 216, 178, 0.05)', top: '-60px', right: '-40px' }} />
                <div style={{ position: 'absolute', width: '240px', height: '240px', borderRadius: '50%', border: '1px dashed rgba(232, 216, 178, 0.08)', top: '-20px', right: '0px' }} />
                <div style={{ position: 'absolute', width: '160px', height: '160px', borderRadius: '50%', border: '1.5px solid rgba(232, 216, 178, 0.04)', top: '20px', right: '40px' }} />
              </div>

              {/* Real Card Content (zIndex: 1) */}
              <div style={{ position: 'relative', zIndex: 1, paddingTop: '1.25rem' }}>
                <h3 style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 'clamp(1.48rem, 2.4vw, 2rem)',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  margin: '0 0 1.25rem 0',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  WebkitTextStroke: '0.35px #FFFFFF'
                }}>
                  Custom Websites
                </h3>
                <div style={{ width: '48px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)', marginBottom: '4.5rem' }} />
                
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
                  <a href="#cases" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono), monospace', fontSize: '11px', letterSpacing: '0.1em', opacity: 0.85, textDecoration: 'none', color: '#A9B4C0', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.85'}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#A9B4C0', display: 'inline-block', flexShrink: 0 }} />
                    <span>SEE WEBSITE EXAMPLES &darr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Custom AI Tools (Right Card - Silver gradient matching Hero right side) */}
            <div 
              className="services-col-right"
              style={{
                background: 'radial-gradient(ellipse at 60% 40%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.35) 55%, rgba(255, 255, 255, 0) 85%), linear-gradient(135deg, #e8ebee 0%, #dcdfe3 45%, #c9ced3 100%)',
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
                <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', border: '1.5px solid rgba(255, 255, 255, 0.6)', top: '-60px', right: '-40px' }} />
                <div style={{ position: 'absolute', width: '240px', height: '240px', borderRadius: '50%', border: '1px dashed rgba(255, 255, 255, 0.8)', top: '-20px', right: '0px' }} />
                <div style={{ position: 'absolute', width: '160px', height: '160px', borderRadius: '50%', border: '1.5px solid rgba(255, 255, 255, 0.5)', top: '20px', right: '40px' }} />
              </div>

              {/* Real Card Content (zIndex: 1) */}
              <div style={{ position: 'relative', zIndex: 1, paddingTop: '1.25rem' }}>
                <h3 style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 'clamp(1.48rem, 2.4vw, 2rem)',
                  fontWeight: 400,
                  color: '#1A1F2B',
                  margin: '0 0 1.25rem 0',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  WebkitTextStroke: '0.35px #1A1F2B'
                }}>
                  Custom AI Tools
                </h3>
                <div style={{ width: '48px', height: '1px', backgroundColor: 'rgba(26, 31, 43, 0.25)', marginBottom: '4.5rem' }} />
                
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
                  <a href="#cases" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono), monospace', fontSize: '11px', letterSpacing: '0.1em', opacity: 0.85, textDecoration: 'none', color: '#5C6672', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.85'}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#5C6672', display: 'inline-block', flexShrink: 0 }} />
                    <span>SEE AI TOOL EXAMPLES &darr;</span>
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
          fontSize: 'clamp(29px, 4.8vw, 46px)', 
          color: '#25150C', 
          fontWeight: 500,
          lineHeight: 1.25,
          letterSpacing: '-0.01em',
          textAlign: 'center',
          width: '100%',
          margin: '0 auto 0.75rem auto',
          WebkitTextStroke: '0.35px #25150C'
        }}>
          How the Process Looks
        </h2>
        <p style={{
          fontFamily: "var(--font-sans), Inter, sans-serif",
          fontSize: '18px',
          fontWeight: 500,
          fontStyle: 'normal',
          lineHeight: 1.6,
          color: '#2a3036',
          opacity: 0.7,
          maxWidth: '640px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          From concept to launch in 3 simple steps:
        </p>
      </div>

      {/* Edge-to-Edge Matte Black Frame for 3-Step Process Flow */}
      <div
        className="services-black-frame-wrapper"
        style={{
          position: 'relative',
          width: '100%',
          background: 'radial-gradient(ellipse at 60% 40%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.35) 55%, rgba(255, 255, 255, 0) 85%), linear-gradient(135deg, #e8ebee 0%, #dcdfe3 45%, #c9ced3 100%)',
          borderTop: '1px solid rgba(0, 0, 0, 0.08)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 20px 48px rgba(0, 0, 0, 0.03)',
          overflow: 'hidden'
        }}
      >
        {/* Ambient Luminous White Glow Spotlight */}
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '45%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            height: '80%',
            background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.4) 45%, rgba(255, 255, 255, 0) 75%)',
            pointerEvents: 'none',
            filter: 'blur(30px)',
            zIndex: 1
          }}
        />

        {/* Premium Geometric Abstract Decor Layer (Process) */}
        <div 
          className="hide-on-mobile"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 2,
            opacity: 0.8
          }}
        >
          {/* Top-Left Cluster */}
          <div style={{ position: 'absolute', width: '200px', height: '200px', border: '1px solid rgba(181, 153, 122, 0.3)', borderRadius: '50%', top: '-5%', left: '-2%' }} />
          <svg style={{ position: 'absolute', top: '15%', left: '8%', opacity: 0.3 }} width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#3A2318" strokeWidth="1">
            <line x1="16" y1="0" x2="16" y2="32" /><line x1="0" y1="16" x2="32" y2="16" />
          </svg>
          
          {/* Top-Right Cluster */}
          <div style={{ position: 'absolute', width: '120px', height: '180px', border: '1px dashed rgba(58, 35, 24, 0.2)', top: '10%', right: '5%' }} />
          <div style={{ position: 'absolute', width: '80px', height: '80px', border: '1px solid rgba(181, 153, 122, 0.4)', top: '25%', right: '12%' }} />

          {/* Center-Left subtle lines */}
          <div style={{ position: 'absolute', top: '50%', left: '0', width: '8%', height: '1px', backgroundColor: 'rgba(58, 35, 24, 0.15)' }} />
          <div style={{ position: 'absolute', top: '52%', left: '0', width: '5%', height: '1px', backgroundColor: 'rgba(181, 153, 122, 0.25)' }} />

          {/* Bottom-Left Cluster */}
          <div style={{ position: 'absolute', width: '150px', height: '150px', border: '1px solid rgba(58, 35, 24, 0.15)', bottom: '5%', left: '10%', transform: 'rotate(45deg)' }} />
          <div style={{ position: 'absolute', width: '4px', height: '4px', backgroundColor: 'rgba(181, 153, 122, 0.5)', bottom: '20%', left: '20%', borderRadius: '50%' }} />

          {/* Bottom-Right Cluster */}
          <div style={{ position: 'absolute', width: '160px', height: '160px', border: '1px dashed rgba(181, 153, 122, 0.3)', borderRadius: '50%', bottom: '10%', right: '8%' }} />
          <svg style={{ position: 'absolute', bottom: '15%', right: '12%', opacity: 0.25 }} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A2318" strokeWidth="1">
            <line x1="12" y1="0" x2="12" y2="24" /><line x1="0" y1="12" x2="24" y2="12" />
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 3, paddingTop: '4rem', paddingBottom: '5rem', paddingLeft: '32%' }}>
          {/* Vertical Creative Process Flow */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
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
                        borderLeft: '1px dashed rgba(0,0,0,0.25)',
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
                      initial={{ borderColor: 'rgba(0,0,0,0.12)', boxShadow: 'none' }}
                      whileInView={{ borderColor: 'rgba(0,0,0,0.25)', boxShadow: 'none' }}
                      viewport={{ once: true, margin: '-20%' }}
                      transition={{ duration: 0.4, delay: i * 0.18 + 0.2 }}
                      style={{
                        flexShrink: 0,
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.75)',
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.025)',
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
                        <h3 style={{ 
                          fontFamily: "var(--font-serif)",
                          fontSize: '25.3px', 
                          color: '#333842',
                          fontWeight: 600,
                          margin: 0,
                          lineHeight: 1.2,
                          WebkitTextStroke: '0.35px #333842'
                        }}>
                          {step.title}
                        </h3>
                      </div>

                      <p style={{
                        fontFamily: "var(--font-sans), Inter, sans-serif",
                        fontSize: '1.07rem',
                        lineHeight: 1.55,
                        color: '#2a3036',
                        fontWeight: 400,
                        opacity: 0.9,
                        margin: 0,
                        maxWidth: '540px'
                      }}>
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
