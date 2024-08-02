import React, { useState, useEffect } from "react";
import "./MagicalExperience.css";
import { Link } from "react-router-dom";

const carouselItems = [
  {
    image: "bullet_image_1.png",
    title: "Weddings",
    description:
      "And when it comes down to choosing the most professionally managed Wedding Caterers organizers, there are not many who can stand in the same league as Modern Caterers. Modern Caterers enjoy the rare distinction of being an all-in-one organizer for all types of functions that our clients could think of hosting.",
  },
  {
    image: "bullet_image_2.png",
    title: "Social Events",
    description:
      "When it comes to choosing the most professionally managed caterers for social events, few can match the caliber of Modern Caterers. Modern Caterers hold the unique distinction of being an all-in-one organizer for any type of social gathering our clients could envision hosting.",
  },
  {
    image: "bullet_image_3.png",
    title: "Corporate Events",
    description:
      "In the realm of corporate events, selecting the most professionally managed catering services is crucial, and Modern Caterers stand out in this regard. Modern Caterers boast the rare distinction of being a comprehensive organizer for all types of corporate functions that our clients may need to host.",
  },
  {
    image: "bullet_image_4.png",
    title: "Birthday Parties",
    description:
      "For professionally managed birthday party catering, Modern Caterers are second to none. Modern Caterers enjoy the unique distinction of being a one-stop organizer for all types of birthday celebrations that our clients wish to host.",
  },
];

const MagicalExperience = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const title = carouselItems[index]?.title?.toUpperCase();

  return (
    <>
      <h1 className="main-heading custom-headings">
        Making Every Experience Magical
      </h1>
      <div className="carousel-container">
        <div className="image-container igc">
          <img
            src={carouselItems[index].image}
            alt={carouselItems[index].title}
          />
        </div>
        <div className="options-container">
          <ul className="options-list">
            {carouselItems.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className={`option ${itemIndex === index ? "selected" : ""}`}
                onClick={() => handleSelect(itemIndex)}
              >
                {item.title.split(" ")[0]}
              </li>
            ))}
          </ul>
        </div>
        <div className="content-container">
          <h3 className="option-headline">{title}</h3>
          <p className="description custom-para">
            {carouselItems[index].description}
          </p>
          <Link to="/services">
            <button className="btn btn-primary">LEARN MORE</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MagicalExperience;
