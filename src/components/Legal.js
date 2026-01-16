import React from "react";
import { motion } from "framer-motion";

const legalItems = [
  {
    icon: "🔒",
    title: "Privacy Policy",
    description:
      "We collect minimal data such as email and gameplay stats only to improve your experience. Your data is never sold or shared. You can request deletion anytime.",
  },
  {
    icon: "📜",
    title: "Terms of Service",
    description:
      "By using Two Touch, you agree to play fairly, respect other players, and report issues responsibly. Misuse of the platform may result in account suspension.",
  },
  {
    icon: "🍪",
    title: "Cookie Policy",
    description:
      "We use cookies to enhance performance, track app usage, and improve analytics. You can disable cookies anytime in your browser settings without affecting core functionality.",
  },
  {
    icon: "🛡️",
    title: "Safety & Security",
    description:
      "We prioritize account security and fair play. All sensitive data is encrypted, and we continuously monitor for fraudulent activity.",
  },
  {
    icon: "⚖️",
    title: "Dispute Resolution",
    description:
      "Any disputes regarding match results, rankings, or account issues can be reported through our support channels for fair review.",
  },
];

const Legal = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-center mb-8 sm:mb-10 md:mb-12 text-textLight font-bold px-4">Legal & Policies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {legalItems.map((item, index) => (
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

export default Legal;