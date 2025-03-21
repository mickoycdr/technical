import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import pl8full from "../../images/pl8full-white.png"

const NavbarSection = () => {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#">
          <img src={pl8full} to="/" alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/sample-page")}>About</Nav.Link>
            <Nav.Link onClick={() => navigate("/sample-page")} >Menu</Nav.Link>
            <Nav.Link onClick={() => navigate("/sample-page")} >Our Services</Nav.Link>
            <Nav.Link onClick={() => navigate("/sample-page")} >Gallery</Nav.Link>
            <Nav.Link onClick={() => navigate("/sample-page")} >Contact</Nav.Link>
          </Nav>
          <Button variant="danger" onClick={() => navigate("/plan-your-event")}>
        Plan Your Event
      </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarSection;