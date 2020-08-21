import React from "react";
import "./style.scss";

 class Hakkimizda extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }
     componentDidMount(){
         this.myRef = window.scrollTo(0,0);
     }
      render() {
        return (
            <div className="Hakkimizda" ref={this.myRef}>
              <img src="Doktorlar.jpg" className="header-image"/>
                <div className='hakkimizda'>
                    <h3>HAKKIMIZDA</h3>
                    <p className="tanitim-text">
                     3 Boyutlu Destek Kolektif Üretim Hareketi olarak Covid-19 ile mücadele için 3 boyutlu yazıcı sahiplerinin bir araya geldiği büyük bir aileyiz.
                    </p>
                    <p className="tanitim-text">
                    Kolektif Üretim Hareketi Ağı’mıza kayıtlı 4500’den fazla 3 boyutlu yazıcı sayesinde günde 25.000 adet farklı boyutlarda ürünü basabilme kapasitesine sahibiz. Gücümüzü, ağa kayıtlı 3.000’den fazla kişi ve kurumun tamamen gönüllü emeklerinden ve üretim yapabilmemiz için hammadde sağlayan destekçilerimizden alıyoruz.
                    </p>
                    <p className="tanitim-text">
                     Kolektif üretim gücüne inanan topluluğumuz, yerel problemlere kitlesel üretim desteği sunarak çalışmalarını sürdürmeyi hedefliyor
                    </p>
                                 
                </div>
                <div className="MisyonVizyon">
                    <div className="MisyonVizyon-left">
                        <p className="MisyonVizyon-left-text">
                        <span>MİSYON</span>
                            3 Boyutlu Destek Kolektif Üretim Hareketi, teknoloji kullanım yetenekleri 
                            ve farkındalığı yüksek olan bireylerin bir araya gelerek oluşturduğu merkezi 
                            olmayan üretim ağıdır.Bir araya gelme amacımız, yeni nesil üretim teknolojilerini
                            kullanarak ihtiyaç sahiplerinin ulaşamadığı ürünleri hızlı şekilde üretmeyi ve 
                            tedarik etmeyi hedefleyen yüksek sosyal etki yaratan projeler üretmektir.
                        </p>
                        
                        <p className="MisyonVizyon-left-text">
                        <span>VİZYON</span>
                        3 Boyutlu Destek Kolektif Üretim Hareketi, dağıtık gönüllü üretici ağı ile yeni nesil üretim
                        araçlarını kullanarak tasarladığı ve ürettiği ürünlerle, toplumsal problemlere karşı çözüm geliştirir.
                        </p>
                    </div>
                    <div className="MisyonVizyon-right">
                        
                        <img
                            src="misyon.jpg"
                            alt=""
                            className="MisyonVizyon-right-img"
                        />

                     </div>
           
                </div>
            </div>
        )
    }
}
export { Hakkimizda };