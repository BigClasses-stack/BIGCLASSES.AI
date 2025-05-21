import React from "react";
import LearningJourneySteps from "../LearningJourneySteps";
const HeroSection = () => {
  return (
    <section
      id="hero" // Added id for scrolling
      className="h-[85vh] w-full flex items-center justify-center px-6 md:px-20"
    >
      <div className="text-center max-w-xl">
        <LearningJourneySteps />
      </div>
    </section>
  );
};

export default HeroSection;
