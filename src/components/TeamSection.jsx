import React from "react";

export default function TeamSection() {
  const teamMembers = [
    { name: "Abhishek Rajput", role: "Backend Developer", image: "/abhishek.jpeg" },
    { name: "Divyansh Laad", role: "Software Developer", image: "/Divyansh.jpeg" },
    { name: "Sahid Khan", role: "Full Stack Developer", image: "/Sahid.jpeg" },
    { name: "Nishanka Bhaskar", role: "Backend Developer", image: "/Nishanka.jpeg" },
    { name: "Saqlain Shaikh", role: "Full Stack Intern", image: "/Saqlain.jpeg" },
    { name: "Fatema Bohari", role: "Finance Manager", image: "/Fatema.jpeg" },
    { name: "Debasmita Praharaj", role: "HR", image: "/Debasmita.jpeg" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-600">
          Meet Our Team
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105"
            >
              {/* Team Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
              ></div>

              {/* Name & Role */}
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
