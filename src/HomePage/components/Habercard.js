import React from 'react';

function Habercard() {
  return (
    <div className="Habercard">
      <div className="Habercard-top">
        <img src="" alt="" className="Habercard-top-img" />
      </div>
      <div className="Habercard-bottom">
        <h3 className="Habercard-bottom-title">Haber Başlığı</h3>
        <p className="Habercard-bottom-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis
          mollis commodo. Ut fermentum orci purus, sit amet ultrices nisl
          imperdiet sed.
        </p>
        <button className="Habercard-bottom-button">Devamını Oku</button>
      </div>
    </div>
  );
}
export default Habercard;
