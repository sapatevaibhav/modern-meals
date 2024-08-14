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
        <p className="custom-para" style={{ minHeight: "175px" }}>{description}</p>
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
            description="And when it comes down to choosing the most professionally managed Wedding Caterers organizers, there are not many who can stand in the same league as Modern Caterers. Modern Caterers enjoy the rare distinction of being an all-in-one organizer for all types of functions that our clients could think of hosting."
            index={0}
          />
          <ServiceCard
            imageSrc="magical/social.png"
            title="Social"
            subtitle="SOCIAL EVENTS"
            description="When it comes to choosing the most professionally managed caterers for social events, few can match the caliber of Modern Caterers. Modern Caterers hold the unique distinction of being an all-in-one organizer for any type of social gathering our clients could envision hosting."
            index={3}
          />
        </div>
        <div className="row">
          <ServiceCard
            imageSrc="magical/corporate.png"
            title="Corporate"
            subtitle="CORPORATE EVENTS"
            description="In the realm of corporate events, selecting the most professionally managed catering services is crucial, and Modern Caterers stand out in this regard. Modern Caterers boast the rare distinction of being a comprehensive organizer for all types of corporate functions that our clients may need to host."
            index={5}
          />
          <ServiceCard
            imageSrc="magical/birthday.png"
            title="Birthday"
            subtitle="BIRTHDAY PARTIES"
            description="For professionally managed birthday party catering, Modern Caterers are second to none. Modern Caterers enjoy the unique distinction of being a one-stop organizer for all types of birthday celebrations that our clients wish to host."
            index={6}
          />
        </div>
      </div></>
  );
};

export default MagicalExperience;
