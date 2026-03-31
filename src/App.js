import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

import Header from './components/Header';
import Landing from './components/Landing';
import How from './components/How';
import Features from './components/Features';
import Modes from './components/Modes';
import GettingStarted from './components/GettingStarted';
import Countdown from './components/Countdown';
import About from './components/About';
import Timeline from './components/Timeline';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Legal from './components/Legal';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const Divider = () => <div className="tt-divider" />;

function App() {
  return (
    <div className="font-body text-textLight bg-gradient-to-b from-gradientStart via-gradientMid to-gradientEnd min-h-screen">
      
      <Header />

      <main>

        <div id="top">
          <Landing />
        </div>

        <Divider />

        <motion.div
          id="how-it-works"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <How />
        </motion.div>

        <Divider />

        <motion.div
          id="features"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Features />
        </motion.div>

        <Divider />

        <motion.div
          id="game-modes"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Modes />
        </motion.div>

        <Divider />

        <motion.div
          id="getting-started"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GettingStarted />
        </motion.div>

        <Divider />

        <motion.div
          id="countdown"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Countdown />
        </motion.div>

        <Divider />

        <motion.div
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.div>

        <Divider />

        <motion.div
          id="timeline"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Timeline />
        </motion.div>

        <Divider />

        <motion.div
          id="blog"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Blog />
        </motion.div>

        <Divider />

        <motion.div
          id="faq"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <FAQ />
        </motion.div>

        <Divider />

        <motion.div
          id="legal"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Legal />
        </motion.div>

        <Divider />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Newsletter />
        </motion.div>

      </main>

      <Footer />

    </div>
  );
}

export default App;