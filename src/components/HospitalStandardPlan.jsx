import React from "react";
import { useNavigate } from "react-router-dom";

export default function HospitalStandardPlan() {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 border-l-8 border-fuchsia-500 hover:shadow-2xl transition duration-300">
      <h2 className="text-3xl font-bold text-fuchsia-600 mb-6 text-center">Standard Plan</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: BOS */}
        <div className="bg-fuchsia-50 p-6 rounded-2xl border border-fuchsia-100">
          <h3 className="text-2xl font-semibold text-fuchsia-700 mb-3">BOS Plan</h3>
          <p className="text-gray-700 mb-3 leading-relaxed">
            Plan: ₹7,000/- <br />
            One Time Setup: ₹10,000/- <br />
            <span className="text-gray-500">(Excl. GST)</span>
          </p>

          <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✔ Multi-Doctor Appointment Management</li>
            <li>✔ Smart Queue Management</li>
            <li>✔ Auto token system & Waiting room display</li>
            <li>✔ Patient Health Records (EMR)</li>
            <li>✔ Prescription Management</li>
            <li>✔ Inventory (Pharmacy/Clinic Store) & Low-stock alerts</li>
            <li>✔ Staff Payroll & Shifts (salary/overtime auto)</li>
            <li>✔ Lab/Test Report Upload & Marketing Tools</li>
          </ul>

          <div className="mt-4 text-gray-600 font-medium">DATA OF 10000 INDIVIDUALS</div>
        </div>

        {/* Right: Chatbot */}
        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
          <h3 className="text-2xl font-semibold text-emerald-700 mb-3">Chatbot Plan</h3>

          <p className="text-gray-700 mb-3 leading-relaxed">
            Plan: ₹6,999/- <br />
            One Time Setup: ₹3,500/- <br />
            <span className="text-gray-500">(Excl. GST)</span>
          </p>

          <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✔ Smart Follow-up Messages</li>
            <li>✔ Prescription & Report Reminder</li>
            <li>✔ Lab Test Booking Integration</li>
            <li>✔ Payment Link / Invoice Sharing</li>
            <li>✔ Feedback Collection & Patient History (Basic CRM)</li>
            <li>✔ Doctor Schedule Management & Multi-Language Support</li>
          </ul>

          <div className="mt-4 text-gray-600 font-medium">
            6000 CONVOS 
            DATA OF 5000 INDIVIDUALS
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/contact")}
          className="bg-fuchsia-600 text-white px-8 py-3 rounded-lg text-lg shadow hover:bg-fuchsia-700 transition"
        >
          Contact for More Details
        </button>
      </div>
    </div>
  );
}
