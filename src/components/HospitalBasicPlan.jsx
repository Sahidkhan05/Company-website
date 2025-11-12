import React from "react";
import { useNavigate } from "react-router-dom";

export default function HospitalBasicPlan() {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 border-l-8 border-rose-500 hover:shadow-2xl transition duration-300">
      <h2 className="text-3xl font-bold text-rose-600 mb-6 text-center">Basic Plan</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: BOS */}
        <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
          <h3 className="text-2xl font-semibold text-rose-700 mb-3">BOS Plan</h3>
          <p className="text-gray-700 mb-3 leading-relaxed">
            Plan: ₹4,000/- <br />
            One Time Setup: ₹5,000/- <br />
            <span className="text-gray-500">(Excl. GST)</span>
          </p>

          <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✔ Appointment Booking (Self-Entry)</li>
            <li>✔ Simple calendar view (daily/weekly)</li>
            <li>✔ Digital Patient Records (Basic EMR)</li>
            <li>✔ Billing & Invoices</li>
            <li>✔ Consultation bill generation (print/WhatsApp/email)</li>
            <li>✔ Medicine / Service Catalog</li>
            <li>✔ Daily Reports</li>
            <li>✔ Basic Staff Attendance</li>
          </ul>

          <div className="mt-4 text-gray-600 font-medium">DATA OF 5000 INDIVIDUALS</div>
        </div>

        {/* Right: Chatbot */}
        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Chatbot Plan</h3>

          <p className="text-gray-700 mb-3 leading-relaxed">
            Plan: ₹2,999/- <br />
            One Time Setup: ₹1,500/- <br />
            <span className="text-gray-500">(Excl. GST)</span>
          </p>

          <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✔ Basic FAQs Handling</li>
            <li>✔ Doctor Availability Check</li>
            <li>✔ Auto Confirmation & Reminder</li>
            <li>✔ Reschedule / Cancel Option</li>
            <li>✔ Clinic Timings & Location Info</li>
            <li>✔ Appointment Booking System support</li>
          </ul>

          <div className="mt-4 text-gray-600 font-medium">
            3000 CONVOS 
            DATA OF 3000 INDIVIDUALS
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/contact")}
          className="bg-rose-600 text-white px-8 py-3 rounded-lg text-lg shadow hover:bg-rose-700 transition"
        >
          Contact for More Details
        </button>
      </div>
    </div>
  );
}
