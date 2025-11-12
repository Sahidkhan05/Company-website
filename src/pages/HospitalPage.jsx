import React, { useEffect } from 'react'
import Navbar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import HospitalBasicPlan from "../components/HospitalBasicPlan";
import HospitalStandardPlan from "../components/HospitalStandardPlan";
import HospitalPremiumPlan from "../components/HospitalPremiumPlan";

const HospitalPage = () => {

    useEffect(() => {
            window.scrollTo(0, 0) // page top se start ho
          }, [])
          
  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r bg-blue-600 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Hospital Management Plans
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-pink-100">
          Complete hospital automation — from appointments to full EMR, billing and AI-enabled patient support.
        </p>
      </section>

      {/* Chatbot Info header */}
      <section className="text-center py-8 px-6 md:px-20 bg-white border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-rose-700 mb-2">💬 Chatbot + BOS Plans</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Each plan below includes BOS (Hospital system) on left and Chatbot package on right.
        </p>
      </section>

      {/* Plans */}
      <section className="py-12 px-6 md:px-20 space-y-12">
        <HospitalBasicPlan />
        <HospitalStandardPlan />
        <HospitalPremiumPlan />
      </section>

      <FooterSection />
    </div>
  );
};

export default HospitalPage;
