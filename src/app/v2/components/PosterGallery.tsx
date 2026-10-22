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
        .poster-gallery-browser-bar {
          height: 38px;
          background: #1A2639;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 14px;
          user-select: none;
        }
        .poster-gallery-dots {
          display: flex;
          gap: 6px;
        }
        .poster-gallery-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
        }
        .poster-gallery-title {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.85);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .poster-gallery-controls {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .poster-gallery-btn {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          width: 24px;
          height: 24px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 14px;
          line-height: 1;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .poster-gallery-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.05);
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
        .poster-gallery-caption-box {
          padding: 14px 18px;
          background: #fafbfc;
          border-top: 1px solid rgba(18, 18, 18, 0.08);
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-size: 13.5px;
          line-height: 1.5;
          color: #374151;
          text-align: left;
        }
        .poster-gallery-thumbs {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
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
          color: #4b5563;
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .poster-gallery-thumb-btn.active {
          background: #1A2639;
          color: #ffffff;
          border-color: #1A2639;
          font-weight: 600;
        }
        .poster-gallery-thumb-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
        }
        .poster-gallery-click-hint {
          position: absolute;
          bottom: 12px;
          right: 14px;
          background: rgba(26, 38, 57, 0.78);
          backdrop-filter: blur(4px);
          color: #ffffff;
          font-size: 10.5px;
          font-family: var(--font-mono), monospace;
          padding: 4px 9px;
          border-radius: 12px;
          letter-spacing: 0.04em;
          pointer-events: none;
        }
      `}</style>

      <div className="poster-gallery-card">
        {/* Browser Top Bar */}
        <div className="poster-gallery-browser-bar">
          <div className="poster-gallery-dots">
            <div className="poster-gallery-dot" />
            <div className="poster-gallery-dot" />
            <div className="poster-gallery-dot" />
          </div>

          <div className="poster-gallery-title">
            <span>{currentImage.stepLabel}</span>
            <span style={{ opacity: 0.45 }}>({currentIdx + 1} of {images.length})</span>
          </div>

          <div className="poster-gallery-controls">
            <button 
              type="button" 
              className="poster-gallery-btn" 
              onClick={handlePrev} 
              aria-label="Previous screenshot"
              title="Previous screenshot (or swipe)"
            >
              ‹
            </button>
            <button 
              type="button" 
              className="poster-gallery-btn" 
              onClick={handleNext} 
              aria-label="Next screenshot"
              title="Next screenshot (or click image)"
            >
              ›
            </button>
          </div>
        </div>

        {/* Clickable Image View */}
        <div 
          className="poster-gallery-main-view"
          onClick={() => handleNext()}
          title="Click to advance to next screenshot"
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

          <div className="poster-gallery-click-hint">
            Click image to advance ↻
          </div>
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
            <span>Picture {idx + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
