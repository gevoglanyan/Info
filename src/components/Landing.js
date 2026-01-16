import React from 'react';
import { motion } from 'framer-motion';

const Landing = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-16 md:py-20 pt-24 sm:pt-28">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading mb-4 md:mb-6 drop-shadow-lg text-textLight font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Two Touch
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 font-body drop-shadow-md text-textLight max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        an IRL Soccer Companion App
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-12 w-full sm:w-auto px-4 sm:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <button
          onClick={() => scrollToSection('newsletter')}
          className="bg-accent text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-accentHover transition-all shadow-lg hover:shadow-glow transform hover:scale-105 duration-300 text-sm sm:text-base w-full sm:w-auto"
        >
          Sign Up for Updates
        </button>
        <button
          onClick={() => scrollToSection('newsletter')} 
          className="border-2 border-accent text-accent px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-accent hover:text-white transition-all shadow-lg transform hover:scale-105 duration-300 text-sm sm:text-base w-full sm:w-auto"
        >
          Notify Me
        </button>
      </motion.div>

      <motion.img
        src="/Touch.png"
        alt="Two Touch Logo"
        className="w-64 sm:w-80 md:w-96 lg:w-[30rem] mb-8 md:mb-12 drop-shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 1 }}
      />

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textLight mb-4 md:mb-6 font-heading">
        Follow Us
      </h2>

      <div className="social-icons flex justify-center space-x-6 sm:space-x-8">
        <a
          href="https://www.instagram.com/twotouchgame"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transform transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 sm:h-10 sm:w-10 text-accent hover:text-accentHover transition"
            viewBox="0 0 496 512"
            fill="currentColor"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.8 0 184.8 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.8-1.7 67.6-9.9 93.9-36.1s34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Landing;