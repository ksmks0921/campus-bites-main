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
export default function main() {
  return (
    <Layout>
      <div className="relative pt-[100px] lg:pt-4 pb-16 bg-white">
        {/* section 1 */}
        {/* landing page */}
        {/* section 2 */}
        <div className="md:grid lg:grid-cols-7 px-6 gap-4">
          {/* left side */}
          <div className="lg:col-start-1 lg:col-end-6 w-full">
            <div className="flex w-full justify-between items-center">
              <p className="text-[28px] leading-[56px] font-bold text-secondary">
                Northsider
              </p>
              <div>
                <select
                  id="country"
                  name="country"
                  placeholder="Filter by"
                  defaultValue="Dishes by Category"
                  className="focus:ring-[#C6E9CB] border-[1px] border-[#C6E9CB] focus:border-[#C6E9CB] relative block rounded-[4px] bg-transparent focus:z-10 sm:text-sm  bg-[#FAFFFA] w-[264px] h-[42px]"
                >
                  <option>Pasta & risotto</option>
                  <option>Salad</option>
                  <option>Bread & doughs</option>
                  <option>Curry</option> <option>Vegetable sides</option>
                  <option>Soup</option> <option>Antipasti</option>
                  <option>Roast</option>
                </select>
              </div>
            </div>

            {/* latest order */}
            <section className="">
              {/* <div className="flex justify-between items-center">
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
              <hr /> */}
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
                <MenuLOCard />
              </div>
              {/* <LatestOrder /> */}
              {/* <div className="grid grid-cols-4">
                <LOCard />
                <LOCard />
                <LOCard />
                <LOCard />
              </div> */}
            </section>
          </div>
          {/* right side */}
          <div className="lg:col-start-6 lg:col-end-8">
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
              <hr className="border-secondary" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-1">
                <PBCard />
                <PBCard />
                <PBCard />
                <PBCard />
                <PBCard />
              </div>
            </section>
            {/* Deal day */}
            <section>
              <div className="flex justify-between items-center">
                <p className="text-[18px] leading-[56px] font-bold text-secondary">
                  Deal Days!
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
              <hr className=" border-secondary" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-10 mt-5">
                <DDCard />
                <DDCard />
                <DDCard />
              </div>
            </section>
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
