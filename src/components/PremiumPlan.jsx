import React from "react";
import Navbar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import WhyChooseSection from "../components/WhyChooseSection"; // optional
import { useNavigate } from "react-router-dom";

export default function PremiumPlan() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-20 px-6 md:px-24  bg-blue-600 text-center text-white">
        <h1 className="text-4xl font-bold mb-3">Premium Plan</h1>
        <p className="text-lg max-w-2xl mx-auto">
          For institutions that want complete digital transformation and automation.
        </p>
      </section>

      {/* Plan Details */}
      <section className="py-16 px-6 md:px-24">
        <div className="bg-white shadow-xl rounded-2xl p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            ₹6,999{" "}
            <span className="text-gray-500 text-lg">
              + One Time Setup ₹3,500 (Excl. GST)
            </span>
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Includes everything in Standard Plan, plus:
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li>✔ AI-powered performance insights (student weakness, prediction reports)</li>
            <li>✔ Library management (issue/return)</li>
            <li>✔ Document management (TC, Students & Teachers certificates, ID cards)</li>
            <li>✔ Staff payroll + salary slips</li>
            <li>✔ Advanced analytics dashboard (growth trends, revenue, performance)</li>
            <li>✔ Multi-language support (English + regional)</li>
          </ul>

          {/* CTA Button */}
          <div className="text-center mt-10">
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg text-lg shadow hover:bg-blue-800 transition"
            >
              Contact for More Details
            </button>
          </div>
        </div>
      </section>

      {/* Optional: Why Choose Section */}
      <WhyChooseSection />

      <FooterSection />
    </div>
  );
}
