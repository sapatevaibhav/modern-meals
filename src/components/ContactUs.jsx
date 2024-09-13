import React, { useState } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    email: "",
    date: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, location, email, date } = formData;

    if (name && phone && email) {

      const mailtoLink = `mailto:a.prashant222@gmail.com?subject=Contact Form Submission&body=Name: ${encodeURIComponent(name)}%0D%0APhone: ${encodeURIComponent(phone)}%0D%0ALocation: ${encodeURIComponent(location)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0ADate: ${encodeURIComponent(date)}`;

      window.location.href = mailtoLink;

      setFormData({
        name: "",
        phone: "",
        location: "",
        email: "",
        date: "",
      });

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert("Please fill out all required fields.");
    }
  };

  const inputStyle = {
    border: "none",
    borderBottom: "2px solid #000",
    fontSize: "1.2rem",
    outline: "none",
    fontFamily: "Roboto, sans-serif",
    borderRadius: "0",
    width: "90%",
    paddingRight: "10px",
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-3 custom-headings">Get In Touch</h1>
      <h5 className="text-center mb-5" style={{ fontFamily: "Sedan, serif" }}>
        Feel free to contact us !!
      </h5>
      {submitted && (
        <div className="alert alert-success text-center" role="alert">
          Thank you! Your details have been submitted.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-4 d-flex align-items-center">
              <i
                className="bi bi-person"
                style={{ fontSize: "2.5rem", marginRight: "10px" }}
              ></i>
              <input
                type="text"
                className="form-control"
                placeholder="NAME"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
            <div className="mb-4 d-flex align-items-center">
              <i
                className="bi bi-telephone"
                style={{ fontSize: "2.5rem", marginRight: "10px" }}
              ></i>
              <input
                type="tel"
                className="form-control"
                placeholder="PHONE NUMBER"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
            <div className="mb-4 d-flex align-items-center">
              <i
                className="bi bi-geo-alt"
                style={{ fontSize: "2.5rem", marginRight: "10px" }}
              ></i>
              <input
                type="text"
                className="form-control"
                placeholder="LOCATION"
                name="location"
                value={formData.location}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-4 d-flex align-items-center">
              <img
                src="/icons/email-black.png"
                alt="email"
                style={{
                  width: "2.7rem",
                  height: "2.7rem",
                  marginRight: "10px",
                }}
              />
              <input
                type="email"
                className="form-control"
                placeholder="EMAIL"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
            <div className="mb-4 d-flex align-items-center">
              <img
                src="/icons/calendar.png"
                alt="calendar"
                style={{
                  width: "2.7rem",
                  height: "2.7rem",
                  marginRight: "10px",
                }}
              />
              <input
                type="date"
                className="form-control"
                name="date"
                value={formData.date}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              marginBottom: "100px",
              backgroundColor: "#00148f",
              borderColor: "#00148f",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
