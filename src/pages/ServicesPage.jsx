import React from "react";
import ContactComponent from "../components/ContactComponent";
import "./ServicesPage.css";

export default function ServicesPage() {
  return (
    <div>
      <p
        className="center-text mt-5"
        style={{ fontFamily: "sedan", fontSize: "1.2rem" }}
      >
        Services
      </p>
      <h2 className="gallery-heading">Ready to Make Memories?</h2>
      <p
        className="center-text"
        style={{
          fontFamily: "roboto",
          fontSize: "1.2rem",
          margin: "auto",
          marginBottom: "50px",
          maxWidth: "800px",
        }}
      >
        Modern Caterers is more than just a caterer. Our specialty is providing
        peace of mind. With our experienced and dedicated team, we handle all
        the nuances of off-site catering and event production, so you can enjoy
        your own event as a guest. From first impressions to lasting
        impressions, our commitment is to make every event a truly exceptional
        experience!
      </p>
      <div className="services_container" style={{fontFamily:"sedan"}}>
        <div className="service-cards-container">
          <div className="service-card">
            <img
              src="/services/wedding_services.png"
              alt="Wedding Services"
              className="service-image"
            />
            <div className="service-text">
              <h3>Weddings Services</h3>
              <a href="#" className="learn-more">
                ← Learn More
              </a>
            </div>
          </div>
          <div className="service-card">
            <img
              src="/services/venue_beautification.png"
              alt="Venue Beautification"
              className="service-image"
            />
            <div className="service-text ali-right">
              <h3>Venue Beautification</h3>
              <a href="#" className="learn-more">
                Learn More →
              </a>
            </div>
          </div>
        </div>{" "}
        <div className="service-cards-container">
          <div className="service-card">
            <div className="service-text ali-right">
              <h3>Jaimala Theme & Entertainment</h3>
              <a href="#" className="learn-more">
                Learn More →
              </a>
            </div>
            <img
              src="/services/jaimala_theme.png"
              alt="Jaimala Theme & Entertainment"
              className="service-image"
            />
          </div>
          <div className="service-card">
            <div className="service-text">
              <h3>Theme Parties</h3>
              <a href="#" className="learn-more">
                ← Learn More
              </a>
            </div>
            <img
              src="/services/theme_parties.png"
              alt="Theme Parties"
              className="service-image"
            />
          </div>{" "}
        </div>{" "}
        <div className="service-cards-container">
          <div className="service-card">
            <img
              src="/services/crockery_arrangements.png"
              alt="Crockery Arrangements"
              className="service-image"
            />
            <div className="service-text">
              <h3>Crockery Arrangements</h3>
              <a href="#" className="learn-more">
                Learn More ←
              </a>
            </div>
          </div>
          <div className="service-card">
            <img
              src="/services/corporate_events.png"
              alt="Corporate Events"
              className="service-image"
            />
            <div className="service-text ali-right">
              <h3>Corporate Events</h3>
              <a href="#" className="learn-more">
                Learn More →
              </a>
            </div>
          </div>{" "}
        </div>{" "}
        <div className="service-cards-container">
          <div className="service-card">
            <div className="service-text ali-right">
              <h3>Birthday Function</h3>
              <a href="#" className="learn-more">
                Learn More →
              </a>
            </div>
            <img
              src="/services/birthday_function.png"
              alt="Birthday Function"
              className="service-image"
            />
          </div>
          <div className="service-card">
            <div className="service-text">
              <h3>Accommodation for Guests</h3>
              <a href="#" className="learn-more">
                ← Learn More
              </a>
            </div>
            <img
              src="/services/accomodation.png"
              alt="Accommodation for Guests"
              className="service-image"
            />
          </div>
        </div>
      </div>
      <ContactComponent />
    </div>
  );
}
