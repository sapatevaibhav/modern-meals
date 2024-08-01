import React from "react";
import "./ContactUsPage.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export default function ContactUsPage() {
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
  const position = [18.516726, 73.856255];
  return (
    <div className="contact-container">
      <div className="contact-header text-center">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">Best of Dining Experience</p>
      </div>
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
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <div className="container leaf-container">
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
