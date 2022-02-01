import React from "react";

import img1 from "../assets/images/grid_img1.png";
import img2 from "../assets/images/grid_img2.png";
import img3 from "../assets/images/grid_img3.png";
import img4 from "../assets/images/grid_img4.png";
import img5 from "../assets/images/img5.png";

const ImgGrid = () => {
  return (
    <div>
      <div className="grid">
        <div className="grid__cells">Las más destacadas del mes anterior</div>
        <div className="grid__cells">
          <img src={img1} alt="grid1" />
          <div className="date2">08/06/ 2021</div>
          <span className="title2">
            Rally Subaru ipsum dolor sit amet, <br /> consectetur adipiscing
            elit.
          </span>
          <p>Lorem ipsum dolor sit amet, consectet</p>
        </div>
        <div className="grid__cells">
          <img src={img2} alt="grid2" />
          <div className="date2">08/06/ 2021</div>
          <span className="title3">
            Subaru 21XV ipsum dolor <br /> sit amet, consectetur.
          </span>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectet
          </p>
        </div>
        <div className="grid__cells">
          <img src={img3} alt="grid3" />
          <div className="date2">08/06/ 2021</div>
          <span className="title4">
            Con tu Subaru vas a donde <br /> tu imaginación te lleve.
          </span>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectet
          </p>
        </div>
        <div className="grid__cells">
          <img src={img4} alt="grid4" />
          <div className="date2">08/06/ 2021</div>
          <span className="title5">
            Subaru 21Impreza <br /> dolor sit amectetur.
          </span>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectet
          </p>
        </div>
      </div>

      <div className="next">
        <img src={img5} alt="flecha" />
        <p>Ir a Subaru Colombia</p>
      </div>
    </div>
  );
};

export default ImgGrid;
