import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-blue-600 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="text-3xl font-bold tracking-wide">
          Lnavonous
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-200 text-lg font-medium">Home</Link>
          <Link to="/about" className="hover:text-gray-200 text-lg font-medium">About</Link>
          <Link to="/services" className="hover:text-gray-200 text-lg font-medium">Services</Link>
          <Link to="/careers" className="hover:text-gray-200 text-lg font-medium">Careers</Link>
          <Link to="/contact" className="hover:text-gray-200 text-lg font-medium">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 space-y-2 px-6 pb-4">
          <Link to="/" onClick={toggleMenu} className="block hover:text-gray-200">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="block hover:text-gray-200">About</Link>
          <Link to="/services" onClick={toggleMenu} className="block hover:text-gray-200">Services</Link>
          <Link to="/careers" onClick={toggleMenu} className="block hover:text-gray-200">Careers</Link>
          <Link to="/contact" onClick={toggleMenu} className="block hover:text-gray-200">Contact</Link>
        </div>
      )}
    </nav>
  );
}
