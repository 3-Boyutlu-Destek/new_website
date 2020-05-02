import React from 'react';

function Habercard(props) {
  return (
    <div className="Habercard">
      <div className="Habercard-top">
        <div
          style={{ backgroundImage: `url(${props.img})` }}
          className="Habercard-top-img"
        ></div>
      </div>
      <div className="Habercard-bottom">
        <h3 className="Habercard-bottom-title">{props.title}</h3>
        <p className="Habercard-bottom-text">{props.text}</p>
        <button className="Habercard-bottom-button">
          <a target="_blank" href={`${props.link}`}>
            Devamını Oku
          </a>
        </button>
      </div>
    </div>
  );
}
export default Habercard;
