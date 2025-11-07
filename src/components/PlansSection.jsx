import React from "react";
import { useNavigate } from "react-router-dom";

export default function PlansSection() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Basic",
      price: "₹2,999 + ₹1,500 (Setup)",
      note: "Excl. GST",
      features: [
        "School website + Dashboard access",
        "Student & Teacher Management",
        "Attendance & Fee tracking",
        "Basic performance reports",
      ],
      path: "/plans/basic",
    },
    {
      name: "Standard",
      price: "₹5,999 + ₹1,500 (Setup)",
      note: "Excl. GST",
      features: [
        "Everything in Basic plan",
        "Online Admission Form",
        "Exam & Timetable Management",
        "Homework & Notifications",
      ],
      path: "/plans/standard",
    },
    {
      name: "Premium",
      price: "₹9,999 + ₹1,500 (Setup)",
      note: "Excl. GST",
      features: [
        "Everything in Standard plan",
        "AI Insights & Analytics",
        "Library & Document Management",
        "Multi-language Support",
      ],
      path: "/plans/premium",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-24">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
          Our Plans
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose a plan that fits your school’s digital growth — scalable, smart, and affordable.
        </p>
      </div>

      {/* Plan Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-blue-50 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
              {plan.name}
            </h3>

            <p className="text-gray-800 text-xl font-bold mb-1">
              {plan.price}
            </p>
            <p className="text-gray-500 text-sm mb-6">{plan.note}</p>

            <ul className="text-gray-700 mb-6 space-y-2 text-sm text-left">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>

            <button
              onClick={() => navigate(plan.path)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              More Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
