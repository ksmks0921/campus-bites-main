import React from "react";
import Slider from "react-slick";

export default function LandingSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mb-8">
      <Slider {...settings}>
        <section className=" relative bg-main bg-cover ">
          <div className=" flex flex-col justify-center items-center px-2 pt-[40px] pb-[30px]">
            {/* <img src={landingImg} alt="" className="w-12 h-12" /> */}
            <div
              className="bg-white px-[45px] pb-[28px] pt-[36px] font-nunito"
              style={{
                background: "rgba(255, 255, 255, 0.2) no-repeat",
                // backgroundRepeat:"no-repeat no-repeat",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                boxShadow: "-2px 2px 8px rgba(94, 115, 136, 0.2)",
                backdropFilter: "blur(12px)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
              }}
            >
              <p className="text-center text-[#FFD541] text-[18px] leading-[56px] font-bold">
                LUNCH JUST GOT EASIER!
              </p>
              <p className="text-center mt-[24px] mb-[32px] font-black text-[38px] md:text-[56px] leading-[46px] md:leading-[56px] text-white">
                Skip The Line,
                <br /> Be On Time!
              </p>
              <div className="flex justify-center">
                <button className="bg-primary rounded-full w-[162px] h-[56px] inline-block mx-auto text-white font-bold">
                  Order Now!
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className=" relative bg-main bg-cover ">
          <div className=" flex flex-col justify-center items-center px-2 pt-[40px] pb-[30px]">
            {/* <img src={landingImg} alt="" className="w-12 h-12" /> */}
            <div
              className="bg-white px-[45px] pb-[28px] pt-[36px] font-nunito"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                boxShadow: "-2px 2px 8px rgba(94, 115, 136, 0.2)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p className="text-center text-[#FFD541] text-[18px] leading-[56px] font-bold">
                LUNCH JUST GOT EASIER!
              </p>
              <p className="text-center mt-[24px] mb-[32px] font-black text-[38px] md:text-[56px] leading-[46px] md:leading-[56px] text-white">
                Skip The Line,
                <br /> Be On Time!
              </p>
              <div className="flex justify-center">
                <button className="bg-primary rounded-full w-[162px] h-[56px] inline-block mx-auto text-white font-bold">
                  Order Now!
                </button>
              </div>
            </div>
          </div>
        </section>
      </Slider>
    </div>
  );
}
