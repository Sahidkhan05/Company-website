import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/NavBar";
import FooterSection from "../components/FooterSection";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Page top se start ho
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_u6afvfc", // Your Service ID
        "template_q9prnlp", // Your Template ID
        {
          name: formData.name,
          email: formData.email,
          number: formData.number,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "3UaRFs_VWn2gRuLkh" // Your Public Key
      )
      .then(
        (result) => {
          console.log("✅ Email sent:", result.text);
          setSuccess(true);
          setFormData({ name: "", email: "", number: "", message: "" });
          setTimeout(() => setSuccess(false), 3000);
        },
        (error) => {
          console.log("❌ Email send error:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <section className="max-w-6xl mx-auto py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="md:flex md:items-center md:gap-12 bg-white rounded-2xl shadow-lg overflow-hidden">
          
          {/* Left Side - Image */}
          <div className="md:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[500px]">
            <picture>
              <source srcSet="/contact us.webp" type="image/webp" />
              <source srcSet="/contact us.jpg" type="image/jpeg" />
              <img
                src="/contact us.jpg"
                alt="Contact Us"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-1/2 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-blue-600 mb-6">
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
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Your Contact Number"
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
                  ✅ Thank you! Your message has been sent.
                </p>
              )}
            </form>
          </div>

        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ContactPage;
