import React, { useState, useEffect } from "react";
import "./GalleryPage.css";
import GalleryComponent from "./GalleryComponent";
const images = [
  "gellery/image7.png",
  "gellery/image8.png",
  "gellery/image9.png",
  "gellery/image10.png",
  "gellery/image11.png",
  "gellery/image12.png",
  "gellery/image13.png",
  "gellery/image14.png",
  "gellery/image15.png",
  "gellery/image16.png",
  "gellery/image17.png",
  "gellery/image18.png",
  "gellery/image19.png",
  "gellery/image20.png",
  "gellery/image21.png",
  "gellery/image22.png",
  "gellery/image23.png",
  "gellery/image24.png",
  "gellery/image25.png",
  "gellery/image26.png",
  "gellery/image27.png",
  "gellery/image28.png",
  "gellery/image29.png",
  "gellery/image30.png",
  "gellery/image31.png",
  "gellery/image32.png",
  "gellery/image33.png",
  "gellery/image34.png",
  "gellery/image35.png",
  "gellery/image36.png",
  "gellery/image37.png",
  "gellery/image38.png",
  "gellery/image39.png",
  "gellery/image40.png",
  "gellery/image41.png",
  "gellery/image42.png",
  "gellery/image43.png",
  "gellery/image44.png",
  "gellery/image45.png",
  "gellery/image46.png",
  "gellery/image47.png",
  "gellery/image48.png",
  "gellery/image49.png",
  "gellery/image50.png",
];

const ca_images = [
  "gellery/long_image1.png",
  "gellery/long_image2.png",
  "gellery/long_image3.png",
  "gellery/long_image4.png",
  "gellery/long_image5.png",
];

export default function GalleryPage() {
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <p
        className="center-text mt-5"
        style={{ fontFamily: "sedan", fontSize: "1.2rem" }}
      >
        Gallery
      </p>
      <h2 className="custom-headings" style={{ textAlign: "center" }}>
        Menu Make You Happy
      </h2>
      <p
        className="center-text"
        style={{
          fontFamily: "roboto",
          fontSize: "1.2rem",
          fontWeight: "bold",
          marginBottom: "50px",
        }}
      >
        Some Food with lots of Love
      </p>

      <div className="container-fluid gallery-container">
        
         
          <GalleryComponent images={images} />
      </div>

      {/* Long Images Carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {ca_images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="carousel-indicators d-flex justify-content-center mt-3">
          {ca_images.map((_, index) => (
            <div
              key={index}
              className={`carousel-indicator ${activeIndex === index ? 'active' : 'inactive'}`}
              onClick={() => handleIndicatorClick(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                margin: '0 5px',
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
