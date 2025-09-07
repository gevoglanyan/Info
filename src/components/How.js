import React from "react";

const steps = [
  { title: "Launch the App", description: "Open the companion app and sync with your Two Touch game." },
  { title: "Track Your Progress", description: "Monitor your IRL achievements and gameplay stats." },
  { title: "Compete & Interact", description: "Challenge friends and share your scores in real-time." },
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
