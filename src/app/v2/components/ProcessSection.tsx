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
          font-weight: 400 !important;
          letter-spacing: -0.015em !important;
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
        }
        .testimonial-attribution {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-weight: 500 !important;
          letter-spacing: 0.02em !important;
          color: rgba(0, 0, 0, 0.72) !important;
          -webkit-text-fill-color: rgba(0, 0, 0, 0.72) !important;
        }
        @media (max-width: 900px) {
          .testimonial-quote {
            font-size: clamp(1.5rem, 7vw, 1.9rem) !important;
          }
        }
      `}</style>
      {/* Light grey background container */}
      <div
        className="testimonials-grey-container"
        style={{
          width: '100%',
          background:
            'linear-gradient(0deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.25) 35%, rgba(255, 255, 255, 0) 65%), radial-gradient(ellipse at 60% 40%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.45) 55%, rgba(255, 255, 255, 0) 90%), linear-gradient(135deg, #f4f6f8 0%, #eaecee 45%, #dfe2e6 100%)',
          padding: '4.5rem 2rem 5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderTop: '1px solid rgba(0, 0, 0, 0.07)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.04)',
          overflow: 'hidden',
        }}
      >
        <div
          className="testimonial-single"
          style={{
            width: '100%',
            maxWidth: '1440px',
            paddingLeft: '5%',
            position: 'relative',
            zIndex: 2,
            textAlign: 'left',
          }}
        >
          {/* Peach hairline */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: '#f2908f',
              margin: '0 0 2.5rem 0',
              transformOrigin: 'left center',
            }}
          />
          <motion.h2
            className="testimonial-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(28px, 4.4vw, 42px)',
              lineHeight: 1.2,
              color: '#000000',
              letterSpacing: '-0.02em',
              margin: '0 0 3rem 0',
            }}
          >
            How my work helps real businesses:
          </motion.h2>
          <motion.blockquote
            className="testimonial-quote"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.78, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(1.6rem, 3.4vw, 2.4rem)',
              lineHeight: 1.35,
              margin: '0 0 2.25rem 0',
              maxWidth: '880px',
            }}
          >
            <span style={{ color: '#f2908f' }}>&ldquo;</span>Iryna built my new website, and it started working right away — several calls from potential new clients since it went live. She explained everything clearly and patiently, even to someone like me who isn&apos;t tech-savvy at all. Working with her feels personal, not transactional. I recommend her without hesitation.
          </motion.blockquote>
          <motion.p
            className="testimonial-attribution"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            <span aria-hidden="true" style={{ color: '#f2908f', marginRight: '0.6rem' }}>—</span>Isabelle Guertin, Insurance Claims Expert, R. Guertin et Associés, Montreal
          </motion.p>
        </div>
      </div>
    </section>
  );
}
