'use client';

import { motion } from 'framer-motion';
import './Services.css';

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const arriveIn: any = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="section services-section" id="expertise">
      <div className="container">
        <motion.div 
          className="services-layout"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={containerVariants}
        >
          {/* Left Column: Staggered bulleted lists */}
          <div className="services-content-left">
            <motion.div
              variants={arriveIn}
              className="service-category"
            >
              <h3 className="title-serif service-title">Graphic Design</h3>
              <ul className="service-items">
                <li><span className="service-bullet">&ndash;</span> Logo Design</li>
                <li><span className="service-bullet">&ndash;</span> Brand Identity</li>
                <li><span className="service-bullet">&ndash;</span> Poster Design</li>
                <li><span className="service-bullet">&ndash;</span> Environmental Design</li>
              </ul>
            </motion.div>

            <motion.div
              variants={arriveIn}
              className="service-category"
            >
              <h3 className="title-serif service-title">Illustration</h3>
              <ul className="service-items">
                <li><span className="service-bullet">&ndash;</span> Digital Illustration</li>
                <li><span className="service-bullet">&ndash;</span> Street Art and Murals</li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Visual image */}
          <motion.div 
            variants={arriveIn}
            className="services-image-col"
          >
            <img src="/skills.png" alt="Using drawing tablet" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
