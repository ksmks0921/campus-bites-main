/* This example requires Tailwind CSS v2.0+ */
import { ChevronDownIcon, XIcon } from "@heroicons/react/solid";
import { useState, useMemo } from "react";
import { classNames } from "../../utils";
import dropDownIcon from "../../assets/dropDownIcon.png";
import DropDownMenu from "./dropDownMenu";
import { Menu } from "@headlessui/react";
const people = [
  {
    email: "lindsay.walton@eddsxample.com",
    deliveryTime: "22:30",
    type: "pickup",
    picker: "Eric",
    total: "10.53",
    taxes: "75.39",
    order: "Build Your Own Pizza",
    date: "23.06.2022",
    time: "16:40",
    orderNumber: "1234",
  },
  {
    email: "lindsay.waltsaason@example.com",
    deliveryTime: "12:30",
    type: "delivery",
    picker: "Eric",
    total: "9.30",
    taxes: "32.40",
    order: "Custom Build  Pizza",
    date: "5.07.2022",
    time: "11:40",
    orderNumber: "1235",
  },
  {
    email: "lindsayffsd.walton@example.com",
    deliveryTime: "19:30",
    type: "pickup",
    picker: "Eric",
    total: "12.53",
    taxes: "6.67",
    order: "Classic Pizza",
    date: "12.02.2022",
    time: "22:40",
    orderNumber: "1236",
  },
  {
    email: "lindsadsdsddy.walton@example.com",
    deliveryTime: "15:30",
    type: "pickup",
    picker: "Eric",
    total: "4.50",
    taxes: "1.76",
    order: "Pepperoni",
    date: "14.01.2022",
    time: "9:40",
    orderNumber: "1237",
  },
  {
    email: "lindsay.waltosddsn@example.com",
    deliveryTime: "06:30",
    type: "delivery",
    picker: "Eric",
    total: "11.65",
    taxes: "4.40",
    order: "Cheese Burger",
    date: "23.02.2022",
    time: "18:40",
    orderNumber: "1238",
  },
  {
    email: "lindsay.walton@example.com",
    deliveryTime: "19:30",
    type: "pickup",
    picker: "Eric",
    total: "12.53",
    taxes: "1.40",
    order: "Spaghetti and Tomato Sauce",
    date: "21.02.2022",
    time: "12:40",
    orderNumber: "1239",
  },
  // More people...
];

