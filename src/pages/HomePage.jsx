import React from "react";
import CateringBanner from "../components/CateringBanner";
import Carousel from "../components/Description";
import Gallery from "../components/HomeGallery";
import MagicalExperience from "../components/MagicalExperience";
import Testimonials from "../components/Testimonials";
import GetInTouch from "../components/ContactUs";
import OurMenu from "../components/OurMenu";

export default function HomePage() {
  return (
    <div>
      <CateringBanner />
      <Carousel />
      <MagicalExperience />
      <OurMenu />
      <Gallery />
      <Testimonials />
      <GetInTouch />
    </div>
  );
}
