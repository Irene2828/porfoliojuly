'use client';

import { motion } from 'framer-motion';
import './SectionDivider.css';

type SectionDividerProps = {
  label?: string;
  theme?: 'light' | 'dark';
  liveLink?: string;
  subline?: string;
  annotations?: { chip: string; text: string; stat: string; statLabel: string }[];
  children?: React.ReactNode;
};

export default function SectionDivider({ label, theme = 'dark', liveLink, subline, annotations, children }: SectionDividerProps) {
  if (theme === 'light') {
    return (
      <motion.div
        className="section-divider-wrap section-divider-light"
        aria-hidden="true"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="section-divider-light-line" />
        <span className="section-divider-light-decor">✦</span>
        <span className="section-divider-light-text">{label || 'Recent Projects'}</span>
        <span className="section-divider-light-decor">✦</span>
        <div className="section-divider-light-line" />
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
    <div className="section-divider-wrap section-divider-with-tag">
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
            {subline && <span className="section-divider-subline">&mdash; {subline}</span>}
          </div>
          <span className="section-divider-tag-dots section-divider-tag-dots-right" />
        </motion.div>
        <div className="section-divider-side-line" />
      </div>

      {children}

      {annotations && annotations.length > 0 && (
        <div className="section-divider-stats-row">
          {annotations.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
              className="section-divider-stat-item"
            >
              <div className="annotation-stat">{item.stat}</div>
              <div className="annotation-stat-label">{item.statLabel}</div>
              <div className="annotation-chip-row">
                <span className="project-chip">{item.chip}</span> {item.text}
              </div>
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
