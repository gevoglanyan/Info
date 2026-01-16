import React from "react";

const challenges = [
  {
    name: "Penalty Shootouts",
    description: "Test your nerves from the spot. Score as many as you can against the keeper.",
    icon: "🥅",
  },
  {
    name: "Crossbar Challenges",
    description: "Show off your precision. Hit the crossbar as many times as possible.",
    icon: "🎯",
  },
  {
    name: "Freekicks",
    description: "Bend it like Beckham! Score from different freekick positions.",
    icon: "⚽",
  },
  {
    name: "Juggling Challenge",
    description: "Keep the ball in the air for as long as possible without letting it drop.",
    icon: "🤹‍♂️",
  },
  {
    name: "Corners Challenge",
    description: "Try to score directly from corner kicks or set up perfect assists.",
    icon: "🌀",
  },
  {
    name: "More Coming Soon",
    description: "Stay tuned for new challenges!",
    icon: "⏳",
  },
];

const games = [
  {
    name: "1v1",
    description: "Take on your opponent in a head-to-head duel.",
    icon: "👤",
  },
  {
    name: "3v3",
    description: "Small-sided intense matches with friends.",
    icon: "👥",
  },
  {
    name: "5v5",
    description: "Classic street football style, fast-paced and technical.",
    icon: "⚡",
  },
  {
    name: "6v6",
    description: "Fast-paced half-field action with bigger teams.",
    icon: "🏃‍♂️",
  },
  {
    name: "11v11",
    description: "The full experience — play as a complete squad.",
    icon: "🏟️",
  },
  {
    name: "More Coming Soon",
    description: "Exciting new game modes are on the way!",
    icon: "⏳",
  },
];

const Modes = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-center mb-8 sm:mb-10 md:mb-12 text-textLight font-bold px-4">Game Modes</h2>

      <h3 className="text-2xl sm:text-3xl font-heading text-accent mb-6 sm:mb-8 text-center font-semibold">Challenges</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="bg-cardBg p-5 sm:p-6 rounded-2xl shadow-card text-textDark text-center hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{challenge.icon}</div>
            <h3 className="text-xl sm:text-2xl font-heading mb-2 font-semibold">{challenge.name}</h3>
            <p className="font-body text-gray-600 text-sm sm:text-base">{challenge.description}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl sm:text-3xl font-heading text-highlight mb-6 sm:mb-8 text-center font-semibold">Games</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {games.map((game, index) => (
          <div
            key={index}
            className="bg-cardBg p-5 sm:p-6 rounded-2xl shadow-card text-textDark text-center hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{game.icon}</div>
            <h3 className="text-xl sm:text-2xl font-heading mb-2 font-semibold">{game.name}</h3>
            <p className="font-body text-gray-600 text-sm sm:text-base">{game.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modes;