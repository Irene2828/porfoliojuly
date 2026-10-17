'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

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

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section 
      id="process" 
      style={{ padding: '0 0 6rem 0', backgroundColor: '#ffffff' }}
    >
      {/* Grey background container */}
      <div className="testimonials-grey-container"
        style={{
          width: '100%',
          background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.25) 35%, rgba(255, 255, 255, 0) 65%), radial-gradient(ellipse at 60% 40%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.45) 55%, rgba(255, 255, 255, 0) 90%), linear-gradient(135deg, #f4f6f8 0%, #eaecee 45%, #dfe2e6 100%)',
          padding: '4rem 2rem 8rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderTop: '1px solid rgba(0, 0, 0, 0.07)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.04)',
          overflow: 'hidden'
        }}
      >
        {/* Section Header */}
        <motion.div className="testimonials-header-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', maxWidth: '1440px', paddingLeft: '5%', marginBottom: '2.5rem', zIndex: 2, position: 'relative', textAlign: 'left' }}
        >
          <div style={{ 
            width: '60px', 
            height: '1px', 
            backgroundColor: 'var(--accent, #1d4e5b)', 
            margin: '0 0 2.5rem 0', 
            opacity: 0.9 
          }} />

          <h2 style={{ 
            fontFamily: "var(--font-heading)",
            fontSize: 'clamp(28px, 4.4vw, 42px)', 
            color: 'var(--color-heading-silver)', 
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            textAlign: 'left',
            width: '100%',
            margin: '0',
            WebkitTextStroke: '0',
            textWrap: 'balance'
          }}>
            <span style={{ fontWeight: 400, color: 'var(--color-heading-silver, #4a5461)' }}>Clients' </span><span style={{ fontWeight: 700, color: 'var(--color-heading-silver, #4a5461)', WebkitTextFillColor: 'var(--color-heading-silver, #4a5461)' }}>Feedback:</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: '17px',
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'var(--color-body-dark, #2b3038)',
            opacity: 0.9,
            maxWidth: '640px',
            margin: '14px 0 0 0',
            textAlign: 'left',
            letterSpacing: '-0.01em',
            fontStyle: 'italic'
          }}>
            I didn't ask for flattery. I asked: &ldquo;Why me?&rdquo;
          </p>
        </motion.div>


        {/* Testimonials 3-Card Carousel Track */}
        <div 
          style={{ position: 'relative', zIndex: 2, width: '100%' }}
        >
          <div className="testimonials-track">
            {[-1, 0, 1].map((offset) => {
              const index = (activeIndex + offset + testimonials.length) % testimonials.length;
              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;
              const testimonial = testimonials[index];
              const cardRoleClass = isCenter ? 'center-card' : isLeft ? 'left-card' : 'right-card';
              
              return (
                <div
                  key={`${offset}-${testimonial.author}`}
                  className={`testimonial-card ${cardRoleClass}`}
                  onClick={() => {
                    if (isCenter) handleNext();
                    else handleCardClick(index);
                  }}
                  style={{
                    backgroundColor: isCenter ? 'var(--color-matte-black, #25282e)' : '#ffffff',
                    padding: '3rem 2.5rem',
                    border: isCenter ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '330px',
                    borderRadius: '0px'
                  }}
                >
                  <div>
                    <div style={{ 
                      fontFamily: "var(--font-heading)",
                      fontSize: '2.5rem',
                      lineHeight: '0.8',
                      color: isCenter ? '#dcdfe3' : '#8c95a3',
                      fontWeight: 700,
                      marginBottom: '1rem',
                      transition: 'color 0.35s ease'
                    }}>
                      &ldquo;
                    </div>
                    <p style={{
                      fontFamily: "var(--font-body)",
                      fontSize: '0.94rem',
                      lineHeight: 1.65,
                      color: isCenter ? '#e8ebee' : '#2a3036',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      margin: '0 0 2rem 0',
                      transition: 'color 0.35s ease'
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
                    gap: '12px',
                    transition: 'border-color 0.35s ease'
                  }}>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ 
                        fontFamily: "var(--font-heading)",
                        fontSize: '0.98rem',
                        fontWeight: 500,
                        letterSpacing: '-0.01em',
                        color: isCenter ? '#ffffff' : '#121212',
                        lineHeight: 1.3,
                        transition: 'color 0.35s ease'
                      }}>
                        {testimonial.author}
                      </div>
                      <div style={{ 
                        fontFamily: "var(--font-label)",
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: isCenter ? '#9ca3af' : '#6b7280',
                        marginTop: '0.3rem',
                        letterSpacing: '0.04em',
                        transition: 'color 0.35s ease'
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
              flex: 0 0 clamp(418px, 36.3vw, 528px);
              width: clamp(418px, 36.3vw, 528px);
              border-radius: 0px !important;
              box-shadow: none !important;
              transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                          opacity 0.35s ease,
                          background-color 0.35s ease,
                          border-color 0.35s ease;
              cursor: pointer;
              user-select: none;
              box-sizing: border-box;
            }

            /* Center Card */
            .testimonial-card.center-card {
              opacity: 1;
              transform: scale(1);
              z-index: 10;
              box-shadow: none !important;
            }
            .testimonial-card.center-card:hover {
              transform: scale(1.025) !important;
              box-shadow: none !important;
            }

            /* Side Cards at rest */
            .testimonial-card.left-card,
            .testimonial-card.right-card {
              opacity: 0.65;
              transform: scale(0.96);
              z-index: 2;
              box-shadow: none !important;
            }

            /* Hover on Left Card: smoothly push inward towards center by 130px so full text is seen clearly */
            .testimonial-card.left-card:hover {
              opacity: 1 !important;
              transform: translateX(min(130px, 11vw)) scale(1.045) !important;
              z-index: 25 !important;
              box-shadow: none !important;
            }

            /* Hover on Right Card: smoothly push inward towards center by 130px so full text is seen clearly */
            .testimonial-card.right-card:hover {
              opacity: 1 !important;
              transform: translateX(max(-130px, -11vw)) scale(1.045) !important;
              z-index: 25 !important;
              box-shadow: none !important;
            }

            /* Subtle focus effect on track hover */
            .testimonials-track:hover .testimonial-card.center-card {
              opacity: 0.9;
            }
            .testimonials-track .testimonial-card:hover {
              opacity: 1 !important;
            }

            .feedback-subline-row2 {
              display: inline;
            }
            @media (max-width: 900px) {
              .feedback-subline-row2 {
                display: inline !important;
                margin-top: 0 !important;
              }
            }

            @media (max-width: 1000px) {
              .testimonials-track {
                gap: 1.25rem;
              }
              .testimonial-card {
                flex: 0 0 84vw;
                width: 84vw;
              }
              .testimonial-card.left-card,
              .testimonial-card.right-card {
                display: flex;
                opacity: 0.55;
                transform: scale(0.93);
              }
              .testimonial-card.left-card:hover,
              .testimonial-card.right-card:hover {
                transform: scale(0.93) !important;
                opacity: 0.55 !important;
              }
            }
          `}</style>
        </div>

        {/* Premium Scroll Arrow */}
        <div 
          onClick={handleNext}
          style={{ 
            marginTop: '2.5rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            cursor: 'pointer',
            opacity: 0.85,
            transition: 'opacity 0.2s ease, transform 0.2s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'translateX(5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.85';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <span style={{ 
            fontFamily: "var(--font-label)",
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            fontWeight: 600,
            color: 'var(--color-heading-silver)'
          }}>{activeIndex + 1} / {testimonials.length}</span>
          <svg width="65" height="12" viewBox="0 0 65 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6H63.5M63.5 6L58.5 1M63.5 6L58.5 11" stroke="var(--color-heading-silver)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
