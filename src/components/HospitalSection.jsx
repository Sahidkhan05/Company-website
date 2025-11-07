import React from "react";

export default function HospitalSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 shadow-lg rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300">
        
        {/* Left Side - Image */}
        <div className="flex-1">
          <img
            src="/hospital.jpg"
            alt="Hospital Management"
            className="w-full rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Smart Hospital Management
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our hospital automation solutions ensure seamless patient record
            management, appointment scheduling, and communication between staff,
            doctors, and patients. Simplify your hospital operations with
            AI-powered chatbots and digital dashboards.
          </p>

          <ul className="space-y-2 text-gray-700 mb-6">
            <li>✔ Digital Patient Management System</li>
            <li>✔ Automated Appointment Booking</li>
            <li>✔ Smart Communication with Chatbots</li>
            <li>✔ Reports & Real-time Analytics</li>
          </ul>

          <button
            onClick={() => (window.location.href = "/contact")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
           Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
