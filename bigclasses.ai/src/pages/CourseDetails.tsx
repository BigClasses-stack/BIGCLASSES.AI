import React, { useEffect } from "react";
import CourseOverview from "@/components/home/CourseOverview";
import Curriculum from "@/components/home/Curriculum";
import Highlights from "@/components/home/Highlights";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PlacementAssistance from "@/components/home/PlacementAssistance";
import CTASection from "@/components/home/CTASection"; // Assuming this component exists
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; // Added a placeholder for Footer

const CourseDetails: React.FC = () => {
  useEffect(() => {
    // Remove smooth behavior for instant scroll
    window.scrollTo(0, 0);
  }, []);

  return (
    // Use min-h-screen to ensure background covers viewport
    <div className="bg-white min-h-screen antialiased">
      <Navbar />
       {/* Wrap content sections in main for semantics */}
        <Highlights />
        <CourseOverview />
        <Curriculum />
        <TestimonialsSection />
        <PlacementAssistance />
        <CTASection /> {/* Make sure this component exists and is styled */}
        <Footer />
      {/* <Footer />  Consider adding a footer component */}
    </div>
  );
};

export default CourseDetails;