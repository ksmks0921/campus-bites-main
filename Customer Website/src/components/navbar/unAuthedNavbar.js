import React from "react";
import Logo from "../../assets/CBfull1.png";
import Unilogo from "../../assets/unilogo.png";
import CartIcon from "../../assets/cart.png";
import Login from "../login";
import { useState } from "react";

export default function Index() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="hidden lg:block ml-10 bg-white">
        {/* left */}
        <div
          className="z-[65] mr-10 flex justify-between bg-white pl-5 pr-[30px] rounded-[8px]"
          style={{ boxShadow: "0px 8px 28px rgba(94, 115, 136, 0.12)" }}
        >
          <div className="">
            <img src={Logo} alt="" className="" />
          </div>
          {/* right */}
          <div className="flex justify-between">
            {/* left */}

            {/* right */}
            <div className="flex items-center">
              <div className="flex justify-center gap-4">
                <a href="/login"
                  // onClick={() => {
                  //   setIsOpen(true);
                  // }}
                  className="bg-primary rounded-[32px]  inline-block mx-auto text-white font-bold w-[158px] h-[56px] flex justify-center items-center cursor-default"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="bg-white border-primary rounded-[32px] w-[158px] h-[56px] inline-block mx-auto text-primary border-2 font-bold no-underline flex items-center justify-center cursor-default"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <Login isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}
