import React from "react";
import Dish from "../../assets/drinkImage.png";
import { classNames } from "../../utils";
export default function DrinkBall({name="Fanta", image={Dish},length=1, index=0}) {
  return (
    <div
      className="font-nunito relative flex flex-col justify-center"
      >
      <div className=" relative rounded-full justify-center items-center px-1 py-1 flex gap-[8px]" 
       style={{
         filter: "drop-shadow(0px 2px 8px rgba(57, 181, 74, 0.3))",
        }}>
        <img src={image} alt="" className="rounded-full w-[80px] h-[80px] px-1 py-1" />
        {/* <div className="h-4 w-[2px] bg-red-600 block last:bg-transparent"></div> */}
        <div className={classNames(length === (index + 1) ?"bg-transparent":"bg-[#39B54A]", "h-6 w-[2px] ml-3 block")}></div>

      </div>
      <p className="text-[14px] leading-[56px] font-normal text-secondary mt-1 text-center -ml-4">
        {name}
      </p>
    </div>
     
  );
}


