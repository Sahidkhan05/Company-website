import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import ServicePage from "./pages/ServicePage";
import SchoolPage from "./pages/SchoolPage";
import HospitalPage from "./pages/HospitalPage";
import BusinessPage from "./pages/BusinessPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="services" element={<ServicePage />} />

        {/* Plan Detail Pages */}
        <Route path="/plans/school" element={<SchoolPage />} />
        <Route path="/plans/hospital" element={<HospitalPage />} />
        <Route path="/plans/business" element={<BusinessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
