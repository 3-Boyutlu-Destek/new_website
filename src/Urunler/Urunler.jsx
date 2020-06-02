import React from 'react';
import './style.scss';
import UrunCard from './components/UrunCard';
import urunler from './Data/Urunler';


class Urunler extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
           <div className="Urunler">
               {
                   urunler && urunler.map(item=>(
                    <UrunCard  
                    key={item.id} 
                    img= { item.img }
                    link={ item.link }
                    title={ item.title }
                    text={ item.text }
                    id={ item.id }
                  />
                ))
               }
             
           </div>
        );
    }

}

export {Urunler};