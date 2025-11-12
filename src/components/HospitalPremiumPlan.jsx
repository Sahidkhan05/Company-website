import React from "react";
import { useNavigate } from "react-router-dom";

export default function HospitalPremiumPlan() {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 border-l-8 border-yellow-500 hover:shadow-2xl transition duration-300">
      <h2 className="text-3xl font-bold text-yellow-600 mb-6 text-center">Premium Plan</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: BOS */}
        <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
          <h3 className="text-2xl font-semibold text-yellow-700 mb-3">BOS Plan</h3>
          <p className="text-gray-700 mb-3 leading-relaxed">
            Plan: ₹14,000/- <br />
            One Time Setup: ₹20,000/- <br />
            <span className="text-gray-500">(Excl. GST)</span>
          </p>

          <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✔ Full EMR (Electronic Medical Records)</li>
            <li>✔ Doctor Portal / App & Patient Portal / App</li>
            <li>✔ Online Payment Integration</li>
            <li>✔ Advanced Pharmacy Management & Auto stock reorder</li>
            <li>✔ HR & Payroll Automation, Biometric integration</li>
            <li>✔ Insurance/TPA Integration</li>
            <li>✔ Multi-Branch Support & Advanced Analytics</li>
            <li>✔ Workflow Automation & Priority Support</li>
          </ul>

          <div className="mt-4 text-gray-600 font-medium">DATA OF 13000 INDIVIDUALS</div>
        </div>

        {/* Right: Chatbot */}
        <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
          <h3 className="text-2xl font-semibold text-orange-700 mb-3">Chatbot Plan</h3>

          <p className="text-gray-700 mb-3 leading-relaxed">
            Plan: ₹11,999/- <br />
            One Time Setup: ₹7,000/- <br />
            <span className="text-gray-500">(Excl. GST)</span>
          </p>

          <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✔ AI Symptom Checker</li>
            <li>✔ Personalized Health Tips & Diet Suggestions</li>
            <li>✔ Prescription Upload & Record Management</li>
            <li>✔ Voice-Enabled Bot (Optional)</li>
            <li>✔ Encrypted Chat + Privacy Mode</li>
            <li>✔ Advanced Analytics Integration & Multi-Doctor Routing</li>
            <li>✔ Smart AI Q&A (ChatGPT-style)</li>
          </ul>

          <div className="mt-4 text-gray-600 font-medium">
            10000 CONVOS 
            DATA OF 7000 INDIVIDUALS
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
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
