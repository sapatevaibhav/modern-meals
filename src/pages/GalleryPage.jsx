import React from "react";
import "./GalleryPage.css";

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
export default function GalleryPage() {
  return (
    <div>
      <p
        className="center-text mt-5"
        style={{ fontFamily: "sedan", fontSize: "1.2rem" }}
      >
        Gallery
      </p>
      <h2 className="gallery-heading">Menu Make You Happy</h2>
      <p
        className="center-text"
        style={{ fontFamily: "roboto", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"50px"}}
      >
        Some Food with lots of Love
      </p>
      <div className="container-fluid gallery-container">
        <div className="row mb-5">
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
            <img src={images[2]} alt="Gallery" className="img-fluid h-100" />
          </div>
          <div className="col-md-3 ">
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
            <img src={images[5]} alt="Gallery" className="img-fluid h-100" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-3 mb-4">
            <img src={images[6]} alt="Gallery" className="img-fluid h-100" />
          </div>
          <div className="col-md-3 mb-4">
            <div className="row">
              <div className="col-12 mb-4">
                <img src={images[7]} alt="Gallery" className="img-fluid" />
              </div>
              <div className="col-12 ">
                <img src={images[8]} alt="Gallery" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <img src={images[9]} alt="Gallery" className="img-fluid h-100" />
          </div>
          <div className="col-md-3 mb-4">
            <div className="row">
              <div className="col-12 mb-4">
                <img src={images[10]} alt="Gallery" className="img-fluid" />
              </div>
              <div className="col-12">
                <img src={images[11]} alt="Gallery" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
