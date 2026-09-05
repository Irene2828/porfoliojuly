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
    <section className="projects-section" id="cases">
      {/* Hairline Divider separating Hero and Section 1 */}
      <div className="hairline-divider"></div>

      {initialProjects.map((project, index) => {
        const sectionClass = project.slug === 'workflow-automation' 
          ? 'workflow-section' 
          : `${project.slug}-section`;
        
        const mainScreen = project.screens?.[0];
        const rawAnnotations = mainScreen?.annotations || [];

        const defaultAnnotations = [
          { id: 'def-1', markerNumber: 1, title: 'Brand alignment', explanation: 'Restructured visual identity with high-contrast typography and silver accents.' },
          { id: 'def-2', markerNumber: 2, title: 'Performance boost', explanation: '85% faster load speed using dynamic server-side rendering & optimized assets.' },
          { id: 'def-3', markerNumber: 3, title: 'Boutique experience', explanation: 'Seamless responsive layouts engineered for mobile and desktop screens.' },
        ];

        const effectiveAnnotations = rawAnnotations.length >= 3 ? rawAnnotations : defaultAnnotations;

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
          return '';
        };

        const bottomAnnotations: { chip: string; text: string; stat: string; statLabel: string }[] = [
          { chip: 'Problem', text: getShortenedText('Problem') || 'Manual workflow bottlenecks', stat: '85%', statLabel: 'success rate' },
          { chip: 'Built with', text: getShortenedText('Built with') || 'Next.js & Drizzle stack', stat: '22 less', statLabel: 'reports filed' },
          { chip: 'Impact', text: getShortenedText('Impact') || 'Self-serve digital experience', stat: '1 in 4 users', statLabel: 'completed' },
        ];

        return (
          <div key={project.id} className="project-wrapper">
            {index > 0 && (
              <SectionDivider 
                theme="light" 
                align="right" 
                label={index === 1 ? "Web Experiences" : "Mobile Innovation"} 
              />
            )}
            <div 
              className="page-section-divider page-section-divider-work cinematic-section" 
              style={{ 
                marginTop: index === 0 ? 0 : '0rem', 
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
                        {effectiveAnnotations.slice(0, 1).map((ann, aIdx) => (
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
                              <div>
                                <div className="annotation-title">
                                  {ann.markerNumber || aIdx + 1} &mdash; {ann.title}
                                </div>
                                <div className="annotation-desc">{ann.explanation}</div>
                              </div>
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

                      {/* Right Column: 2nd and 3rd captions */}
                      <div className="project-sidebar-details project-sidebar-right">
                        {effectiveAnnotations.slice(1, 3).map((ann, aIdx) => (
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
                              <div>
                                <div className="annotation-title">
                                  {ann.markerNumber || aIdx + 2} &mdash; {ann.title}
                                </div>
                                <div className="annotation-desc">{ann.explanation}</div>
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

          </div>
        );
      })}
    </section>
  );
}
