import { Dialog, Transition } from "@headlessui/react";
import { EyeIcon, MailIcon } from "@heroicons/react/outline";

import UserIcon from "../../assets/user.png";
import { useNavigate } from "react-router-dom";
import React, { useState, Fragment, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const SignInSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  username: Yup.string().required("Required"),
});

export default function MyModal({ isOpen, setIsOpen, submit, loading, error }) {
  let navigate = useNavigate();
  const [toggleVisibility, setToggleVisibility] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: "",
      username: "",
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      // console.log({values})
      submit(values);
    },
  });

  return (
    <div className="font-nunito">
      <Transition appear show={true} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[10000] overflow-y-auto"
          onClose={() => {}}
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
              {/* <Fragment> */}

              <div
                className="inline-block w-full max-w-[368px] p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl relative"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "8px 8px 36px rgba(94, 115, 136, 0.2)",
                  borderRadius: "32px",
                }}
              >
                <form onSubmit={formik.handleSubmit}>
                  <p className="text-primary text-[36px] leading-[56px] font-bold text-center mb-7 font-nunito">
                    Welcome
                  </p>
                  <p className="text-center text-[15px] md:text-[18px] leading-[24px] mb-8">
                    Login to your account
                  </p>
                  {error && (
                    <p
                      className="text-red-500 text-center font-medium"
                      variant="danger"
                    >
                      {error}
                    </p>
                  )}

                  <div className="">
                    {formik?.errors.username && formik?.touched.username ? (
                      <label className="text-sm text-red-500 block">
                        {formik?.errors.username}
                      </label>
                    ) : null}
                    <div className=" relative rounded-md shadow-sm mb-5">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        type="text"
                        name="username"
                        id="username"
                        className=" block w-full pr-10 sm:text-sm border-0 border-b-2  "
                        placeholder="Username"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <div className="h-5 w-5">
                          <img src={UserIcon} alt="" className="src" />
                        </div>
                        {/* <MailIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      /> */}
                      </div>
                    </div>
                    {/* password */}
                    <div className=" relative rounded-md shadow-sm mb-3">
                      {formik?.errors.password && formik?.touched.password ? (
                        <label className="text-sm text-red-500 block">
                          {formik?.errors.password}
                        </label>
                      ) : null}
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        type={toggleVisibility ? "text" : "password"}
                        name="password"
                        id="password"
                        className=" block w-full pr-10 sm:text-sm border-0 border-b-2  "
                        placeholder="Password"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <EyeIcon
                          className="h-5 w-5 text-primary"
                          aria-hidden="true"
                          onClick={() => {
                            setToggleVisibility(!toggleVisibility);
                          }}
                        />
                      </div>
                    </div>
                    <a
                      href="/"
                      className="text-right flex w-full justify-end text-primary text-[18px] leading-[24px] font-bold"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="flex justify-center gap-4 my-5">
                    <button
                    type="submit"
                      // onClick={() => {
                      //   // setIsOpen(false);
                      //   navigate("/serving", { replace: false });
                      // }}
                      className="bg-primary text-[18px] leading-[25px] rounded-[32px] w-[128px] h-[56px] inline-block mx-auto text-white font-bold no-underline flex justify-center items-center"
                    >
                      {loading ? "Login..." : "Login"}
                    </button>
                  </div>
                  <p className="text-[12px] leading-5 font-normal text-center font-nunito">
                    {" "}
                    Clicking on the button, you agree to the CampusBites <br />
                    <span className="text-primary">
                      {" "}
                      Terms of Service
                      <span className="text-primary">and</span> Privacy Policy
                    </span>
                  </p>
                </form>
              </div>
              {/* </Fragment> */}
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
