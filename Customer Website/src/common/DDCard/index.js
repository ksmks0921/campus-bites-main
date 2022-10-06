import React from "react";
import Dish from "../../assets/dddish.png";
export default function DDCard() {
  return (
    <div className="font-nunito relative w-full md:w-[320px] pb-5 border-b-[1px] border-secondary last:pb-0 last:border-0">
      <div className=" relative  w-full">
        <div className="bg-red-500 absolute bottom-0 right-0 mb-8 px-3 py-2 rounded-[20px] z-[10]">
          <p className="text-white text-[14px] uppercase font-bold leading-[16px] text-center">
            6th, Nov 2022
          </p>
        </div>
        <div
          className="absolute bottom-0 h-[104px] w-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
          }}
        ></div>
        <img src={Dish} alt="" className="w-full md:w-[320px] h-[160px]" />
      </div>
      <p className="text-[18px] leading-[22px] font-bold text-secondary mt-1 ">
        Finals Week Free Delivery
      </p>

    </div>
  );
}
