import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const launchDate = new Date(2026, 7, 15, 0, 0, 0); 

  const calculateTimeLeft = () => {
    const difference = launchDate - new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-textLight mb-4"
        >
          Official Launch In
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-textLight/80 font-body"
        >
          Get ready to elevate your soccer game tracking experience
        </motion.p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12">
        {timeBlocks.map((block, index) => (
          <motion.div
            key={block.label}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <div className="bg-cardBg rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-highlight" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-accent mb-2 tabular-nums">
                  {String(block.value).padStart(2, '0')}
                </div>
                <div className="text-sm sm:text-base font-body font-medium text-textDark uppercase tracking-wider">
                  {block.label}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center"
      >
        <a
          href="#newsletter"
          className="inline-block bg-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-accentHover transition-all shadow-lg hover:shadow-glow transform hover:scale-105 duration-300 text-sm sm:text-base"
        >
          Get Notified at Launch
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-center mt-8"
      >
        <p className="text-textLight/60 text-sm font-body">
          Launching on{' '}
          <span className="text-accent font-semibold">
            {launchDate.toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        </p>
      </motion.div>
    </section>
  );
};

export default Countdown;