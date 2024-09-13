import React, { useEffect, useState } from "react";
import "./CateringBanner.css";

const images = [
  '/bg1.jpg',
  '/bg2.jpg',
  '/bg3.jpg',
  '/bg4.jpg'
];

const CateringBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <div
        className="background-slider"
        style={{ transform: `translateX(-${currentIndex * 100 / images.length}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} style={{ backgroundImage: `url(${image})` }}></div>
        ))}
      </div>
      <div className="banner-text">
        <h1 className="main-title">Modern Caterers</h1>
        <p className="subtitle">An ISO : 22000 : 2005 Certified Company</p>
      </div>
    </div>
  );
};

export default CateringBanner;
