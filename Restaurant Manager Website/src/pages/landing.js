import React, {useState, useEffect} from "react";
import Logo from "../assets/CBfull1.png";
// import { useState } from "react";
import { login } from '../actions/userActions'

import Login from "../components/login";
import LandingLayout from "../components/layout/landingLayout";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from "react-router-dom";


export default function Landing() {
  let [isOpen, setIsOpen] = useState(true);
  let navigate = useNavigate();
  let location = useLocation();
  // console.log({location})
  const redirect = location.search ? location.search.split('=')[1] : '/serving'
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    // e.preventDefault()
    dispatch(login(e.username, e.password))
    console.log({e})
  }
 useEffect(() => {
    if (userInfo) {
      navigate(redirect, { replace: true });
    }
  }, [ userInfo, redirect])
  return (
    <LandingLayout>
      <section className=" relative  font-nunito mt-[120px]  md:mt-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-10 gap-10 lg:gap-4">
          {/* incoming Orders*/}
          <div className="w-full">
            <div className="flex justify-between w-full items-center">
              <p className="text-[16px] leading-[40px] md:text-[20px] md:leading-[44px] xl:leading-[56px] xl:text-[28px] font-bold text-black whitespace-nowrap">
                Incoming Orders
              </p>
              <p className="text-[12px] leading-[40px] md:text-[20px] md:leading-[56px] text-[#A2B1C0]">
                ? Orders
              </p>
            </div>
            <div className="h-[1px] bg-[#2C2C2C] w-full my-5"></div>
          </div>
          {/* // Active Orders */}
          <div className="w-full">
            <div className="flex justify-between w-full items-center">
              <p className="text-[16px] leading-[40px] md:text-[20px] md:leading-[44px] xl:leading-[56px] xl:text-[28px] font-bold text-black whitespace-nowrap">
                Active Orders
              </p>
              <p className="text-[12px] leading-[40px] md:text-[20px] md:leading-[56px] text-[#A2B1C0]">
                ? Orders
              </p>
            </div>
            <div className="h-[1px] bg-[#2C2C2C] w-full my-5"></div>
          </div>
          {/* // Ready oders  */}
          <div className="w-full">
            <div className="flex justify-between w-full items-center">
              <p className="text-[16px] leading-[40px] md:text-[20px] md:leading-[44px] xl:leading-[56px] xl:text-[28px] font-bold text-black whitespace-nowrap">
                Ready Orders
              </p>
              <p className="text-[12px] leading-[40px] md:text-[20px] md:leading-[56px] text-[#A2B1C0]">
                ? Orders
              </p>
            </div>
            <div className="h-[1px] bg-[#2C2C2C] w-full my-5"></div>
          </div>
        </div>
        {isOpen && <Login isOpen={isOpen}  submit={submitHandler}  error={error} loading={loading} />}
      </section>
    </LandingLayout>
  );
}
