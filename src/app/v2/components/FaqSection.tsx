'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
  {
    question: "Can't I just generate a website with AI for free?",
    answers: [
      "You can — and if your site doesn't need to bring clients, that might be enough.",
      "AI generates. It doesn't direct. Without direction you get a generic site.",
      'I use AI every day. The difference is direction: what to ask for, what to keep, what to throw out.',
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
        padding: '5.1rem 0',
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
        .faq-headline {
          font-family: 'Newsreader', Georgia, serif !important;
          font-weight: 400 !important;
          letter-spacing: -0.02em !important;
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
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
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
        }
        .faq-case-media {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
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
          .faq-headline {
            font-size: clamp(1.9rem, 8vw, 2.4rem) !important;
          }
          .faq-question {
            font-size: 1.45rem !important;
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
            fontFamily: "'Newsreader', Georgia, serif",
            fontSize: 'clamp(2rem, 4.5vw, 2.9rem)',
            lineHeight: 1.15,
            color: '#000000',
            letterSpacing: '-0.02em',
            margin: '0 0 1.25rem 0',
          }}
        >
          AI exists. Why would you still need someone for design & build projects ?
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
            margin: '0 0 3.5rem 0',
            maxWidth: '52ch',
          }}
        >
          Let&apos;s take a look at a particular case. You need a website for your custom bridal atelier. You go to AI.
        </motion.p>
        <video className="faq-case-video" src="/bridal-ai-video.mp4" autoPlay muted loop playsInline style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 0, boxShadow: 'none', margin: '0 0 2rem 0' }} />
      <div style={{ margin: '0 0 2.5rem 0' }}>
        <p style={{ fontFamily: "var(--font-body), 'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)', fontWeight: 300, letterSpacing: '-0.011em', lineHeight: 1.65, color: 'rgba(0, 0, 0, 0.78)', margin: '0 0 1rem 0' }}>If you see a problem there, I see it too.</p>
        <p style={{ fontFamily: "var(--font-body), 'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)', fontWeight: 300, letterSpacing: '-0.011em', lineHeight: 1.65, color: 'rgba(0, 0, 0, 0.78)', margin: 0 }}>Let&apos;s use the same problem and let me design and build it end-to-end. Diving into your unique business, ideal client, strategic goals, then choosing the <u>right</u> AI and other tech tools to build it. With care, judgement, taste and skills used.</p>
      </div>
      <div className="faq-case-media">
        <img className="faq-case-image" src="/bridal-full-site-long.png" alt="Full custom bridal atelier website designed and built by Iryna Sheremeta" style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 0, boxShadow: 'none' }} />
        <video className="faq-case-video" src="/bridal-mobile-tour.mp4" autoPlay muted loop playsInline style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 0, boxShadow: 'none' }} />
      </div>
      {/* Case 04 — BuyUkrainian */}
      <div style={{ margin: '0 0 3.5rem 0', maxWidth: '324px' }}>
        <p className="faq-kicker" style={{ margin: '0 0 1rem 0' }}>Case 04 · BuyUkrainian</p>
        <video className="faq-case-video" src="/buyukrainian-mobile-case4.mp4" autoPlay muted loop playsInline style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 0, boxShadow: 'none' }} />
      </div>
      <motion.h2 className="faq-headline" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.78, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: 'clamp(1.6rem, 3.6vw, 2.1rem)', lineHeight: 1.2, color: '#000000', letterSpacing: '-0.02em', margin: '0 0 1rem 0' }}>Still have questions? Let me answer them:</motion.h2>
      <motion.p className="faq-subline" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.68, delay: 0.16, ease: [0.16, 1, 0.3, 1] }} style={{ fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)', lineHeight: 1.55, margin: '0 0 2.5rem 0', maxWidth: '52ch' }}>The questions every business owner asks me before we start — answered straight.</motion.p>
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
                        fontSize: 'clamp(1.5rem, 3.4vw, 1.85rem)',
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} style={{ margin: '3.5rem 0 0 0', textAlign: 'left' }}>
        <p style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: 'clamp(1.35rem, 3vw, 1.6rem)', lineHeight: 1.4, color: '#000000', margin: '0 0 1.25rem 0' }}>You need to stand out in the crowded market. Your site should work as hard as you do. Or you need a custom tool for your business to get more automated, simplified or amplified,</p>
        <p style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: 'clamp(1.35rem, 3vw, 1.6rem)', lineHeight: 1.4, color: '#000000', margin: '0 0 1.25rem 0' }}>I&apos;m here. One button away.</p>
        <p style={{ fontFamily: "var(--font-body), 'Plus Jakarta Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300, letterSpacing: '-0.011em', lineHeight: 1.6, color: 'rgba(0, 0, 0, 0.72)', margin: '0' }}>Your creative technologist</p>
        <p style={{ fontFamily: "var(--font-body), 'Plus Jakarta Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300, letterSpacing: '-0.011em', lineHeight: 1.6, color: 'rgba(0, 0, 0, 0.72)', margin: '0' }}>AI product and website builder</p>
        <p style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: '1.25rem', lineHeight: 1.4, color: '#000000', margin: '0.75rem 0 1.5rem 0' }}>Iryna</p>
        <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.55rem', height: '3.01rem', padding: '0 1.74rem', fontFamily: "var(--font-body), 'Plus Jakarta Sans', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', color: '#000000', background: 'linear-gradient(315deg, #d6b792 0%, #f2908f 100%)', border: '1px solid #e2a792', borderRadius: '40px', boxShadow: 'none', cursor: 'pointer' }}>SEND YOUR PROBLEM MY WAY <span aria-hidden="true">↗</span></a>
      </motion.div>
      </div>
    </section>
  );
}
