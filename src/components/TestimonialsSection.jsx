import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Anjali Verma",
      role: "Doctor, City Hospital",
      feedback:
        "The website they created for our hospital is clean, easy to navigate, and perfectly matches our brand. Excellent experience!",
    },
    {
      name: "Mr. Rajesh Kumar",
      role: "Principal, Sunrise Public School",
      feedback:
        "They built a beautiful and functional school website. It helped parents and students stay connected. Highly professional team!",
    },
    {
      name: "Mr. Vivek Sharma",
      role: "Businessman, Sharma Traders",
      feedback:
        "Very happy with the website design. It has boosted our online presence and customer trust. Great service!",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <p className="text-gray-600 mb-6 italic">“{t.feedback}”</p>
              <h4 className="font-semibold text-lg text-gray-900">{t.name}</h4>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
