import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import './FaceDivider.css';
import faceImage from '../assets/22.webp';

function MosaicBlock({ 
  scrollYProgress, 
  start, 
  end 
}: { 
  scrollYProgress: MotionValue<number>; 
  start: number; 
  end: number; 
}) {
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.001]); // 0.001 to avoid rendering issues at 0
  return (
    <motion.div 
      style={{ 
        backgroundColor: '#ffffff',
        scale,
        transformOrigin: 'center'
      }} 
    />
  );
}

export default function FaceDivider() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Trigger when the section is more in view
    offset: ["start 65%", "start 25%"]
  });

  // Generate 100 random timings for the blocks
  const blocks = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => {
      const start = Math.random() * 0.4;
      const end = start + 0.2;
      return { id: i, start, end };
    });
  }, []);

  return (
    <section className="face-divider-section" ref={containerRef}>
      <div className="face-divider-container">
        <h2 className="title-serif face-headline face-headline-1">Strategic.</h2>
        <h2 className="title-serif face-headline face-headline-2">Creative.</h2>
        <div className="face-image-crop-wrapper">
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
                scrollYProgress={scrollYProgress} 
                start={b.start} 
                end={b.end} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Result-Driven sliding from the left edge premiumly */}
      <motion.div 
        className="result-driven-container"
        initial={{ x: "-100vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3 className="result-driven-text">Result-Driven</h3>
      </motion.div>

      <a href="mailto:hello@example.com" className="cta-button cta-button-dark">
        Let's Work on your next build
      </a>
    </section>
  );
}
