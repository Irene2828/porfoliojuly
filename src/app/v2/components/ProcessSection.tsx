'use client';

import { motion } from 'framer-motion';

export default function ProcessSection() {
  return (
    <section
      id="process"
      style={{ padding: '0 0 6rem 0', backgroundColor: '#ffffff' }}
    >
      <style>{`
        .testimonial-single {
  background-color: #ffffff !important;
          color: #000000 !important;
  border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          position: relative !important;
        }
        .testimonial-decor {
          position: absolute;
          left: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          pointer-events: none;
        }
        .testimonial-decor-top { top: 0; }
        .testimonial-decor-bottom { bottom: 0; left: auto; right: 0; align-items: flex-end; }
        .testimonial-decor span {
          display: block;
          height: 1px;
          background: rgba(45, 49, 57, 0.8);
        }
        .testimonial-decor span:first-child { width: 248px; }
        .testimonial-decor span:last-child { width: 136px; }
        .testimonial-heading {
  font-family: var(--font-heading) !important;
          font-weight: 400 !important;
          letter-spacing: -0.02em !important;
          color: var(--color-heading-silver) !important;
          -webkit-text-fill-color: var(--color-heading-silver) !important;
        }
        .testimonial-quote {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-style: italic !important;
          font-weight: 400 !important;
          letter-spacing: 0.008em !important;
          color: rgba(0, 0, 0, 0.64) !important;
          -webkit-text-fill-color: rgba(0, 0, 0, 0.64) !important;
        }
        .testimonial-attribution {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-weight: 500 !important;
          font-size: 0.85rem !important;
          letter-spacing: 0.18em !important;
          text-transform: uppercase !important;
          color: rgba(0, 0, 0, 0.8) !important;
          -webkit-text-fill-color: rgba(0, 0, 0, 0.8) !important;
        }
        @media (max-width: 900px) {
          .testimonial-quote {
            font-size: clamp(1.13rem, 5.23vw, 1.43rem) !important;
          }
          .testimonial-attribution {
            font-size: 0.72rem !important;
          }
          .testimonial-single {
            padding: 1.5rem 1.75rem !important;
          }
          .testimonials-grey-container > .container {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
        }
        @media (min-width: 1200px) {
          .testimonials-grey-container > .container {
            max-width: 1267.2px !important;
            padding-left: 1.76rem !important;
            padding-right: 1.76rem !important;
          }
        }
      `}</style>
      <div
        className="testimonials-grey-container"
        style={{
          width: '100%',
          background: 'transparent',
          boxShadow: 'none',
          border: 'none',
          padding: '4.5rem 2rem 5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="container"
          style={{
            width: '100%',
            maxWidth: '1440px',
            paddingLeft: '6rem',
            paddingRight: '6rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            textAlign: 'left',
          }}
        >
          <motion.h2
            className="testimonial-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
              fontSize: 'clamp(28px, 4.4vw, 42px)',
              lineHeight: 1.2,
              margin: '0 0 2.5rem 0',
              color: 'var(--color-heading-silver)',
            }}
          >
            Working With Me Is...
          </motion.h2>
          <motion.div
            className="testimonial-single"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            style={{
              width: '100%',
              backgroundColor: '#ffffff',
              border: '1px dashed #000000',
              borderRadius: 0,
              boxShadow: 'none',
              padding: '4.5rem 4rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              textAlign: 'left',
            }}
          >
            <div className="testimonial-decor testimonial-decor-top" aria-hidden="true">
              <span />
              <span />
            </div>
            <div className="testimonial-decor testimonial-decor-bottom" aria-hidden="true">
              <span />
              <span />
            </div>
            <blockquote
              className="testimonial-quote"
              style={{
                fontSize: 'clamp(1.04rem, 2.21vw, 1.56rem)',
                lineHeight: 1.35,
                margin: 0,
                padding: 0,
                maxWidth: '950px',
                fontStyle: 'italic',
                color: 'rgba(0, 0, 0, 0.64)',
              }}
            >
              &ldquo;Iryna built my new website, and it started working right away &mdash; several calls from potential new clients since it went live. She explained everything clearly and patiently, even to someone like me who isn&apos;t tech-savvy at all. Working with her feels personal, not transactional. I recommend her without hesitation.&rdquo;
            </blockquote>
            <motion.p
              className="testimonial-attribution"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              style={{
                margin: '2.5rem 0 0 0',
                fontSize: '0.85rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(0, 0, 0, 0.8)',
              }}
            >
              <strong style={{ fontWeight: 700, color: 'rgba(0, 0, 0, 0.6)' }}>ISABELLE GUERTIN</strong>, INSURANCE CLAIMS EXPERT, <span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>MONTREAL</span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
