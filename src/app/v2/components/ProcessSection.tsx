'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProcessSection() {
  const testimonials = [
    {
      num: '01',
      quote: <>"Iryna turned our complex manual operational workflow into an intuitive, automated internal AI tool. What used to take our team <span style={{ background: 'rgba(0,255,163,0.15)', padding: '2px 6px' }}>hours every day now runs seamlessly in minutes</span>."</>,
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
          margin: '0 auto 0.75rem auto',
          WebkitTextStroke: '0.35px #333842'
        }}>
          Why Work With Me
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
          Here's what clients say after we ship:
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          backgroundColor: '#333842',
          padding: '4rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderTop: '1px solid rgba(240, 242, 245, 0.1)',
          borderBottom: '1px solid rgba(240, 242, 245, 0.1)'
        }}
      >
        <div style={{ position: 'relative', width: '100%', maxWidth: '560px' }}>
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
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                border: 'none',
                borderLeft: '4px solid #00FFA3',
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
                  fontSize: '0.925rem',
                  lineHeight: 1.65,
                  color: '#18191e',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  margin: '0 0 2rem 0'
                }}>
                  {testimonials[activeIndex].quote}
                </p>
              </div>

              <div style={{ 
                borderTop: '1px solid rgba(24, 25, 30, 0.10)', 
                paddingTop: '1.5rem', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '12px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#252A3A',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: 600
                }}>
                  {testimonials[activeIndex].author.split(' ').map(n => n[0]).join('')}
                </div>
                <div style={{ textAlign: 'left' }}>
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
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '2.5rem' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                width: i === activeIndex ? '24px' : '6px',
                height: '6px',
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
      </motion.div>
  </section>
);
}
