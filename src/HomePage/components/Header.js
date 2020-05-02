import React from 'react';

function toggle() {
  const e = document.getElementsByClassName('Header-buttons');
  e[0].classList.toggle('switch');
}

function Header() {
  return (
    <header className="Header">
      <nav className="Header-nav">
        <a href="/" className="Header-nav-link">
          <img
            className="Header-nav-link-img"
            src="public/logo.png"
            alt="Ana Sayfa"
          ></img>
        </a>
        <div
          className="Header-switch"
          onClick={toggle}
          style={{ cursor: 'pointer' }}
        >
          <img className="Header-switch-icon" src="public/menu.svg" />
        </div>
        <div className="Header-buttons">
          <a href="" className="Header-buttons-link">
            Hakkımızda
          </a>
          <a href="" className="Header-buttons-link">
            Destekçiler
          </a>
          <a href="" className="Header-buttons-link">
            Ürünler
          </a>
          <a href="" className="Header-buttons-link primary">
            Destek Ol
          </a>
          <a href="" className="Header-buttons-link primary blue">
            Talep Et
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Header;