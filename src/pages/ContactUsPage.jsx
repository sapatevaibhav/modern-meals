import "./ContactUsPage.css";
import ContactComponent from "../components/ContactComponent";

export default function ContactUsPage() {
  return (
    <div className="contact-container">
      <div className="contact-header text-center">
        <h1 className="custom-headings contact-heading">Contact Us</h1>
        <p className="contact-subtitle">Best of Dining Experience</p>
      </div>
      <ContactComponent />
      <div className="container google-map-container my-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3889993449607!2d73.86553929972337!3d18.511315346720156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c041ba5058c7%3A0x9ab0649cda0bff2f!2sShaan%20Darshan%20Building%2C%20Sadashiv%20Govind%20Rasta%2C%20New%20Nana%20Peth%2C%20Bhawani%20Peth%2C%20Pune%2C%20Maharashtra%20411002!5e0!3m2!1sen!2sin!4v1722677146469!5m2!1sen!2sin"
          width="1140"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
