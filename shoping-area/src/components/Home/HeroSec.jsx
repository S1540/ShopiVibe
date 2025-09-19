import React from "react";
import { FaAnglesLeft } from "react-icons/fa6";

const HeroSec = () => {
  return (
    <>
      <section className="max-w-full relative top-15 bg-gradient-to-r from-purple-300 via-gray-50 to-purple-300  py-1 md:py-13 lg:py-17 px-">
        <div className="max-w-full flex justify-between bg-amber-500">
          <button className="bg-violet-500 max-w-72 w-full px-8 py-2 font-medium hover:bg-violet-600 transition-all duration-300 ease-in-out cursor-pointer">
            Mens
          </button>
          <button className="max-w-72 w-full px-8 py-2 font-medium hover:bg-violet-600 transition-all duration-300 ease-in-out text-white cursor-pointer">
            Women
          </button>
          <button className=" max-w-72 w-full px-8 py-2 font-medium hover:bg-violet-600 transition-all duration-300 ease-in-out text-white cursor-pointer">
            Kids
          </button>
          <button className=" hidden  md:flex gap-2 max-w-72 w-full px-8 py-2 font-medium hover:bg-violet-600 transition-all duration-300 ease-in-out text-white cursor-pointer">
            <FaAnglesLeft className="mt-1" /> Flat 40% OFF
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSec;
