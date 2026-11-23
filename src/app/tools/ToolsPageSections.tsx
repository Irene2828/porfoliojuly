'use client';

import { motion } from 'framer-motion';

const posterScreenshot = '/assets/poster-tool/01-details-and-download.png';

const ways = [
  {
    label: 'The old way',
    text: 'A designer opens Illustrator. A ten-minute change takes days, because it waits behind everything else a designer has to do.',
  },
  {
    label: 'The agent way',
    text: 'First, my AI assistant did one shirt under my direction — the Mumbai edition: city list removed, “Finish It” added in Marathi, the original artwork proven untouched, path by path. Fast and right — but it needed me in the loop.',
  },
  {
    label: 'The tool way',
    text: 'That one correct solution, frozen into a web tool. Pick the design, choose the changes, run. No agent, no AI account, no design software — and the same result every time.',
  },
];

const principles = [
  {
    lead: 'Text only goes where it fits.',
    text: 'New text lands in a free gap, or exactly where an element was removed in the same run. An occupied place is refused — with the reason in plain words, not a broken layout.',
  },
  {
    lead: 'Fitted by the real letter shapes.',
    text: 'Type is measured by its actual ink, set in the Foundation’s own font, and adjusted under the finished preview — bigger, smaller, higher, lower — inside limits it cannot cross.',
  },
  {
    lead: 'The original is copied, never edited.',
    text: 'Every run states what was removed, what was added, and that the kept artwork is unchanged — print-ready PDF out.',
  },
  {
    lead: 'Change has a door, too.',
    text: 'A new design, a new field, something the tool can’t do yet — a link at the bottom of the page emails me the request, with the run attached. The tool does repetition; the agent does change.',
  },
];

const buildItems = [
  'A report that gets rebuilt by hand every week',
  'A form someone retypes into another system',
  'A follow-up that depends on someone remembering',
  'A check that happens by hand before anything goes out',
  'An approval that bounces around by email',
];

