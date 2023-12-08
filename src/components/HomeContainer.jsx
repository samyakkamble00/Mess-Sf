import React from "react";
import Delivery from "../img/delivery.png";
import { MdLocationOn } from "react-icons/md";
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
           <MdLocationOn className="text-3xl"/>
         
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Best Mess Near
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
          eaque fugit distinctio est nam voluptatum architecto, porro iusto
          deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
          suscipit!
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Book Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative h-420 lg:h-650 bg-blue-500">
        
      </div>
    </section>
  );
};

export default HomeContainer;
