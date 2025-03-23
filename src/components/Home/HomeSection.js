import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./HomeSection.css";
import LuxuryCatering from "../../images/catering.webp";
import HomeImage from "../../images/catering2.webp";

const HomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="home-section">
      <Container>

        {/* First Content Block */}
        <Row className="align-items-center mb-5 sample2-text">
          <Col lg={6} className={`text-content fade-in ${isVisible ? "visible" : ""}`}>
            <h1>EXCLUSIVE & LUXURIOUS CATERING</h1>
            <p>
              PL8FULL sets the standard in luxury catering with personalized dining experiences led by the exceptional Ms. Faye. Serving Hollywood's elite, top global brands, and private clients, we specialize in exquisite cuisine that embodies taste, exclusivity, and culinary excellence.
            </p>
          </Col>
          <Col lg={5} className={`image-content fade-in ${isVisible ? "visible" : ""}`}>
            <img src={LuxuryCatering} alt="Luxury Catering" className="img-fluid" />
          </Col>
        </Row>

        {/* Second Content Block */}
        <Row className="align-items-center sample2-text">
          <Col lg={5} className={`image-content fade-in ${isVisible ? "visible" : ""} order-lg-1 order-2`}>
            <img src={HomeImage} alt="Culinary Integrity" className="img-fluid" />
          </Col>
          <Col lg={7} className={`text-content fade-in ${isVisible ? "visible" : ""} order-lg-2 order-1`}>
            <h1 className="text-center">CULINARY INTEGRITY</h1>
            <p className="px-5">
              PL8FULL is committed to upholding the highest culinary standards while honoring our values. We ensure no alcoholic beverages and pork are served or used in our cooking. Each dish features 100% Zabiha Halal-certified meals, guaranteeing authenticity, quality, and integrity.
            </p>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default HomeSection;
