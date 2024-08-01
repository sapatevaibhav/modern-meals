import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";
import { useParams } from "react-router-dom";

const images = [
  "/service_details/Indian-Wedding-Food-menu 1.png",
  "/service_details/Indian-Wedding-Food-menu 1.png",
  "/service_details/Indian-Wedding-Food-menu 1.png",
  "/service_details/Indian-Wedding-Food-menu 1.png",
  "/service_details/Indian-Wedding-Food-menu 1.png",
  "/service_details/Indian-Wedding-Food-menu 1.png",
  "/service_details/Indian-Wedding-Food-menu 1.png",
  "/service_details/Indian-Wedding-Food-menu 1.png",
];

const titles = [
  "Weddings Services",
  "Venue Beautification",
  "Jaimala Theme & Entertainment",
  "Theme Parties",
  "Crockery Arrangements",
  "Corporate Events",
  "Birthday Function",
  "Accommodation for Guests",
];

const subheading = [
  "Wedding Function Catering",
  "Description for Venue Beautification",
  "Description for Jaimala Theme & Entertainment",
  "Description for Theme Parties",
  "Description for Crockery Arrangements",
  "Description for Corporate Events",
  "Description for Birthday Function",
  "Description for Accommodation for Guests",
];

const para = [
  "A wedding is that special occasion which has great significance in the life of every Person. And especially in context of the Indian tradition, marriages are not only looked upon as a bond between two individuals, it is actually considered a bonding of two families and their future generations.",
  "Our venue beautification services transform any location into a breathtaking setting that perfectly aligns with the theme and vision of your event. From floral arrangements to lighting and decor, we ensure every detail is meticulously crafted to create an unforgettable atmosphere. Red Chilli Caterers takes pride in enhancing the aesthetic appeal of your venue, making it an enchanting backdrop for your special day.",
  "The Jaimala ceremony is a highlight of Indian weddings, symbolizing the first step of the couple's union. We offer a variety of themes and entertainment options to make this moment even more magical. Whether you prefer a traditional setup or a modern twist, our team ensures a memorable experience with stunning visuals and engaging performances, adding an extra touch of splendor to your celebration.",
  "Theme parties are an exciting way to celebrate any occasion, and we excel at bringing your chosen theme to life. From concept to execution, our team handles everything, ensuring a cohesive and immersive experience for your guests. With creative decor, themed catering, and tailored entertainment, Red Chilli Caterers guarantees a fun and unforgettable party that reflects your unique style.",
  "Elegant crockery arrangements are essential for a sophisticated dining experience. We provide a wide range of high-quality crockery options to complement your event's theme and decor. Our meticulous attention to detail ensures that each table setting is both visually appealing and functional, enhancing the overall dining experience for your guests and adding a touch of class to your event.",
  "Red Chilli Caterers understands the importance of professional and seamless corporate events. We offer comprehensive event management services, from venue selection to catering and decor. Our team ensures that every aspect of your corporate event is executed flawlessly, allowing you to focus on networking and business objectives. With our expertise, your event will leave a lasting impression on clients and colleagues alike.",
  "Celebrate your birthday in style with our bespoke birthday function services. We cater to all age groups, creating fun and memorable experiences tailored to your preferences. From themed decor and entertainment to delicious catering options, we handle all the details to ensure a joyous and hassle-free celebration. Red Chilli Caterers makes your special day even more extraordinary with personalized touches and exceptional service.",
  "Providing comfortable accommodation for your guests is crucial for a successful event. We offer a range of lodging options to suit different needs and preferences, ensuring your guests feel welcomed and well-taken care of. Our team handles all the arrangements, from booking to check-in, allowing you to focus on enjoying your event. With Red Chilli Caterers, your guests will have a pleasant and relaxing stay.",
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

export default function Services() {
  const { index } = useParams();
  const [currentSlide, setCurrentSlide] = useState(parseInt(index, 10) || 0);
  let sliderRef = null;

  useEffect(() => {
    if (sliderRef) {
      sliderRef.slickGoTo(currentSlide);
    }
  }, [currentSlide]);

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