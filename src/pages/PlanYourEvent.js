import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./PlanYourEvent.css";

const PlanYourEvent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your event request has been submitted!");
    console.log(formData);
  };

  return (
    <section className="event-section">
      <Container>
        <h2 className="text-center">Plan Your Event</h2>
        <p className="text-center">Fill out the form below and let’s create an unforgettable experience.</p>
        <Form onSubmit={handleSubmit} className="event-form">
          <Row>
            <Col md={6}>
              <Form.Group controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="phone">
                <Form.Label>Your Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="event">
                <Form.Label>Select Your Event</Form.Label>
                <Form.Control
                  as="select"
                  name="event"
                  value={formData.event}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose an event</option>
                  <option value="Hollywood & Entertainment Events">
                    Hollywood & Entertainment Events
                  </option>
                  <option value="Luxury Corporate Gatherings">
                    Luxury Corporate Gatherings
                  </option>
                  <option value="Private VIP Dinners & Weddings">
                    Private VIP Dinners & Weddings
                  </option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
            />
          </Form.Group>

          <div className="text-center pt-5">
            <Button variant="danger" type="submit" className="reserve-button">
              Reserve Now
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default PlanYourEvent;
