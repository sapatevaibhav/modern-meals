import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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
          <div className="navbar-brand mx-auto">
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
    </nav>
  );
};

export default Navbar;
