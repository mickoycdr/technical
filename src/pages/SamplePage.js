import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./SamplePage.css"; // Custom styles
import { Link } from "react-router-dom";

const SamplePage = () => {
  return (
    <section className="sample-page">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h1 className="sample-title">This is a Sample Page</h1>
            <p className="sample-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reprehenderit rem obcaecati molestiae aliquam minima consequatur. Cum tempora ex, esse recusandae dolorum quam, impedit ab ut, labore consectetur minus veritatis?
            </p>
            <Button as={Link} to="/"  className="btn-custom">Home</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SamplePage;
