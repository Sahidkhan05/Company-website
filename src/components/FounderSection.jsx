import React from "react";

export default function FounderSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* 🖼️ Founder Image */}
        <div className="flex justify-center">
          <img
            src="/ceo image.png"
            alt="Founder - Lakhan Bajaj"
            className="w-80 h-80 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* 🧠 Founder Info */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Meet Our Founder
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800">
            Lakhan Bajaj — CEO & Founder
          </h3>
          <p className="text-gray-700 mt-4 leading-relaxed">
            With a deep passion for technology and innovation, Lakhan Bajaj started
            <span className="font-semibold text-blue-600"> Lnavonous Technologies </span>
            with a vision to empower startups, schools, and businesses through
            cutting-edge digital solutions.
          </p>
          <p className="text-gray-700 mt-3 leading-relaxed italic">
            “I believe technology should be simple, scalable, and human-centered.
            Our goal is to build solutions that don’t just work — they inspire.”
          </p>

          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Connect with Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