export default function ToolsPageSections() {
  return (
    <>
      <section id="two-tools-one-app" className="tools-case-section">
        <style>{`
          .tools-case-section {
            background: #ffffff;
            color: #000000;
            padding: 6.4rem 0 5.1rem;
            overflow: hidden;
          }
          .tools-case-inner,
          .tools-build-inner {
            width: min(1100px, calc(100% - 3rem));
            margin: 0 auto;
          }
          .tools-section-kicker {
            margin: 0 0 1.125rem;
            color: #f2908f;
            font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
            font-size: var(--text-label);
            font-weight: 600;
            letter-spacing: 0.14em;
            text-transform: uppercase;
          }
          .tools-case-heading,
          .tools-build-heading {
            margin: 0;
            max-width: 20ch;
            color: #000000;
            font-family: var(--font-heading), Georgia, serif;
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 400;
            letter-spacing: -0.03em;
            line-height: 1.05;
          }
          .tools-case-subline {
            max-width: 42ch;
            margin: 1.25rem 0 3.2rem;
            color: rgba(0, 0, 0, 0.72);
            font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
            font-size: var(--text-lead);
            font-weight: 300;
            letter-spacing: -0.011em;
            line-height: 1.55;
          }
          .tools-tool-cards {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.5rem;
            align-items: start;
            margin-bottom: 4.5rem;
          }
          .tools-tool-card {
            min-width: 0;
            border: 1px solid rgba(0, 0, 0, 0.16);
            border-radius: 16px;
            overflow: hidden;
            background: #f7f7f5;
          }
          .tools-tool-card-media {
            display: block;
            width: 100%;
            aspect-ratio: 16 / 10;
            object-fit: contain;
            background: #ffffff;
          }
          .tools-tool-card-copy {
            padding: 1.45rem 1.45rem 1.6rem;
          }
          .tools-tool-card h3 {
            margin: 0 0 0.65rem;
            color: #000000;
            font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
            font-size: 1.35rem;
            font-weight: 600;
            letter-spacing: -0.02em;
          }
          .tools-tool-card p {
            margin: 0;
            color: rgba(0, 0, 0, 0.74);
            font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
            font-size: var(--text-body);
            font-weight: 300;
            letter-spacing: -0.011em;
            line-height: 1.55;
          }
          .tools-missing-media {
            display: grid;
            min-height: 15rem;
            place-items: center;
            align-content: center;
            gap: 0.75rem;
            padding: 2rem;
            background: #1b1d21;
            color: #ffffff;
            text-align: center;
          }
          .tools-missing-media strong {
            color: #f2908f;
            font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
            font-size: 0.75rem;
            letter-spacing: 0.13em;
            text-transform: uppercase;
          }
          .tools-missing-media span {
            max-width: 30ch;
            color: rgba(255, 255, 255, 0.72);
            font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
            font-size: 0.95rem;
            line-height: 1.45;
          }
          .tools-ways {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1.75rem;
            margin-bottom: 3.5rem;
          }
          .tools-way,
          .tools-principle {
            border-top: 2px solid #000000;
            padding-top: 1rem;
          }
          .tools-way-label {
            margin: 0 0 0.65rem;
            color: #000000;
            font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
            font-size: 0.78rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .tools-way p:last-child,
          .tools-principle p {
            margin: 0;
            color: rgba(0, 0, 0, 0.78);
            font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
            font-size: var(--text-body);
            font-weight: 300;
            letter-spacing: -0.011em;
            line-height: 1.55;
          }
          .tools-principles {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.35rem 2.5rem;
          }
          .tools-principle {
            border-top-width: 1px;
            border-top-color: rgba(0, 0, 0, 0.16);
          }
          .tools-principle strong {
            color: #000000;
            font-weight: 600;
          }
          .tools-build-section {
            background: #ffffff;
            padding: 0 0 6.4rem;
            overflow: hidden;
          }
          .tools-build-heading {
            max-width: 25ch;
            margin-bottom: 2.5rem;
          }
          .tools-build-list {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 1rem;
            margin: 0;
            padding: 0;
            list-style: none;
          }
          .tools-build-list li {
            min-height: 8rem;
            border: 1px solid rgba(0, 0, 0, 0.14);
            border-radius: 12px;
            padding: 1.1rem;
            color: rgba(0, 0, 0, 0.8);
            font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
            font-size: 0.95rem;
            font-weight: 300;
            line-height: 1.45;
          }
          .tools-build-close {
            max-width: 52ch;
            margin: 2.25rem 0 0;
            color: #000000;
            font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
            font-size: var(--text-lead);
            font-weight: 500;
            letter-spacing: -0.011em;
            line-height: 1.45;
          }
          @media (max-width: 900px) {
            .tools-case-section { padding-top: 5.1rem; }
            .tools-case-inner,
            .tools-build-inner { width: min(100% - 3rem, 680px); }
            .tools-tool-cards,
            .tools-ways,
            .tools-principles { grid-template-columns: 1fr; }
            .tools-build-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          }
          @media (max-width: 500px) {
            .tools-case-inner,
            .tools-build-inner { width: calc(100% - 2rem); }
            .tools-case-heading,
            .tools-build-heading { font-size: 2.35rem; }
            .tools-case-subline { font-size: 1.08rem; }
            .tools-tool-cards { gap: 1rem; }
            .tools-tool-card-copy { padding: 1.15rem; }
            .tools-build-list { grid-template-columns: 1fr; }
            .tools-build-list li { min-height: unset; }
          }
        `}</style>
        <div className="tools-case-inner">
          <p className="tools-section-kicker">Two tools, one app</p>
          <motion.h2
            className="tools-case-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            Two tools, one app
          </motion.h2>
          <p className="tools-case-subline">Built for the Terry Fox Foundation, used by their team.</p>

          <div className="tools-tool-cards">
            <article className="tools-tool-card">
              <img className="tools-tool-card-media" src={posterScreenshot} alt="Terry Fox Foundation poster generator" />
              <div className="tools-tool-card-copy">
                <h3>Poster generator</h3>
                <p>On-brand posters in minutes for teams in every city. No waiting on a designer.</p>
              </div>
            </article>
            <article className="tools-tool-card">
              <div className="tools-missing-media" role="img" aria-label="T-shirt artwork screenshot placeholder">
                <strong>T-shirt artwork screenshot needed</strong>
                <span>No T-shirt tool screenshot was present on /freelance. Supply the source frame before publishing.</span>
              </div>
              <div className="tools-tool-card-copy">
                <h3>T-shirt artwork</h3>
                <p>The Foundation’s run shirts change every season: a city list comes off, a line in another language goes on. Every change used to wait in a designer’s queue. Now the team makes the change themselves, in about a minute, and the original artwork can’t be damaged doing it.</p>
              </div>
            </article>
          </div>

          {/* TODO confirm Terry Fox Foundation approval before publishing */}
          <div className="tools-ways">
            {ways.map((way) => (
              <div className="tools-way" key={way.label}>
                <p className="tools-way-label">{way.label}</p>
                <p>{way.text}</p>
              </div>
            ))}
          </div>
          <div className="tools-principles">
            {principles.map((principle) => (
              <div className="tools-principle" key={principle.lead}>
                <p><strong>{principle.lead}</strong> {principle.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tools-build-section">
        <div className="tools-build-inner">
          <p className="tools-section-kicker">What I can build</p>
          <motion.h2
            className="tools-build-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            The kind of work that becomes a tool
          </motion.h2>
          <ul className="tools-build-list">
            {buildItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="tools-build-close">If someone on your team does it the same way every time, it can be a tool.</p>
        </div>
      </section>
    </>
  );
}
