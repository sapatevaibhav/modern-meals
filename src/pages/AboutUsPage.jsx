import React from "react";
import "./AboutUsPage.css";
import ImageLayout from "./ImageLayout";

export default function AboutUsPage() {
  return (
    <div>
      <div className="about-us-page">
        <section className="who-we-are">
          <p className="center-text">About us</p>
          <h2 className="custom-headings">Who We Are</h2>
          <p className="des-text custom-para">
            At Modern Meal Caterers, we are passionate about creating extraordinary culinary experiences that make every event unforgettable. Based in Pune, we have earned a reputation for excellence in the catering industry by combining fresh, high-quality ingredients with innovative recipes and elegant presentations. Our team of experienced chefs, event planners, and service staff work tirelessly to ensure that every detail of your event is handled with the utmost care and professionalism.
          </p>
          <p className="des-text custom-para">
            Whether you’re planning a corporate event, a lavish wedding, or an intimate gathering, we bring the same level of dedication and creativity to every occasion. We believe that food is more than just a meal; it’s an experience that should delight the senses and bring people together. From the initial consultation to the final course, we are committed to making your vision a reality, delivering not just food, but memories that will last a lifetime.
          </p>
        </section>
        <section className="our-vision">
          <p className="center-text">Our Vision</p>
          <h2 className="custom-headings">To Create & Inspire</h2>
          <p className="des-text custom-para">
            To become the leading catering service in Pune, known for transforming every event into a memorable experience through innovative cuisine, exceptional service, and a commitment to quality. We envision a future where Modern Meal Caterers is synonymous with excellence, creativity, and unparalleled customer satisfaction, setting the standard for culinary artistry in the catering industry.
          </p>
        </section>
        <section className="team-photo">
          {/* <div className="photo-placeholder">team photo</div> */}
          <img src="team.png" alt="" srcset="" />
        </section>
      </div>
      <div className="container mission-container">
        <div className="mission-text">
          <h5 className="text-uppercase">Our Mission</h5>
          <h2 className="custom-headings">Creating Remarkable Experiences!</h2>
          <p className="custom-para">
            Our mission is to craft unforgettable dining experiences that delight the senses and bring people together. We are dedicated to using the finest ingredients, offering personalized service, and continuously innovating our menus to meet and exceed our clients’ expectations. At Modern Meal Caterers, we strive to make every event, whether large or small, a reflection of our passion for excellence and our commitment to creating lasting memories.
          </p>
          <button className="btn btn-primary">Know More</button>
        </div>
        <ImageLayout />
      </div>
      <div
        className="container-fluid container-fluid-cus text-white p-5 dark-container mx-3"
        style={{ backgroundColor: "#00148f" }}
      >
        <div className="row cus-flex ">
          <div className="col-md-4">
            <h2 className="sedanand">The freedom of choosing the best</h2>
            <p className="roboto custom-para">
              When you select Modern Caterers to organize your special
              functions, you can be sure of laying your hands on the best
              available resources for the evening. The best of food, the best of
              services, the best of decoration, the best of attention to every
              detail, and every other arrangement you have ordered for the
              special occasion.
            </p>
          </div>
          <div className="col-md-4">
            <h2 className="sedanand">Assurance of the finest quality</h2>
            <p className="roboto custom-para">
              If we dare to call ourselves Modern Caterers, we also strive
              to make sure that all our clients are treated like royalty, and
              they get that imperial taste in all aspects of our catering
              services. We are able to achieve such high standards by strictly
              adhering to the dictum of zero compromise on quality in every
              single process of our operations.
            </p>
          </div>
          <div className="col-md-4">
            <h2 className="sedanand">Utmost consideration to finer points</h2>
            <p className="roboto custom-para">
              We at Modern Caterers always believe in doing as our client
              would ask us to do. We always take a larger perspective of things
              while implementing the list of things to be done during a
              function. But this doesn't mean that we miss the smaller details
              in handling a large function. Every aspect of the event is looked
              at both subjectively and objectively before giving the go-ahead
              nod for the function.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
