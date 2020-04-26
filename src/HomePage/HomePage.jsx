import React from 'react';
import { Redirect } from 'react-router-dom';
const divHome = {
 // backgroundImage: `url(public/group.svg)`,
  width: '100%',
};

const uretimeBaslaButton = {
  borderRadius: '20px',
  backgroundColor: '#FF4933',
  borderStyle: 'none',
  textAlign: 'center',
  color: 'white',
  minWidth: '150px',
  fontSize: 'large'
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <section style={divHome}>
        <div className="col-md-6 offset-md-6" style={{zIndex:'10', position:'absolute', top:'140px'}}>
            <h1 style={{ fontWeight: '700' }}>
              Covid-19 ile mücadeleye tam destek
            </h1>
            <p className="Aciklama">
              3 Boyutlu yazıcıda oluşturulmuş parçalar, ihtiyaç anında orjinal
              parçaların yerini daha kısa sürede alır
            </p>
            <button style={uretimeBaslaButton}>Üretime Başla</button>
          </div>
          <img src="public/group.svg" style={{width:'inherit'}}/>
          
        </section>
        <section className="YenilikciDestek">
                <div className="row">
                    <div className="col-md-6 "> 
                        
                        <h3 style={{marginTop:"10px",fontSize:"2.8rem",marginLeft:"15px"}}>Covid 19 Mücadelesine Yenilikçi Destek  </h3> 
                        <br/>
                        <p className="Aciklama">Covid-19 ile mücadelede sahip olduğumuz 3 boyutlu yazıcı potansiyeli ile medikal parçalara, araç ve gereçlere ihtiyaç duyan hastaneleri desteklemek ve kişisel korunma ihtiyacına 3 boyutlu yazıcı teknolojileri ile cevap vermek istiyoruz.</p>
                        
                        <p className="Aciklama">3 boyutlu yazıcıda üretilmiş parçalar, ihtiyaç anında orijinal parçaların yerini daha kısa sürede alabilir!</p>
                    </div> 
                    <div className="col-md-6" >
                       <div style={{backgroundImage: `url(public/factory.png)`,width:'100%',height:'600px',backgroundSize: 'cover'}}>
                           
                       </div>
                    </div> 
                </div>
        </section>
        <section className="Destekol">
          <h3 className="Destekol-title">Nasıl Destek Olabilirsiniz ?</h3>
          <div className="Destekol-cards">
            <div className="Destekol-cards-card">
              <img
                src="public/destek-baski.png"
                alt=""
                className="Destekol-cards-card-img"
              />
              <div className="Destekol-cards-card-content">
                <div className="Destekol-cards-card-content-title">
                  Baskı Desteği
                </div>
                <p className="Destekol-cards-card-content-text">
                  Olası ihtiyaç anında en yakın sağlık kuruluşuna yakın 3
                  boyutlu yazıcıları belirlemek ve kitlesel üretim ile ihtiyacı
                  en kısa sürede çözüme kavuşturmaya katkı sağlamak istersen 3
                  Boyutlu Destek Ağı'na kaydolabilirsin.
                </p>
                <div className="Destekol-cards-card-content-button">
                  Destek Ol
                </div>
              </div>
            </div>
            <div className="Destekol-cards-card hover">
              <img
                src="public/destek-hammadde.png"
                alt=""
                className="Destekol-cards-card-img"
              />
              <div className="Destekol-cards-card-content">
                <div className="Destekol-cards-card-content-title hover">
                  Hammadde Desteği
                </div>
                <p className="Destekol-cards-card-content-text hover">
                  Lastik, PETG şeffaf koruyucu plaka ve filament desteği
                  sağlamak istersen, tedarik ağına dahil olabilirsin.
                </p>
                <div className="Destekol-cards-card-content-button hover">
                  Destek Ol
                </div>
              </div>
            </div>
            <div className="Destekol-cards-card">
              <img
                src="public/destek-sosyal-medya.png"
                alt=""
                className="Destekol-cards-card-img"
              />
              <div className="Destekol-cards-card-content">
                <div className="Destekol-cards-card-content-title">
                  Sosyal Medya Desteği
                </div>
                <p className="Destekol-cards-card-content-text">
                  Destek olmak için her zaman üretmek gerekmez! Sosyal medya
                  uygulamaları üzerinden paylaşım yapabilir bize katkı
                  sağlayabilirsin. Hızlı paylaşım için sosyal medya araçlarını
                  kullanabilirsin.
                </p>
                <div className="Destekol-cards-card-content-button">
                  Destek Ol
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export { HomePage };
