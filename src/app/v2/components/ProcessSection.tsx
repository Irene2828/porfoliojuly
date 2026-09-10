'use client';

import { motion } from 'framer-motion';

export default function ProcessSection() {
  const testimonials = [
    {
      num: '01',
      bg: '#ffffff',
      borderColor: 'rgba(0, 0, 0, 0.08)',
      tagColor: '#5a9ad4',
      quote: "Iryna turned our complex manual operational workflow into an intuitive, automated internal AI tool. What used to take our team hours every day now runs seamlessly in minutes.",
      author: 'Elena Ross',
      role: 'Founder & CEO, Apex Operations'
    },
    {
      num: '02',
      bg: '#d0e8fc', // Sky blue card (middle card)
      borderColor: 'rgba(0, 0, 0, 0.08)',
      tagColor: '#2c6fb0',
      quote: "Working with Iryna was completely frictionless. She captured our brand identity perfectly and delivered a high-converting, boutique website that elevated our market positioning immediately.",
      author: 'Marcus Vance',
      role: 'Managing Director, Vance Studio'
    },
    {
      num: '03',
      bg: '#ffffff',
      borderColor: 'rgba(0, 0, 0, 0.08)',
      tagColor: '#5a9ad4',
      quote: "From initial concept to final deployment, Iryna took complete ownership of our product. Her ability to blend strategic UX design with robust tech execution is unmatched.",
      author: 'Sarah Jenkins',
      role: 'VP of Product, Nexus Tech'
    }
  ];

  return (
    <section 
      id="process" 
      style={{ 
        backgroundColor: '#ffffff',
        backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.065) 1.25px, transparent 1.25px)',
        backgroundSize: '28px 28px',
        padding: 0,
        margin: '8rem 0 0 0',
        position: 'relative'
      }}
    >
      <style>{`
        @media (max-width: 960px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Top Edge-to-Edge 1px Divider Bar */}
      <div 
        style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          height: '1px',
          backgroundColor: '#18191e',
          marginBottom: '3.5rem'
        }}
      />

      {/* Centered Section Header */}
      <div className="container" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        {/* Section Heading */}
        <h2 style={{ 
          fontFamily: "'Times New Roman', Times, Georgia, serif",
          fontSize: 'clamp(24px, 4vw, 38px)', 
          color: '#5a9ad4', 
          fontWeight: 500,
          lineHeight: 1.25,
          letterSpacing: '-0.01em',
          textAlign: 'center',
          width: '100%',
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
          maxWidth: '640px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          Here are some reviews on my work from the clients:
        </p>
      </div>

      {/* 3 Testimonials Cards Container */}
      <div 
        style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          position: 'relative',
          padding: '1rem 0 0 0'
        }}
      >
        <div 
          className="container" 
          style={{ 
            maxWidth: '1280px', 
            margin: '0 auto', 
            padding: '0 1.5rem' 
          }}
        >
          <div 
            className="testimonials-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              alignItems: 'stretch'
            }}
          >
            {testimonials.map((item, i) => {
              const isCenter = i === 1; // Middle card
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    backgroundColor: isCenter ? '#ffffff' : '#18191e',
                    border: isCenter ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: '2.25rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    boxShadow: isCenter ? '0 10px 30px rgba(0, 0, 0, 0.06)' : '0 6px 20px rgba(0, 0, 0, 0.15)',
                    transition: 'box-shadow 0.3s ease, border-color 0.3s ease'
                  }}
                >
                  <div>
                    {/* Quote Icon */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '0.75rem' }}>
                      <span style={{ 
                        fontFamily: "'Times New Roman', Times, Georgia, serif",
                        fontSize: '2.2rem',
                        lineHeight: '0.8',
                        color: isCenter ? '#2c6fb0' : '#5a9ad4',
                        opacity: isCenter ? 0.85 : 0.7,
                        fontWeight: 700
                      }}>
                        &ldquo;
                      </span>
                    </div>

                    {/* Quote Text */}
                    <p style={{
                      fontFamily: "var(--font-serif), 'Times New Roman', Times, Georgia, serif",
                      fontSize: '1.14rem',
                      lineHeight: 1.55,
                      color: isCenter ? '#18191e' : '#ffffff',
                      fontWeight: 400,
                      fontStyle: 'italic',
                      margin: '0 0 1.25rem 0'
                    }}>
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Client Info */}
                  <div style={{ 
                    borderTop: isCenter ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.12)', 
                    paddingTop: '1rem', 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    textAlign: 'right' 
                  }}>
                    <div style={{ 
                      fontFamily: "var(--font-sans), Inter, sans-serif",
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: isCenter ? '#18191e' : '#ffffff',
                      lineHeight: 1.3,
                      textAlign: 'right'
                    }}>
                      {item.author}
                    </div>
                    <div style={{ 
                      fontFamily: "'JetBrains Mono', Menlo, monospace",
                      fontSize: '0.72rem',
                      color: isCenter ? '#55606a' : '#b0b4bc',
                      marginTop: '0.2rem',
                      letterSpacing: '0.02em',
                      textAlign: 'right'
                    }}>
                      {item.role}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Edge-to-Edge 1px Divider Bar */}
      <div 
        style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          height: '1px',
          backgroundColor: '#18191e',
          marginTop: '4.5rem'
        }}
      />
    </section>
  );
}
