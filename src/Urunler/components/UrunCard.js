import React from 'react';
import '../../scss/components/UrunCard';
import { Link } from 'react-router-dom';

function UrunCard(props){
    return(
    <div className="UrunCard">
      <div className="UrunCard-top">
        <div
          style={{ backgroundImage: `url(${props.img})` }}
          className="UrunCard-top-img"
        ></div>
      </div>
      <div className="UrunCard-bottom">
        <h3 className="UrunCard-bottom-title">{props.title}</h3>
        <p className="UrunCard-bottom-text">{props.text}</p>
        <button className="UrunCard-bottom-button">
          <Link to={`/urun-detail/${props.id}`}>
            Ürünü İncele
          </Link>
        </button>
      </div>
 </div>
    )
}

export default UrunCard;