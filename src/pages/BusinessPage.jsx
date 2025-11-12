import React, { useEffect } from 'react'
import Navbar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import BusinessBasicPlan from "../components/BusinessBasicPlan";
import BusinessStandardPlan from "../components/BusinessStandardPlan";
import BusinessPremiumPlan from "../components/BusinessPremiumPlan";

const BusinessPage = () => {

    useEffect(() => {
                window.scrollTo(0, 0) // page top se start ho
              }, [])

  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r bg-blue-600 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Business Automation & Chatbot Plans
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-green-100">
          Choose the right plan for your business — from basic automation to advanced AI-driven chat support.
        </p>
      </section>

      {/* Chatbot Plan Info */}
      <section className="text-center py-10 px-6 md:px-20 bg-white border-b border-gray-200">
        <h2 className="text-3xl font-semibold text-blue-700 mb-3">
          💬 Chatbot + BOS Plans
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          hese plans include chatbot services that automate customer interactions, sales support, and business operations — boosting efficiency and growth for your enterprise.
        </p>
      </section>

      {/* Plan Components */}
      <section className="py-16 px-6 md:px-20 space-y-20">
        <BusinessBasicPlan />
        <BusinessStandardPlan />
        <BusinessPremiumPlan />
      </section>

      <FooterSection />
    </div>
  );
};

export default BusinessPage;
