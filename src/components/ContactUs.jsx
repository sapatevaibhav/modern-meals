import React from "react";

const GetInTouch = () => {
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
      <h1
        className="text-center mb-3"
        style={{
          fontFamily: "Tangerine, cursive",
          color: "#00148f",
          fontSize: "5em",
        }}
      >
        Get In Touch
      </h1>
      <h5 className="text-center mb-5" style={{ fontFamily: "Sedan, serif" }}>
        Feel free to contact us !!
      </h5>
      <form>
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
                style={inputStyle}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-4 d-flex align-items-center">
              <i
                className="bi bi-envelope"
                style={{ fontSize: "2.5rem", marginRight: "10px" }}
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
                style={{ fontSize: "2.5rem", marginRight: "10px" }}
              ></i>
              <input type="date" className="form-control" style={inputStyle} />
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
