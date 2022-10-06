import React from "react";
import Layout from "../components/layout/";
import { useNavigate } from "react-router-dom";
import {
  SortAscendingIcon,
  UsersIcon,
  ArrowNarrowLeftIcon,
  PlusIcon,
} from "@heroicons/react/solid";
import PBCard from "../common/PBCard";
import LOCard from "../common/LOCard";
import StatsCard from "../common/StatsCard";
import UniOptionCard from "../common/UniOptionCard";
import attention1 from "../assets/imgattention-1.png";
import attention2 from "../assets/imgattention-2.png";
import landingImg from "../assets/landingimg.png";
import adbg from "../assets/adimg.png";
import LandingSection from "../components/mainPage/landingSection";
import LatestOrder from "../components/mainPage/latestOrder";
import CartItem from "../common/CartItem";
export default function Cart() {
  let navigate = useNavigate();
  return (
    <Layout>
      <div className="relative pb-16 px-10 font-nunito pt-[100px] bg-white lg:pt-4 ">
        <div className="">
          <a
            href="/menu"
            className="flex items-center no-underline text-secondary text-[18px] leading-6"
          >
            <ArrowNarrowLeftIcon className="h-4 w-6 mr-1 text-primary" />
            Back to Menu
          </a>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-start-1 lg:col-end-5 w-full">
            <div className="text-primary text-[30px] md:text-[36px] md:leading-[56px] font-bold">
              Cart
            </div>
            <div className="grid gap-x-10 gap-y-8 ">
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
            {/* bottom summary */}
            <div className="flex gap-6 mt-6 mb-6">
              <div className="h-[56px] w-[56px]"></div>
              {/* cart summary and checkout button */}
              <div className="grid lg:grid-cols-3 gap-6 items-center ">
                {/* summary */}
                <div
                  className="lg:col-start-1 lg:col-end-3 py-4 px-8 grid gap-3"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0px 8px 28px rgba(94, 115, 136, 0.12)",
                    borderRadius: "8px",
                    // transform: "matrix(1, 0, 0, -1, 0, 0)",
                  }}
                >
                  {/* subtotal */}
                  <div className="grid grid-cols-11">
                    <div className="col-start-1 col-end-5">
                      <p className="text-left font-normal text-[28px] leading-[38px] text-secondary">
                        Subtotal
                      </p>
                    </div>
                    <div className="col-start-5 col-end-8 text-center">|</div>
                    <div className="col-start-8 col-end-12 ">
                      <p className="text-left font-bold text-[28px] leading-[38px] text-secondary">
                        $47.40
                      </p>
                    </div>
                  </div>
                  {/* Taxes */}
                  <div className="grid grid-cols-11">
                    <div className="col-start-1 col-end-5">
                      <p className="text-left font-normal text-[18px] leading-[25px] text-secondary">
                        Taxes
                      </p>
                    </div>
                    <div className="col-start-5 col-end-8 text-center">|</div>
                    <div className="col-start-8 col-end-12 ">
                      <p className="text-left font-bold text-[18px] leading-[25px] text-secondary">
                        $47.40
                      </p>
                    </div>
                  </div>

                  {/* Fees */}
                  <div className="grid grid-cols-11">
                    <div className="col-start-1 col-end-5">
                      <p className="text-left text-secondary">Fees</p>
                    </div>
                    <div className="col-start-5 col-end-8 text-center">|</div>
                    <div className="col-start-8 col-end-12 ">
                      <p className="text-left font-bold text-[18px] leading-[25px] text-secondary">
                        $47.40
                      </p>
                    </div>
                  </div>
                  {/* total */}
                  <div className="grid grid-cols-11">
                    <div className="col-start-1 col-end-5">
                      <p className="text-left font-normal text-[28px] leading-[38px] text-secondary">
                        Total
                      </p>
                    </div>
                    <div className="col-start-5 col-end-8 text-center">|</div>
                    <div className="col-start-8 col-end-12 ">
                      <p className="text-left font-bold text-[28px] leading-[38px] text-primary">
                        $47.40
                      </p>
                    </div>
                  </div>
                </div>
                {/* button */}
                <div className="lg:col-start-3 lg:col-end-4">
                  <button onClick={()=>{ navigate("/checkout", { replace: true })}} className="bg-primary w-[246px] h-[56px] rounded-[32px] font-bold text-[18px] leading-[25px] text-white">
                    Continue to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-start-5 lg:col-end-6">
            <section className=" relative bg-adss h-[497px] flex flex-col justify-center items-center px-2 py-2 bg-cover">
              <div className=" ">
                {/* <img src={landingImg} alt="" className="w-12 h-12" /> */}
                <div
                  className="bg-white px-2 py-2"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    boxShadow: "-2px 2px 8px rgba(94, 115, 136, 0.2)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <p className="text-center text-[#FFD541] text-[36px] leading-[36px] font-black">
                    Learn And Earn
                  </p>
                  <p className="text-center mt-[24px] mb-[32px] font-bold text-[18px] leading-[24px] text-white">
                    Earn up to $20/hr on campus!
                  </p>
                  <div className="flex justify-center">
                    <button className="bg-primary rounded-full w-[162px] h-[56px] inline-block mx-auto text-white font-bold">
                      Start Now!
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
