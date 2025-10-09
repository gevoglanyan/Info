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
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-heading text-center mb-12 text-white">Legal & Policies</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {legalItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-xl text-textDark text-center"
            whileHover={{ scale: 1.06, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-heading mb-2">{item.title}</h3>
            <p className="font-body">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Legal;
