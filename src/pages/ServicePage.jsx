import React, { useEffect } from 'react'
import Navbar from '../components/NavBar'
import FooterSection from '../components/FooterSection'
import ServicesOverview from '../components/ServicesOverview'
import SchoolServicesSection from '../components/SchoolServicesSection'
import HospitalSection from '../components/HospitalSection'
import BusinessSection from '../components/BusinessSection'
import WhyChooseSection from '../components/WhyChooseSection'

const ServicePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0) // page top se start ho
      }, [])
  return (
    <div>
    <Navbar/>
        <section className="pt-32 pb-20 px-6 md:px-24  bg-blue-600 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
         What We Do
      </h1>
      <p className="text-lg max-w-2xl mx-auto text-white">
        Empowering Schools, Hospitals, and Businesses with smart digital
        solutions — from management systems to intelligent chatbots.
      </p>
    </section>
    <ServicesOverview/>
    <SchoolServicesSection/>
    <BusinessSection/>
    <HospitalSection/>
    


    <FooterSection/>
    </div>
  )
}

export default ServicePage