import React from "react";
import "./AboutUsPage.css";
import ImageLayout from "./ImageLayout";

export default function AboutUsPage() {
  return (
    <div>
      <div className="about-us-page">
        <section className="who-we-are">
          <p className="center-text">About us</p>
          <h2>Who We Are</h2>
          <p className="des-text">
            In the context of this current social scenario in India, it is not
            surprising that the demand for top quality function organizers is
            witnessing an ever increasing trend at present. More and more
            families are opting for professionals to take care of their special
            functions. And when it comes down to choosing the most
            professionally managed wedding organizers, there are not many who
            can stand in the same league as Modern Caterers.
          </p>
          <p className="des-text">
            Modern Caterers enjoy the rare distinction of being an all in one
            organizer for all types of functions that our clients could think of
            hosting. Be it Birthdays, weddings, get-togethers, old friends
            re-unions, wedding anniversaries, kitty parties, engagements,
            mehndi, New year parties, family outings, seminars, conferences,
            annual sales meets, company functions, or any other type of function
            that any of our client may think of hosting, we at Red Chilli
            Caterers can easily manage all aspects of these functions from their
            beginning till the very end.
          </p>
        </section>
        <section className="our-vision">
          <p className="center-text">Our Vision</p>
          <h2>To Create & Inspire</h2>
        </section>
        <section className="team-photo">
          <div className="photo-placeholder">team photo</div>
        </section>
      </div>
      <div className="container mission-container">
        <div className="mission-text">
          <h4 className="text-uppercase">Our Mission</h4>
          <h2>Creating Remarkable Experiences!</h2>
          <p>
            Our specialty is providing peace of mind. With our experienced and
            dedicated team, we handle all the nuances of off-site catering, so
            you can enjoy your own event as a guest. From first impressions to
            lasting impressions, our commitment is to make every event a truly
            exceptional experience!
          </p>
          <button className="btn btn-primary">Know More</button>
        </div>
        <ImageLayout />
      </div>
    </div>
  );
}
