import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ imageSrc, title, subtitle, description, index }) => {
  return (
    <div className="col-12 col-md-6 text-center">
      <div className="p-4">
        <div className="d-flex justify-content-center">
          <img
            src={imageSrc}
            alt={title}
            style={{
              width: "100%",
              maxWidth: "350px",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
        <h2 className="mt-1" style={{ fontFamily: "Sedan, serif", color: "#00148f" }}>
          {title}
        </h2>
        <h3
          style={{
            fontFamily: "Roboto, sans-serif",
            color: "#00148f",
          }}
        >
          {subtitle}
        </h3>
        <p className="custom-para" style={{ minHeight: "275px", textAlign:"justify" }}>{description}</p>
        <NavLink to={`/all_services/${index}`}>
          <button
            className="btn btn-primary"
            style={{ backgroundColor: "#00148f", borderColor: "#00148f", borderRadius: "25px" }}
          >
            LEARN MORE
          </button>
        </NavLink>
      </div>
    </div>
  );
};

const MagicalExperience = () => {
  return (
    <>
      <h1
        className="main-heading custom-headings mt-5"
        style={{ textAlign: "center" }}
      >
        Making Every Experience <br /> Magical
      </h1> <div
        className="container"
        style={{
          backgroundImage: "url('fork.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px",
        }}
      >
        <div className="row">
          <ServiceCard
            imageSrc="magical/weddings.png"
            title="Weddings"
            subtitle="EXCEPTIONAL WEDDINGS"
            description="Your wedding day is one of the most important days of your life, and at Modern Meal Caterers, we ensure it’s nothing short of spectacular. From the first toast to the last bite of dessert, our wedding catering services are designed to create a culinary experience that complements the beauty and significance of your special day. We offer customizable menus that reflect your tastes and traditions, ensuring that every dish tells a part of your love story. Beyond the food, we provide elegant crockery arrangements, stunning venue beautification, and attentive service to ensure your day is flawless from start to finish."
            index={0}
          />
          <ServiceCard
            imageSrc="magical/social.png"
            title="Social"
            subtitle="SOCIAL EVENTS"
            description="Whether it’s a family reunion, a gala dinner, or a festive celebration, social events are about bringing people together—and great food is at the heart of it. Our social event catering services are tailored to create a warm, welcoming atmosphere where guests can relax and enjoy themselves. We offer a wide range of menu options, from sophisticated hors d’oeuvres to hearty main courses, all crafted to suit the occasion and your preferences. With our attention to detail and commitment to quality, your social event will be remembered for all the right reasons.
"
            index={3}
          />
        </div>
        <div className="row">
          <ServiceCard
            imageSrc="magical/corporate.png"
            title="Corporate"
            subtitle="CORPORATE EVENTS"
            description="Impress your clients, partners, and employees with corporate event catering that exudes professionalism and sophistication. Whether you’re hosting a business meeting, a conference, or a corporate gala, we provide catering solutions that are as polished as your brand. Our menus are designed to fuel productivity and leave a lasting impression, with a focus on fresh, high-quality ingredients and impeccable presentation. From breakfast buffets to multi-course dinners, we handle everything, so you can focus on what matters most—your business."
            index={5}
          />
          <ServiceCard
            imageSrc="magical/birthday.png"
            title="Birthday"
            subtitle="BIRTHDAY PARTIES"
            description="Celebrate life’s milestones with birthday party catering that’s fun, festive, and full of flavor. At Modern Meal Caterers, we create birthday menus that delight guests of all ages, with a mix of classic favorites and exciting new dishes. Whether it’s a child’s birthday party with playful, kid-friendly options or an elegant adult celebration with gourmet cuisine, we ensure that every detail is perfect. Our team will work with you to create a menu that reflects the birthday honoree’s tastes, making their day as special as they are."
            index={6}
          />
        </div>
      </div></>
  );
};

export default MagicalExperience;
