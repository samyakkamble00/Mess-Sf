import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Healthy Food
          </p>
          <MdLocationOn className="text-3xl" />
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Best Mess Near &nbsp;
          <span className="text-orange-600 text-[3rem] -ml-4 lg:text-[5rem]">
            You
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
          eaque fugit distinctio est nam voluptatum architecto, porro iusto
          deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
          suscipit!
        </p>
      </div>
      <div className="py-2 flex-1 flex items-center relative h-420 lg:h-650 bg-blue-500">
        <div className="flex bg-white px-2 w-11/12 m-auto rounded-2xl items-center">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <FaLocationDot className="text-xl text-gray-700" />
            <input
              type="text"
              placeholder="Find Your City"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
