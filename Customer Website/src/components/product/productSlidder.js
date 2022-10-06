

import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import si0 from "../../assets/si0.png";
import si1 from "../../assets/si1.png";
import si2 from "../../assets/si2.png";
import si3 from "../../assets/si3.png";
const baseUrl ="si"
const imagesUrl =[si0, si1,si2]
 const ProductSlider =({productImages=[]})=> {
    const settings = {
      customPaging: function(i) {
        return (
          <a className="h-[100px] w-[100px]">
            <img className="h-[100px] w-[100px]" src={productImages[i]} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dotsx slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    //   className:"redmond"
    };
    return (
      <div>
        {/* <h2>Custom Paging</h2> */}
        <Slider {...settings}>
            {productImages.map((product, index)=>(
          <div key={index} className="grid grid-cols-3">
            <img src={product} className="h-[500px] w-[500px]" />
          </div>

            ))}
        </Slider>
      </div>
    );
  
}

export default ProductSlider;