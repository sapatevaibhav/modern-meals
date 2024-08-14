import React from "react";
import ContactComponent from "../components/ContactComponent";
import { Link, NavLink } from "react-router-dom";
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
      <h2 className="custom-headings" style={{ textAlign: "center" }}>
        Ready to Make Memories?
      </h2>
      <p
        className="center-text cust-para"
        style={{
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
      <div className="services_container" style={{ fontFamily: "sedan" }}>
        <div className="service-cards-container">
          <div className="service-card">
            <NavLink to={`/all_services/${0}`}>
              <img
                src="/services/wedding_services.png"
                alt="Wedding Services"
                className="service-image"
              />
            </NavLink>
            <div className="service-text">
              <h3>Weddings Services</h3>
              <Link to={`/all_services/${0}`} className="learn-more">
                ← Learn More
              </Link>
            </div>
          </div>
          <div className="service-card">
            <NavLink to={`/all_services/${0}`}>
              <img
                src="/services/venue_beautification.png"
                alt="Venue Beautification"
                className="service-image"
              />
            </NavLink>
            <div className="service-text ali-right">
              <h3>Venue Beautification</h3>
              <Link to={`/all_services/${1}`} className="learn-more">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
        <div className="service-cards-container">
          <div className="service-card">
            <div className="service-text ali-right">
              <h3>Jaimala Theme & Entertainment</h3>
              <Link to={`/all_services/${2}`} className="learn-more">
                Learn More →
              </Link>
            </div>
            <NavLink to={`/all_services/${0}`}>
              <img
                src="/services/jaimala_theme.png"
                alt="Jaimala Theme & Entertainment"
                className="service-image"
              />
            </NavLink>
          </div>
          <div className="service-card">
            <div className="service-text">
              <h3>Theme Parties</h3>
              <Link to={`/all_services/${3}`} className="learn-more">
                ← Learn More
              </Link>
            </div>
            <NavLink to={`/all_services/${0}`}>
              <img
                src="/services/theme_parties.png"
                alt="Theme Parties"
                className="service-image"
              />
            </NavLink>
          </div>
        </div>
        <div className="service-cards-container">
          <div className="service-card">
            <NavLink to={`/all_services/${0}`}>
              <img
                src="/services/crockery_arrangements.png"
                alt="Crockery Arrangements"
                className="service-image"
              />
            </NavLink>
            <div className="service-text">
              <h3>Crockery Arrangements</h3>
              <Link to={`/all_services/${4}`} className="learn-more">
                Learn More ←
              </Link>
            </div>
          </div>
          <div className="service-card">
            <NavLink to={`/all_services/${0}`}>
              <img
                src="/services/corporate_events.png"
                alt="Corporate Events"
                className="service-image"
              />
            </NavLink>
            <div className="service-text ali-right">
              <h3>Corporate Events</h3>
              <Link to={`/all_services/${5}`} className="learn-more">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
        <div className="service-cards-container">
          <div className="service-card">
            <div className="service-text ali-right">
              <h3>Birthday Function</h3>
              <Link to={`/all_services/${6}`} className="learn-more">
                Learn More →
              </Link>
            </div>
            <NavLink to={`/all_services/${0}`}>
              <img
                src="/services/birthday_function.png"
                alt="Birthday Function"
                className="service-image"
              />
            </NavLink>
          </div>
          <div className="service-card">
            <div className="service-text">
              <h3>Accommodation for Guests</h3>
              <Link to={`/all_services/${7}`} className="learn-more">
                ← Learn More
              </Link>
            </div>
            <NavLink to={`/all_services/${0}`}>
              <img
                src="/services/accomodation.png"
                alt="Accommodation for Guests"
                className="service-image"
              />
            </NavLink>
          </div>
        </div>
      </div>
      <ContactComponent />
      <div style={{height:"50px"}}></div>
    </div>
  );
}
