import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { React, useState } from "react";
import dollarIcon from "../../assets/dollar-sign.png";
import starIcon from "../../assets/user-star.png";
import StarRatings from "react-star-ratings";
import { classNames } from "../../utils";
export default function Rating() {
  const [tip, setTip] = useState(1);
  return (
    <div className="mt-8">
      {/* top */}
      <div className="md:flex gap-3 items-center mb-5">
        <div className="flex gap-3 items-center">

        <div className="px-3 py-[10px] flex justify-center items-center bg-[#F1F8F2] rounded-[8px]">
          <img src={starIcon} alt="" className="" />
        </div>
        <p className="">
          Please rate <span className="">Sam K.</span>{" "}
        </p>
        </div>
        <div className=" border-r-[1px] h-10 border-secondary hidden md:block"></div>
        <div className="mt-2 md:mt-0">
          <StarRatings
            rating={3}
            starRatedColor="#39B54A"
            // starEmptyColor="white"
            // svgIconPath="M12 1.23607L13.9676 7.2918C14.2354 8.11584 15.0033 8.67376 15.8697 8.67376H22.2371L17.0858 12.4164C16.3848 12.9257 16.0915 13.8284 16.3593 14.6525L18.3269 20.7082L13.1756 16.9656C12.4746 16.4563 11.5254 16.4563 10.8244 16.9656L5.67312 20.7082L7.64074 14.6525C7.90849 13.8284 7.61518 12.9257 6.9142 12.4164L1.76289 8.67376L8.13026 8.67376C8.99671 8.67376 9.76463 8.11584 10.0324 7.29179L12 1.23607Z"

            starHoverColor="#39B54A"
            changeRating={() => {}}
            numberOfStars={5}
            name="rating"
            starDimension="25px"
          />
        </div>
      </div>
      {/* bottom */}
      <div className="md:flex gap-3 items-center">
        <div className="flex gap-3 items-center">

        <div className="px-3 py-[10px] flex justify-center items-center bg-[#F1F8F2] rounded-[8px]">
          <img src={dollarIcon} alt="" className="" />
        </div>
        <p className=" text-[14px] md:text-[18px] leading-[24px] font-bold text-secondary">
          Add Tip
        </p>
        </div>
        <div className=" border-r-[1px] h-10 border-secondary hidden md:block"></div>
        <div className="flex gap-3 mt-2 md:mt-0">
          <button
            onClick={() => {
              console.log("red mannnn");
              setTip("1");
            }}
            className={classNames(
              (tip == 1) ? "bg-primary" : "bg-[#C6E9CB]",
              "text-[14px] h-[22px] w-[51px] text-white font-bold rounded-[20px] flex justify-center items-center  py-[6px] px-3"
            )}
          >
            $1
          </button>
          <button
            onClick={() => {
              setTip("2");
            }}
            className={classNames(
              (tip == 2) ? "bg-primary" : "bg-[#C6E9CB]",
              "text-[14px] h-[22px] w-[51px] text-white font-bold rounded-[20px] flex justify-center items-center  py-[6px] px-3"
            )}
          >
            $2
          </button>
          <button
            onClick={() => {
              setTip("5");
            }}
            className={classNames(
              (tip == 5) ? "bg-primary" : "bg-[#C6E9CB]",
              "text-[14px] h-[22px] w-[51px] text-white font-bold rounded-[20px] flex justify-center items-center  py-[6px] px-3"
            )}
          >
            $5
          </button>
          <button
            onClick={() => {
              setTip("10");
            }}
            className={classNames(
              (tip == 10) ? "bg-primary" : "bg-[#C6E9CB]",
              "text-[14px] h-[22px] w-[51px] text-white font-bold rounded-[20px] flex justify-center items-center  py-[6px] px-3"
            )}
          >
            $10
          </button>
        </div>
        <div className="w-full md:w-auto mx-auto md:mx-0 flex justify-center mt-2 md:mt-0">

        <div className="h-12 w-12 flex justify-center items-center bg-primary rounded-full">
          <ArrowNarrowRightIcon className="h-4 w-6 text-white" />
        </div>
        </div>
      </div>
    </div>
  );
}
