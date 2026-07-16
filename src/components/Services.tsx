import { motion } from 'framer-motion';
import './Services.css';

export default function Services() {
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
        <div className="services-layout">
          {/* Left Column: Staggered bulleted lists */}
          <div className="services-content-left">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={arriveIn}
            className="services-image-col"
          >
            <img src="/skills.png" alt="Using drawing tablet" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
