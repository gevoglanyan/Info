import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "📊",
    title: "Track Your Stats",
    description:
      "Log all your real-life matches, wins, losses, and track your Elo rating over time.",
  },
  {
    icon: "⚖️",
    title: "Elo-Based Matchmaking",
    description:
      "Find opponents at your skill level based on your Elo rating to ensure fair and competitive matches.",
  },
  {
    icon: "🏆",
    title: "Leaderboards",
    description:
      "See how you rank locally and globally among other players and track your progression.",
  },
  {
    icon: "🎯",
    title: "Challenges & Streaks",
    description:
      "Compete in daily or weekly challenges and aim for personal milestones and streaks.",
  },
  {
    icon: "👥",
    title: "Friends & Social",
    description:
      "Track your friends' stats, challenge them to matches, and compare your progress.",
  },
  {
    icon: "🔔",
    title: "Notifications",
    description:
      "Get reminders about upcoming matches, challenges, or new opponents at your level.",
  },
];

const Features = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-center mb-8 sm:mb-10 md:mb-12 text-textLight font-bold px-4">App Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-cardBg p-5 sm:p-6 rounded-2xl shadow-card text-textDark text-center"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{feature.icon}</div>
            <h3 className="text-xl sm:text-2xl font-heading mb-2 font-semibold">{feature.title}</h3>
            <p className="font-body text-gray-600 text-sm sm:text-base">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;