'use client';

import { motion } from 'framer-motion';

const VALUE_ITEMS = [
  {
    title: 'Problem research',
    text: 'I find where the time actually goes and what really breaks.',
  },
  {
    title: 'Process design',
    text: 'The rules, the evidence, the approval points, the guardrails.',
  },
  {
    title: 'Agent orchestration & build',
    text: 'The right agents and tools, assembled into the solution you need.',
  },
  {
    title: 'Taste, judgment, verification',
    text: 'I check the result live. “Automated” isn’t done until it works.',
  },
];

const PACKAGES = [
  {
    name: 'Workflow Build',
    price: 'from $1,500 CAD',
    text: 'One repetitive routine, end to end: research, rules, build, live check, handover.',
  },
  {
    name: 'Agent System Setup',
    price: 'from $3,000 CAD',
    text: 'A personal agent system for an owner or a small team — memory, rules, schedules, guardrails. Set up on the AI you choose.',
  },
  {
    name: 'Care & Tuning',
    price: 'from $200 CAD/month',
    text: 'Monitoring, small rule fixes, new scenarios, a short monthly note on what’s saved.',
  },
];

export default function PackagesSection() {
  return (
    <section
      className="packages-section"
      style={{
        backgroundColor: '#121316',
        padding: '96px 0 104px 0',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .packages-section { background-color: #121316 !important; }
        .packages-inner { max-width: 1080px; margin: 0 auto; padding: 0 1.5rem; }
        .packages-heading {
          font-family: var(--font-heading);
          font-weight: 300;
          letter-spacing: 0.015em;
          color: rgba(255, 255, 255, 0.92);
          font-size: clamp(30px, 4.6vw, 46px);
          line-height: 1.18;
          text-align: center;
          margin: 0 auto 1rem auto;
          max-width: 22ch;
          text-wrap: balance;
        }
        .packages-heading strong { font-weight: 500; color: #f2908f; }
        .packages-kicker {
          font-family: var(--font-label), sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: rgba(255, 255, 255, 0.55);
          text-align: center;
          margin: 3.5rem 0 1.5rem 0;
        }
        .packages-value-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .packages-value-item { background: #121316; padding: 1.6rem 1.75rem; }
        .packages-value-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 0.45rem 0;
        }
        .packages-value-text {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
          font-size: 0.98rem;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.75);
          margin: 0;
        }
        .packages-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .packages-card {
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 16px;
          padding: 1.75rem 1.6rem;
          background: rgba(255, 255, 255, 0.03);
        }
        .packages-card-name {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 0.35rem 0;
        }
        .packages-card-price {
          font-family: var(--font-label), sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #f2908f;
          margin: 0 0 0.9rem 0;
        }
        .packages-card-text {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
          font-size: 0.98rem;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.75);
          margin: 0;
        }
        .packages-honest {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
          font-size: 1.02rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          max-width: 58ch;
          margin: 3rem auto 2.5rem auto;
        }
        .packages-honest strong { font-weight: 500; color: #ffffff; }
        .packages-cta-wrap { text-align: center; }
        .packages-btn-primary {
          font-family: var(--font-label), sans-serif !important;
          font-size: 0.72rem !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.08em !important;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          justify-content: center;
          height: 3.01rem !important;
          padding: 0 1.74rem !important;
          background: linear-gradient(315deg, #d6b792 0%, #f2908f 100%) !important;
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
          border: 1px solid #ffffff !important;
          border-radius: 40px !important;
          box-shadow: none !important;
          text-decoration: none;
        }
        @media (max-width: 820px) {
          .packages-value-grid { grid-template-columns: 1fr; }
          .packages-cards { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="packages-inner">
        <motion.h2
          className="packages-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Custom <strong>agents, workflows &amp; tools</strong> — built around your problem
        </motion.h2>

        <p className="packages-kicker">What you’re paying for</p>
        <div className="packages-value-grid">
          {VALUE_ITEMS.map((item) => (
            <div className="packages-value-item" key={item.title}>
              <h3 className="packages-value-title">{item.title}</h3>
              <p className="packages-value-text">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="packages-kicker">Packages</p>
        <div className="packages-cards">
          {PACKAGES.map((pkg) => (
            <div className="packages-card" key={pkg.name}>
              <h3 className="packages-card-name">{pkg.name}</h3>
              <p className="packages-card-price">{pkg.price}</p>
              <p className="packages-card-text">{pkg.text}</p>
            </div>
          ))}
        </div>

        <p className="packages-honest">
          The tools themselves may be free or cheap. <strong>You don’t pay for the tool</strong> —
          you pay for the research, the design, the setup and the verification around it.
        </p>

        <div className="packages-cta-wrap">
          <a href="mailto:iryna@irynasheremeta.com" className="packages-btn-primary">
            <span style={{ letterSpacing: '0.08em' }}>SEND YOUR PROBLEM MY WAY</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
