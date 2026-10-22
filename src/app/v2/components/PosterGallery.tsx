'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface PosterGalleryImage {
  src: string;
  caption: string;
  stepLabel: string;
}

export default function PosterGallery({ images }: { images: PosterGalleryImage[] }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIdx] || images[0];

  return (
    <div className="poster-gallery-container" style={{ width: '100%', position: 'relative' }}>
      <style>{`
        .poster-gallery-card {
          width: 100%;
          background: #ffffff;
          border: 1px solid rgba(18, 18, 18, 0.12);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
          position: relative;
        }
        .poster-gallery-main-view {
          width: 100%;
          aspect-ratio: 16 / 9.6;
          background: #f8f9fa;
          position: relative;
          cursor: pointer;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .poster-gallery-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: top center;
          display: block;
        }
        .poster-gallery-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(26, 38, 57, 0.75);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 20px;
          line-height: 1;
          opacity: 0;
          transition: opacity 0.2s ease, background 0.2s ease, transform 0.2s ease;
          z-index: 10;
        }
        .poster-gallery-card:hover .poster-gallery-nav-btn {
          opacity: 0.9;
        }
        .poster-gallery-nav-btn:hover {
          background: rgba(26, 38, 57, 0.95);
          opacity: 1 !important;
          transform: translateY(-50%) scale(1.08);
        }
        .poster-gallery-nav-prev {
          left: 14px;
        }
        .poster-gallery-nav-next {
          right: 14px;
        }
        @media (max-width: 900px), (hover: none) {
          .poster-gallery-nav-btn {
            opacity: 0.85;
          }
        }
        .poster-gallery-controls-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 10px;
        }
        .poster-gallery-controls {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 3px 10px;
          background: #ffffff;
          border: 1px solid rgba(18, 18, 18, 0.16);
          border-radius: 9999px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }
        .poster-gallery-ctrl-btn {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: none;
          background: transparent;
          color: #121212;
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: 16px;
          font-weight: 500;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
          padding: 0;
        }
        .poster-gallery-ctrl-btn:hover {
          background: #f0f0f2;
          color: #000000;
        }
        .poster-gallery-counter {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: #4b5563;
          user-select: none;
          padding: 0 4px;
        }
      `}</style>

      <div className="poster-gallery-card">
        {/* Clickable Image View */}
        <div 
          className="poster-gallery-main-view"
          onClick={() => handleNext()}
          title="Click to advance to next snapshot"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage.src}
              src={currentImage.src}
              alt={currentImage.stepLabel}
              className="poster-gallery-img"
              initial={{ opacity: 0.45, scale: 0.995 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.45, scale: 0.995 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            />
          </AnimatePresence>

          {/* Prev / Next arrows */}
          <button 
            type="button" 
            className="poster-gallery-nav-btn poster-gallery-nav-prev" 
            onClick={handlePrev} 
            aria-label="Previous snapshot"
            title="Previous snapshot"
          >
            ‹
          </button>
          <button 
            type="button" 
            className="poster-gallery-nav-btn poster-gallery-nav-next" 
            onClick={handleNext} 
            aria-label="Next snapshot"
            title="Next snapshot"
          >
            ›
          </button>
        </div>
      </div>

      {/* Navigation Controls: Arrows + Counter (e.g. 1 / 3) */}
      <div className="poster-gallery-controls-wrap">
        <div className="poster-gallery-controls">
          <button
            type="button"
            className="poster-gallery-ctrl-btn"
            onClick={handlePrev}
            aria-label="Previous snapshot"
            title="Previous snapshot"
          >
            ‹
          </button>
          <span className="poster-gallery-counter">
            {currentIdx + 1} / {images.length}
          </span>
          <button
            type="button"
            className="poster-gallery-ctrl-btn"
            onClick={handleNext}
            aria-label="Next snapshot"
            title="Next snapshot"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
