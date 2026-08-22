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
      {/* Tech Pixel Decor in Bottom-Right */}
      <div className="services-pixel-decor">
        <svg width="240" height="320" viewBox="0 0 240 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Column 1 */}
          <rect x="20" y="240" width="6" height="6" fill="#ffffff" opacity="0.4" className="pixel-pulse-1" />
          <rect x="20" y="170" width="4" height="4" fill="#ffffff" opacity="0.6" className="pixel-pulse-2" />
          <rect x="20" y="100" width="8" height="8" fill="#ffffff" opacity="0.3" className="pixel-pulse-3" />
          
          {/* Column 2 */}
          <rect x="60" y="260" width="8" height="8" fill="#ffffff" opacity="0.35" className="pixel-pulse-2" />
          <rect x="60" y="205" width="5" height="5" fill="#ffffff" opacity="0.5" className="pixel-pulse-1" />
          <rect x="60" y="140" width="7" height="7" fill="#ffffff" opacity="0.4" className="pixel-pulse-3" />
          <rect x="60" y="60" width="4" height="4" fill="#ffffff" opacity="0.6" className="pixel-pulse-2" />

          {/* Column 3 */}
          <rect x="100" y="230" width="5" height="5" fill="#ffffff" opacity="0.45" className="pixel-pulse-3" />
          <rect x="100" y="175" width="8" height="8" fill="#ffffff" opacity="0.3" className="pixel-pulse-1" />
          <rect x="100" y="85" width="6" height="6" fill="#ffffff" opacity="0.5" className="pixel-pulse-2" />
          <rect x="100" y="20" width="4" height="4" fill="#ffffff" opacity="0.4" className="pixel-pulse-3" />

          {/* Column 4 */}
          <rect x="140" y="250" width="4" height="4" fill="#ffffff" opacity="0.6" className="pixel-pulse-2" />
          <rect x="140" y="190" width="7" height="7" fill="#ffffff" opacity="0.35" className="pixel-pulse-3" />
          <rect x="140" y="125" width="5" height="5" fill="#ffffff" opacity="0.5" className="pixel-pulse-1" />
          <rect x="140" y="50" width="8" height="8" fill="#ffffff" opacity="0.25" className="pixel-pulse-2" />

          {/* Column 5 */}
          <rect x="180" y="210" width="6" height="6" fill="#ffffff" opacity="0.4" className="pixel-pulse-1" />
          <rect x="180" y="150" width="4" height="4" fill="#ffffff" opacity="0.55" className="pixel-pulse-3" />
          <rect x="180" y="80" width="7" height="7" fill="#ffffff" opacity="0.3" className="pixel-pulse-2" />

          {/* Column 6 */}
          <rect x="220" y="235" width="5" height="5" fill="#ffffff" opacity="0.5" className="pixel-pulse-3" />
          <rect x="220" y="165" width="8" height="8" fill="#ffffff" opacity="0.25" className="pixel-pulse-2" />
          <rect x="220" y="105" width="4" height="4" fill="#ffffff" opacity="0.6" className="pixel-pulse-1" />
        </svg>
      </div>
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
                <li>&ndash; Logo Design</li>
                <li>&ndash; Brand Identity</li>
                <li>&ndash; Poster Design</li>
                <li>&ndash; Environmental Design</li>
              </ul>
            </motion.div>

            <motion.div
              variants={arriveIn}
              className="service-category"
            >
              <h3 className="title-serif service-title">Illustration</h3>
              <ul className="service-items">
                <li>&ndash; Digital Illustration</li>
                <li>&ndash; Street Art and Murals</li>
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
