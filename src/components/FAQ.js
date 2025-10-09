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
      "Elo rating measures your skill level based on wins, losses, and consistency. It’s used to find fair opponents.",
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
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-heading text-center mb-12 text-white">FAQ</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-xl text-textDark text-center"
            whileHover={{ scale: 1.06, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-5xl mb-4">{faq.icon}</div>
            <h3 className="text-2xl font-heading mb-2">{faq.title}</h3>
            <p className="font-body">{faq.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
