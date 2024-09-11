import React, { useState, useEffect } from "react";
import styled from "styled-components";
const testimonials = [
  {
    image: "happy_client.png",
    text:
      "I was thoroughly impressed by not only the taste of the food but also the prompt and polite service of the gentleman hosting our event. He was right on time, very polite, and cleaned everything thoroughly (while braving the immense heat). I would definitely recommend your services to another group looking for a caterer.",
    author: "Ramesh & Preeti",
  },
  {
    image: "happy_client.png",
    text:
      "In addition to the exceptional food and service, we were also impressed by the overall efficiency of the catering process. Everything ran smoothly from start to finish, and the team was well-prepared and organized. This allowed us to enjoy our event without worrying about any logistical issues.",
    author: "Vaishnavi",
  },
  {
    image: "happy_client.png",
    text:
      "Overall, our experience exceptional. We couldn't have asked for a better caterer for our event. The combination of delicious food, excellent service, and professional setup made our gathering a complete success. We will definitely be considering the same for future events.  Thanks again and have a great day!!",
    author: "Luffy & Nami",
  },
  {
    image: "happy_client.png",
    text:
      "The presentation of the food was equally impressive. Everything was beautifully arranged and looked as appetizing as it tasted. The variety of dishes catered to all tastes, and there was more than enough food for everyone. The attention to detail, from the plating to the temperature of the food, was evident.",
    author: "Vidya & Anjali",
  },
];
const TestimonialContainer = styled.div`
  flex: 1;
  @media (max-width: 675px) {
    min-height: 350px;
  }
`;
const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#192a97",
        color: "white",
        padding: "20px",
        margin: "30px",
        fontFamily: "Roboto, Tangerine, Sedan",
        position: "relative",
      }}
    >
      <div className="text-center">
        <h1 className="custom-headings" style={{ color: "white", marginBottom: "50px" }}>
          Our Happy Clients
        </h1>
        <p style={{ fontFamily: "Sedan", fontSize: "1.35em" }}>
          Because we at Modern Caterers know you don't want to regret saying
          <br />{" "}
          <strong style={{ fontSize: "1.4em" }}>
            'Oh! I could have eaten a bit more…'
          </strong>
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column flex-lg-row">
        <div
          className="flex-lg-2 d-flex justify-content-center"
          style={{ flex: 1 }}
        >
          <img
            src={testimonials[currentTestimonial].image}
            alt="testimonial"
            style={{
              borderRadius: "15px",
              width: "80%",
              padding: "20px 20px",
              height: "auto",
              maxWidth: "none",
            }}
          />
        </div>
        <TestimonialContainer
          className="mt-3 mt-lg-0 ml-lg-3 custom-para"
          style={{ flex: 1 }}
        >
          <p style={{ textAlign: "justify" }}>{testimonials[currentTestimonial].text}</p>
          <p style={{ fontFamily: "Roboto", fontSize: "1.3em" }}>
            <b>{testimonials[currentTestimonial].author}</b>
          </p>
        </TestimonialContainer>
      </div>
      <div className="d-flex justify-content-center mt-3">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            style={{
              width: "70px",
              height: "5px",
              backgroundColor:
                currentTestimonial === index ? "white" : "#3b5eb2",
              margin: "0 5px",
              cursor: "pointer",
            }}
          ></div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: "-10px",
          right: "-20px",
          color: "#3b5eb2",
        }}
      >
        <svg height="100" width="100">
          <polygon
            points="50,15 61,35 82,35 67,50 74,70 26,70 33,50 18,35"
            fill="#3b5eb2"
          />
        </svg>
      </div>
    </div>
  );
};

export default Testimonials;
