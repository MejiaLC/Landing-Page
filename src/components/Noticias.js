import React, { useState, useEffect } from "react";

import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import bar from "../assets/images/bar.png";

const Noticias = () => {
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    setImgList([img1, img2, img3, img4]);
  }, []);

  return (
    <main>
      <div className="noticias">
        <h1>Listado de Noticias</h1>

        {imgList.map((img, i) => {
          return (
            <div className="noticia" key={i}>
              <div className="img">
                <img src={img} alt={img} className="imgList" />
              </div>
              <div className="container">
                <div className="date">08/06/2021</div>
                <h2>
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  augue neque, porta et volutpat vitae, auctor nec felis.
                  Phasellus et tellus sit amet lorem maximus faucibus. Fusce
                  dictum odio quis placerat consequat ...
                </p>
                <div className="articulo">
                  Ver articulo <span>+</span>
                </div>
              </div>
            </div>
          );
        })}
        <div className="bar">
          <img src={bar} alt="bar" />
        </div>
      </div>
    </main>
  );
};

export default Noticias;
