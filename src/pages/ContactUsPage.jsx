import React, { useEffect, useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "./ContactUsPage.css";
import ContactComponent from "../components/ContactComponent";

const containerStyle = {
  height: "500px",
  width: "100%",
};

const center = {
  lat: 18.516726,
  lng: 73.856255,
};

function MapComponent() {
  const [map, setMap] = useState(null);

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  useEffect(() => {
    if (map && window.google && window.google.maps) {
      const marker = new window.google.maps.Marker({
        position: center,
        map,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: "<div>A pretty CSS3 popup. <br /> Easily customizable.</div>",
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    }
  }, [map]);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
    />
  );
}

export default function ContactUsPage() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    id: "google-map-script",
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return (
    <div className="contact-container">
      <div className="contact-header text-center">
        <h1 className="custom-headings" style={{marginTop:"20px"}}>Contact Us</h1>
        <p className="contact-subtitle">Best of Dining Experience</p>
      </div>
      <ContactComponent />
      <div className="container google-map-container my-5 " style={{margin:"auto",minWidth:"1165px"}}>
        {isLoaded ? (
          <MapComponent />
        ) : (
          <div style={{ height: "500px" }}>Loading map...</div>
        )}
      </div>
    </div>
  );
}
