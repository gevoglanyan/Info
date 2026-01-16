import React from "react";
import { motion } from "framer-motion";

const aboutItems = [
  {
    icon: "⚽",
    title: "Our Story",
    description:
      "Two Touch started from pickup games among friends who wanted an easy way to track wins, losses, and match stats without spreadsheets — turning real-life soccer into a competitive tracking experience.",
  },
  {
    icon: "🌍",
    title: "Our Mission",
    description:
      "We aim to connect soccer players worldwide through real-life competition and a digital platform that tracks performance, skill progression, and fair matchmaking.",
  },
  {
    icon: "🎯",
    title: "Our Vision",
    description:
      "To create a global community of players who can compete fairly, track their skill improvement, and enjoy real-world soccer like never before.",
  },
  {
    icon: "👥",
    title: "The Team",
    description:
      "Created by Harry Gevoglanyan — Developer & Designer — with a focus on combining real-life sports with smart digital tracking and competitive matchmaking.",
  },
  {
    icon: "💡",
    title: "Our Values",
    description:
      "Fair play, progress, community, and accessibility guide everything we do — from the app's design to the way matches are tracked and ranked.",
  },
  {
    icon: "📈",
    title: "How It Works",
    description:
      "Players log their real-life matches, the app calculates Elo ratings, and matchmaking ensures fair competition while tracking wins, losses, and streaks.",
  },
];

const About = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-center mb-8 sm:mb-10 md:mb-12 text-textLight font-bold px-4">About Two Touch</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {aboutItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-cardBg p-5 sm:p-6 rounded-2xl shadow-card text-textDark text-center"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{item.icon}</div>
            <h3 className="text-xl sm:text-2xl font-heading mb-2 font-semibold">{item.title}</h3>
            <p className="font-body text-gray-600 text-sm sm:text-base">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;