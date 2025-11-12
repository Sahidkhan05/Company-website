import React, { useEffect } from 'react'
import Navbar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import BasicPlan from "../components/BasicPlan";
import StandardPlan from "../components/StandardPlan";
import PremiumPlan from "../components/PremiumPlan";

const SchoolPage = () => {

     useEffect(() => {
            window.scrollTo(0, 0) // page top se start ho
          }, [])

  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r bg-blue-600  text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          School ERP & Management Plans
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-blue-100">
          Choose the perfect plan for your school — from smart operations to full automation and analytics.
        </p>
      </section>

      {/* Chatbot Plan Info */}
      <section className="text-center py-10 px-6 md:px-20 bg-white border-b border-gray-200">
        <h2 className="text-3xl font-semibold text-blue-700 mb-3">
          💬 Chatbot + BOS Plans
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          These plans include chatbot services that automate communication, help desk, 
          and student/parent interactions — boosting efficiency across your school system.
        </p>
      </section>

      {/* Plan Components */}
      <section className="py-16 px-6 md:px-20 space-y-20">
        <BasicPlan
          title="Basic Plan"
          convos="3000 Convos"
          data="Data of 500 Individuals"
        />
        <StandardPlan
          title="Standard Plan"
          convos="6000 Convos"
          data="Data of 1000 Individuals"
        />
        <PremiumPlan
          title="Premier Plan"
          convos="12000 Convos"
          data="Data of 1500 Individuals"
        />
      </section>

      <FooterSection />
    </div>
  );
};

export default SchoolPage;
