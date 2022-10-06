import React, { useContext } from "react";
import Logo from "../assets/CBfull1.png";
import { useState } from "react";
import Login from "../components/login";
import MainLayout from "../components/layout/mainLayout";
import IOrderCard from "../common/IOrderCard";
import AOrderCard from "../common/AOrderCard";
import ROrderCard from "../common/ROrderCard";
import {OrderStateContext} from '../contexts/orderStateContext'
import PastOrdersTable from '../components/pastOrders/pastOrdersTable'
export default function PastOrders() {
  const storeStatus = useContext(OrderStateContext);

  return (
    <MainLayout>
      <section className=" relative  font-nunito mt-[120px]  md:mt-[40px]">
        <PastOrdersTable  />
        {/* {isOpen && <Login isOpen={isOpen} setIsOpen={setIsOpen} />} */}
      </section>
    </MainLayout>
  );
}
