import { motion } from 'framer-motion';
import './Projects.css';

export default function Projects() {
  const arriveIn = {
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
            <span className="section-number">07</span>
            <h2 className="text-sans text-large">OTHER<br/>PROJECTS</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={arriveIn}
            className="projects-desc"
          >
            <p>A SAMPLE OF POSTERS AND CARDS CONCEPTUALIZED, DESIGNED, AND CREATED BY ME</p>
          </motion.div>
        </div>

        <div className="projects-grid">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={arriveIn}
            className="project-item project-left"
          >
            <img src="/project1.png" alt="Project 1" />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { y: 150, opacity: 0 },
              visible: { 
                y: 0, 
                opacity: 1, 
                transition: { duration: 1, ease: "easeOut", delay: 0.2 }
              }
            }}
            className="project-item project-right"
          >
            <img src="/project2.png" alt="Project 2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
