'use client';

import { motion } from 'framer-motion';
import './SectionDivider.css';

type SectionDividerProps = {
  label?: string;
};

export default function SectionDivider({ label }: SectionDividerProps) {
  return (
    <motion.div
      className="section-divider-wrap"
      aria-hidden="true"
      initial={{ y: 18, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="section-divider-line" />
      {label ? <span className="section-divider-label">{label}</span> : null}
      <div className="section-divider-line" />
    </motion.div>
  );
}
