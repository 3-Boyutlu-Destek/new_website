import React from 'react';

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
        <button
          className={`Destekol-cards-card-content-button ${props.addClass}`}
        >
          Destek Ol
        </button>
      </div>
    </div>
  );
}

export default Destekolcard;
