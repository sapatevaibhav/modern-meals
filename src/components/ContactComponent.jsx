import React, { useState } from "react";
import "./ContactComponent.css";

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    location: "",
    email: "",
    date: "",
  });

  const inputStyle = {
    border: "none",
    borderBottom: "2px solid #eeeeee",
    fontSize: "1.2rem",
    outline: "none",
    fontFamily: "Roboto, sans-serif",
    borderRadius: "0",
    width: "90%",
    paddingRight: "10px",
    backgroundColor: "#00148f",
    color: "white",
    WebkitTextFillColor: "white",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phoneNumber && formData.email) {
      console.log("Form submitted:", formData);
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <div>
      <div className="contact-image-container">
        <img
          src="happy_client.png"
          alt="Contact Us"
          className="contact-image"
        />
      </div>
      <div className="container contact-header text-center contact-cont">
        <h1 className="custom-headings abcd mt-5" style={{ color: "white" }}>
          Get In Touch
        </h1>
        <p className="contact-subtitle abcd">Feel free to contact us !!</p>
      </div>
      <div className="container my-0 contact-cont cpmtact-us">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-4 d-flex align-items-center">
                <i
                  className="bi bi-person white"
                  style={{
                    fontSize: "2.5rem",
                    marginRight: "10px",
                    color: "white",
                  }}
                ></i>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="NAME"
                  required
                  style={inputStyle}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 d-flex align-items-center">
                <i
                  className="bi bi-telephone"
                  style={{
                    fontSize: "2.5rem",
                    marginRight: "10px",
                    color: "white",
                  }}
                ></i>
                <input
                  type="tel"
                  name="phoneNumber"
                  className="form-control wh-text"
                  placeholder="PHONE NUMBER"
                  required
                  style={inputStyle}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 d-flex align-items-center">
                <i
                  className="bi bi-geo-alt"
                  style={{
                    fontSize: "2.5rem",
                    marginRight: "10px",
                    color: "white",
                  }}
                ></i>
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  placeholder="LOCATION"
                  style={inputStyle}
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4 d-flex align-items-center">
                <img
                  src="/icons/email.png"
                  alt="email"
                  style={{
                    width: "2.7rem",
                    height: "2.7rem",
                    marginRight: "10px",
                    color: "white",
                  }}
                />
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="EMAIL"
                  required
                  style={inputStyle}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 d-flex align-items-center">
                <img
                  src="/icons/cal.png"
                  alt="calendar"
                  style={{
                    width: "2.7rem",
                    height: "2.7rem",
                    marginRight: "10px",
                    color: "white",
                  }}
                />
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  style={inputStyle}
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary contact-submit-button"
              style={{ color: "black", fontFamily: "roboto" }}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
