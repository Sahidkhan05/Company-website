import React, { useEffect } from 'react'
import FooterSection from "../components/FooterSection";
import Navbar from "../components/NavBar";

export default function CareersPage() {
     useEffect(() => {
    window.scrollTo(0, 0) // page top se start ho
  }, [])

  return (
    <>
    <Navbar/>
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="text-center py-30 bg-blue-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Careers at Lnavonous</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Join our team of passionate developers, designers, and innovators. 
          We are always looking for talented people to grow with us.
        </p>
      </section>

      {/* Current Openings Section */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Current Openings
        </h2>
        <p className="text-gray-600 text-lg">
          No openings currently. Please check back later or reach out to us.
        </p>
      </section>
    </div>
    <FooterSection/>
    </>
  );
}
