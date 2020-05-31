import React from 'react';
import ReactPlayer from 'react-player';
import Destekolcard from './components/Destekolcard';
import Sistemsection from './components/Sistemsection';
import Counteritem from './components/Counteritem';
import Habercard from './components/Habercard';
import Footer from './components/Footer';
import Title from './components/Title';
import { Link } from 'react-router-dom';
import BasindaBiz from './components/BasindaBiz';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <section className="Cover">
          <div className="Cover-content">
            <h1 className="Cover-content-title">
              Covid-19 ile
              <br />
              Mücadeleye Tam Destek
            </h1>
            <p className="Cover-content-text">
              3 Boyutlu yazıcıda oluşturulmuş parçalar, ihtiyaç anında orjinal
              parçaların yerini daha kısa sürede alır
            </p>
           {/*
            <Link to="/baski-destek-form" target="_blank">
              <button className="Cover-content-button">Harekete Geç</button>
            </Link>
            */}
             <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKdrVs6fNSwsHGEkXcYFv9i03eRQKwwGm-g9y0c6N4LTPmvQ/viewform" 
                target="_blank">
              <button className="Cover-content-button">Harekete Geç</button>
            </a>
          </div>
          <img className="Cover-img" src="group.svg" />
        </section>
        <section className="Counter">
          <div className="container">
            <Title
              addClass="yellow"
              text="Corona Virüse Karşı 3 Milyondan Fazla Destek Ağının Bir Parçası Ol!"
            />
            <div className="Counter-row">
              <Counteritem
                image="counter-1.png"
                count="100.000 +"
                text="Siperlik"
              />
              <Counteritem
                image="counter-2.png"
                count="3.000 +"
                text="Kişi / Kurum"
              />
              <Counteritem
                image="counter-3.png"
                count="4.522 +"
                text="3Boyutlu Yazıcı"
              />
            </div>
          </div>
        </section>
        <section className="YenilikciDestek">
          <div className="YenilikciDestek-left">
            <div className="container">
              <Title
                addClass="blank"
                text="Covid 19 Mücadelesine Yenilikçi Destek"
              />
              <p className="YenilikciDestek-left-text">
                Covid-19 ile mücadelede sahip olduğumuz 3 boyutlu yazıcı
                potansiyeli ile medikal parçalara, araç ve gereçlere ihtiyaç
                duyan hastaneleri desteklemek ve kişisel korunma ihtiyacına 3
                boyutlu yazıcı teknolojileri ile cevap vermek istiyoruz.{' '}
                <span>
                  3 boyutlu yazıcıda üretilmiş parçalar, ihtiyaç anında orijinal
                  parçaların yerini daha kısa sürede alabilir!
                </span>
              </p>
            </div>
          </div>
          <div className="YenilikciDestek-right">
            <img
              src="factory.png"
              alt=""
              className="YenilikciDestek-right-img"
            />
          </div>
        </section>
        <section className="Destekol">
          <div className="container">
            <Title addClass="red" text="Nasıl Destek Olabilirsiniz ?" />
            <div className="Destekol-cards">
              <Destekolcard
                image="destek-baski.png"
                title="Baskı Desteği"
                text="Olası ihtiyaç anında en yakın sağlık kuruluşuna yakın 3
                  boyutlu yazıcıları belirlemek ve kitlesel üretim ile ihtiyacı
                  en kısa sürede çözüme kavuşturmaya katkı sağlamak istersen 3
                  Boyutlu Destek Ağı'na kaydolabilirsin."
                link="https://docs.google.com/forms/d/e/1FAIpQLSfKdrVs6fNSwsHGEkXcYFv9i03eRQKwwGm-g9y0c6N4LTPmvQ/viewform"
              />
              <Destekolcard
                addClass="hover"
                image="destek-hammadde.png"
                title="Hammadde Desteği"
                text="Lastik, PETG şeffaf koruyucu plaka ve filament desteği
                  sağlamak istersen, tedarik ağına dahil olabilirsin."
                link="https://docs.google.com/forms/d/e/1FAIpQLScR4-5CE7VXJwTO84wvjLHxn11vtnZrip3bMr-ncHKKo2GBOw/viewform"
              />
              <div className={`Destekol-cards-card`}>
                <img
                  src="destek-sosyal-medya.png"
                  alt=""
                  className="Destekol-cards-card-img"
                />
                <div className="Destekol-cards-card-content">
                  <div className={`Destekol-cards-card-content-title`}>
                    Sosyal Medya Desteği
                  </div>
                  <p className={`Destekol-cards-card-content-text`}>
                    Destek olmak için her zaman üretmek gerekmez! Sosyal medya
                    uygulamaları üzerinden paylaşım yapabilir bize katkı
                    sağlayabilirsin. Hızlı paylaşım için sosyal medya araçlarını
                    kullanabilirsin.
                  </p>
                  <div className="Footer-top-right-social">
                    <a
                      href="https://twitter.com/intent/tweet?text=Sa%C4%9Fl%C4%B1k%20%C3%A7al%C4%B1%C5%9Fanlar%C4%B1%20i%C3%A7in%20%C3%BCretim%20yapan%203%20Boyutlu%20Destek%20ekibi%20%403boyutludestek%20https%3A%2F%2F3boyutludestek.org"
                      target="_blank"
                      className="Footer-top-right-social-link"
                    >
                      <img
                        src="twitter.svg"
                        className="Footer-top-right-social-link-img"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2F3boyutludestek.org"
                      target="_blank"
                      className="Footer-top-right-social-link"
                    >
                      <img
                        src="facebook.svg"
                        className="Footer-top-right-social-link-img"
                      />
                    </a>
                    <a
                      href="http://instagram.com/3BoyutluDestek/"
                      target="_blank"
                      className="Footer-top-right-social-link"
                    >
                      <img
                        src="instagram.svg"
                        className="Footer-top-right-social-link-img"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UC_s_80cd1PsvgmT-p9pNdJw?sub_confirmation=1"
                      target="_blank"
                      className="Footer-top-right-social-link"
                    >
                      <img
                        src="youtube.svg"
                        className="Footer-top-right-social-link-img"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2F3boyutludestek.org"
                      target="_blank"
                      className="Footer-top-right-social-link"
                    >
                      <img
                        src="linkedin.svg"
                        className="Footer-top-right-social-link-img"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="Sistem">
          <div className="container">
            <Title addClass="blue" text="Sistem Nasıl Çalışır ?" />
            <div className="Sistem-content">
              <Sistemsection
                addClass="first"
                image="sistem-1.png"
                title="Gönüllü Üretici Olarak Kaydol"
                text="Birkaç basit adımda 3 Boyutlu destek ağı kapsamında üretime
                  başlayabilirsiniz, mobil uygulamamızı buradan indirebilir ve
                  gönüllü üreticilerin arasına katılmak için ilk adımı
                  atabilirsiniz."
              />
              <Sistemsection
                addClass="second"
                image="sistem-2.png"
                title="Üretime Başla"
                text="Artık üretim yapmaya başlayabilirsiniz! Ürettiğiniz
                  siperliklerin sağlık çalışanlarımız için kritik bir öneme
                  sahip olduğunu lütfen unutmayın ve üretim ağımız ile
                  koordineli çalışın."
              />
              <Sistemsection
                addClass="third"
                image="sistem-3.png"
                title="Ürettiğin Parçalar Sağlık Çalışanlarına Siper Olsun !"
                text="Dünyayı etkisi altına alan covid-19 virüsü ile ön saflarda
                  savaşan sağlık çalışanlarımız için ürettiğin yüz siperlikleri,
                  sağlık çalışanlarımızı virüse karşı daha da güçlü olmasını
                  sağlıyor. Teşekkürler"
              />
              <div className="Sistem-content-background">
                <img
                  src="sistem-bg.png"
                  alt=""
                  className="Sistem-content-background-img"
                />
              </div>
              <Sistemsection
                addClass="fourth"
                image="sistem-4.png"
                title="Linkten Tasarım Dosyasını İndir"
                text="Sağlık çalışanlarından aldığımız geri dönüşler ile ürettiğimiz
                  siperliklerin model dosyasını web sitemizdeki veya mobil
                  uygulamamızdaki linklerden Github hesabımıza ulaşarak
                  indirebilirsiniz."
              />
              <Sistemsection
                addClass="fifth"
                image="sistem-5.png"
                title="Ürettiğin Parçaları İl Temsilcilerine Ulaştır"
                text="Ülke genelindeki sağlık çalışanlarımızın oluşturduğu siperlik
                  talepleri il temsilcilerine ulaşmaktadır, ürettiğiniz
                  siperlikleri il temsilcinize ulaştırabilir veya temsilci ile
                  koordineli çalışarak direkt sağlık çalışanlarına
                  iletebilirsiniz."
              />
            </div>
          </div>
        </section>
        <section className="Video">
          <div className="container">
            <div className="Video-content">
              <ReactPlayer url="https://www.youtube.com/watch?v=2p6HnvkVQ5A" />
              <p className="Video-content-text">
                Kolektifimiz, birbirini tanımayan binlerce insanın gönüllü
                olarak yönetim,organizasyon, üretim, dağıtım, tanıtım ve kaynak
                oluşturma alanlarında yaptığı katkılarla ilerlemeye devam
                ediyor!
              </p>
            </div>
          </div>
        </section>
        <section className="BizdenHaberler">
          <div className="container">
            <Title addClass="red" text="Bizden Haberler" />
            <div className="BizdenHaberler-content">
              <Habercard
                img="haber-1.jpg"
                link="https://www.haberturk.com/koronavirus-ile-3-boyutlu-mucadele-haberler-2639680-teknoloji"
                title="Koronavirüs ile mücadeleye 3 boyutlu yazıcılarla destek oluyorlar - HaberTürk"
                text="Koronavirüs ile mücadele kapsamında bir grup mühendis sağlık çalışanlarının yüz siperliği ihtiyacına destek olmak..."
              />
              <Habercard
                img="haber-2.jpg"
                link="https://www.hurriyet.com.tr/gundem/3d-yazici-ile-siperli-maske-nasil-uretiliyor-41482068"
                title="3D yazıcı ile siperli maske nasıl üretiliyor? - Hürriyet"
                text='Sosyal medyada bir araya gelerek, "3 Boyut Destek" adıyla kolektif üretim hareketi başlatan 3 boyutlu yazıcı...'
              />
              <Habercard
                img="logo.svg"
                link="https://medium.com/@3boyutludestek/sa%C4%9Fl%C4%B1k-%C3%A7al%C4%B1%C5%9Fanlar%C4%B1m%C4%B1z-i%CC%87%C3%A7in-y%C3%BCz-kalkan%C4%B1-%C3%BCretimi-yapabilirsiniz-e0296a678cdd"
                title="3 Boyutlu Destek"
                text="Sağlık Çalışanlarımız İçin Yüz Kalkanı Üretiminde Bize Destek Olabilirsiniz"
              />
            </div>
            <div className="BizdenHaberler-basindabiz">
              <Title addClass="red BizdenHaberler-basindabiz-title" text="Basında Biz" />
               <BasindaBiz />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export { HomePage };
