'use client';

import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'I clarify the problem and come up with the first solutions.',
      bullets: [
        { rest: 'Three visual directions for a website; for a workflow — the routine mapped: steps, rules, approval points. You react to a real solution preview, not a description of it.' }
      ],
      
    },
    {
      num: '02',
      title: 'I build the logic behind the solution.',
      bullets: [
        { rest: 'I handle the build, bring in what’s missing, and keep you involved at the decisions that matter. We test the result together before it goes live or becomes part of your daily work.' }
      ],
      
    },
    {
      num: '03',
      title: 'I apply care to every detail until we reach the goal.',
      bullets: [
        { rest: "Hosting and the accounts around it are taken care of — you're set for what comes next. Tested, set up, handed over." }
      ],
      
    }
  ];

  return (
    <section
      id="how-it-works"
      style={{
        backgroundColor: 'var(--color-matte-black, #25282e)',
        padding: '10.2rem 0 5.36rem 0',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style>{`
        .how-title {
          font-family: var(--font-heading) !important;
          font-weight: 400 !important;
          letter-spacing: -0.02em !important;
          color: #ffffff !important;
          background: none !important;
          -webkit-text-fill-color: #ffffff !important;
        }
        .how-kicker {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: var(--text-label) !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.14em !important;
          color: #f2908f !important;
          background: none !important;
          -webkit-text-fill-color: #f2908f !important;
        }
        .how-subcopy {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: var(--text-body) !important;
          font-weight: 300 !important;
          line-height: var(--lh-body) !important;
          letter-spacing: 0.015em !important;
          color: rgba(255, 255, 255, 0.72) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.72) !important;
        }
        .how-num {
          font-family: var(--font-heading) !important;
          font-weight: 400 !important;
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
          font-size: 2.8rem !important;
        }
        .how-step-title {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-weight: 400 !important;
          font-size: var(--text-body) !important;
          line-height: var(--lh-body) !important;
          letter-spacing: 0.015em !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }
        @media (min-width: 901px) {
          .how-step-title {
            min-height: 3.1em !important;
          }
        }
        .how-step-sub {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          color: rgba(255, 255, 255, 0.82) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.82) !important;
          letter-spacing: 0.005em !important;
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
            padding: 3.5rem 0 5.25rem 0 !important;
          }
          #how-it-works > .container {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .how-title {
            font-size: 2.1rem !important;
          }
          .how-subcopy {
            margin-bottom: 1.575rem !important;
          }
          .how-num {
            font-size: 2.65rem !important;
          }
          .how-step-title {
            font-size: var(--text-body) !important;
          }
        }
        @media (min-width: 1200px) {
          #how-it-works > .container {
            max-width: 1267.2px !important;
            padding-left: 1.76rem !important;
            padding-right: 1.76rem !important;
          }
        }
        @media (min-width: 901px) {
          .how-subcopy {
            margin-bottom: 1.575rem !important;
          }
        }
      `}</style>
      <div
        className="container"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 6rem',
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
          Why work with me
        </motion.p>
        <motion.h2
          className="how-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.78, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--text-section-title)', WebkitTextFillColor: '#ffffff',
            lineHeight: 1.2,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 1.1rem 0',
            textAlign: 'left'
          }}
        >
          Clarity. Logic. Care.
        </motion.h2>
        <motion.p
          className="how-subcopy"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.68, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'var(--text-body)',
            fontWeight: 300,
            lineHeight: 'var(--lh-body)',
            letterSpacing: '-0.011em',
            margin: '0 0 3.15rem 0',
            maxWidth: '52ch',
            textAlign: 'left'
          }}
        >
          I approach each problem in stages — from the messy start to the final solution.
        </motion.p>
        <div
          className="how-steps-grid"
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '1.2rem',
            backgroundColor: 'transparent',
            borderRadius: '16px',
            padding: '1.4rem',
            maxWidth: '1288px',
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
                  fontFamily: 'var(--font-heading)',
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
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 400,
                  fontSize: 'var(--text-panel)',
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
                  gap: '0.65rem',
                  overflow: 'hidden'
                }}
              >
                {step.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="how-step-sub" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'var(--text-body)', fontWeight: 300, lineHeight: 'var(--lh-body)', letterSpacing: '0.005em', color: 'rgba(255, 255, 255, 0.82)', margin: 0, display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <span>{bullet.rest}</span>
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
