import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FaGooglePlay } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full m-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start space-x-8 md:flex-row">
        <div className="mt-8 flex flex-wrap gap-6 md:mt-0  md:flex md:flex-wrap ">
          <div className="">
            <h1 className="font-bold text-orange-700 text-3xl p-2">MessThali</h1>
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
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className=" w-[250px] flex flex-col ">
              <p className="mb-6 md:xl text-lg font-semibold text-gray-700 ">
                Company
              </p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>About us</li>
                <li>Company History</li>
                <li>Our Team</li>
                <li>Our Vision</li>
                <li>Press Release</li>
              </ul>
            </div>
          ))}
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
          <p className="text-sm font-medium text-gray-500">
            © 2023 MessThali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
