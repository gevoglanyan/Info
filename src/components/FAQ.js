import React from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    icon: "🎮",
    title: "How do I play?",
    description:
      "All matches are played in real life. Use Two Touch to log your wins, losses, and match stats after each game.",
  },
  {
    icon: "📈",
    title: "What is Elo rating?",
    description:
      "Elo rating measures your skill level based on wins, losses, and consistency. It's used to find fair opponents.",
  },
  {
    icon: "⚖️",
    title: "How does matchmaking work?",
    description:
      "The app matches you with players who have similar Elo ratings so every game is competitive and fair.",
  },
  {
    icon: "👥",
    title: "Can I challenge friends?",
    description:
      "Yes! You can track games against friends, compare stats, and even create friendly competitions.",
  },
  {
    icon: "📊",
    title: "Can I see my stats?",
    description:
      "Absolutely. Track your wins, losses, streaks, Elo rating, and personal milestones right in the app.",
  },
  {
    icon: "🐞",
    title: "I found a bug!",
    description:
      "Report any issues using the contact form or email support@twotouchgame.com. We aim to respond within 24 hours.",
  },
];

const FAQ = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-center mb-8 sm:mb-10 md:mb-12 text-textLight font-bold px-4">FAQ</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-cardBg p-5 sm:p-6 rounded-2xl shadow-card text-textDark text-center"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{faq.icon}</div>
            <h3 className="text-xl sm:text-2xl font-heading mb-2 font-semibold">{faq.title}</h3>
            <p className="font-body text-gray-600 text-sm sm:text-base">{faq.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;