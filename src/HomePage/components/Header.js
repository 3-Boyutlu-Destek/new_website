import React from "react";
import { Link } from "react-router-dom";

function toggle() {
  const e = document.getElementsByClassName("Header-buttons");
  e[0].classList.toggle("switch");
}

window.onscroll = function() {
  scrollFunc();
};

function scrollFunc() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    document.getElementById("logo").src = "logo-text.svg";
  } else {
    document.getElementById("logo").src = "logo.svg";
  }
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("Header-nav")[0].classList.add("scroll");
    document
      .getElementsByClassName("Header-buttons")[0]
      .classList.add("scroll");
  } else {
    document.getElementsByClassName("Header-nav")[0].classList.remove("scroll");
    document
      .getElementsByClassName("Header-buttons")[0]
      .classList.remove("scroll");
  }
}

function Header() {
  return (
    <header className="Header">
      <nav className="Header-nav">
        <a href="/" className="Header-nav-link">
          <img
            id="logo"
            className="Header-nav-link-img"
            src="logo.svg"
            alt="Ana Sayfa"
          ></img>
        </a>
        <div
          className="Header-switch"
          onClick={toggle}
          style={{ cursor: "pointer" }}
        >
          <img className="Header-switch-icon" src="menu.svg" />
        </div>
        <div className="Header-buttons">
          {/*<a href="" className="Header-buttons-link">
            Hakkımızda
          </a>
          <a href="" className="Header-buttons-link">
            Destekçiler
          </a>*/}
          <Link to="/bizden-haberler" className="Header-buttons-link">
            Bizden Haberler
          </Link>
          <Link to="/urunler" className="Header-buttons-link">
            Ürünler
          </Link>
          <Link
            to="/hammadde-destek-form"
            className="Header-buttons-link primary"
          >
            Destek Ol
          </Link>
          <Link
            to="/talep-form"
            className="Header-buttons-link primary blue"
          >
            Talep Et
          </Link>
          {/*  
       
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScR4-5CE7VXJwTO84wvjLHxn11vtnZrip3bMr-ncHKKo2GBOw/viewform"
            className="Header-buttons-link primary"
            target="_blank"
          >
            Destek Ol
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfTWxS4MBVDiqLRA-pL6GGk6p8lp1ugmwU6f0vvLYZChIs0zA/viewform?embedded=true"
            target="_blank"
            className="Header-buttons-link primary blue"
          >
            Talep Et
          </a>
        */}
        </div>
      </nav>
    </header>
  );
}
export default Header;
