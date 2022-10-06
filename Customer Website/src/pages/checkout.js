import React, { useState } from "react";
import Layout from "../components/layout/";
import {
  SortAscendingIcon,
  UsersIcon,
  ArrowNarrowLeftIcon,
  PlusIcon,
} from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

import { classNames } from "../utils";
import Order from "../components/order";
export default function Checkout() {
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
  let navigate = useNavigate();
  const buildings = [
    "Ireland Hall Lobby",
    "Dowling Hall Lobby",
    "Grace Hall",
    "Morrison Apartments",
    "Anderson Gym",
    "Library",
  ];
  return (
    <Layout>
      <div className="relative pb-16 px-10 font-nunito pt-[100px] bg-white lg:pt-4 ">
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
          <div className="lg:col-start-1 lg:col-end-4 w-full order-2 md:order-1">
            <div className="text-primary text-[30px] md:text-[36px] md:leading-[56px] font-bold">
              Checkout
            </div>
            {/* step 1 */}
            <div className="">
              <p className="text-[18px] leading-[56px] font-bold text-primary">
                STEP 1.{" "}
                <span className="ml-3 text-secondary">
                  Personal Information
                </span>{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 ">
                {/* Name */}
                <div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="shadow-sm focus:ring-white focus:border-white block w-full sm:text-sm border-0 border-b-2  bg-transparent"
                      placeholder="Name"
                    />
                  </div>
                </div>
                {/* Student email */}
                <div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="shadow-sm focus:ring-white focus:border-white block w-full sm:text-sm border-0 border-b-2  bg-transparent"
                      placeholder="Student Email"
                    />
                  </div>
                </div>
                {/* phone number */}
                <div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="shadow-sm focus:ring-white focus:border-white block w-full sm:text-sm border-0 border-b-2  bg-transparent"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* step 2 */}
            <div className="">
              <p className="text-[18px] leading-[56px] font-bold text-primary">
                STEP 2. <span className="ml-3 text-secondary">Delivery</span>{" "}
              </p>
              <div className="">
                {/* Sauce on Side */}
                <div className="flex justify-between items-center my-2">
                  <div className="flex items-center h-5 gap-2 ">
                    <input
                      checked={type === "pickup"}
                      onChange={(e) => {
                        handleTypeChange(e);
                      }}
                      id="pickup"
                      name="pickup"
                      type="checkbox"
                      className="focus:ring-primary h-4 w-4 text-primary border-primary rounded"
                    />
                    <label
                      htmlFor="pickup"
                      className={classNames(
                        "text-[18px] leading-[25px] ",
                        type === "pickup" ? "text-primary" : "text-secondary"
                      )}
                    >
                      Pickup
                    </label>
                  </div>
                </div>
                {/* Double Cheese */}
                <div className="flex justify-between items-center my-2">
                  <div className="flex items-center h-5 gap-2 ">
                    <input
                      checked={type === "delivery"}
                      onChange={(e) => {
                        handleTypeChange(e);
                      }}
                      id="delivery"
                      name="delivery"
                      type="checkbox"
                      className="focus:ring-primary h-4 w-4 text-primary border-primary rounded"
                    />
                    <label
                      htmlFor="delivery"
                      className={classNames(
                        "text-[18px] leading-[25px] ",
                        type === "delivery" ? "text-primary" : "text-secondary"
                      )}
                    >
                      Delivery Service
                    </label>
                  </div>
                </div>
                {type === "pickup" && (
                  <div className="mt-1 col-span-2 w-full">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="shadow-sm focus:ring-white focus:border-white block w-full sm:text-sm border-0 border-b-2  bg-transparent"
                      placeholder="Select Pickup Time"
                    />
                  </div>
                )}
                {type === "delivery" && (
                  <div className="col-span-2 grid-cols-1 grid md:grid-cols-2 gap-x-10 gap-y-8">
                    <div className="w-full">
                      <div className="flex justify-between w-full">
                        <p className="">Building</p>
                        {/* <button className="flex items-center text-[18px] leading-[56px]"><PlusIcon className="mr-1"/>Offer Add Ons</button> */}
                      </div>
                      <select
                        // type="text"
                        name="name"
                        id="name"
                        className="mt-1 border-[1px] border-[#C6E9CB] focus:border-[#C6E9CB] relative block  bg-transparent focus:z-10 sm:text-sm  bg-[#FAFFFA] w-full  rounded-[4px]"
                        placeholder="Building Name"
                      >
                        {buildings.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between w-full">
                        <p className="">Special Instructions</p>
                        {/* <button className="flex items-center text-[18px] leading-[56px]"><PlusIcon className="mr-1"/>Offer Add Ons</button> */}
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md w-full bg-[#FAFFFA]"
                          placeholder="Type here (40 characters or fewer)"
                          aria-describedby="Type here (40 characters or fewer)"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              .
            </div>
            {/* step 3 */}
            <div className="">
              <p className="text-[18px] leading-[56px] font-bold text-primary">
                STEP 3. <span className="ml-3 text-secondary">Payment</span>{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-x-10">
                {/* left side */}
                <div className="">
                  {/* Sauce on Side */}
                  <div className="flex justify-between items-center my-2">
                    <div className="flex items-center h-5 gap-2 ">
                      <input
                        checked={payment === "card"}
                        onChange={(e) => {
                          handleTypeChange(e);
                        }}
                        id="card"
                        name="card"
                        type="checkbox"
                        className="focus:ring-primary h-4 w-4 text-primary border-primary rounded"
                      />
                      <label
                        htmlFor="card"
                        className={classNames(
                          "text-[18px] leading-[25px] ",
                          payment === "card" ? "text-primary" : "text-secondary"
                        )}
                      >
                        Pay with Credit/Debit Card
                      </label>
                    </div>
                  </div>
                  {/* Double Cheese */}
                  <div className="flex justify-between items-center my-2">
                    <div className="flex items-center h-5 gap-2 ">
                      <input
                        checked={payment === "campus"}
                        onChange={(e) => {
                          handleTypeChange(e);
                        }}
                        id="campus"
                        name="campus"
                        type="checkbox"
                        className="focus:ring-primary h-4 w-4 text-primary border-primary rounded"
                      />
                      <label
                        htmlFor="campus"
                        className={classNames(
                          "text-[18px] leading-[25px] ",
                          payment === "campus"
                            ? "text-primary"
                            : "text-secondary"
                        )}
                      >
                        Pay with Campus Currency
                      </label>
                    </div>
                  </div>
                  {/* <div className="lg:col-start-3 lg:col-end-4 mt-[52px]">
                    <button
                      onClick={() => {
                        navigate(
                          type === "pickup"
                            ? "/checkout-pickup"
                            : "/checkout-delivery",
                          { replace: true }
                        );
                      }}
                      className="bg-primary w-[246px] h-[56px] rounded-[32px] font-bold text-[18px] leading-[25px] text-white"
                    >
                      Continue to Checkout
                    </button>
                  </div> */}
                </div>
                {/* right side */}
                <div className="w-full">
                  <div className="flex justify-between w-full">
                    <p className="">Promo Code</p>
                    {/* <button className="flex items-center text-[18px] leading-[56px]"><PlusIcon className="mr-1"/>Offer Add Ons</button> */}
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md  bg-[#FAFFFA]"
                      placeholder="Type here (40 characters or fewer)"
                      aria-describedby="Type here (40 characters or fewer)"
                    />
                  </div>
                  <button className="bg-primary w-[123px] h-[32px] rounded-[32px] font-bold text-[12px] leading-[25px] text-white mt-4">Verify</button>
                </div>
                <div className=" mt-[52px] mx-auto md:mx-0">
                    <button
                      onClick={() => {
                        navigate(
                          type === "pickup"
                            ? "/checkout-pickup"
                            : "/checkout-delivery",
                          { replace: true }
                        );
                      }}
                      className="bg-primary w-[246px] h-[56px] rounded-[32px] font-bold text-[18px] leading-[25px] text-white"
                    >
                      Continue to Checkout
                    </button>
                  </div>
              </div>
            </div>
          </div>
          <div className="lg:col-start-4 lg:col-end-6 order-1 md:order-2">
            <Order type={type} />
          </div>
          
        </div>
      </div>
    </Layout>
  );
}
