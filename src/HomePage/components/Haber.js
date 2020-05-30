import React from 'react';
import '../../scss/components/Haber.scss';

function Haber(props){
  return (
    <div className="Haber" key={props.key} onClick={()=>props.onClick()}>
        <img className="Haber-img" src={props.imgUrl} />
        <div>
            <h1 className="Haber-title">{props.title}</h1>
            <span className="Haber-detail">{props.detail}</span>
        </div>
    </div>
  );
}

export default Haber;