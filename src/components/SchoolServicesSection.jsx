import React from "react";

export default function SchoolServicesSection() {
  return (
    <section className="py-20 px-6 md:px-24 bg-gray-50">
      <div className="grid md:grid-cols-2 items-center gap-12 bg-white rounded-2xl shadow-lg p-10">
        
        {/* Left Image - Optimized */}
        <div className="flex justify-center">
          <img
            src="/school.jpg"
            alt="School Management"
            loading="lazy" // ✅ Lazy load image for better performance
            width="800"
            height="600"
            className="w-[90%] max-w-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
          />
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            School Management Solutions
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our smart school ERP system automates daily operations — from attendance to fee collection,
            homework updates, and real-time parent communication — making school management simpler.
          </p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li>✔ Student & Staff Management</li>
            <li>✔ Attendance & Timetable Automation</li>
            <li>✔ Fees & Report Management</li>
            <li>✔ Parent App Integration (Chatbot)</li>
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
