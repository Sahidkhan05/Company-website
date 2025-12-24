import React from "react";
import { useNavigate } from "react-router-dom";

export default function BasicPlan() {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 border-l-8 border-blue-500 hover:shadow-2xl transition duration-300">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Basic Plan
      </h2>

      {/* Responsive 2-column layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side — BOS Plan */}
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">
            BOS Plan
          </h3>

          <p className="text-gray-700 mb-3 leading-relaxed">
            Plan: ₹2,500/- <br />
            One Time Setup: ₹3,000/- <br />
            <span className="text-gray-500">(Excl. GST)</span>
          </p>

          <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Student & Staff Management</li>
            <li>✔ Attendance Tracking</li>
            <li>✔ Homework & Assignments (Basic)</li>
            <li>✔ Fees Management (Manual)</li>
            <li>✔ Parent SMS Alerts</li>
            <li>✔ Basic Dashboard Analytics</li>
          </ul>

          <div className="mt-4 text-gray-600 font-medium">
            DATA OF 1000 INDIVIDUALS
          </div>
        </div>

        {/* Right Side — Chatbot Plan */}
        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-200">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
            Chatbot Plan
          </h3>

          <p className="text-gray-700 mb-3 leading-relaxed">
            Plan: ₹1,000/- <br />
            One Time Setup: ₹1,000/- <br />
            <span className="text-gray-500">(Excl. GST)</span>
          </p>

          <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Smart AI Chatbot</li>
            <li>✔ Parent Query Handling</li>
            <li>✔ Automated Info Sharing</li>
            <li>✔ WhatsApp Integration (optional)</li>
            <li>✔ Chat Analytics</li>
          </ul>

          <div className="mt-4 text-gray-600 font-medium">
            3000 CONVOS 
            DATA OF 500 IINDIVIDUALS
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/contact")}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg shadow hover:bg-blue-700 transition"
        >
          Contact for More Details
        </button>
      </div>
    </div>
  );
}
