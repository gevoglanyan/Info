import React from "react";
import { motion } from "framer-motion";

const features = [
  { icon: "📊", title: "Track Stats", description: "Keep track of all your game stats in real-time." },
  { icon: "🔔", title: "Notifications", description: "Get alerts for challenges and friend activities." },
  { icon: "🏆", title: "Leaderboards", description: "See where you rank among your friends and the world." },
];

const Features = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-heading text-center mb-12 text-white">App Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-xl text-textDark text-center"
            whileHover={{ scale: 1.06, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-heading mb-2">{feature.title}</h3>
            <p className="font-body">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
