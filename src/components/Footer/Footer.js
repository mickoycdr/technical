import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa";
import "./Footer.css"; // Import custom styles

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="text-center text-md-start">
          {/* Contact Details */}
          <Col md={4} className="mb-3 text-center">
            <h5>Contact Us</h5>
            <p>Email: concierge@pl8full.com</p>
            <p>Phone: 310 308-6171</p>
          </Col>

          {/* Social Media Links */}
          <Col md={4} className="mb-3 text-center">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </Col>

          {/* Location */}
          <Col md={4} className="mb-3 text-center">
            <h5>Location</h5>
            <p>LOS ANGELES, CA</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
