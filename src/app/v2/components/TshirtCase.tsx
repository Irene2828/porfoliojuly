export default function TshirtCase() {
  return (
    <section id="tshirt-case" style={{ backgroundColor: '#ffffff', padding: '6.4rem 0 0 0', width: '100%' }}>
      <style>{`
        .tc-wrap { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
        .tc-kicker {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-size: 13px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.14em; color: #f2908f; margin: 0 0 18px;
        }
        .tc-h2 {
          font-family: var(--font-heading), 'Plus Jakarta Sans', sans-serif;
          font-size: 42px; font-weight: 500; line-height: 1.2; letter-spacing: -0.02em;
          color: #000000; margin: 0 0 20px; max-width: 21ch;
        }
        .tc-lead {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-size: 19px; font-weight: 300; line-height: 1.55; letter-spacing: -0.011em;
          color: rgba(0,0,0,0.78); margin: 0 0 3.2rem; max-width: 62ch;
        }
        .tc-ways { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-bottom: 3.4rem; }
        .tc-way { border-top: 2px solid #000000; padding-top: 16px; }
        .tc-way-label {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
          color: #000000; margin: 0 0 10px;
        }
        .tc-way p, .tc-guard p {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-size: 16.5px; font-weight: 300; line-height: 1.55; letter-spacing: -0.011em;
          color: rgba(0,0,0,0.78); margin: 0;
        }
        .tc-guards { display: grid; grid-template-columns: 1fr 1fr; gap: 22px 40px; margin-bottom: 3.2rem; }
        .tc-guard { border-top: 1px solid rgba(0,0,0,0.14); padding-top: 14px; }
        .tc-guard b { font-weight: 600; color: #000000; }
        .tc-line {
          font-family: var(--font-heading), 'Plus Jakarta Sans', sans-serif;
          font-size: 26px; font-weight: 500; line-height: 1.3; letter-spacing: -0.02em;
          color: #000000; margin: 0 0 14px;
        }
        .tc-line em { color: #f2908f; font-style: italic; }
        .tc-close {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-size: 16.5px; font-weight: 300; line-height: 1.55; letter-spacing: -0.011em;
          color: rgba(0,0,0,0.78); margin: 0; max-width: 68ch;
        }
        @media (max-width: 760px) {
          .tc-ways { grid-template-columns: 1fr; }
          .tc-guards { grid-template-columns: 1fr; }
          .tc-h2 { font-size: 31px; }
          .tc-lead { font-size: 17.5px; }
        }
      `}</style>
      <div className="tc-wrap">
        <p className="tc-kicker">Case study · Terry Fox Foundation · Internal tool</p>
        <h2 className="tc-h2">One good solution, turned into a tool the whole team runs</h2>
        <p className="tc-lead">
          The Foundation&rsquo;s run shirts change every season — a city list comes off, a line
          in another language goes on. Every change used to wait in a designer&rsquo;s queue.
          Now the team makes the change themselves, in about a minute, and the original
          artwork cannot be damaged doing it.
        </p>

        <div className="tc-ways">
          <div className="tc-way">
            <p className="tc-way-label">The old way</p>
            <p>A designer opens Illustrator. A ten-minute change takes days, because it
            waits behind everything else a designer has to do.</p>
          </div>
          <div className="tc-way">
            <p className="tc-way-label">The agent way</p>
            <p>First, my AI assistant did one shirt under my direction — the Mumbai edition:
            city list removed, &ldquo;Finish It&rdquo; added in Marathi, the original artwork proven
            untouched, path by path. Fast and right — but it needed me in the loop.</p>
          </div>
          <div className="tc-way">
            <p className="tc-way-label">The tool way</p>
            <p>That one correct solution, frozen into a web tool. Pick the design, choose
            the changes, run. No agent, no AI account, no design software — and the same
            result every time.</p>
          </div>
        </div>

        <div className="tc-guards">
          <div className="tc-guard">
            <p><b>Text only goes where it fits.</b> New text lands in a free gap, or exactly
            where an element was removed in the same run. An occupied place is refused —
            with the reason in plain words, not a broken layout.</p>
          </div>
          <div className="tc-guard">
            <p><b>Fitted by the real letter shapes.</b> Type is measured by its actual ink,
            set in the Foundation&rsquo;s own font, and adjusted under the finished preview —
            bigger, smaller, higher, lower — inside limits it cannot cross.</p>
          </div>
          <div className="tc-guard">
            <p><b>The original is copied, never edited.</b> Every run states what was removed,
            what was added, and that the kept artwork is unchanged — print-ready PDF out.</p>
          </div>
          <div className="tc-guard">
            <p><b>Change has a door, too.</b> A new design, a new field, something the tool
            can&rsquo;t do yet — a link at the bottom of the page emails me the request, with
            the run attached. The tool does repetition; the agent does change.</p>
          </div>
        </div>

        <p className="tc-line">AI generates. <em>This tool reproduces.</em></p>
        <p className="tc-close">
          AI built it — nobody needs AI to run it. The same pattern fits any document a team
          remakes every week: listing sheets, menus, offer letters, product cards. The
          expertise stays in the tool; the repetition goes away.
        </p>
      </div>
    </section>
  );
}
