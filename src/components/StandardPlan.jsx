import React from "react";
import { useNavigate } from "react-router-dom";

export default function StandardPlan() {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 border-l-8 border-indigo-500 hover:shadow-2xl transition duration-300">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
        Standard Plan
      </h2>

      {/* Responsive 2-column layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side — BOS Plan */}
        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-200">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
            BOS Plan
          </h3>

          <p className="text-gray-700 mb-3 leading-relaxed">
            Plan: ₹6,500/- <br />
            One Time Setup: ₹8,000/- <br />
            <span className="text-gray-500">(Excl. GST)</span>
          </p>

          <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Student, Staff & Class Management</li>
            <li>✔ Fees & Attendance Automation</li>
            <li>✔ Homework, Assignments & Notifications</li>
            <li>✔ Custom Reports & Insights</li>
            <li>✔ Parent App Integration</li>
            <li>✔ Priority Support</li>
          </ul>

          <div className="mt-4 text-gray-600 font-medium">
            DATA OF 2000 INDIVIDUALS
          </div>
        </div>

        {/* Right Side — Chatbot Plan */}
        <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
          <h3 className="text-2xl font-semibold text-purple-700 mb-3">
            Chatbot Plan
          </h3>

          <p className="text-gray-700 mb-3 leading-relaxed">
            Plan: ₹6,999/- <br />
            One Time Setup: ₹3,500/- <br />
            <span className="text-gray-500">(Excl. GST)</span>
          </p>

          <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Smart AI Chatbot with Custom Responses</li>
            <li>✔ Parent Query Management</li>
            <li>✔ WhatsApp & Web Integration</li>
            <li>✔ Automated Updates & Notifications</li>
            <li>✔ Performance Analytics</li>
          </ul>

          <div className="mt-4 text-gray-600 font-medium">
            6000 CONVOS 
            DATA OF 1000 INDIVIDUALS
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/contact")}
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg shadow hover:bg-indigo-700 transition"
        >
          Contact for More Details
        </button>
      </div>
    </div>
  );
}
