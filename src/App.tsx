import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import FaceDivider from './components/FaceDivider'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <Header />
      <Hero />
      <Projects />
      <Services />
      <FaceDivider />
      <Footer />
    </motion.div>
  )
}

export default App
