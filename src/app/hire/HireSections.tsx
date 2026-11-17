'use client';

import { motion } from 'framer-motion';

/* Case stories for the /hire page: how two products went from problem to live use. */

const terryFoxSteps = [
  {
    num: '01',
    title: 'The problem',
    text: 'Every city runs its own Terry Fox Run, and every poster has to stay on brand. Posters were made by hand in Figma, one at a time — volunteers waited days for a single poster, and the designers were pulled away from bigger work.',
  },
  {
    num: '02',
    title: 'Scoping the fix',
    text: 'The bottleneck wasn’t effort, it was the process. I helped scope a locked-template tool: brand rules built in, one set of event details filling all five poster formats at once, and the event’s owner approving every poster before it goes out.',
  },
  {
    num: '03',
    title: 'Prototype, then iterate',
    text: 'The first version covered the core flow in three steps. Iteration added a full editor with placement controls for the posters the simple flow can’t cover — one click away, not in the way. The structure came out clean enough that an AI agent can fill the fields directly.',
  },
  {
    num: '04',
    title: 'In use now',
    text: 'Volunteers and managers run the whole flow themselves — posters in minutes instead of days, no designer in the loop. A person still previews and approves every poster before it ships.',
  },
];

const buyUkrainianSteps = [
  {
    num: '01',
    title: 'The problem',
    text: 'Ukrainian-made products are sold in stores all across Canada, but there was no one place to find them — just scattered lists and word of mouth.',
  },
  {
    num: '02',
    title: 'What I built',
    text: 'An interactive map and directory: search by city or by product, and see the stores that carry it. One rule decides every listing — the products are made in Ukraine — and every store is checked before it appears on the map.',
  },
  {
    num: '03',
    title: 'Built to grow',
    text: 'Anyone can add a store that’s missing; submissions come in for review before they go live. The catalogue grows city by city, without the map turning into a free-for-all.',
  },
  {
    num: '04',
    title: 'Live today',
    text: '26 stores across Canada and counting. I scoped it, designed it, built it — and I still run it: new stores, data checks, fixes.',
  },
];

function CaseStory({
  kicker,
  title,
  steps,
  link,
  delayBase = 0,
}: {
  kicker: string;
  title: string;
  steps: { num: string; title: string; text: string }[];
  link?: { href: string; label: string };
  delayBase?: number;
}) {
  return (
    <div className="hire-story">
      <motion.p
        className="hire-story-kicker"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
        style={{ margin: '0 0 1.05rem 0', textAlign: 'left' }}
      >
        {kicker}
      </motion.p>
      <motion.h3
        className="hire-story-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.78, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        style={{ margin: '0 0 2.55rem 0', textAlign: 'left' }}
      >
        {title}
      </motion.h3>
      <div className="hire-story-steps">
        {steps.map((step, index) => (
          <motion.div
            key={step.num}
            className="hire-story-step"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.68, delay: delayBase + index * 0.09, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hire-story-num">{step.num}</span>
            <h4 className="hire-story-step-title">{step.title}</h4>
            <p className="hire-story-step-text">{step.text}</p>
          </motion.div>
        ))}
      </div>
      {link && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.68, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ margin: '2rem 0 0 0', textAlign: 'left' }}
        >
          <a className="hire-story-link" href={link.href} target="_blank" rel="noreferrer">
            {link.label}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </motion.p>
      )}
    </div>
  );
}

