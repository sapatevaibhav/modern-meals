import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <img src="/logo.png" alt="Modern Meals Logo" className="logo" />
      <div className="content">
        <div className="about">
          <h3>About Us</h3>
          <p>
            In the context of this current social scenario in India, it is not
            surprising that the demand for top quality function organizers is
            witnessing an ever increasing trend at present. More and more
            families are opting for professionals to take care of their special
            functions. And when it comes down to choosing the most
            professionally managed wedding organizers, there are not many who
            can stand in the same league as Modern Caterers.
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
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">Gallery</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
          <div className="contacts">
            <h3>Contacts</h3>
            <p>Address: B-151 North Ex-Mall, Sector-9, Rohini, Pune-411010</p>
            <p>Phone: +91 - 8800209900, 8800479900</p>
            <p>Email: info@modernmeals.com</p>
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
