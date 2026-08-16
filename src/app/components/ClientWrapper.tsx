'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';

export default function ClientWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.location.hash) return;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
