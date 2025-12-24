import React from "react";
import { useNavigate } from "react-router-dom";

export default function BusinessStandardPlan() {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 border-l-8 border-yellow-500 hover:shadow-2xl transition duration-300">
      <h2 className="text-3xl font-bold text-yellow-600 mb-4 text-center">
        Standard Plan
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* BOS */}
        <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
          <h3 className="text-2xl font-semibold text-yellow-700 mb-3">BOS Plan</h3>

          <p className="text-gray-700 mb-3 leading-relaxed">
            Plan: ₹5,000/- <br />
            One Time Setup: ₹6,000/- <br />
            <span className="text-gray-500">(Excl. GST)</span>
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Smart Inventory Alerts</li>
            <li>✔ Multi-Branch Support</li>
            <li>✔ Staff Payroll Management</li>
            <li>✔ Customer Loyalty Program</li>
            <li>✔ Online Order Management</li>
            <li>✔ Marketing Tools (SMS, WhatsApp, Email)</li>
            <li>✔ Supplier & Purchase Orders</li>
            <li>✔ Profit Reports & Role-Based Access</li>
          </ul>

          <div className="mt-4 text-gray-600 font-medium">
            DATA OF 10000 INDIVIDUALS
          </div>
        </div>

        {/* Chatbot */}
        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
          <h3 className="text-2xl font-semibold text-amber-700 mb-3">Chatbot Plan</h3>

        <p className="text-gray-700 mb-3 leading-relaxed">
            Plan: ₹3,500/- <br />
            One Time Setup: ₹3,500/- <br />
            <span className="text-gray-500">(Excl. GST)</span>
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✔ All Basic Plan features</li>
            <li>✔ Personalized reminders</li>
            <li>✔ Feedback & reviews collection</li>
            <li>✔ Multi-language support</li>
            <li>✔ Payment link generation</li>
            <li>✔ Simple surveys & polls</li>
          </ul>

          <div className="mt-4 text-gray-600 font-medium">
            6000 CONVOS DATA OF 5000 INDIVIDUALS
          </div>
        </div>
      </div>

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
