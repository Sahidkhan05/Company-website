import React from "react";
import { useNavigate } from "react-router-dom";

export default function PremiumPlan() {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 border-l-8 border-yellow-500 hover:shadow-2xl transition duration-300">
      <h2 className="text-3xl font-bold text-yellow-600 mb-6 text-center">
        Premium Plan
      </h2>

      {/* Responsive 2-column layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side — BOS Plan */}
        <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
          <h3 className="text-2xl font-semibold text-yellow-700 mb-3">
            BOS Plan
          </h3>

          <p className="text-gray-700 mb-3 leading-relaxed">
            Plan: ₹15,000/- <br />
            One Time Setup: ₹20,000/- <br />
            <span className="text-gray-500">(Excl. GST)</span>
          </p>

          <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
          <ul className="space-y-2 text-gray-700">
            <li>✔ All features of Standard Plan</li>
            <li>✔ Advanced Analytics Dashboard</li>
            <li>✔ Library & Document Management</li>
            <li>✔ Payroll and Salary Slip System</li>
            <li>✔ Multi-language Support</li>
            <li>✔ AI-based Insights & Reports</li>
          </ul>

          <div className="mt-4 text-gray-600 font-medium">
            DATA OF 3000 INDIVIDUALS
          </div>
        </div>

        {/* Right Side — Chatbot Plan */}
        <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
          <h3 className="text-2xl font-semibold text-orange-700 mb-3">
            Chatbot Plan
          </h3>

          <p className="text-gray-700 mb-3 leading-relaxed">
            Plan: ₹11,999/- <br />
            One Time Setup: ₹7,000/- <br />
            <span className="text-gray-500">(Excl. GST)</span>
          </p>

          <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
          <ul className="space-y-2 text-gray-700">
            <li>✔ AI Chatbot with Full Automation</li>
            <li>✔ Multi-Department Query Handling</li>
            <li>✔ Smart Notifications & Reminders</li>
            <li>✔ Integration with ERP Dashboard</li>
            <li>✔ Advanced Convo Analytics</li>
          </ul>

          <div className="mt-4 text-gray-600 font-medium">
            12000 CONVOS
            DATA OF 1500 INDIVIDUALS
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/contact")}
          className="bg-yellow-600 text-white px-8 py-3 rounded-lg text-lg shadow hover:bg-yellow-700 transition"
        >
          Contact for More Details
        </button>
      </div>
    </div>
  );
}
