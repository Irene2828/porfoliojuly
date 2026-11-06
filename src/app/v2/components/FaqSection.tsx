'use client';

import { motion } from 'framer-motion';

const faqs = [
  {
    num: '01',
    question: "Can't I just generate a website with AI for free?",
    answer:
      "You can. And if your website doesn't need to do anything — bring in clients, explain what you do, take bookings — that might be enough. AI generates; it doesn't direct. Without direction you get a generic site: the same structure, the same words, the same feeling as everyone else's. I use AI every day. The difference is direction — I know what to ask for, what to keep, and what to throw out. That's the work.",
  },
  {
    num: '02',
    question: 'What am I actually paying for?',
    answer:
      "Not hours, and not typing. You're paying for taste, judgment, and a finished thing that works: the problem understood first, a structure that says what you do in five seconds, copy that sounds like you, a site that works on a phone, forms that reach you, domain and hosting set up — and someone who answers when something breaks. AI can draft. It can't take responsibility for the result. I can.",
  },
  {
    num: '03',
    question: 'I already generated a draft. Can you fix it and launch it?',
    answer:
      "Yes — that's a real service, and it's often the smartest way to start. Bring the draft and I'll tell you honestly whether a polish is enough or the structure needs redoing, and the price follows that. Polish covers structure, copy, images, mobile, forms, domain, and launch. Some drafts just need a firm hand. Some need rebuilding. I'll say which one yours is.",
  },
  {
    num: '04',
    question: 'My business is small. Can it live with a simple website?',
    answer:
      "Maybe — and I'll tell you so if that's the case. If your site doesn't need to bring you clients, a simple generated page is fine. But if your site is your storefront — if people judge you by it before they call — then generic costs you work. One of my clients, an insurance claims expert, started getting calls from new clients within days of her new site going live. That's the difference between a site that exists and a site that works.",
  },
  {
    num: '05',
    question: "We don't use AI in our business yet. Can you help with that?",
    answer:
      "Yes. That's half of what I do. If your team isn't working with AI yet, I'll show you where it actually helps — not hype, just the tasks that eat your week — and build you a simple tool for that task, or set up AI to work with the tools you already have. You stay in control. The tool does the filling-in.",
  },
  {
    num: '06',
    question: 'How fast is this, and what happens after launch?',
    answer:
      "You get a first clickable version in days, so you react to a real thing instead of a document. We fix it together, then I ship it, hand it over, and set up hosting and support. After launch I'm still there — small edits, updates, new features — on a simple monthly care plan, or per request.",
  },
];

export default function FaqSection() {
  return (
    <section
      id="faq-section"
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
        .faq-number {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: 0.78rem !important;
          font-weight: 600 !important;
          letter-spacing: 0.12em !important;
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
        }
        .faq-question {
          font-family: 'Newsreader', Georgia, serif !important;
          font-weight: 400 !important;
          letter-spacing: -0.015em !important;
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
        }
        .faq-answer {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-weight: 300 !important;
          letter-spacing: -0.011em !important;
          color: rgba(0, 0, 0, 0.78) !important;
          -webkit-text-fill-color: rgba(0, 0, 0, 0.78) !important;
        }
        .faq-closing {
          font-family: 'Newsreader', Georgia, serif !important;
          font-weight: 400 !important;
          letter-spacing: -0.015em !important;
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
        }
        @media (max-width: 900px) {
          .faq-headline {
            font-size: clamp(1.9rem, 8vw, 2.4rem) !important;
          }
          .faq-question {
            font-size: 1.45rem !important;
          }
        }
      `}</style>
      <div
        style={{
          maxWidth: '820px',
          width: '100%',
          margin: '0 auto',
          padding: '0 1.5rem',
        }}
      >
        <motion.p
          className="faq-kicker"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
          style={{ margin: '0 0 1.25rem 0' }}
        >
          Fair questions
        </motion.p>
        <motion.h2
          className="faq-headline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.78, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 2.9rem)',
            lineHeight: 1.15,
            margin: '0 0 1.25rem 0',
          }}
        >
          AI exists. So let&apos;s talk about it.
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
          The questions every business owner asks me before we start — answered straight.
        </motion.p>
        <div>
          {faqs.map((faq, index) => (
            <motion.article
              key={faq.num}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.68, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
              style={{ padding: '2.5rem 0' }}
            >
              <p className="faq-number" style={{ margin: '0 0 0.9rem 0' }}>
                {faq.num}
              </p>
              <h3
                className="faq-question"
                style={{
                  fontSize: 'clamp(1.5rem, 3.4vw, 1.85rem)',
                  lineHeight: 1.3,
                  margin: '0 0 1rem 0',
                }}
              >
                {faq.question}
              </h3>
              <p
                className="faq-answer"
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  margin: 0,
                  maxWidth: '62ch',
                }}
              >
                {faq.answer}
              </p>
            </motion.article>
          ))}
        </div>
        <motion.p
          className="faq-closing"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(1.35rem, 3vw, 1.6rem)',
            lineHeight: 1.4,
            margin: '3.5rem 0 0 0',
            textAlign: 'center',
          }}
        >
          Anything else? Ask me directly — a short call or an email.
        </motion.p>
      </div>
    </section>
  );
}
