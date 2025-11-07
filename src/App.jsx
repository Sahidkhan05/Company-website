import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import BasicPlanPage from "./pages/BasicPlanPage";
import PremiumPlanPage from "./pages/PremiumPlanPage";
import StandardPlanPage from "./pages/StandardPlanPage";
import ServicePage from "./pages/ServicePage";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutPage/>} />
        <Route path="contact" element={<ContactPage/>} />
        <Route path="careers" element={<CareersPage/>} />
         <Route path="/plans/basic" element={<BasicPlanPage />} />
        <Route path="plans/standard" element={<StandardPlanPage/>}/>
        <Route path="/plans/premium" element={<PremiumPlanPage />} />
        <Route path="/services" element={<ServicePage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
