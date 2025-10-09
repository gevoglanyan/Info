import React from "react";

const steps = [
  {
    title: "Create Your Profile",
    description:
      "Set up your account with basic info and start building your Two Touch identity.",
  },
  {
    title: "Log Your Matches",
    description:
      "Enter results from real-life games you play against friends or opponents found via the app.",
  },
  {
    title: "Track Your Stats",
    description:
      "Monitor wins, losses, streaks, and Elo rating to see how your skill improves over time.",
  },
  {
    title: "Find Opponents",
    description:
      "The app matches you with players at your skill level using Elo ratings for fair competition.",
  },
  {
    title: "Compete & Challenge",
    description:
      "Challenge friends or new opponents, participate in weekly streaks or personal milestones.",
  },
  {
    title: "Analyze & Improve",
    description:
      "Check your performance charts, leaderboards, and stats to identify strengths and areas to improve.",
  },
];

const How = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-heading text-center mb-12 text-white">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-xl text-textDark text-center hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <div className="text-3xl mb-4 text-primary font-bold">{index + 1}</div>
            <h3 className="text-2xl font-heading mb-2">{step.title}</h3>
            <p className="font-body">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default How;
