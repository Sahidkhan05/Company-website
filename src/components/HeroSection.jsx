import React from 'react';

const HeroSection = () => {

  const scrollToPlans = () => {
    const plansSection = document.getElementById("plans-section");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white min-h-screen flex items-center justify-center pt-20 sm:pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-snug sm:leading-tight">
            Smart AI Chatbots to{" "}
            <span className="text-yellow-300">Grow Your Business</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 px-2 sm:px-0">
            Automate WhatsApp, Websites & More — Boost Sales, Save Time, and
            Improve Customer Experience with <span className="font-semibold">Lnavonous</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-4">
            <button
              onClick={scrollToPlans}
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition w-full sm:w-auto"
            >
              Get Started
            </button>

            <a
              href="/contact"
              className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition w-full sm:w-auto text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
