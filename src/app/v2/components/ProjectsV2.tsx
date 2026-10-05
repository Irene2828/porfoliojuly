'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@/app/components/Projects.css';
import SectionDivider from '@/app/components/SectionDivider';
import GuertinProject from './GuertinProject';
import GenericWhiteCard from './GenericWhiteCard';

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
      title: 'Ukraine Case 1',
      slug: 'ukraine-case-1',
      subline: 'Custom platform for Ukraine relief efforts',
      annotations: [
        { markerNumber: 1, title: 'AI Qualification', text: 'Engages inbound lead inquiries & volunteer requests automatically.' },
        { markerNumber: 2, title: 'Instant Canvas Sync', text: 'Generates personalized localized campaign graphics in seconds.' },
        { markerNumber: 3, title: 'CRM Integration', text: 'Syncs data directly with Hubspot & internal tracking tools.' }
      ],
      stats: [
        { chip: 'Problem', text: 'Manual campaign delays', stat: '4.8h', statLabel: 'old delay' },
        { chip: 'Built with', text: 'Next.js, Canvas Engine & AI API', stat: '< 30s', statLabel: 'build time' },
        { chip: 'Impact', text: 'Empowered volunteers across 25+ countries', stat: '+340%', statLabel: 'campaign reach' }
      ],
      image: initialProjects[0]?.screens?.[0]?.originalUrl || '/skills.png'
    },
    {
      id: 'v2-2',
      title: 'Ukraine Case 2',
      slug: 'ukraine-case-2',
      subline: 'Logistics and tracking platform for Ukraine',
      annotations: [
        { markerNumber: 1, title: 'Doc Parsing', text: 'Extracts key structured fields from PDFs and receipts instantly.' },
        { markerNumber: 2, title: 'Smart Validation', text: 'Flags discrepancies and potential fraud markers in real time.' },
        { markerNumber: 3, title: 'Instant Routing', text: 'Pushes verified cases to claims managers for one-click approval.' }
      ],
      stats: [
        { chip: 'Problem', text: 'Slow manual claim reviews', stat: '48h', statLabel: 'old turnaround' },
        { chip: 'Built with', text: 'Gemini Vision, Next.js & Postgres', stat: '2.5 min', statLabel: 'new processing' },
        { chip: 'Impact', text: 'Automated 85% of standard intake processing', stat: '85%', statLabel: 'auto-processed' }
      ],
      image: initialProjects[1]?.screens?.[0]?.originalUrl || '/skills.png'
    }
  ];

  const [projectsList, setProjectsList] = useState(initialProjectsData);

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
                    <div className="flat-screen">
                      <img src={project.image} alt={project.title} />
                    </div>
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

  const selectedProject = projectsList.find(p => p.id === selectedProjectId);

  return (
    <section className="projects-section" id="cases" style={{ position: 'relative', width: '100%', margin: '0 auto', padding: '1rem 0', overflow: 'hidden' }}>
      {/* Top Edge-to-Edge 1px Subtle Grey Divider Bar */}
      <div 
        className="process-divider"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '1px',
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
          zIndex: 10
        }}
      />
      <style>{`
        .cases-scroll-track {
          display: flex;
          gap: 2.5rem;
          width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          overscroll-behavior-x: contain;
          touch-action: pan-x pan-y;
          scroll-snap-type: x proximity;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
          padding: 0 2rem; /* Small edge padding */
        }
        .cases-scroll-track::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }
        .cases-scroll-row-item {
          scroll-snap-align: center;
          scroll-snap-stop: always;
        }
        @media (max-width: 900px) {
          .cases-scroll-track {
            padding: 0 calc(50vw - 42.5vw); /* Center padding for 85vw cards */
            gap: 1.5rem;
          }
          .cases-scroll-row-item {
            flex: 0 0 85vw !important;
            min-width: 300px !important;
          }
        }
      `}</style>
      
      {/* Scroll Container Wrapper */}
      <div 
        style={{ 
          width: '100%', 
          paddingBottom: '2rem',
          paddingTop: '2.5rem'
        }}
      >
        <div className="cases-scroll-track" ref={scrollTrackRef}>
          {(projectsList.length >= 2 ? [projectsList[1], projectsList[0], projectsList[1]] : projectsList).map((project, idx) => {
            const isNavyCard = project.id === 'v2-2';
            return (
              <div 
                key={`${project.id}-${idx}`}
                className="cases-scroll-row-item"
                style={{ 
                  flex: '0 0 calc(45vw - 2.25rem)',
                  minWidth: '540px',
                  maxWidth: '720px'
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
                        <GuertinProject />
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
                    EXPAND CASE &rarr;
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

      {/* Bottom Edge-to-Edge 1px Subtle Grey Divider Bar */}
      <div 
        className="process-divider"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '1px',
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
          zIndex: 10
        }}
      />
    </section>
  );
}
