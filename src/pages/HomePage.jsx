import React from "react";
import CateringBanner from "../components/CateringBanner";
import Carousel from "../components/Description";
import Gallery from "../components/HomeGallery";
import MagicalExperience from "../components/MagicalExperience";
import Testimonials from "../components/Testimonials";
import GetInTouch from "../components/ContactUs";

export default function HomePage() {
  return (
    <div>
      <CateringBanner />
      <Carousel />
      <MagicalExperience />
      <Gallery />
      <Testimonials />
      <GetInTouch />
    </div>
  );
}
