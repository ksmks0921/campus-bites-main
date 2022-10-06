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
    <div className="bg-tertiary px-6 py-6 font-nunito relative ">
      <div className=" md:grid md:grid-cols-12 mb-4 z-[8000]">
        <div className="z-[80] col-start-1 col-end-4">
          <img src={Logo} alt="" className="" />
        </div>
        <div className="col-start-4 col-end-10 grid grid-cols-3">
          <div className="text-[18px] font-bold leading-4 no-underline text-secondary flex flex-col gap-4 z-[80]">
            <a href="" className="">
              Home
            </a>
            <a href="" className="">
              Menu
            </a>
            <a href="" className="">
              About
            </a>
            <a href="" className="">
              Contact
            </a>
            <a href="" className="">
              News
            </a>
          </div>
          <div className="text-[18px] font-bold leading-4 no-underline text-secondary flex flex-col gap-4">
            <a href="" className="">
              Scooter
            </a>
            <a href="" className="">
              T's
            </a>
            <a href="" className="">
              The Loft
            </a>
            <a href="" className="">
              Nortsider
            </a>
            <a href="" className="">
              Category
            </a>
          </div>
          <div className="text-[18px] font-bold leading-4 no-underline text-secondary flex flex-col gap-4">
            <a href="" className="">
              Privacy Policy
            </a>
            <a href="" className="">
              Terms of Use
            </a>
            <a href="" className="">
              Cookie Policy
            </a>
          </div>
        </div>
        <div className="text-[28px] font-bold col-start-10 col-end-13 ">
          <div className="relative z-[10]">
            <h1 className=" mb-8 lg:mb-0">Get Your Discount</h1>
          </div>
          <div>
            <div className="mt-1 flex rounded-md shadow-sm">
              <div className="relative flex flex items-stretch flex-grow focus-within:z-10">
                {/* <h1 className="z-[600]">Get Your Discount</h1> */}

                <input
                  type="text"
                  name="email"
                  id="email"
                  className="z-[80] focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                  placeholder="Sign Up for Monthly Discount"
                />
              </div>
              <button className="z-[80] -ml-px relative inline-flex items-center space-x-2 px-4 py-1  text-sm font-medium rounded-r-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-1  ">
                <ArrowNarrowRightIcon
                  className="h-4 w-4 text-white rounded-full bg-primary"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-white border-2 z-[80]" />
      <div className="flex justify-center py-4 z-[80]">
        <p className="text-sm text-primary font-normal z-[80]">
          © 2022 CampusBites | All Rights Reserved
        </p>
      </div>
      <div className="absolute bottom-0 left-0 z-[0]">
        <img src={BottomOval} alt="" className="src" />
      </div>
    </div>
  );
}
