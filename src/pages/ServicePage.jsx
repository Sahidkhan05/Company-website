import React, { useEffect } from 'react';
import Navbar from '../components/NavBar';
import FooterSection from '../components/FooterSection';
import ServicesOverview from '../components/ServicesOverview';
import SchoolServicesSection from '../components/SchoolServicesSection';
import HospitalSection from '../components/HospitalSection';
import BusinessSection from '../components/BusinessSection';
import WhyChooseSection from '../components/WhyChooseSection';

const ServicePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // page top se start ho
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar/>

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-24 bg-blue-600 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 leading-snug">
          What We Do
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-white">
          Empowering Schools, Hospitals, and Businesses with smart digital
          solutions — from management systems to intelligent chatbots.
        </p>
      </section>

      {/* Services Overview */}
      <div className=" mt-12">
        <ServicesOverview/>
      </div>

      {/* School Services */}
      <div className=" mt-12">
        <SchoolServicesSection/>
      </div>

      {/* Business Services */}
      <div className=" mt-12">
        <BusinessSection/>
      </div>

      {/* Hospital Services */}
      <div className=" mt-12">
        <HospitalSection/>
      </div>

      {/* Why Choose Section */}
      <div className=" mt-12">
        <WhyChooseSection/>
      </div>

      <FooterSection/>
    </div>
  );
}

export default ServicePage;
