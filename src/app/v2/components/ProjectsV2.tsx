'use client';

import { useState, useEffect, useRef } from 'react';
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
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  const initialProjectsData = [
    {
      id: 'v2-1',
      title: 'Terry Fox Foundation / Internal Poster tool',
      slug: 'terry-fox-run',
      subline: 'Volunteers in every city need on brand customized posters.\nTeam designers - too busy with big tasks.',
      hoverLabel: 'Tap to Zoom',
      annotations: [
        { markerNumber: 1, title: 'Locked Template', text: 'Anyone can make an on-brand poster in minutes.' },
        { markerNumber: 2, title: 'Simple by default, deep on demand', text: 'The 3-step flow covers most posters; the full editor with placement controls is one click away, not in the way.' },
        { markerNumber: 3, title: 'Human in Control', text: 'The poster’s owner reviews and approves everything.' }
      ],
      statsTitle: 'Impact',
      stats: [
        { 
          chip: 'Before', 
          text: 'Designers were the bottleneck.', 
          sub: "Every poster had to be made by hand, in Figma, one at a time. Volunteers worldwide had to wait days for a single poster. They don't use Figma, managers too. Posters need to be on-brand, so no random AI generation allowed. Solution I offered? An internal tool to make them fast, always on brand, for both non-tech or tech-savvy users." 
        },
        { 
          chip: 'After', 
          text: 'Minutes instead of days', 
          sub: "Work that took days now takes minutes, done by volunteers or Foundation's managers without designers in the loop.\n\n5 formats to start & agent-ready: One set of details fills all 5 formats at once. Clean structure allows AI agents to populate fields directly. But it's still human who previews, edits or approves a poster for the event." 
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
          sub: "The site now presents her at the level she works at. A client in trouble can understand what she does, see proof that it works, and reach her in one step — and a municipality sees a specialist, not a generalist. Live at rguertin.ca." 
        }
      ],
      image: '/assets/guertin-desktop.png'
    }
  ];

  const [projectsList, setProjectsList] = useState(initialProjectsData);  const selectedProject = projectsList.find((p) => p.id === selectedProjectId) ?? null;

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
                            caption: 'Step 2–3 — One form drives the poster: city, date, location, schedule and the QR link. The preview updates live; download is one click.'
                          },
                          {
                            src: '/assets/poster-tool/02-full-editor.png',
                            stepLabel: 'Advanced editor',
                            caption: 'Advanced editor — move any block, tune the text. It stays behind one click, so the default flow stays simple.'
                          },
                          {
                            src: '/assets/poster-tool/03-templates.png',
                            stepLabel: 'Step 1 — Five locked templates',
                            caption: 'Step 1 — Five locked templates: print sizes 11×17, 8.5×11, A3, A4 and a Facebook format. Same design for every city.'
                          }
                        ]}
                      />
                    ) : isModal ? (
                      <PosterGallery 
                        images={[
                          {
                            src: '/assets/guertin-desktop.png',
                            stepLabel: 'Desktop homepage — Credibility first & clear booking',
                            caption: 'Desktop homepage — 20 years of expertise stated up front with clear claims services and direct consultation booking.'
                          },
                          {
                            src: '/assets/guertin-mobile.png',
                            stepLabel: 'Mobile homepage — Responsive access for clients in trouble',
                            caption: 'Mobile homepage — Plain-language expertise and one-tap calling optimized for stressed homeowners on any phone.'
                          }
                        ]}
                      />
                    ) : (
                      <div className="guertin-preview-mockup-wrapper">
                        {/* Desktop Browser Window */}
                        <div className="guertin-preview-browser">
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
                        <div className="guertin-preview-phone">
                          <div className="guertin-phone-inner">
                            <video 
                              src="/assets/guertin-mobile-preview.mp4"
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="guertin-img"
                              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
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
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 3.5rem 2.5rem !important;
          width: 100% !important;
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 2rem !important;
          box-sizing: border-box !important;
        }
        @media (max-width: 900px) {
          .cases-grid-container {
            grid-template-columns: 1fr !important;
            gap: 5rem !important; /* doubled spacing between cases on mobile */
            padding: 0 1.5rem !important;
          }
        }
        .cases-grid-item {
          width: 100% !important;
          min-width: 0 !important;
          max-width: 100% !important;
          overflow: visible !important;
          box-sizing: border-box !important;
        }

        .preview-item-container {
          position: relative;
          z-index: 1;
        }
        .preview-item-container:hover,
        .preview-item-container:focus-within {
          z-index: 20;
        }

        /* --- Clean Recording Cards with Rounded Shadows --- */
        .preview-card-wrapper.recording-card-wrapper {
          background: transparent !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          overflow: visible !important;
          height: 340px !important; /* +20% larger on desktop from 282px */
          aspect-ratio: auto !important;
          padding: 6px !important;
        }
        .preview-item-container:hover .preview-card-wrapper.recording-card-wrapper,
        .preview-item-container:focus-within .preview-card-wrapper.recording-card-wrapper {
          box-shadow: none !important;
          outline: none !important;
        }

        /* Desktop Case Frame - +20% larger with rounded shadow */
        .case-desktop-frame {
          position: relative;
          width: 562px !important; /* +20% larger on desktop from 468px */
          max-width: 95% !important;
          aspect-ratio: 16 / 8.8 !important;
          height: auto !important;
          background: #000;
          border-radius: 16px;
          padding: 0 !important;
          border: 1px solid rgba(18, 22, 32, 0.09) !important;
          box-shadow: 0 18px 44px -10px rgba(18, 22, 32, 0.2), 0 4px 12px -2px rgba(18, 22, 32, 0.08);
          box-sizing: border-box;
          display: flex;
          overflow: hidden;
          transform-origin: center center;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .preview-item-container:hover .case-desktop-frame {
          transform: scale(1.08) translateY(-4px);
          box-shadow: 0 28px 60px -12px rgba(18, 22, 32, 0.28), 0 8px 20px -4px rgba(18, 22, 32, 0.12);
        }

        /* Phone Case Frame - +20% larger with rounded shadow */
        .case-phone-frame {
          position: relative;
          height: 323px !important; /* +20% larger on desktop from 269px */
          max-height: 100% !important;
          aspect-ratio: 292 / 640 !important;
          width: auto !important;
          background: #000;
          border-radius: 28px;
          padding: 0 !important;
          border: 1px solid rgba(18, 22, 32, 0.09) !important;
          box-shadow: 0 18px 44px -10px rgba(18, 22, 32, 0.2), 0 4px 12px -2px rgba(18, 22, 32, 0.08);
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transform-origin: center center;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .preview-item-container:hover .case-phone-frame {
          transform: scale(1.08) translateY(-4px);
          box-shadow: 0 28px 60px -12px rgba(18, 22, 32, 0.28), 0 8px 20px -4px rgba(18, 22, 32, 0.12);
        }

        .case-recording-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: inherit;
          border: none !important;
          outline: none !important;
        }

        @media (max-width: 900px) {
          .cases-grid-item {
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
            border-radius: 12px;
            box-shadow: 0 12px 28px -8px rgba(18, 22, 32, 0.18), 0 3px 8px -2px rgba(18, 22, 32, 0.08) !important;
            border: 1px solid rgba(18, 22, 32, 0.09) !important;
          }
          .case-phone-frame {
            width: min(46vw, 173px) !important;
            height: auto !important;
            aspect-ratio: 292 / 640 !important;
            border-radius: 20px;
            box-shadow: 0 12px 28px -8px rgba(18, 22, 32, 0.18), 0 3px 8px -2px rgba(18, 22, 32, 0.08) !important;
            border: 1px solid rgba(18, 22, 32, 0.09) !important;
          }
        }
      `}</style>
      
      
      {/* Section Heading: For Every Problem There is a Solution. */}
      <div className="cases-header-block" style={{ marginBottom: '1.75rem', textAlign: 'center', padding: '0 1.5rem' }}>
        {/* Short decor line */}
        <div className="cases-decor-line" style={{
          width: '60px',
          height: '1px',
          backgroundColor: '#2d3139',
          margin: '0 auto 2.5rem auto',
          opacity: 0.9
        }} />

        <h2 style={{
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
        }}>
          <span style={{ fontWeight: 400, color: 'var(--color-heading-silver, #4a5461)' }}>Recent </span><span style={{ fontWeight: 700, color: 'var(--color-heading-silver, #4a5461)' }}>cases</span>
        </h2>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: '17px',
          fontWeight: 400,
          lineHeight: 1.6,
          color: 'var(--color-body-dark, #2b3038)',
          opacity: 0.9,
          maxWidth: '640px',
          margin: '0 auto',
          textAlign: 'center',
          letterSpacing: '-0.01em',
          fontStyle: 'italic'
        }}>
          What I designed, built, and why.
        </p>
      </div>
      
      {/* 2x2 Grid Wrapper */}
      <div 
        className="cases-grid-wrapper"
        style={{ 
          width: '100%', 
          paddingBottom: '1.5rem',
          paddingTop: '1.5rem'
        }}
      >
        <div className="cases-grid-container">
          {projectsList.map((project, idx) => {
            return (
              <div 
                key={`${project.id}-${idx}`}
                className="cases-grid-item"
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
                    style={{ cursor: 'pointer' }}
                  >
                    {project.id === 'v2-2' ? (
                      <div className="case-phone-frame">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          src="/assets/guertin-mobile-preview.mp4"
                          className="case-recording-video"
                        />
                      </div>
                    ) : (
                      <div className="case-desktop-frame">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          src="/assets/terry-fox-preview.mp4"
                          className="case-recording-video"
                        />
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
              </div>
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
