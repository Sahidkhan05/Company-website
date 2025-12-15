import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin
} from "lucide-react";
import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="bg-blue-600 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

        {/* 🏢 Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Lnavonous Technologies
          </h3>

          <p className="text-gray-200 mb-4">
            Building modern websites, software, and chatbot solutions that help
            businesses grow faster in the digital world.
          </p>

          {/* 🌐 Social Media Links */}
          <div className="flex gap-4 mt-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/navonous"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-300 transition"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>

            {/* LinkedIn (example link) */}
            <a
              href="https://www.linkedin.com/company/navonous-ai/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">
            Quick Links
          </h4>

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
          <h4 className="text-xl font-semibold mb-4">
            Contact
          </h4>

          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center gap-2">
              <Mail size={18} />
              <a
                href="mailto:navonousai@gmail.com"
                className="hover:underline"
              >
                support@lnavonous.com
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Phone size={18} />
              <a
                href="tel:+919351600553"
                className="hover:underline"
              >
                +91 9351600553
              </a>
            </li>

            <li className="flex items-center gap-2">
              <MapPin size={18} />
              Jaipur, Rajasthan, India
            </li>
          </ul>
        </div>
      </div>

      {/* 🔻 Bottom Bar */}
      <div className="text-center text-gray-200 mt-10 border-t border-blue-400 pt-6">
        © {new Date().getFullYear()} Lnavonous Technologies — All Rights Reserved.
      </div>
    </footer>
  );
}
