import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FaGooglePlay } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full m-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start space-x-8 md:flex-row">
        <div className="mt-8 flex flex-wrap gap-6 md:mt-0  md:flex md:flex-wrap ">
          <div className="">
            <h1 className="font-bold text-orange-700 text-3xl p-2">
              MessThali
            </h1>
            <div className="flex flex-wrap">
              <span className="px-2">
                <FaGooglePlay className="text-2xl" />
              </span>
              <span>Get THe App</span>
              <span className="px-2">
                <CgMenuGridO className="text-2xl" />
              </span>
            </div>
          </div>
          <div className=" w-[200px] flex flex-col ">
            <p className="mb-6 md:xl text-lg font-semibold text-gray-700 ">
              About
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li className="text-base hover:text-black">Site Map</li>
              <li className="text-base hover:text-black">Career</li>
              <li className="text-base hover:text-black">Customer Support</li>
            </ul>
          </div>
          <div className=" w-[200px] flex flex-col ">
            <p className="mb-6 md:xl text-lg font-semibold text-gray-700 ">
              For Business
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li className="text-base  hover:text-black">Price</li>
              <li className="text-base  hover:text-black">Support</li>
            </ul>
          </div>
          <div className=" w-[200px] flex flex-col ">
            <p className="mb-6 md:xl text-lg font-semibold text-gray-700 ">
            Find Us
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li className="flex flex-wrap text-base items-center hover:text-black"><span className="m-2"><ImFacebook2 /></span> FaceBook</li>
              <li className="flex flex-wrap text-base items-center hover:text-black"><span className="m-2"><BsInstagram /></span> Instagram</li>
              <li className="flex flex-wrap text-base items-center hover:text-black"><span className="m-2"><FaLinkedin /></span> LinkedIn</li>
              <li className="flex flex-wrap text-base items-center hover:text-black"><span className="m-2"></span>X</li>
            </ul>
          </div>
          <div className=" w-[200px] flex flex-col ">
            <p className="mb-6 md:xl text-lg font-semibold text-gray-700 ">
              Legal
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li className="text-base  hover:text-black">Privacy Police</li>
              <li className="text-base  hover:text-black">Term Of Service</li>
              <li className="text-base  hover:text-black">Term Of Use</li>
            </ul>
          </div>
           
        </div>
      </div>
      <hr className="my-4" />
      <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
        <div className="inline-flex items-center">
          <svg
            width="40"
            height="46"
            viewBox="0 0 50 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500  hover:text-black">
            © 2023 MessThali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
