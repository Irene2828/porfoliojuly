import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import FaceDivider from './components/FaceDivider'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hold the curtain for a moment before revealing the site
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="curtain"
            initial={{ y: 0 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.8, 0, 0.1, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: '#fff', /* White curtain to match the light aesthetic */
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Elegant minimal dot to "kiss" the user */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#111'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Header />
      <Hero />
      <Projects />
      <FaceDivider />
      <Services />
      <Footer />
    </>
  )
}

export default App
