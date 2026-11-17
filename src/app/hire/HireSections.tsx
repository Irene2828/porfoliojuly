'use client';

import { useState } from 'react';
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
  stack,
  steps,
  link,
  recordingSrc,
  recordingCaption,
  className,
  delayBase = 0,
}: {
  kicker: string;
  title: string;
  stack?: string;
  steps: { num: string; title: string; text: string }[];
  link?: { href: string; label: string };
  recordingSrc?: string;
  recordingCaption?: string;
  className?: string;
  delayBase?: number;
}) {
  return (
    <div className={className ? `hire-story ${className}` : 'hire-story'}>
      <div className="hire-story-copy">
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
        transition={{ duration: 0.78, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
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
      {false && stack && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.68, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            margin: '1.05rem 0 0 0',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.65rem',
            fontFamily: 'var(--font-body), "Plus Jakarta Sans", sans-serif',
          }}
        >
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            Design &amp; build
          </span>
          <span
            style={{
              fontSize: '0.92rem',
              fontWeight: 400,
              letterSpacing: '0.01em',
              color: 'rgba(255, 255, 255, 0.85)',
            }}
          >
            {stack}
          </span>
        </motion.p>
      )}
      </div>
      {recordingSrc && (
        <motion.div
          className="hire-story-visual"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.72, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
        >
          <video
            className="hire-story-recording"
            src={recordingSrc}
            autoPlay
            loop
            muted
            playsInline
            controls
            aria-label={recordingCaption || 'Terry Fox poster tool recording'}
          />
          {recordingCaption && <p className="hire-story-visual-caption">{recordingCaption}</p>}
          <a className="hire-story-zoom" href={recordingSrc} target="_blank" rel="noreferrer">
            Tap to Zoom <span aria-hidden="true">→</span>
          </a>
          {stack && (
            <div className="hire-story-stack" style={{ justifyContent: 'center', marginTop: '1rem' }}>
              <span className="hire-story-stack-label">Design &amp; build</span>
              <span className="hire-story-stack-value">{stack}</span>
            </div>
          )}
        </motion.div>
      )}
      {link && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.68, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ margin: '1rem 0 0 0', textAlign: 'left', display: 'flex', alignItems: 'baseline', justifyContent: 'flex-end', gap: '2rem', flexWrap: 'wrap' }}
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
          background: #ffffff;
          width: 100%;
          margin-left: 0;
          box-sizing: border-box;
          padding: 3.5rem 2rem 2rem;
          color: #1c1e23;
        }
        .hire-story + .hire-story {
          margin-top: 2.55rem;
        }
        /* Story band: full-bleed sky-blue gradient under each story's top
           divider — blue at the top, white in the middle, ending fully white. */
        .hire-story--sky {
          width: 100vw;
          max-width: none;
          margin-left: calc(50% - 50vw);
          padding-left: calc(50vw - 50% + 2rem);
          padding-right: calc(50vw - 50% + 2rem);
          padding-bottom: 4.55rem;
          background: linear-gradient(180deg, #d9edfb 0%, #eaf5fc 28%, #ffffff 52%, #ffffff 100%);
        }
        .hire-story--sky .hire-story-copy {
          background: transparent;
        }
        .hire-story--sky .hire-story-visual {
          background: transparent;
        }
        .hire-story--sky + .hire-story {
          margin-top: 0;
        }
        .hire-story-copy {
          margin: -3.5rem -2rem 0;
          padding: 3.5rem 2rem 3rem;
          background: #ffffff;
          border-top: 1px solid #121316;
        }
        .hire-story-copy .hire-story-title,
        .hire-story-copy .hire-story-step-title {
          color: #1c1e23 !important;
          -webkit-text-fill-color: #1c1e23 !important;
        }
        .hire-story-copy .hire-story-step-text {
          color: rgba(28, 30, 35, 0.72) !important;
          -webkit-text-fill-color: rgba(28, 30, 35, 0.72) !important;
        }
        .hire-story-title {
          font-family: var(--font-heading) !important;
          font-weight: 400 !important;
          letter-spacing: -0.02em !important;
          font-size: calc(var(--text-section-title) * 0.72);
          line-height: 1.2;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
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
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          margin: 0;
        }
        .hire-story-step-text {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: var(--text-body) !important;
          font-weight: 300 !important;
          line-height: var(--lh-body) !important;
          letter-spacing: 0.005em !important;
          color: rgba(255, 255, 255, 0.72) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.72) !important;
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
        .hire-story-visual {
          width: 100vw;
          max-width: none;
          margin: 2.55rem 0 0 calc(50% - 50vw);
          margin-bottom: 0;
          padding: 2.25rem 2rem 2.5rem;
          box-sizing: border-box;
          background: #ffffff;
          position: relative;
          z-index: 1;
          text-align: center;
        }
        .hire-story-recording {
          display: block;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          background: #eef0f2;
          border: 1px solid rgba(28, 30, 35, 0.14);
        }
        .hire-story-visual-caption {
          margin: 1.1rem auto 0;
          max-width: 62ch;
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: var(--text-body) !important;
          font-weight: 300 !important;
          line-height: var(--lh-body) !important;
          letter-spacing: 0.005em !important;
          color: rgba(28, 30, 35, 0.72) !important;
          -webkit-text-fill-color: rgba(28, 30, 35, 0.72) !important;
        }
        .hire-story-zoom {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          margin-top: 0.7rem;
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: var(--text-body) !important;
          font-weight: 400 !important;
          color: #a7aeb8 !important;
          -webkit-text-fill-color: #a7aeb8 !important;
          text-decoration: none;
        }
        .hire-story-zoom:hover {
          color: #1c1e23 !important;
          -webkit-text-fill-color: #1c1e23 !important;
        }
        .hire-story-meta-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 2rem;
          width: 100%;
        }
        .hire-story-stack {
          display: flex;
          align-items: baseline;
          gap: 0.65rem;
          margin: 0;
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
        }
        .hire-story-stack-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(28, 30, 35, 0.5);
        }
        .hire-story-stack-value {
          font-size: 0.92rem;
          font-weight: 400;
          letter-spacing: 0.01em;
          color: rgba(28, 30, 35, 0.85);
        }
        .hire-story-stack-label {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        .hire-story-stack-value {
          color: rgba(255, 255, 255, 0.85) !important;
        }
        .hire-story-visual .hire-story-stack-label {
          color: rgba(28, 30, 35, 0.5) !important;
        }
        .hire-story-visual .hire-story-stack-value {
          color: rgba(28, 30, 35, 0.85) !important;
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
          .hire-story-visual {
            margin-top: 2rem;
          }
          .hire-story-meta-row {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.85rem;
          }
          .hire-story-stack {
            flex-wrap: wrap;
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
          style={{ margin: '0 0 1.05rem 0', textAlign: 'center' }}
        >
          WORK EXAMPLES
        </motion.p>
        <motion.h2
          className="hire-stories-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.78, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{ margin: '0', textAlign: 'center' }}
        >
          Two builds, start to finish.
        </motion.h2>

        <CaseStory
          kicker="CASE STUDY"
          title="Terry Fox Foundation — the poster tool"
          stack="Codex · Antigravity · Google Stitch"
          steps={terryFoxSteps}
          className="hire-story--sky"
          recordingSrc="/terry-fox-flow.mp4"
          recordingCaption="On-brand posters in minutes for teams in every city — no designer bottleneck, no waiting days."
        />
        <CaseStory
          kicker="CASE STUDY"
          title="BuyUkrainian — a live product of my own"
          stack="Codex · Antigravity · Figma"
          steps={buyUkrainianSteps}
          recordingSrc="/buyukrainian-desktop-flow.mp4"
          recordingCaption="Ukrainian-made products on one map — 28 stores across Canada, and anyone can add a missing one."
          className="hire-story--sky"
          link={{ href: 'https://www.buyukrainian.ca', label: 'Visit the live site' }}
        />
      </div>
    </section>
  );
}

/* Closing for the /hire page: same editorial statement design as the homepage prefooter, recruiter copy. */

export function HireClosing() {
  const [copied, setCopied] = useState(false);
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
          font-family: 'Newsreader', 'Source Serif 4', Georgia, serif !important;
          font-weight: 400 !important;
          font-style: normal !important;
          letter-spacing: -0.018em !important;
          line-height: 0.98 !important;
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
        .hire-closing-desktop > span:last-child {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
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
          min-width: 272px !important;
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
        .hire-closing-here {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          font-style: normal !important;
        }
        /* The global .v2-theme h2 span rule paints headline spans peach with
           higher specificity than the rules above; these win it back. */
        .v2-theme .hire-closing-section .hire-closing-line {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }
        .v2-theme .hire-closing-section .hire-closing-row:not(strong) {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }
        .v2-theme .hire-closing-section .hire-closing-here {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          font-family: 'Newsreader', 'Source Serif 4', Georgia, serif !important;
          font-style: italic !important;
          font-weight: 400 !important;
          line-height: 1.05 !important;
        }
        .hire-closing-copy {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: 0.82rem !important;
          font-weight: 300 !important;
          letter-spacing: 0.015em !important;
          color: rgba(255, 255, 255, 0.55) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.55) !important;
          transition: color 0.25s ease;
        }
        .hire-closing-copy:hover {
          color: rgba(255, 255, 255, 0.85) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.85) !important;
        }
        .hire-closing-copy svg {
          flex: none;
          opacity: 0.7;
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
            font-size: clamp(30px, 2.7vw, 38px) !important;
            max-width: 44ch !important;
            text-align: center !important;
            align-self: center !important;
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
            font-size: clamp(2.82rem, 12.77vw, 4.18rem) !important;
            line-height: 0.98 !important;
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
            align-items: flex-start !important;
            width: 100% !important;
            gap: 0px !important;
            text-align: left !important;
          }
          .hire-closing-row {
            display: block !important;
            width: 100% !important;
            text-align: left !important;
            font-style: normal !important;
            font-weight: 600 !important;
            letter-spacing: -0.01em !important;
            line-height: 1.05 !important;
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
          textAlign: 'left',
          padding: '2rem 1rem 0 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
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
            margin: '2rem 0 1rem 0',
            transformOrigin: 'left',
          }}
        />

        <motion.h2
          className="hire-closing-line"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.78, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Newsreader', 'Source Serif 4', Georgia, serif",
            fontSize: 'clamp(30px, 2.7vw, 38px)',
            fontWeight: 400,
            letterSpacing: '-0.018em',
            lineHeight: 0.98,
            color: '#ffffff',
            WebkitTextFillColor: '#ffffff',
            textAlign: 'left',
            margin: '0 0 2.55rem 0',
            maxWidth: '44ch',
          }}
        >
          <span className="hire-closing-desktop">
            If you need a{' '}
            <strong style={{ fontWeight: 500, fontStyle: 'normal', letterSpacing: '0.005em', color: '#ffffff', WebkitTextFillColor: '#ffffff' }}>thoughtful designer</strong>{' '}
            and a <strong>hands-on builder</strong> —{' '}
            <motion.span
              className="hire-closing-here"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.72, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'inline', fontWeight: 300, color: '#ffffff', WebkitTextFillColor: '#ffffff' }}
            >
              I’m here.
            </motion.span>
          </span>
          <span className="hire-closing-mobile">
            <span className="hire-closing-row">If you need a</span>
            <strong className="hire-closing-row">thoughtful designer</strong>
            <span className="hire-closing-row">and a <strong>hands-on builder</strong> —</span>
            <span className="hire-closing-row hire-closing-here">I’m here.</span>
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.72, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '1rem', marginTop: '0rem', marginBottom: '0', justifyContent: 'center' }}
        >
          <a
            href="mailto:iryna@irynasheremeta.com"
            className="btn hire-closing-btn face-cta"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
          >
            <span style={{ letterSpacing: '0.08em' }}>SEND ME AN EMAIL</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
          <button
            type="button"
            className="hire-closing-copy"
            onClick={() => {
              navigator.clipboard.writeText('iryna@irynasheremeta.com').then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }).catch(() => {});
            }}
          >
            {copied ? 'Copied' : 'Copy'}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2"></rect>
              <path d="m3 7 9 6 9-6"></path>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* "How I use AI" — replaces HowItWorks on the /hire page. Copy: Iryna's own text, lightly edited. */

