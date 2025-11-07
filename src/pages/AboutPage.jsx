import React, { useEffect } from "react";
import AboutHeader from "../components/AboutHeader";
import Navbar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import MissionVision from "../components/MissionVision";
import JourneyTimeline from "../components/JourneyTimeline";
import TeamSection from "../components/TeamSection";
import FounderSection from "../components/FounderSection";
import WhyChooseSection from "../components/WhyChooseSection";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // page top se start ho
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AboutHeader />
      <MissionVision />
      <FounderSection />
      <JourneyTimeline />
      <WhyChooseSection />
      <TeamSection />
      <FooterSection />
    </div>
  );
};

export default AboutPage;
