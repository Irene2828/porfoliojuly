'use client';

import { motion } from 'framer-motion';
import './SectionDivider.css';

type SectionDividerProps = {
  label?: string;
  theme?: 'light' | 'dark';
  liveLink?: string;
  subline?: string;
  align?: 'center' | 'right';
  statsTitle?: string;
  annotations?: { chip: string; text: string; stat?: string; statLabel?: string; sub?: React.ReactNode }[];
  children?: React.ReactNode;
  className?: string;
};

export default function SectionDivider({ 
  label, 
  theme = 'dark', 
  liveLink, 
  subline, 
  align = 'right', 
  statsTitle,
  annotations, 
  children,
  className = ''
}: SectionDividerProps) {
  if (theme === 'light') {
    const isCenter = align === 'center';
    return (
      <motion.div
        className={`section-divider-wrap section-divider-light ${isCenter ? 'align-center' : 'align-right'}`}
        aria-hidden="true"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="section-divider-light-line left-line" />
        <span className="section-divider-light-decor section-divider-decor-desktop">/</span>
        <span className="section-divider-light-decor section-divider-decor-mobile">+</span>
        <span className="section-divider-light-text">{label || 'Recent Projects'}</span>
        <span className="section-divider-light-decor section-divider-decor-desktop">/</span>
        <span className="section-divider-light-decor section-divider-decor-mobile">+</span>
        <div className="section-divider-light-line right-line" />
      </motion.div>
    );
  }

  if (!label) {
    // Plain line-only divider (no tag)
    return (
      <motion.div
        className="section-divider-wrap"
        aria-hidden="true"
        initial={{ y: 18, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-divider-horizontal-line" />
      </motion.div>
    );
  }

  return (
    <div className={`section-divider-wrap section-divider-with-tag ${className}`.trim()}>
      <div className="section-divider-tag-row">
        <div className="section-divider-side-line" />
        <motion.div 
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="section-divider-tag"
        >
          <span className="section-divider-tag-dots section-divider-tag-dots-left" />
          <div className="section-divider-title-group">
            <div className="section-divider-heading-row">
              <span className="section-divider-tag-text">· {label} ·</span>
            </div>
            {subline && (
              <span className="section-divider-subline" style={{ whiteSpace: 'pre-line' }}>
                &mdash; {subline}
              </span>
            )}
          </div>
          <span className="section-divider-tag-dots section-divider-tag-dots-right" />
        </motion.div>
        <div className="section-divider-side-line" />
      </div>

      {children}

      {statsTitle && (
        <div className="section-divider-stats-heading-wrap">
          <motion.div 
            initial={{ opacity: 0, scaleX: 0.8 }}
            whileInView={{ opacity: 0.85, scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="section-divider-stats-decor-line" 
          />
          <motion.h3 
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="section-divider-stats-heading"
          >
            {statsTitle}
          </motion.h3>
        </div>
      )}

      {annotations && annotations.length > 0 && (
        <div className={`section-divider-stats-row metrics-count-${annotations.length}`}>
          {annotations.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
              className="section-divider-stat-item"
            >
              {item.stat && <div className="annotation-stat">{item.stat}</div>}
              {item.statLabel && <div className="annotation-stat-label">{item.statLabel}</div>}
              <div className="annotation-chip-row">
                <span className="project-chip">{item.chip}</span> {item.text}
              </div>
              {(item as any).sub && (
                <div 
                  className="annotation-sub" 
                  style={{ 
                    fontFamily: 'var(--font-body), "Plus Jakarta Sans", sans-serif',
                    fontSize: '13.5px', 
                    color: '#4b5563', 
                    marginTop: '8px', 
                    lineHeight: '1.55',
                    whiteSpace: 'pre-line'
                  }}
                >
                  {(item as any).sub}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {liveLink && (
        liveLink === '?' ? (
          <span className="section-divider-live-link section-divider-question-mark">?</span>
        ) : (
          <a 
            href={liveLink} 
            target="_blank"
            rel="noopener noreferrer" 
            className="section-divider-live-link"
          >
            LIVE LINK ↗
          </a>
        )
      )}
    </div>
  );
}
