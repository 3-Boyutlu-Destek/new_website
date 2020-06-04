import React from "react";
import { Link } from "react-router-dom";

function Destekolcard(props) {
  return (
    <div className={`Destekol-cards-card ${props.addClass}`}>
      <img src={props.image} alt="" className="Destekol-cards-card-img" />
      <div className="Destekol-cards-card-content">
        <div className={`Destekol-cards-card-content-title ${props.addClass}`}>
          {props.title}
        </div>
        <p className={`Destekol-cards-card-content-text ${props.addClass}`}>
          {props.text}
        </p>
        <a
          className={`Destekol-cards-card-content-button ${props.addClass}`}
          href={props.link}
          target="_blank"
        >
          Destek Ol
        </a>
        {/* <Link className={`Destekol-cards-card-content-button ${props.addClass}`} to={props.link} target="_blank">
           Destek Ol
  </Link>
     
  */}
      </div>
    </div>
  );
}

export default Destekolcard;
