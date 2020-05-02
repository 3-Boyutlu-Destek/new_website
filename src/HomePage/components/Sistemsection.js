import React from 'react';

function Sistemsection(props) {
  return (
    <div className={`Sistem-content-section ${props.addClass}`}>
      <div className={`Sistem-content-section-left ${props.addClass}`}>
        <img
          src={props.image}
          alt=""
          className={`Sistem-content-section-left-img ${props.addClass}`}
        />
      </div>
      <div className={`Sistem-content-section-right ${props.addClass}`}>
        <h5 className={`Sistem-content-section-right-title ${props.addClass}`}>
          {props.title}
        </h5>
        <p className={`Sistem-content-section-right-text ${props.addClass}`}>
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default Sistemsection;
