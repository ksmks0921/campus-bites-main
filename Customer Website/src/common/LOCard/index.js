import React from "react";
import Dish from "../../assets/bgdish.png";
export default function LOCard() {
  return (
    <div className="font-nunito">
      <div className="">
        <img src={Dish} alt="" className="" />
      </div>
      <div className="">
        <p className="text-primary text-[14px] uppercase font-bold leading-[56px] text-center">
          Scooter
        </p>
        <p className="font-bold leading-4 text-center text-secondary">
          Build Your Own Pizza
        </p>
        <p className="px-2 py-[6px] bg-primary text-white inline-block rounded-full text-[14px] leading-4 mt-2">
          $10.46
        </p>
      </div>
    </div>
  );
}
