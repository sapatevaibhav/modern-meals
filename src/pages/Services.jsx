import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";

const images = [
  "/service_details/Indian-Wedding-Food-menu 1.png",
  "/service_details/Indian-Wedding-Food-menu 1.png",
  "/service_details/Indian-Wedding-Food-menu 1.png",
];

const titles = [
  "Weddings Services",
  "Venue Beautification",
  "Jaimala Theme & Entertainment",
];

const subheading = [
  "Wedding Function Catering",
  "Description for Venue Beautification",
  "Description for Jaimala Theme & Entertainment",
];

const para = [
  `A wedding is that special occasion which has great significance in the life of every
Person. And especially in context of the Indian tradition, marriages are not only looked
upon as a bond between two individuals, it is actually considered a bonding of two
families and their future generations.`,
  "Our venue beautification services transform any location into a breathtaking setting that perfectly aligns with the theme and vision of your event.",
  "The Jaimala ceremony is a highlight of Indian weddings, symbolizing the first step of the couple's union. We offer a variety of themes and entertainment options to make this moment even more magical.",
];

const features = [
  "Arranging the Venue",
  "Light & music arrangement",
  "Venue Decoration",
  "Food, Snacks & Beverage Catering",
  "Music & Live DJ",
  "Mehndi & Bridal make-up for the girl",
  "Live Show by renowned artists",
  "Lodging & Travel arrangements for guests",
  "Honeymoon package for the new Couple",
];

export default function Services({ initialImageIndex = 0 }) {
  const [currentSlide, setCurrentSlide] = useState(initialImageIndex);

  useEffect(() => {
    sliderRef.slickGoTo(initialImageIndex);
  }, [initialImageIndex]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%",
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0",
        },
      },
    ],
  };

  let sliderRef;

  return (
    <div className="services-container">
      <h2 className="gallery-heading">{titles[currentSlide]}</h2>
      <p className="center-text">FRESH AND HEALTHY FOOD AVAILABLE</p>
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        {images.map((src, index) => (
          <div key={index} className="slide">
            <img src={src} alt={titles[index]} className="slider-image" />
          </div>
        ))}
      </Slider>
      <div className="bottom-section">
        <div className="features">
          <h3>Other Features Included</h3>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="details">
          <h3>{subheading[currentSlide]}</h3>
          <p>{para[currentSlide]}</p>
        </div>
      </div>
    </div>
  );
}

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow next-arrow`} onClick={onClick}>
      <i className="bi bi-arrow-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow prev-arrow`} onClick={onClick}>
      <i className="bi bi-arrow-left"></i>
    </div>
  );
};
