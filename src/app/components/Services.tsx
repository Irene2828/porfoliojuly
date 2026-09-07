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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3.5rem', width: '100%' }}>
              {/* Column 1: Web Development */}
              <motion.div variants={arriveIn}>
                <h3 style={{ 
                  fontFamily: "'Times New Roman', Times, Georgia, serif", 
                  fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', 
                  fontWeight: 400, 
                  color: '#4a90e2', 
                  margin: '0 0 0.5rem 0',
                  letterSpacing: '-0.01em'
                }}>
                  Web Development
                </h3>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#4a90e2', opacity: 0.4, marginBottom: '1.75rem' }} />
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ fontSize: '1rem', color: '#333333', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ color: '#4a90e2', fontWeight: 600 }}>&ndash;</span> Next.js &amp; React Applications
                  </li>
                  <li style={{ fontSize: '1rem', color: '#333333', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ color: '#4a90e2', fontWeight: 600 }}>&ndash;</span> High-Converting Landing Pages
                  </li>
                  <li style={{ fontSize: '1rem', color: '#333333', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ color: '#4a90e2', fontWeight: 600 }}>&ndash;</span> Responsive UI / UX Systems
                  </li>
                  <li style={{ fontSize: '1rem', color: '#333333', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ color: '#4a90e2', fontWeight: 600 }}>&ndash;</span> Performance &amp; SEO Optimization
                  </li>
                </ul>
              </motion.div>

              {/* Column 2: AI & Automations */}
              <motion.div variants={arriveIn}>
                <h3 style={{ 
                  fontFamily: "'Times New Roman', Times, Georgia, serif", 
                  fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', 
                  fontWeight: 400, 
                  color: '#4a90e2', 
                  margin: '0 0 0.5rem 0',
                  letterSpacing: '-0.01em'
                }}>
                  AI &amp; Automations
                </h3>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#4a90e2', opacity: 0.4, marginBottom: '1.75rem' }} />
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ fontSize: '1rem', color: '#333333', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ color: '#4a90e2', fontWeight: 600 }}>&ndash;</span> Custom AI Agent Integration
                  </li>
                  <li style={{ fontSize: '1rem', color: '#333333', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ color: '#4a90e2', fontWeight: 600 }}>&ndash;</span> Automated Lead Qualification
                  </li>
                  <li style={{ fontSize: '1rem', color: '#333333', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ color: '#4a90e2', fontWeight: 600 }}>&ndash;</span> LLM Pipelines &amp; Webhooks
                  </li>
                  <li style={{ fontSize: '1rem', color: '#333333', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ color: '#4a90e2', fontWeight: 600 }}>&ndash;</span> Self-Serve Web Tools
                  </li>
                </ul>
              </motion.div>
            </div>
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
