import React from "react";

export default function JourneyTimeline() {
  const timeline = [
    {
      year: "2021 — The Beginning",
      desc: "Started as a small team with a vision to create impactful websites for local businesses.",
    },
    {
      year: "2023 — Expanding Horizons",
      desc: "Launched software and chatbot services, helping clients automate their operations.",
    },
    {
      year: "2025 — Building the Future",
      desc: "Now focused on scaling AI-powered digital solutions and global outreach.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-blue-600">
          Our Journey
        </h2>

        <div className="space-y-10">
          {timeline.map((t, i) => (
            <div
              key={i}
              className="md:flex md:items-center md:gap-10 bg-blue-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              {/* Left heading box */}
              <div className="md:w-1/3 bg-blue-600 text-white p-6 rounded-xl shadow-md text-center font-semibold text-lg mb-4 md:mb-0">
                {t.year}
              </div>

              {/* Right description */}
              <div className="md:w-2/3 text-gray-700 leading-relaxed">
                {t.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
