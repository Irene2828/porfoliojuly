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
    bullets: ['Updates', 'Small edits', 'Checks', 'Your site stays current without you touching it'],
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
  const [agentDetailsOpen, setAgentDetailsOpen] = useState(false);
  const [openPackages, setOpenPackages] = useState<Record<string, boolean>>({});
  return (
    <section
      className="packages-section"
      style={{
        backgroundColor: '#121316',
        padding: '20.4rem 0 5.1rem 0',
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
        .packages-cta-wrap { text-align: center; margin-top: 2rem; }
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
          margin: 2.5rem 0 1.25rem 0;
          scroll-margin-top: 88px;
        }
        .agent-setup-new {
          font-family: var(--font-label), sans-serif;
          font-size: var(--text-label);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #ffffff;
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
        .agent-setup-toggle {
          display: inline-flex;
          align-items: center;
          appearance: none;
          border: 0;
          background: transparent;
          color: #ffffff;
          font-family: var(--font-label), sans-serif;
          font-size: var(--text-label);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0;
          margin: 0 0 1rem 0;
          cursor: pointer;
        }
        .agent-setup-toggle-icon {
          display: inline-block;
          margin-left: 0.35em;
          width: 0.65em;
          height: 0.65em;
          flex-shrink: 0;
          color: #f2908f;
          line-height: 1;
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
        @media (max-width: 900px) {
          .packages-section { padding-top: 5.1rem !important; }
        }
        @media (max-width: 820px) {
          .packages-section { padding-top: 5.1rem !important; }
          .packages-heading { font-size: 2.1rem; }
          .agent-setup-bullets { grid-template-columns: 1fr; }
          .packages-value-grid { grid-template-columns: 1fr; }
          .packages-cards {
            /* Native scrolling keeps vertical page gestures and arrival motion independent. */
            display: flex;
            gap: 1rem;
            margin-inline: -1.5rem;
            padding: 0.25rem 9vw 0.75rem;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            overscroll-behavior-x: contain;
            scrollbar-width: none;
          }
          .packages-cards::-webkit-scrollbar { display: none; }
          .packages-card {
            flex: 0 0 82vw;
            min-width: 0;
            box-sizing: border-box;
            scroll-snap-align: center;
          }
          .packages-cards:focus-visible {
            outline: 1px solid #f2908f;
            outline-offset: -2px;
          }
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

        <div className="packages-cards" role="region" aria-label={isAi ? 'AI product packages' : 'Website packages'} tabIndex={0}>
          {packages.map((pkg, index) => (
            <div className="packages-card" key={pkg.name}>
              <h3 className="packages-card-name">{pkg.name}</h3>
              <p className="packages-card-price">{pkg.price}</p>
              {pkg.lead && <p className="packages-card-text" style={{ marginBottom: '0.65rem' }}>{pkg.lead}</p>}
              <button
                type="button"
                className="agent-setup-toggle"
                aria-expanded={Boolean(openPackages[pkg.name])}
                aria-controls={`package-details-${mode}-${index}`}
                onClick={() => setOpenPackages((open) => ({ ...open, [pkg.name]: !open[pkg.name] }))}
              >
                {openPackages[pkg.name] ? 'Hide what’s included' : 'See what’s included'}<svg className="agent-setup-toggle-icon" aria-hidden="true" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: openPackages[pkg.name] ? 'rotate(180deg)' : undefined }}><path d="m2 4 4 4 4-4" /></svg>
              </button>
              <ul
                id={`package-details-${mode}-${index}`}
                className="packages-card-bullets"
                style={{ display: openPackages[pkg.name] ? undefined : 'none' }}
              >
                {pkg.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {isAi && (
          <div className="agent-setup-band" id="personal-agent-setup">
            <p className="agent-setup-new">New!</p>
            <h3 className="agent-setup-title">Personal Agent Setup</h3>
            <p className="agent-setup-price">from $750 CAD · one-time setup</p>
            <p className="agent-setup-lead">You have a personal AI assistant but use it as a chatbot. I set it up around your business — so it does the work, not just the talking.</p>
            <button type="button" className="agent-setup-toggle" aria-expanded={agentDetailsOpen} onClick={() => setAgentDetailsOpen((open) => !open)}>
              {agentDetailsOpen ? 'Hide what’s included' : 'See what’s included'}<svg className="agent-setup-toggle-icon" aria-hidden="true" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: agentDetailsOpen ? 'rotate(180deg)' : undefined }}><path d="m2 4 4 4 4-4" /></svg>
            </button>
            {agentDetailsOpen && (
              <div>
                <p className="agent-setup-shift">From “Cool, I can chat and ask for things” — to “It runs my routine business processes and does exactly what I need.”</p>
                <ul className="packages-card-bullets agent-setup-bullets">
                  <li>Your day, mapped: what can be handed to the assistant</li>
                  <li>Memory and rules set up around your business</li>
                  <li>Tasks and routines configured</li>
                  <li>Fine-tuning done for you, tested on your real work</li>
                  <li>Works with Muse, Grok, Dots, Duet — whichever you use</li>
                </ul>
                <p className="agent-setup-note">Personal by design: the setup is done with you, and I keep no access to your assistant.</p>
                <p className="agent-setup-note">Pay once. The hours you get back go to work that needs your energy — and to your personal time.</p>
              </div>
            )}
          </div>
        )}

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
