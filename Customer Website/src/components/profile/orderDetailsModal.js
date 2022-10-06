import { Dialog, Transition } from "@headlessui/react";
import {
  EyeIcon,
  MailIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";
import OrderItemCard from "../../common/OrderItemCard";
import shoppingBagIcon from "../../assets/shoppingBagIcon.png";

export default function OrderDetailsModal({
  isOpen,
  setIsOpen,
  type = "pickup",
}) {
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="font-nunito">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[10000] overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-white opacity-80" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className="inline-block w-full max-w-[368px] md:max-w-[420px] p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "8px 8px 36px rgba(94, 115, 136, 0.2)",
                  borderRadius: "32px",
                }}
              >
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <p className="text-[18px] font-bold text-secondary mb-5">
                      Your Order{" "}
                      <span className="text-primary ml-2">#56789900</span>
                    </p>
                    <button className="h-6 w-6">
                      <XIcon
                        className="h-6 w-6 text-[16px] text-black font-bold"
                        onClick={() => {
                          closeModal();
                        }}
                      />
                    </button>
                  </div>
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
                <div className="w-full h-[1px] bg-black"></div>
                  
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
                        {/* <p className="font-bold text-primary text-[14px]">
                          | special instructions{" "}
                        </p> */}
                      </div>
                    </div>
                    <p className="font-bold text-[14px] text-secondary">$2</p>
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
                <div className="w-full h-[1px] bg-black"></div>
                <div className="flex justify-between mt-2">
                  <p className="font-normal text-[14px] text-secondary">
                    Taxes
                  </p>
                  <p className="font-bold text-[14px] text-secondary">$2</p>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="font-normal text-[14px] text-secondary">Fee</p>
                  <p className="font-bold text-[14px] text-secondary">$2</p>
                </div>
                <div className="w-full mx-auto flex  justify-center my-2">
                  <button className="flex items-center bg-primary text-white w-[205px] h-[56px] rounded-[32px] px-1 py-1 font-bold text-[18px] leading-[25px] ">
                    <img
                      src={shoppingBagIcon}
                      alt=""
                      className="mr-3 bg-white px-1 py-1  rounded-full whitespace-nowrap"
                    />{" "}
                    Repeat Order
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