export function HowIUseAI() {
  return (
    <section
      id="how-i-use-ai"
      style={{
        backgroundColor: 'var(--color-matte-black, #25282e)',
        padding: 'var(--section-entry-space, 5.1rem) 0 5.1rem 0',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .hire-ai-kicker {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: var(--text-label) !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.14em !important;
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
        }
        .hire-ai-title {
          font-family: var(--font-heading) !important;
          font-weight: 400 !important;
          letter-spacing: -0.02em !important;
          font-size: var(--text-section-title);
          line-height: 1.2;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }
        .hire-ai-title .hire-ai-title-accent {
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
        }
        .hire-ai-body {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: var(--text-body) !important;
          font-weight: 300 !important;
          line-height: var(--lh-body) !important;
          letter-spacing: 0.015em !important;
          color: rgba(255, 255, 255, 0.72) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.72) !important;
          max-width: 68ch;
          text-align: left;
        }
        .hire-ai-body p {
          margin: 0 0 1.4rem 0;
        }
        .hire-ai-body p:last-child {
          margin-bottom: 0;
        }
        @media (min-width: 901px) {
          .hire-ai-body {
            display: grid;
            grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
            column-gap: clamp(3rem, 7vw, 7rem);
            max-width: none;
            align-items: start;
          }
          .hire-ai-body p:first-child {
            grid-column: 1;
            grid-row: 1 / span 2;
            max-width: 91%;
            padding-right: clamp(1rem, 2vw, 2rem);
            margin-bottom: 0;
            font-size: 80%;
          }
          .hire-ai-body p:nth-child(2) {
            grid-column: 2;
            grid-row: 1;
            align-self: start;
            justify-self: stretch;
            text-align: left;
            font-size: 80%;
          }
          .hire-ai-body p:nth-child(3) {
            grid-column: 2;
            grid-row: 2;
            justify-self: stretch;
            width: auto;
            margin-top: 0;
            text-align: left;
            font-size: 80%;
          }
          .hire-ai-body p:nth-child(2) {
            padding-bottom: 1.4rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.16);
          }
          .hire-ai-body p:nth-child(3) {
            padding-top: 1.4rem;
          }
        }
        .hire-ai-creds {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: var(--text-small) !important;
          font-weight: 400 !important;
          line-height: var(--lh-small) !important;
          letter-spacing: 0.02em !important;
          color: rgba(255, 255, 255, 0.55) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.55) !important;
          margin: 2.55rem 0 0 0;
          text-align: left;
        }
        .hire-ai-creds span {
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
        }
        .hire-ai-closing {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: calc(var(--text-body) * 1.2) !important;
          font-weight: 500 !important;
          line-height: var(--lh-body) !important;
          letter-spacing: 0.015em !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          margin: 2.55rem 0 0 0;
          text-align: left;
        }
        @media (min-width: 1200px) {
          #how-i-use-ai > .container {
            max-width: 1267.2px !important;
            padding-left: 1.76rem !important;
            padding-right: 1.76rem !important;
          }
        }
        @media (max-width: 900px) {
          #how-i-use-ai > .container {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .hire-ai-title {
            font-size: 2.1rem !important;
          }
        }
        @media (min-width: 901px) {
          .hire-ai-body {
            font-size: calc(var(--text-body) + 2px) !important;
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
          className="hire-ai-kicker"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
          style={{ margin: '0 0 1.05rem 0', textAlign: 'left' }}
        >
          HOW I USE AI
        </motion.p>
        <motion.h2
          className="hire-ai-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.78, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{ margin: '0 0 2.55rem 0', textAlign: 'left' }}
        >
          <span>My thinking has always been </span><span className="hire-ai-title-accent">end-to-end.</span>
        </motion.h2>
        <motion.div
          className="hire-ai-body"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.68, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        >
          <p>
            AI has changed the way I design and how I approach problems. My thinking has always
            been end to end — design in static screens and Figma prototypes was a limitation of
            the tools at the time, never a limitation of how far my design intent could go. For
            the past year I’ve built with agentic code tools — Codex, Antigravity, and Claude.
            That put a builder mindset to work on more complex customer and personal problems,
            instead of keeping it locked in a design tool.
          </p>
          <p>
            When I was 23, I launched my own fashion brand in Kyiv, Ukraine. It started as a
            design dream — bringing ideas to life — and became a first real school of what
            business is: what it takes to make all the elements of a product work, to be liked,
            loved, and used. I directed the work of my master tailors to bring ideas to life.
          </p>
          <p>
            After a motherhood break, turning to tech was a natural step — a way to explore
            what’s possible when you combine creative and business thinking. Then came first
            clients, the AI boom, and the ability to create at a speed not imaginable a year
            ago. Design thinking still takes the biggest share of the time. But building now
            happens everywhere I can: a work laptop, or a mobile device on the go.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function HireTestimonial() {
  return (
    <section
      id="testimonial"
      style={{
        background: '#ffffff',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid rgba(120, 128, 136, 0.18)',
        padding: '5.1rem 2rem 5.1rem 2rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .hire-t-heading {
          font-family: var(--font-heading) !important;
          font-weight: 400 !important;
          letter-spacing: -0.02em !important;
          font-size: var(--text-section-title);
          line-height: 1.2;
          color: var(--color-heading-silver) !important;
          -webkit-text-fill-color: var(--color-heading-silver) !important;
        }
        @media (min-width: 901px) {
          .hire-t-heading {
            margin-bottom: 2.5rem !important;
          }
          #testimonial {
            padding-bottom: 5.1rem !important;
          }
          .hire-t-card {
            width: 70%;
            margin-left: 30%;
          }
        }
        .hire-t-card {
          width: 100%;
          background-color: #ffffff;
          border: 1px dashed rgba(0, 0, 0, 0.2);
          border-radius: 0;
          box-shadow: none;
          padding: 3.25rem 4rem 2.25rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          text-align: left;
        }
        .hire-t-pull {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: clamp(1.15rem, 1.8vw, 1.55rem) !important;
          line-height: 1.4 !important;
          font-weight: 500 !important;
          color: #1d2229 !important;
          max-width: 38ch;
          margin: 0 0 1.25rem 0;
        }
        .hire-t-quote {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-style: normal !important;
          font-weight: 400 !important;
          font-size: var(--text-small);
          line-height: var(--lh-small);
          letter-spacing: 0.008em !important;
          color: rgba(0, 0, 0, 0.78) !important;
          -webkit-text-fill-color: rgba(0, 0, 0, 0.78) !important;
          margin: 0;
          padding: 0;
          max-width: 1093px;
        }
        .hire-t-attribution {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-weight: 500 !important;
          font-size: var(--text-small) !important;
          line-height: var(--lh-small);
          letter-spacing: 0.18em !important;
          text-transform: uppercase !important;
          color: rgba(0, 0, 0, 0.8) !important;
          -webkit-text-fill-color: rgba(0, 0, 0, 0.8) !important;
        }
        @media (max-width: 900px) {
          .hire-t-container {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .hire-t-card {
            padding: 2.625rem 1.75rem 1.5rem !important;
          }
          .hire-t-attribution {
            font-size: var(--text-label) !important;
          }
        }
      `}</style>
      <div
        className="hire-t-container"
        style={{
          width: '100%',
          maxWidth: '1440px',
          paddingLeft: '6rem',
          paddingRight: '6rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          textAlign: 'left',
        }}
      >
        <motion.h2
          className="hire-t-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ margin: '0 0 1.25rem 0' }}
        >
          Working with me, in client&rsquo;s words:
        </motion.h2>
        <motion.div
          className="hire-t-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          <p className="hire-t-pull">
            “Your website is so effective that I&apos;m now receiving calls every day from
            potential clients — sometimes as many as three a day!”
          </p>
          <blockquote className="hire-t-quote">
            Working with Iryna was a great experience from start to finish. She is professional,
            patient, and truly listens to her clients. What sets her apart is her ability to go
            beyond what&apos;s asked, anticipate needs, and offer thoughtful solutions. She
            delivered a website that perfectly reflects my business and values. I couldn&apos;t be
            happier with the result and highly recommend her services!
          </blockquote>
          <motion.p
            className="hire-t-attribution"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            style={{ margin: '2.5rem 0 0 0' }}
          >
            <strong style={{ fontWeight: 800, color: 'rgba(0, 0, 0, 0.6)' }}>ISABELLE GUERTIN</strong>
            , INSURANCE CLAIMS EXPERT,{' '}
            <span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>MONTREAL</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
