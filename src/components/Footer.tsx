import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="cta-section"
        >
          <h2 className="title-serif text-huge">From Messy Idea -<br/>to Clean Digital Solution</h2>
          <a href="mailto:hello@example.com" className="cta-button">
            Let's Build It Together
          </a>
        </motion.div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Iryna Sheremeta. All Rights Reserved.</p>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
            <a href="#">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
