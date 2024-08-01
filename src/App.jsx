import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPage from "./pages/ServicesPage";
import MenuPage from "./pages/MenuPage";
import GalleryPage from "./pages/GalleryPage";
import ContactUsPage from "./pages/ContactUsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import Services from "./pages/Services";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/all_services/:index" element={<ServiceWrapper />} />
        <Route path="/all_services" element={<ServiceWrapper />} />
      </Routes>
      <AboutUs />
    </Router>
  );
};

function ServiceWrapper() {
  const { index } = useParams(0);
  return <Services initialImageIndex={parseInt(index, 10)} />;
}

export default App;
