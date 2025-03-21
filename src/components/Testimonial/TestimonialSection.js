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
    name: "Sarah M",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    text: "PL8FULL exceeded our expectations! The food was phenomenal, and the service was impeccable. Truly a five-star experience!"
  },
  {
    name: "James R",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    text: "From planning to execution, everything was flawless. Our guests were raving about the food and presentation. Highly recommend PL8FULL!"
  }
];

// Group testimonials into pairs
const groupedTestimonials = [];
for (let i = 0; i < testimonials.length; i += 2) {
  groupedTestimonials.push(testimonials.slice(i, i + 2));
}

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <Container>
        <h2>What Our Clients Say</h2>
        <Carousel indicators={false} interval={4000} className="testimonial-carousel">
          {groupedTestimonials.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center pt-3">
                {group.map((testimonial, i) => (
                  <Col md={5} key={i} className="d-flex justify-content-center">
                    <div className="testimonial-card">
                      <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                      <p className="testimonial-text">"{testimonial.text}"</p>
                      <h5 className="testimonial-name">- {testimonial.name}</h5>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default TestimonialSection;
