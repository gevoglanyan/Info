import React from 'react';
import { motion } from 'framer-motion';

const GettingStarted = () => {
  const steps = [
    {
      number: '01',
      title: 'Download the App',
      description: 'Get Two Touch from the App Store or Google Play. Create your account in seconds with just your email.',
      icon: '📱',
      color: 'from-accent to-accentHover',
    },
    {
      number: '02',
      title: 'Set Up Your Profile',
      description: 'Add your details, select your position, and set your skill level. Connect with friends to start tracking.',
      icon: '👤',
      color: 'from-highlight to-accent',
    },
    {
      number: '03',
      title: 'Log Your First Match',
      description: 'After playing a real-life game, enter the match result. The app calculates your Elo rating automatically.',
      icon: '⚽',
      color: 'from-accentHover to-highlight',
    },
    {
      number: '04',
      title: 'Track & Compete',
      description: 'Watch your stats grow, climb the leaderboards, and find opponents at your skill level for fair matches.',
      icon: '📊',
      color: 'from-accent to-highlight',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-textLight mb-4 px-4"
        >
          Getting Started with Two Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-textLight/80 font-body max-w-2xl mx-auto px-4"
        >
          From download to your first match in 4 simple steps
        </motion.p>
      </div>

      <div className="hidden lg:block relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-highlight to-accent transform -translate-y-1/2 opacity-30" />
        
        <div className="grid grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full border-4 border-primary z-10" />
              
              <div className="bg-cardBg rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group relative overflow-hidden mt-8">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className={`inline-block bg-gradient-to-br ${step.color} text-white text-lg font-heading font-bold px-4 py-1 rounded-lg mb-4`}>
                    {step.number}
                  </div>
                  
                  <div className="text-5xl mb-4">{step.icon}</div>
                  
                  <h3 className="text-xl font-heading font-semibold text-textDark mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 font-body text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="lg:hidden space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            {index < steps.length - 1 && (
              <div className="absolute left-8 top-24 bottom-0 w-1 bg-gradient-to-b from-accent to-highlight opacity-30 transform translate-y-4" />
            )}
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg relative z-10`}>
                  <span className="text-white text-2xl font-heading font-bold">
                    {step.number}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 bg-cardBg rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 group relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className="text-4xl mb-3">{step.icon}</div>
                  
                  <h3 className="text-xl font-heading font-semibold text-textDark mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 font-body text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-12 sm:mt-16"
      >
        <p className="text-textLight/80 font-body mb-6 text-sm sm:text-base">
          Ready to start tracking your soccer journey?
        </p>
        <a
          href="#newsletter"
          className="inline-block bg-gradient-to-r from-accent to-highlight text-white font-bold px-8 py-4 rounded-xl hover:shadow-glow transition-all transform hover:scale-105 duration-300 text-sm sm:text-base"
        >
          Join the Waitlist
        </a>
      </motion.div>
    </section>
  );
};

export default GettingStarted;