import React from "react";
import Dish from "../../assets/bggdish.png";
export default function UniOptionCard({
  img=Dish,
  value = "120",
  label = "SCOOTER",
  link="/"
}) {
  return (
    <div className="rounded-md font-nunito">
      <a href={link} className="no-underline flex flex-col justify-items-center">

      <div className="w-[200px] h-[200px] rounded-full mx-auto">
        <img src={img} alt="" className="w-[200px] h-[200px] rounded-full" />
      </div>
      <div className="flex text-center justify-center">
        <p className="text-[18px] leading-[56px] font-bold capitalize text-secondary uppercase">
          {label}
        </p>
      </div>
      <div className="flex justify-center">
        <hr className="w-8 h-1 bg-red-500" />
      </div>
      </a>
    </div>
  );
}
