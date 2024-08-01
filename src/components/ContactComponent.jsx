import React from "react";

export default function ContactComponent() {
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
    tooltipColor: "white",
  };
  return (
    <div>
      {" "}
      <div className="contact-image-container ">
        <img
          src="happy_client.png"
          alt="Contact Us"
          className="contact-image"
        />
      </div>
      <div className="container contact-header text-center contact-cont">
        <h1 className="contact-title abcd mt-5">Get In Touch</h1>
        <p className="contact-subtitle abcd">Feel free to contact us !!</p>
      </div>
      <div className="container my-0 contact-cont cpmtact-us">
        <form>
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
                  className="form-control"
                  placeholder="NAME"
                  required
                  style={inputStyle}
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
                  className="form-control wh-text"
                  placeholder="PHONE NUMBER"
                  required
                  style={inputStyle}
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
                  className="form-control"
                  placeholder="LOCATION"
                  style={inputStyle}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4 d-flex align-items-center">
                <i
                  className="bi bi-envelope"
                  style={{
                    fontSize: "2.5rem",
                    marginRight: "10px",
                    color: "white",
                  }}
                ></i>
                <input
                  type="email"
                  className="form-control"
                  placeholder="EMAIL"
                  required
                  style={inputStyle}
                />
              </div>
              <div className="mb-4 d-flex align-items-center">
                <i
                  className="bi bi-calendar"
                  style={{
                    fontSize: "2.5rem",
                    marginRight: "10px",
                    color: "white",
                  }}
                ></i>
                <input
                  type="date"
                  className="form-control"
                  style={inputStyle}
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
