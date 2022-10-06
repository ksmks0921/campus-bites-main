import React from "react";
import Dish from "../../assets/bgdish.png";
export default function MenuLOCard({
   id,price="10.46", name="Build Your Own Pizza", restaurant="Scooter", img=Dish
}) {
  return (
    <div className="font-nunito w-full md:w-auto">
      <a href={`/menu/meal/${id}`} className="no-underline">
        <div className="mb-4 w-[200px]">
          <img src={img} alt="" className="w-full h-[133px]" />
        </div>
        <div className="">
          <p className="text-primary text-[14px] uppercase font-bold text-left mb-3">
            {restaurant}
          </p>
          <p className="font-bold leading-4  text-secondary">
            {name}
          </p>
          <p className="px-2 py-[6px] bg-primary text-white inline-block rounded-full text-[14px] leading-4 mt-2">
            {`$${price}`}
          </p>
        </div>
      </a>
    </div>
  );
}
