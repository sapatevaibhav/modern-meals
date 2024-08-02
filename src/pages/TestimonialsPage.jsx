import React from "react";
import "./TestimonialsPage.css";

const testimonials_info = [
  {
    name: "Arjun Mehta",
    image: "/testimonials/user1.png",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis ligula at orci vehicula, non vestibulum massa dictum. Vivamus tincidunt, libero at blandit ullamcorper, sapien urna dignissim nisi,",
  },
  {
    name: "Rahul Sharma",
    image: "/testimonials/user2.png",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis ligula at orci vehicula, non vestibulum massa dictum. Vivamus tincidunt, libero at blandit ullamcorper, sapien urna dignissim nisi,",
  },
  {
    name: "Priya Iyer",
    image: "/testimonials/user3.png",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis ligula at orci vehicula, non vestibulum massa dictum. Vivamus tincidunt, libero at blandit ullamcorper, sapien urna dignissim nisi,",
  },
  {
    name: "Ananya Singh",
    image: "/testimonials/user4.png",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis ligula at orci vehicula, non vestibulum massa dictum. Vivamus tincidunt, libero at blandit ullamcorper, sapien urna dignissim nisi,",
  },
  {
    name: "Amit Kapoor",
    image: "/testimonials/user5.png",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis ligula at orci vehicula, non vestibulum massa dictum. Vivamus tincidunt, libero at blandit ullamcorper, sapien urna dignissim nisi,",
  },
  {
    name: "Vikram Patel",
    image: "/testimonials/user6.png",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis ligula at orci vehicula, non vestibulum massa dictum. Vivamus tincidunt, libero at blandit ullamcorper, sapien urna dignissim nisi,",
  },
];

const TestimonialsPage = () => {
  return (
    <div className="testimonials">
      <h1 className="custom-headings">Testimonials</h1>
      <p className="testimonials-subheading ">What People Think About Us??</p>
      <div className="testimonials-container">
        {testimonials_info.map((testimonial_info, index) => (
          <div key={index} className="testimonial-card">
            <img
              src={testimonial_info.image}
              alt={testimonial_info.name}
              className="testimonial-image"
            />
            <h2 className="testimonial-name">{testimonial_info.name}</h2>
            <p className="testimonial-feedback">{testimonial_info.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
