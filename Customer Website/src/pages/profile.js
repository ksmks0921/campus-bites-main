import React, { useState, useRef } from "react";
import Layout from "../components/layout/";
import {
  SortAscendingIcon,
  UsersIcon,
  ArrowNarrowLeftIcon,
  PlusIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/solid";
import { Tab } from "@headlessui/react";

import { classNames } from "../utils";
import { CheckIcon, ThumbUpIcon, UserIcon } from "@heroicons/react/solid";
import Order from "../components/order";
import TimelineDelivery from "../components/timeline/delivery";
import SideAds from "../components/sideAds";
import editIcon from "../assets/editIcon.png";
import MyOrders from "../components/profile/myOrders";
import Example from "../components/profile/test";
export default function Profile() {
  const [type, setType] = useState("delivery");
  const [payment, setPayment] = useState("campus");
  const [userImg, setUserImg] = useState("");

  return (
    <Layout>
      <div className=" relative pb-16 px-5 md:px-10 font-nunito pt-[100px] bg-white lg:pt-6 ">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-start-1 lg:col-end-5 w-full overflow-x-auto">
            {/* tab Personal information */}
            <Tab.Group>
              <Tab.List className="flex px-1  bg-white border-l-2 border-b-2 border-l-green-500 border-b-green-500">
                <Tab
                  key={"tab1"}
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? "bg-white shadow "
                        : "text-[#C6E9CB] hover:bg-white/[0.12] hover:text-primary",
                      " py-2.5 text-[16px] md:text-[28px] leading-[40px] md:leading-[56px] font-medium text-primary  border-r-2 border-green-500 px-4 md:px-7",
                      ""
                    )
                  }
                >
                  Account
                </Tab>
                <Tab
                  key={"tab2"}
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? "bg-white shadow "
                        : "text-[#C6E9CB] hover:bg-white/[0.12] hover:text-primary",
                      " py-2.5 text-[16px] md:text-[28px] leading-[40px] md:leading-[56px] font-medium text-primary border-r-2 border-green-500 px-4 md:px-7",
                      ""
                    )
                  }
                >
                  My Orders
                </Tab>
                {/* ))} */}
              </Tab.List>
              <Tab.Panels className="mt-2">
                {/* {Object.values(categories).map((posts, idx) => ( */}
                <Tab.Panel
                  key={"tab1"}
                  className={classNames("bg-white rounded-xl p-3", "")}
                >
                  <PersonalInformation />
                </Tab.Panel>
                <Tab.Panel
                  key={"tab2"}
                  className={classNames("bg-white rounded-xl p-3", "")}
                >
                  <div className="w-full "><MyOrders /></div>
                </Tab.Panel>
                {/* ))} */}
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div className="lg:col-start-5 lg:col-end-6">
            <SideAds />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function PersonalInformation() {
  const [selectedImage, setSelectedImage] = useState(null);
  const inputFile = useRef(null);
  const inputRef = useRef();

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
  const onSave = () => {};
  return (
    <div className="flex flex-col md:flex-row gap-[36px] md:gap-[68px]">
      {selectedImage ? (
        <div className="w-full md:w-auto mx-auto">
          {" "}
          <div className="w-[160px] h-[160px] rounded-full bg-primary relative flex justify-center text-center items-center mx-auto">
            <img
              alt="not fount"
              className="w-[160px] h-[160px] rounded-full"
              src={URL.createObjectURL(selectedImage)}
            />
            <button
              onClick={() => {
                onButtonClick();
              }}
              className="w-10 h-10 rounded-full border-dashed border-2 border-[#C6E9CB] absolute bottom-0 flex justify-center items-center"
            >
              <img src={editIcon} alt="" className="h-5 w-5" />
            </button>
            <div className="">
              <div className="flex items-center">
                <input
                  type="file"
                  id="file"
                  ref={inputFile}
                  style={{ display: "none" }}
                  onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[160px] h-[160px] rounded-full bg-primary relative flex justify-center text-center items-center mx-auto">
          <p className="text-[36px] leading-[56px] font-bold text-white ">DL</p>
          <button
            onClick={() => {
              // setIsEditing({ ...isEditing, image: true });

              onButtonClick();
            }}
            className="w-10 h-10 rounded-full border-dashed border-2 border-[#C6E9CB] absolute bottom-0 flex justify-center items-center"
          >
            <img src={editIcon} alt="" className="h-5 w-5" />
          </button>
          <div className="">
            <div className="flex items-center">
              <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage(event.target.files[0]);
                }}
              />
            </div>
          </div>
        </div>
      )}

      <div className="">
        <div className="flex justify-between w-full md:w-[75%] items-baseline mb-6">
          <input
            ref={inputRef}
            className="text-[18px] md:text-[36px] font-bold text-secondary block w-full focus:ring-0 pr-10 focus:border-red-500 focus:border-b-red-600 focus:border-b-2  bg-transparent placeholder:text-[36px]"
            defaultValue="James Worker"
          />
          <img
            src={editIcon}
            alt=""
            className=""
            onClick={() => {
              inputRef.current.focus();
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 ">
          {/* Name */}
          
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="email"
                id="email"
                className="block w-full pr-10 shadow-sm focus:ring-white focus:border-white sm:text-sm border-0 border-b-2  bg-transparent"
                placeholder="email"
                defaultValue="jamesworker09@gmail.com"
                disabled={true}
              />
              {/* <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <img src={editIcon} alt="" className="h-5 w-5" />
              </div> */}
            </div>
         
          {/* Student email */}
          <div>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="phone"
                id="phone"
                className="block w-full pr-10 shadow-sm focus:ring-white focus:border-white sm:text-sm border-0 border-b-2  bg-transparent"
                placeholder="+1 234 567 89"
                defaultValue="+1 234 567 89"
                aria-invalid="true"
                aria-describedby="email-error"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <img src={editIcon} alt="" className="h-5 w-5" />
              </div>
            </div>
          </div>
          {/* phone number */}
          <div>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="email"
                id="email"
                className="block w-full pr-10 shadow-sm focus:ring-white focus:border-white sm:text-sm border-0 border-b-2  bg-transparent"
                placeholder="email"
                defaultValue="University of St Thomas"
                disabled={true}
              />
              {/* <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <img src={editIcon} alt="" className="h-5 w-5" />
              </div> */}
            </div>
          </div>

          <div>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="phone"
                id="phone"
                className="block w-full pr-10 shadow-sm focus:ring-white focus:border-white sm:text-sm border-0 border-b-2  bg-transparent"
                placeholder="Freshman"
                defaultValue="Freshman"
                // defaultValue="+1 234 567 89"
                aria-invalid="true"
                aria-describedby="email-error"
                disabled={true}
              />
              {/* <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <img src={editIcon} alt="" className="h-5 w-5" />
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center mt-8 md:mt-[147px]">
          <button className="inline-flex h-[56px] w-[147px] bg-primary text-white  justify-center items-center rounded-[32px] font-bold">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}


