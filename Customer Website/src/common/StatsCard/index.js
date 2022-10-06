import React from "react";
import Dish from "../../assets/bgdish.png";
export default function StatsCard({ value = "120", label = "Universities" }) {
  return (
    <div className=" bg-slate-100 font-nunito px-5 py-6 stats-bg">
      <div className="flex justify-center flex-col text-center">
        <p className="font-bold uppercase text-[40px] leading-[56px] text-primary">
          {value}
        </p>
        <hr className="bg-primary h-1" />
        <p className="font-bold text-[18px] leading-[18px] uppercase mt-2">
          {label}
        </p>
      </div>
    </div>
  );
}
