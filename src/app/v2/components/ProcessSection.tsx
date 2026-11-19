'use client';

import { motion } from 'framer-motion';

export default function ProcessSection({ variant = 'default' }: { variant?: 'default' | 'websites' }) {
  const isWebsites = variant === 'websites';
  return (
    <section
      id="process"
      style={{ padding: '0', background: '#ffffff', borderBottom: '1px solid rgba(120, 128, 136, 0.18)' }}
    >
      <style>{`
        .testimonials-grey-container {
          background: #ffffff !important;
        }
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
          font-style: normal !important;
          font-weight: 400 !important;
          letter-spacing: 0.008em !important;
          color: rgba(0, 0, 0, 0.78) !important;
          -webkit-text-fill-color: rgba(0, 0, 0, 0.78) !important;
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
        .testimonial-pull-quote {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: clamp(1.15rem, 1.8vw, 1.55rem) !important;
          line-height: 1.4 !important;
          font-weight: 500 !important;
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
          max-width: 38ch;
          margin: 0 0 1.25rem 0;
        }
        .homepage-testimonial-single::before {
          content: '“';
          position: absolute;
          left: -1.7rem;
          top: 3.5rem;
          font-family: 'Newsreader', 'Source Serif 4', Georgia, serif;
          font-size: 5.2rem;
          line-height: 0.8;
          font-weight: 400;
          color: #f2908f;
          -webkit-text-fill-color: #f2908f;
          pointer-events: none;
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
          .homepage-testimonial-single::before {
            left: 0.45rem;
            top: 1rem;
            font-size: 3.6rem;
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
            font-size: calc(var(--text-small) * 1.2) !important;
          }
          .testimonial-single {
            width: 77% !important;
            margin-left: auto !important;
            margin-right: 0 !important;
            transform: translateX(5%) !important;
          }
          .homepage-testimonial-single {
            padding-top: 6.5rem !important;
            padding-bottom: 4.5rem !important;
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
          padding: '0.56rem 2rem 2.55rem 2rem',
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
            className={`testimonial-heading${isWebsites ? ' homepage-light-heading' : ''}`}
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
            {isWebsites ? 'Working with me, in client’s words:' : 'Working with me, in client’s words:'}
          </motion.h2>
          <motion.div
            className={`testimonial-single${isWebsites ? ' homepage-testimonial-single' : ''}`}
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
            <p className="testimonial-pull-quote">
              “Your website is so effective that I&apos;m now receiving calls every day from potential clients — sometimes as many as three a day!”
            </p>
            <blockquote
              className="testimonial-quote"
              style={{
                fontSize: 'var(--text-small)',
                lineHeight: 'var(--lh-small)',
                margin: 0,
                padding: 0,
                maxWidth: '1093px',
                fontStyle: 'normal',
                color: 'rgba(0, 0, 0, 0.64)',
              }}
            >
              Working with Iryna was a great experience from start to finish. She is professional, patient, and truly listens to her clients. What sets her apart is her ability to go beyond what&apos;s asked, anticipate needs, and offer thoughtful solutions. She delivered a website that perfectly reflects my business and values. I couldn&apos;t be happier with the result and highly recommend her services!
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
