import { motion } from 'framer-motion';
import './Projects.css';
import proj1 from '../assets/work1.png';
import proj2 from '../assets/work2.png';
import proj3 from '../assets/work3.png';

export default function Projects() {
  const arriveIn: any = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="section projects-section" id="work">
      {/* SECTION 1: Mobile Apps (Visuals on Right) */}
      <div className="container project-row">
        <div className="projects-header">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={arriveIn}
          >
            <span className="section-number">02</span>
            <h2 className="text-sans text-large">Mobile Apps</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={arriveIn}
            className="projects-desc"
          >
            <p>A SELECTION OF RECENT MOBILE APPLICATIONS SHOWCASING UI/UX AND DRAG-AND-DROP INTERACTIONS.</p>
          </motion.div>
        </div>

        <div className="projects-grid">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.1 } }
            } as any}
            className="project-item"
          >
            <div className="iphone-bezel-wrapper">
              <motion.div className="iphone-bezel" drag whileDrag={{ scale: 1.1, zIndex: 50 }}>
                <div className="iphone-screen">
                  <img src={proj1} alt="Meal Planner App" />
                </div>
              </motion.div>
            </div>
            <motion.p 
              className="project-desc-text"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } }
              }}
            >
              &mdash; React Native App, Easy to Use App that takes seconds to plan a weekly meal for a family
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { y: 100, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
            } as any}
            className="project-item"
          >
            <div className="iphone-bezel-wrapper">
              <motion.div className="iphone-bezel" drag whileDrag={{ scale: 1.1, zIndex: 50 }}>
                <div className="iphone-screen">
                  <img src={proj2} alt="Productivity App" />
                </div>
              </motion.div>
            </div>
            <motion.p 
              className="project-desc-text"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.5 } }
              }}
            >
              &mdash; iOS Productivity Suite, designed to organize daily schedule, reminders, and lists
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { y: 80, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } }
            } as any}
            className="project-item"
          >
            <div className="iphone-bezel-wrapper">
              <motion.div className="iphone-bezel" drag whileDrag={{ scale: 1.1, zIndex: 50 }}>
                <div className="iphone-screen">
                  <img src={proj3} alt="Smart Explorer" />
                </div>
              </motion.div>
            </div>
            <motion.p 
              className="project-desc-text"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.7 } }
              }}
            >
              &mdash; Smart Explorer, Made in Antigravity, deployed to Vercel
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* SECTION 2: Websites (Visuals on Left - row-reverse) */}
      <div className="container project-row row-reverse">
        <div className="projects-header">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={arriveIn}
          >
            <span className="section-number">03</span>
            <h2 className="text-sans text-large">Websites</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={arriveIn}
            className="projects-desc"
          >
            <p>HIGH-CONVERTING WEBSITES, DEVELOPED WITH MODERN FRAMEWORKS AND OPTIMIZED FOR OUTSTANDING PERFORMANCE.</p>
          </motion.div>
        </div>

        <div className="projects-grid">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.1 } }
            } as any}
            className="project-item"
          >
            <div className="iphone-bezel-wrapper">
              <motion.div className="iphone-bezel" drag whileDrag={{ scale: 1.1, zIndex: 50 }}>
                <div className="iphone-screen">
                  <img src={proj2} alt="E-Commerce Website" />
                </div>
              </motion.div>
            </div>
            <motion.p 
              className="project-desc-text"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } }
              }}
            >
              &mdash; Next.js Headless E-Commerce storefront with ultra-fast search and dynamic checkout
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { y: 100, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
            } as any}
            className="project-item"
          >
            <div className="iphone-bezel-wrapper">
              <motion.div className="iphone-bezel" drag whileDrag={{ scale: 1.1, zIndex: 50 }}>
                <div className="iphone-screen">
                  <img src={proj3} alt="SaaS Landing Page" />
                </div>
              </motion.div>
            </div>
            <motion.p 
              className="project-desc-text"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.5 } }
              }}
            >
              &mdash; Interactive marketing site with custom WebGL animations and responsive pricing tiers
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { y: 80, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } }
            } as any}
            className="project-item"
          >
            <div className="iphone-bezel-wrapper">
              <motion.div className="iphone-bezel" drag whileDrag={{ scale: 1.1, zIndex: 50 }}>
                <div className="iphone-screen">
                  <img src={proj1} alt="Creative Studio Portfolio" />
                </div>
              </motion.div>
            </div>
            <motion.p 
              className="project-desc-text"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.7 } }
              }}
            >
              &mdash; Minimalist portfolios showcasing projects, utilizing dynamic page transitions
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* SECTION 3: Workflow Automation (Visuals on Right) */}
      <div className="container project-row">
        <div className="projects-header">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={arriveIn}
          >
            <span className="section-number">04</span>
            <h2 className="text-sans text-large">Workflow Automation</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={arriveIn}
            className="projects-desc"
          >
            <p>CUSTOM BOTS AND AUTOMATIONS INTEGRATING SERVICES TO STREAMLINE BUSINESS OPERATIONS.</p>
          </motion.div>
        </div>

        <div className="projects-grid">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.1 } }
            } as any}
            className="project-item"
          >
            <div className="iphone-bezel-wrapper">
              <motion.div className="iphone-bezel" drag whileDrag={{ scale: 1.1, zIndex: 50 }}>
                <div className="iphone-screen">
                  <img src={proj3} alt="Slack Sync Bot" />
                </div>
              </motion.div>
            </div>
            <motion.p 
              className="project-desc-text"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } }
              }}
            >
              &mdash; Cloud integration pipeline syncing database updates with custom Slack alerts
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { y: 100, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
            } as any}
            className="project-item"
          >
            <div className="iphone-bezel-wrapper">
              <motion.div className="iphone-bezel" drag whileDrag={{ scale: 1.1, zIndex: 50 }}>
                <div className="iphone-screen">
                  <img src={proj1} alt="CRM Automator" />
                </div>
              </motion.div>
            </div>
            <motion.p 
              className="project-desc-text"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.5 } }
              }}
            >
              &mdash; Automation script routing lead forms to CRM systems and scheduling responses
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { y: 80, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } }
            } as any}
            className="project-item"
          >
            <div className="iphone-bezel-wrapper">
              <motion.div className="iphone-bezel" drag whileDrag={{ scale: 1.1, zIndex: 50 }}>
                <div className="iphone-screen">
                  <img src={proj2} alt="Reporting Engine" />
                </div>
              </motion.div>
            </div>
            <motion.p 
              className="project-desc-text"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.7 } }
              }}
            >
              &mdash; Scheduled analytics aggregator generating weekly PDF summaries automatically
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
