import React from "react";

export default function MissionVision() {
  const data = [
    {
      title: "Our Mission",
      desc: "Our mission is to empower startups, schools, and enterprises with digital transformation through reliable and scalable web solutions.",
    },
    {
      title: "Our Vision",
      desc: "To become a trusted global tech company recognized for innovation, design excellence, and long-term client relationships.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 ">
      <h2 className="text-center text-4xl font-bold text-blue-600 mb-12">
        Mission & Vision
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all border-t-4 border-blue-600"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
