'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Package {
  name: string;
  price: string;
  lead?: string;
  bullets: string[];
}

const WEBSITE_PACKAGES: Package[] = [
  {
    name: 'Polish & Launch',
    price: 'from $750 CAD',
    lead: 'An AI draft or a dated site, fixed and launched.',
    bullets: ['Structure', 'Copy', 'Mobile', 'Forms', 'Domain'],
  },
  {
    name: 'Custom Website',
    price: 'from $1,500 CAD',
    bullets: ['Research', 'Three visual directions', 'Design', 'Copy', 'Build', 'Tested launch', 'Hosting set up; you keep the logins'],
  },
  {
    name: 'Website Care',
    price: 'from $100 CAD/month',
    bullets: ['Updates', 'Small edits', 'Checks', 'Your site stays current without you touching it', 'Larger changes are quoted separately, only when you ask'],
  },
];

const AI_PACKAGES: Package[] = [
  {
    name: 'Workflow Build',
    price: 'from $1,800 CAD',
    lead: 'One repetitive routine, turned into a system that runs on your accounts.',
    bullets: ['A store update', 'A weekly report', 'A follow-up chain'],
  },
  {
    name: 'Agent System Setup',
    price: 'from $3,000 CAD',
    lead: 'A personal agent system for an owner or a small team.',
    bullets: ['Memory', 'Rules', 'Schedules', 'Guardrails', 'Set up on the AI you choose'],
  },
  {
    name: 'Care & Tuning',
    price: 'from $200 CAD/month',
    bullets: ['Monitoring', 'Small rule fixes', 'New scenarios', 'A short monthly note on what’s saved'],
  },
];

