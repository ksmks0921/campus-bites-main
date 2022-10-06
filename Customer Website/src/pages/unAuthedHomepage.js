import React from "react";
import Layout from "../components/layout/unAuthedLayout";
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
export default function main() {
  return (
    <Layout>
      <div className="relative pb-16">
        <LandingSection />
        {/* section 1 */}
        {/* landing page */}
        {/* section 2 */}
        <div className="md:grid md:grid-cols-7 px-6 gap-4">
          {/* left side */}
          <div className="col-start-1 col-end-6 w-full">
            {/* option in the university */}
            <div className="flex justify-between items-center">
              <p className="leading-[24px] text-xl md:leading-[56px] md:text-[28px] font-bold text-secondary font-nunito w-[280px] md:w-auto">
                Options At The University Of St. Thomas
              </p>

              <a
                href=""
                className="text-primary flex no-underline items-center gap-1"
              >
                See All{" "}
                <ArrowNarrowRightIcon
                  className="h-4 w-4   text-primary"
                  aria-hidden="true"
                />
              </a>
            </div>

            <section className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <UniOptionCard />
              <UniOptionCard />
              <UniOptionCard />
              <UniOptionCard />
            </section>
            {/* Stat in the university */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8 mb-10">
              <StatsCard />
              <StatsCard />
              <StatsCard />
              <StatsCard />
            </section>
            {/* latest order */}
            <section className="">
              <div className="flex justify-between items-center">
                <p className="leading-[56px] text-[28px] font-bold text-secondary font-nunito">
                  Latest Orders
                </p>

                <a
                  href=""
                  className="text-primary flex no-underline items-center gap-1"
                >
                  See All{" "}
                  <ArrowNarrowRightIcon
                    className="h-4 w-4   text-primary"
                    aria-hidden="true"
                  />
                </a>
              </div>
              <hr />
              <LatestOrder />
              {/* <div className="grid grid-cols-4">
                <LOCard />
                <LOCard />
                <LOCard />
                <LOCard />
              </div> */}
            </section>
            {/* attention */}
            <section className="grid md:grid-cols-2 mt-[70px] gap-5">
              {/* left */}
              <div className="flex gap-2">
                {/* images here */}
                <img src={attention1} alt="" className="-mb-6" />
                <img src={attention2} alt="" className="-mt-6" />
              </div>
              {/* right */}
              <div className="font-nunito ml-4">
                <p className="text-[14px] leading-4 font-bold text-primary mt-4 md:mt-0">
                  ATTENTION
                </p>
                <div className="h-[2px] bg-primary mt-2 -ml-[100px] mb-[18px] w-[183px]"></div>
                <p className="font-bold text-[28px] leading-[26px] text-secondary mb-[28px]">
                  COVID-19 Response
                </p>
                <p className="font-normal text-[18px] leading-[26px] text-secondary mb-10">
                  CampusBItes is closely following recommendation from state
                  governments and CDC guidelines. We require all CampusBites
                  delivery personnel to wear a mask throughout the delivery
                  process. Additionally, all food bags will be sealed prior to
                  pickup. We will remain open as we intent to be a safer
                  alternative to group dining on campuses.
                </p>
                <button className="bg-primary text-white px-8 py-4 rounded-[32px] text-[18px] leading-[25px] font-bold">
                  Read More
                </button>
              </div>
            </section>
          </div>
          {/* right side */}
          <div className="col-start-6 col-end-8">
            {/* popular bites */}
            <section>
              <div className="flex justify-between items-center">
                <p className="text-[18px] leading-[56px] font-bold text-secondary">
                  Popular Bites
                </p>

                <a
                  href=""
                  className="text-primary flex no-underline items-center gap-1"
                >
                  See All{" "}
                  <ArrowNarrowRightIcon
                    className="h-4 w-4   text-primary"
                    aria-hidden="true"
                  />
                </a>
              </div>
              <hr />
              <PBCard />
              <PBCard />
              <PBCard />
              <PBCard />
              <PBCard />
            </section>
            {/* Ads */}
            <section className=" relative bg-hero h-[497px] flex flex-col justify-center items-center px-2 py-2">
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
                    <button className="bg-primary rounded-full px-4 py-4 inline-block mx-auto text-white font-bold">
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
