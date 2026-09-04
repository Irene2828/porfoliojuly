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
              <h3 className="title-serif service-title">Web Development</h3>
              <ul className="service-items">
                <li><span className="service-bullet">&ndash;</span> Next.js &amp; React Applications</li>
                <li><span className="service-bullet">&ndash;</span> High-Converting Landing Pages</li>
                <li><span className="service-bullet">&ndash;</span> Responsive UI / UX Systems</li>
                <li><span className="service-bullet">&ndash;</span> Performance &amp; SEO Optimization</li>
              </ul>
            </motion.div>

            <motion.div
              variants={arriveIn}
              className="service-category"
            >
              <h3 className="title-serif service-title">AI &amp; Automations</h3>
              <ul className="service-items">
                <li><span className="service-bullet">&ndash;</span> Custom AI Agent Integration</li>
                <li><span className="service-bullet">&ndash;</span> Automated Lead Qualification</li>
                <li><span className="service-bullet">&ndash;</span> LLM Pipelines &amp; Webhooks</li>
                <li><span className="service-bullet">&ndash;</span> Self-Serve Web Tools</li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Visual placeholder */}
          <motion.div 
            variants={arriveIn}
            className="services-image-col"
          >
            <div 
              style={{
                width: '100%',
                height: '400px',
                background: 'white',
                border: '1px solid rgba(0, 139, 139, 0.4)',
                borderRadius: '4px'
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
