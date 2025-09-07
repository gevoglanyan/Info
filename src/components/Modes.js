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
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-heading text-center mb-12 text-white">Game Modes</h2>

      <br /> 

      <h3 className="text-2xl font-heading text-white mb-6 text-center">Challenges</h3>

      <br /> 

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-xl text-textDark text-center hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <div className="text-4xl mb-4">{challenge.icon}</div>
            <h3 className="text-2xl font-heading mb-2">{challenge.name}</h3>
            <p className="font-body">{challenge.description}</p>
          </div>
        ))}
      </div>

      <br /> <br /> 

      <h3 className="text-2xl font-heading text-white mb-6 text-center">Games</h3>

      <br /> 

      <div className="grid md:grid-cols-3 gap-8">
        {games.map((game, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-xl text-textDark text-center hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <div className="text-4xl mb-4">{game.icon}</div>
            <h3 className="text-2xl font-heading mb-2">{game.name}</h3>
            <p className="font-body">{game.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modes;
