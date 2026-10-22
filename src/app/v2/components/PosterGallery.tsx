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
        .poster-gallery-caption-box {
          padding: 14px 18px;
          background: #fafbfc;
          border-top: 1px solid rgba(18, 18, 18, 0.08);
          font-family: var(--font-body), -apple-system, sans-serif;
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--color-body-dark, #2b3038);
          text-align: left;
        }
        .poster-gallery-thumbs {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-top: 14px;
          padding: 4px 8px;
        }
        .poster-gallery-thumb-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 20px;
          border: 1px solid #d1d5db;
          background: #f9fafb;
          color: var(--color-heading-silver, #4a5461);
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .poster-gallery-thumb-btn:hover {
          border-color: var(--accent, #3ba3b8);
          color: var(--color-matte-black, #1c1e23);
        }
        .poster-gallery-thumb-btn.active {
          background: var(--color-matte-black, #1c1e23);
          color: #ffffff;
          border-color: var(--color-matte-black, #1c1e23);
          font-weight: 600;
        }
        .poster-gallery-thumb-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
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

        {/* Caption */}
        <div className="poster-gallery-caption-box">
          {currentImage.caption}
        </div>
      </div>

      {/* Thumbnails / Indicators */}
      <div className="poster-gallery-thumbs">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            className={`poster-gallery-thumb-btn ${currentIdx === idx ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIdx(idx);
            }}
          >
            <span className="poster-gallery-thumb-dot" />
            <span>Snapshot {idx + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
