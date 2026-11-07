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
  border: 1px dashed #000000 !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }
        .testimonial-heading {
          font-family: 'Newsreader', Georgia, serif !important;
          font-weight: 400 !important;
          letter-spacing: -0.02em !important;
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
        }
        .testimonial-quote {
          font-family: 'Newsreader', Georgia, serif !important;
          font-style: italic !important;
          font-weight: 400 !important;
          letter-spacing: -0.015em !important;
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
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
            font-size: clamp(0.98rem, 4.55vw, 1.24rem) !important;
          }
          .testimonial-single {
            padding: 3rem 1.75rem !important;
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
          style={{
            width: '100%',
            maxWidth: '1440px',
            paddingLeft: '5%',
            paddingRight: '5%',
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
              fontSize: 'clamp(28px, 4vw, 42px)',
              lineHeight: 1.15,
              margin: '0 0 2.5rem 0',
              color: '#000000',
            }}
          >
            How my work helps real businesses:
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
            <blockquote
              className="testimonial-quote"
              style={{
                fontSize: 'clamp(1.04rem, 2.21vw, 1.56rem)',
                lineHeight: 1.35,
                margin: 0,
                padding: 0,
                maxWidth: '1056px',
                fontStyle: 'italic',
                color: '#000000',
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
              ISABELLE GUERTIN, INSURANCE CLAIMS EXPERT, R. GUERTIN ET ASSOCI&Eacute;S, MONTREAL
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
