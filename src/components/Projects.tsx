import { motion } from 'framer-motion';
import './Projects.css';
import proj1 from '../assets/work1.png';
import proj2 from '../assets/work2.png';
import proj3 from '../assets/work3.png';
import websiteMockup from '../assets/website_mockup.png';
import automationMockup from '../assets/automation_mockup.png';

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

        </div>

        <div className="single-project-wrapper">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.1 } }
            } as any}
            className="single-project-item"
          >
            <div className="browser-mockup">
              <div className="browser-header">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <img src={websiteMockup} alt="Buy Ukrainian in Canada Landing Page Mockup" />
            </div>
            <motion.p className="project-desc-text align-left">
              &mdash; Web Design: Buy Ukrainian in Canada initiative, volunteer project supporting Ukrainian businesses.
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

        </div>

        <div className="single-project-wrapper">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.1 } }
            } as any}
            className="single-project-item"
          >
            <div className="browser-mockup">
              <div className="browser-header">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <img src={automationMockup} alt="Automated Graphic Work Dashboard" />
            </div>
            <motion.p className="project-desc-text align-left">
              &mdash; Graphic Automation: Image optimization and delivery pipeline dashboard automatically exporting assets to Slack.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
