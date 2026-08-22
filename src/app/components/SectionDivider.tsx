'use client';

import { motion } from 'framer-motion';
import './SectionDivider.css';

type SectionDividerProps = {
  label?: string;
};

export default function SectionDivider({ label }: SectionDividerProps) {
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

  // Divider with centered project title tag: line ——— [TAG] ——— line
  return (
    <motion.div
      className="section-divider-wrap section-divider-with-tag"
      aria-hidden="true"
      initial={{ y: 18, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="section-divider-tag-row">
        <div className="section-divider-side-line" />
        <div className="section-divider-tag">
          <span className="section-divider-tag-dots section-divider-tag-dots-left" />
          <span className="section-divider-tag-text">{label}</span>
          <span className="section-divider-tag-dots section-divider-tag-dots-right" />
        </div>
        <div className="section-divider-side-line" />
      </div>
    </motion.div>
  );
}
