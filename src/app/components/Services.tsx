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
          {/* Left Column: Benefit Statements */}
          <div className="services-content-left" style={{ width: '100%', maxWidth: '820px' }}>
            <motion.div variants={arriveIn}>
              <h2 className="title-serif service-title" style={{ fontSize: 'clamp(24px, 3.8vw, 36px)', marginBottom: '2.5rem' }}>
                What You Can Expect From Me
              </h2>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
              {benefits.map((benefit, i) => (
                <motion.div key={i} variants={arriveIn} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <span style={{ 
                    fontFamily: "'JetBrains Mono', monospace", 
                    color: '#008b8b', 
                    fontSize: '1.1rem', 
                    fontWeight: 700, 
                    lineHeight: '1.4',
                    minWidth: '28px'
                  }}>
                    0{i + 1}
                  </span>
                  <div>
                    <h3 style={{ 
                      fontFamily: "var(--font-sans), Inter, sans-serif", 
                      fontSize: '1.25rem', 
                      fontWeight: 600, 
                      color: '#121212', 
                      margin: '0 0 0.5rem 0' 
                    }}>
                      {benefit.title}
                    </h3>
                    <p style={{ 
                      fontSize: '1.02rem', 
                      lineHeight: 1.65, 
                      color: '#444444', 
                      margin: 0,
                      maxWidth: '640px'
                    }}>
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