export default function PackagesSection({ onCtaClick, mode = 'website' }: { onCtaClick?: () => void; mode?: 'website' | 'ai' }) {
  const isAi = mode === 'ai';
  const packages = isAi ? AI_PACKAGES : WEBSITE_PACKAGES;
  const [diffOpen, setDiffOpen] = useState(false);
  return (
    <section
      className="packages-section"
      style={{
        backgroundColor: '#121316',
        padding: '5.1rem 0 5.1rem 0',
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
          margin: 0 auto 2.5rem auto;
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
        .packages-card-bullets {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .packages-card-bullets li {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
          font-size: var(--text-body);
          line-height: var(--lh-body);
          color: rgba(255, 255, 255, 0.75);
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          margin: 0;
        }
        .packages-card-bullets li::before {
          content: '–';
          color: #f2908f;
          flex-shrink: 0;
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
        .agent-setup-band {
          border: 1px solid rgba(242, 144, 143, 0.45);
          border-radius: 16px;
          padding: 2rem 1.8rem;
          background: rgba(255, 255, 255, 0.03);
          margin: 0 0 1.25rem 0;
          scroll-margin-top: 88px;
        }
        .agent-setup-new {
          font-family: var(--font-label), sans-serif;
          font-size: var(--text-label);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #f2908f;
          margin: 0 0 0.5rem 0;
        }
        .agent-setup-title {
          font-family: var(--font-heading);
          font-size: clamp(1.7rem, 3.2vw, 2.2rem);
          line-height: 1.25;
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 0.35rem 0;
        }
        .agent-setup-price {
          font-family: var(--font-label), sans-serif;
          font-size: var(--text-label);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #f2908f;
          margin: 0 0 1rem 0;
        }
        .agent-setup-lead {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
          font-size: var(--text-body);
          line-height: var(--lh-body);
          color: rgba(255, 255, 255, 0.75);
          max-width: 62ch;
          margin: 0 0 0.9rem 0;
        }
        .agent-setup-shift {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-weight: 400;
          font-size: var(--text-body);
          line-height: var(--lh-body);
          color: rgba(255, 255, 255, 0.92);
          max-width: 62ch;
          margin: 0 0 1.1rem 0;
        }
        .agent-setup-bullets {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.45rem 2rem;
        }
        .agent-setup-note {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
          font-size: var(--text-body);
          line-height: var(--lh-body);
          color: rgba(255, 255, 255, 0.75);
          max-width: 62ch;
          margin: 1.1rem 0 0 0;
        }
        .diff-link-wrap { text-align: center; margin: 0 0 2.5rem 0; }
        .diff-link {
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-label), sans-serif;
          font-size: var(--text-label);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #f2908f;
          padding: 0;
        }
        .diff-link:hover { text-decoration: underline; }
        .diff-overlay {
          position: fixed;
          inset: 0;
          background: rgba(6, 7, 9, 0.72);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          z-index: 200;
        }
        .diff-panel {
          position: relative;
          background: #17181c;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 16px;
          max-width: 620px;
          width: 100%;
          max-height: 86vh;
          overflow-y: auto;
          padding: 2.2rem 2rem;
        }
        .diff-close {
          position: absolute;
          top: 0.9rem;
          right: 1.1rem;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.6rem;
          line-height: 1;
          cursor: pointer;
          padding: 0.25rem;
        }
        .diff-title {
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 500;
          color: #ffffff;
          line-height: 1.3;
          margin: 0 0 1.4rem 0;
        }
        .diff-block-title {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-size: 1.02rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 0.4rem 0;
        }
        .diff-text {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
          font-size: var(--text-body);
          line-height: var(--lh-body);
          color: rgba(255, 255, 255, 0.78);
          margin: 0 0 1.3rem 0;
        }
        .diff-text-last { margin-bottom: 0; color: rgba(255, 255, 255, 0.92); }
        @media (max-width: 820px) {
          .packages-heading { font-size: 2.1rem; }
          .agent-setup-bullets { grid-template-columns: 1fr; }
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

        {isAi && (
          <div className="agent-setup-band" id="personal-agent-setup">
            <p className="agent-setup-new">New!</p>
            <h3 className="agent-setup-title">Personal Agent Setup</h3>
            <p className="agent-setup-price">from $750 CAD · one-time setup</p>
            <p className="agent-setup-lead">You have a personal AI assistant but use it as a chatbot. I set it up around your business — so it does the work, not just the talking.</p>
            <p className="agent-setup-shift">From “Cool, I can chat and ask for things” — to “It runs my routine business processes and does exactly what I need.”</p>
            <ul className="packages-card-bullets agent-setup-bullets">
              <li>Your day, mapped: what can be handed to the assistant</li>
              <li>Memory and rules set up around your business</li>
              <li>Tasks and routines configured</li>
              <li>Fine-tuning done for you, tested on your real work</li>
              <li>Works with Muse, Grok, Dots, Duet — whichever you use</li>
            </ul>
            <p className="agent-setup-note">Pay once. The hours you get back go to work that needs your energy — and to your personal time. And it’s personal by design: the setup is done with you, and I keep no access to your assistant.</p>
          </div>
        )}

        {isAi && (
          <div className="diff-link-wrap">
            <button className="diff-link" onClick={() => setDiffOpen(true)}>Assistant or workflow — what’s the difference?</button>
          </div>
        )}

        <div className="packages-cards">
          {packages.map((pkg) => (
            <div className="packages-card" key={pkg.name}>
              <h3 className="packages-card-name">{pkg.name}</h3>
              <p className="packages-card-price">{pkg.price}</p>
              {pkg.lead && <p className="packages-card-text" style={{ marginBottom: '0.65rem' }}>{pkg.lead}</p>}
              <ul className="packages-card-bullets">
                {pkg.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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

      {diffOpen && (
        <div className="diff-overlay" onClick={() => setDiffOpen(false)}>
          <div className="diff-panel" onClick={(e) => e.stopPropagation()}>
            <button className="diff-close" onClick={() => setDiffOpen(false)} aria-label="Close">&times;</button>
            <h3 className="diff-title">Assistant or workflow — what’s the difference?</h3>
            <p className="diff-block-title">A personal assistant works for you.</p>
            <p className="diff-text">It remembers your business, drafts, plans and does tasks across your day — with your judgment, checking in with you.</p>
            <p className="diff-block-title">A workflow works for your business.</p>
            <p className="diff-text">It runs by itself when something happens — a new inquiry, an unpaid invoice, a weekly report. Same steps, same rules, every time. You only approve.</p>
            <p className="diff-text diff-text-last">Most owners end up with both. The assistant takes work off your plate. Workflows take you out of the process. We start with whichever costs you more time.</p>
          </div>
        </div>
      )}
    </section>
  );
}
