import React from "react";

export default function TeamSection() {
  const team = [
    { name: "Azeem Khan", role: "Team Lead and Python Backend Developer" },
    { name: "Divyansh Laad", role: "Software Developer" },
    { name: "Sahid Khan", role: "Full Stack Developer" },
    { name: "Nishanka Bhaskar", role: "Backend Developer" },
    { name: "Saqlain Shaikh", role: "Full Stack Intern" },
    { name: "Fatema Bohari", role: "Finance Manager" },
    { name: "Debasmita Praharaj ", role: "HR" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center px-6n mt-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-600 mt-5">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
          {team.map((member, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 p-8 flex flex-col items-center"
            >
              {/* Top Accent */}
              <div className="absolute -top-3 w-16 h-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>

              {/* Circular Initials */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white text-3xl font-bold shadow-md mb-4">
                {member.name.charAt(0)}
              </div>

              {/* Name & Role */}
              <h4 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h4>
              <p className="text-gray-500 text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
