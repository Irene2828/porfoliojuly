import { motion } from 'framer-motion';
import './Projects.css';
import proj3 from '../assets/work3.png';
import websiteMockup from '../assets/555.png';
import automationMockup from '../assets/777.png';

// Motion transition config for text elements
const textVariant = {
  hidden: { y: 25, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  }
};

export default function Projects() {
  return (
    <section className="projects-section" id="work">
      {/* Hairline Divider separating Hero and Section 1 */}
      <div className="hairline-divider"></div>

      {/* SECTION 1: WORKFLOW AUTOMATION */}
      <motion.div 
        initial={{ y: 120, opacity: 0.95 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="project-section-block workflow-section"
      >
        <div className="container project-row">
          <motion.div 
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="project-header"
          >
            <span className="project-number">01</span>
            <h2 className="project-title title-serif">Workflow Automation</h2>
            <p className="project-subtitle">
              &mdash; Terry Fox Foundation asked for something to make posters easier for volunteers worldwide
            </p>
          </motion.div>

          <div className="project-body-grid">
            <div className="project-visual">
              <div className="visual-frame">
                <div className="browser-mockup">
                  <img src={automationMockup.src} alt="Automated Graphic Work Dashboard" />
                </div>
              </div>
            </div>

            <div className="project-sidebar-details">
              <motion.div 
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="sidebar-col"
              >
                <div className="sidebar-bullet-content">
                  <span className="project-arrow"></span>
                  <div>
                    <div className="annotation-title">1 &mdash; one template, many cities</div>
                    <div className="annotation-desc">design stays locked by default, only content changes per chapter</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="sidebar-col"
              >
                <div className="sidebar-bullet-content">
                  <span className="project-arrow"></span>
                  <div>
                    <div className="annotation-title">2 &mdash; two tiers of control</div>
                    <div className="annotation-desc">click-to-edit for most volunteers, full manual override underneath for edge cases</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="sidebar-col"
              >
                <div className="sidebar-bullet-content">
                  <span className="project-arrow"></span>
                  <div>
                    <div className="annotation-title">3 &mdash; QR code auto-generated</div>
                    <div className="annotation-desc">registration link becomes scannable, no export step</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="project-annotations-row three-cols">
            <motion.div 
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="annotation-col"
            >
              <span className="project-chip">Problem</span> chapters worldwide needed on-brand posters fast, some with edge-case content
            </motion.div>
            <motion.div 
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="annotation-col"
            >
              <span className="project-chip">Built with</span> a locked template, editable text layer, and a full manual override panel
            </motion.div>
            <motion.div 
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="annotation-col"
            >
              <span className="project-chip">Impact</span> any volunteer self-serves in minutes, without breaking the brand
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* TRANSITIONAL GOLD DIVIDER 1 */}
      <div className="gold-divider"></div>

      {/* SECTION 2: WEBSITES */}
      <motion.div 
        initial={{ y: 120, opacity: 0.95 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="project-section-block websites-section"
      >
        <div className="container project-row">
          <motion.div 
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="project-header"
          >
            <span className="project-number">02</span>
            <h2 className="project-title title-serif">Websites</h2>
            <p className="project-subtitle">
              &mdash; Started as &ldquo;help Ukrainian-owned businesses get found in Canada&rdquo; &mdash; no brief, just a volunteer ask
            </p>
          </motion.div>

          <div className="project-body-grid">
            <div className="project-visual">
              <div className="visual-frame">
                <div className="browser-mockup">
                  <img src={websiteMockup.src} alt="Buy Ukrainian in Canada Landing Page Mockup" />
                </div>
              </div>
            </div>

            <div className="project-sidebar-details">
              <motion.div 
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="sidebar-col"
              >
                <div className="sidebar-bullet-content">
                  <span className="project-arrow"></span>
                  <div>
                    <strong>Map-first, not list-first</strong> &mdash; trust comes from seeing a store is near you
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="sidebar-col"
              >
                <div className="sidebar-bullet-content">
                  <span className="project-arrow"></span>
                  <div>
                    <strong>Yellow on blue</strong> &mdash; visible without feeling costume-y
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="sidebar-col"
              >
                <div className="sidebar-bullet-content">
                  <span className="project-arrow"></span>
                  <div>
                    <strong>One action above the fold</strong> &mdash; find stores near me, nothing else competing
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="project-annotations-row three-cols">
            <motion.div 
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="annotation-col"
            >
              <span className="project-chip">Tech Stack</span> React and Vite, deployed to Vercel
            </motion.div>
            <motion.div 
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="annotation-col"
            >
              <span className="project-chip">Status</span> Volunteer-run, still active
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* TRANSITIONAL GOLD DIVIDER 2 */}
      <div className="gold-divider"></div>

      {/* SECTION 3: MOBILE APPS */}
      <motion.div 
        initial={{ y: 120, opacity: 0.95 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="project-section-block mobile-apps-section"
      >
        <div className="container project-row">
          <motion.div 
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="project-header"
          >
            <span className="project-number">03</span>
            <h2 className="project-title title-serif">Mobile Apps</h2>
            <p className="project-subtitle">
              &mdash; Started as &ldquo;I want to plan meals without opening five apps&rdquo;
            </p>
          </motion.div>

          <div className="project-body-grid">
            <div className="project-visual">
              <div className="project-visual-item visual-frame">
                <div className="iphone-screen">
                  <img src={proj3.src} alt="Meal Planner App 3" />
                </div>
              </div>
            </div>

            <div className="project-sidebar-details">
              <motion.div 
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="sidebar-col"
              >
                <div className="sidebar-bullet-content">
                  <span className="project-arrow"></span>
                  <div>
                    &mdash; React Native, built with Google Antigravity, deployed to Vercel
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* TRANSITIONAL GOLD DIVIDER 3 */}
      <div className="gold-divider"></div>
    </section>
  );
}
