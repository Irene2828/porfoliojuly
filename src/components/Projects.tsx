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
    <section className="section projects-section">
      <div className="container">
        <div className="projects-header">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={arriveIn}
          >
            <span className="section-number">02</span>
            <h2 className="text-sans text-large">WORKS</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={arriveIn}
            className="projects-desc"
          >
            <p>A SELECTION OF RECENT PROJECTS SHOWCASING UI/UX DESIGN AND DEVELOPMENT.</p>
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
                  <img src={proj1} alt="Project 1" />
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
                  <img src={proj2} alt="Project 2" />
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
                  <img src={proj3} alt="Project 3" />
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
    </section>
  );
}
