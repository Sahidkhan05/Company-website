import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="bg-blue-600 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {/* 🏢 Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Lnavonous Technologies</h3>
          <p className="text-gray-200">
            Building modern websites, software, and chatbot solutions that help
            businesses grow faster in the digital world.
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-gray-300">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 📞 Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center gap-2">
              <Mail size={18} /> support@lnavonous.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Jaipur, Rajasthan, India
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-200 mt-10 border-t border-blue-400 pt-6">
        © {new Date().getFullYear()} Lnavonous Technologies — All Rights Reserved.
      </div>
    </footer>
  );
}
