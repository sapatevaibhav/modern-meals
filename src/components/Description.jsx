import React, { useEffect, useState } from "react";
import "./Description.css";
import { Link } from "react-router-dom";

const images = [
  "/curved_image_1.png",
  "/curved_image_2.png",
  "/curved_image_3.png",
];
const imaage = () => {
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
    <div className="imaage-container">
      <div className="text-container">
        <h1 className=" custom-headings headline d-hline">Wedding Caterers in Pune</h1>
        <p className="paragraph custom-para">
          At Modern Meal Caterers, we believe that every event deserves a feast that delights the senses and creates lasting memories. Located in Pune, we are dedicated to crafting dining experiences that leave a lasting impression on your guests. Whether you’re planning a corporate event, a beautiful wedding, or an intimate theme party, our goal is to bring your vision to life with exceptional cuisine and top-notch service.
          <br />
          <br />
          We specialize in catering for all types of events, from large-scale corporate gatherings to personalized weddings and themed parties. Our team combines creativity, professionalism, and passion to ensure that every detail is perfect. We understand that every event is unique, and we work closely with you to create a customized menu that reflects your tastes and meets your specific needs.
        </p>
        <Link to="/contact">
          <button className="contact-button">CONTACT US</button>
        </Link>
      </div>
      <div className="image-container">
        <img
          src={images[currentImageIndex]}
          alt="Catering"
          className={`imaage-image ${fadeIn ? "fade-in" : ""}`}
        />
      </div>
    </div>
  );
};

export default imaage;
