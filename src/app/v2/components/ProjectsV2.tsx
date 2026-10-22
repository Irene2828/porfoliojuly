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
      stats: [
        { 
          chip: 'Before', 
          text: 'Designers were the bottleneck', 
          stat: 'Days', 
          statLabel: 'before',
          sub: 'Every poster made by hand, one at a time. Local teams waited days for a single poster.' 
        },
        { 
          chip: 'Build time', 
          text: 'Locked template poster tool', 
          stat: 'Minutes', 
          statLabel: 'build time',
          sub: 'Pick a template, fill in the fields, download a print-ready file (PNG, JPEG or PDF).' 
        },
        { 
          chip: 'Result', 
          text: 'On-brand posters in minutes, with owner review', 
          stat: '5 formats', 
          statLabel: 'result',
          sub: 'One set of details generates the full poster set for any city — no designer in the loop.' 
        }
      ],
      image: '/assets/poster-tool/01-details-and-download.png'
    },
    {
      id: 'v2-2',
      title: 'Guertin Isabelle // Claims adjuster website',
      slug: 'guertin-isabelle',
      subline: 'An expert whose old website didn’t show it.',
      hoverLabel: 'Tap to Zoom',
      annotations: [
        { markerNumber: 1, title: 'Trust First', text: 'Earns credibility and authority immediately on landing.' },
        { markerNumber: 2, title: 'Clear Value', text: 'Presents expertise clearly so visitors understand the offer.' },
        { markerNumber: 3, title: 'Easy Booking', text: 'Makes scheduling a consultation straightforward and quick.' }
      ],
      stats: [
        { chip: 'Before', text: 'Outdated online presence failing to show expertise', stat: 'outdated presence', statLabel: 'before' },
        { chip: 'Built with', text: 'Modern Next.js web architecture', stat: 'Fast', statLabel: 'performance' },
        { chip: 'Result', text: 'Trust-first presence with seamless consultation booking', stat: '[add after launch]', statLabel: 'result' }
      ],
      image: initialProjects[1]?.screens?.[0]?.originalUrl || '/skills.png'
    },
    {
      id: 'v2-3',
      title: 'Community map // Volunteer coordination',
      slug: 'community-map-project',
      subline: 'Aid requests were scattered across six chat apps.',
      hoverLabel: 'Tap to Zoom',
      annotations: [
        { markerNumber: 1, title: 'One Live Map', text: 'Puts all mutual aid requests onto a single coordinated map.' },
        { markerNumber: 2, title: 'Role Access', text: 'Assigned roles keep coordinators and volunteers aligned.' },
        { markerNumber: 3, title: 'Offline Access', text: 'Reliable access in field zones with poor connectivity.' }
      ],
      stats: [
        { chip: 'Before', text: 'Aid requests scattered across chat channels', stat: '6+ apps', statLabel: 'before' },
        { chip: 'Built with', text: 'Live map platform with roles & offline support', stat: '1 map', statLabel: 'unified' },
        { chip: 'Result', text: 'Coordinated mutual aid response across regions', stat: '[real number]', statLabel: 'result' }
      ],
      image: initialProjects[0]?.screens?.[0]?.originalUrl || '/skills.png'
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
      className={`page-section-divider page-section-divider-work cinematic-section ${isModal ? 'modal-view' : 'preview-view'}`}
      style={{ marginTop: 0, marginBottom: isModal ? '4rem' : 0 }}
    >
      <SectionDivider 
        label={project.title} 
        subline={project.subline}
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
                    ) : (
                      <div className="flat-screen">
                        <img src={project.image} alt={project.title} />
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

              {/* Three Text Blocks under gallery in Modal: BRIEF / DECISIONS / IMPACT */}
              {isModal && project.id === 'v2-1' && (
                <div 
                  className="poster-tool-narrative-blocks"
                  style={{
                    marginTop: '3.5rem',
                    paddingTop: '2.5rem',
                    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2.5rem',
                    textAlign: 'left'
                  }}
                >
                  <div className="narrative-block">
                    <div style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--accent, #3ba3b8)',
                      marginBottom: '10px'
                    }}>
                      BRIEF
                    </div>
                    <p style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '14px',
                      lineHeight: '1.65',
                      color: 'var(--color-body-dark, #2b3038)',
                      margin: 0
                    }}>
                      The Terry Fox Run happens in many cities at once. Every local team needs posters with its own city, date, location and registration link — and every poster used to be designed by hand. Designers became the bottleneck, teams waited days, and keeping every poster on-brand depended on whoever made it.
                    </p>
                  </div>

                  <div className="narrative-block">
                    <div style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--accent, #3ba3b8)',
                      marginBottom: '10px'
                    }}>
                      DECISIONS
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '14px',
                      lineHeight: '1.65',
                      color: 'var(--color-body-dark, #2b3038)',
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}>
                      <div>• <strong>Locked templates</strong> — layout, fonts and brand are fixed; only the text can change, so a poster cannot go off-brand.</div>
                      <div>• <strong>Type once, update everywhere</strong> — one set of fields (city, date, location, schedule, QR link) fills all five formats at once.</div>
                      <div>• <strong>Smart QR built in</strong> — the registration link is typed once and the QR code is generated on the poster, ready to test before download.</div>
                      <div>• <strong>Simple by default, deep on demand</strong> — the 3-step flow covers most posters; the full editor with placement controls is one click away, not in the way.</div>
                      <div>• <strong>Human in control</strong> — drafts, undo and restore; the owner reviews and approves the final poster. Nothing goes out automatically.</div>
                    </div>
                  </div>

                  <div className="narrative-block">
                    <div style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--accent, #3ba3b8)',
                      marginBottom: '10px'
                    }}>
                      IMPACT
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '14px',
                      lineHeight: '1.65',
                      color: 'var(--color-body-dark, #2b3038)',
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}>
                      <div>• <strong>Minutes instead of days</strong> — work that took days of back-and-forth now takes minutes, done by local teams themselves without designers in the loop.</div>
                      <div>• <strong>Agent-ready architecture</strong> — the clean underlying structure allows modern AI agents to operate the tool and populate fields directly, speeding up the workflow even further when batches of posters need to be generated.</div>
                    </div>
                  </div>
                </div>
              )}
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
          overflow: hidden !important;
          box-sizing: border-box !important;
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
          <span style={{ fontWeight: 400, color: 'var(--color-heading-silver, #4a5461)' }}>Recent problems. </span><span style={{ fontWeight: 700, color: '#3ba3b8', WebkitTextFillColor: '#3ba3b8' }}>Solved.</span>
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
            const isNavyCard = project.id === 'v2-2' || project.id === 'v2-4';
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
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${project.title} case study`}
                  onClick={() => setSelectedProjectId(project.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProjectId(project.id);
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="preview-card-wrapper">
                    <div className="preview-card-scaler">
                      {isNavyCard ? (
                        <GuertinProject 
                          title={project.title}
                          subline={project.subline}
                          kicker="GUERTIN ISABELLE // Claims adjuster website"
                          browserTitle="Guertin Isabelle"
                          cardsTitle="An expert whose old website didn’t show it."
                        />
                      ) : project.id === 'v2-1' ? (
                        renderProjectContent(project, false)
                      ) : (
                        <GenericWhiteCard 
                          title={project.title}
                          subline={project.subline}
                          annotations={project.annotations}
                          stats={project.stats}
                          image={project.image}
                        />
                      )}
                    </div>
                  </div>
                  <div className="preview-card-caption">
                    Tap to Zoom <span style={{ color: '#717885', marginLeft: '4px' }}>&rarr;</span>
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
