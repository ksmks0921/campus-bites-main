import { CheckIcon, XIcon } from "@heroicons/react/outline";
import React from "react";
import { classNames } from "../../utils";

export default function ROrderCard({
  time = "12:00",
  picker = "Eric C.",
  type = "delivery",
  status = "waiting",
}) {
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
        <div className="flex items-center gap-5">
          <p className="text-[18px] leading-[32px] font-bold text-secondary">
            Order Number
          </p>
          <div className="w-[2px] h-4 bg-[#2C2C2C]   "></div>
          <p className="text-[18px] leading-[32px] font-bold text-primary">
            #234
          </p>
        </div>
      </div>
      <div className="h-[1px] bg-[#2C2C2C] w-full my-1"></div>

      {/* bottom */}
      <div className="w-full mt-3">
        <div className="item grid grid-cols-2 md:grid-cols-4 gap-2 my-1 items-center">
          <div className="md:col-start-1 md:col-end-2">
            <p className="text-secondary text-[14px] leading-[16px] font-bold">
              {type ==="delivery" ? "Delivery":"Pickup"}
            </p>
          </div>
          {type ==="pickup" && 
          <div className="">
            <p className="text-secondary text-[14px] leading-[16px] font-bold">
              {time}
            </p>
          </div>
          }
          <div className="">
              <p className="font-normal text-[14px] leading-[16px] text-secondary">
                {picker}
              </p>
          </div>
          <div className="md:col-start-4 md:col-end-5">
              <p className={classNames(status ==="waiting"?"text-primary":"text-[#FF4141]","font-bold text-[14px] leading-[16px] capitalize")}>
                {status}
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
