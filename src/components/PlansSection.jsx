import React from "react";
import { useNavigate } from "react-router-dom";

export default function PlansSection() {
  const navigate = useNavigate();

  const planFields = [
    {
      title: "School Management Solutions",
      desc: "Automate attendance, fees, and student records — simplify your school operations with smart ERP integration.",
      points: [
        "✔ Student & Staff Management",
        "✔ Fees & Attendance Tracking",
        "✔ Parent App Integration",
      ],
      path: "/plans/school",
    },
    {
      title: "Smart Hospital Management",
      desc: "Manage appointments, patient records, and communication efficiently with digital hospital solutions.",
      points: [
        "✔ Digital Patient Management",
        "✔ Automated Appointments",
        "✔ AI Chatbot Integration",
      ],
      path: "/plans/hospital",
    },
    {
      title: "Business Automation & Growth",
      desc: "Streamline your business using AI chatbots, CRM tools, and digital dashboards for faster growth.",
      points: [
        "✔ CRM & Lead Management",
        "✔ Payment & Billing Automation",
        "✔ Real-time Analytics",
      ],
      path: "/plans/business",
    },
  ];

  return (
    <section id="plans-section" className="bg-white py-20 px-6 md:px-24">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
          Our Plans
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the right digital solution for your school, hospital, or business.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-10">
        {planFields.map((plan, index) => (
          <div
            key={index}
            className="bg-blue-50 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
              {plan.title}
            </h3>
            <p className="text-gray-700 mb-5">{plan.desc}</p>

            <ul className="text-gray-700 mb-6 space-y-2 text-sm text-left">
              {plan.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>

            <button
              onClick={() => navigate(plan.path)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
