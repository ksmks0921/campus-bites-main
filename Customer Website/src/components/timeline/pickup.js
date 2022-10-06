import React from "react";
import Rating from "./rating";
import phoneIcon from "../../assets/phone.png";
import checkIcon from "../../assets/check.png";
import clockIcon from "../../assets/clock.png";
import { CheckIcon } from "@heroicons/react/solid";

export default function TimelinePickup() {
  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="flow-root font-nunito mt-5">
      <ul class="-mb-8">
        <li className="last:mb-[60px]">
          <div class="relative pb-8">
            <span
              class="absolute top-4 left-6 -ml-px h-full last:h-[100px] w-0.5 border-[#C6E9CB] border-dashed border-2"
              aria-hidden="true"
            ></span>
            <div class="relative flex space-x-3">
              <div>
                <span class="h-12 w-12 rounded-full bg-white text-primary  border-dashed border-[#C6E9CB] border-2 flex items-center justify-center ring-8 ring-white py-4 px-4">
                  {/* <!-- Heroicon name: solid/user --> */}
                  <p className="text-[16px] md:text-[28px] ">1</p>
                </span>
              </div>
              <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p class="text-[16px] md:text-[28px] text-secondary font-bold">
                    Your Order #125432 in progress.
                  </p>
                  <div className="flex gap-3 items-center mt-8">
                    <div className="px-3 py-[10px] flex justify-center items-center bg-[#F1F8F2] rounded-[8px]">
                      <img src={clockIcon} alt="" className="" />
                    </div>
                    <p className="text-[12px] md:text-[18px] leading-[24px] font-bold text-secondary">
                      Pickup Time
                    </p>
                    <div className=" border-r-[1px] h-10 border-secondary"></div>
                    <p className="text-[12px] md:text-[18px] leading-[22px] font-bold text-primary">
                      24th, March 2022 - 7 p.m
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="relative pb-8">
          <span
              class="absolute top-4 left-6 -ml-px h-full w-0.5 border-[#C6E9CB] border-dashed border-2 last:h-0"
              aria-hidden="true"
            ></span>
            <div class="relative flex space-x-3">
              <div>
                <span class="h-12 w-12 rounded-full bg-white text-primary  border-dashed border-[#C6E9CB] border-2 flex items-center justify-center ring-8 ring-white py-4 px-4">
                  
                  <p className="text-[16px] md:text-[28px] ">2</p>
                </span>
              </div>
              <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                <p class="text-[16px] md:text-[28px] text-secondary font-bold">
                    Order is ready for pickup
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="relative pb-8">
            <div class="relative flex space-x-3">
              <div>
              <span class="h-12 w-12 rounded-full bg-white text-primary  border-dashed border-[#C6E9CB] border-2 flex items-center justify-center ring-8 ring-white py-2 px-2">
                <CheckIcon style={{height:"48px",width:"48px"}} className=" font-bold" />
                </span>
               
              </div>
              <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p class="text-[16px] md:text-[28px] leadinng-[30px] text-primary font-bold">
                    Thank you for your Order!
                  </p>
                  {/* <Rating /> */}
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
