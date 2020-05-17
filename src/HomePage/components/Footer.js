import React from 'react';

function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="Footer-top">
          <div className="Footer-top-left">
            <a href="/" className="Footer-top-left-link">
              <img
                src="logo.svg"
                className="Footer-top-left-link-img"
                alt="Ana Sayfa"
              ></img>
            </a>
            <p className="Footer-top-left-text">
              3 boyutlu yazıcıda üretilmiş parçalar, ihtiyaç anında orijinal
              parçaların yerini daha kısa sürede alabilir!
            </p>
          </div>
          <div className="Footer-top-middle">
            <div className="Footer-top-middle-links">
              <div className="Footer-top-middle-links-left">
                <a href="" className="Footer-top-middle-links-left-link">
                  Hakkımızda
                </a>
                <a href="" className="Footer-top-middle-links-left-link">
                  Biz Kimiz
                </a>
                <a href="" className="Footer-top-middle-links-left-link">
                  Basında Biz
                </a>
                <a
                  href="kvkk_metni.html"
                  className="Footer-top-middle-links-left-link"
                  target="_blank"
                >
                  İlgili Kişi Başvuru Formu
                </a>
                <a
                  href="aydinlatma_metni.html"
                  className="Footer-top-middle-links-left-link"
                  target="_blank"
                >
                  K.V.K Metni
                </a>
              </div>
              <div className="Footer-top-middle-links-right">
                <a href="" className="Footer-top-middle-links-right-link">
                  Destekçilerimiz
                </a>
                <a href="" className="Footer-top-middle-links-right-link">
                  Üreticiler
                </a>
                <a href="" className="Footer-top-middle-links-right-link">
                  İstatistikler
                </a>
                <a
                  href="ss_sorular.html"
                  className="Footer-top-middle-links-right-link"
                  target="_blank"
                >
                  S.S.S
                </a>
                <a href="" className="Footer-top-middle-links-right-link">
                  Blog
                </a>
              </div>
            </div>
          </div>
          <div className="Footer-top-right">
            <p className="Footer-top-right-text">
              Bizi Sosyal Medyada Takip Edin
            </p>
            <div className="Footer-top-right-social">
              <a
                href="https://twitter.com/search?q=3boyutludestek"
                target="_blank"
                className="Footer-top-right-social-link"
              >
                <img
                  src="twitter.svg"
                  className="Footer-top-right-social-link-img"
                />
              </a>
              <a
                href="https://www.facebook.com/3BoyutluDestek/"
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
                href="https://www.youtube.com/channel/UC_s_80cd1PsvgmT-p9pNdJw"
                target="_blank"
                className="Footer-top-right-social-link"
              >
                <img
                  src="youtube.svg"
                  className="Footer-top-right-social-link-img"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/3boyutludestek/"
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
      <div className="Footer-bottom">
        <p>
          Copyright 3 Boyutlu Destek | Kollektif Üretim Hareketi Platformu Tüm
          Hakkı Saklıdır. | 2020
        </p>
        <p className="Footer-bottom-mail">iletisim@3boyutludestek.org</p>
      </div>
    </footer>
  );
}

export default Footer;
