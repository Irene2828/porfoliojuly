'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener('change', updateIsMobile);
    return () => mediaQuery.removeEventListener('change', updateIsMobile);
  }, []);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0,
        delayChildren: 0,
      }
    }
  };

  const itemVariants: any = isMobile
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.28, ease: 'easeOut' },
        },
      }
    : {
        hidden: { y: -6, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.42, ease: [0.2, 0.8, 0.2, 1] },
        },
      };

  return (
    <motion.header 
      className="premium-header"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="header-nav">
        <motion.a href="#work" variants={itemVariants} className="nav-link">Work</motion.a>
        <motion.a href="#expertise" variants={itemVariants} className="nav-link">Expertise</motion.a>
        <motion.a href="#contact" variants={itemVariants} className="nav-link">Contact</motion.a>
      </nav>
    </motion.header>
  );
}
