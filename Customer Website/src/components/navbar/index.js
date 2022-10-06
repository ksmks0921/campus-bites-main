import React from "react";
import Logo from "../../assets/CBfull1.png";
import Unilogo from "../../assets/unilogo.png";
import CartIcon from "../../assets/cart.png";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../actions/userActions";
export default function Index({ name, createInitials }) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="hidden lg:block ml-10 bg-white">
      {/* left */}
      <div
        className="z-[65] mr-10 flex justify-between bg-white pl-5 pr-[30px] rounded-[8px]"
        style={{ boxShadow: "0px 8px 28px rgba(94, 115, 136, 0.12)" }}
      >
        <div className="">
          <img src={Logo} alt="" className="" />
        </div>
        {/* right */}
        <div className="flex justify-between">
          {/* left */}
          <div className="flex items-center">
            <p className="text-[18px] leading-[24px] font-normal mr-3">
              {userInfo?.university ? userInfo?.university :"University Of St.Thomas"}{" "}
            </p>
            <div className="mr-5">
              <img src={Unilogo} alt="" className="" />
            </div>
            <div className="border-black border-[1px] h-full mr-6"></div>
            <a href="/cart" className="no-underline">
              <img src={CartIcon} alt="" className="" />
            </a>
            <button  className="ml-4 no-underline bg-primary font-bold text-white px-6 py-2 rounded-md" onClick={logoutHandler}>
              Logout
            </button>
          </div>
          {/* right */}
          <div className="flex items-center">
            <div className="w-[200px] flex flex-col justify-center items-end mr-[15px]">
              <p className="text-secondary">Hello,</p>
              <a href="/profile" className="text-primary no-underline capitalize">
                {name ? name : "James Worker"}
              </a>
            </div>
            <a href="/profile" className="no-underline">
              <div className="h-8 w-8 rounded-full bg-primary flex justify-center items-center text-white text-[18px] leading-[25px] font-bold px-8 py-8">
                {name ? createInitials(name) : "JW"}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
