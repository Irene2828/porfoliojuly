'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProcessSection() {
  const testimonials = [
    {
      num: '01',
      quote: "Iryna turned our complex manual operational workflow into an intuitive, automated internal AI tool. What used to take our team hours every day now runs seamlessly in minutes.",
      author: 'Elena Ross',
      role: 'Founder & CEO, Apex Operations'
    },
    {
      num: '02',
      quote: "Working with Iryna was completely frictionless. She captured our brand identity perfectly and delivered a high-converting, boutique website that elevated our market positioning immediately.",
      author: 'Marcus Vance',
      role: 'Managing Director, Vance Studio'
    },
    {
      num: '03',
      quote: "From initial concept to final deployment, Iryna took complete ownership of our product. Her ability to blend strategic UX design with robust tech execution is unmatched.",
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
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
      >
        <div style={{ 
          width: '60px', 
          height: '1px', 
          backgroundColor: '#0b0c10', 
          margin: '0 auto 2.5rem auto', 
          opacity: 0.6 
        }} />

        <h2 style={{ 
          fontFamily: "var(--font-serif)",
          fontSize: 'clamp(24px, 4vw, 38px)', 
          color: '#333842', 
          fontWeight: 500,
          lineHeight: 1.25,
          letterSpacing: '-0.01em',
          textAlign: 'center',
          margin: '0 auto 0.75rem auto'
        }}>
          Why Work With Me
        </h2>
        <p style={{
          fontFamily: "var(--font-sans), Inter, sans-serif",
          fontSize: '1.175rem',
          fontWeight: 500,
          lineHeight: 1.6,
          color: '#2a3036',
          maxWidth: '850px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          Here are some reviews on my work from the clients:
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="testimonial-split-section"
      >
        <style>{`
          .testimonial-split-section {
            width: 100vw;
            margin-left: calc(-50vw + 50%);
            display: flex;
            flex-direction: column;
          }
          .testimonial-col-left {
            flex: 1;
            background-color: #ffffff;
            padding: 3rem 2rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
          }
          .testimonial-col-right {
            flex: 2;
            background-color: #333842;
            padding: 3rem 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          @media (max-width: 899px) {
            .testimonial-col-left {
              display: none;
            }
          }
          @media (min-width: 900px) {
            .testimonial-split-section {
              flex-direction: row;
            }
            .testimonial-col-left {
              flex: 0 0 33.333%;
              max-width: 33.333%;
              padding: 3.5rem 4rem;
            }
            .testimonial-col-right {
              flex: 0 0 66.667%;
              max-width: 66.667%;
              padding: 3.5rem 4rem;
            }
          }
        `}</style>

        {/* Left Column: Clean space for now */}
        <div className="testimonial-col-left" />

        {/* Right Column: Carousel */}
        <div className="testimonial-col-right">
        <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '3rem 2.5rem',
                boxShadow: '0 6px 16px -4px rgba(0,0,0,0.12)',
                border: 'none',
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
                  color: '#333842',
                  fontWeight: 700,
                  marginBottom: '1rem'
                }}>
                  &ldquo;
                </div>
                <p style={{
                  fontFamily: "var(--font-sans), Inter, sans-serif",
                  fontSize: '0.875rem',
                  lineHeight: 1.65,
                  color: '#18191e',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  margin: '0 0 2rem 0'
                }}>
                  "{testimonials[activeIndex].quote}"
                </p>
              </div>

              <div style={{ 
                borderTop: '1px solid rgba(24, 25, 30, 0.10)', 
                paddingTop: '1.5rem', 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                textAlign: 'right' 
              }}>
                <div style={{ 
                  fontFamily: "var(--font-sans), Inter, sans-serif",
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#18191e',
                  lineHeight: 1.3
                }}>
                  {testimonials[activeIndex].author}
                </div>
                <div style={{ 
                  fontFamily: "'JetBrains Mono', Menlo, monospace",
                  fontSize: '0.75rem',
                  color: '#55606a',
                  marginTop: '0.3rem',
                  letterSpacing: '0.02em'
                }}>
                  {testimonials[activeIndex].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '2.5rem' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                width: i === activeIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: i === activeIndex ? '#ffffff' : 'rgba(255,255,255,0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);
}
