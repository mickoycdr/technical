import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./TestimonialSection.css";

const testimonials = [
  {
    name: "Sarah M",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "PL8FULL exceeded our expectations! The food was phenomenal, and the service was impeccable. Truly a five-star experience!"
  },
  {
    name: "James R",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "From planning to execution, everything was flawless. Our guests were raving about the food and presentation. Highly recommend PL8FULL!"
  },
  {
    name: "Emily T",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    text: "Fantastic experience! The team at PL8FULL was professional and accommodating. Highly recommend!"
  },
  {
    name: "Michael B",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    text: "The best catering service I’ve ever experienced. Quality food and outstanding service!"
  }
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <Container>
        <h2>What Our Clients Say</h2>
        <Carousel
          indicators={false}
          interval={4000}
          className="testimonial-carousel"
          prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true"></span>}
          nextIcon={<span className="carousel-control-next-icon" aria-hidden="true"></span>}
        >
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center pt-3">
                <Col md={6} className="d-flex justify-content-center">
                  <div className="testimonial-card">
                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <h5 className="testimonial-name">- {testimonial.name}</h5>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default TestimonialSection;