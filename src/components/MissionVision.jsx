import React from "react";

export default function MissionVision() {
  const data = [
    {
      title: "Our Mission",
      desc: "Our mission is to empower startups, schools, and enterprises by delivering innovative, reliable, and scalable digital solutions. We aim to simplify technology for every business by providing modern web applications that enhance efficiency, improve user experience, and support long-term growth. Through continuous improvement and a client-first approach, we help organizations achieve smooth digital transformation and stay ahead in the fast-moving digital world.",
    },
    {
      title: "Our Vision",
      desc: "To become a trusted global tech company recognized for innovation, design excellence, and long-term client relationships.",
    },
  ];

  return (
   <section class="bg-gray-50 py-16 px-6 md:px-20">
  <div class="max-w-5xl mx-auto">

    
    <div class="bg-white shadow-lg rounded-2xl p-8 mb-12 border-l-4 border-blue-600">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
      <p class="text-gray-600 leading-relaxed text-lg">
        Our mission is to empower startups, schools, and enterprises by delivering
        innovative, reliable, and scalable digital solutions. We aim to simplify
        technology for every business through modern web applications, advanced
        BOS (Billing/Operating Systems), and intelligent chatbot solutions that
        automate workflows and enhance customer interaction.
        <br /><br />
        We focus on improving efficiency, boosting user experience, and
        supporting long-term growth. With continuous innovation and a
        client-first approach, we help organizations achieve seamless digital
        transformation and stay ahead in the fast-moving digital world.
      </p>
    </div>

    
    <div class="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-green-600">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
      <p class="text-gray-600 leading-relaxed text-lg">
        Our vision is to become a trusted global tech company known for
        innovation, design excellence, and strong long-term client relationships.
        We aim to build digital solutions that not only solve real-world problems
        but also create meaningful impact for startups, schools, and enterprises
        worldwide.
        <br /><br />
        We strive to lead the industry with future-ready technologies,
        intelligent automation, and user-centric design—earning the confidence
        of clients through consistent quality, transparency, and unmatched
        support.
      </p>
    </div>

  </div>
</section>

  );
}
