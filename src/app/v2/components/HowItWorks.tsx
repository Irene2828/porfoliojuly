'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type HowItWorksProps = {
  variant?: 'default' | 'websites' | 'tools';
};

export default function HowItWorks({ variant = 'default' }: HowItWorksProps) {
  const [openSteps, setOpenSteps] = useState<Record<string, boolean>>({ '01': true, '02': true, '03': true });
  const defaultSteps = [
    {
      num: '01',
      title: 'I clarify the problem and come up with the first solutions.',
      bullets: [
        { rest: 'Three visual directions for a website' },
        { rest: 'For a workflow — the routine mapped: steps, rules, approval points' },
        { rest: 'You react to a real solution preview, not a description of it.' }
      ],
      
    },
    {
      num: '02',
      title: 'I build the logic behind the solution.',
      bullets: [
        { rest: 'I handle the build, bring in what’s missing, and keep you involved at the decisions that matter' },
        { rest: 'We test the result together before it goes live or becomes part of your daily work.' }
      ],
      
    },
    {
      num: '03',
      title: 'I apply care to every detail until we reach the goal.',
      bullets: [
        { rest: 'Hosting and the accounts around it are taken care of — you’re set for what comes next' },
        { rest: 'Tested, set up, handed over.' }
      ],
      
    }
  ];
  const websiteSteps = [
    {
      num: '01',
      title: 'I start with your business, not a template.',
      bullets: [
        { rest: 'What you sell, who buys it, and what a visitor has to understand in the first ten seconds.' },
        { rest: 'You get three visual directions to react to: real designs, not descriptions.' },
        { rest: 'We pick one together before anything is built.' }
      ],
    },
    {
      num: '02',
      title: 'I design and build the whole site.',
      bullets: [
        { rest: 'Structure, copy and design that explain your offer in plain words.' },
        { rest: 'Built on a modern stack: fast, secure, easy to find on Google.' },
        { rest: 'You see a working site early, while changes are still cheap.' }
      ],
    },
    {
      num: '03',
      title: 'I launch it, and I stay.',
      bullets: [
        { rest: 'Domain, hosting and forms set up and tested. Nothing left half-done.' },
        { rest: 'Update it yourself in a simple admin panel, or send changes to me on a care plan.' },
        { rest: 'You own the site, the code and the accounts. Nothing is held hostage.' }
      ],
    }
  ];
  const toolsSteps = [
    {
      num: '01',
      title: 'I start with the routine, not the software.',
      bullets: [
        { rest: 'You show me how it’s done today: the files, the steps, the exceptions.' },
        { rest: 'We agree what the tool does and what a person still approves.' },
        { rest: 'You see a working version early, while changes are still cheap.' },
      ],
    },
    {
      num: '02',
      title: 'I build it and test it on your real cases.',
      bullets: [
        { rest: 'Built around the tools and accounts you already use.' },
        { rest: 'Tested on real examples, not demos.' },
        { rest: 'The routine runs itself; approvals stay human.' },
      ],
    },
    {
      num: '03',
      title: 'I hand it over, and I stay.',
      bullets: [
        { rest: 'A short walkthrough so your team can run it.' },
        { rest: 'You own the tool, the code and the accounts. Nothing is held hostage.' },
        { rest: 'Small fixes and new cases on a care plan.' },
      ],
    },
  ];
  const steps = variant === 'websites' ? websiteSteps : variant === 'tools' ? toolsSteps : defaultSteps;

  return (
    <section
      id="how-it-works"
      style={{
        backgroundColor: 'var(--color-matte-black, #25282e)',
        padding: 'var(--section-entry-space, 5.1rem) 0 2.55rem 0',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style>{`
        .how-title {
          font-family: var(--font-heading) !important;
          font-weight: 500 !important;
          letter-spacing: -0.02em !important;
          color: #ffffff !important;
          background: none !important;
          -webkit-text-fill-color: #ffffff !important;
        }
        .how-title-last {
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
          font-style: italic !important;
        }
        .v2-theme #how-it-works h2.how-title {
          font-weight: 500 !important;
          letter-spacing: -0.02em !important;
        }
        .v2-theme #how-it-works h2.how-title .how-title-lead {
          font-weight: 600 !important;
          color: #ffffff !important;
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
          opacity: 0.3;
          font-family: var(--font-heading) !important;
          font-weight: 400 !important;
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
          font-size: 2.8rem !important;
        }
        .how-step-title {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-weight: 500 !important;
          font-size: var(--text-subhead) !important;
          line-height: 1.3 !important;
          letter-spacing: -0.02em !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          text-wrap: balance !important;
        }
        @media (min-width: 901px) {
          .how-step-title {
            min-height: 2.6em !important;
          }
        }
        .how-step-sub {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          color: rgba(255, 255, 255, 0.72) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.72) !important;
          letter-spacing: 0.005em !important;
        }
        .how-step-sub strong {
          font-weight: 600 !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }
        .how-step-card {
          border: 1px solid rgba(255, 255, 255, 0.16) !important;
          border-radius: 16px !important;
          background: rgba(255, 255, 255, 0.03) !important;
          transition: transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease !important;
        }
        .how-step-card:hover {
          transform: translateY(-4px) !important;
          border-color: rgba(255, 255, 255, 0.24) !important;
          background: rgba(255, 255, 255, 0.07) !important;
        }
        .how-step-label {
          display: block;
          width: 100%;
          padding: 0;
          margin: 0;
          border: 0;
          background: transparent;
          color: #ffffff;
          text-align: left;
          font: inherit;
          cursor: pointer;
        }
        .how-step-last-word {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
        }
        .how-step-check {
          display: inline-block;
          width: 0.55em;
          height: 0.55em;
          flex-shrink: 0;
          margin-left: 0.3em;
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
          font-size: 1.05em;
          font-weight: 400;
          line-height: 1;
        }
        @media (max-width: 900px) {
          #how-it-works {
            padding: var(--section-entry-space, 5.1rem) 0 2.55rem 0 !important;
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
          .how-steps-grid {
            flex-direction: column !important;
            padding: 1.4rem 0 !important;
          }
          .how-step-card {
            display: grid !important;
            grid-template-columns: 3.5rem minmax(0, 1fr);
            align-items: start !important;
            column-gap: 1.25rem !important;
            row-gap: 1rem !important;
            padding-inline: 0 !important;
            min-width: 0 !important;
          }
          .how-step-card > .how-num {
            grid-column: 1;
            grid-row: 1;
            margin-top: 0 !important;
          }
          .how-step-card > .how-step-title {
            grid-column: 2;
            grid-row: 1;
          }
          .how-step-card > ul { grid-column: 2; }
          .how-step-card {
            box-sizing: border-box !important;
            padding-inline: 1rem !important;
          }
          .how-num {
            font-size: 2.65rem !important;
          }
          .how-step-title {
            font-size: var(--text-subhead) !important;
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
            font-size: calc(var(--text-body) + 2px) !important;
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
          {variant === 'tools' ? 'How it works' : 'My approach to work'}
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
          {variant === 'tools' ? (
            <span className="how-title-lead">Three stages, from routine to tool.</span>
          ) : (
            <><span className="how-title-lead">Clarity. Logic.</span>{' '}<span className="how-title-last">Care.</span></>
          )}
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
          {variant === 'tools' ? 'Start with the routine. Build the tool. Keep the approvals human.' : variant === 'websites' ? 'Three stages — from problem to solution.' : 'Three stages - three steps to bring a problem to solution.'}
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
              <h3 className="how-step-title" style={{ margin: 0, width: '100%' }}>
                <button
                  type="button"
                  className="how-step-label"
                  aria-expanded={openSteps[step.num]}
                  onClick={() => setOpenSteps((current) => ({ ...current, [step.num]: !current[step.num] }))}
                >
                  {step.title.slice(0, step.title.lastIndexOf(' ') + 1)}<span className="how-step-last-word">{step.title.slice(step.title.lastIndexOf(' ') + 1)}<svg className="how-step-check" aria-hidden="true" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: openSteps[step.num] ? 'rotate(0deg)' : 'rotate(180deg)' }}><path d="m2 4 4 4 4-4" /></svg></span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {openSteps[step.num] && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    style={{ listStyle: 'none', padding: 0, margin: '0 0 0.2rem 0', display: 'flex', flexDirection: 'column', gap: '0.65rem', overflow: 'hidden' }}
                  >
                    {step.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="how-step-sub" style={{ margin: 0, display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <span style={{ color: '#f2908f', flexShrink: 0 }}>–</span>
                        <span>{bullet.rest}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
