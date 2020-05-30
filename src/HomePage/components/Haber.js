import React from 'react';
import '../../scss/components/Haber.scss';

function Haber(props){
  return (
    <div className="Haber" onClick={()=>props.onClick()}>
        <img className="Haber-img" src={props.imgUrl} />
        <div style={{marginLeft:'10px'}}> 
            <span className="Haber-detail">{props.detail}</span>
        </div>
    </div>
  );
}

export default Haber;