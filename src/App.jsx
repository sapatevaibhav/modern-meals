import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import CateringBanner from "./components/CateringBanner";
import Carousel from "./components/Description";
import Gallery from "./components/HomeGallery";
import MagicalExperience from "./components/MagicalExperience";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import GetInTouch from "./components/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <CateringBanner />
      <Carousel />
      <MagicalExperience />
      <Gallery />
      <Testimonials />
      <GetInTouch/>
      <AboutUs />
    </>
  );
}

export default App;
