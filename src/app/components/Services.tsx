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

  const textArriveIn: any = {
    hidden: { y: 22, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="section services-section" id="expertise">
      <div className="container">
        <motion.div 
          className="services-layout"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left Column: Staggered bulleted lists */}
          <div className="services-content-left">
            <motion.div
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }
                }
              }}
              className="service-category"
            >
              <motion.h3 variants={textArriveIn} className="title-serif service-title">Graphic Design</motion.h3>
              <ul className="service-items">
                <motion.li variants={textArriveIn}>&ndash; Logo Design</motion.li>
                <motion.li variants={textArriveIn}>&ndash; Brand Identity</motion.li>
                <motion.li variants={textArriveIn}>&ndash; Poster Design</motion.li>
                <motion.li variants={textArriveIn}>&ndash; Environmental Design</motion.li>
              </ul>
            </motion.div>

            <motion.div
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }
                }
              }}
              className="service-category"
            >
              <motion.h3 variants={textArriveIn} className="title-serif service-title">Illustration</motion.h3>
              <ul className="service-items">
                <motion.li variants={textArriveIn}>&ndash; Digital Illustration</motion.li>
                <motion.li variants={textArriveIn}>&ndash; Street Art and Murals</motion.li>
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
