import React from "react";

export default function AboutHeader() {
  return (
    <section className="text-center py-16 sm:py-20 md:py-28 bg-blue-600 text-white px-4 sm:px-6 md:px-12 lg:px-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 leading-snug">
        About Lnavonous Technologies
      </h1>
      <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
        We are a passionate team building modern websites, custom software, and
        AI-powered chatbots to help businesses grow digitally.
      </p>
    </section>
  );
}
