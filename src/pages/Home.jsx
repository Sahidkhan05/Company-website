import React, { useEffect } from 'react'
import Navbar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutPreview from '../components/AboutPreview'
import ServicesSection from '../components/ServicesSection'
import PlansSection from '../components/PlansSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FooterSection from '../components/FooterSection'
import WhyChooseSection from '../components/WhyChooseSection'

const Home = () => {

   useEffect(() => {
    window.scrollTo(0, 0) // page top se start ho
  }, [])

  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <AboutPreview/>
        <ServicesSection/>
        <PlansSection/>
        <TestimonialsSection/>
        <FooterSection/>
    </div>
  )
}

export default Home