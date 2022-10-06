import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import {
  SortAscendingIcon,
  UsersIcon,
  ArrowNarrowRightIcon,
  PlusIcon,
  MinusIcon,
  ArrowNarrowLeftIcon,
} from "@heroicons/react/solid";
import PBCard from "../common/PBCard";
import LOCard from "../common/LOCard";
import StatsCard from "../common/StatsCard";
import UniOptionCard from "../common/UniOptionCard";
import attention1 from "../assets/imgattention-1.png";
import attention2 from "../assets/imgattention-2.png";
import landingImg from "../assets/landingimg.png";
import moneyIcon from "../assets/moneyIcon.png";
import shoppingBagIcon from "../assets/shoppingBagIcon.png";
import adbg from "../assets/adimg.png";
import LandingSection from "../components/mainPage/landingSection";
import LatestOrder from "../components/mainPage/latestOrder";
import MenuLOCard from "../common/MenuLOCard";
import DDCard from "../common/DDCard";
import DrinkBall from "../common/DrinkBall";
import SideDishBall from "../common/SideDishBall";
import ProductSlider from "../components/product/productSlidder";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
  listProductByRestaurants,
  listProductDetails,
} from "../actions/mealActions";
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  height:70vh;
`;


export default function Product() {
  const dispatch = useDispatch();

  const productsList = useSelector((state) => state.productDetails);
  const { loading, error, product, page, pages } = productsList;
  let [isLoading, setLoading] = useState(true);
  let [color, setColor] = useState("#39B54A");

  let { id } = useParams();
  let location = useLocation();
  console.log("product", product);
  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, useParams, location]);
  if (loading)
    return (
      <Layout className="col-span-7 flex justify-center items-center">
        <BounceLoader
          color={color}
          loading={loading}
          css={override}
          size={150}
        />
      </Layout>
    );
  return (
    <Layout>
      <div className="relative pt-[100px] lg:pt-4 pb-16 bg-white">
      {/* <BounceLoader color={color} loading={isLoading} css={override} size={150} /> */}
      {/* <PulseLoader color="#26A65B" size="16px" margin="4px"/> */}
      {/* <Loader color="#26A65B" size="16px" margin="4px"/> */}
        {/* section 1 */}
        {/* landing page */}
        {/* section 2 */}
        {/* {loading && <p>Loading Product</p>} */}
      {/* <BounceLoader color={color} loading={isLoading} css={override} size={150} /> */}

        {product && (
          <div className="md:grid lg:grid-cols-7 px-6 gap-4">
            {/* left side */}
            <div className="lg:col-start-1 lg:col-end-6 w-full">
              {/* product details */}
              <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                {/* carousel part here */}
                <div className="mb-[120px] md:mb-4">
                  <ProductSlider
                    image={product?.image}
                    productImages={product?.productImages}
                  />
                </div>
                {/* details part here */}
                <div className="">
                  <div className="">
                    <a
                      href="/menu"
                      className="flex items-center no-underline text-secondary text-[18px] leading-6"
                    >
                      <ArrowNarrowLeftIcon className="h-4 w-6 mr-1 text-primary" />
                      Back to Menu
                    </a>
                  </div>
                  <p className="text-[28px] leading-[56px] font-bold">
                    {product?.name}
                  </p>
                  <hr />
                  <p className="text-[18px] leading-[26px] mt-8 mb-5">
                    {product?.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <img src={moneyIcon} alt="" />
                    <p className="text-[24px] leading-[16px] font-bold text-secondary">
                      {product?.price}
                    </p>
                  </div>
                  {product && product?.dishes?.length > 0 && (
                    <div className="mt-8 mb-7">
                      <p className="text-[18px] font-bold mb-2">Side</p>

                      <div className="grid grid-cols-4">
                        {product &&
                          product?.dishes &&
                          product?.dishes.map((item, index) => (
                            <SideDishBall
                              name={item?.name}
                              image={item?.image}
                              key={index}
                              length={product?.dishes?.length}
                              index={index}
                            />
                          ))}
                        {/* <SideDishBall />
                    <SideDishBall />
                    <SideDishBall />
                    <SideDishBall /> */}
                      </div>
                    </div>
                  )}
                  {product && product?.modifications?.length > 0 && (
                    <div className="w-full">
                      <div className="flex justify-between w-full">
                        <p className="font-bold text-[18px] text-secondary">
                          Quick Modification
                        </p>
                        <button className="flex items-center text-[18px] font-bold text-primary">
                          <PlusIcon className="mr-1 h-4 w-4" />
                          Offer Add Ons
                        </button>
                      </div>
                      {/* No tomato */}
                      {product &&
                        product?.modifications &&
                        product?.modifications.map((item, index) => (
                          <div
                            className="flex justify-between items-center my-2"
                            key={index}
                          >
                            <div className="flex items-center h-5 gap-2 ">
                              <input
                                id="candidates"
                                name="candidates"
                                type="checkbox"
                                className="focus:ring-primary h-4 w-4 text-primary border-primary rounded"
                              />
                              <p className="text-[18px] leading-[25px]">
                                {item?.modification}
                              </p>
                            </div>
                            <p className="text-[18x] leading-[24px] font-normal">
                              {item?.price === 0 ? "" : `+$${item?.price}`}
                            </p>
                          </div>
                        ))}

                      {/* No Onion */}
                      {/* <div className="flex justify-between items-center my-2">
                    <div className="flex items-center h-5 gap-2 ">
                    <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    className="focus:ring-primary h-4 w-4 text-primary border-primary rounded"
                    />
                    <p className="text-[18px] leading-[25px]">No Onion</p>
                    </div>
                  </div> */}
                      {/* Extra Sauce */}
                      {/* <div className="flex justify-between items-center my-2">
                    <div className="flex items-center h-5 gap-2 ">
                    <input
                    checked={true}
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    className="focus:ring-primary h-4 w-4 text-primary border-primary rounded"
                    />
                    <p className="text-[18px] leading-[25px]">Extra Sauce</p>
                    </div>
                  </div> */}
                      {/* Sauce on Side */}
                      {/* <div className="flex justify-between items-center my-2">
                    <div className="flex items-center h-5 gap-2 ">
                    <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    className="focus:ring-primary h-4 w-4 text-primary border-primary rounded"
                    />
                    <p className="text-[18px] leading-[25px]">
                    Sauce on Side
                    </p>
                    </div>
                    <p className="text-[18x] leading-[24px] font-normal">
                    +$2.50
                    </p>
                  </div> */}
                      {/* Double Cheese */}
                      {/* <div className="flex justify-between items-center my-2">
                    <div className="flex items-center h-5 gap-2 ">
                    <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    className="focus:ring-primary h-4 w-4 text-primary border-primary rounded"
                    />
                    <p className="text-[18px] leading-[25px]">
                    Double Cheese
                    </p>
                    </div>
                    <p className="text-[18x] leading-[24px] font-normal">
                    +$3.90
                    </p>
                  </div> */}
                    </div>
                  )}
                  {/* {product && product?.drinks?.length > 0 && (
                    <div className="w-full">
                      <div className="flex justify-between w-full">
                        <p className="text-[18px] font-bold">Drink</p>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative">
                        {product &&
                          product?.drinks &&
                          product?.drinks.map((item, index) => (
                            <DrinkBall
                              name={item?.name}
                              image={item?.image}
                              key={index}
                            />
                          ))}
                      </div>
                    </div>
                  )} */}
                    {product && product?.drinks?.length > 0 && (
                    <div className="w-full">
                      <div className="flex justify-between w-full">
                        <p className="text-[18px] font-bold">Drink</p>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative">
                        {product &&
                          product?.drinks &&
                          product?.drinks.map((item, index) => (
                            <DrinkBall
                              name={item?.name}
                              image={item?.image}
                              key={index}
                              length={product?.drinks?.length}
                              index={index}
                            />
                          ))}
                      </div>
                    </div>
                  )}
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
                  <div className="mt-8 flex gap-7">
                    <button className="flex items-center bg-primary text-white w-[174px] h-[56px] rounded-[32px] px-1 py-1 font-bold text-[18px] leading-[25px] ">
                      <img
                        src={shoppingBagIcon}
                        alt=""
                        className="mr-3 bg-white px-1 py-1  rounded-full"
                      />{" "}
                      $15.80
                    </button>
                    <div className="flex items-center gap-3">
                      <button className="">
                        <MinusIcon className="h-4 w-4" />
                      </button>
                      <p className="flex justify-center items-center w-[48px] h-[48px] rounded-[12px] bg-[#F1F8F2]">
                        1
                      </p>
                      <button className="h-4 w-4">
                        <PlusIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <div className="flex w-full justify-between items-center">
                <p className="text-[28px] leading-[56px] font-bold text-secondary">
                  Recommended
                </p>
              </div>
              <hr className="border-secondary" />

              {/* latest order */}
              <section className="">
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
                  <MenuLOCard />
                  <MenuLOCard />
                  <MenuLOCard />
                  <MenuLOCard />
                </div>
              </section>
            </div>
            {/* right side */}
            <div className="lg:col-start-6 lg:col-end-8">
              {/* popular bites */}
              <section>
                <div className="flex justify-between items-center">
                  <p className="text-[18px] leading-[56px] font-bold text-secondary">
                    Popular Bites
                  </p>

                  <a
                    href=""
                    className="text-primary flex no-underline items-center gap-1"
                  >
                    See All{" "}
                    <ArrowNarrowRightIcon
                      className="h-4 w-4   text-primary"
                      aria-hidden="true"
                    />
                  </a>
                </div>
                <hr className="border-secondary" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-1">
                  <PBCard />
                  <PBCard />
                  <PBCard />
                  <PBCard />
                  <PBCard />
                </div>
              </section>
              {/* Deal day */}
              <section>
                <div className="flex justify-between items-center">
                  <p className="text-[18px] leading-[56px] font-bold text-secondary">
                    Deal Days!
                  </p>

                  <a
                    href=""
                    className="text-primary flex no-underline items-center gap-1"
                  >
                    See All{" "}
                    <ArrowNarrowRightIcon
                      className="h-4 w-4   text-primary"
                      aria-hidden="true"
                    />
                  </a>
                </div>
                <hr className=" border-secondary" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-10 mt-5">
                  <DDCard />
                  <DDCard />
                  <DDCard />
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
