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
      (entries) => {
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
        <Row className="align-items-center fade-up delay-1">
          {/* LEFT COLUMN: IMAGE */}
          <Col lg={6} className="menu-image pt-3 my-3">
            <img
              src={cheese}
              alt="Special"
              className="img-fluid rounded"
            />
          </Col>

          {/* RIGHT COLUMN: MENU ITEMS */}
          <Col lg={6} className="fade-up delay-2">
            {/* Title */}
            <h5 className="quote-sample text-start">OUR SIGNATURE MENU</h5>
            <h2 className="quote-text text-start">APPETIZERS</h2>

            {/* Menu Items */}
            <ul className="menu-list">
              {/* 1 */}
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>TRUFFLE-INFUSED BRUSCHETTA</strong>
                
              </li>
              <dl>
                <em>Served with aged parmesan.</em>
              </dl>

              {/* 2 */}
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>CAVIAR-TOPPED BLINIS</strong>
                
              </li>
              <dl>
                <em>Rich, delicate flavors.</em>
              </dl>

              {/* 3 */}
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>GOURMET CHEESE PLATTERS</strong>
                
              </li>
              <dl>
                <em>A selection of fine cheeses.</em>
              </dl>
            </ul>
          </Col>
        </Row>

        {/* Main Course */}
        <Row className="align-items-center fade-up delay-1">
          {/* LEFT COLUMN: IMAGE */}
          <Col lg={6} className="menu-image order-lg-1 order-2 pt-3 my-3">
            <img
              src={salmon}
              alt="Special"
              className="img-fluid rounded wagyu-beef"
            />
          </Col>

          {/* RIGHT COLUMN: MENU ITEMS */}
          <Col lg={6} className="fade-up delay-2">
            {/* Title */}
            <h5 className="quote-sample text-start">OUR SIGNATURE MENU</h5>
            <h2 className="quote-text text-start">MAIN COURSES</h2>

            {/* Menu Items */}
            <ul className="menu-list">
              {/* 1 */}
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>SLOW-ROASTED WAGYU BEEF</strong>
                
              </li>
              <dl>
                <em>Served with a side of truffle mashed potatoes.</em>
              </dl>

              {/* 2 */}
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>HERB-CRUSTED SALMON</strong>
                
              </li>
              <dl>
                <em>Drizzled with lemon butter sauce.</em>
              </dl>

              {/* 3 */}
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>HANDMADE PASTA</strong>
                
              </li>
              <dl>
                <em>Freshly made with a creamy sauce.</em>
              </dl>
            </ul>
          </Col>
        </Row>

        {/* Desserts */}
        <Row className="align-items-center fade-up delay-1">
          {/* LEFT COLUMN: IMAGE */}
          <Col lg={6} className="menu-image pt-3 my-3">
            <img
              src={cake}
              alt="Special"
              className="img-fluid rounded"
            />
          </Col>

          {/* RIGHT COLUMN: MENU ITEMS */}
          <Col lg={6} className="fade-up delay-2">
            {/* Title */}
            <h5 className="quote-sample text-start">OUR SIGNATURE MENU</h5>
            <h2 className="quote-text text-start">DESSERTS</h2>

            {/* Menu Items */}
            <ul className="menu-list">
              {/* 1 */}
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>CHOCOLATE FONDANT</strong>
                
              </li>
              <dl>
                <em>Warm, gooey chocolate center.</em>
              </dl>

              {/* 2 */}
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>BERRY PAVLOVA</strong>
                
              </li>
              <dl>
                <em>Light and airy meringue with fresh berries.</em>
              </dl>

              {/* 3 */}
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>CREME BRULEE</strong>
                
              </li>
              <dl>
                <em>Silky smooth with caramelized sugar.</em>
              </dl>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MenuSection;
