import React from "react";
import { Code2, Cpu, MessageSquare } from "lucide-react"; // icons

export default function ServicesSection() {
  const services = [
    {
      icon: <Code2 size={40} className="text-blue-600 mb-4" />,
      title: "Website Development",
      desc: "We build modern, fast, and responsive websites that help your business stand out and grow online.",
    },
    {
      icon: <Cpu size={40} className="text-blue-600 mb-4" />,
      title: "Software Solutions",
      desc: "Custom-built software systems designed to automate your operations and enhance efficiency.",
    },
    {
      icon: <MessageSquare size={40} className="text-blue-600 mb-4" />,
      title: "Chatbot Integration",
      desc: "Intelligent chatbot systems to connect with your customers 24/7 through smart automation.",
    },
  ];

  return (
    <section className="bg-blue-300 py-20 px-6 md:px-24">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide cutting-edge digital solutions that empower your business
          — from web presence to smart automation.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300 text-center"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
