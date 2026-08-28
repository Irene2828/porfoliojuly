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
        const bottomAnnotations: { chip: string; text: string; stat: string; statLabel: string }[] = [];
        
        const getShortenedText = (chip: string) => {
          if (chip === 'Problem') {
            if (project.slug === 'websites') return 'Outdated visual brand';
            if (project.slug === 'workflow-automation') return 'Manual asset creation';
            return 'Scattered volunteer data';
          }
          if (chip === 'Built with') {
            if (project.slug === 'websites') return 'Drizzle, Next.js stack';
            if (project.slug === 'workflow-automation') return 'Locked template editor';
            return 'Native iOS client';
          }
          if (chip === 'Impact') {
            if (project.slug === 'websites') return 'Speed improved 85%';
            if (project.slug === 'workflow-automation') return 'Self-serve brand builder';
            return 'Instant map signups';
          }
          if (chip === 'Tech Stack') return 'Next.js & Drizzle';
          if (chip === 'Status') return 'Shipped to production';
          return '';
        };

        if (project.problem) {
          bottomAnnotations.push({ chip: 'Problem', text: getShortenedText('Problem'), stat: '85%', statLabel: 'success rate' });
        }
        if (project.buildApproach) {
          bottomAnnotations.push({ chip: 'Built with', text: getShortenedText('Built with'), stat: '22 less', statLabel: 'reports filed' });
        }
        if (project.impact) {
          bottomAnnotations.push({ chip: 'Impact', text: getShortenedText('Impact'), stat: '1 in 4 users', statLabel: 'completed' });
        }
        if (project.bullet1 && project.slug === 'websites') {
          bottomAnnotations.push({ chip: 'Tech Stack', text: getShortenedText('Tech Stack'), stat: '85%', statLabel: 'success rate' });
        }
        if (project.bullet2 && project.slug === 'websites') {
          bottomAnnotations.push({ chip: 'Status', text: getShortenedText('Status'), stat: '22 less', statLabel: 'reports filed' });
        }

        return (
          <div key={project.id} className="project-wrapper">
            <div 
              className={`page-section-divider page-section-divider-work cinematic-section ${project.slug === 'websites' ? 'cinematic-section-silver' : ''}`} 
              style={{ 
                marginTop: index === 0 ? 0 : '12rem', 
                marginBottom: '4rem',
              }}
            >
              <SectionDivider 
                label={project.title} 
                liveLink={project.slug === 'websites' ? 'https://buyuukrainian.vercel.app/' : (index === 0 ? 'https://poster-generator-gold.vercel.app/' : undefined)}
                subline={project.slug === 'websites' ? 'Started as “help Ukrainian-owned businesses get found in Canada” — no brief, just a volunteer ask' : (project.caseStudyIntro ?? undefined)}
                annotations={bottomAnnotations}
              >
                <div 
                  className={`project-section-block ${sectionClass}`}
                  style={{ width: '100%', margin: '3rem 0 1.5rem 0' }}
                >
                  <motion.div
                    initial={{ y: 120, opacity: 0.95 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: '100%' }}
                  >
                  <div className="container project-row">
                    <div className="project-body-grid">
                      {/* Left Column: First caption */}
                      <div className="project-sidebar-details project-sidebar-left">
                        {annotationsList.slice(0, 1).map((ann) => (
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
                        ))}
                      </div>

                      {/* Center Column: Visual */}
                      <div className="project-visual">
                        <div className="visual-frame">
                          {project.slug === 'mobile-apps' ? (
                            <div className="iphone-screen">
                              {mainScreen && (
                                <img src={mainScreen.originalUrl} alt={mainScreen.altText || project.title} />
                              )}
                            </div>
                          ) : (
                            <div className="flat-screen">
                              {mainScreen && (
                                <img src={mainScreen.originalUrl} alt={mainScreen.altText || project.title} />
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right Column: 2nd and 3rd captions (or mobile-apps single caption) */}
                      <div className="project-sidebar-details project-sidebar-right">
                        {annotationsList.length >= 2 ? (
                          annotationsList.slice(1, 3).map((ann) => (
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
                  </div>
                </motion.div>
              </div>
              </SectionDivider>
            </div>

          </div>
        );
      })}
    </section>
  );
}
