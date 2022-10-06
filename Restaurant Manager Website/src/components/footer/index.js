import React from "react";
import {
  SortAscendingIcon,
  UsersIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";
import Logo from "../../assets/Campusbitelogo.png";
import BottomOval from "../../assets/bottomOval.png";
export default function index() {
  return (
    <div className="bg-[#F1F8F2] px-6 py-6 font-nunito relative ">
      <div className=" grid sm:grid-cols-3 items-center">
        <div className="">
          <img src={Logo} alt="" className="" />
        </div>
        <div className="col-span-2 flex flex-col justify-center lg:justify-start md:grid lg:grid-cols-2 pr-6 justify-between">
        <div className="">
          <div className="text-[18px] font-bold leading-4 no-underline text-secondary flex flex-col sm:flex sm:flex-row gap-2 justify-center">
            <a href="" className="whitespace-nowrap">
              Privacy Policy
            </a>
            <p className="hidden sm:block">|</p>
            <a href="" className="whitespace-nowrap">
              Terms of Use
            </a>
            <p className="hidden sm:block">|</p>
            <a href="" className="whitespace-nowrap">
              Cookie Policy
            </a>
          </div>
        </div>
        <div className="text-[28px] font-bold ">
          <p className="text-sm text-primary font-normal z-[80] text-center">
          © 2022 CampusBites | All Rights Reserved
        </p>
        </div>

        </div>
      </div>
    </div>
  );
}
