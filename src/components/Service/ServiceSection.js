import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCard";
import "./ServiceCard.css"; // Import custom styles


const ServiceSection = () => {
  const services = [
    { title: "Hollywood & Entertainment Events", description: "Top-notch service for the most exclusive clients." },
    { title: "Luxury Corporate Gatherings", description: "Elegant business events with amazing menus." },
    { title: "Private VIP Dinners & Weddings", description: "A unique dining experience for your most important guests." }
  ];

  return (
    <section className="service-section">
      <Container>
        <h2 className="service-title text-center">Discover Our Services</h2>
        <Row className="justify-content-center">
          {services.map((service, index) => (
            <Col key={index} xs={12} md={4} className="d-flex justify-content-center mb-4">
              <ServiceCard {...service} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceSection;
