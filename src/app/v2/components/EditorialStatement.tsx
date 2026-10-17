'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage from '@/app/assets/test.webp';

export default function EditorialStatement() {
  const [statementIndex, setStatementIndex] = useState(0);

  const statements = [
    <span key="1" style={{ fontSize: '0.81em', display: 'inline-block' }}>Turn <span style={{ color: 'var(--color-heading-silver)' }}>visitors into clients</span> with a custom website.</span>,
    <span key="2" style={{ fontSize: '0.81em', display: 'inline-block' }}>Turn <span style={{ color: 'var(--color-heading-silver)' }}>hours of work into minutes</span> with a custom AI tool.</span>
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStatementIndex((prev) => (prev + 1) % statements.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [statements.length]);



  return (
      <section
        className="prefooter-section"
        style={{
          backgroundColor: '#ffffff', // White background
          padding: '80px 0 120px 0', /* doubled bottom space */
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <style>{`
          .prefooter-btn-primary {
            font-family: var(--font-label), sans-serif !important;
            font-size: 0.81rem !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.08em !important;
            justify-content: center;
            height: 3.48rem !important;
            padding: 0 2rem !important;
            background: var(--color-matte-black, #25282e) !important;
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
            border: none !important;
            border-radius: 56px !important;
            box-shadow: 6px 6px 0px #dcdfe3 !important;
            transition: background 0.22s ease, border-color 0.22s ease, transform 0.2s ease, box-shadow 0.2s ease !important;
            -webkit-text-stroke: 0 !important;
          }
          .prefooter-btn-primary:hover {
            background: var(--color-matte-black-hover, #1f1f24) !important;
            border-color: var(--color-matte-black-hover, #1f1f24) !important;
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
            box-shadow: 0 8px 24px rgba(180, 186, 196, 0.4) !important;
          }
          .face-cta {
            background-color: var(--color-matte-black, #25282e) !important;
            color: #ffffff !important;
            transition: box-shadow 0.3s ease !important;
            border: none !important;
          }
          .face-cta:hover {
            box-shadow: 0 8px 24px rgba(180, 186, 196, 0.4) !important;
            background-color: var(--color-matte-black-hover, #1f1f24) !important;
          }
          /* Mobile: rotating statements in header-title text style */
          @media (max-width: 900px) {
            .editorial-blue-heading,
            .editorial-blue-heading span {
              font-family: var(--font-heading), -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif !important;
              font-size: 15.81px !important;
              font-weight: 400 !important;
              letter-spacing: 0.04em !important;
              color: #64748b !important;
              -webkit-text-fill-color: #64748b !important;
            }
          }
        `}</style>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: '820px',
            width: '100%',
            textAlign: 'center',
            padding: '2rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2
          }}
        >
          {/* Short decor line above closing image */}
          <div className="prefooter-decor-line" style={{ 
            width: '48px', 
            height: '1px', 
            backgroundColor: '#0b0c10', 
            margin: '0 auto 2rem auto', 
            opacity: 0.6 
          }} />

          {/* Closing headline — moved above image */}
          <h2
            className="prefooter-closing-line"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 8vw, 2.6rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              color: 'var(--color-heading-silver, #4a5461)',
              WebkitTextFillColor: 'var(--color-heading-silver, #4a5461)',
              textAlign: 'center',
              margin: '0 0 2.25rem 0',
              maxWidth: '20ch',
            }}
          >
            The future is <span style={{ fontWeight: 700, color: 'var(--color-heading-silver, #4a5461)', WebkitTextFillColor: 'var(--color-heading-silver, #4a5461)' }}>agentic.</span>
            <br />
            The future is <span style={{ fontWeight: 700, color: 'var(--color-heading-silver, #4a5461)', WebkitTextFillColor: 'var(--color-heading-silver, #4a5461)' }}>custom.</span>
          </h2>

          {/* Centered Tall Rectangular Closing Hero Image (-40% height) with dashed grey left & top shadow style */}
          <div
            className="prefooter-closing-image-wrapper"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 'clamp(110px, 15vw, 132px)',
              margin: '0 auto 1.85rem auto',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            {/* Dashed grey outline left and top shadow style */}
            <div
              style={{
                position: 'absolute',
                top: '-5px',
                left: '-5px',
                width: '100%',
                height: '100%',
                borderTop: '1.5px dashed #9ca3af',
                borderLeft: '1.5px dashed #9ca3af',
                pointerEvents: 'none',
                zIndex: 0
              }}
            />

            <div
              className="prefooter-closing-image-container"
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                aspectRatio: '3 / 4',
                overflow: 'hidden',
                borderRadius: '0px',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: 'none'
              }}
            >
              <img 
                src={heroImage.src} 
                alt="Iryna Sheremeta"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  display: 'block',
                  filter: 'brightness(1.04) saturate(1.05)'
                }}
              />
            </div>
          </div>

          {/* Text under image — styled matching closing headline */}
          <p
            className="prefooter-closing-subtext"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.15rem, 2.8vw, 1.45rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.45,
              color: 'var(--color-heading-silver, #4a5461)',
              WebkitTextFillColor: 'var(--color-heading-silver, #4a5461)',
              textAlign: 'center',
              margin: '0 auto 2rem auto',
              maxWidth: '38ch',
              textWrap: 'balance'
            }}
          >
            I&apos;ll help your business stand out and get future-ready with a custom digital product you need to grow.
          </p>

          {/* Section Heading Animated Loop */}
          <div style={{ minHeight: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.6rem' }}>
            <AnimatePresence mode="wait">
              <motion.h2 
                key={statementIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="editorial-blue-heading"
                style={{ 
                  fontFamily: "var(--font-heading)",
                  fontSize: 'clamp(22px, 3.5vw, 27.2px)', 
                  color: 'var(--color-headline-matte, #31343c)', 
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  textAlign: 'center',
                  width: '100%',
                  margin: 0,
                  WebkitTextStroke: '0'
                }}
              >
                {statements[statementIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Action CTAs: moved 40% closer to rotating text + doubled space underneath */}
          <div className="prefooter-cta-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '0.84rem', marginBottom: '2.5rem', justifyContent: 'center' }}>
            <a 
              href="mailto:iryna@irynasheremeta.com" 
              className="btn prefooter-btn-primary face-cta"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', transform: 'scale(1.05)' }}
            >
              <span>SEND YOUR PROBLEM MY WAY</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-light, #7fc5d5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </motion.div>
      </section>


  );
}
