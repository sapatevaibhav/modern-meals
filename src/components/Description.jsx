import React, { useEffect, useState } from "react";
import "./Description.css"; 

const images = [
  "/curved_image_1.png", 
  "/curved_image_2.png",
  "/curved_image_3.png",
];
const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); 
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeIn(true);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="text-container">
        <h1 className="headline d-hline">Wedding Caterers in Pune</h1>
        <p className="paragraph">
          In the context of this current social scenario in india, it is not
          surprising that the demand for top quality function organizers is
          witnessing an ever increasing trend at present. More and more families
          are opting for professionals to take care of their special functions.
          <br />
          <br />
          And when it comes down to choosing the most professionally managed
          Wedding Caterers organizers, there are not many who can stand in the
          same league as Modern Caterers.
          <br />
          <br />
          Modern Caterers enjoy the rare distinction of being an all in one
          organizer for all types of functions that our clients could think of
          hosting.
        </p>
        <button className="contact-button">CONTACT US</button>
      </div>
      <div className="image-container">
        <img
          src={images[currentImageIndex]}
          alt="Catering"
          className={`carousel-image ${fadeIn ? "fade-in" : ""}`}
        />
      </div>
    </div>
  );
};

export default Carousel;
