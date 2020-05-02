import React from 'react';
import ReactPlayer from 'react-player';
import Destekolcard from './components/Destekolcard';
import Sistemsection from './components/Sistemsection';
import Counteritem from './components/Counteritem';
import Habercard from './components/Habercard';
import Footer from './components/Footer';

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
              Covid-19 ile mücadeleye tam destek
            </h1>
            <p className="Cover-content-text">
              3 Boyutlu yazıcıda oluşturulmuş parçalar, ihtiyaç anında orjinal
              parçaların yerini daha kısa sürede alır
            </p>
            <button className="Cover-content-button">Üretime Başla</button>
          </div>
          <img className="Cover-img" src="public/group.svg" />
        </section>
        <section className="Counter">
          <h3 className="Counter-title">
            Corona Virüse Karşı <br /> 3 Milyondan Fazla Destek Ağının Bir
            Parçası Ol!
          </h3>
          <div className="Counter-row">
            <Counteritem
              image="public/counter-1.png"
              count="80.000 +"
              text="Siperlik"
            />
            <Counteritem
              image="public/counter-2.png"
              count="3.000 +"
              text="Kişi / Kurum"
            />
            <Counteritem
              image="public/counter-3.png"
              count="4.522 +"
              text="3Boyutlu Yazıcı"
            />
          </div>
        </section>
        <section className="YenilikciDestek">
          <div className="YenilikciDestek-left">
            <h3 className="YenilikciDestek-left-title">
              Covid 19 Mücadelesine Yenilikçi Destek
            </h3>
            <p className="YenilikciDestek-left-text">
              Covid-19 ile mücadelede sahip olduğumuz 3 boyutlu yazıcı
              potansiyeli ile medikal parçalara, araç ve gereçlere ihtiyaç duyan
              hastaneleri desteklemek ve kişisel korunma ihtiyacına 3 boyutlu
              yazıcı teknolojileri ile cevap vermek istiyoruz.{' '}
              <span>
                3 boyutlu yazıcıda üretilmiş parçalar, ihtiyaç anında orijinal
                parçaların yerini daha kısa sürede alabilir!
              </span>
            </p>
          </div>
          <div className="YenilikciDestek-right">
            <img
              src="public/factory.png"
              alt=""
              className="YenilikciDestek-right-img"
            />
          </div>
        </section>
        <section className="Destekol">
          <h3 className="Destekol-title">Nasıl Destek Olabilirsiniz ?</h3>
          <div className="Destekol-cards">
            <Destekolcard
              image="public/destek-baski.png"
              title="Baskı Desteği"
              text="Olası ihtiyaç anında en yakın sağlık kuruluşuna yakın 3
                  boyutlu yazıcıları belirlemek ve kitlesel üretim ile ihtiyacı
                  en kısa sürede çözüme kavuşturmaya katkı sağlamak istersen 3
                  Boyutlu Destek Ağı'na kaydolabilirsin."
            />
            <Destekolcard
              addClass="hover"
              image="public/destek-hammadde.png"
              title="Hammadde Desteği"
              text="Lastik, PETG şeffaf koruyucu plaka ve filament desteği
                  sağlamak istersen, tedarik ağına dahil olabilirsin."
            />
            <Destekolcard
              image="public/destek-sosyal-medya.png"
              title="Sosyal Medya Desteği"
              text="Destek olmak için her zaman üretmek gerekmez! Sosyal medya
                  uygulamaları üzerinden paylaşım yapabilir bize katkı
                  sağlayabilirsin. Hızlı paylaşım için sosyal medya araçlarını
                  kullanabilirsin."
            />
          </div>
        </section>

        <section className="Sistem">
          <h3 className="Sistem-title">Sistem Nasıl Çalışır ?</h3>
          <div className="Sistem-content">
            <Sistemsection
              addClass="first"
              image="public/sistem-1.png"
              title="Gönüllü Üretici Olarak Kaydol"
              text="Birkaç basit adımda 3 Boyutlu destek ağı kapsamında üretime
                  başlayabilirsiniz, mobil uygulamamızı buradan indirebilir ve
                  gönüllü üreticilerin arasına katılmak için ilk adımı
                  atabilirsiniz."
            />
            <Sistemsection
              addClass="second"
              image="public/sistem-2.png"
              title="Üretime Başla"
              text="Artık üretim yapmaya başlayabilirsiniz! Ürettiğiniz
                  siperliklerin sağlık çalışanlarımız için kritik bir öneme
                  sahip olduğunu lütfen unutmayın ve üretim ağımız ile
                  koordineli çalışın."
            />
            <Sistemsection
              addClass="third"
              image="public/sistem-3.png"
              title="Ürettiğin Parçalar Sağlık Çalışanlarına Siper Olsun !"
              text="Dünyayı etkisi altına alan covid-19 virüsü ile ön saflarda
                  savaşan sağlık çalışanlarımız için ürettiğin yüz siperlikleri,
                  sağlık çalışanlarımızı virüse karşı daha da güçlü olmasını
                  sağlıyor. Teşekkürler"
            />
            <div className="Sistem-content-background">
              <img
                src="public/sistem-bg.png"
                alt=""
                className="Sistem-content-background-img"
              />
            </div>
            <Sistemsection
              addClass="fourth"
              image="public/sistem-4.png"
              title="Linkten Tasarım Dosyasını İndir"
              text="Sağlık çalışanlarından aldığımız geri dönüşler ile ürettiğimiz
                  siperliklerin model dosyasını web sitemizdeki veya mobil
                  uygulamamızdaki linklerden Github hesabımıza ulaşarak
                  indirebilirsiniz."
            />
            <Sistemsection
              addClass="fifth"
              image="public/sistem-5.png"
              title="Ürettiğin Parçaları İl Temsilcilerine Ulaştır"
              text="Ülke genelindeki sağlık çalışanlarımızın oluşturduğu siperlik
                  talepleri il temsilcilerine ulaşmaktadır, ürettiğiniz
                  siperlikleri il temsilcinize ulaştırabilir veya temsilci ile
                  koordineli çalışarak direkt sağlık çalışanlarına
                  iletebilirsiniz."
            />
          </div>
        </section>
        <section className="Video">
          <div className="Video-content">
            <ReactPlayer url="https://www.youtube.com/watch?v=2p6HnvkVQ5A" />
            <p className="Video-content-text">
              Kolektifimiz, birbirini tanımayan binlerce insanın gönüllü olarak
              yönetim,organizasyon, üretim, dağıtım, tanıtım ve kaynak oluşturma
              alanlarında yaptığı katkılarla ilerlemeye devam ediyor!
            </p>
          </div>
        </section>
        <section className="BizdenHaberler">
          <h3 className="BizdenHaberler-title">Bizden Haberler</h3>
          <div className="BizdenHaberler-content">
            <Habercard />
            <Habercard />
            <Habercard />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export { HomePage };
