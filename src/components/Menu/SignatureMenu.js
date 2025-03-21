import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SignatureMenu.css";
import cheese from "../../images/cheese.webp";
import salmon from "../../images/salmon.jpg";
import cake from "../../images/cake.jpg";

const MenuSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="menu-section" ref={sectionRef}>
      <Container>
        <h2 className="quote-text fade-up delay-1">Our Signature Menu</h2>
        <p className="fade-up delay-1">
          From delicious hors d'oeuvres to elegant full-course meals, our menus blend global flavors with fresh, local ingredients.
        </p>

        {/* Appetizers */}
        <Row className="align-items-center pt-3 fade-up delay-2">
          <Col lg={6} className="menu-image">
            <img src={cheese} alt="Appetizers" className="img-fluid rounded" />
          </Col>
          <Col lg={6} className="fade-up delay-2">
            <h2 className="menu-title">Appetizers</h2>
            <ul className="menu-list">
              <li><strong>Truffle-Infused Bruschetta</strong> – <em>Served with aged parmesan.</em></li>
              <li><strong>Caviar-Topped Blinis</strong> – <em>Rich, delicate flavors.</em></li>
              <li><strong>Gourmet Cheese Platters</strong> –<em> A selection of fine cheeses.</em></li>
            </ul>
          </Col>
        </Row>

        {/* Main Courses */}
        <Row className="align-items-center pt-5 fade-up delay-3">
          <Col lg={6} className="menu-image order-lg-1 order-2">
            <img src={salmon} alt="Main Courses" className="img-fluid rounded" />
          </Col>
          <Col lg={6} className="fade-up delay-3">
            <h2 className="menu-title">Main Courses</h2>
            <ul className="menu-list">
              <li><strong>Slow-Roasted Wagyu Beef</strong> –<em> Served with a side of truffle mashed potatoes.</em></li>
              <li><strong>Herb-Crusted Salmon</strong> –<em> Drizzled with lemon butter sauce.</em></li>
              <li><strong>Handmade Pasta</strong> – <em>Freshly made with a creamy sauce.</em></li>
            </ul>
          </Col>
        </Row>

        {/* Desserts */}
        <Row className="align-items-center pt-5 fade-up delay-4">
          <Col lg={6} className="menu-image">
            <img src={cake} alt="Desserts" className="img-fluid rounded" />
          </Col>
          <Col lg={6} className="fade-up delay-4">
            <h2 className="menu-title">Desserts</h2>
            <ul className="menu-list">
              <li><strong>Chocolate Fondant</strong> – <em>Warm, gooey chocolate center.</em></li>
              <li><strong>Berry Pavlova</strong> – <em>Light and airy meringue with fresh berries.</em></li>
              <li><strong>Crème Brûlée</strong> – <em>Silky smooth with caramelized sugar.</em></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MenuSection;
