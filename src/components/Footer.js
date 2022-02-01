import React from "react";

import logo from "../assets/images/img6.png";
import logo2 from "../assets/images/img7.png";
import logo3 from "../assets/images/img8.png";
import Line from "../assets/images/Line2.png";

const Footer = () => {
  return (
    <div className="footer">
      <p className="subaru">
        Subaru @ 2021 All rights reserved - Powered by <span>SolucionSoft</span>
      </p>
      <img src={Line} alt="line" className="lineFooter" />
      <p className="contactanos">
        <span>Contáctanos</span> Tel: 3102431358 o escribenos a
        contacto_subaru@didacol.com
      </p>
      <div className="logosGroup">
        <img src={logo} alt="logo" />
        <img src={logo2} alt="logo2" />
        <img src={logo3} alt="logo3" />
      </div>
    </div>
  );
};

export default Footer;
