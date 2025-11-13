import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutPreview() {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-24">
      {/* 🔹 Main Container with Shadow */}
      <div className="bg-white rounded-2xl shadow-xl p-10 md:p-14 grid md:grid-cols-2 items-center gap-12">
        
        {/* Left Image Section */}
        <div className="flex justify-center">
          {/* ✅ Optimized + Lazy Loaded Image */}
          <picture>
            {/* WebP format for better compression */}
            <source srcSet="/about image.webp" type="image/webp" />
            <source srcSet="/about image.jpg" type="image/jpeg" />
            <img
              src="/about image.jpg"
              alt="About Our Company"
              loading="lazy"
              decoding="async"
              className="w-[85%] max-w-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </picture>
        </div>

        {/* Right Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            About <span className="text-gray-800">Lnavonous</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <span className="font-semibold text-blue-600">Lnavonous</span> is a
            modern tech company focused on delivering digital excellence. We
            create fast, secure, and scalable solutions that help brands grow
            online and simplify their business operations.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            From websites and software to intelligent chatbots, our goal is to
            bring ideas to life through technology and creativity.
          </p>

          <button
            onClick={() => navigate("/about")}
            className="bg-blue-600 text-white px-8 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
