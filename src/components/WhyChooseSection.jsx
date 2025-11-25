import React from "react";

export default function WhyChooseSection() {
  return (
    <section className="bg-blue-200 py-20 px-6 md:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Why Choose <span className="text-blue-500">Lnavonous?</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Empowering organizations with smart tools, seamless automation, and better workflow efficiency.
          </p>
        </div>

        {/* Right Side - Features */}
        <div className="space-y-4 text-gray-700 text-lg">
          <div className="flex items-start gap-3">
            <span className="text-blue-600 text-xl">✔</span>
            <p>Save time and improve productivity</p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-blue-600 text-xl">✔</span>
            <p>Reduce manual work and errors</p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-blue-600 text-xl">✔</span>
            <p>Supports multiple languages and global workflows</p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-blue-600 text-xl">✔</span>
            <p>Real-time insights for faster decision making</p>
          </div>
        </div>

      </div>
    </section>
  );
}
