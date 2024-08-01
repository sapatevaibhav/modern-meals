import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const handleClose = () => {
    setCollapsed(true);
  };

  useEffect(() => {
    document.body.style.overflow = collapsed ? "auto" : "hidden";

    const handleResize = () => {
      if (window.innerWidth >= 850) {
        setCollapsed(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [collapsed]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
      style={{ backgroundColor: "#6ceaf9" }}
    >
      <div className="container-fluid">
        <div className="d-flex justify-content-between w-100">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavResponsive"
            aria-controls="navbarNavResponsive"
            aria-expanded={!collapsed}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`navbar-brand mx-auto d-lg-none ${
              collapsed
                ? "logo-collapsed-responsive"
                : "logo-expanded-responsive"
            }`}
          >
            <img
              src="/big_logo.png"
              alt="Morden Caterers"
              className="navbar-logo-responsive"
            />
          </div>
          <div
            className={`collapse navbar-collapse ${collapsed ? "" : "show"} ${
              collapsed ? "" : "fullscreen-nav"
            }`}
            id="navbarNavResponsive"
          >
            <button className="close-btn d-lg-none" onClick={handleClose}>
              &times;
            </button>
            <ul className="navbar-nav me-auto left-nav mob-align">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end onClick={handleClose}>
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={handleClose}>
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/services"
                  onClick={handleClose}
                >
                  SERVICES
                </NavLink>
              </li>
            </ul>
            <div className="navbar-brand mx-auto d-none d-lg-block">
              <img
                src="/big_logo.png"
                alt="Morden Caterers"
                className="navbar-logo-centered"
              />
            </div>
            <ul className="navbar-nav ms-auto right-nav mob-align">
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu" onClick={handleClose}>
                  MENU
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/gallery"
                  onClick={handleClose}
                >
                  GALLERY
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="btn btn-primary"
                  onClick={handleClose}
                >
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
