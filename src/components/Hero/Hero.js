import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Hero.css"; // Import custom styles
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <Carousel fade>
        <Carousel.Item>
          <div className="carousel-image" style={{ backgroundImage: "url('https://startupsavant.com/images/news/valet-catering.jpg')" }}>
            <div className="overlay"></div>
            <Container className="carousel-caption">
              <h1>EXPERIENCE LUXURIOUS DINING</h1>
              <p>Join us for an evening of great food and ambiance.</p>
              <a onClick={() => navigate("/sample-page")} href="#menu" className="btn btn-primary">View Menu</a>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image" style={{ backgroundImage: "url('https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2022-09/Foodlink-Luxury-Catering-%282%29.jpg')" }}>
            <div className="overlay"></div>
            <Container className="carousel-caption">
              <h1>EXPERIENCE LUXURIOUS DINING</h1>
              <p>Join us for an evening of great food and ambiance.</p>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT36CGjM2lqFo791EUBTHJkt_ioXOiWYudp6xS20ypQlxQZm6Rlm-Omd_DG&s=10&fbclid=IwZXh0bgNhZW0CMTAAAR3dbB2N8bo5EsNBgKn0Kw_z0daAHYtGeQ6cg97qJTaa7X9L3cn--zY5wWo_aem_hotTjcFIoYCbZud_2Bg2Uw')" }}>
            <div className="overlay"></div>
            <Container className="carousel-caption">
              <h1>EXPERIENCE LUXURIOUS DINING</h1>
              <p>Join us for an evening of great food and ambiance.</p>
              <a onClick={() => navigate("/sample-page")} href="#contact" className="btn btn-primary">Contact Us</a>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroSection;
