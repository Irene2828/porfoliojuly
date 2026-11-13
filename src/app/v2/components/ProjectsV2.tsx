'use client';

import { Fragment, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@/app/components/Projects.css';
import SectionDivider from '@/app/components/SectionDivider';
import GuertinProject from './GuertinProject';
import GenericWhiteCard from './GenericWhiteCard';
import PosterGallery from './PosterGallery';

const textVariant = {
  hidden: { y: 25, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  }
};

interface ProjectsV2Props {
  initialProjects?: any[];
}

export default function ProjectsV2({ initialProjects = [] }: ProjectsV2Props) {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'internal-tools' | 'websites' | 'workflow-automations'>('internal-tools');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const HOVER_MEDIA: Record<string, { staticSrc: string; hoverSrc: string }> = {
    'v2-1': { staticSrc: '/terry-fox-desktop-static.png', hoverSrc: '/terry-fox-desktop-hover.mp4' },
    'v2-2': { staticSrc: '/isabelle-mobile-static.png', hoverSrc: '/isabelle-desktop-hover.mp4' },
  };
  const TAB_CASE_IDS: Record<'internal-tools' | 'websites' | 'workflow-automations', string[]> = {
    'internal-tools': ['v2-1'],
    websites: ['v2-2', 'v2-3'],
    'workflow-automations': ['v2-5'],
  };
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  const initialProjectsData = [
    {
      id: 'v2-1',
      title: 'Terry Fox Foundation / Internal Poster tool',
      slug: 'terry-fox-run',
      subline: 'Every city runs its own event. Every poster has to stay on brand.',
      hoverLabel: 'Tap to Zoom',
      annotations: [
        { markerNumber: 1, title: 'Locked Template', text: 'Anyone can make an on-brand poster in minutes.' },
        { markerNumber: 2, title: 'Simple by default, deep on demand', text: 'The 3-step flow covers most posters; the full editor with placement controls is one click away, not in the way.' },
        { markerNumber: 3, title: 'Approval before it ships', text: 'Nothing goes out until the event’s owner has seen it.' }
      ],
      statsTitle: 'Impact',
      stats: [
        { 
          chip: 'Before', 
          text: 'Designers were the bottleneck.', 
          sub: "Every poster was made by hand in Figma, one at a time. Volunteers waited days for a single poster, and designers were pulled away from bigger work. The team needed posters that were fast and on brand — made by people who don't use Figma." 
        },
        { 
          chip: 'After', 
          text: 'Minutes instead of days', 
          sub: "One set of details fills all five formats at once, and the clean structure lets an AI agent fill the fields directly. Volunteers and managers run the whole flow themselves — and a person still previews and approves every poster before it goes out." 
        }
      ],
      image: '/assets/poster-tool/01-details-and-download.png'
    },
    {
      id: 'v2-2',
      title: 'Isabelle Guertin // rguertin.ca',
      slug: 'guertin-isabelle',
      subline: 'A 20-year claims expert, hidden behind an outdated WordPress site.',
      hoverLabel: 'Tap to Zoom',
      statsTitle: 'Impact',
      annotations: [
        { 
          markerNumber: 1, 
          title: 'Credibility Up Front', 
          text: '20 years of experience, stated in the first line — not buried in an About page.' 
        },
        { 
          markerNumber: 2, 
          title: 'Plain Words', 
          text: 'Claims expertise rewritten so a stressed homeowner understands it in one read.' 
        },
        { 
          markerNumber: 3, 
          title: 'One Step In', 
          text: 'A short form and a phone number. The person you hire is the person who handles your file.' 
        }
      ],
      stats: [
        { 
          chip: 'Before', 
          text: 'Outdated WordPress', 
          sub: "It didn't carry her credibility: a 20-year expert behind a generic site, services in insider language, and no clear way for a client in trouble to reach her." 
        },
        { 
          chip: 'After', 
          text: 'Live at rguertin.ca', 
          sub: "The site now presents her at the level she works at. A client in trouble can understand what she does, see proof that it works, and reach her in one step — and a municipality sees a specialist, not a generalist." 
        }
      ],
      image: '/assets/guertin-desktop.png',     },     { id: 'v2-3', title: 'BuyUkrainian', slug: 'buyukrainian', subline: 'Case 03 · BuyUkrainian', hoverLabel: 'Tap to Zoom', annotations: [ { markerNumber: 1, title: 'Buy Ukrainian in Canada', text: 'BuyUkrainian.ca makes it easier to find products from Ukraine in Canadian stores.' }, { markerNumber: 2, title: 'A map and a directory', text: 'Products listed, stores on the map — and a way to add a store that is missing.' }, { markerNumber: 3, title: '105 products listed', text: 'The recording shows the directory as it stood when it was filmed.' }, ], statsTitle: 'At a glance', stats: [ { chip: '01', text: 'A map of Ukrainian products in Canada.', sub: 'Search by city or product, and find the Canadian stores that carry them.' }, { chip: '02', text: 'One rule for every listing.', sub: 'Only products made in Ukraine. Every store is checked before it appears on the map.' }, ], image: '/buyukrainian-mobile-case4.mp4', }, { id: 'v2-4', title: 'Dorion Driving Academy', slug: 'dorion-driving-academy', subline: 'Case 04 · Dorion', hoverLabel: 'Tap to Zoom', annotations: [ { markerNumber: 1, title: 'Your progress at a glance', text: 'The dashboard shows 16 of 25 required lessons done, with an estimated completion date of August 26.' }, { markerNumber: 2, title: 'Pick a date and a time', text: 'May 2026: the 25th and a 90-minute slot at 09:00, chosen in a few taps.' }, { markerNumber: 3, title: 'Reschedule or cancel', text: 'The booked lesson offers Reschedule and Cancel. Cancelling confirms the refund is processed and a receipt is sent by email.' } ], statsTitle: 'At a glance', stats: [ { chip: '01', text: 'Booked from the phone, not the office.', sub: 'A mobile MVP for a driving school: pick a slot, book, reschedule or cancel — no phone tag with the school.' }, { chip: '02', text: 'Progress, visible.', sub: 'The dashboard tracks the lessons done and the estimated finish date, so students always know where they stand.' } ], image: '/dorion-driving-case4-framed-v2.mp4' },
    {
      id: 'v2-5',
      title: 'North & Co. / Knowledge agent',
      slug: 'north-co-knowledge-agent',
      subline: 'Employees in 40 stores need answers they can trust.\nSearching takes minutes — and the answer depends on who you ask.',
      hoverLabel: 'Tap to Zoom',
      demoUrl: 'https://north-co-knowledge-agent.vercel.app/',
      annotations: [
        { markerNumber: 1, title: 'Cited answers', text: 'Every claim carries a citation to the document it came from. No citation, no answer.' },
        { markerNumber: 2, title: 'A judge checks every draft', text: 'The judge grades each draft — grounded, correct, clear. A bad draft loops back for a fix, up to two retries.' },
        { markerNumber: 3, title: 'A human decides the hard ones', text: 'When the agent isn’t sure, the case goes to a person instead of guessing.' }
      ],
      statsTitle: 'Impact',
      stats: [
        {
          chip: 'Before',
          text: 'Answers depended on who you asked.',
          sub: "A simple question — 'what's the employee discount?' — meant minutes of searching through scattered documents, and the answer changed with the person you asked. Wrong answers cost real money: a wrong discount, a wrong return, a wrong procedure."
        },
        {
          chip: 'After',
          text: 'A checked answer in seconds',
          sub: "Ask a question, get a cited answer in seconds, with every step visible — retrieve, draft, judge, approve, log.\n\nThe judge catches bad answers before they reach anyone: the demo shows a clean pass, an honest unknown, and a bad draft caught and fixed. When the documents don't cover the question, the agent says 'I don't know' instead of inventing one."
        }
      ],
      image: '/assets/north-co/01-ask.png'
    },
  ];

  const [projectsList, setProjectsList] = useState(initialProjectsData);
  const visibleProjects = projectsList.filter((p) => TAB_CASE_IDS[activeTab].includes(p.id));
  useEffect(() => {
    document.querySelectorAll('[data-hover-card="true"] video').forEach((v) => {
      (v as HTMLVideoElement).pause();
    });
  }, [activeTab]);
    const selectedProject = projectsList.find((p) => p.id === selectedProjectId) ?? null;

  useEffect(() => {
    if (selectedProjectId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProjectId]);

  useEffect(() => {
    const track = scrollTrackRef.current;
    if (track && projectsList.length >= 2) {
      // A slightly longer timeout to ensure layout and browser scroll restoration have finished
      const timer = setTimeout(() => {
        if (track.children.length > 1) {
          const secondItem = track.children[1] as HTMLElement;
          const targetScroll = secondItem.offsetLeft - track.clientWidth / 2 + secondItem.clientWidth / 2;
          track.scrollTo({ left: targetScroll, behavior: 'instant' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [projectsList.length]);

  const renderProjectContent = (project: any, isModal = false) => (
    <div 
      className={`page-section-divider page-section-divider-work cinematic-section ${isModal ? 'modal-view' : 'preview-view'} ${project.id === 'v2-2' && !isModal ? 'guertin-theme' : ''}`}
      style={{ marginTop: 0, marginBottom: isModal ? '4rem' : 0 }}
    >
      <SectionDivider 
        label={project.title} 
        subline={project.subline}
        statsTitle={project.statsTitle}
        annotations={project.stats}
      >
        {project.demoUrl && (
          <div style={{ textAlign: 'center', margin: '0.5rem 0 0' }}>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-body), "Plus Jakarta Sans", sans-serif', fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.5, color: 'var(--color-heading-peach, #f2908f)', textDecoration: 'none' }}
            >
              See the live demo →
            </a>
          </div>
        )}
        <div 
          className={`project-section-block ${project.slug}-section`}
          style={{ width: '100%', margin: 0 }}
        >
          <motion.div
            initial={isModal ? { y: 120, opacity: 0.95 } : undefined}
            whileInView={isModal ? { y: 0, opacity: 1 } : undefined}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: '100%' }}
          >
            <div className="container project-row">
              <div className="project-body-grid">
                {/* Left Column: 1st Annotation */}
                <div className="project-sidebar-details project-sidebar-left">
                  <motion.div 
                    variants={isModal ? textVariant : undefined}
                    initial={isModal ? "hidden" : undefined}
                    whileInView={isModal ? "visible" : undefined}
                    viewport={{ once: true, amount: 0.2 }}
                    className="sidebar-col"
                  >
                    <div className="sidebar-bullet-content">
                      <span className="project-arrow"></span>
                      <div>
                        <div className="annotation-title">
                          {project.annotations[0].markerNumber} &mdash; {project.annotations[0].title}
                        </div>
                        <div className="annotation-desc">{project.annotations[0].text}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center Column: Visual */}
                <div className="project-visual">
                  <div className="visual-frame">
                    {project.id === 'v2-1' ? (
                      <PosterGallery 
                        images={[
                          {
                            src: '/assets/poster-tool/01-details-and-download.png',
                            stepLabel: 'Step 2–3 — One form drives the poster',
                            caption: 'City, date, location, schedule and the QR link go into one form. The preview updates live; download is one click.'
                          },
                          {
                            src: '/assets/poster-tool/02-full-editor.png',
                            stepLabel: 'Advanced editor',
                            caption: 'Move any block, tune the text. It stays behind one click, so the default flow stays simple.'
                          },
                          {
                            src: '/assets/poster-tool/03-templates.png',
                            stepLabel: 'Step 1 — Five locked templates',
                            caption: 'Print sizes 11×17, 8.5×11, A3, A4 and a Facebook format. Same design for every city.'
                          }
                        ]}
                      />
                    ) : project.id === 'v2-5' ? (
                      <PosterGallery
                        images={[
                          {
                            src: '/assets/north-co/01-ask.png',
                            stepLabel: 'Ask — One question, every step visible',
                            caption: 'The question goes in; the harness shows retrieve, draft, judge, loop, approve and log. Connect a key to try it live.'
                          },
                          {
                            src: '/assets/north-co/02-clean-pass.png',
                            stepLabel: 'A clean pass — Cited answer, judge approved',
                            caption: 'The employee discount is 30%, cited to the discount document. Judge verdict: PASS — grounded 1, clarity 1, confidence 1.'
                          },
                          {
                            src: '/assets/north-co/03-how-it-works.png',
                            stepLabel: 'How it works — The harness, step by step',
                            caption: 'Retrieve the right documents, draft from facts only, judge every claim, loop on a fail, escalate the uncertain to a human.'
                          }
                        ]}
                      />
                    ) : isModal && project.id === 'v2-2' ? (
                      <PosterGallery 
                        images={[
                          {
                            src: '/assets/guertin-desktop.png',
                            stepLabel: 'Desktop homepage — Credibility first & clear booking',
                            caption: '20 years of expertise stated up front, with clear claims services and direct consultation booking.'
                          },
                          {
                            src: '/assets/guertin-mobile.png',
                            stepLabel: 'Mobile homepage — Responsive access for clients in trouble',
                            caption: 'Plain-language expertise and one-tap calling, built for stressed homeowners on any phone.'
                          }
                        ]}
                      />
                    ) : (
                      <div className="guertin-preview-mockup-wrapper">
                        {/* Desktop Browser Window */}
                        <div className="guertin-preview-browser" style={(project.id === 'v2-3' || project.id === 'v2-4') ? { display: 'none' } : undefined}>
                          <div className="guertin-browser-header">
                            <div className="guertin-browser-dots">
                              <div className="guertin-browser-dot" />
                              <div className="guertin-browser-dot" />
                              <div className="guertin-browser-dot" />
                            </div>
                            <div className="guertin-browser-title">rguertin.ca</div>
                            <div style={{ width: '36px' }} />
                          </div>
                          <div className="guertin-browser-img-wrapper">
                            <img src="/assets/guertin-desktop.png" alt="Desktop Homepage" className="guertin-img" />
                          </div>
                        </div>

                        {/* Overlapping Phone Mockup */}
                        <div className="guertin-preview-phone" style={(project.id === 'v2-3' || project.id === 'v2-4') ? { position: 'static', width: '100%', maxWidth: '324px', margin: '0 auto 0 0' } : undefined}>
                          <div className="guertin-phone-inner" style={project.id === 'v2-4' ? { borderRadius: 0, backgroundColor: '#000000' } : undefined}>
                            <video 
                              src={project.id === 'v2-4' ? '/dorion-driving-case4-framed-v2.mp4' : project.id === 'v2-3' ? '/buyukrainian-mobile-case4.mp4' : '/assets/guertin-mobile-preview.mp4'}
                              autoPlay
                              loop
                              muted
                              playsInline
                              onTimeUpdate={(e) => {
                                if (e.currentTarget.currentTime >= (9999)) {
                                  e.currentTarget.currentTime = 0;
                                  e.currentTarget.play().catch(() => {});
                                }
                              }}
                              className="guertin-img"
                              style={project.id === 'v2-4' ? { width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' } : { width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: 2nd & 3rd Annotations */}
                <div className="project-sidebar-details project-sidebar-right">
                  {project.annotations.slice(1, 3).map((ann: any) => (
                    <motion.div 
                      key={ann.markerNumber}
                      variants={isModal ? textVariant : undefined}
                      initial={isModal ? "hidden" : undefined}
                      whileInView={isModal ? "visible" : undefined}
                      viewport={{ once: true, amount: 0.2 }}
                      className="sidebar-col"
                    >
                      <div className="sidebar-bullet-content">
                        <span className="project-arrow"></span>
                        <div>
                          <div className="annotation-title">
                            {ann.markerNumber} &mdash; {ann.title}
                          </div>
                          <div className="annotation-desc">{ann.text}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </SectionDivider>
    </div>
  );

  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const track = scrollTrackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const children = Array.from(track.children) as HTMLElement[];
      if (!children.length) return;
      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      let closestIdx = 0;
      let minDistance = Infinity;

      children.forEach((child, idx) => {
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const distance = Math.abs(trackCenter - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });
      setActiveCardIndex(closestIdx);
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, [projectsList.length]);

  return (
    <section className="projects-section" id="cases" style={{ position: 'relative', width: '100%', margin: '0 auto', padding: '1rem 0 2rem 0' }}>
      <style>{`
        .cases-grid-container {
          display: flex !important;
          flex-direction: row !important;
          justify-content: space-between !important;
          align-items: center !important;
          gap: 2.5rem !important;
          width: 100% !important;
          margin: 0 auto !important;
          padding: 0 var(--space-md, 2rem) !important;
          box-sizing: border-box !important;
        }
        @media (min-width: 1200px) {
          .cases-grid-container {
            /* Match .header-inner-wrapper (1440 * 0.88 = 1267.2px, padding 1.76rem) so left & right edges align with Header */
            max-width: 1267.2px !important;
            padding: 0 1.76rem !important;
          }
          .cases-tabs {
            max-width: 1267.2px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            padding-left: 1.76rem !important;
            padding-right: 1.76rem !important;
            justify-content: flex-end !important;
            box-sizing: border-box !important;
          }
        }
        @media (max-width: 900px) {
          .cases-grid-container {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 5rem !important; /* doubled spacing between cases on mobile */
            padding: 0 1.5rem !important;
          }
        }
        @media (min-width: 901px) { .cases-grid-container { display: grid !important; grid-template-columns: auto auto !important; } } .cases-grid-item {
          width: fit-content !important;
          flex: 0 0 auto !important;
          min-width: 0 !important;
          max-width: 100% !important;
          overflow: visible !important;
          box-sizing: border-box !important;
        }
        @media (max-width: 900px) {
                 @media (min-width: 901px) { .cases-grid-container { display: grid !important; grid-template-columns: auto auto !important; } } .cases-grid-item {
            width: 100% !important;
          }
        }

        .preview-item-container {
          position: relative;
          z-index: 1;
        }
        .preview-item-container:hover,
        .preview-item-container:focus-within {
          z-index: 20;
        }

        /* --- Clean Recording Cards: Zero Shadow, Less Corner Radius, Silver-Grey Hairline Border, +30% Desktop Size --- */
        .preview-card-wrapper.recording-card-wrapper {
          background: transparent !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          overflow: visible !important;
          height: 442px !important; /* +30% larger on desktop from 340px */
          aspect-ratio: auto !important;
          padding: 0 !important;
          width: fit-content !important;
        }
        @media (max-width: 900px) {
          .preview-card-wrapper.recording-card-wrapper {
            width: 100% !important;
          }
        }
        .preview-item-container:hover .preview-card-wrapper.recording-card-wrapper,
        .preview-item-container:focus-within .preview-card-wrapper.recording-card-wrapper {
          box-shadow: none !important;
          outline: none !important;
        }

        /* Desktop Case Frame - +30% larger, zero shadow, zero corner radius, Apple-style hairline thin light grey border */
        .case-desktop-frame {
          position: relative;
          width: min(56vw, 731px) !important; /* +30% larger on desktop from 562px */
          max-width: 100% !important;
          aspect-ratio: 16 / 8.8 !important;
          height: auto !important;
          background: #ffffff;
          border-radius: 0px !important;
          padding: 0 !important;
          border: 1px solid #dcdce0 !important;
          outline: none !important;
          box-shadow: none !important;
          box-sizing: border-box;
          display: flex;
          overflow: hidden;
          transform-origin: left center;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease;
        }
        .preview-item-container:hover .case-desktop-frame {
          transform: scale(1.04) translateY(-3px);
          border-color: #c8c8cd !important;
          box-shadow: none !important;
        }

        /* Phone Case Frame - +30% larger, zero shadow, zero corner radius, Apple-style hairline thin light grey border */
        .case-phone-frame {
          position: relative;
          height: min(32vw, 420px) !important; /* +30% larger on desktop from 323px */
          max-height: 100% !important;
          aspect-ratio: 292 / 640 !important;
          width: auto !important;
          background: #ffffff;
          border-radius: 0px !important;
          padding: 0 !important;
          border: 1px solid #dcdce0 !important;
          outline: none !important;
          box-shadow: none !important;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transform-origin: right center;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease;
        }
        .preview-item-container:hover .case-phone-frame {
          transform: scale(1.04) translateY(-3px);
          border-color: #c8c8cd !important;
          box-shadow: none !important;
        }

        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .case-desktop-frame,
          .case-phone-frame {
            border-width: 0.5px !important;
            border-color: #d2d2d7 !important;
          }
        }

        .case-recording-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 0px !important;
          border: none !important;
          outline: none !important;
        }

        @media (max-width: 900px) {
          @media (min-width: 901px) { .cases-grid-container { display: grid !important; grid-template-columns: auto auto !important; } } .cases-grid-item {
            overflow: visible !important;
          }
          .preview-card-wrapper.recording-card-wrapper {
            aspect-ratio: auto !important;
            height: auto !important;
            padding: 0.5rem 0 !important;
          }
          .case-desktop-frame {
            width: min(70vw, 252px) !important;
            aspect-ratio: 16 / 8.8 !important;
            height: auto !important;
            border-radius: 0px !important;
            box-shadow: none !important;
            border: 1px solid #dcdce0 !important;
            transform-origin: center center;
          }
          .case-phone-frame {
            width: min(46vw, 173px) !important;
            height: auto !important;
            aspect-ratio: 292 / 640 !important;
            border-radius: 0px !important;
            box-shadow: none !important;
            border: 1px solid #dcdce0 !important;
            transform-origin: center center;
          }
          @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            .case-desktop-frame,
            .case-phone-frame {
              border-width: 0.5px !important;
              border-color: #d2d2d7 !important;
            }
          }
        }
      `}</style>
      
      
      {/* Section Heading: Examples of My Work — Narrative Scroll-Arrival Choreography */}
      <div className="cases-header-block" style={{ marginBottom: '0.875rem', textAlign: 'center', padding: '0 1.5rem' }}>
        {/* 1. Architectural hairline draws outward from center */}
        <motion.div
          className="cases-decor-line"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '60px',
            height: '1px',
            backgroundColor: '#2d3139',
            margin: '0 auto 2.5rem auto',
            transformOrigin: 'center'
          }}
        />

        {/* 2. Section title rises with editorial authority */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: 'clamp(28px, 4.4vw, 42px)',
            color: 'var(--color-heading-silver)',
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            textAlign: 'center',
            width: '100%',
            margin: '0 auto 14px auto',
            WebkitTextStroke: '0',
            textWrap: 'balance'
          }}
        >
          <span style={{ fontWeight: 400, color: 'var(--color-heading-silver, #4a5461)' }}>Examples of </span><span style={{ fontWeight: 400, color: 'var(--color-heading-silver, #4a5461)' }}>My Work</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)',
            fontWeight: 300,
            lineHeight: 1.55,
            color: 'var(--color-body-dark, #2b3038)',
            maxWidth: '640px',
            margin: '0 auto 14px auto',
            textAlign: 'center',
            letterSpacing: '-0.01em'
          }}
        >
          ...or how I approach problems
        </motion.p>

              <div className="cases-tabs" role="tablist" aria-label="Case categories" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', width: '100%', margin: '56px 0 0', padding: '0', boxSizing: 'border-box' }}>
        {([
          { id: 'internal-tools', label: 'Internal Apps' },
          { id: 'websites', label: 'Websites' },
          { id: 'workflow-automations', label: 'Workflow Automations' },
        ] as const).map((tab, index) => (
          <Fragment key={tab.id}>
            {index > 0 && <span aria-hidden="true" style={{ color: '#989898', fontFamily: 'var(--font-body)', fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)', fontWeight: 300, lineHeight: 1.55, letterSpacing: '-0.011em', padding: '0 0.15rem' }}>/</span>}
            <button type="button" role="tab" aria-selected={activeTab === tab.id} onClick={() => setActiveTab(tab.id)} style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)', fontWeight: activeTab === tab.id ? 400 : 300, lineHeight: 1.55, letterSpacing: '-0.011em', color: activeTab === tab.id ? '#2b3038' : '#989898', backgroundColor: 'transparent', border: 'none', borderRadius: 0, padding: 0, cursor: 'pointer' }}>
              {tab.label}
            </button>
          </Fragment>
        ))}
      </div>
        
      </div>
      
      {/* 2x2 Grid Wrapper — Gallery Reveal Motion */}
      <div 
        className="cases-grid-wrapper"
        style={{ 
          width: '100%', 
          paddingBottom: '1.5rem',
          paddingTop: '0.375rem'
        }}
      >
        <div className="cases-grid-container">
          {visibleProjects.map((project, idx) => {
            return (
              <motion.div 
                key={`${project.id}-${idx}`}
                className="cases-grid-item"
                initial={{ opacity: 0, y: 36, scale: 0.965 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.85,
                  delay: 0.12 + idx * 0.16,
                  ease: [0.16, 1, 0.3, 1]
                }}
                style={{ 
                  width: '100%'
                }}
              >
                <div 
                  className="preview-item-container"
                  role="region"
                  aria-label={`${project.title} case preview`}
                >
                  <div 
                    className="preview-card-wrapper recording-card-wrapper"
                    onClick={() => setSelectedProjectId(project.id)}
      data-hover-card={HOVER_MEDIA[project.id] ? 'true' : undefined}
      onMouseEnter={(e) => { if (HOVER_MEDIA[project.id]) { setHoveredProjectId(project.id); const v = e.currentTarget.querySelector('video') as HTMLVideoElement | null; if (v) { v.currentTime = 0; v.play().catch(() => {}); } } }}
      onMouseLeave={(e) => { if (HOVER_MEDIA[project.id]) { setHoveredProjectId(null); const v = e.currentTarget.querySelector('video') as HTMLVideoElement | null; if (v) { v.pause(); } } }}
                    style={{ cursor: 'pointer' }}
                  >
                    {project.id === 'v2-2' || project.id === 'v2-3' || project.id === 'v2-4' ? (
                      <div className="case-phone-frame" style={project.id === 'v2-4' ? { border: 'none', backgroundColor: '#000000' } : undefined}>
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          onTimeUpdate={(e) => {
                            if (e.currentTarget.currentTime >= (9999)) {
                              e.currentTarget.currentTime = 0;
                              e.currentTarget.play().catch(() => {});
                            }
                          }}
                          src={project.id === 'v2-4' ? '/dorion-driving-case4-framed-v2.mp4' : project.id === 'v2-3' ? '/buyukrainian-mobile-case4.mp4' : '/isabelle-desktop-hover.mp4'}
                          className="case-recording-video" style={project.id === 'v2-4' ? { objectFit: 'contain', backgroundColor: '#000000' } : undefined}
          />
          {HOVER_MEDIA[project.id] && (
            <img src={HOVER_MEDIA[project.id].staticSrc} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: hoveredProjectId === project.id ? 0 : 1, transition: 'opacity 0.25s ease', pointerEvents: 'none', zIndex: 2 }} />
          )}
                      </div>
                    ) : project.id === 'v2-5' ? (
                      <div className="case-desktop-frame">
                        <img src={project.image} alt={project.title} className="case-recording-video" />
                      </div>
                    ) : (
                      <div className="case-desktop-frame">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          onTimeUpdate={(e) => {
                            if (e.currentTarget.currentTime >= (9999)) {
                              e.currentTarget.currentTime = 0;
                              e.currentTarget.play().catch(() => {});
                            }
                          }}
                          src="/terry-fox-desktop-hover.mp4"
                          className="case-recording-video" style={project.id === 'v2-4' ? { objectFit: 'contain', backgroundColor: '#000000' } : undefined}
          />
          {HOVER_MEDIA[project.id] && (
            <img src={HOVER_MEDIA[project.id].staticSrc} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: hoveredProjectId === project.id ? 0 : 1, transition: 'opacity 0.25s ease', pointerEvents: 'none', zIndex: 2 }} />
          )}
                      </div>
                    )}
                  </div>
                  <div className="preview-card-caption">
                    <button 
                      type="button"
                      className="preview-card-caption-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProjectId(project.id);
                      }}
                      aria-label={`Tap to zoom ${project.title}`}
                    >
                      Tap to Zoom <span style={{ color: '#717885', marginLeft: '4px' }}>&rarr;</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProjectId && selectedProject && (
          <motion.div 
            className="project-modal-overlay"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedProjectId(null)}
          >
            <motion.div 
              className="project-modal-content" 
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={() => setSelectedProjectId(null)}>
                ✕
              </button>
              {renderProjectContent(selectedProject, true)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
