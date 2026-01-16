import React from "react";
import { motion } from "framer-motion";

const posts = [
  {
    icon: "🧠",
    title: "Beta Feedback Now Open",
    description:
      "We're collecting player feedback to refine real-life match logging, improve Elo matchmaking, and ensure a seamless experience before our full launch.",
  },
  {
    icon: "⚙️",
    title: "Performance Tracking & Fixes",
    description:
      "New update adds enhanced match stat tracking, smoother syncing, and improved leaderboard calculations.",
  },
  {
    icon: "🚀",
    title: "Web Version Launch",
    description:
      "Two Touch is now live on the web! Log your real-life games, track stats, and see where you stand on the leaderboards.",
  },
  {
    icon: "📊",
    title: "Leaderboard Enhancements",
    description:
      "Updated leaderboards now show streaks, wins, and Elo progression to help you compare performance with friends and globally.",
  },
  {
    icon: "👥",
    title: "Friend Challenges",
    description:
      "You can now challenge friends directly, track match results, and compare stats for friendly competitions.",
  },
  {
    icon: "💡",
    title: "Tips & Tutorials",
    description:
      "New blog posts provide tips on improving your Elo, tracking stats effectively, and making the most of real-life gameplay.",
  },
];

const Blog = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-center mb-8 sm:mb-10 md:mb-12 text-textLight font-bold px-4">Updates & News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-cardBg p-5 sm:p-6 rounded-2xl shadow-card text-textDark text-center"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{post.icon}</div>
            <h3 className="text-xl sm:text-2xl font-heading mb-2 font-semibold">{post.title}</h3>
            <p className="font-body text-gray-600 text-sm sm:text-base">{post.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;