import { motion } from 'framer-motion';
import './Header.css';

export default function Header() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8, // Wait for the initial elegant reveal
      }
    }
  };

  const itemVariants: any = {
    hidden: { y: -20, opacity: 0, filter: 'blur(10px)' },
    visible: { 
      y: 0, 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.2, 0.8, 0.2, 1] } 
    }
  };

  return (
    <motion.header 
      className="premium-header"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="header-logo" variants={itemVariants}>
        IS.
      </motion.div>
      <nav className="header-nav">
        <motion.a href="#work" variants={itemVariants} className="nav-link">Work</motion.a>
        <motion.a href="#expertise" variants={itemVariants} className="nav-link">Expertise</motion.a>
        <motion.a href="#contact" variants={itemVariants} className="nav-link">Contact</motion.a>
      </nav>
    </motion.header>
  );
}
