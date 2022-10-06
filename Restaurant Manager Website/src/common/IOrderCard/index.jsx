import { CheckIcon, XIcon } from "@heroicons/react/outline";
import React from "react";

export default function IOrderCard({ more = false, two=false }) {
  return (
    <div
      className="font-nunito"
      style={{
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 8px 28px rgba(94, 115, 136, 0.12)",
        borderRadius: "8px",
        padding: "22px 20px",
      }}
    >
      {/* top */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col md:flex-row md:items-center md:gap-5">
          <p className="text-[18px] leading-[32px] font-bold text-secondary">
            Order Number
          </p>
          <div className="w-[2px] h-4 bg-[#2C2C2C] hidden md:block "></div>
          <p className="text-[18px] leading-[32px] font-bold text-primary text-left">
            #234
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-red-500 h-8 w-8 rounded-full flex justify-center items-center">
            <XIcon className="h-6 w-6 text-white" />
          </button>
          <button className="bg-green-500 h-8 w-8 rounded-full flex justify-center items-center">
            <CheckIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
      <div className="h-[1px] bg-[#2C2C2C] w-full my-1"></div>

      {/* bottom */}
      <div className="w-full mt-3">
        <div className="item grid grid-cols-12 gap-2 my-1 items-center">
          <div className="col-start-1 col-end-2">
            <p className="text-primary text-[14px] leading-[16px] font-bold">
              01.
            </p>
          </div>
          <div className="col-start-2 col-end-10 ">
            <p className="text-secondary text-[14px] leading-[16px] font-bold">
              Build Your Own Pizza
            </p>
            {/* {more && 
                    <p className="">8 Inch / Extra Sauce / No Tomato</p>
                   } */}
          </div>
          <div className="col-start-10 col-end-13 grid grid-cols-2 gap-2">
            <div className="w-full flex items-center justify-between">
              <p className="font-bold text-[14px] leading-[16px] text-[#A2B1C0]">
                x1
              </p>
              <div className="h-4 w-[1px] bg-[#A2B1C0]"></div>
            </div>
            <p className="font-bold text-[14px] leading-[16px] text-black">
              $10.46
            </p>
          </div>
        </div>
        {more && (
          <div className="item grid grid-cols-12 gap-2 my-1">
            <div className="col-start-2 col-end-10 ">
              <p className="text-secondary text-[14px] leading-[16px] font-normal">
                8 Inch / Extra Sauce / No Tomato
              </p>
            </div>
          </div>
        )}
        {/* to be deleted */}
        {two && (
          <div className="item grid grid-cols-12 gap-2 my-1 items-center">
            <div className="col-start-1 col-end-2">
              <p className="text-primary text-[14px] leading-[16px] font-bold">
                02.
              </p>
            </div>
            <div className="col-start-2 col-end-10 ">
              <p className="text-secondary text-[14px] leading-[16px] font-bold">
                Build Your Own Pizza
              </p>
              {/* {more && 
                    <p className="">8 Inch / Extra Sauce / No Tomato</p>
                } */}
            </div>
            <div className="col-start-10 col-end-13 grid grid-cols-2 gap-2">
              <div className="w-full flex items-center justify-between">
                <p className="font-bold text-[14px] leading-[16px] text-[#A2B1C0]">
                  x1
                </p>
                <div className="h-4 w-[1px] bg-[#A2B1C0]"></div>
              </div>
              <p className="font-bold text-[14px] leading-[16px] text-black">
                $10.46
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="w-full mt-3">
        <div className="item grid grid-cols-12 gap-2">
          <div className="col-start-10 col-end-13 grid grid-cols-2 gap-2">
            <div className="w-full flex items-center justify-between">
              <p className="font-bold text-[14px] leading-[16px] text-primary ">
                Total
              </p>
              <div className="h-4 w-[1px] bg-[#A2B1C0]"></div>
            </div>
            <p className="font-bold text-[14px] leading-[16px] text-primary">
              $10.46
            </p>
          </div>
        </div>
      </div>
      {/* Total */}
    </div>
  );
}
