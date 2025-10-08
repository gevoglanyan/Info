import React from 'react';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        className="text-5xl md:text-6xl font-heading mb-4 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Two Touch
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl mb-12 font-body drop-shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        an IRL Soccer Companion App
      </motion.p>

      <motion.div
        className="flex gap-4 mb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <button className="bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-gray-200 transition shadow-lg">
          Sign Up for Updates
        </button>
        <button className="border-2 border-white px-6 py-3 rounded-xl hover:bg-white hover:text-primary transition shadow-lg">
          Notify Me
        </button>
      </motion.div>

      <motion.img
        src="/Touch.png"
        alt="Two Touch Logo"
        className="w-[22rem] sm:w-[26rem] md:w-[30rem] drop-shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 1 }}
      />
    </section>
  );
};

export default Landing;
