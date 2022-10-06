import React from 'react'
import OrderItemCard from '../../common/OrderItemCard'

export default function Order({type = "pickup"}) {
  return (
    <div
    className="px-10 py-12"
    style={{
      background: "#FFFFFF",
      boxShadow: "0px 8px 28px rgba(94, 115, 136, 0.12)",
      borderRadius: "8px",
    }}
  >
    <div className="w-full">
      <p className="text-[18px] font-bold text-secondary mb-5">
        Your Order
      </p>
      <hr />
    </div>
    <div className="grid gap-x-10 gap-y-2 ">
      <OrderItemCard />
      <OrderItemCard />
      <OrderItemCard />
    </div>
    <div className="w-full">
      <p className="text-[18px] leading-[56px] font-bold text-secondary">
        Delivery
      </p>
      <hr />
    </div>
    {type === "pickup" && (
      <div className="flex justify-between items-center mt-3">
        <p className="font-normal text-[14px] text-gray">
          Pickup |{" "}
          <span className="font-bold text-primary">7 p.m</span>{" "}
        </p>
        <p className="font-bold text-[14px] text-secondary">Free</p>
      </div>
    )}
    {type === "delivery" && (
      <div className="flex justify-between mt-3">
        <div className="flex gap-1">
          <p className="font-normal text-[14px] text-gray">
            Delivery Service
          </p>
          <div className="">
            <p className="font-bold text-primary text-[14px]">
              | St. Paul Campus{" "}
            </p>
            <p className="font-bold text-primary text-[14px]">
              | special instructions{" "}
            </p>
          </div>
        </div>
        <p className="font-bold text-[14px] text-secondary">Free</p>
      </div>
    )}
    <div className="flex justify-between mt-5">
      <p className="text-left font-bold text-[28px] leading-[38px] text-secondary">
        Total
      </p>
      <p className="text-left font-bold text-[28px] leading-[38px] text-primary">
        $47.40
      </p>
    </div>
  </div>
  )
}
