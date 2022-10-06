import React from "react";
import Footer from "../footer";
import Navbar from "../navbar/authedNavbar";
import Sidebar from "../sidebar/index";
import { Fragment, useState } from "react";
import { MenuAlt2Icon } from "@heroicons/react/solid";
import { Transition, Dialog, Popover } from "@headlessui/react";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import ContactIcon from "../../assets/contact-icon.png";
import NewsIcon from "../../assets/news-icon.png";
import HomesIcon from "../../assets/home-icon.png";
import MenusIcon from "../../assets/menu-icon.png";
import Logo from "../../assets/CBfull1.png";
import Unilogo from "../../assets/unilogo.png";
import CartIcon from "../../assets/cart.png";
import UserIcon from "../../assets/user.png";
import RestaurantLogo from "../../assets/restaurant-logo.png";
import Login from "../login";


import {
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import CustomLink from "../sidebar/CustomLink";

const navigation = [
  { name: "Home", href: "/", icon: HomesIcon, current: true },
  { name: "Past Orders", href: "/menu", icon: MenusIcon, current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function LandingLayout({ children, ...rest }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="bg-primary flex justify-between z-[10] w-full lg:hidden">
     
        <Popover className=" bg-white w-full z-[900] absolute ">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 lg:justify-start lg:space-x-10">
                  <div className="flex justify-start lg:w-0 lg:flex-1 ">
                    <button
                      className="px-4  text-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden z-[0] my-[8]"
                      onClick={() => {
                        setSidebarOpen(true);
                      }}
                    >
                      <span className="sr-only">Open sidebar</span>

                      <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
                    </a>
                  </div>
                  <div className="-mr-2 -my-2 lg:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src={Logo}
                            // src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="mt-6">
                        <nav className="grid gap-y-8">
                          {/* right */}
                          <div className="flex flex-col justify-between">
                            {/* left */}
                            <div className="flex flex-col items-center">
                              <div className="flex items-center border-b-secondary border-b-[1px] pb-2">
                                <p className="text-[18px] leading-[24px] font-normal mr-3">
                                  University Of St.Thomas{" "}
                                </p>
                                <div className="mr-5">
                                  <img src={Unilogo} alt="" className="" />
                                </div>
                              </div>
                              {/* <div className="border-black border-[1px] h-full mr-6"></div> */}
                            </div>
                            <div className="grid grid-cols-1 gap-4  my-2">
                              <div
                                className="flex items-center w-full py-2 bg-primary text-white flex items-center justify-center text-center w-full"
                                onClick={() => {
                                  setIsOpen(true);
                                }}
                                role="button"
                              >
                                <div className="bg-white px-2 py-2 rounded-full mr-1">
                                  <img src={UserIcon} alt="" className="" />
                                </div>
                                <p className="text-[24px]  text-white ">
                                  Login to Start
                                </p>
                              </div>
                            </div>
                            {/* right */}
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 lg:hidden"
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
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-primary"
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
              {/* <div className="flex-1 h-0  pb-4 overflow-y-auto">
                
          
              </div> */}
              <div className=" bg-primary">
                <div className="flex flex-col  pl-10">
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-primary min-h-screen">
                    <div className="flex-1 flex flex-col pb-4 overflow-y-auto">
                      <div className="flex items-center flex-shrink-0 px-4"></div>
                      <nav className="mt-20 flex-1 px-2 bg-primary space-y-1">
                        {navigation.map((item) => (
                          <CustomLink
                            key={item.name}
                            to={item.href}
                          >
                            <img
                              alt={"menuicon"}
                              src={item.icon}
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                            {item.name}
                          </CustomLink>
                        ))}
                      </nav>
                    </div>

                    <div className="flex-shrink-0  py-4 pl-4 w-full ">
                      <div className="time-schedule px-4 py-2 mb-9">
                        <p className="font-bold text-[14px] leading-6 text-secondary">
                          Hours
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
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
      <div {...rest} className="">
        <div className="absolute top-0 w-full z-[6000] hidden lg:block">
          <Navbar />
        </div>
        <div className="">
          <div className=" flex h-screen  overflow-hidden bg-transparent lg:bg-gray-100 relative">
            {/* <div className="col-start-1 col-end-3"> */}
            <div className="z-[900]">
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            </div>
            
            <div className="flex flex-col min-h-screen  overflow-x-hidden flex-1 ">
              <div className="flex-grow overflow-x-hidden md:pt-[80px]">
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
      {isOpen && <Login isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}
