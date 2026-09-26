'use client';

import { motion } from 'framer-motion';
import './GuertinProject.css';

interface GenericWhiteCardProps {
  title: string;
  subline?: string;
  annotations: { markerNumber: number; title: string; text: string }[];
  stats: { chip: string; text: string; stat: string; statLabel: string }[];
  image: string;
}

export default function GenericWhiteCard({ title, annotations, stats, image }: GenericWhiteCardProps) {
  return (
    <div className="guertin-wrapper" style={{ backgroundColor: '#ffffff' }}>
      {/* Dot Grid Stack on White */}
      <div 
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundColor: '#ffffff',
          backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.08) 1.25px, transparent 1.25px)`,
          backgroundSize: '28px 28px',
          pointerEvents: 'none'
        }}
      />
      
      {/* Content Container */}
      <div className="guertin-content">
        
        {/* Mockup Area */}
        <div className="guertin-mockup-area">
          
          {/* Pill 01: Top Left */}
          {annotations[0] && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="guertin-pill guertin-pill-1"
            >
              <span className="guertin-pill-num">01</span>
              <span className="guertin-pill-sep">|</span>
              <span>{annotations[0].title.toUpperCase()}</span>
            </motion.div>
          )}

          {/* Browser Mockup (Left 67%) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="guertin-browser"
            style={{ border: '1px solid rgba(0,0,0,0.12)', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
          >
            {/* Browser Header */}
            <div className="guertin-browser-header">
              <div className="guertin-browser-dots">
                <div className="guertin-browser-dot" />
                <div className="guertin-browser-dot" />
                <div className="guertin-browser-dot" />
              </div>
              <div className="guertin-browser-title">{title}</div>
              <div style={{ width: '40px' }}></div>
            </div>
            {/* Browser Content Image */}
            <div className="guertin-browser-img-wrapper">
              <img src={image} alt={title} className="guertin-img" />
            </div>
          </motion.div>

          {/* iPhone Mockup (Right 24%, rotated -3deg) */}
          <motion.div 
            initial={{ opacity: 0, x: 30, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="guertin-phone"
            style={{ boxShadow: '-10px 20px 40px rgba(0,0,0,0.15)' }}
          >
            <div className="guertin-phone-inner">
              <img src={image} alt={title} className="guertin-img" />
            </div>
          </motion.div>

          {/* Pill 02: Bottom Left */}
          {annotations[1] && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="guertin-pill guertin-pill-2"
            >
              <span className="guertin-pill-num">02</span>
              <span className="guertin-pill-sep">|</span>
              <span>{annotations[1].title.toUpperCase()}</span>
            </motion.div>
          )}

          {/* Pill 03: Bottom Right */}
          {annotations[2] && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="guertin-pill guertin-pill-3"
            >
              <span className="guertin-pill-num">03</span>
              <span className="guertin-pill-sep">|</span>
              <span>{annotations[2].title.toUpperCase()}</span>
            </motion.div>
          )}
        </div>

        {/* 3 Light Cards Below */}
        <div className="guertin-cards-area">
          <h3 className="guertin-cards-title" style={{ color: '#18191e' }}>
            Interactive features &amp; performance metrics.
          </h3>
          
          <div className="guertin-cards-grid">
            {stats.map((statItem, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="guertin-card"
                style={{ backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}
              >
                <h4 className="guertin-card-title" style={{ color: '#18191e' }}>
                  <span className="guertin-card-icon">⚡</span> {statItem.chip}: {statItem.stat}
                </h4>
                <p className="guertin-card-desc" style={{ color: '#555555' }}>
                  {statItem.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
