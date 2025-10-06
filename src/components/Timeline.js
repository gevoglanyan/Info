import React from "react";

const timelineSteps = [
  { year: "2026 Q1", event: "Alpha" },
  { year: "2026 Q2", event: "Beta" },
  { year: "2026 Q3", event: "Offical Launch" },
];

const Timeline = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-heading text-center mb-12 text-white">Timeline</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {timelineSteps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-xl text-textDark text-center flex-1"
          >
            <h3 className="text-2xl font-heading mb-2">{step.year}</h3>
            <p className="font-body">{step.event}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
