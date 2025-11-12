import React from "react";
import { useNavigate } from "react-router-dom";

export default function BusinessPremiumPlan() {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 border-l-8 border-red-500 hover:shadow-2xl transition duration-300">
      <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">
        Premium Plan
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* BOS */}
        <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
          <h3 className="text-2xl font-semibold text-red-700 mb-3">BOS Plan</h3>

          <p className="text-gray-700 mb-3">
            <strong>Plan:@10000/-</strong> <br />+
            <br />
            One time Setup: <strong>@10000/-</strong> <br />
            Excl GST
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Cloud POS (Anywhere Access)</li>
            <li>✔ AI-Driven Insights</li>
            <li>✔ Customer & Vendor Portal</li>
            <li>✔ Multi-Location Advanced Inventory</li>
            <li>✔ Franchise Dashboard</li>
            <li>✔ Advanced Reports & Export</li>
            <li>✔ Workflow Automation</li>
            <li>✔ Priority Support</li>
          </ul>

          <div className="mt-4 text-gray-600 font-medium">
            DATA OF 13000 INDIVIDUALS
          </div>
        </div>

        {/* Chatbot */}
        <div className="bg-rose-50 p-6 rounded-2xl border border-rose-200">
          <h3 className="text-2xl font-semibold text-rose-700 mb-3">Chatbot Plan</h3>

          <p className="text-gray-700 mb-3">
            <strong>Plan:@11999/-</strong> <br />+
            <br />
            One time Setup: <strong>@7000/-</strong> <br />
            Excl GST
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Advanced product recommendations (AI-based)</li>
            <li>✔ Dynamic pricing & offers</li>
            <li>✔ Knowledge base search</li>
            <li>✔ Order placement + repeat ordering</li>
            <li>✔ Escalation to human agent</li>
            <li>✔ Cross-platform support</li>
            <li>✔ Sentiment detection</li>
            <li>✔ Detailed analytics & reporting</li>
          </ul>

          <div className="mt-4 text-gray-600 font-medium">
            12000 CONVOS DATA OF 1500 INDIVIDUALS
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/contact")}
          className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg shadow hover:bg-red-700 transition"
        >
          Contact for More Details
        </button>
      </div>
    </div>
  );
}
