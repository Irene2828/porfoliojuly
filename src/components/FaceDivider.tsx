import { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import './FaceDivider.css';
import faceImage from '../assets/22.webp';

function MosaicBlock({ 
  delay 
}: { 
  delay: number; 
}) {
  return (
    <motion.div 
      style={{ 
        backgroundColor: '#ffffff',
        transformOrigin: 'center'
      }} 
      initial={{ scale: 1 }}
      whileInView={{ scale: 0 }}
      viewport={{ amount: 0.1 }}
      transition={{
        duration: 0.8, // 50% faster speed
        delay,
        ease: "easeInOut"
      }}
    />
  );
}

export default function FaceDivider() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Generate 100 random timings for looping delays
  const blocks = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => {
      const delay = Math.random() * 1.2;
      return { id: i, delay };
    });
  }, []);

  return (
    <section className="face-divider-section" ref={containerRef}>
      <div className="face-divider-container">
        <h2 className="title-serif face-headline face-headline-1">Strategic.</h2>
        <h2 className="title-serif face-headline face-headline-2">Creative.</h2>
        <div className="face-image-crop-wrapper" ref={imageRef}>
          <img 
            src={faceImage} 
            alt="Central face detail" 
            className="face-banner-image" 
          />
          {/* Mosaic Grid Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 1fr)',
            gridTemplateRows: 'repeat(10, 1fr)',
            pointerEvents: 'none'
          }}>
            {blocks.map(b => (
              <MosaicBlock 
                key={b.id} 
                delay={b.delay} 
              />
            ))}
          </div>
        </div>
      </div>

      <motion.h2 
        className="title-serif face-headline" 
        style={{ position: 'relative', marginTop: '-1rem' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        Result-Driven.
      </motion.h2>

      <a href="mailto:hello@example.com" className="cta-button cta-button-dark">
        Let's Work on your next build
      </a>
    </section>
  );
}
