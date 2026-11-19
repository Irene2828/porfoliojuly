'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

interface Package {
  name: string;
  price: string;
  lead?: string;
  bullets: string[];
}

const WEBSITE_PACKAGES: Package[] = [
  {
    name: 'Custom Website',
    price: 'from $1,500 CAD',
    bullets: ['Research', 'Three visual directions', 'Design', 'Copy', 'Build', 'Tested launch', 'Hosting set up; you keep the logins'],
  },
  {
    name: 'Polish & Launch',
    price: 'from $750 CAD',
    lead: 'An AI draft or a dated site, fixed and launched.',
    bullets: ['Structure', 'Copy', 'Mobile', 'Forms', 'Domain'],
  },
  {
    name: 'Website Care',
    price: 'from $100 CAD/month',
    bullets: ['Updates', 'Small edits', 'Checks', 'Your site stays current without you touching it', 'Larger changes are quoted separately, only when you ask'],
  },
];

const HOMEPAGE_WEBSITE_PACKAGES: Package[] = [
  {
    name: 'Custom Website',
    price: 'from $1,500 CAD',
    lead: 'New business or a rebuild: a site built around your business, from scratch.',
    bullets: ['A call to learn your business and clients', 'Three visual directions', 'Design and copy', 'Build', 'A tested launch', 'Hosting set up, and you keep the logins'],
  },
  {
    name: 'Polish & Launch',
    price: 'from $750 CAD',
    lead: 'You already have an AI draft or a dated site. I fix it and launch it.',
    bullets: ['Clearer structure', 'Better copy', 'Mobile fixes', 'Working forms', 'Your domain connected'],
  },
  {
    name: 'Larger Builds',
    price: 'scoped on a call',
    lead: 'For catalogs, migrations from older platforms, and sites that connect to other tools.',
    bullets: ['Everything in Custom Website', 'Content migration', 'Redirects that protect your Google position', 'Integrations scoped to your needs'],
  },
  {
    name: 'Website Care',
    price: 'from $100 CAD/month',
    bullets: ['Updates, small edits, regular checks.', 'Your site stays current without you touching it.', 'Bigger changes are quoted separately, only when you ask.'],
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

export default function PackagesSection({ onCtaClick, mode = 'website', variant = 'default' }: { onCtaClick?: () => void; mode?: 'website' | 'ai'; variant?: 'default' | 'websites' }) {
  const isAi = mode === 'ai';
  const isWebsites = variant === 'websites';
  const packages = isAi ? AI_PACKAGES : isWebsites ? HOMEPAGE_WEBSITE_PACKAGES : WEBSITE_PACKAGES;
  const packagesClassName = [
    'packages-cards',
    isAi ? 'ai-packages-cards' : 'website-packages-cards',
    isWebsites && !isAi ? 'homepage-website-packages-cards' : '',
  ].filter(Boolean).join(' ');
  const [agentDetailsOpen, setAgentDetailsOpen] = useState(false);
  const [activePackageDot, setActivePackageDot] = useState(0);
  const packagesRailRef = useRef<HTMLDivElement>(null);
  const [openPackages, setOpenPackages] = useState<Record<string, boolean>>(() => Object.fromEntries([...WEBSITE_PACKAGES, ...HOMEPAGE_WEBSITE_PACKAGES, ...AI_PACKAGES].map((pkg) => [pkg.name, true])));
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
        .packages-section { background-color: #121316 !important; border-top: 1px solid rgba(255,255,255,0.14); }
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
          color: rgba(255, 255, 255, 0.84);
          margin: 0;
        }
        .packages-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .homepage-website-packages-cards {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 821px) {
          .homepage-website-packages-cards {
            column-gap: 2.5rem;
            row-gap: 2.5rem;
          }
        }
        .ai-packages-cards {
          display: flex;
          align-items: stretch;
          gap: 1.25rem;
          overflow-x: auto;
          padding: 0.25rem 0.2rem 0.9rem;
          scroll-snap-type: x mandatory;
          overscroll-behavior-x: contain;
          scrollbar-width: thin;
          scrollbar-color: rgba(167, 174, 184, 0.45) transparent;
        }
        .ai-packages-cards::-webkit-scrollbar { height: 4px; }
        .ai-packages-cards::-webkit-scrollbar-thumb { background: rgba(167, 174, 184, 0.45); border-radius: 999px; }
        .ai-packages-cards .packages-standard-row { display: contents; }
        .ai-packages-cards > .packages-card,
        .ai-packages-cards > .agent-setup-band,
        .ai-packages-cards .packages-standard-row > .packages-card {
          flex: 0 0 280px;
          width: 280px;
          min-width: 280px;
          min-height: 390px;
          box-sizing: border-box;
          scroll-snap-align: start;
        }
        .ai-packages-cards > .agent-setup-band { grid-column: auto; margin: 0; }
        .ai-packages-cards .packages-card-bullets li::before { color: #a7aeb8; }
        .packages-scroll-hint {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin: -1.2rem 0 1.25rem;
        }
        .packages-scroll-dot { width: 0.42rem; height: 0.42rem; border-radius: 50%; background: rgba(242, 144, 143, 0.35); transition: transform 0.2s ease, background 0.2s ease; }
        .packages-scroll-dot.is-active { background: #f2908f; transform: scale(1.3); }
        .website-packages-cards > .packages-card:first-child { order: 2; }
        .website-packages-cards > .packages-card:nth-child(2) { order: 1; }
        .packages-standard-row { display: contents; }
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
          color: #a7aeb8;
          margin: 0 0 0.9rem 0;
        }
        .website-packages-cards .packages-card-price {
          color: #a7aeb8;
        }
        .packages-card-text {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
          font-size: var(--text-body);
          line-height: var(--lh-body);
          color: rgba(255, 255, 255, 0.84);
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
          color: rgba(255, 255, 255, 0.84);
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          margin: 0;
        }
        .packages-card-bullets li::before {
          content: '–';
          color: #a7aeb8;
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
          grid-column: 2 / 3;
          border: 1px solid rgba(242, 144, 143, 0.45);
          border-radius: 16px;
          padding: 2rem 1.8rem;
          background: rgba(255, 255, 255, 0.03);
          margin: 3.5rem 0 1.25rem 0;
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
          color: #a7aeb8;
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
          color: #f2908f;
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
            align-items: flex-start;
            gap: 1rem;
            margin-inline: -1.5rem;
            padding: 0.25rem 15vw 0.75rem;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            overscroll-behavior-x: contain;
            scrollbar-width: none;
          }
          .ai-packages-cards { margin-inline: -1.5rem; padding: 0.25rem 15vw 0.75rem; }
          .ai-packages-cards > .packages-card,
          .ai-packages-cards > .agent-setup-band,
          .ai-packages-cards .packages-standard-row > .packages-card { flex-basis: 82vw; width: 82vw; min-width: 82vw; }
          .packages-cards::-webkit-scrollbar { display: none; }
          .packages-standard-row {
            display: flex;
            align-items: stretch;
            flex: 0 0 auto;
            gap: 1rem;
          }
          .ai-packages-cards .packages-standard-row { display: contents; }
          .packages-standard-row > .packages-card { width: 82vw; }
          .packages-card {
            flex: 0 0 82vw;
            min-width: 0;
            box-sizing: border-box;
            scroll-snap-align: center;
          }
          .website-packages-cards > .packages-card { order: 0; }
          .packages-cards > .agent-setup-band {
            grid-column: 1 / -1;
            margin: 0;
            padding: 1.75rem 1.6rem;
          }
          .packages-cards .agent-setup-title { font-size: var(--text-subhead); }
          .packages-cards .agent-setup-bullets { grid-template-columns: 1fr; }
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

        {isAi && <div className="packages-scroll-hint" aria-label={`Package ${activePackageDot + 1} of 4`} role="status">{[0, 1, 2, 3].map((dot) => <span key={dot} className={`packages-scroll-dot${activePackageDot === dot ? ' is-active' : ''}`} aria-hidden="true" />)}</div>}
        <div ref={isAi ? packagesRailRef : undefined} onScroll={isAi ? (event) => { const rail = event.currentTarget; const max = rail.scrollWidth - rail.clientWidth; setActivePackageDot(max > 0 ? Math.max(0, Math.min(3, Math.round((rail.scrollLeft / max) * 3))) : 0); } : undefined} className={packagesClassName} role="region" aria-label={isAi ? 'AI product packages' : 'Website packages'} tabIndex={0}>
          <div className="packages-standard-row">
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
                WHAT'S INCLUDED<svg className="agent-setup-toggle-icon" aria-hidden="true" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: openPackages[pkg.name] ? 'rotate(180deg)' : undefined }}><path d="m2 4 4 4 4-4" /></svg>
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
          <div className="packages-card agent-setup-band" id="personal-agent-setup">
            <p className="agent-setup-new">New!</p>
            <h3 className="packages-card-name">Personal Agent Setup</h3>
            <p className="packages-card-price">from $750 CAD · one-time setup</p>
            <p className="packages-card-text" style={{ marginBottom: '0.65rem' }}>You have a personal AI assistant but use it as a chatbot. I set it up around your business — so it does the work, not just the talking.</p>
            <button type="button" className="agent-setup-toggle" aria-expanded={agentDetailsOpen} onClick={() => setAgentDetailsOpen((open) => !open)}>
              WHAT'S INCLUDED<svg className="agent-setup-toggle-icon" aria-hidden="true" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: agentDetailsOpen ? 'rotate(180deg)' : undefined }}><path d="m2 4 4 4 4-4" /></svg>
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
        </div>

        {isWebsites && !isAi && (
          <p className="packages-honest">Not sure which fits? Tell me about your site and I’ll recommend one, honestly.</p>
        )}

        <div className="packages-cta-wrap">
          <a href={isAi ? 'mailto:iryna@irynasheremeta.com?subject=AI%20product%20packages' : 'mailto:iryna@irynasheremeta.com?subject=Website%20packages'} className="packages-btn-primary" onClick={onCtaClick}>
            <span style={{ letterSpacing: '0.08em' }}>{isWebsites ? 'TELL ME ABOUT YOUR WEBSITE' : 'EMAIL ME YOUR PROBLEM'}</span>
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
