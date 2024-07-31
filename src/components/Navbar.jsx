import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        <div className="d-flex justify-content-between w-100">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!collapsed}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`navbar-brand mx-auto d-lg-none ${
              collapsed ? "logo-collapsed" : "logo-expanded"
            }`}
          >
            <img
              src="/big_logo.png"
              alt="Morden Caterers"
              className="navbar-logo"
            />
          </div>
          <div
            className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
            id="navbarNav"
          >
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  SERVICES
                </NavLink>
              </li>
            </ul>
            <div className="navbar-brand mx-auto d-none d-lg-block">
              <img
                src="/big_logo.png"
                alt="Morden Caterers"
                className="navbar-logo"
              />
            </div>
            <ul className="navbar-nav ms-auto">
              {/* <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/menu"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MENU
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/menu1">
                      Menu 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/menu2">
                      Menu 2
                    </NavLink>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu">
                  MENU
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">
                  GALLERY
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="btn btn-primary">
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
