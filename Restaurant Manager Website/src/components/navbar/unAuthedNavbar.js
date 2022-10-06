import React from "react";
import Logo from "../../assets/CBfull1.png";
import Unilogo from "../../assets/unilogo.png";
import CartIcon from "../../assets/cart.png";
import UserIcon from "../../assets/user.png";
import Login from "../login";
import { useState } from "react";

export default function Index() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="hidden  ml-10 bg-white w-full lg:block  ">
        {/* left */}
        <div
          className="z-[65] mr-10 flex justify-between bg-white pl-5 pr-[30px] rounded-[8px] w-full lg:grid lg:grid-cols-12"
          style={{ boxShadow: "0px 8px 28px rgba(94, 115, 136, 0.12)" }}
        >
          <div className="lg:col-start-1 lg:col-end-3">
            <img src={Logo} alt="" className="" />
          </div>
          {/* right */}
          <div className="justify-between grid grid-cols-3 w-full lg:col-start-5 lg:col-end-13 items-center pr-12 ">
            {/* left */}

            {/* right */}
            {/* <div className="w-full mx-auto flex justify-center my-2 col-start-1 col-end-2">
              <div className=" flex items-center w-full">
                <p className="text-[18px] leading-[24px] font-normal mr-3 whitespace-nowrap">
                  University Of St.Thomas{" "}
                </p>
                <div className="mr-5">
                  <img src={Unilogo} alt="" className="" />
                </div>
                <div className="border-black border-[1px] h-full mr-6"></div>
              </div>
            </div> */}
              <div className="col-start-3 col-end-4 flex justify-end">
                <button
                  className="flex items-center bg-primary text-white w-[220px] h-[56px] rounded-[32px] px-1 py-1 font-bold text-[18px] leading-[20px] "
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  <img
                    src={UserIcon}
                    alt=""
                    className="mr-3 bg-white px-1 py-1  rounded-full whitespace-nowrap"
                  />{" "}
                  Login to Start
                </button>
              </div>
          </div>
        </div>
      </div>
      {isOpen && <Login isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}
