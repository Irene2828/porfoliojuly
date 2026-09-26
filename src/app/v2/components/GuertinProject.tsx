'use client';

import { motion } from 'framer-motion';
import './GuertinProject.css';

export default function GuertinProject() {
  return (
    <div className="guertin-wrapper">
      {/* --- Exact 5-Layer Background Stack --- */}
      <div 
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundColor: '#081A33',
          backgroundImage: `
            radial-gradient(800px circle at 15% 85%, rgba(74,120,180,0.35), transparent),
            radial-gradient(700px circle at 85% 15%, rgba(120,170,220,0.18), transparent),
            radial-gradient(1200px circle at center, transparent 0%, rgba(5,15,30,0.6) 100%),
            radial-gradient(circle, rgba(255, 255, 255, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 100% 100%, 28px 28px',
          pointerEvents: 'none'
        }}
      />
      
      {/* Blurred Div: Top Right */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%', right: '-5%',
          width: '600px', height: '600px',
          backgroundColor: 'rgba(74, 120, 180, 0.20)',
          filter: 'blur(120px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Blurred Div: Bottom Left */}
      <div 
        style={{
          position: 'absolute',
          bottom: '-15%', left: '-10%',
          width: '700px', height: '700px',
          backgroundColor: 'rgba(30, 58, 95, 0.40)', /* #1E3A5F at 40% */
          filter: 'blur(100px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      {/* Content Container */}
      <div className="guertin-content">
        
        {/* Mockup Area */}
        <div className="guertin-mockup-area">
          
          {/* Pill 01: Top Left */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="guertin-pill guertin-pill-1"
          >
            <span className="guertin-pill-num">01</span>
            <span className="guertin-pill-sep">|</span>
            <span>NARRATIVE FLOW<br/>TRUST-FIRST HERO</span>
          </motion.div>

          {/* Browser Mockup (Left 67%) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="guertin-browser"
          >
            {/* Browser Header */}
            <div className="guertin-browser-header">
              <div className="guertin-browser-dots">
                <div className="guertin-browser-dot" />
                <div className="guertin-browser-dot" />
                <div className="guertin-browser-dot" />
              </div>
              <div className="guertin-browser-title">Guertin Isabelle</div>
              <div style={{ width: '40px' }}></div>
            </div>
            {/* Browser Content Image */}
            <div className="guertin-browser-img-wrapper">
              <img src="/assets/guertin-desktop.png" alt="Desktop Homepage" className="guertin-img" />
            </div>
          </motion.div>

          {/* iPhone Mockup (Right 24%, rotated -3deg) */}
          <motion.div 
            initial={{ opacity: 0, x: 30, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="guertin-phone"
          >
            <div className="guertin-phone-inner">
              <img src="/assets/guertin-mobile.png" alt="Mobile Homepage" className="guertin-img" />
            </div>
          </motion.div>

          {/* Pill 02: Bottom Left */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="guertin-pill guertin-pill-2"
          >
            <span className="guertin-pill-num">02</span>
            <span className="guertin-pill-sep">|</span>
            <span>MODULAR SECTIONS<br/>CLEAR HIERARCHY</span>
          </motion.div>

          {/* Pill 03: Bottom Right */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="guertin-pill guertin-pill-3"
          >
            <span className="guertin-pill-num">02</span>
            <span className="guertin-pill-sep">|</span>
            <span>RESPONSIVE IA<br/>ONE FILE AT A TIME</span>
          </motion.div>
        </div>

        {/* 3 Dark Cards Below */}
        <div className="guertin-cards-area">
          <h3 className="guertin-cards-title">Technical expertise. Clear analysis. Informed decisions.</h3>
          
          <div className="guertin-cards-grid">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="guertin-card"
            >
              <h4 className="guertin-card-title">
                <span className="guertin-card-icon">🏛</span> Municipal Civil Liability
              </h4>
              <p className="guertin-card-desc">
                Investigation and handling of municipal liability claims involving property damage and bodily injury.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="guertin-card"
            >
              <h4 className="guertin-card-title">
                <span className="guertin-card-icon">⚖️</span> Public Adjuster Services
              </h4>
              <p className="guertin-card-desc">
                Independent claims assistance for individuals navigating property insurance claims with expertise.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="guertin-card"
            >
              <h4 className="guertin-card-title">
                <span className="guertin-card-icon">🔍</span> Damage Assessment & Tech
              </h4>
              <p className="guertin-card-desc">
                Detailed analysis of property damage, causation, and evaluation supported by documentation.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
