import React from "react";
import "./ServiceCard.scss";
// import ukrainePhoto from "../../assets/images/services/ukraine.jpg";
import ukrainePhoto from "../../assets/images/services/international.jpg";
import { Link } from "react-router-dom";
const ServiceCard = ({ item }) => {

  return (
    <div
      data-aos="zoom-in"
      className="service__card"
      style={{ backgroundImage: `url(${item.img})` }}
    >
      <div className="card__inner">
        <div className="top">
          <div className="card__title">{item.title}</div>
          <div className="card__info">{item.text}</div>
        </div>
        <Link to={item.link} className="card__button">Дізнатись більше</Link>
      </div>
    </div>
  );
};

export default ServiceCard;
