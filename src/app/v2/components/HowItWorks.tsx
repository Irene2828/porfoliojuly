'use client';

import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'You tell me the problem.',
      bullets: [
        { bold: 'A short call or an email.', rest: ' No prep, no tech talk.' }
      ],
      
    },
    {
      num: '02',
      title: 'I send a first version.',
      bullets: [
        { bold: 'Something clickable in days,', rest: ' so you react to a real thing.' }
      ],
      
    },
    {
      num: '03',
      title: 'We fix it and launch.',
      bullets: [
        { bold: 'I ship it, hand it over,', rest: ' and set up hosting and support.' }
      ],
      
    }
  ];

  return (
    <section
      id="how-it-works"
      style={{
        backgroundColor: 'var(--color-matte-black, #25282e)',
        padding: '5.1rem 0 15.3rem 0',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style>{`
        .how-title {
          font-family: 'Newsreader', Georgia, serif !important;
          font-weight: 400 !important;
          letter-spacing: -0.02em !important;
          color: #ffffff !important;
          background: none !important;
          -webkit-text-fill-color: #ffffff !important;
        }
        .how-kicker {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: 0.72rem !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.14em !important;
          color: #f2908f !important;
          background: none !important;
          -webkit-text-fill-color: #f2908f !important;
        }
        .how-subcopy {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          color: rgba(255, 255, 255, 0.72) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.72) !important;
        }
        .how-num {
          font-family: 'Newsreader', Georgia, serif !important;
          font-weight: 400 !important;
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
          font-size: 2.8rem !important;
        }
        .how-step-title {
          font-family: 'Newsreader', Georgia, serif !important;
          font-weight: 400 !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }
        .how-step-sub {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          color: rgba(255, 255, 255, 0.82) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.82) !important;
        }
        .how-step-sub strong {
          font-weight: 600 !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }
        .how-step-card {
          transition: transform 0.25s ease !important;
        }
        .how-step-card:hover {
          transform: translateY(-4px) !important;
          border: none !important;
        }
        @media (max-width: 900px) {
          #how-it-works {
            padding: 3.5rem 0 10.5rem 0 !important;
          }
          .how-title {
            font-size: 2.1rem !important;
          }
          .how-num {
            font-size: 2.65rem !important;
          }
          .how-step-title {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.9rem',
          textAlign: 'center'
        }}
      >
        <motion.p
          className="how-kicker"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
          style={{ margin: '0 0 1.05rem 0', textAlign: 'left' }}
        >
          How I work
        </motion.p>
        <motion.h2
          className="how-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.78, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Newsreader', Georgia, serif",
            fontSize: 'clamp(2rem, 4.5vw, 2.9rem)', WebkitTextFillColor: '#ffffff',
            lineHeight: 1.15,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 1.1rem 0',
            textAlign: 'left'
          }}
        >
          Simple, honest, fast.
        </motion.h2>
        <motion.p
          className="how-subcopy"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.68, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)',
            fontWeight: 300,
            lineHeight: 1.55,
            letterSpacing: '-0.011em',
            margin: '0 0 3.15rem 0',
            maxWidth: '52ch',
            textAlign: 'left'
          }}
        >
          Three steps, no mystery. You always know what happens next.
        </motion.p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '1.2rem',
            backgroundColor: 'transparent',
            borderRadius: '16px',
            padding: '1.4rem',
            maxWidth: '1120px',
            margin: '0 auto',
            boxShadow: 'none'
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.68, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: '1 1 0',
                minWidth: '175px',
                alignItems: 'flex-start',
                textAlign: 'left',
                gap: '1rem',
                background: 'transparent',
                border: 'none',
                borderRadius: '16px',
                padding: '1.35rem 1.35rem 1.25rem 1.35rem',
                boxShadow: 'none',
              }}
              className="how-step-card"
            >

              <span
                className="how-num"
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: '2.6rem',
                  lineHeight: 1,
                  margin: '0.1rem 0 0 0',
                  display: 'block'
                }}
              >
                {step.num}
              </span>
              <h3
                className="how-step-title"
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontWeight: 400,
                  fontSize: '1.65rem',
                  lineHeight: 1.2,
                  margin: 0
                }}
              >
                {step.title}
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 0.2rem 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem'
                }}
              >
                {step.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="how-step-sub"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '0.98rem',
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: 'rgba(255, 255, 255, 0.82)',
                      margin: 0,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem'
                    }}
                  >
                    <span style={{ color: '#f2908f', fontSize: '1.05rem', lineHeight: 1.6, flexShrink: 0 }}>•</span>
                    <span>
                      <strong style={{ fontWeight: 600, color: '#ffffff' }}>{bullet.bold}</strong>
                      {bullet.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
