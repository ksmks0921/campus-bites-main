import React from "react";
import Layout from "../components/layout";
import {
  SortAscendingIcon,
  UsersIcon,
  ArrowNarrowRightIcon,
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
import MenuLOCard from "../common/MenuLOCard";
import DDCard from "../common/DDCard";
import NewsCard from "../common/NewsCard";
import mapPinIcon from "../assets/map-pin.png";
import phoneIcon from "../assets/phone.png";
import contactImg from "../assets/contactImage.png";
import facebook from "../assets/facebook-white.png";
import instagram from "../assets/instagram-white.png";
import twitter from "../assets/twitter-white.png";
import moreTextIcon from "../assets/moretext.png";
export default function ContactUs() {
  return (
    <Layout>
      <div className="relative pt-[100px] lg:pt-4 pb-16 bg-white font-nunito">
        {/* section 1 */}
        {/* landing page */}
        {/* section 2 */}
        <div className="md:grid lg:grid-cols-5 px-6 gap-4">
          {/* left side */}
          <div className="lg:col-start-1 lg:col-end-5 w-full">
            <div className=" w-full justify-between items-center mb-5">
              <p className="text-[28px] leading-[56px] font-bold text-secondary">
                Contact
              </p>
              <div className="w-full h-[1px] bg-secondary"></div>
            </div>

            {/* latest order */}
            <section className="md:flex gap-4">
              {/* image here */}
              <div className="">
                <img
                  src={contactImg}
                  alt=""
                  className="w-full md:w-auto object-contain"
                />
              </div>
              {/* text content here */}
              <div className="">
                <p className=" text-[28px] leading-[50px] mb-6 text-primary font-bold">
                  Easy to Eat, Easy to Earn.
                </p>
                {/* <div className="flex gap-5 items-center mt-8">
                  <div className="px-3 py-[10px] flex justify-center items-center bg-[#F1F8F2] rounded-[8px]">
                    <img src={mapPinIcon} alt="" className="" />
                  </div>

                  <p className="text-[18px] laeding-[22px] font-bold text-secondary">
                    10255{" "}
                    <span className="font-normal">
                      {" "}
                      Greenbriar Road #114 Minnetonka,
                    </span>{" "}
                    MN 55305
                  </p>
                </div>
                <div className="flex gap-5 items-center mt-5">
                  <div className="px-3 py-[10px] flex justify-center items-center bg-[#F1F8F2] rounded-[8px]">
                    <img src={phoneIcon} alt="" className="" />
                  </div>

                  <p className="text-[18px] laeding-[22px] font-bold text-secondary">
                    612-655-7829
                  </p>
                </div> */}
                {/* social section */}
                <div className="flex gap-3 items-center relative mt-6 mb-8">
                  <p className="text-[18px] leading-[22px] font-bold text-secondary text-right">
                    Our Social
                    <br /> Life
                  </p>
                  <div className="h-[56px] w-[2px] bg-secondary"></div>
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-[20px] bg-primary flex justify-center items-center">
                      <img src={twitter} alt="" className="" />
                    </div>
                    <div className="h-10 w-10 rounded-[20px] bg-primary flex justify-center items-center">
                      <img src={facebook} alt="" className="" />
                    </div>
                    <div className="h-10 w-10 rounded-[20px] bg-primary flex justify-center items-center">
                      <img src={instagram} alt="" className="" />
                    </div>
                  </div>
                </div>
                {/* contact box */}
                <div
                  className="relative overflow-hidden bg-[#EBEBEB] rounded-[56px] px-8 py-6"
                  style={{
                    background: "#EBEBEB",
                    boxShadow: "0px 0px 28px rgba(51, 70, 81, 0.12)",
                    borderRadius: "56px",
                  }}
                >
                  <div className="z-[10]">
                    <div className="flex justify-center gap-10 z-[1000]">
                      <p className="z-[1000] text-[28px] leading-[26px] font-black text-primary">
                        Questions?
                      </p>
                      <p className="text-center z-10 text-[18px] leading-[22px] font-bold text-secondary">
                        Give Us A Shout!
                      </p>
                    </div>
                    <div className="z-10 mt-5">
                      <div className="grid grid-cols-2 gap-x-10 gap-y-8 ">
                        {/* Name */}
                        <div className="z-10">
                          <div className="mt-1">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="shadow-sm focus:ring-white focus:border-white block w-full sm:text-sm border-0 border-b-2  bg-transparent"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        {/* Student email */}
                        <div className="z-10">
                          <div className="mt-1 ">
                            <input
                              type="text"
                              name="email"
                              id="email"
                              className="z-50 shadow-sm focus:ring-white focus:border-white block w-full sm:text-sm border-0 border-b-2  bg-transparent"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        {/* description */}
                        <div className="col-span-2 z-10">
                          <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                              type="text"
                              name="description"
                              id="phonenumber"
                              className="block w-full pr-8 shadow-sm focus:ring-white focus:border-white sm:text-sm border-0 border-b-2  bg-transparent"
                              placeholder="Description"
                              defaultValue="Description"
                              // aria-invalid="true"
                              // aria-describedby="email-error"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none -bottom-2">
                              <img
                                src={moreTextIcon}
                                alt=""
                                className="h-3 w-3"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:flex gap-3 col-span-2 items-center z-[1000] mt-5">
                      <div className="flex justify-start z-10">
                        <button className="bg-primary mx-auto md:mx-0 rounded-full w-[147px] h-[56px] inline-block  text-white font-bold z-[1000]">
                          Send
                        </button>
                      </div>
                      <div className="flex-1 z-10">
                        <p className="text-[12px] leading-5 font-normal z-10">
                          {" "}
                          Clicking on the button, you agree to the CampusBites{" "}
                          <br />
                          <span className="text-primary">
                            {" "}
                            Terms of Service
                            <span className="text-primary">and</span> Privacy
                            Policy
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" absolute -right-[20%] -top-[20%]   h-[393px] w-[393px] rounded-full bg-white z-0"></div>
                </div>
              </div>
            </section>
          </div>
          {/* right side */}
          <div className="lg:col-start-5 lg:col-end-6">
            {/* ads */}
            <section className=" relative bg-adss bg-cover bg-no-repeat h-[497px] flex flex-col justify-center items-center px-2 py-2">
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
