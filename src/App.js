import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home/HomeSection";
import ServiceSection from "./components/Service/ServiceSection";
import Menu from "./components/Menu/SignatureMenu";
import TestimonialSection from "./components/Testimonial/TestimonialSection";
import Footer from "./components/Footer/Footer";
import PlanYourEvent from "./pages/PlanYourEvent";
import SamplePage from "./pages/SamplePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Home />
              <ServiceSection />
              <Menu />
              <TestimonialSection />
            </>
          }
        />
        <Route path="/plan-your-event" element={<PlanYourEvent />} />
        <Route path="/sample-page" element={<SamplePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
