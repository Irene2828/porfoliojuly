'use client';

import EditorialStatement from './EditorialStatement';
import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
  {
    question: 'How fast is this, and what happens after launch?',
    answers: [
      'First version in days, not weeks. You react to a working thing while changing it is still cheap.',
      "After launch I stay available: fixes, edits, new features — per request, or on a monthly care plan.",
      'You keep the logins, the files and the setup notes. Nothing is held hostage.',
    ],
  },
  {
    question: 'What do you need from me to start?',
    answers: [
      "A short call, or a voice note if that's easier. No prep, no brief to write.",
      'Access to the tools involved — when we get there, not before.',
      'Missing copy or files? I write them from scratch.',
    ],
  },
  {
    question: 'I already generated a draft. Can you fix it and launch it?',
    answers: [
      "Yes. Bring it — I'll tell you honestly whether a polish is enough or it needs rebuilding.",
      'Polish covers structure, copy, images, mobile, forms, domain and launch.',
      "Some drafts need a firm hand. Some need rebuilding. I'll say which one yours is.",
    ],
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const sectionRef = useRef<HTMLElement | null>(null);


  return (
    <section
      id="faq-section"
      ref={sectionRef}
      className="faq-section"
      style={{
        backgroundColor: '#ffffff',
        padding: '5.1rem 0 0 0',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .faq-section {
          background-color: #ffffff !important;
          color: #000000 !important;
        }
        .faq-kicker {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: 0.72rem !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.14em !important;
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
        }
        .faq-headline { text-align: center;
  font-family: var(--font-heading) !important;
          font-weight: 400 !important;
          letter-spacing: -0.02em !important;
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
        }
        .faq-section-heading {
          font-family: var(--font-heading) !important;
          font-weight: 400 !important;
          letter-spacing: -0.02em !important;
          color: var(--color-heading-silver) !important;
          -webkit-text-fill-color: var(--color-heading-silver) !important;
        }
        .faq-section-subline {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: clamp(1.05rem, 2.4vw, 1.2rem) !important;
          font-weight: 300 !important;
          line-height: 1.55 !important;
          letter-spacing: -0.011em !important;
          color: var(--color-body-dark, #2b3038) !important;
          -webkit-text-fill-color: var(--color-body-dark, #2b3038) !important;
          font-style: normal !important;
        }
        .faq-subline {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-weight: 300 !important;
          letter-spacing: -0.011em !important;
          color: rgba(0, 0, 0, 0.72) !important;
          -webkit-text-fill-color: rgba(0, 0, 0, 0.72) !important;
        }
        .faq-item {
          border-top: 1px solid rgba(0, 0, 0, 0.12) !important;
        }
        .faq-item:last-child {
          border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;
        }
        .faq-toggle {
          display: flex !important;
          align-items: center !important;
          justify-content: flex-start !important;
          width: 100% !important;
          background: none !important;
          border: none !important;
          cursor: pointer !important;
          padding: 1.7rem 2.5rem 1.7rem 0 !important;
          position: relative !important;
          text-align: left !important;
        }
        .faq-question {
          font-family: 'Newsreader', Georgia, serif !important;
          font-weight: 400 !important;
          letter-spacing: -0.015em !important;
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
        }
        .faq-indicator {
          position: absolute !important;
          right: 0.25rem !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: 1.6rem !important;
          font-weight: 300 !important;
          line-height: 1 !important;
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
          width: 2rem !important;
          text-align: center !important;
          flex-shrink: 0 !important;
        }
        .faq-answer-list {
          list-style: disc !important;
          padding: 0 0.5rem 1.9rem 1.4rem !important;
          margin: 0 !important;
          text-align: left !important;
        }
        .faq-answer-list li {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: 1.02rem !important;
          font-weight: 300 !important;
          letter-spacing: -0.011em !important;
          line-height: 1.65 !important;
          color: rgba(0, 0, 0, 0.78) !important;
          -webkit-text-fill-color: rgba(0, 0, 0, 0.78) !important;
          margin-bottom: 0.55rem !important;
          padding-left: 0.25rem !important;
        }
        .faq-answer-list li:last-child {
          margin-bottom: 0 !important;
        }
        .faq-answer-list li::marker {
          color: #f2908f !important;
        }
        .faq-closing {
          font-family: 'Newsreader', Georgia, serif !important;
          font-weight: 400 !important;
          letter-spacing: -0.015em !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }
        .faq-case-media {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 2.5rem !important; width: min(1200px, calc(100vw - 3rem)) !important; max-width: 1200px !important;
          align-items: start !important;
          margin: 0 0 3.5rem 50% !important; transform: translateX(-50%) !important;
        }
        .faq-case-video {
          display: block !important;
          width: 100% !important;
          height: auto !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }
        .faq-case-image {
          display: block !important;
          width: 100% !important;
          height: auto !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }
        .faq-case-caption {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: 1rem !important;
          font-weight: 300 !important;
          letter-spacing: -0.011em !important;
          line-height: 1.55 !important;
          color: rgba(0, 0, 0, 0.72) !important;
          -webkit-text-fill-color: rgba(0, 0, 0, 0.72) !important;
          margin: 0.85rem 0 0 0 !important;
        }
        .faq-cta-heading .faq-cta-white {
          font-weight: 300 !important;
          font-style: italic !important;
          letter-spacing: 0.015em !important;
          color: rgba(255, 255, 255, 0.8) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.8) !important;
        }
        @media (max-width: 900px) {
          .faq-headline { text-align: center;
            font-size: clamp(1.9rem, 8vw, 2.4rem) !important; margin-left: 0 !important; margin-right: 0 !important;
          }
          .faq-question {
          font-size: 1.2915rem !important;
          }
          .faq-answer-list li {
            font-size: 1.071rem !important;
          }
          .faq-toggle {
            padding: 1.4rem 2.25rem 1.4rem 0 !important;
          }
          .faq-case-media {
            grid-template-columns: 1fr !important;
          }
          .faq-section .cases-decor-line {
            margin-top: 0 !important;
          }
          .faq-cta-heading {
            text-align: left !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            max-width: 32ch !important;
          }
          .faq-cta-heading .faq-cta-accent {
            font-weight: 500 !important;
            font-style: italic !important;
          }
          .faq-cta-heading .faq-cta-white {
            font-weight: 300 !important;
            color: rgba(255, 255, 255, 0.8) !important;
            -webkit-text-fill-color: rgba(255, 255, 255, 0.8) !important;
          }
          .faq-cta-wrapper {
            max-width: 720px !important;
          }
        }
        /* Match the “Made by someone…” statement at every viewport width. */
        .faq-cta-heading {
          font-size: clamp(1.05rem, 2.4vw, 1.2rem) !important;
        }
        .faq-cta-heading,
        .faq-cta-heading .faq-cta-white,
        .faq-cta-heading .faq-cta-accent {
          font-weight: 700 !important;
        }
      `}</style>
      <div
        style={{
          maxWidth: '720px',
          width: '100%',
          margin: '0 auto',
          padding: '0 1.5rem 5.1rem',
          textAlign: 'left',
        }}
      >
        <motion.div className="cases-decor-line" initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 0.9 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }} style={{ width: '60px', height: '1px', backgroundColor: '#2d3139', margin: '0 auto 2.5rem auto', transformOrigin: 'center' }} aria-hidden="true" />
        <motion.h2 className="faq-section-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.78, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4.4vw, 42px)', fontWeight: 400, lineHeight: 1.2, color: 'var(--color-heading-silver)', letterSpacing: '-0.02em', margin: '0 0 0.875rem 0', textAlign: 'center' }}>Before we start</motion.h2>
      <motion.p className="faq-section-subline" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.68, delay: 0.16, ease: [0.16, 1, 0.3, 1] }} style={{ margin: '0 auto 2.5rem auto', textAlign: 'center' }}>The most popular questions I get - answered.</motion.p>
      <div>
        {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.article
                key={faq.question}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.68, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 style={{ margin: 0 }}>
                  <button
                    type="button"
                    className="faq-toggle"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span
                      className="faq-question"
                      style={{
                        fontSize: 'clamp(1.28rem, 2.89vw, 1.57rem)',
                        lineHeight: 1.3,
                      }}
                    >
                      {faq.question}
                    </span>
                    <span className="faq-indicator" aria-hidden="true">
                      {isOpen ? '–' : '+'}
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <ul className="faq-answer-list">
                        {faq.answers.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
      <EditorialStatement showGarden />
    </section>
  );
}
