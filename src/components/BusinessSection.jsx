import React from "react";

export default function BusinessSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 shadow-lg rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300">
        
        {/* Right Side - Optimized Image */}
        <div className="flex-1">
          <img
            src="/business.jpg"
            alt="Business Automation"
            loading="lazy" // ✅ Lazy loading for performance
            width="800"
            height="600"
            className="w-full rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 object-cover"
          />
        </div>

        {/* Left Side - Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Business Automation & Growth
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We help businesses automate their operations and connect better with
            customers using AI-powered chatbots, CRMs, and digital dashboards.
            Save time, boost revenue, and manage everything from one platform.
          </p>

          <ul className="space-y-2 text-gray-700 mb-6">
            <li>✔ AI Chatbots for Customer Support</li>
            <li>✔ CRM & Lead Management</li>
            <li>✔ Payment & Billing Automation</li>
            <li>✔ Real-time Business Analytics</li>
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
