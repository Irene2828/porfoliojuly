'use client';

import { motion } from 'framer-motion';
import './Projects.css';
import SectionDivider from './SectionDivider';

// Motion transition config for text elements
const textVariant = {
  hidden: { y: 25, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  }
};

interface Annotation {
  id: string;
  markerNumber: number;
  title: string;
  explanation: string;
  x: number;
  y: number;
}

interface Screen {
  id: string;
  originalUrl: string;
  altText: string | null;
  annotations: Annotation[];
}

interface Project {
  id: string;
  title: string;
  slug: string;
  caseStudyIntro: string | null;
  problem: string | null;
  buildApproach: string | null;
  impact: string | null;
  bullet1: string | null;
  bullet2: string | null;
  bullet3: string | null;
  screens: Screen[];
}

interface ProjectsProps {
  initialProjects: Project[];
}

export default function Projects({ initialProjects }: ProjectsProps) {
  return (
    <section className="projects-section" id="work">
      {/* Hairline Divider separating Hero and Section 1 */}
      <div className="hairline-divider"></div>

      {initialProjects.map((project, index) => {
        const sectionClass = project.slug === 'workflow-automation' 
          ? 'workflow-section' 
          : `${project.slug}-section`;
        
        const mainScreen = project.screens?.[0];
        const annotationsList = mainScreen?.annotations || [];

        // Build bottom annotations list dynamically based on project content
        const bottomAnnotations: { chip: string; text: string; stat: string }[] = [];
        if (project.problem) {
          bottomAnnotations.push({ chip: 'Problem', text: project.problem, stat: '85%' });
        }
        if (project.buildApproach) {
          bottomAnnotations.push({ chip: 'Built with', text: project.buildApproach, stat: '22 less' });
        }
        if (project.impact) {
          bottomAnnotations.push({ chip: 'Impact', text: project.impact, stat: '1 in 4 users' });
        }
        if (project.bullet1 && project.slug === 'websites') {
          bottomAnnotations.push({ chip: 'Tech Stack', text: project.bullet1, stat: '85%' });
        }
        if (project.bullet2 && project.slug === 'websites') {
          bottomAnnotations.push({ chip: 'Status', text: project.bullet2, stat: '22 less' });
        }

        return (
          <div key={project.id}>
            <motion.div 
              initial={{ y: 120, opacity: 0.95 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className={`project-section-block ${sectionClass}`}
            >
              <div className="container project-row">
                <motion.div 
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="project-header"
                >
                  <h2 className="project-title title-serif">{project.title}</h2>
                  {project.caseStudyIntro && (
                    <p className="project-subtitle">
                      &mdash; {project.caseStudyIntro}
                    </p>
                  )}
                </motion.div>

                <div className="project-body-grid">
                  <div className="project-visual">
                    <div className="visual-frame">
                      <div className={project.slug === 'mobile-apps' ? 'iphone-screen' : 'browser-mockup'}>
                        {mainScreen && (
                          <img 
                            src={mainScreen.originalUrl} 
                            alt={mainScreen.altText || project.title} 
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="project-sidebar-details">
                    {annotationsList.length > 0 ? (
                      annotationsList.map((ann) => (
                        <motion.div 
                          key={ann.id}
                          variants={textVariant}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.2 }}
                          className="sidebar-col"
                        >
                          <div className="sidebar-bullet-content">
                            <span className="project-arrow"></span>
                            {project.slug === 'workflow-automation' ? (
                              <div>
                                <div className="annotation-title">
                                  {ann.markerNumber} &mdash; {ann.title}
                                </div>
                                <div className="annotation-desc">{ann.explanation}</div>
                              </div>
                            ) : (
                              <div>
                                <strong>{ann.title}</strong> &mdash; {ann.explanation}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      // Fallback for Mobile Apps style with a single sidebar bullet description
                      project.bullet1 && project.slug === 'mobile-apps' && (
                        <motion.div 
                          variants={textVariant}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.2 }}
                          className="sidebar-col"
                        >
                          <div className="sidebar-bullet-content">
                            <span className="project-arrow"></span>
                            <div>&mdash; {project.bullet1}</div>
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>

                {bottomAnnotations.length > 0 && (
                  <div className="project-annotations-row three-cols">
                    {bottomAnnotations.map((item, idx) => (
                      <motion.div 
                        key={idx}
                        variants={textVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="annotation-col"
                      >
                        <span className="project-chip">{item.chip}</span> {item.text}
                        <div className="annotation-stat title-serif">{item.stat}</div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Render transitional gold divider for all but the last project */}
            {index < initialProjects.length - 1 && (
              <div className="gold-divider">
                <SectionDivider />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
