import React from "react";
import Navbar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import { useNavigate } from "react-router-dom";

export default function BasicPlanPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-20 px-6 md:px-24  bg-blue-600 text-center text-white">
        <h1 className="text-4xl font-bold mb-3">Basic Plan</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Ideal for schools focusing on daily operations and core functionality.
        </p>
      </section>

      {/* Plan Details Box */}
      <section className="py-16 px-6 md:px-24">
        <div className="bg-white shadow-xl rounded-2xl p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            ₹2,999{" "}
            <span className="text-gray-500 text-lg">
              + One Time Setup ₹1,500 (Excl. GST)
            </span>
          </h2>

          <p className="text-center text-gray-700 mb-6">
            <strong>Focus:</strong> Daily school operations.
          </p>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li>✔ Student management (add/edit student, class, section, Time Table)</li>
            <li>✔ Teacher/staff profiles</li>
            <li>✔ Homework/assignments (Basic)</li>
            <li>✔ Attendance (student + staff)</li>
            <li>✔ Basic fees management (record fees, mark paid/unpaid)</li>
            <li>✔ Parent communication via SMS/WhatsApp (text alerts only)</li>
            <li>✔ Simple dashboard (attendance & fee dues)</li>
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