export default function PastOrdersTable() {
  const [filterBy, setFilterBy] = useState({
    order: "",
    by: "",
  });
  const [type, setType] = useState("");
  const onFllterChange = (colName) => {
    if (colName === "type") {
      if (colName === filterBy.by) {
        setFilterBy({
          order: filterBy.order === "desc" ? "asc" : "desc",
          by: colName,
        });
      } else {
        setFilterBy({
          order: "asc",
          by: colName,
        });
      }
    } else {
      setType("");
      if (colName === filterBy.by) {
        setFilterBy({
          order: filterBy.order === "desc" ? "asc" : "desc",
          by: colName,
        });
      } else {
        setFilterBy({
          order: "asc",
          by: colName,
        });
      }
    }
  };
  const onTypeCheckChange = (e) => {
    if (e.target.name === "pickup" && e.target.checked === true) {
      setType("pickup");
      onFllterChange("type");
    } else if (e.target.name === "pickup" && e.target.checked === false) {
      setType("");
      onFllterChange("");
    } else if (e.target.name === "delivery" && e.target.checked === true) {
      setType("delivery");
      onFllterChange("type");
    } else if (e.target.name === "delivery" && e.target.checked === false) {
      setType("");
      onFllterChange("");
    }
    console.log(e.target.name, e.target.checked);
  };
  // the data will be filtered here
  const filteredData = useMemo(() => {
    if (filterBy.by === "") {
      return people;
    } else if (filterBy.by === "type") {
      if (type === "pickup") {
        return people.filter((item) => item?.type === "pickup");
      } else {
        return people.filter((item) => item?.type === "delivery");
      }
    } else {
      if (filterBy.by === "order" || filterBy.by ==="deliveryTime" ) {
        if (filterBy.order === "desc") {
          // console.log({filterBy})
          // console.log(people.sort((a, b) => b?.order.toUpperCase() > a?.order.toUpperCase()))
          // return people.sort((a, b) => b?.order.toUpperCase() > a?.order.toUpperCase());
          return people.sort(function(a, b) {
            const nameA = a?.[filterBy.by].toUpperCase(); // ignore upper and lowercase
            const nameB = b?.[filterBy.by].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });
        } else {
          return people.sort(function(a, b) {
            const nameA = a?.[filterBy.by].toUpperCase(); // ignore upper and lowercase
            const nameB = b?.[filterBy.by].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
          
            // names must be equal
            return 0;
          });
          // return people.sort((a, b) => a?.order.toUpperCase() < b?.order.toUpperCase());
        }
      } else {
        if (filterBy.order === "desc") {
          return people.sort((a, b) => a?.[filterBy.by] - b?.[filterBy.by]);
        } else {
          return people.sort((a, b) => b?.[filterBy.by] - a?.[filterBy.by]);
        }
      }
    }
  }, [filterBy]);
  return (
    <div className="px-4 sm:px-6 lg:px-8 font-nunito">
      <div className="w-full ">
        <p className="text-[28px] font-bold leading-[56px] text-secondary mb-5">
          Past Orders
        </p>
        <div className="w-full h-[1px] bg-secondary "></div>
      </div>
      <div className="sm:flex sm:items-center gap-3 mt-4">
        <MiniPillls />
        <MiniPillls text="Today" />
        <MiniPillls text="Lowest Cost" />
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div
              className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
              style={{
                background: "FFFFFF",
                boxShadow: "0px 8px 28px rgba(94, 115, 136, 0.12)",
                borderRadius: "8px",
              }}
            >
              <table className="min-w-full divide-y divide-gray-300" style={{}}>
                <thead className="bg-gray-50 border-[#A2B1C0]  border-b-2">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-[16px]"
                    >
                      <button
                        // href="#"
                        // role='button'
                        onClick={() => {
                          onFllterChange("orderNumber");
                        }}
                        className="group inline-flex items-center text-[16px] font-bold"
                      >
                        Order Number
                        <span className="ml-2 flex-none rounded  text-gray-900 group-hover:bg-gray-100">
                          <svg
                            width="12"
                            height="7"
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={classNames(
                              filterBy.by === "orderNumber" &&
                                filterBy.order === "desc"
                                ? "rotate-180"
                                : ""
                            )}
                          >
                            <path
                              d="M6 6.5L0.803847 0.5L11.1962 0.500001L6 6.5Z"
                              fill={
                                filterBy.by === "orderNumber"
                                  ? "#39B54A"
                                  : "#A2B1C0"
                              }
                            />
                          </svg>
                        </span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-[16px]"
                    >
                      <button
                        onClick={() => {
                          onFllterChange("date");
                        }}
                        className="group inline-flex items-center text-[16px] font-bold"
                      >
                        Date & Time
                        <span className="ml-2 flex-none rounded  text-gray-900 group-hover:bg-gray-100">
                          <svg
                            width="12"
                            height="7"
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={classNames(
                              filterBy.by === "date" &&
                                filterBy.order === "desc"
                                ? "rotate-180"
                                : ""
                            )}
                          >
                            <path
                              d="M6 6.5L0.803847 0.5L11.1962 0.500001L6 6.5Z"
                              fill={
                                filterBy.by === "date" ? "#39B54A" : "#A2B1C0"
                              }
                            />
                          </svg>
                        </span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-[16px]"
                    >
                      <button
                        onClick={() => {
                          onFllterChange("order");
                        }}
                        className="group inline-flex items-center text-[16px] font-bold"
                      >
                        Order Cart
                        <span className="ml-2 flex-none rounded  text-gray-900 group-hover:bg-gray-100">
                          <svg
                            width="12"
                            height="7"
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={classNames(
                              filterBy.by === "order" &&
                                filterBy.order === "desc"
                                ? "rotate-180"
                                : ""
                            )}
                          >
                            <path
                              d="M6 6.5L0.803847 0.5L11.1962 0.500001L6 6.5Z"
                              fill={
                                filterBy.by === "order" ? "#39B54A" : "#A2B1C0"
                              }
                            />
                          </svg>
                        </span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-[16px]"
                    >
                      <button
                        onClick={() => {
                          onFllterChange("total");
                        }}
                        className="group inline-flex items-center text-[16px] font-bold"
                      >
                        Total Cost
                        <span className="ml-2 flex-none rounded  text-gray-900 group-hover:bg-gray-100">
                          <svg
                            width="12"
                            height="7"
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={classNames(
                              filterBy.by === "total" &&
                                filterBy.order === "desc"
                                ? "rotate-180"
                                : ""
                            )}
                          >
                            <path
                              d="M6 6.5L0.803847 0.5L11.1962 0.500001L6 6.5Z"
                              fill={
                                filterBy.by === "total" ? "#39B54A" : "#A2B1C0"
                              }
                            />
                          </svg>
                        </span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-[16px]"
                    >
                      <button
                        onClick={() => {
                          onFllterChange("taxes");
                        }}
                        className="group inline-flex items-center text-[16px] font-bold"
                      >
                        Fee & Taxes
                        <span className="ml-2 flex-none rounded  text-gray-900 group-hover:bg-gray-100">
                          <svg
                            width="12"
                            height="7"
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={classNames(
                              filterBy.by === "taxes" &&
                                filterBy.order === "desc"
                                ? "rotate-180"
                                : ""
                            )}
                          >
                            <path
                              d="M6 6.5L0.803847 0.5L11.1962 0.500001L6 6.5Z"
                              fill={
                                filterBy.by === "taxes" ? "#39B54A" : "#A2B1C0"
                              }
                            />
                          </svg>
                        </span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-[16px]"
                    >
                      {/* <a
                        href="#"
                        className="group inline-flex items-center  text-[16px] font-bold"
                      >
                        Delivery
                        <span className="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                    
                          <img
                            src={dropDownIcon}
                            className=""
                            aria-hidden="true"
                          />
                        </span>
                      </a> */}
                      <DropDownMenu
                        title="Delivery"
                        subMenus={["Pickup", "Delivery"]}
                        onCheckChange={onTypeCheckChange}
                        type={type}
                        filterBy={filterBy}
                      />
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-[16px]"
                    >
                      <button
                        onClick={() => {
                          onFllterChange("deliveryTime");
                        }}
                        className="group inline-flex items-center text-[16px] font-bold"
                      >
                        Time Deliver
                        <span className="ml-2 flex-none rounded  text-gray-900 group-hover:bg-gray-100">
                          <svg
                            width="12"
                            height="7"
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={classNames(
                              filterBy.by === "deliveryTime" &&
                                filterBy.order === "desc"
                                ? "rotate-180"
                                : ""
                            )}
                          >
                            <path
                              d="M6 6.5L0.803847 0.5L11.1962 0.500001L6 6.5Z"
                              fill={
                                filterBy.by === "deliveryTime"
                                  ? "#39B54A"
                                  : "#A2B1C0"
                              }
                            />
                          </svg>
                        </span>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredData.map((order) => (
                    <tr
                      key={order.email}
                      className="border-[#A2B1C0] border-b-2 py-2"
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-[16px] font-normal leading-[26px] text-secondary sm:pl-6">
                        <div className="border-r-2 border-[#A2B1C0] my-2 w-full min-h-[42px] flex items-center">
                          {order.orderNumber}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-[16px] font-normal leading-[26px] text-secondary">
                        <div className="border-r-2 border-[#A2B1C0] my-2 w-full min-h-[42px] flex items-center">
                          {order.date}
                          {" /"}
                          <br />
                          {order.time}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-[16px] font-normal leading-[26px] text-secondary">
                        <div className="border-r-2 border-[#A2B1C0] my-2 w-full min-h-[42px] flex items-center">
                          {order.order}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-[16px] font-normal leading-[26px] text-secondary">
                        <div className="border-r-2 border-[#A2B1C0] my-2 w-full min-h-[42px] flex items-center">
                          {"$"} {order.total}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-[16px] font-normal leading-[26px] text-secondary">
                        <div className="border-r-2 border-[#A2B1C0] my-2 w-full min-h-[42px] flex items-center">
                          {"$"} {order.taxes}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-[16px] font-normal leading-[26px] text-secondary">
                        <div className="border-r-2 border-[#A2B1C0] my-2 w-full min-h-[42px] flex items-center">
                          {order.type === "pickup" ? "Pickup" : order.picker}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-[16px] font-normal leading-[26px] text-secondary">
                        {/* <div className="border-r-2 border-r-red-300 my-2 w-full"> */}
                        {order.deliveryTime}
                        {/* </div> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniPillls({ text = "Pickup" }) {
  return (
    <div className="relative pr-4">
      <div className="px-3 py-1.5 border-[1px] border-secondary text-base font-semibold">
        {text}
      </div>
      <XIcon className="h-4 w-4 text-primary absolute top-0 right-0 font-bold" />
    </div>
  );
}
