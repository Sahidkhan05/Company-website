import React from "react";
import { FaSchool, FaHospitalUser, FaBuilding } from "react-icons/fa";

export default function ServicesOverview() {
  const services = [
    {
      icon: <FaSchool className="text-4xl text-blue-600 mb-3" />,
      title: "School Management Solutions",
      desc: "Digitalize your school with ERP, attendance, fee management, and parent communication tools.",
    },
    {
      icon: <FaHospitalUser className="text-4xl text-blue-600 mb-3" />,
      title: "Hospital Management Systems",
      desc: "Manage patients, doctors, and billing with our user-friendly hospital ERP and chatbot support.",
    },
    {
      icon: <FaBuilding className="text-4xl text-blue-600 mb-3" />,
      title: "Business Automation Tools",
      desc: "Grow your business with CRM dashboards, eCommerce platforms, and WhatsApp automation.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-24 bg-white">
      

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center"
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
