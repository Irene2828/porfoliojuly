import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientWrapper from '../components/ClientWrapper';
import '@/app/components/Hero.css';
import heroImage from '@/app/assets/test.webp';

export const metadata: Metadata = {
  title: 'Iryna Sheremeta — AI agent & automation builder',
  description:
    'Product designer who builds AI agents and automation. Looking for an early-stage team.',
  openGraph: {
    title: 'Iryna Sheremeta — AI agent & automation builder',
    description:
      'Product designer who builds AI agents and automation. Looking for an early-stage team.',
    type: 'website',
  },
};

export default function HirePage() {
  const whatIDoItems = [
    'Build agents and automations that remove manual work',
    'Turn messy problems into a first working version in days',
    'Design the experience so real people actually use it',
  ];

  const selectedWorkCases = [
    {
      title: 'Poster tool, Terry Fox Run',
      problem: 'Volunteers needed on-brand posters. Designers were the bottleneck.',
      whatIBuilt:
        'A locked-template tool anyone can use in minutes. An AI agent can also operate it and fill in the fields. The poster’s owner stays in control and approves everything.',
      meta: [
        { label: 'Stack', value: '[fill in]' },
        { label: 'Result', value: '[real outcome]' },
      ],
    },
    {
      title: 'Job-matching pipeline',
      problem: 'Searching for jobs by hand is slow and noisy.',
      whatIBuilt:
        'An automated scraper and scorer that finds roles and ranks them against what I’m looking for.',
      meta: [
        { label: 'Stack', value: '[fill in]' },
        { label: 'How it scores', value: '[one line]' },
        { label: 'Result', value: '[real outcome]' },
      ],
    },
    {
      title: 'AI shopping concierge',
      problem: '[one line]',
      whatIBuilt: '[one line]',
      meta: [
        { label: 'Stack', value: 'React, Next.js, OpenAI, TypeScript' },
        { label: 'Result', value: '[real outcome]' },
      ],
    },
  ];

  const experiments = [
    {
      name: 'Social Explorer',
      desc: 'A multi-mode educational app I built for my own kids',
    },
    {
      name: 'Comic book creator',
      desc: 'Built with Gemini and Imagen 3 for the Contra Google Stitch Challenge',
    },
    {
      name: 'Desk assistant for kids',
      desc: 'Giving old hardware a second life with smart software',
    },
    {
      name: 'Netflix AUX perception prototype',
      desc: '[one line]',
    },
    {
      name: 'The Quiet Conversion',
      desc: 'A mobile hotel affiliate widget I cold-pitched to Stay22',
    },
  ];

  const howIWorkPoints = [
    'I direct agents. I decide what to build, set the constraints, and review every result.',
    'I use [tools: Antigravity IDE, etc.] and ship to [Vercel, etc.].',
    'I’m strongest at zero-to-one: scoping, prototyping, testing with real users, then handing off something clean.',
    '[One honest line about what you’re still growing into]',
  ];

  return (
    <ClientWrapper>
      <div className="v2-theme" style={{ backgroundColor: '#ffffff', color: '#1c1e23' }}>
        <Header />

        <style>{`
          .hire-btn-primary,
          .v2-theme .hire-btn-primary {
            font-family: var(--font-label), sans-serif !important;
            font-size: 0.81rem !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.08em !important;
            height: 3.48rem !important;
            padding: 0 2rem !important;
            background: rgba(59, 163, 184, 0.85) !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            border: none !important;
            border-radius: 0px !important;
            box-shadow: none !important;
            transition: background 0.22s ease, border-color 0.22s ease, transform 0.2s ease, box-shadow 0.2s ease !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 0.45rem !important;
            text-decoration: none !important;
            cursor: pointer !important;
            -webkit-text-stroke: 0 !important;
          }
          .hire-btn-primary:hover,
          .v2-theme .hire-btn-primary:hover {
            background: rgba(59, 163, 184, 0.98) !important;
            border-color: rgba(59, 163, 184, 0.98) !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            box-shadow: none !important;
            transform: scale(1.02) !important;
          }
          .hire-btn-secondary,
          .v2-theme .hire-btn-secondary {
            font-family: var(--font-label), sans-serif !important;
            font-size: 0.81rem !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.08em !important;
            height: 3.48rem !important;
            padding: 0 1.8rem !important;
            background: transparent !important;
            color: #1c1e23 !important;
            -webkit-text-fill-color: #1c1e23 !important;
            border: 1px solid rgba(28, 30, 35, 0.65) !important;
            border-radius: 0px !important;
            box-shadow: none !important;
            transition: all 0.22s ease !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 0.45rem !important;
            text-decoration: none !important;
            cursor: pointer !important;
          }
          .hire-btn-secondary:hover,
          .v2-theme .hire-btn-secondary:hover {
            background: #1c1e23 !important;
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
            border-color: #1c1e23 !important;
            box-shadow: 4px 4px 0px rgba(59, 163, 184, 0.35) !important;
            transform: scale(1.02) !important;
          }
          .hire-btn-prefooter,
          .v2-theme .hire-btn-prefooter {
            font-family: var(--font-label), sans-serif !important;
            font-size: 0.81rem !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.08em !important;
            justify-content: center !important;
            height: 3.48rem !important;
            padding: 0 2rem !important;
            background: rgba(59, 163, 184, 0.85) !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            border: none !important;
            border-radius: 0px !important;
            box-shadow: none !important;
            transition: background 0.22s ease, border-color 0.22s ease, transform 0.2s ease, box-shadow 0.2s ease !important;
            display: inline-flex !important;
            align-items: center !important;
            gap: 0.45rem !important;
            text-decoration: none !important;
            cursor: pointer !important;
            transform: scale(1.05) !important;
            -webkit-text-stroke: 0 !important;
          }
          .hire-btn-prefooter:hover,
          .v2-theme .hire-btn-prefooter:hover {
            background: rgba(59, 163, 184, 0.98) !important;
            border-color: rgba(59, 163, 184, 0.98) !important;
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
            box-shadow: none !important;
            transform: scale(1.07) !important;
          }
        `}</style>

        <main style={{ width: '100%', overflow: 'hidden' }}>
          {/* HERO */}
          <section className="section hero-section" id="home">
            {/* Background Split */}
            <div className="hero-bg-split"></div>

            <div className="container hero-container" style={{ position: 'relative' }}>
              {/* Left side: Content, Headline frame, and CTAs */}
              <div className="hero-content" style={{ position: 'relative' }}>
                {/* Subtle architectural pixel accents on left edge only */}
                <div 
                  className="hero-decor-pixels" 
                  aria-hidden="true" 
                  style={{ 
                    position: 'absolute', 
                    inset: '-10px 0 -20px -30px', 
                    pointerEvents: 'none', 
                    zIndex: 0 
                  }}
                >
                  <span style={{ position: 'absolute', top: '14px', left: '-20px', width: '5px', height: '5px', border: '1px solid rgba(160, 170, 182, 0.38)', backgroundColor: 'transparent' }} />
                  <span style={{ position: 'absolute', top: '22px', left: '-12px', width: '2px', height: '2px', backgroundColor: 'rgba(160, 170, 182, 0.45)' }} />
                  <span style={{ position: 'absolute', top: '-12px', left: '160px', width: '7px', height: '7px', border: '1px solid rgba(255, 255, 255, 0.75)', backgroundColor: 'transparent' }} />
                  <span style={{ position: 'absolute', top: '248px', left: '-14px', width: '4px', height: '4px', border: '1px solid rgba(160, 170, 182, 0.35)', backgroundColor: 'transparent' }} />
                  <span style={{ position: 'absolute', bottom: '16px', left: '-18px', width: '6px', height: '6px', border: '1px solid rgba(160, 170, 182, 0.32)', backgroundColor: 'transparent' }} />
                </div>

                <div className="hero-copy-motion" style={{ position: 'relative', zIndex: 1 }}>
                  <div className="hero-name-group" style={{ position: 'relative', width: 'fit-content', maxWidth: '100%' }}>
                    <div
                      className="hero-text"
                      style={{ transform: 'translateY(-0.4rem)' }}
                    >
                      <h1 className="hero-statement hero-statement-anim" style={{ display: 'flex', flexDirection: 'column', gap: '0px', lineHeight: '1.22' }}>
                        {/* Desktop Headline (2 lines) */}
                        <span className="headline-desktop">
                          <span className="headline-line headline-light">
                            I build AI agents and automation.
                          </span>
                          <span className="headline-line headline-light">
                            <span className="headline-teal-underline">Designer’s eye</span>, builder’s hands.
                          </span>
                        </span>

                        {/* Mobile Headline (2 lines) */}
                        <span className="headline-mobile">
                          <span className="headline-line">
                            <span className="headline-mockup-light">I build AI agents and automation.</span>
                          </span>
                          <span className="headline-line">
                            <span className="headline-mockup-bold">Designer’s eye</span><span className="headline-mockup-light">, builder’s hands.</span>
                          </span>
                        </span>
                      </h1>

                      <p className="hero-frame-paragraph hero-paragraph-anim" style={{ marginTop: '1.7rem', fontSize: '1.213rem', lineHeight: '1.75', color: '#4a5461', maxWidth: '100%', fontWeight: 400, opacity: 1 }}>
                        I take vague problems to working tools, fast. Looking for an early-stage team where that’s the job.
                      </p>
                    </div>

                    {/* CTAs: right-aligned flush with content block */}
                    <div
                      className="hero-ctas hero-ctas-outside hero-ctas-anim"
                      style={{ 
                        width: '100%', 
                        maxWidth: '100%',
                        display: 'flex', 
                        justifyContent: 'flex-end', 
                        alignItems: 'center', 
                        marginTop: '3.9rem' 
                      }}
                    >
                      <a
                        href="mailto:iryna@irynasheremeta.com"
                        className="btn btn-primary btn-primary-outline hire-btn-primary"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', borderRadius: '40px' }}
                      >
                        <span>Let’s work on the next build together</span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side: Image with Concentric Geometric Rings */}
              <div className="hero-image-wrapper">
                <div className="hero-image-container" style={{ position: 'relative', zIndex: 2 }}>
                  <div className="hero-image-brackets"></div>
                  <div className="hero-image-brackets-left"></div>
                  <img src={heroImage.src} alt="Iryna Sheremeta" className="hero-image" style={{ position: 'relative', zIndex: 2 }} />
                  <div className="hero-dot-overlay"></div>

                  {/* Geometric square shapes: Bottom-Left of Image */}
                  <div 
                    className="hero-shape-bottom-left" 
                    aria-hidden="true" 
                    style={{ 
                      position: 'absolute', 
                      bottom: '-35px', 
                      left: '-45px', 
                      width: '200px', 
                      height: '200px', 
                      pointerEvents: 'none', 
                      zIndex: 1 
                    }}
                  >
                    <svg 
                      width="200" 
                      height="200" 
                      viewBox="0 0 200 200" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ 
                        width: '100%', 
                        height: '100%',
                        maskImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.15) 100%)',
                        WebkitMaskImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.15) 100%)'
                      }}
                    >
                      <rect x="6" y="6" width="188" height="188" stroke="#1c1e23" strokeWidth="1.2" strokeOpacity="0.14" />
                      <rect x="36" y="36" width="128" height="128" stroke="#1c1e23" strokeWidth="1.2" strokeDasharray="4 4" strokeOpacity="0.16" />
                      <rect x="66" y="66" width="68" height="68" stroke="#1c1e23" strokeWidth="1.2" strokeOpacity="0.12" />
                    </svg>
                  </div>

                  {/* Geometric square shapes: Top-Right of Image (Mirror looking) */}
                  <div 
                    className="hero-shape-top-right" 
                    aria-hidden="true" 
                    style={{ 
                      position: 'absolute', 
                      top: '-35px', 
                      right: '-45px', 
                      width: '200px', 
                      height: '200px', 
                      pointerEvents: 'none', 
                      zIndex: 1 
                    }}
                  >
                    <svg 
                      width="200" 
                      height="200" 
                      viewBox="0 0 200 200" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ 
                        width: '100%', 
                        height: '100%',
                        maskImage: 'linear-gradient(315deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.15) 100%)',
                        WebkitMaskImage: 'linear-gradient(315deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.15) 100%)'
                      }}
                    >
                      <rect x="6" y="6" width="188" height="188" stroke="#1c1e23" strokeWidth="1.2" strokeOpacity="0.14" />
                      <rect x="36" y="36" width="128" height="128" stroke="#1c1e23" strokeWidth="1.2" strokeDasharray="4 4" strokeOpacity="0.16" />
                      <rect x="66" y="66" width="68" height="68" stroke="#1c1e23" strokeWidth="1.2" strokeOpacity="0.12" />
                    </svg>
                  </div>
                </div>
                
                <span className="hero-hover-surface" aria-hidden="true"></span>
              </div>
            </div>
            <div className="hero-bottom-hairline-line"></div>
          </section>

          {/* WHAT I DO */}
          <section
            style={{
              padding: 'clamp(3.5rem, 6vw, 5rem) 1.5rem',
              backgroundColor: '#ffffff',
              borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
            }}
          >
            <div style={{ maxWidth: '880px', margin: '0 auto' }}>
              <div
                style={{
                  width: '48px',
                  height: '1px',
                  backgroundColor: 'var(--accent, #1d4e5b)',
                  margin: '0 0 1.5rem 0',
                  opacity: 0.7,
                }}
              />

              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: '#1c1e23',
                  margin: '0 0 2rem 0',
                }}
              >
                What I do
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1.25rem',
                }}
              >
                {whatIDoItems.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.6rem 1.6rem',
                      backgroundColor: '#ffffff',
                      border: '1px solid rgba(0, 109, 119, 0.15)',
                      boxShadow: '3px 3px 0 0 rgba(0, 109, 119, 0.1)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.85rem',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-mono), monospace',
                        fontSize: '12px',
                        color: '#3ba3b8',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                      }}
                    >
                      0{idx + 1}
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.05rem',
                        lineHeight: 1.55,
                        color: '#1c1e23',
                        margin: 0,
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SELECTED WORK */}
          <section
            style={{
              padding: 'clamp(3.5rem, 6vw, 5rem) 1.5rem',
              backgroundColor: '#ffffff',
              borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
            }}
          >
            <div style={{ maxWidth: '880px', margin: '0 auto' }}>
              <div
                style={{
                  width: '48px',
                  height: '1px',
                  backgroundColor: 'var(--accent, #1d4e5b)',
                  margin: '0 0 1.5rem 0',
                  opacity: 0.7,
                }}
              />

              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: '#1c1e23',
                  margin: '0 0 2.25rem 0',
                }}
              >
                Things I built that people use
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {selectedWorkCases.map((workCase, idx) => (
                  <article
                    key={idx}
                    style={{
                      padding: '2rem',
                      backgroundColor: '#ffffff',
                      border: '1px solid rgba(0, 109, 119, 0.15)',
                      boxShadow: '3px 3px 0 0 rgba(0, 109, 119, 0.1)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.35rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                        paddingBottom: '0.85rem',
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.35rem',
                          fontWeight: 600,
                          color: '#1c1e23',
                          margin: 0,
                          letterSpacing: '-0.015em',
                        }}
                      >
                        {workCase.title}
                      </h3>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono), monospace',
                          fontSize: '11px',
                          color: '#6b7280',
                          letterSpacing: '0.05em',
                        }}
                      >
                        CASE 0{idx + 1}
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '1rem',
                          lineHeight: 1.6,
                          color: '#2b3038',
                        }}
                      >
                        <span className="project-chip">Problem</span>
                        <span>{workCase.problem}</span>
                      </div>

                      <div
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '1rem',
                          lineHeight: 1.6,
                          color: '#2b3038',
                        }}
                      >
                        <span className="project-chip">What I built</span>
                        <span>{workCase.whatIBuilt}</span>
                      </div>
                    </div>

                    <div
                      style={{
                        paddingTop: '0.85rem',
                        borderTop: '1px dashed rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.75rem 1.5rem',
                        fontFamily: 'var(--font-mono), monospace',
                        fontSize: '12px',
                        color: '#4b5563',
                      }}
                    >
                      {workCase.meta.map((m, mIdx) => (
                        <div key={mIdx} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                          <span style={{ fontWeight: 600, color: '#1f2937' }}>{m.label}:</span>
                          <span>{m.value}</span>
                          {mIdx < workCase.meta.length - 1 && (
                            <span style={{ marginLeft: '0.5rem', color: '#9ca3af' }}>·</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* EXPERIMENTS */}
          <section
            style={{
              padding: 'clamp(3.5rem, 6vw, 5rem) 1.5rem',
              backgroundColor: '#ffffff',
              borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
            }}
          >
            <div style={{ maxWidth: '880px', margin: '0 auto' }}>
              <div
                style={{
                  width: '48px',
                  height: '1px',
                  backgroundColor: 'var(--accent, #1d4e5b)',
                  margin: '0 0 1.5rem 0',
                  opacity: 0.7,
                }}
              />

              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: '#1c1e23',
                  margin: '0 0 0.5rem 0',
                }}
              >
                Things I built because I wanted to
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 1.55,
                  color: '#6b7280',
                  margin: '0 0 2rem 0',
                  fontStyle: 'italic',
                }}
              >
                Side projects, prototypes and challenges.
              </p>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.9rem',
                }}
              >
                {experiments.map((exp, idx) => (
                  <li
                    key={idx}
                    style={{
                      padding: '1.25rem 1.5rem',
                      backgroundColor: '#ffffff',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      borderRadius: '0px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.3rem',
                      boxShadow: '0 1px 4px rgba(0, 0, 0, 0.03)',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: '#1c1e23',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {exp.name}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        lineHeight: 1.5,
                        color: '#4b5563',
                      }}
                    >
                      {exp.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* HOW I WORK WITH AI AGENTS */}
          <section
            style={{
              padding: 'clamp(3.5rem, 6vw, 5rem) 1.5rem',
              backgroundColor: '#ffffff',
              borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
            }}
          >
            <div style={{ maxWidth: '880px', margin: '0 auto' }}>
              <div
                style={{
                  width: '48px',
                  height: '1px',
                  backgroundColor: 'var(--accent, #1d4e5b)',
                  margin: '0 0 1.5rem 0',
                  opacity: 0.7,
                }}
              />

              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: '#1c1e23',
                  margin: '0 0 2rem 0',
                }}
              >
                How I work
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {howIWorkPoints.map((point, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.4rem 1.6rem',
                      backgroundColor: '#ffffff',
                      border: '1px solid rgba(0, 109, 119, 0.15)',
                      boxShadow: '3px 3px 0 0 rgba(0, 109, 119, 0.1)',
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '1rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono), monospace',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#3ba3b8',
                        flexShrink: 0,
                      }}
                    >
                      0{idx + 1}
                    </span>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.02rem',
                        lineHeight: 1.6,
                        color: '#1c1e23',
                        margin: 0,
                        fontWeight: 400,
                      }}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CLOSING */}
          <section
            style={{
              padding: 'clamp(5rem, 8vw, 7rem) 1.5rem clamp(5rem, 9vw, 8rem) 1.5rem',
              backgroundColor: '#ffffff',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                maxWidth: '680px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '1px',
                  backgroundColor: 'var(--accent, #1d4e5b)',
                  margin: '0 auto 2rem auto',
                  opacity: 0.7,
                }}
              />

              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  color: '#1c1e23',
                  margin: '0 0 1.25rem 0',
                }}
              >
                Let’s talk.
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                  lineHeight: 1.55,
                  color: '#4a5461',
                  margin: '0 auto 2.25rem auto',
                  maxWidth: '46ch',
                }}
              >
                If you’re building something early and need someone who ships, email me.
              </p>

              <div className="prefooter-cta-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '0.5rem', marginBottom: '2.5rem', justifyContent: 'center' }}>
                <a
                  href="mailto:iryna@irynasheremeta.com"
                  className="btn prefooter-btn-primary face-cta hire-btn-prefooter"
                >
                  <span>EMAIL ME</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ transform: 'translateY(-0.5px)' }}
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </ClientWrapper>
  );
}
