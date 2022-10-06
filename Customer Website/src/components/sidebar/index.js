import React from "react";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import ContactIcon from "../../assets/contact-icon.png";
import NewsIcon from "../../assets/news-icon.png";
import HomesIcon from "../../assets/home-icon.png";
import MenusIcon from "../../assets/menu-icon.png";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { MenuAlt2Icon } from "@heroicons/react/solid";
import CustomLink from "./CustomLink";

const navigation = [
  { name: "Home", href: "/main", icon: HomesIcon, current: false },
  { name: "Menu", href: "/menu/", icon: MenusIcon, current: false },
  { name: "News", href: "/news", icon: NewsIcon, current: false },
  { name: "Contact", href: "/contact", icon: ContactIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex overflow-hidden bg-gray-100 relative">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-yellow-300"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon
                      className="h-6 w-6 text-yellow-500"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  />
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-4 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </NavLink>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                        EASY TO EAT
                      </p>
                      <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                        EASY TO EARN
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
      <div className="hidden lg:flex md:flex-shrink-0 bg-primary min-h-screen">
        <div className="flex flex-col w-48 pl-10">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-primary">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4"></div>
              <nav className="mt-14 flex-1 pl-2 bg-primary space-y-1">
                {navigation.map((item) => (
                  <CustomLink 
                    key={item.name}
                    to={item.href}
                    // style={isActive => ({
                    //   color: isActive ? "green" : "blue"
                    // })}
                    // className={(isActive) =>
                    //   classNames(
                    //     isActive
                    //       ? " text-[#FFD541]"
                    //       : "text-white hover:bg-gray-50 hover:text-gray-900",
                    //     "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    //   )
                    // }
                  >
                    <img
                      alt={"menuicon"}
                      src={item.icon}
                      className="h-10 w-10"
                      // className={classNames(
                      //   item.current
                      //     ? "text-[#FFD541]"
                      //     : "text-white group-hover:text-white",
                      //   "mr-3 flex-shrink-0 h-6 w-6"
                      // )}
                      // className={
                      //   ("text-white group-hover:text-white",
                      //   "mr-3 flex-shrink-0 h-6 w-6")
                      // }
                      // activeClassName="text-[#FFD541]"
                      aria-hidden="true"
                    />
                    {item.name}
                  </CustomLink>
                ))}
              </nav>
            </div>

            <div className="flex-shrink-0  py-4 pl-4 w-full ">
              <div className="time-schedule px-4 py-2 mb-9">
                <p className="font-bold text-[16px] leading-6 text-secondary">
                  Dining Hours
                </p>
                <p className="text-primary font-bold text-[14px] leading-6">
                  Mon - Sat
                </p>
                <hr className="border-primary my-[2px]" />
                <p className="text-right font-bold text-[14px] leading-6 text-secondary">
                  8am - 10pm
                </p>
                <p className="text-primary font-bold text-[14px] leading-6">
                  Sun
                </p>
                <hr className="border-primary my-[2px]" />

                <p className="text-right font-bold text-[14px] leading-6 text-secondary">
                  8am - 8pm
                </p>
              </div>
              {/* <a href="#" className="flex-shrink-0 w-full group block"> */}
              <div className="flex  w-full">
                <div></div>
                <div className="w-full">
                  <div className="w-full">
                    <p className="text-[18px] font-bold text-secondary group-hover:text-gray-900">
                      EASY TO EAT
                    </p>
                    <p className="text-[18px] font-bold text-white group-hover:text-gray-700">
                      EASY TO EARN
                    </p>
                  </div>
                  <div className="text-white w-full border-[1px] border-white mt-3 mb-5" />
                  <div className="flex justify-between w-full px-2 mb-10">
                    <img src={twitter} alt="" className="" />
                    <img src={facebook} alt="" className="" />
                    <img src={instagram} alt="" className="" />
                  </div>
                </div>
              </div>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
