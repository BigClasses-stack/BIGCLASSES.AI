import { Player } from '@lottiefiles/react-lottie-player';
import learningAnimation from "../assets/animations/learning.json";
import buildingAnimation from "../assets/animations/building.json";
import jobAnimation from "../assets/animations/job.json";
import arrowAnimation from "../assets/animations/arrow.json"; // Import arrow animation

const LearningJourneySteps = () => {
  return (
    <section className="w-full py-40"> {/* Removed bg-white */}
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center"> {/* Fixed layout width class */}
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 inline-block mx-auto px-4">
          India’s Leading Tech Training Hub
        </h2>

        {/* Animations */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6"> {/* Reduced gap */}
          <div className="flex flex-col items-center space-y-4">
            <Player autoplay loop src={learningAnimation} className="h-64 w-64" />
            <p className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300">Hybrid Learning</p>
          </div>

          {/* Arrow Animation */}
          <div className="flex flex-col items-center space-y-2"> {/* Reduced space-y */}
            <Player autoplay loop src={arrowAnimation} className="h-16 w-16" />
          </div>

          <div className="flex flex-col items-center space-y-4">
            <Player autoplay loop src={buildingAnimation} className="h-64 w-64" />
            <p className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300">Hands-On Projects</p>
          </div>

          {/* Arrow Animation */}
          <div className="flex flex-col items-center space-y-2"> {/* Reduced space-y */}
            <Player autoplay loop src={arrowAnimation} className="h-16 w-16" />
          </div>

          <div className="flex flex-col items-center space-y-4">
            <Player autoplay loop src={jobAnimation} className="h-64 w-64" />
            <p className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300">Career Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourneySteps;
