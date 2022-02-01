import React, { useRef } from "react";

import Logo from "../assets/images/Logo.png";
import Line from "../assets/images/Line.png";
import Search from "../assets/images/Search.png";

const Header = () => {
  let refMenu = useRef();

  const mostrarMenu = () => {
    refMenu.current.classList.toggle("mostrar");
  };

  return (
    <header>
      <span className="nav-bar" id="btnMenu" onClick={() => mostrarMenu()}>
        <i className="fas fa-bars"></i>
      </span>
      <img src={Logo} alt="logo" className="logo" />
      <nav className="main-nav">
        <ul className="menu" id="menu" ref={refMenu}>
          <li className="menu__item">
            <a href="localhost:3000" className="menu__link">
              Producto
            </a>
          </li>
          <li className="menu__item">
            <a href="localhost:3000" className="menu__link">
              Tecnología
            </a>
          </li>
          <li className="menu__item">
            <a href="localhost:3000" className="menu__link">
              Legado
            </a>
          </li>
          <li className="menu__item">
            <a href="localhost:3000" className="menu__link">
              Sport
            </a>
          </li>
          <li className="menu__item">
            <a href="localhost:3000" className="menu__link">
              Corporativo
            </a>
          </li>
          <li className="menu__item">
            <img src={Line} alt="Line" className="line" />
          </li>
          <li className="menu__item">
            <img src={Search} alt="Search" className="search" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
