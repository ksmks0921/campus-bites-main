import React from "react";
import Layout from "../components/layout";
import {
  SortAscendingIcon,
  UsersIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";
import PBCard from "../common/PBCard";
import newsMainImage from "../assets/newsMainImage.png";

export default function main() {
  return (
    <Layout>
      <div className="relative pt-[100px] lg:pt-4 pb-16 bg-white font-nunito">
        {/* section 1 */}
        {/* section 2 */}
        <div className="md:grid lg:grid-cols-7 px-6 gap-4">
          {/* left side */}
          <div className="lg:col-start-1 lg:col-end-6 w-full mb-5">
            <div className="flex w-full justify-between items-center">
              <p className="text-[28px] leading-[56px] font-bold text-secondary">
                News
              </p>
            </div>
            <div className="w-full h-[1px] bg-secondary mb-5"></div>

            {/* latest order */}
            <section className="mt-8">
              <p className="text-[18px] leading-[16px] text-primary font-normal mb-5">
                22th, March 2022
              </p>
              <p className="text-[28px] leading-[22px] font-bold text-secondary mb-5">
                CampusBites to Launch at University A Next Month!
              </p>
              <div className="relative mb-5">
                <img src={newsMainImage} alt="" className="z-10 h-[490px]" />
              </div>
              <p className="text-[18px] leading-[26px] font-normal text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                consectetur bibendum ultrices leo scelerisque cursus. Tristique
                sed nisl nibh mauris habitant. Erat massa fermentum eu aliquet
                proin tristique malesuada id. Tellus quis ut nibh dis ut.
                Elementum ut aenean felis et donec. Malesuada egestas vitae leo
                euismod. Morbi orci id est pulvinar cursus purus elementum,
                consequat.
                <br />
                <br /> At pellentesque nulla ullamcorper id vitae, magna
                pretium. Egestas neque, cursus pharetra, egestas. Neque
                vulputate velit turpis nisl ullamcorper interdum ornare. Non
                netus pharetra id morbi ac, ut facilisi duis urna. Eros, aliquet
                magna ligula urna turpis. Sit euismod dui vulputate consectetur
                amet. Adipiscing viverra cursus vulputate sodales vel ac eu.
                <br />
                <br />
                Amet natoque fermentum adipiscing facilisis tortor metus velit
                nunc tincidunt. Tempus, sit quis quis dui eget. Accumsan
                senectus penatibus vel imperdiet nisi. Nunc, ut posuere auctor
                vestibulum, mollis. Sodales donec sed sollicitudin mattis vel
                nulla quam pellentesque.
              </p>
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
