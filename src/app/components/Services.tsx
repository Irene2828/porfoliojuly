'use client';

import { motion } from 'framer-motion';
import './Services.css';

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const arriveIn: any = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const benefits = [
    {
      title: 'UX/UI Tested with Real Users',
      desc: 'Interfaces designed for intuitive interaction and clear hierarchy. Every flow is tested to remove friction and maximize conversion.'
    },
    {
      title: 'AI Where It Earns Its Place',
      desc: 'No AI for the sake of hype. Intelligent workflows and automation are integrated only where they deliver measurable time savings and business ROI.'
    },
    {
      title: 'Modern Stack That Stays Current',
      desc: 'Built with modern web frameworks and current Generative AI tools so your site and internal products perform fast and never feel dated.'
    }
  ];

  return (
    <section className="section services-section" id="expectations">
      <div className="container">
        <motion.div 
          className="services-layout"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={containerVariants}
        >
          {/* Left Side: 2 Columns of Services/Capabilities (Matching Reference Layout) */}
          <div className="services-content-left" style={{ width: '100%', maxWidth: '840px' }}>
            <motion.div variants={arriveIn}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {benefits.map((benefit, i) => (
                  <li key={i} style={{ color: '#333' }}>
                    <strong style={{ 
                      color: '#4a90e2', 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontSize: '1.2rem',
                      fontFamily: "'Times New Roman', Times, Georgia, serif",
                      fontWeight: 500
                    }}>
                      {benefit.title}
                    </strong>
                    <span style={{ fontSize: '1rem', lineHeight: 1.6, display: 'block', color: '#444' }}>
                      {benefit.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Empty space for clean split */}
          <motion.div 
            variants={arriveIn}
            className="services-image-col"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '280px' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
