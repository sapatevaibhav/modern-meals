import React, { useState, useEffect } from "react";
import { Gallery } from "react-grid-gallery"; // use named import
import "./GalleryPage.css";
import Skeleton from "./Skeleton";

const images = [
  {
    src: "gellery/image7.png",
    thumbnail: "gellery/image7.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image8.png",
    thumbnail: "gellery/image8.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image9.png",
    thumbnail: "gellery/image9.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image10.png",
    thumbnail: "gellery/image10.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image11.png",
    thumbnail: "gellery/image11.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image12.png",
    thumbnail: "gellery/image12.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image13.png",
    thumbnail: "gellery/image13.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image14.png",
    thumbnail: "gellery/image14.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image15.png",
    thumbnail: "gellery/image15.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image16.png",
    thumbnail: "gellery/image16.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image17.png",
    thumbnail: "gellery/image17.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image18.png",
    thumbnail: "gellery/image18.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image19.png",
    thumbnail: "gellery/image19.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image20.png",
    thumbnail: "gellery/image20.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image21.png",
    thumbnail: "gellery/image21.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image22.png",
    thumbnail: "gellery/image22.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image23.png",
    thumbnail: "gellery/image23.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image24.png",
    thumbnail: "gellery/image24.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image25.png",
    thumbnail: "gellery/image25.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image26.png",
    thumbnail: "gellery/image26.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image27.png",
    thumbnail: "gellery/image27.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image28.png",
    thumbnail: "gellery/image28.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image29.png",
    thumbnail: "gellery/image29.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image30.png",
    thumbnail: "gellery/image30.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image31.png",
    thumbnail: "gellery/image31.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image32.png",
    thumbnail: "gellery/image32.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image33.png",
    thumbnail: "gellery/image33.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image34.png",
    thumbnail: "gellery/image34.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image35.png",
    thumbnail: "gellery/image35.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image36.png",
    thumbnail: "gellery/image36.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image37.png",
    thumbnail: "gellery/image37.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image38.png",
    thumbnail: "gellery/image38.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image39.png",
    thumbnail: "gellery/image39.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image40.png",
    thumbnail: "gellery/image40.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image41.png",
    thumbnail: "gellery/image41.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image42.png",
    thumbnail: "gellery/image42.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image43.png",
    thumbnail: "gellery/image43.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image44.png",
    thumbnail: "gellery/image44.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image45.png",
    thumbnail: "gellery/image45.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image46.png",
    thumbnail: "gellery/image46.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image47.png",
    thumbnail: "gellery/image47.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image48.png",
    thumbnail: "gellery/image48.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image49.png",
    thumbnail: "gellery/image49.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "gellery/image50.png",
    thumbnail: "gellery/image50.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  }

];

const skeletonHeights = [
  "200px", "400px", "200px", "400px", "400px", "200px", "400px", "200px"
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
      <p className="center-text mt-5" style={{ fontFamily: "sedan", fontSize: "1.2rem" }}>
        Gallery
      </p>
      <h2 className="custom-headings" style={{ textAlign: "center" }}>
        Menu Make You Happy
      </h2>
      <p
        className="center-text"
        style={{ fontFamily: "roboto", fontSize: "1.2rem", fontWeight: "bold", marginBottom: "50px" }}
      >
        Some Food with lots of Love
      </p>

      <div className="container-fluid gallery-container">
        {loading ? (
          <div className="row g-3 mb-5">
            {skeletonHeights.map((height, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <Skeleton height={height} />
              </div>
            ))}
          </div>
        ) : (
          <Gallery images={images} />
        )}
      </div>

      {/* Long Images Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {ca_images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? "active" : ""}`}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="carousel-indicators">
          {ca_images.map((_, index) => (
            <div
              key={index}
              className={`carousel-indicator ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleIndicatorClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
