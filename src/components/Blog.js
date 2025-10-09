import React from "react";
import { motion } from "framer-motion";

const posts = [
  {
    icon: "🧠",
    title: "Beta Feedback Now Open",
    description:
      "We’re collecting player feedback to refine real-life match logging, improve Elo matchmaking, and ensure a seamless experience before our full launch.",
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
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-heading text-center mb-12 text-white">Updates & News</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-xl text-textDark text-center"
            whileHover={{ scale: 1.06, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-5xl mb-4">{post.icon}</div>
            <h3 className="text-2xl font-heading mb-2">{post.title}</h3>
            <p className="font-body">{post.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
