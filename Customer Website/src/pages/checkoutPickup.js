import React, { useState } from "react";
import Layout from "../components/layout/";
import {
  SortAscendingIcon,
  UsersIcon,
  ArrowNarrowLeftIcon,
  PlusIcon,
} from "@heroicons/react/solid";

import { classNames } from "../utils";
import { CheckIcon, ThumbUpIcon, UserIcon } from "@heroicons/react/solid";
import Order from "../components/order";
import TimelineDelivery from "../components/timeline/delivery";
import TimelinePickup from "../components/timeline/pickup";


export default function CheckoutDelivery() {
  const [type, setType] = useState("delivery");
  const [payment, setPayment] = useState("campus");
  const handleTypeChange = (e) => {
    console.log({ e });
    if (e.target.name === "delivery" && e.target.checked === true) {
      setType("delivery");
    } else if (e.target.name === "delivery" && e.target.checked === false) {
      setType("pickup");
    } else if (e.target.name === "pickup" && e.target.checked === true) {
      setType("pickup");
    } else if (e.target.name === "pickup" && e.target.checked === false) {
      setType("delivery");
    } else if (e.target.name === "card" && e.target.checked === true) {
      setPayment("card");
    } else if (e.target.name === "card" && e.target.checked === false) {
      setPayment("campus");
    } else if (e.target.name === "campus" && e.target.checked === true) {
      setPayment("campus");
    } else if (e.target.name === "campus" && e.target.checked === false) {
      setPayment("card");
    }
  };
  return (
    <Layout>
      <div className="relative pb-16 px-5 md:px-10 font-nunito pt-[100px] bg-white lg:pt-4 ">
        <div className="">
          <a
            href="/cart"
            className="flex items-center no-underline text-secondary text-[18px] leading-6"
          >
            <ArrowNarrowLeftIcon className="h-4 w-6 mr-1 text-primary" />
            Back to Cart
          </a>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-start-1 lg:col-end-4 w-full">
            <div className="text-secondary text-[28px] md:text-[28px] md:leading-[56px] font-bold">
              Order in Progress
            </div>
            <hr />
          <TimelinePickup/>
          </div>
          <div className="lg:col-start-4 lg:col-end-6">
            <Order type={type} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
