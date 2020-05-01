import React from 'react';
import { Redirect } from 'react-router-dom';
import ReactPlayer from "react-player"
import { findDOMNode } from 'react-dom'
//import screenfull from 'screenfull'

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
        <section className="Counter">
          <h3 className="Counter-title"> Corona Virüse Karşı 3 Milyondan Fazla Destek Ağının Bir Parçası Ol! </h3>
          <div className="row Counter-row">
             <div className="col-md-4">
             <img src="public/counter-ust-1.png" style={{width:"10rem"}}/>
               <div className="Counter-row-first-counter">
                 <span className="Counter-row-first-counter-first-span">80.000 +</span>
                  <span className="Counter-row-first-counter-second-span">Siperlik</span>
                  
               </div>
               <img className="Counter-row-first-counter-img" src="public/counter-alt-1.png"/>
             </div>
             <div className="col-md-4">
               <img src="public/counter-ust-2.png" style={{width:"10rem", marginTop:"20px"}}/>
               <div className="Counter-row-second-counter">
                  <span className="Counter-row-second-counter-first-span">3.000 +</span>
                  <span className="Counter-row-second-counter-second-span">Kişi / Kurum</span>
               </div>
               <img className="Counter-row-second-counter-img" src="public/counter-alt-2.png"/>
             </div>
             <div className="col-md-4 ">
             <img src="public/counter-ust-3.png" style={{width:"10rem", marginTop:"5px"}}/>
               <div className="Counter-row-third-counter">
                   <span className="Counter-row-third-counter-first-span">4.522 +</span>
                  <span className="Counter-row-third-counter-second-span">3Boyutlu Yazıcı</span>
               </div>
               <img className="Counter-row-third-counter-img" src="public/counter-alt-3.png"/>
            </div>
          </div>
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
                       <div style={{backgroundImage: `url(public/factory.png)`,width:'100%',height:'600px',backgroundSize: 'cover', borderRadius:'25px'}}>
                           
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
                <div className="Destekol-cards-card-content-title">
                  Hammadde Desteği
                </div>
                <p className="Destekol-cards-card-content-text">
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
       
        
        <section className="Sistem">
          <h3 className="Sistem-title">Sistem Nasıl Çalışır ?</h3>
          <div className="Sistem-content">
            <div className="Sistem-content-firstSection">
              <div className="Sistem-content-firstSection-left">
                <img
                  src="public/sistem-1.png"
                  alt=""
                  className="Sistem-content-firstSection-left-img"
                />
              </div>
              <div className="Sistem-content-firstSection-right">
                <h5 className="Sistem-content-firstSection-right-title">
                  Gönüllü Üretici Olarak Kaydol
                </h5>
                <p className="Sistem-content-firstSection-right-text">
                  Birkaç basit adımda 3 Boyutlu destek ağı kapsamında üretime
                  başlayabilirsiniz, mobil uygulamamızı buradan indirebilir ve
                  gönüllü üreticilerin arasına katılmak için ilk adımı
                  atabilirsiniz.
                </p>
              </div>
            </div>
            <div className="Sistem-content-secondSection">
              <div className="Sistem-content-secondSection-left">
                <img
                  src="public/sistem-2.png"
                  alt=""
                  className="Sistem-content-secondSection-left-img"
                />
              </div>
              <div className="Sistem-content-secondSection-right">
                <h5 className="Sistem-content-secondSection-right-title">
                  Üretime Başla
                </h5>
                <p className="Sistem-content-secondSection-right-text">
                  Artık üretim yapmaya başlayabilirsiniz! Ürettiğiniz
                  siperliklerin sağlık çalışanlarımız için kritik bir öneme
                  sahip olduğunu lütfen unutmayın ve üretim ağımız ile
                  koordineli çalışın.
                </p>
              </div>
            </div>
            <div className="Sistem-content-thirdSection">
              <div className="Sistem-content-thirdSection-left">
                <img
                  src="public/sistem-3.png"
                  alt=""
                  className="Sistem-content-thirdSection-left-img"
                />
              </div>
              <div className="Sistem-content-thirdSection-right">
                <h5 className="Sistem-content-thirdSection-right-title">
                  Ürettiğin Parçalar Sağlık Çalışanlarına Siper Olsun !
                </h5>
                <p className="Sistem-content-thirdSection-right-text">
                  Dünyayı etkisi altına alan covid-19 virüsü ile ön saflarda
                  savaşan sağlık çalışanlarımız için ürettiğin yüz siperlikleri,
                  sağlık çalışanlarımızı virüse karşı daha da güçlü olmasını
                  sağlıyor. Teşekkürler
                </p>
              </div>
            </div>
            <div className="Sistem-content-background">
              <img
                src="public/sistem-bg.png"
                alt=""
                className="Sistem-content-background-img"
              />
            </div>
            <div className="Sistem-content-fourthSection">
              <div className="Sistem-content-fourthSection-left">
                <img
                  src="public/sistem-4.png"
                  alt=""
                  className="Sistem-content-fourthSection-left-img"
                />
              </div>
              <div className="Sistem-content-fourthSection-right">
                <h5 className="Sistem-content-fourthSection-right-title">
                  Linkten Tasarım Dosyasını İndir
                </h5>
                <p className="Sistem-content-fourthSection-right-text">
                  Sağlık çalışanlarından aldığımız geri dönüşler ile ürettiğimiz
                  siperliklerin model dosyasını web sitemizdeki veya mobil
                  uygulamamızdaki linklerden Github hesabımıza ulaşarak
                  indirebilirsiniz.
                </p>
              </div>
            </div>
            <div className="Sistem-content-fifthSection">
              <div className="Sistem-content-fifthSection-left">
                <img
                  src="public/sistem-5.png"
                  alt=""
                  className="Sistem-content-fifthSection-left-img"
                />
              </div>
              <div className="Sistem-content-fifthSection-right">
                <h5 className="Sistem-content-fifthSection-right-title">
                  Ürettiğin Parçaları İl Temsilcilerine Ulaştır
                </h5>
                <p className="Sistem-content-fifthSection-right-text">
                  Ülke genelindeki sağlık çalışanlarımızın oluşturduğu siperlik
                  talepleri il temsilcilerine ulaşmaktadır, ürettiğiniz
                  siperlikleri il temsilcinize ulaştırabilir veya temsilci ile
                  koordineli çalışarak direkt sağlık çalışanlarına
                  iletebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="Video">
          <div className="row"  >
            <div className="Video-cards-card hover">
              <div className="Video-cards-card-content">
                  <ReactPlayer 
                        url='https://www.youtube.com/watch?v=2p6HnvkVQ5A'
                    />
                <p className="Video-cards-card-content-text" >
                  Kolektifimiz, birbirini tanımayan binlerce 
                  insanın gönüllü olarak yönetim,organizasyon, üretim, 
                  dağıtım, tanıtım ve kaynak oluşturma alanlarında yaptığı katkılarla ilerlemeye devam ediyor!

                </p>
            
            </div>
            </div>
          </div>
        </section>
        <section className="BizdenHaberler">
          <h3 className="BizdenHaberler-title">Bizden Haberler</h3>
          <div className="row">
              <div className="col-md-4 BizdenHaberler-haber">
                  <img className="BizdenHaberler-haber-img" src="public/factory.png" />
                  <h1 className="BizdenHaberler-haber-baslik">Haber Başlığı 1</h1>
                  <span className="BizdenHaberler-haber-text">Ülke genelindeki sağlık çalışanlarımızın oluşturduğu siperlik talepleri 
                    il temsilcilerine ulaşmaktadır, ürettiğiniz siperlikleri il temsilcinize 
                    ulaştırabilir veya temsilci ile koordineli çalışarak direkt sağlık
                     çalışanlarına iletebilirsiniz.</span>
                     <a className="BizdenHaberler-haber-devami" href="" target="_blank">
                         Devamını Oku
                     </a>
              </div>
              <div className="col-md-4 BizdenHaberler-haber">
                  <img className="BizdenHaberler-haber-img" src="public/counter-ust-1.png" />
                  <h1 className="BizdenHaberler-haber-baslik">Haber Başlığı 2</h1>
                  <span className="BizdenHaberler-haber-text">Ülke genelindeki sağlık çalışanlarımızın oluşturduğu siperlik talepleri 
                    il temsilcilerine ulaşmaktadır, ürettiğiniz siperlikleri il temsilcinize 
                    ulaştırabilir veya temsilci ile koordineli çalışarak direkt sağlık
                     çalışanlarına iletebilirsiniz.</span>
                     <a className="BizdenHaberler-haber-devami" href="" target="_blank">
                        Devamını Oku
                     </a>
              </div>
              <div className="col-md-4 BizdenHaberler-haber">
                  <img className="BizdenHaberler-haber-img" src="public/counter-ust-3.png" />
                  <h1 className="BizdenHaberler-haber-baslik">Haber Başlığı 3</h1>
                  <span className="BizdenHaberler-haber-text">Ülke genelindeki sağlık çalışanlarımızın oluşturduğu siperlik talepleri 
                    il temsilcilerine ulaşmaktadır, ürettiğiniz siperlikleri il temsilcinize 
                    ulaştırabilir veya temsilci ile koordineli çalışarak direkt sağlık
                     çalışanlarına iletebilirsiniz.</span>
                 <a className="BizdenHaberler-haber-devami" href="" target="_blank">
                     Devamını Oku
                 </a>
              </div>
          </div>
        </section>
     
      </div>
    );
  }
}

export { HomePage };
