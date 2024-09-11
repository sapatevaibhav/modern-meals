import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <img src="/big_logo.png" alt="Modern Meals Logo" className="logo" />
      <div className="content">
        <div className="about">
          <h3>About Us</h3>
          <p>
            At Modern Meal Caterers, we turn every event into a memorable experience with our exceptional catering services. Based in Pune, we specialize in delivering gourmet cuisine, elegant presentations, and personalized service for corporate events, weddings, theme parties, and more. With a passion for culinary excellence and a commitment to quality, we’re dedicated to making your special occasions truly unforgettable.
          </p>
        </div>
        <div className="links-contacts">
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
          <div className="contacts">
            <h3>Contacts</h3>
            <p>Address: Modern Collection
              C/O Modern Meals <br />
              943, Bootee Street,  Near Parmar Davakhana, Camp,<br /> Pune - 411001</p>
            <p>Phone: +91 - 982217130,  855201238</p>
            <p>Email: a.prashant222@gmail.com</p>
          </div>
        </div>
      </div>
      <hr />
      <footer>
        © 2023-24 Modern Meals Catering & Events. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutUs;
