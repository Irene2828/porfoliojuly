'use client';

import { motion } from 'framer-motion';

const WEBSITE_PACKAGES = [
  {
    name: 'Polish & Launch',
    price: 'from $750 CAD',
    text: 'An AI draft or a dated site, fixed and launched: structure, copy, mobile, forms, domain.',
  },
  {
    name: 'Custom Website',
    price: 'from $1,500 CAD',
    text: 'Research, three visual directions, design, copy, build, tested launch. Hosting set up; you keep the logins.',
  },
  {
    name: 'Website Care',
    price: 'from $100 CAD/month',
    text: 'Updates, small edits, checks. Your site stays current without you touching it.',
  },
];

const AI_PACKAGES = [
  {
    name: 'Workflow Build',
    price: 'from $1,500 CAD',
    text: 'One repetitive routine, turned into a system that runs on your accounts — a store update, a weekly report, a follow-up chain.',
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

export default function PackagesSection({ onCtaClick, mode = 'website' }: { onCtaClick?: () => void; mode?: 'website' | 'ai' }) {
  const isAi = mode === 'ai';
  const packages = isAi ? AI_PACKAGES : WEBSITE_PACKAGES;
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
          font-weight: 400;
          letter-spacing: -0.02em;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          opacity: 1 !important;
          font-size: var(--text-section-title);
          line-height: 1.2;
          text-align: center;
          margin: 0 auto 1rem auto;
          max-width: 22ch;
          text-wrap: balance;
        }
        .packages-heading strong { font-weight: 500; color: #ffffff !important; -webkit-text-fill-color: #ffffff !important; }
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
          font-size: var(--text-lead);
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 0.45rem 0;
        }
        .packages-value-text {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
          font-size: var(--text-body);
          line-height: var(--lh-body);
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
          font-size: var(--text-subhead);
          line-height: 1.3;
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 0.35rem 0;
        }
        .packages-card-price {
          font-family: var(--font-label), sans-serif;
          font-size: var(--text-label);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #f2908f;
          margin: 0 0 0.9rem 0;
        }
        .packages-card-text {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
          font-size: var(--text-body);
          line-height: var(--lh-body);
          color: rgba(255, 255, 255, 0.75);
          margin: 0;
        }
        .packages-honest {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
          font-size: var(--text-body);
          line-height: var(--lh-body);
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          max-width: 58ch;
          margin: 3rem auto 2.5rem auto;
        }
        .packages-honest strong { font-weight: 500; color: #ffffff; }
        .packages-cta-wrap { text-align: center; margin-top: 4rem; }
        .packages-btn-primary {
          font-family: var(--font-label), sans-serif !important;
          font-size: var(--text-label) !important;
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
          .packages-heading { font-size: 2.1rem; }
          .packages-value-grid { grid-template-columns: 1fr; }
          .packages-cards { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="packages-inner">
        <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--text-label)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#f2908f', textAlign: 'center', margin: '0 0 1.05rem 0' }}>
          {isAi ? 'AI product packages' : 'Website packages'}
        </p>
        <motion.h2
          className="packages-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}
        >
          {isAi ? <>Custom <strong>AI products</strong> — built around your problem</> : <>Custom <strong>websites</strong> — built around your business</>}
        </motion.h2>

        <div className="packages-cards">
          {packages.map((pkg) => (
            <div className="packages-card" key={pkg.name}>
              <h3 className="packages-card-name">{pkg.name}</h3>
              <p className="packages-card-price">{pkg.price}</p>
              {'text' in pkg && typeof pkg.text === 'string' && <p className="packages-card-text">{pkg.text}</p>}
            </div>
          ))}
        </div>

        <div className="packages-cta-wrap">
          <a href={isAi ? 'mailto:iryna@irynasheremeta.com?subject=AI%20product%20packages' : 'mailto:iryna@irynasheremeta.com?subject=Website%20packages'} className="packages-btn-primary" onClick={onCtaClick}>
            <span style={{ letterSpacing: '0.08em' }}>EMAIL ME YOUR PROBLEM</span>
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
