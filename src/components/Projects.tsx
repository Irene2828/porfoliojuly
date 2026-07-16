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
            <h2 className="text-sans text-large">SELECTED<br/>WORKS</h2>
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
            <motion.div className="iphone-bezel" drag whileDrag={{ scale: 1.1, zIndex: 50 }}>
              <div className="iphone-screen">
                <img src={proj1} alt="Project 1" />
              </div>
            </motion.div>
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
            <motion.div className="iphone-bezel" drag whileDrag={{ scale: 1.1, zIndex: 50 }}>
              <div className="iphone-screen">
                <img src={proj2} alt="Project 2" />
              </div>
            </motion.div>
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
            <motion.div className="iphone-bezel" drag whileDrag={{ scale: 1.1, zIndex: 50 }}>
              <div className="iphone-screen">
                <img src={proj3} alt="Project 3" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
