import React, { useState, useEffect } from "react";
import "./GalleryPage.css";
import Skeleton from "./Skeleton";

const images = [
  "gellery/image1.png",
  "gellery/image2.png",
  "gellery/image3.png",
  "gellery/image4.png",
  "gellery/image5.png",
  "gellery/image6.png",
  "gellery/image7.png",
  "gellery/image8.png",
  "gellery/image9.png",
  "gellery/image10.png",
  "gellery/image11.png",
  "gellery/image12.png",
];

const skeletonHeights = [
  "200px",
  "400px",
  "200px",
  "400px",
  "400px",
  "200px",
  "400px",
  "200px",
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const ca_images = [
    "gellery/long_image1.png",
    "gellery/long_image1.png",
    "gellery/long_image1.png",
    "gellery/long_image1.png",
    "gellery/long_image1.png",
  ];

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
        <div className="row mb-5">
          {loading ? (
            <React.Fragment>
              {skeletonHeights.slice(0, 4).map((height, index) => (
                <div className="col-md-3 mb-4" key={index}>
                  <Skeleton height={height} />
                </div>
              ))}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="col-md-3">
                <div className="row">
                  <div className="col-12 mb-4">
                    <img src={images[0]} alt="Gallery" className="img-fluid" />
                  </div>
                  <div className="col-12 mb-4">
                    <img src={images[1]} alt="Gallery" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <img
                  src={images[2]}
                  alt="Gallery"
                  className="img-fluid h-100"
                />
              </div>
              <div className="col-md-3">
                <div className="row">
                  <div className="col-12 mb-4">
                    <img src={images[3]} alt="Gallery" className="img-fluid" />
                  </div>
                  <div className="col-12 mb-4">
                    <img src={images[4]} alt="Gallery" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <img
                  src={images[5]}
                  alt="Gallery"
                  className="img-fluid h-100"
                />
              </div>
            </React.Fragment>
          )}
        </div>
        <div className="row mt-4">
          {loading ? (
            <React.Fragment>
              {skeletonHeights.slice(4).map((height, index) => (
                <div className="col-md-3 mb-4" key={index}>
                  <Skeleton height={height} />
                </div>
              ))}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="col-md-3 mb-4">
                <img
                  src={images[6]}
                  alt="Gallery"
                  className="img-fluid h-100"
                />
              </div>
              <div className="col-md-3">
                <div className="row">
                  <div className="col-12 mb-4">
                    <img src={images[7]} alt="Gallery" className="img-fluid" />
                  </div>
                  <div className="col-12">
                    <img src={images[8]} alt="Gallery" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <img
                  src={images[9]}
                  alt="Gallery"
                  className="img-fluid h-100"
                />
              </div>
              <div className="col-md-3">
                <div className="row">
                  <div className="col-12 mb-4">
                    <img src={images[10]} alt="Gallery" className="img-fluid" />
                  </div>
                  <div className="col-12">
                    <img src={images[11]} alt="Gallery" className="img-fluid" />
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
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
        <div className="d-flex justify-content-center mt-3">
          {ca_images.map((_, index) => (
            <div
              key={index}
              onClick={() => handleIndicatorClick(index)}
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: activeIndex === index ? "darkblue" : "blue",
                margin: "0 5px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
