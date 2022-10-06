import { DotsHorizontalIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import { classNames } from "../../utils";
import OrderDetailsModal from "./orderDetailsModal";
import Example from "./test";
import { useNavigate } from "react-router-dom";

const people = [
  {
    orderId: "#56789900",
    orderDetails:
      "Build Your Own Pizza + Build Your Own Pizza + Build Your Own Pizza",
    delivery: "Delivery Service",
    total: "$49.80",
    status: "In Progress",
  },
  {
    orderId: "#56789900",
    orderDetails:
      "Build Your Own Pizza + Build Your Own Pizza + Build Your Own Pizza",
    delivery: "Pickup",
    total: "$49.80",
    status: "Completed",
  },
  {
    orderId: "#56789900",
    orderDetails:
      "Build Your Own Pizza + Build Your Own Pizza + Build Your Own Pizza",
    delivery: "Delivery Service",
    total: "$49.80",
    status: "Completed",
  },
  {
    orderId: "#56789900",
    orderDetails:
      "Build Your Own Pizza + Build Your Own Pizza + Build Your Own Pizza",
    delivery: "Pickup",
    total: "$49.80",
    status: "Completed",
  },
  {
    orderId: "#56789900",
    orderDetails:
      "Build Your Own Pizza + Build Your Own Pizza + Build Your Own Pizza",
    delivery: "Delivery Service",
    total: "$49.80",
    status: "Completed",
  },
  {
    orderId: "#56789900",
    orderDetails:
      "Build Your Own Pizza + Build Your Own Pizza + Build Your Own Pizza",
    delivery: "Pickup",
    total: "$49.80",
    status: "Completed",
  },
  {
    orderId: "#56789900",
    orderDetails:
      "Build Your Own Pizza + Build Your Own Pizza + Build Your Own Pizza",
    delivery: "Delivery Service",
    total: "$49.80",
    status: "Completed",
  },
  {
    orderId: "#56789900",
    orderDetails:
      "Build Your Own Pizza + Build Your Own Pizza + Build Your Own Pizza",
    delivery: "Pickup",
    total: "$49.80",
    status: "In Progress",
  },
];
export default function MyOrders() {
  let navigate = useNavigate();
const [type, setType] = useState("pickup")
  const [status, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(people);
  }, []);
  const handleTypeChange = (e) => {
    console.log({ e });
    if (e.target.name === "in-progress" && e.target.checked === true) {
      const filtered = people.filter((item) => item.status === "In Progress");
      setStatus("In Progress");
      setData(filtered);
    } else if (e.target.name === "in-progress" && e.target.checked === false) {
      setStatus("");
      setData(people);
    } else if (e.target.name === "completed" && e.target.checked === true) {
      const filtered = people.filter((item) => item.status === "Completed");
      setData(filtered);
      setStatus("Completed");
    } else if (e.target.name === "completed" && e.target.checked === false) {
      setStatus("");
      setData(people);
    }
  };
  /* This example requires Tailwind CSS v2.0+ */
  return (
    <div>
      <div className="flex gap-4 mb-5">
        {/* Sauce on Side */}
        <div className="flex justify-between items-center my-2">
          <div className="flex items-center h-5 gap-2 ">
            <input
              checked={status === "In Progress"}
              onChange={(e) => {
                handleTypeChange(e);
              }}
              id="in-progress"
              name="in-progress"
              type="checkbox"
              className="focus:ring-primary h-4 w-4 text-primary border-primary rounded"
            />
            <label
              htmlFor="in-progress"
              className={classNames(
                "text-[18px] leading-[25px] ",
                status === "In Progress" ? "text-primary" : "text-secondary"
              )}
            >
              In Progress
            </label>
          </div>
        </div>
        {/* Double Cheese */}
        <div className="flex justify-between items-center my-2 ">
          <div className="flex items-center h-5 gap-2 ">
            <input
              checked={status === "Completed"}
              onChange={(e) => {
                handleTypeChange(e);
              }}
              id="completed"
              name="completed"
              type="checkbox"
              className="focus:ring-primary h-4 w-4 text-primary border-primary rounded"
            />
            <label
              htmlFor="completed"
              className={classNames(
                "text-[18px] leading-[25px] ",
                status === "Completed" ? "text-primary" : "text-secondary"
              )}
            >
              Completed
            </label>
          </div>
        </div>
      </div>
      {/* Table section */}
      {data && (
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="pt-2 pb-0 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b border-gray-200">
                <table className="min-w-full divide-y divide-gray-200  ">
                  <thead className="bg-[#C6E9CB]">
                    <tr className="">
                      <th
                        scope="col"
                        className="px-2 py-3  text-lg font-bold text-black capitalize tracking-wider border-r-[1px] border-r-[#2C2C2C] border-b-[1px] border-b-[#2C2C2C]"
                      >
                        Order ID
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap text-center px-2 py-3  text-lg font-bold text-black capitalize tracking-wider border-r-[1px] border-r-[#2C2C2C] border-b-[1px] border-b-[#2C2C2C]"
                      >
                        Order Details
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3  text-lg font-bold text-black capitalize tracking-wider border-r-[1px] border-r-[#2C2C2C] border-b-[1px] border-b-[#2C2C2C]"
                      >
                        Delivery
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3  text-lg font-bold text-black capitalize tracking-wider border-r-[1px] border-r-[#2C2C2C] border-b-[1px] border-b-[#2C2C2C]"
                      >
                        Total
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3  text-lg font-bold text-black capitalize tracking-wider border-r-[1px] border-r-[#2C2C2C] border-b-[1px] border-b-[#2C2C2C]"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="relative px-6 py-3  border-b-[1px] border-b-[#2C2C2C]"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((person) => (
                      <tr key={person.orderId} className="text-center  ">
                        <td className="px-6 py-4 text-sm whitespace-nowrap font-medium text-[#4D4D4D] border-r-[1px] border-r-[#2C2C2C] border-b-[1px] border-b-[#2C2C2C]">
                          {person.orderId}
                        </td>
                        <td className="px-6 py-4  whitespace-pre-wrap text-sm text[#4D4D4D] w-full border-r-[1px] border-r-[#2C2C2C] border-b-[1px] border-b-[#2C2C2C]">
                          {person.orderDetails}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text[#4D4D4D] border-r-[1px] border-r-[#2C2C2C] border-b-[1px] border-b-[#2C2C2C]">
                          {person.delivery}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text[#4D4D4D] border-r-[1px] border-r-[#2C2C2C] border-b-[1px] border-b-[#2C2C2C]">
                          {person.total}
                        </td>
                        <td
                          className={classNames(
                            "px-6 py-4 whitespace-nowrap text-sm border-r-[1px] border-r-[#2C2C2C] border-b-[1px] border-b-[#2C2C2C]",
                            person?.status === "In Progress"
                              ? "text-red-500"
                              : "text-primary"
                          )}
                        >
                          {person.status}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium border-b-[1px] border-b-[#2C2C2C]">
                          <button
                            onClick={() => {
                                const pickUpType = person?.delivery === "Pickup"
                                ? "pickup"
                                : "delivery"; 
                                 setType(pickUpType)
                              const link =
                                person?.delivery === "Pickup"
                                  ? "/checkout-pickup"
                                  : "/checkout-delivery";
                              person.status === "Completed"
                                ? setIsOpen(true)
                                : navigate(link, { replace: false });
                            }}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <DotsHorizontalIcon className="text-black h-4 w-6" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <OrderDetailsModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          type={type}
        />
      )}
    </div>
  );
}
