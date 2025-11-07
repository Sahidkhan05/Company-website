import React from "react";
import Navbar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import { useNavigate } from "react-router-dom";

export default function StandardPlan() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-20 px-6 md:px-24  bg-blue-600 text-center text-white">
        <h1 className="text-4xl font-bold mb-3">Standard Plan</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Includes everything in the Basic Plan, plus advanced school management features.
        </p>
      </section>

      {/* Plan Details Box */}
      <section className="py-16 px-6 md:px-24">
        <div className="bg-white shadow-xl rounded-2xl p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            ₹6,999{" "}
            <span className="text-gray-500 text-lg">
              + One Time Setup ₹3,500 (Excl. GST)
            </span>
          </h2>

          <p className="text-center text-gray-700 mb-6">
            <strong>Focus:</strong> Enhanced school operations with automation and reports.
          </p>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li>✔ Includes everything in Basic Plan</li>
            <li>✔ Online admission/enrollment form</li>
            <li>✔ Timetable management</li>
            <li>✔ Exam/grades management (marks entry + report card)</li>
            <li>✔ Homework/assignments (upload + notify parents)</li>
            <li>✔ Transport/bus tracking (basic info & routes)</li>
            <li>✔ Automated WhatsApp/email notifications (attendance, fees, results)</li>
            <li>✔ Reports (fees collected, attendance %, performance)</li>
            <li>✔ Online payment gateway (fees via UPI/cards)</li>
          </ul>

          {/* CTA Button */}
          <div className="text-center mt-10">
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg text-lg shadow hover:bg-blue-800 transition"
            >
              Contact for More Details
            </button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
