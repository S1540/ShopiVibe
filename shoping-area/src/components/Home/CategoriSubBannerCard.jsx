import React from "react";
import { FiArrowRight } from "react-icons/fi";

const CategoriSubBannerCard = ({ SubBanner, title, price }) => {
  return (
    <>
      <div className="max-w-sm relative overflow-hidden text-white rounded-sm ">
        <img
          src={SubBanner}
          alt=""
          className="transition duration-300 ease-in-out hover:scale-110 object-cover overflow-hidden cursor-pointer"
        />
        <div>
          <div className=" max-w-42 flex flex-col absolute top-5 right-5 gap-2">
            <h1 className="text-2xl font-medium">{title}</h1>
            <p className="text-lg font-medium text-gray-300">
              From <span className="text-teal-500">$ {price}</span>
            </p>
            <button className="flex items-center gap-2 text-base font-medium transition-all duration-300 ease-in-out  hover:translate-x-2 cursor-pointer">
              Shop Now{" "}
              <FiArrowRight className="text-xl w-8 h-8 rounded-full bg-teal-500 p-1 transition-all duration-300 ease-in-out hover:bg-teal-600 hover:translate-x-2 cursor-pointer " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriSubBannerCard;
