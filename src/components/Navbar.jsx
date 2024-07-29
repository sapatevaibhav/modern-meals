import React, { useState } from "react";
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
                <a className="nav-link active" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  SERVICES
                </a>
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/menu"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MENU
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/menu1">
                      Menu 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/menu2">
                      Menu 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gallery">
                  GALLERY
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="btn btn-primary">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
