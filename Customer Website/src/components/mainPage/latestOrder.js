import React from "react";
import LOCard from "../../common/LOCard";
import Slider from "react-slick";
export default function LatestOrder() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider {...settings}>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <LOCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <LOCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <LOCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <LOCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <LOCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <LOCard />
        </div>
      </Slider>
    </div>
  );
}
