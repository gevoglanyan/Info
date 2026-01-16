import React from "react";

const timelineSteps = [
  { year: "2026 Q1", event: "Alpha" },
  { year: "2026 Q2", event: "Beta" },
  { year: "2026 Q3", event: "Official Launch" },
];

const Timeline = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-center mb-8 sm:mb-10 md:mb-12 text-textLight font-bold px-4">Timeline</h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 sm:gap-6 md:gap-8">
        {timelineSteps.map((step, index) => (
          <div
            key={index}
            className="bg-cardBg p-6 sm:p-8 rounded-2xl shadow-card text-textDark text-center flex-1 hover:shadow-card-hover transition-all duration-300 hover:scale-105"
          >
            <h3 className="text-xl sm:text-2xl font-heading mb-2 text-accent font-bold">{step.year}</h3>
            <p className="font-body text-base sm:text-lg font-medium">{step.event}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;