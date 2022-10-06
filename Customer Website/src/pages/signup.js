import React, { useState, useRef, useEffect } from "react";
import Layout from "../components/layout/unAuthedLayoutSignUp";
import {
  ArrowNarrowLeftIcon,
  PlusIcon,
} from "@heroicons/react/solid";
import { FileDrop } from "react-file-drop";
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { classNames } from "../utils";

const fileTypes = ["JPEG", "PNG", "GIF"];
export default function Main() {
  const [isMatch, setIsMatch] = useState(true)
  const [isUserId, setIsUserId] = useState(true)
  const signUpSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    year: Yup.string().required(),
    university: Yup.string().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),
    phoneNumber: Yup.string().required(),

  });
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  let navigate = useNavigate();
  let location = useLocation();
  const inputFile = useRef(null);
  const onUploadButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
  const dispatch = useDispatch()
  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister
  const uploadImage = (img) => {
    const data = new FormData();
    data.append("file", img ? img : image);
    data.append("upload_preset", "campusbites");
    data.append("cloud_name", "westernwells");
    fetch("  https://api.cloudinary.com/v1_1/westernwells/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUserData({ ...userData, idImage: data.url })
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    year: "",
    phoneNumber: "",
    university: "",
    idImage: url
  })
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      year: "",
      phoneNumber: "",
      university: "",
    },
    validationSchema: signUpSchema,
    onSubmit: values => {
      // console.log({ values })
      // console.log({values})
      if (values.password === values.confirmPassword) {
        setIsMatch(true)
        // submit(values)
      } else {
        setIsMatch(false)
      }
      if (userData.idImage !== "") {
        setIsUserId(true)
      } else {
        setIsUserId(false)
      }
      if ((isMatch === true) && (userData?.idImage !== "")) {
        // console.log("about to submit")
        const data = { ...values, idImage: userData?.idImage }
        // console.log("firing",data )
        // console.log({ data })
        dispatch(register(data))

      }
    },
  });
  const handleInputChange = (e) => {
    // console.log(e)
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  const submitForm = () => {
    dispatch(register(userData))
    // console.log({ userData })
  }
  const redirect = location.search ? location.search.split('=')[1] : '/main'

  useEffect(() => {
    // console.log({ userInfo })
    if (userInfo) {
      navigate(redirect, { replace: true });
    }
  }, [userInfo, redirect])
  return (
    <Layout>
      <div className="relative pb-16 px-4 md:px-10 font-nunito pt-[100px] md:pt-4">
        <div className="">
          <a
            href="/public"
            className="flex items-center no-underline text-secondary text-[18px] leading-6"
          >
            <ArrowNarrowLeftIcon className="h-4 w-6 mr-1 text-primary" />
            Back to Home
          </a>
        </div>
        <div className="grid md:grid-cols-5">
          <div className="col-start-1 col-end-4">
            <div className="text-primary text-[24px] md:text-[36px] md:leading-[56px] font-bold text-center md:text-left">
              Create Account
            </div>
            <form onSubmit={formik.handleSubmit}>
              {!isMatch && <label className="text-red-500 font-semibold text-sm block">Password doesn't match</label>}
              {!isUserId && <label className="text-red-500 font-semibold text-sm block">Id image is required</label>}
              {error && <label className="text-red-500 font-semibold text-sm block">{error}</label>}
              <div className="md:grid md:grid-cols-2 gap-x-10 gap-y-8 ">
                {/* Name */}

                <div className="mt-1">
                  {/* {formik?.errors.password && formik?.touched.password ?
                    <label className="text-sm text-red-500">{formik?.errors.password}</label> : null
                  } */}
                  <input
                    // onChange={(e) => { handleInputChange(e) }}
                    // value={userData?.name}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    type="text"
                    name="name"
                    id="name"
                    className={classNames(formik?.errors.name && formik?.touched.name ? "border-red-500 border-2" : "", "shadow-sm focus:ring-white focus:border-white block w-full sm:text-sm border-0 border-b-2  bg-transparent")}
                    placeholder="Name"
                  />
                </div>

                {/* Student email */}

                <div className="mt-1">
                  <input
                    // onChange={(e) => { handleInputChange(e) }}
                    // value={userData?.email}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="text"
                    name="email"
                    id="email"
                    className={classNames(formik?.errors.email && formik?.touched.email ? "border-red-500 border-2" : "", "shadow-sm focus:ring-white focus:border-white block w-full sm:text-sm border-0 border-b-2  bg-transparent")}
                    placeholder="Student Email"
                  />
                </div>

                {/* phone number */}
                <div>
                  <div className="mt-1">
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.phoneNumber}

                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      className={classNames(formik?.errors.phoneNumber && formik?.touched.phoneNumber ? "border-red-500 border-2" : "", "shadow-sm focus:ring-white focus:border-white block w-full sm:text-sm border-0 border-b-2  bg-transparent")}
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                {/* Student email */}
                <div>
                  <div className="mt-1">
                    <label htmlFor="year in college" className="sr-only">
                      Year in College{" "}
                    </label>
                    <select
                      // onChange={(e) => { handleInputChange(e) }}
                      // value={userData?.year}
                      onChange={formik.handleChange}
                      value={formik.values.year}
                      placeholder="Year in college"
                      id="year"
                      name="year"
                      className={classNames(formik?.errors.year && formik?.touched.year ? "border-red-500 border-2" : "", "focus:ring-white focus:border-white relative block w-full border-0 border-b-2 bg-transparent focus:z-10 sm:text-sm ")}
                    >
                      <option value="">Year in College</option>
                      <option value="Freshman">Freshman</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-2">
                  <label htmlFor="country" className="sr-only">
                    University
                  </label>
                  <select
                    // onChange={(e) => { handleInputChange(e) }}
                    // value={userData?.university}
                    onChange={formik.handleChange}
                    value={formik.values.university}
                    placeholder="University"
                    id="university"
                    name="university"
                    className={classNames(formik?.errors.university && formik?.touched.university ? "border-red-500 border-2" : "", "focus:ring-white focus:border-white relative block w-full border-0 border-b-2 bg-transparent focus:z-10 sm:text-sm ")}
                  >
                    <option value="">University</option>
                    <option value="University of St Thomas">University of St Thomas</option>
                    <option value="University of Minnesota">University of Minnesota</option>
                  </select>
                </div>
                {/* password */}
                <div>
                  <div className="mt-1">
                    <input
                      // onChange={(e) => { handleInputChange(e) }}
                      // value={userData?.password}
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      type="password"
                      name="password"
                      id="password"
                      className={classNames(((formik?.errors.password && formik?.touched.password) || !isMatch) ? "border-red-500 border-2" : "", "shadow-sm focus:ring-white focus:border-white block w-full sm:text-sm border-0 border-b-2  bg-transparent")}
                      placeholder="Password"
                    />
                  </div>
                </div>
                {/* Confirm password */}
                <div>
                  <div className="mt-1">
                    <input
                      // onChange={(e) => { handleInputChange(e) }}
                      // value={userData?.confirmPassword}

                      type="password"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                      name="confirmPassword"
                      id="confirmPassword"
                      className={classNames(((formik?.errors.confirmPassword && formik?.touched.confirmPassword) || !isMatch) ? "border-red-500 border-2" : "", "shadow-sm focus:ring-white focus:border-white block w-full sm:text-sm border-0 border-b-2  bg-transparent")}
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <div className=" col-span-2">
                  {/* upload area */}
                  <FileDrop
                    onDrop={(files, event) => {
                      // console.log("onDrop!", files, event);
                      uploadImage(files[0]);
                    }}
                  >
                    <div className={classNames("flex gap-6  justify-between col-span-2 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md items-center my-4 md:my-0  w-full  hover:border-2 hover:border-red-400", !isUserId ? "border-red-400" :"")}>
                      <div className="flex gap-6">

                        <div className="flex justify-center">
                          <button
                            className="bg-primary rounded-full inline-block mx-auto my-auto text-white font-bold h-16 w-16 px-4 py-4  justify-center items-center"
                            onClick={(event) => {
                              onUploadButtonClick();
                              event.stopPropagation();
                            }}
                          >
                            <PlusIcon className="h-4 w-4 mx-auto my-auto" />
                          </button>
                        </div>
                        <div className="">
                          <p className="text-primary font-bold text-[18px] leading-4 mb-4">
                            Upload photo of Student ID
                          </p>
                          <p className="text-secondary text-[14px] leading-4 font-normal">
                            Drop file here to Upload
                          </p>
                        </div>
                        <input
                          type="file"
                          id="file"
                          ref={inputFile}
                          style={{ display: "none" }}
                          onChange={(event) => {
                            setSelectedImage(event.target.files[0]);
                            uploadImage(event.target.files[0]);
                            event.stopPropagation();
                          }}
                        />
                      </div>
                      {/* test upload */}
                      {/* <div>
                      <input
                        type="file"
                        onChange={(e) => {
                          setImage(e.target.files[0]);
                          e.stopPropagation();
                        }}
                      ></input>
                      <button onClick={uploadImage}>Upload</button>
                    </div> */}
                      {
                        userData?.idImage &&
                        <img src={userData?.idImage} className="w-16 h-16" />
                      }
                    </div>
                  </FileDrop>
                </div>
                {/* cta */}
                <div className="md:flex gap-10 justify-center md:justify-start col-span-2 items-center ">
                  <div className="flex justify-center md:justify-start my-2 md:my-0">
                    <button className="bg-primary rounded-full w-[147px] h-[56px] inline-block  text-white font-bold"
                      // onClick={() => { submitForm() }}
                      type="submit"

                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="flex-1">
                    <p className=" text-xs md:text-[14px] leading-5 font-normal">
                      {" "}
                      Clicking on the button, you agree to the CampusBites <br />
                      <span className="text-primary">
                        {" "}
                        Terms of Service
                        <span className="text-primary">and</span> Privacy Policy
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="flex justify-center md:block md:col-start-5 md:col-end-6 w-full md:w-auto mx-auto">
            <section className=" relative bg-adss h-[497px] w-full md:w-auto flex flex-col justify-center items-center px-2 py-2 mx-auto">
              <div className=" ">
                {/* <img src={landingImg} alt="" className="w-12 h-12" /> */}
                <div
                  className="bg-white px-2 py-2"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    boxShadow: "-2px 2px 8px rgba(94, 115, 136, 0.2)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <p className="text-center text-[#FFD541] text-[36px] leading-[36px] font-black">
                    Learn And Earn
                  </p>
                  <p className="text-center mt-[24px] mb-[32px] font-bold text-[18px] leading-[24px] text-white">
                    Earn up to $20/hr on campus!
                  </p>
                  <div className="flex justify-center">
                    <button className="bg-primary rounded-full w-[162px] h-[56px] inline-block mx-auto text-white font-bold">
                      Start Now!
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
