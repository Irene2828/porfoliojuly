'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProcessSection() {
  const testimonials = [
    {
      num: '01',
      quote: <>"Iryna turned our complex manual operational workflow into an intuitive, automated internal AI tool. What used to take our team hours every day now runs seamlessly in minutes."</>,
      author: 'Elena Ross',
      role: 'Founder & CEO, Apex Operations'
    },
    {
      num: '02',
      quote: <>"Working with Iryna was completely frictionless. She captured our brand identity perfectly and delivered a high-converting, boutique website that elevated our market positioning immediately."</>,
      author: 'Marcus Vance',
      role: 'Managing Director, Vance Studio'
    },
    {
      num: '03',
      quote: <>"From initial concept to final deployment, Iryna took complete ownership of our product. Her ability to blend strategic UX design with robust tech execution is unmatched."</>,
      author: 'Sarah Jenkins',
      role: 'VP of Product, Nexus Tech'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section 
      id="process" 
      style={{ padding: '4rem 0 6rem 0', backgroundColor: '#ffffff' }}
    >
      {/* Section Header above the split frame */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="container"
        style={{ textAlign: 'left', marginBottom: '3.5rem' }}
      >
        <div style={{ paddingLeft: '5%' }}>
          <div style={{ 
            width: '60px', 
            height: '1px', 
            backgroundColor: '#0b0c10', 
            margin: '0 0 2.5rem 0', 
            opacity: 0.6 
          }} />

          <h2 style={{ 
            fontFamily: "var(--font-serif)",
            fontSize: 'clamp(29px, 4.8vw, 46px)', 
            color: '#25150C', 
            fontWeight: 500,
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
            textAlign: 'left',
            width: '100%',
            margin: '0 0 16px 0',
            WebkitTextStroke: '0.35px #25150C'
          }}>
            Why Work With Me
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
            margin: '0',
            textAlign: 'left'
          }}>
            Here's what clients say after we ship:
          </p>
        </div>
      </motion.div>

      <div 

        style={{
          width: '100%',
          background: 'radial-gradient(ellipse at 60% 40%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.35) 55%, rgba(255, 255, 255, 0) 85%), linear-gradient(135deg, #e8ebee 0%, #dcdfe3 45%, #c9ced3 100%)',
          padding: '8rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderTop: '1px solid rgba(0, 0, 0, 0.08)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          overflow: 'hidden'
        }}
      >
        {/* Geometric Abstract Decor Layer (Brown & Beige Tones) */}
        <div 
          className="hide-on-mobile"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.85
          }}
        >
          {/* Top-Left Shapes */}
          <div style={{ position: 'absolute', width: '160px', height: '160px', border: '1.5px dashed rgba(58, 35, 24, 0.18)', top: '10%', left: '6%' }} />
          <div style={{ position: 'absolute', width: '45px', height: '45px', border: '1.5px solid rgba(181, 153, 122, 0.35)', top: '14%', left: '12%' }} />
          
          {/* Top-Right Shapes */}
          <div style={{ position: 'absolute', width: '220px', height: '130px', border: '1.5px solid rgba(58, 35, 24, 0.14)', top: '7%', right: '7%' }} />
          <div style={{ position: 'absolute', width: '75px', height: '75px', border: '1.5px dashed rgba(181, 153, 122, 0.35)', borderRadius: '50%', top: '18%', right: '15%' }} />

          {/* Bottom-Left Shapes */}
          <div style={{ position: 'absolute', width: '190px', height: '110px', border: '1.5px solid rgba(58, 35, 24, 0.14)', bottom: '10%', left: '8%' }} />
          <div style={{ position: 'absolute', width: '50px', height: '50px', border: '1.5px dashed rgba(181, 153, 122, 0.35)', bottom: '18%', left: '14%' }} />

          {/* Bottom-Right Shapes */}
          <div style={{ position: 'absolute', width: '140px', height: '140px', border: '1.5px dashed rgba(58, 35, 24, 0.18)', bottom: '10%', right: '9%' }} />
          <div style={{ position: 'absolute', width: '60px', height: '60px', border: '1.5px solid rgba(181, 153, 122, 0.35)', bottom: '20%', right: '6%' }} />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', zIndex: 2, width: '100%' }}
        >
          <div className="testimonials-track">
            {[-1, 0, 1].map((offset) => {
              const index = (activeIndex + offset + testimonials.length) % testimonials.length;
              const isCenter = offset === 0;
              const testimonial = testimonials[index];
              
              return (
                <div
                  key={`${offset}-${index}`}
                  className={`testimonial-card ${isCenter ? 'center-card' : 'side-card'}`}
                  onClick={() => {
                    if (!isCenter) setActiveIndex(index);
                  }}
                  style={{
                    backgroundColor: isCenter ? '#18191e' : '#ffffff',
                    padding: '3rem 2.5rem',
                    boxShadow: 'none',
                    border: isCenter ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '320px'
                  }}
                >
                  <div>
                    <div style={{ 
                      fontFamily: "var(--font-serif)",
                      fontSize: '2.5rem',
                      lineHeight: '0.8',
                      color: isCenter ? '#b5997a' : '#C8CCD1',
                      fontWeight: 700,
                      marginBottom: '1rem'
                    }}>
                      &ldquo;
                    </div>
                    <p style={{
                      fontFamily: "var(--font-sans), Inter, sans-serif",
                      fontSize: '0.925rem',
                      lineHeight: 1.65,
                      color: isCenter ? '#e8ebee' : '#2a3036',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      margin: '0 0 2rem 0'
                    }}>
                      {testimonial.quote}
                    </p>
                  </div>

                  <div style={{ 
                    borderTop: isCenter ? '1px solid rgba(255, 255, 255, 0.10)' : '1px solid rgba(0, 0, 0, 0.08)', 
                    paddingTop: '1.5rem', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '12px'
                  }}>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ 
                        fontFamily: "var(--font-sans), Inter, sans-serif",
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: isCenter ? '#ffffff' : '#121212',
                        lineHeight: 1.3
                      }}>
                        {testimonial.author}
                      </div>
                      <div style={{ 
                        fontFamily: "'JetBrains Mono', Menlo, monospace",
                        fontSize: '0.75rem',
                        color: '#8c96a0',
                        marginTop: '0.3rem',
                        letterSpacing: '0.02em'
                      }}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <style>{`
            .testimonials-track {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 2rem;
              width: 100%;
              position: relative;
              padding: 2rem 0;
            }
            .testimonial-card {
              flex: 0 0 540px;
              transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
              cursor: pointer;
            }
            .testimonial-card.side-card {
              filter: blur(2.5px);
              opacity: 0.55;
              transform: scale(0.95);
            }
            .testimonial-card.center-card {
              filter: blur(0px);
              opacity: 1;
              transform: scale(1);
              z-index: 10;
            }
            
            /* Group Hover Logic: if ANY card is hovered, blur all other cards */
            .testimonials-track:hover .testimonial-card {
              filter: blur(4px);
              opacity: 0.4;
              transform: scale(0.95);
            }
            .testimonials-track .testimonial-card:hover {
              filter: blur(0px) !important;
              opacity: 1 !important;
              transform: scale(1.02) !important;
              z-index: 20;
              box-shadow: none !important;
            }

            @media (max-width: 1000px) {
              .testimonials-track {
                gap: 1rem;
              }
              .testimonial-card {
                flex: 0 0 85vw;
              }
              .testimonial-card.side-card {
                display: none;
              }
            }
          `}</style>
        </motion.div>

        {/* Premium Scroll Arrow */}
        <div 
          onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
          style={{ 
            marginTop: '2.5rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            cursor: 'pointer',
            opacity: 0.6,
            transition: 'opacity 0.2s ease, transform 0.2s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'translateX(5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.6';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <span style={{ 
            fontFamily: "var(--font-sans), Inter, sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            fontWeight: 500,
            color: '#121212'
          }}>{activeIndex + 1} / {testimonials.length}</span>
          <svg width="65" height="12" viewBox="0 0 65 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6H63.5M63.5 6L58.5 1M63.5 6L58.5 11" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
  </section>
);
}
