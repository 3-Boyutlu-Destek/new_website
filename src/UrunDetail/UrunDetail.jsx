import React from 'react';
import './style.scss';
import urunler from '../Urunler/Data/Urunler';
import { Link } from 'react-router-dom';

class UrunDetail extends React.Component{
    constructor(props){
        super(props);
    }
   componentDidMount(){
        const id = this.props.match.params.id;
        console.log("id",id)
        const urun = urunler.filter(x=>x.id == 2);
        console.log(urunler)
        this.setState({
           urun
        })
    }
    render(){
        const urun = this.state;
        console.log(urun)
        return (
         <div className="UrunDetail"> 
            <div className="UrunDetail-top">
                  <div className="UrunDetail-top-left">
                    <img className="UrunDetail-top-left-img" src={urun && urun[0] && urun[0].img} />
                  </div>
                 <div className="UrunDetail-top-rigth">
                <h1 className="UrunDetail-top-rigth-title">
                    Urun Adı
                </h1>
                <span className="UrunDetail-top-rigth-detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis mollis commodo.
                 Ut fermentum orci purus, sit amet ultrices nisl imperdiet sed.
                </span>
                <div className="UrunDetail-top-rigth-buttons">
                    <button className="UrunDetail-top-rigth-buttons-firstButton">
                      <Link to="/talep-form" className="UrunDetail-top-rigth-buttons-firstButton-text">
                         Talep Et
                      </Link>
                    </button>
                    <button className="UrunDetail-top-rigth-buttons-secondButton">
                    <Link to="/" className="UrunDetail-top-rigth-buttons-secondButton-text">
                        Tasarım Dosyasını İndir
                      </Link>
                    </button>
                </div>
            </div>
        
         </div>
        {/* <div className="UrunDetail-bottom">
                 <div className="UrunDetail-bottom-videoDetail-content">
                    <ReactPlayer url="https://www.youtube.com/watch?v=2p6HnvkVQ5A" />
                    <span className="UrunDetail-bottom-videoDetail-detail">dsfsdfdsf</span>
                </div>
            </div>*/}
         </div>
        );
    }
}

export { UrunDetail };