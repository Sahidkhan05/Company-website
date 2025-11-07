import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 💡 Add EmailJS or Formspree integration here
    console.log(formData);
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 ">
      <div className="md:flex md:items-center md:gap-12 bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="md:w-1/2 h-120">
          <img
            src="/contact us.jpg" // 👈 exact file name
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Get in Touch
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Send Message
            </button>

            {success && (
              <p className="text-green-600 font-semibold mt-2">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
