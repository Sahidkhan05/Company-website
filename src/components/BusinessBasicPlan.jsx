import React from "react";
import { useNavigate } from "react-router-dom";

export default function BusinessBasicPlan() {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 border-l-8 border-green-500 hover:shadow-2xl transition duration-300">
      <h2 className="text-3xl font-bold text-green-600 mb-4 text-center">
        Basic Plan
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* BOS */}
        <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
          <h3 className="text-2xl font-semibold text-green-700 mb-3">
            BOS Plan
          </h3>

          <p className="text-gray-700 mb-3 leading-relaxed">
            Plan: ₹3,000/- <br />
            One Time Setup: ₹4,000/- <br />
            <span className="text-gray-500">(Excl. GST)</span>
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Product Catalog (Self Entry)</li>
            <li>✔ Billing & Invoicing (POS)</li>
            <li>✔ Inventory Auto-Update</li>
            <li>✔ Customer Records (Basic CRM)</li>
            <li>✔ Daily Sales Report</li>
            <li>✔ Staff Attendance</li>
            <li>✔ Khata-Book style Profit/Loss calculation</li>
          </ul>

          <div className="mt-4 text-gray-600 font-medium">
            DATA OF 5000 INDIVIDUALS
          </div>
        </div>

        {/* Chatbot */}
        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
          <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
            Chatbot Plan
          </h3>

          <p className="text-gray-700 mb-3 leading-relaxed">
            Plan: ₹1,500/- <br />
            One Time Setup: ₹1,500/- <br />
            <span className="text-gray-500">(Excl. GST)</span>
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Automated FAQs (price, timings, address)</li>
            <li>✔ Lead capture (CRM / Google Sheet)</li>
            <li>✔ Appointment booking system</li>
            <li>✔ Order tracking</li>
            <li>✔ Welcome messages & product catalog</li>
          </ul>

          <div className="mt-4 text-gray-600 font-medium">
            3000 CONVOS DATA OF 5000 INDIVIDUALS
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/contact")}
          className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg shadow hover:bg-green-700 transition"
        >
          Contact for More Details
        </button>
      </div>
    </div>
  );
}
