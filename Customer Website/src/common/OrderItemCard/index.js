import React from "react";
import Dish from "../../assets/orderDish.png";
export default function OrderItemCard() {
  return (
    <div className="flex font-nunito w-full items-center gap-4">
      <div
       className="rounded-full h-[96px] w-[96px] flex items-center" 
      style={{
          filter: "drop-shadow(0px 2px 12px rgba(94, 115, 136, 0.5))"
      }}
      >
        <img src={Dish} alt="" className=" rounded-full px-1 py-1" />
      </div>
      <div className="w-full">
        <p className="font-bold text-[14px] uppercase text-primary mb-1">
          Scooter
        </p>
        <div className="flex justify-between w-full items-center">
          <p className="font-bold text-secondary text-[14px]">
            Build Your Own Pizza
          </p>
          <p className="flex-1 text-right font-bold text-secondary  text-[14px]">
            $10.46
          </p>
        </div>
        <p className="  text-secondary inline-block  text-[14px] mt-1 rounded-full">
          x2
        </p>
      </div>
    </div>
  );
}
