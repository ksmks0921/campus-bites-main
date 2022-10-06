import React from "react";
import Dish from "../../assets/newsImage.png";
export default function NewsCard({
  title = "CampusBites to Launch at University A Next Month!",
  excerpt = "Proin ut aliquet nisl, quis aliquet ligula. Nam dictum mauris sed nibh convallis bibendum. Donec justo magna, auctor at nisl vel, accumsan tristique justo.",
  date="22th, March 2022"
}) {
  return (
    <div className="font-nunito relative max-w-[280px]">
      <a href="/news/content" className="no-underline relative">
        <div className="relative">
          <img src={Dish} alt="" className="" />
          <div
              className="absolute bottom-0 h-[104px] w-[280px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
              }}
            ></div>
        </div>
        <div className="">
          <p className="text-secondary text-[14px] uppercase font-bold text-left mb-5">
            {title}
          </p>
          <p className="font-normal leading-5 text-[14px]  text-secondary line-clamp-4">
            {excerpt}
          </p>
          <p className="text-primary text-[14px] leading-[16px] mt-5">{date}</p>
          {/* <p className="px-2 py-[6px] bg-primary text-white inline-block rounded-full text-[14px] leading-4 mt-2">
            $10.46
          </p> */}
        </div>
      </a>
    </div>
  );
}
