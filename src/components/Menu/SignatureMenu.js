import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SignatureMenu.css";
import cheese from "../../images/cheese.webp";
import salmon from "../../images/salmon.jpg";
import cake from "../../images/fondant.jpg";

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
              <li><strong>Truffle-Infused Bruschetta</strong> – Served with aged parmesan.</li>
              <li><strong>Caviar-Topped Blinis</strong> – Rich, delicate flavors.</li>
              <li><strong>Gourmet Cheese Platters</strong> – A selection of fine cheeses.</li>
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
              <li><strong>Slow-Roasted Wagyu Beef</strong> – Served with a side of truffle mashed potatoes.</li>
              <li><strong>Herb-Crusted Salmon</strong> – Drizzled with lemon butter sauce.</li>
              <li><strong>Handmade Pasta</strong> – Freshly made with a creamy sauce.</li>
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
              <li><strong>Chocolate Fondant</strong> – Warm, gooey chocolate center.</li>
              <li><strong>Berry Pavlova</strong> – Light and airy meringue with fresh berries.</li>
              <li><strong>Crème Brûlée</strong> – Silky smooth with caramelized sugar.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MenuSection;
