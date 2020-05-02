import React from 'react';

function Counteritem(props) {
  return (
    <div className="Counter-item">
      <img src={props.image} alt="" className="Counter-item-img" />
      <span className="Counter-item-count">{props.count}</span>
      <span className="Counter-item-text">{props.text}</span>
    </div>
  );
}

export default Counteritem;
