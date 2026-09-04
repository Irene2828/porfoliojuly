'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@/app/components/Projects.css';
import SectionDivider from '@/app/components/SectionDivider';

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

  const baseProject = {
    title: 'Workflow Automation',
    slug: 'workflow-automation',
    subline: 'Terry Fox Foundation asked for something to make posters easier for volunteers worldwide',
    annotations: [
      { markerNumber: 1, title: 'AI Qualification', text: 'Engages inbound leads in real time, assessing fit and capturing project parameters automatically.' },
      { markerNumber: 2, title: 'Instant Scheduling', text: 'Directly syncs qualified leads into calendar slots with zero back-and-forth emails.' },
      { markerNumber: 3, title: 'CRM Integration', text: 'Pushes enriched lead profiles straight into hubspot/CRM for immediate team follow-up.' }
    ],
    stats: [
      { chip: 'Problem', text: 'Lost leads due to delayed response times', stat: '4.8h', statLabel: 'old delay' },
      { chip: 'Built with', text: 'AI Agents, Next.js & Webhooks', stat: '< 30s', statLabel: 'response time' },
      { chip: 'Impact', text: 'Automated 70% of initial consultation setup', stat: '+340%', statLabel: 'lead conversion' }
    ],
    image: initialProjects[0]?.screens?.[0]?.originalUrl || '/skills.png'
  };

  const v2Projects = [
    { id: 'v2-1', ...baseProject },
    { id: 'v2-2', ...baseProject },
    { id: 'v2-3', ...baseProject },
    { id: 'v2-4', ...baseProject }
  ];

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
            initial={isModal ? { y: 120, opacity: 0.95 } : false}
            whileInView={isModal ? { y: 0, opacity: 1 } : false}
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

  const selectedProject = v2Projects.find(p => p.id === selectedProjectId);

  return (
    <section className="projects-section" id="work">
      <div className="hairline-divider"></div>
      
      <div className="projects-gallery-grid">
        {v2Projects.map((project) => (
          <div 
            key={project.id} 
            className="preview-item-container"
            onClick={() => setSelectedProjectId(project.id)}
          >
            <div className="preview-card-wrapper">
              <div className="preview-card-scaler">
                {renderProjectContent(project, false)}
              </div>
            </div>
            <div className="preview-card-caption">
              Expand project ↗
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProjectId && selectedProject && (
          <motion.div 
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProjectId(null)}
          >
            <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setSelectedProjectId(null)}>
                CLOSE ✕
              </button>
              {renderProjectContent(selectedProject, true)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
