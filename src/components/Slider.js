import React from "react";

import SliderImg from "../assets/images/Slider.png";
import Line from "../assets/images/Line 2.png";
import Line3 from "../assets/images/Line 3.png";
import Line4 from "../assets/images/Line 3.png";
import Line5 from "../assets/images/Line 3.png";

const Slider = () => {
  return (
    <div className="slider">
      <img src={SliderImg} alt="Slider" className="slider-img" />
      <h1 className="sliderTitle">Lorem ipsum dolor sit amet,</h1>
      <h1 className="sliderTitle">consectetur adipisicing elit.</h1>
      <div className="rectangle">
        <img src={Line} alt="line" className="line2" />
        <img src={Line3} alt="line3" className="line3" />
        <img src={Line4} alt="line4" className="line4" />
        <img src={Line5} alt="line5" className="line5" />
        <div className="saberMas">
          Saber más <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