export function CaseStories() {
  return (
    <section
      id="case-stories"
      style={{
        backgroundColor: '#ffffff',
        padding: '5.1rem 0 5.1rem 0',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .hire-story-kicker {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: var(--text-label) !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.14em !important;
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
        }
        .hire-stories-title {
          font-family: var(--font-heading) !important;
          font-weight: 400 !important;
          letter-spacing: -0.02em !important;
          font-size: var(--text-section-title);
          line-height: 1.2;
          color: #1c1e23 !important;
          -webkit-text-fill-color: #1c1e23 !important;
        }
        .hire-story {
          margin-top: 5.1rem;
        }
        .hire-story-title {
          font-family: var(--font-heading) !important;
          font-weight: 400 !important;
          letter-spacing: -0.02em !important;
          font-size: calc(var(--text-section-title) * 0.72);
          line-height: 1.2;
          color: #1c1e23 !important;
          -webkit-text-fill-color: #1c1e23 !important;
        }
        .hire-story-steps {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 1.2rem;
          max-width: 1288px;
          margin: 0 auto;
        }
        .hire-story-step {
          display: flex;
          flex-direction: column;
          flex: 1 1 0;
          min-width: 175px;
          align-items: flex-start;
          text-align: left;
          gap: 1rem;
          padding: 1.35rem 1.35rem 1.25rem 1.35rem;
        }
        .hire-story-num {
          font-family: var(--font-heading) !important;
          font-weight: 400 !important;
          font-size: 2.6rem !important;
          line-height: 1;
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
          opacity: 0.55;
          display: block;
        }
        .hire-story-step-title {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-weight: 600 !important;
          font-size: calc(var(--text-body) * 1.05);
          line-height: var(--lh-body) !important;
          letter-spacing: 0.015em !important;
          color: #1c1e23 !important;
          -webkit-text-fill-color: #1c1e23 !important;
          margin: 0;
        }
        .hire-story-step-text {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: var(--text-body) !important;
          font-weight: 300 !important;
          line-height: var(--lh-body) !important;
          letter-spacing: 0.005em !important;
          color: rgba(28, 30, 35, 0.72) !important;
          -webkit-text-fill-color: rgba(28, 30, 35, 0.72) !important;
          margin: 0;
        }
        .hire-story-link {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: var(--text-body) !important;
          font-weight: 600 !important;
          letter-spacing: 0.015em !important;
          color: #1c1e23 !important;
          -webkit-text-fill-color: #1c1e23 !important;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          border-bottom: 1px solid #f2908f;
          padding-bottom: 2px;
        }
        @media (min-width: 1200px) {
          #case-stories > .container {
            max-width: 1267.2px !important;
            padding-left: 1.76rem !important;
            padding-right: 1.76rem !important;
          }
        }
        @media (max-width: 900px) {
          #case-stories > .container {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .hire-stories-title {
            font-size: 2.1rem !important;
          }
          .hire-story-title {
            font-size: 1.7rem !important;
          }
          .hire-story-steps {
            flex-direction: column !important;
          }
          .hire-story-step {
            padding-inline: 0 !important;
          }
          .hire-story-num {
            font-size: 2.65rem !important;
          }
        }
      `}</style>
      <div
        className="container"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 6rem',
          textAlign: 'center',
        }}
      >
        <motion.p
          className="hire-story-kicker"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
          style={{ margin: '0 0 1.05rem 0', textAlign: 'left' }}
        >
          CASE STUDIES
        </motion.p>
        <motion.h2
          className="hire-stories-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.78, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{ margin: '0', textAlign: 'left' }}
        >
          Two builds, start to finish.
        </motion.h2>

        <CaseStory
          kicker="CASE STUDY · CLIENT TOOL"
          title="Terry Fox Foundation — the poster tool"
          steps={terryFoxSteps}
        />
        <CaseStory
          kicker="CASE STUDY · MY OWN PRODUCT"
          title="BuyUkrainian — a live product of my own"
          steps={buyUkrainianSteps}
          link={{ href: 'https://www.buyukrainian.ca', label: 'Visit the live site' }}
        />
      </div>
    </section>
  );
}

/* Closing for the /hire page: same editorial statement design as the homepage prefooter, recruiter copy. */

export function HireClosing() {
  return (
    <section
      id="contact"
      className="hire-closing-section"
      style={{
        backgroundColor: '#121316',
        padding: '5.1rem 0 5.1rem 0',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .hire-closing-section {
          background-color: #121316 !important;
        }
        .hire-closing-line {
          font-family: var(--font-heading) !important;
          font-weight: 400 !important;
          font-style: normal !important;
          letter-spacing: 0.005em !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          -webkit-font-smoothing: antialiased !important;
          -moz-osx-font-smoothing: grayscale !important;
        }
        .hire-closing-line strong {
          font-weight: 500 !important;
          font-style: normal !important;
          letter-spacing: 0.015em !important;
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
        }
        .hire-closing-desktop,
        .hire-closing-mobile .hire-closing-row:not(strong) {
          font-weight: 400 !important;
          font-style: normal !important;
          letter-spacing: 0.015em !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }
        .hire-closing-desktop *:not(strong) {
          font-weight: 400 !important;
        }
        .hire-closing-subtext,
        .hire-closing-subtext p {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-weight: 300 !important;
          letter-spacing: 0.015em !important;
          color: rgba(255, 255, 255, 0.8) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.8) !important;
        }
        .hire-closing-btn {
          font-family: var(--font-label), sans-serif !important;
          font-size: 0.72rem !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.08em !important;
          justify-content: center;
          height: 3.01rem !important;
          padding: 0 1.74rem !important;
          background: linear-gradient(315deg, #d6b792 0%, #f2908f 100%) !important;
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
          border: 1px solid #ffffff !important;
          border-radius: 40px !important;
          box-shadow: none !important;
          text-shadow: none !important;
          -webkit-font-smoothing: antialiased !important;
          -moz-osx-font-smoothing: grayscale !important;
          transition: all 0.25s ease !important;
          -webkit-text-stroke: 0 !important;
          text-decoration: none !important;
        }
        .hire-closing-btn span {
          font-size: 0.72rem !important;
          font-weight: 700 !important;
          letter-spacing: 0.08em !important;
        }
        .hire-closing-btn svg {
          stroke: #000000 !important;
        }
        .hire-closing-btn:hover {
          background: linear-gradient(315deg, #ddc19e 0%, #f49c9b 100%) !important;
          border-color: #ffffff !important;
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
          border-radius: 40px !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(242, 144, 143, 0.28) !important;
        }
        .hire-closing-btn:hover svg {
          stroke: #000000 !important;
        }
        .hire-closing-linkedin {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: 0.82rem !important;
          font-weight: 300 !important;
          letter-spacing: 0.015em !important;
          color: rgba(255, 255, 255, 0.68) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.68) !important;
          text-decoration: none;
          border-bottom: 1px solid rgba(242, 144, 143, 0.6);
          padding-bottom: 1px;
        }
        @media (min-width: 901px) {
          .hire-closing-line,
          .hire-closing-desktop,
          .hire-closing-desktop > span {
            font-weight: 400 !important;
          }
          .hire-closing-line strong {
            font-weight: 600 !important;
          }
          .hire-closing-section {
            padding-bottom: 2.55rem !important;
          }
          .hire-closing-subtext {
            font-size: 1.23rem !important;
          }
          .hire-closing-line {
            font-size: var(--closing-heading-size) !important;
            max-width: 44ch !important;
          }
          .hire-closing-desktop {
            display: inline !important;
          }
          .hire-closing-mobile {
            display: none !important;
          }
        }
        @media (max-width: 900px) {
          .hire-closing-section {
            padding-top: 2.55rem !important;
            padding-bottom: 2.55rem !important;
          }
          .hire-closing-content {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .hire-closing-line {
            font-size: clamp(1.0064rem, 5.24vw, 1.416rem) !important;
            line-height: 1.35 !important;
            text-align: left !important;
            width: 100% !important;
            max-width: none !important;
            align-self: stretch !important;
            font-weight: 600 !important;
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
          }
          .hire-closing-line strong {
            font-weight: 600 !important;
            color: #f2908f !important;
            -webkit-text-fill-color: #f2908f !important;
          }
          .hire-closing-desktop {
            display: none !important;
          }
          .hire-closing-mobile {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            gap: 0px !important;
            text-align: center !important;
          }
          .hire-closing-row {
            display: block !important;
            width: 100% !important;
            text-align: center !important;
            font-style: normal !important;
            font-weight: 600 !important;
            letter-spacing: -0.01em !important;
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
          }
          strong.hire-closing-row {
            font-weight: 500 !important;
            letter-spacing: -0.01em !important;
            color: #f2908f !important;
            -webkit-text-fill-color: #f2908f !important;
          }
          .hire-closing-btn {
            background: linear-gradient(315deg, #d6b792 0%, #f2908f 100%) !important;
            height: 3.25rem !important;
            width: auto !important;
            padding: 0 1.88rem !important;
            margin: 0 auto !important;
            justify-content: center !important;
            white-space: nowrap !important;
            border-radius: 44px !important;
            border: 1px solid #ffffff !important;
            box-shadow: none !important;
            transform: none !important;
            box-sizing: border-box !important;
            gap: 0.49rem !important;
          }
          .hire-closing-btn span {
            font-size: 0.78rem !important;
            font-weight: 700 !important;
            letter-spacing: 0.08em !important;
            white-space: nowrap !important;
            display: inline-block !important;
          }
          .hire-closing-btn svg {
            width: 11px !important;
            height: 11px !important;
          }
        }
      `}</style>
      <div
        className="hire-closing-content"
        style={{
          maxWidth: '820px',
          width: '100%',
          textAlign: 'center',
          padding: '2rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '48px',
            height: '1px',
            backgroundColor: '#2d3139',
            margin: '2rem auto 1rem auto',
            transformOrigin: 'center',
          }}
        />

        <motion.h2
          className="hire-closing-line"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.78, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--closing-heading-size)',
            fontWeight: 300,
            letterSpacing: '0.015em',
            lineHeight: 1.35,
            color: '#ffffff',
            WebkitTextFillColor: '#ffffff',
            textAlign: 'center',
            margin: '0 0 3.5rem 0',
            maxWidth: '44ch',
          }}
        >
          <span className="hire-closing-desktop">
            Most portfolios show pictures.{' '}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.72, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'inline', fontWeight: 300, color: '#ffffff', WebkitTextFillColor: '#ffffff' }}
            >
              Mine shows <strong style={{ fontWeight: 500, fontStyle: 'normal', letterSpacing: '0.005em', color: '#f2908f', WebkitTextFillColor: '#f2908f' }}>products in use.</strong>
            </motion.span>
          </span>
          <span className="hire-closing-mobile">
            <span className="hire-closing-row">Most portfolios</span>
            <span className="hire-closing-row">show pictures.</span>
            <strong className="hire-closing-row">Mine shows</strong>
            <strong className="hire-closing-row">products in use.</strong>
          </span>
        </motion.h2>

        <motion.div
          className="hire-closing-subtext"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.68, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-body), "Plus Jakarta Sans", sans-serif',
            fontSize: 'clamp(1.15rem, 2.8vw, 1.23rem)',
            fontWeight: 300,
            letterSpacing: '-0.011em',
            lineHeight: 1.55,
            color: 'rgba(255, 255, 255, 0.8)',
            WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
            margin: '0 auto 2rem auto',
            maxWidth: '46ch',
            textWrap: 'balance',
          }}
        >
          <p style={{ margin: 0, fontWeight: 500 }}>Let’s talk.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.72, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '0rem', marginBottom: '1.25rem', justifyContent: 'center' }}
        >
          <a
            href="mailto:iryna@irynasheremeta.com"
            className="btn hire-closing-btn face-cta"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
          >
            <span style={{ letterSpacing: '0.08em' }}>GET IN TOUCH</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
          <p style={{ margin: 0, fontFamily: 'var(--font-body), "Plus Jakarta Sans", sans-serif', fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.015em', color: 'rgba(255, 255, 255, 0.68)', textAlign: 'center' }}>
            Open to remote roles across Canada · Based in Montréal
          </p>
          <a
            className="hire-closing-linkedin"
            href="https://www.linkedin.com/in/iryna-sheremeta-643316414/"
            target="_blank"
            rel="noreferrer"
          >
            Find me on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
