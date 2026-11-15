'use client';

import { motion } from 'framer-motion';

export default function ProcessSection() {
  return (
    <section
      id="process"
      style={{ padding: '0 0 6rem 0', background: 'radial-gradient(circle at 44% 42%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.52) 34%, rgba(247, 243, 237, 0) 72%), #f7f3ed', borderBottom: '1px solid rgba(120, 128, 136, 0.18)' }}
    >
      <style>{`
        .testimonial-single {
  background-color: transparent !important;
          color: #000000 !important;
  border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          position: relative !important;
        }
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
          font-weight: 300 !important;
          letter-spacing: 0.008em !important;
          color: rgba(0, 0, 0, 0.64) !important;
          -webkit-text-fill-color: rgba(0, 0, 0, 0.64) !important;
        }
        .testimonial-attribution {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-weight: 500 !important;
          font-size: var(--text-small) !important;
          line-height: var(--lh-small);
          letter-spacing: 0.18em !important;
          text-transform: uppercase !important;
          color: rgba(0, 0, 0, 0.8) !important;
          -webkit-text-fill-color: rgba(0, 0, 0, 0.8) !important;
        }
        @media (max-width: 900px) {
          .testimonial-quote {
            font-size: var(--text-small) !important;
            max-width: 100% !important;
          }
          .testimonial-attribution {
            font-size: var(--text-label) !important;
          }
          .testimonial-single {
            padding: 2.625rem 1.75rem 1.5rem !important;
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
        @media (min-width: 901px) {
          .testimonial-quote {
            font-size: var(--text-small) !important;
          }
          .testimonial-single {
            width: 77% !important;
            margin-left: auto !important;
            margin-right: 0 !important;
            transform: translateX(5%) !important;
          }
          .testimonial-quote {
            max-width: 100% !important;
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
              fontSize: 'var(--text-section-title)',
              lineHeight: 1.2,
              margin: '0 0 1.25rem 0',
              color: 'var(--color-heading-silver)',
            }}
          >
            A client&rsquo;s perspective:
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
              padding: '3.25rem 4rem 2.25rem',
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
                fontSize: 'var(--text-small)',
                lineHeight: 'var(--lh-small)',
                margin: 0,
                padding: 0,
                maxWidth: '1093px',
                fontStyle: 'italic',
                color: 'rgba(0, 0, 0, 0.64)',
              }}
            >
              &ldquo;Iryna built my new website, and <strong style={{ fontWeight: 600, color: 'rgba(0, 0, 0, 0.82)' }}>it started working right away &mdash; several calls from potential new clients since it went live.</strong> She explained everything clearly and patiently, even to someone like me who isn&apos;t tech-savvy at all. Working with her feels personal, not transactional. I recommend her without hesitation.&rdquo;
            </blockquote>
            <motion.p
              className="testimonial-attribution"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              style={{
                margin: '2.5rem 0 0 0',
                fontSize: 'var(--text-small)',
                lineHeight: 'var(--lh-small)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(0, 0, 0, 0.8)',
              }}
            >
              <strong style={{ fontWeight: 800, color: 'rgba(0, 0, 0, 0.6)' }}>ISABELLE GUERTIN</strong>, INSURANCE CLAIMS EXPERT, <span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>MONTREAL</span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
