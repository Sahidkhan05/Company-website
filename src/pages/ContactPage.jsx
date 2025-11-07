
import React, { useEffect } from 'react'
import ContactForm from '../components/Contactform'
import Navbar from '../components/NavBar'
import FooterSection from '../components/FooterSection'

const ContactPage = () => {
     useEffect(() => {
    window.scrollTo(0, 0) // page top se start ho
  }, [])

  return (
    <div className="mt-10 bg-gray-100">
        <Navbar/>
        <ContactForm/>
        <FooterSection/>
    </div>
  )
}

export default ContactPage