import React, { useContext } from "react";
import Logo from "../assets/CBfull1.png";
import { useState } from "react";
import Login from "../components/login";
import MainLayout from "../components/layout/mainLayout";
import IOrderCard from "../common/IOrderCard";
import AOrderCard from "../common/AOrderCard";
import ROrderCard from "../common/ROrderCard";
import {OrderStateContext} from '../contexts/orderStateContext'
export default function Serving() {
  const storeStatus = useContext(OrderStateContext);

  return (
    <MainLayout>
      <section className=" relative  font-nunito mt-[120px]  md:mt-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-10 gap-10 lg:gap-4">
          {/* incoming Orders*/}
          <div className="w-full">
            <div className="flex justify-between w-full items-center">
              <p className="text-[16px] leading-[40px] md:text-[20px] md:leading-[44px] xl:leading-[56px] xl:text-[28px] font-bold text-black whitespace-nowrap">
                Incoming Orders
              </p>
              {storeStatus.status === "open" ?
              <p className="text-[12px] leading-[40px] md:text-[20px] md:leading-[56px] text-primary">
                12 Orders
              </p>
              :
              <p className="text-[12px] leading-[40px] md:text-[20px] md:leading-[56px] text-[#FF4141]">
              Paused
            </p>
              }
            </div>
            <div className="h-[1px] bg-[#2C2C2C] w-full my-5 "></div>
            {storeStatus?.status === "open" ? 
            <div className="grid gap-5">

              <IOrderCard  two more/>
              <IOrderCard  more/>
              <IOrderCard two />
            </div>
            :
            <div className="bg-[#FFEDED] h-[200%]"></div>
            }
          </div>
          {/* // Active Orders */}
          <div className="w-full">
            <div className="flex justify-between w-full items-center">
              <p className="text-[16px] leading-[40px] md:text-[20px] md:leading-[44px] xl:leading-[56px] xl:text-[28px] font-bold text-black whitespace-nowrap">
                Active Orders
              </p>
              <p className="text-[12px] leading-[40px] md:text-[20px] md:leading-[56px] text-primary">
                12 Orders
              </p>
            </div>
            <div className="h-[1px] bg-[#2C2C2C] w-full my-5"></div>
            <div className="grid gap-5">
            <AOrderCard more/>
            <AOrderCard more completed={false}/>
            <AOrderCard />
</div>
          </div>
          {/* // Ready oders  */}
          <div className="w-full">
            <div className="flex justify-between w-full items-center">
              <p className="text-[16px] leading-[40px] md:text-[20px] md:leading-[44px] xl:leading-[56px] xl:text-[28px] font-bold text-black whitespace-nowrap">
                Ready Orders
              </p>
              <p className="text-[12px] leading-[40px] md:text-[20px] md:leading-[56px] text-primary">
                12 Orders
              </p>
            </div>
            <div className="h-[1px] bg-[#2C2C2C] w-full my-5"></div>
            <div className="grid gap-5">
           
            <ROrderCard type="pickup" picker="Anthony J." status="close" time="12:54" />
            <ROrderCard />
</div>  
          </div>
        </div>
        {/* {isOpen && <Login isOpen={isOpen} setIsOpen={setIsOpen} />} */}
      </section>
    </MainLayout>
  );
}
