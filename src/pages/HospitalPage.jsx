import React, { useEffect } from 'react';
import Navbar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import HospitalBasicPlan from "../components/HospitalBasicPlan";
import HospitalStandardPlan from "../components/HospitalStandardPlan";
import HospitalPremiumPlan from "../components/HospitalPremiumPlan";

const HospitalPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // page top se start ho
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white mt-10 py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-3 leading-snug">
          Hospital Management Plans
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-pink-100">
          Complete hospital automation — from appointments to full EMR, billing and AI-enabled patient support.
        </p>
      </section>

      {/* Chatbot Info header */}
      <section className="text-center py-8 sm:py-12 px-4 sm:px-6 md:px-20 bg-white border-b border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-rose-700 mb-2">
          💬 Chatbot + BOS Plans
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Each plan below includes BOS (Hospital system) on left and Chatbot package on right.
        </p>
      </section>

      {/* Plans */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-20 space-y-12 sm:space-y-16">
        <HospitalBasicPlan />
        <HospitalStandardPlan />
        <HospitalPremiumPlan />
      </section>

      <FooterSection />
    </div>
  );
};

export default HospitalPage;
