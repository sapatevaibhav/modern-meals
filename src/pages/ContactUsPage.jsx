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
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d472.90864795283665!2d73.87526167312592!3d18.51673397418428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20Parmar%20Davakhana%2C%20Camp%2C%20Pune%20-%20411001!5e0!3m2!1sen!2sin!4v1725564340745!5m2!1sen!2sin"
          width="1040"
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
