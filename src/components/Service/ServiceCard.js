import React from "react";
import "./ServiceCard.css";


const ServiceCard = ({ title, description }) => {
  return (
    <div className="service-card">
      <div className="service-card-inner">
        {/* Front Side */}
        <div className="service-card-front d-flex flex-column align-items-center justify-content-center">
          <h3 className="service-title">{title}</h3>
        </div>

        {/* Back Side */}
        <div className="service-card-back d-flex flex-column align-items-center justify-content-center">
          <h3 className="service-title">{title}</h3>
          <p className="service-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

