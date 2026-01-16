import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Landing from './components/Landing';
import Countdown from './components/Countdown';
import GettingStarted from './components/GettingStarted';
import How from './components/How';
import Features from './components/Features';
import Modes from './components/Modes';
import Timeline from './components/Timeline';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import About from './components/About';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Legal from './components/Legal';

function App() {
  return (
    <div className="font-body text-textLight bg-gradient-to-b from-gradientStart via-gradientMid to-gradientEnd min-h-screen">
      <Header />
      
      <div id="top">
        <Landing />
      </div>

      <motion.div 
        id="countdown"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="py-12 sm:py-16 md:py-20"
      >
        <Countdown />
      </motion.div>

      <motion.div 
        id="how-it-works"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="py-12 sm:py-16 md:py-20"
      >
        <How />
      </motion.div>

      <motion.div 
        id="features"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-12 sm:py-16 md:py-20"
      >
        <Features />
      </motion.div>

      <motion.div 
        id="getting-started"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="py-12 sm:py-16 md:py-20"
      >
        <GettingStarted />
      </motion.div>

      <motion.div 
        id="game-modes"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="py-12 sm:py-16 md:py-20"
      >
        <Modes />
      </motion.div>

      <motion.div 
        id="timeline"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-12 sm:py-16 md:py-20"
      >
        <Timeline />
      </motion.div>

      {/* New Sections */}
      <motion.div 
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-12 sm:py-16 md:py-20"
      >
        <About />
      </motion.div>

      <motion.div 
        id="blog"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-12 sm:py-16 md:py-20"
      >
        <Blog />
      </motion.div>

      <motion.div 
        id="faq"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-12 sm:py-16 md:py-20"
      >
        <FAQ />
      </motion.div>

      <motion.div 
        id="legal"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="py-12 sm:py-16 md:py-20"
      >
        <Legal />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="py-12 sm:py-16 md:py-20"
      >
        <Newsletter />
      </motion.div>

      <Footer />
    </div>
  );
}

export default App;