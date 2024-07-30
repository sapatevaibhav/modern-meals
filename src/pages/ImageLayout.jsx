import React from "react";
import "./ImageLayout.css";
import image1 from "/about_1.png";
import image2 from "/about_2.png";
import image3 from "/about_3.png";

const ImageLayout = () => {
  return (
    <div className="container image-container">
      <div className="position-relative">
        <img
          src={image1}
          alt="Image 1"
          className="img-fluid position-absolute img1"
        />
        <img
          src={image2}
          alt="Image 2"
          className="img-fluid position-absolute img2"
        />
        <img
          src={image3}
          alt="Image 3"
          className="img-fluid position-absolute img3"
        />
      </div>
    </div>
  );
};

export default ImageLayout;
