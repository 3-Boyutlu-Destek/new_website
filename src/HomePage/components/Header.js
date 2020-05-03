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
          <img className="Header-nav-link-img" src="logo.svg" alt="Ana Sayfa"></img>
        </a>
        <div className="Header-switch" onClick={toggle} style={{ cursor: 'pointer' }}>
          <img className="Header-switch-icon" src="menu.svg" />
        </div>
        <div className="Header-buttons">
        { /*<a href="" className="Header-buttons-link">
            Hakkımızda
          </a>
          <a href="" className="Header-buttons-link">
            Destekçiler
          </a>
          <a href="" className="Header-buttons-link">
            Ürünler
  </a> */}  
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScR4-5CE7VXJwTO84wvjLHxn11vtnZrip3bMr-ncHKKo2GBOw/viewform"
             className="Header-buttons-link primary" 
             target="_blank">
            Destek Ol
          </a>
          <a
            href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfTWxS4MBVDiqLRA-pL6GGk6p8lp1ugmwU6f0vvLYZChIs0zA/formResponse?embedded=true"
            target="_blank"
            className="Header-buttons-link primary blue"
          >
            Talep Et
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Header;
