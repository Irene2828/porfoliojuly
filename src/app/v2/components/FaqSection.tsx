'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
  {
    question: 'How fast is this, and what happens after launch?',
    answers: [
      'First clickable version in days — you react to a real thing.',
      'We fix it together. I ship it, hand it over, set up hosting and support.',
      "After launch I'm still there: edits, updates, new features — monthly care plan, or per request.",
    ],
  },
  {
    question: 'What am I actually paying for?',
    answers: [
      'Not hours, not typing. Taste, judgment, and a finished thing that works.',
      'Problem first. Copy that sounds like you. Phone, forms, domain, hosting — done.',
      "AI can draft. It can't take responsibility for the result. I can.",
    ],
  },
  {
    question: 'I already generated a draft. Can you fix it and launch it?',
    answers: [
      "Yes. Bring it — I'll tell you honestly if a polish is enough or it needs rebuilding.",
      'Polish covers structure, copy, images, mobile, forms, domain, launch.',
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
          grid-template-columns: 1fr !important;
          gap: 1.5rem !important;
          align-items: start !important;
          margin: 0 0 3.5rem 0 !important;
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
        @media (max-width: 900px) {
          .faq-headline { text-align: center;
            font-size: clamp(1.9rem, 8vw, 2.4rem) !important; margin-left: 0 !important; margin-right: 0 !important;
          }
          .faq-question {
          font-size: 1.23rem !important;
          }
          .faq-toggle {
            padding: 1.4rem 2.25rem 1.4rem 0 !important;
          }
          .faq-case-media {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <div
        style={{
          maxWidth: '720px',
          width: '100%',
          margin: '0 auto',
          padding: '0 1.5rem',
          textAlign: 'left',
        }}
      >
        <motion.h2
          className="faq-headline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.78, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 4.4vw, 42px)',
            lineHeight: 1.2,
            color: '#000000',
            letterSpacing: '-0.02em',
            margin: '0 auto 1.25rem auto',
          }}
        >
          Why Hire Someone If There&apos;s AI Tools?
        </motion.h2>
        <motion.p
          className="faq-subline"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.68, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)',
            lineHeight: 1.55,
            margin: '0 auto 3.5rem auto',
            textAlign: 'center',
            maxWidth: '52ch',
          }}
        >
          Let&apos;s take a look at a particular case. You need a website for your custom bridal atelier. You go to AI.
        </motion.p>
        <video className="faq-case-video" src="/bridal-ai-video.mp4" autoPlay muted loop playsInline style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 0, boxShadow: 'none', margin: '0 0 2rem 0' }} />
      <div style={{ margin: '0 0 2.5rem 0' }}>
        <p style={{ fontFamily: "var(--font-body), 'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)', fontWeight: 700, letterSpacing: '-0.011em', lineHeight: 1.65, color: 'rgba(0, 0, 0, 0.78)', textAlign: 'center', margin: '0 0 1rem 0' }}>If you see a problem there, I see it too.</p>
        <p style={{ fontFamily: "var(--font-body), 'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)', fontWeight: 300, letterSpacing: '-0.011em', lineHeight: 1.65, color: 'rgba(0, 0, 0, 0.78)', textAlign: 'center', margin: 0 }}>Let&apos;s use the same problem and let me design and build it end-to-end.</p>
        <p style={{ fontFamily: "var(--font-body), 'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)', fontWeight: 300, letterSpacing: '-0.011em', lineHeight: 1.65, color: 'rgba(0, 0, 0, 0.78)', textAlign: 'left', margin: '1rem 0 0 0' }}>
          <span style={{ display: 'block' }}>Diving into your unique business, ideal client, strategic goals, then choosing the <u>right</u> AI and other tech tools to build it.</span>
          <span style={{ display: 'block', marginTop: '0.75rem' }}>With care, judgement, taste and skills used.</span>
        </p>
      </div>
      <div className="faq-case-media">
        <video className="faq-case-video" src="/bridal-desktop-scroll-faststart.mp4" poster="/bridal-scroll-poster.jpg" autoPlay muted loop playsInline style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 0, boxShadow: 'none' }} />
      </div>
      
      <motion.h2 className="faq-section-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.78, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4.4vw, 42px)', fontWeight: 400, lineHeight: 1.2, color: 'var(--color-heading-silver)', letterSpacing: '-0.02em', margin: '10.5rem 0 0.875rem 0', textAlign: 'center' }}>Get More Answers...</motion.h2>
      <motion.p className="faq-section-subline" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.68, delay: 0.16, ease: [0.16, 1, 0.3, 1] }} style={{ margin: '0 auto 2.5rem auto', textAlign: 'center' }}>before we start our work.</motion.p>
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
      <div style={{ backgroundColor: '#121316', background: '#121316', width: '100%', padding: '5rem 1.5rem 5.625rem 1.5rem', margin: '10.5rem 0 0 0', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '720px', width: '100%', margin: '0 auto', padding: '0 1.5rem', textAlign: 'left' }}>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.48rem, 7.7vw, 2.08rem)', fontWeight: 300, letterSpacing: '0.01em', lineHeight: 1.35, color: 'rgba(255, 255, 255, 0.8)', WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)', textAlign: 'center', margin: '0 auto 2.5rem auto', maxWidth: '32ch', textWrap: 'balance' }}>
            <span style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}>Need your problem solved by someone who gets business, design and tech?</span>{' '}
            <span style={{ display: 'block', color: '#f2908f', WebkitTextFillColor: '#f2908f', fontWeight: 650, letterSpacing: '0.025em' }}>I&apos;d love to help.</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.72, delay: 0.16, ease: [0.16, 1, 0.3, 1] }} style={{ margin: 0, textAlign: 'center' }}>
            <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.55rem', height: '3.01rem', padding: '0 1.74rem', fontFamily: "var(--font-body), 'Plus Jakarta Sans', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', color: '#000000', background: 'linear-gradient(315deg, #d6b792 0%, #f2908f 100%)', border: '1px solid #ffffff', borderRadius: '40px', boxShadow: 'none', cursor: 'pointer' }}>SEND YOUR PROBLEM MY WAY <span aria-hidden="true">↗</span></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
