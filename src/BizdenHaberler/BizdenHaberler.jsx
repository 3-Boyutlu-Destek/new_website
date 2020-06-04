import React from "react";
import "./style.scss";
import Habercard from "../HomePage/components/Habercard";
import Title from "../HomePage/components/Title";
import BasindaBiz from "../HomePage/components/BasindaBiz";

class BizdenHaberler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="BizdenHaberler">
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
          <BasindaBiz />
        </div>
      </div>
    );
  }
}

export { BizdenHaberler };
