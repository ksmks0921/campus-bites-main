import React, { useEffect } from "react";
import Logo from "../assets/CBfull1.png";
import { useState } from "react";
import Login from "../components/login";
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate,useLocation } from "react-router-dom";

export default function Landing({}) {
  let [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();
  console.log({location})
  const redirect = location.search ? location.search.split('=')[1] : '/main'
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  useEffect(() => {
    if (userInfo) {
      navigate(redirect, { replace: true });
    }
  }, [ userInfo, redirect])
  return (
    <section className=" relative bg-main  flex flex-col justify-center items-center h-screen font-nunito bg-cover">
      <div
        className="h-full w-full relative flex justify-center items-center"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          // border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "-2px 2px 8px rgba(94, 115, 136, 0.2)",
          backdropFilter: "blur(3px)",
        }}
      >
        <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 py-2">
          <div className="">
            <img src={Logo} alt="" className="w-[75%] h-12 md:w-full md:h-full" />
          </div>
          <a
            href="/signup"
            className="no-underline text-secondary font-black text-xs md:text-[18px]"
          >
            Make New Account
          </a>
        </div>

        <div className="  ">
          <div
          >
            <p className="text-center mt-[24px] mb-[32px] font-black text-[38px] md:text-[56px] leading-[56px] text-white">
              On-Campus Dining
              <br /> Just Got Better.
            </p>
            <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-center">
              <button className="bg-primary rounded-full w-[170px] h-[56px] inline-block mx-auto text-white font-bold">
                For Universities
              </button>
              <button
                className="bg-primary rounded-full w-[170px] h-[56px] inline-block mx-auto text-white font-bold"
                onClick={() => {
                  navigate("/login",
                    { replace: true }
                  );
                }}
              >
                Student Log In
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <Login isOpen={isOpen} setIsOpen={setIsOpen} />}
    </section>
  );
}
