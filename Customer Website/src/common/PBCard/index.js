import React from "react";
import Dish from "../../assets/pbimg.png";
export default function PBCard() {
  return (
    <div className="flex font-nunito">
      <div className="">
        <img src={Dish} alt="" className="" />
      </div>
      <div className="">
        <p className="font-bold text-[14px] uppercase text-primary leading-[56px]">
          Scooter
        </p>
        <p className="font-bold text-secondary leading-4 text-[14px]">
          Build Your Own Pizza
        </p>
        <p className="px-2 py-[6px] bg-primary text-white inline-block leading-4 text-[14px] mt-2 rounded-full">
          $10.46
        </p>
      </div>
    </div>
  );
}
