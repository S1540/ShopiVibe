import React from "react";
import { useRef } from "react";
import mens from "../../assets/categories/category-mens.jpg";
import womens from "../../assets/categories/category-womens.jpg";
import kids from "../../assets/categories/category-kids.jpg";
import laptop from "../../assets/categories/category-laptop.jpg";
import mobile from "../../assets/categories/category-mobile.jpg";
import shoes from "../../assets/categories/category-shoes.jpg";
import toy from "../../assets/categories/category-toy.jpg";
import bedsheet from "../../assets/categories/category-bedsheet.jpg";
import kitchen from "../../assets/categories/category-kitchen.jpg";
import facewash from "../../assets/categories/category-facewash.jpg";
import CategorieCard from "./CategorieCard";
import item1 from "../../assets/categories/Sub-banner-1.jpg";
import item2 from "../../assets/categories/Sub-banner-2.jpg";
import item3 from "../../assets/categories/Sub-banner-3.jpg";
import CategoriSubBannerCard from "./CategoriSubBannerCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "../../../public/Button";

const Categories = () => {
  const categories = [
    { id: 1, name: "Mens", image: mens },
    { id: 2, name: "Womens", image: womens },
    { id: 3, name: "Kids", image: kids },
    { id: 4, name: "Laptop", image: laptop },
    { id: 5, name: "Mobile", image: mobile },
    { id: 6, name: "Shoes", image: shoes },
    { id: 7, name: "Toy", image: toy },
    { id: 8, name: "Bedsheet", image: bedsheet },
    { id: 9, name: "Kitchen", image: kitchen },
    { id: 10, name: "Facewash", image: facewash },
  ];

  const subOfferbanner = [
    {
      id: 1,
      title: "Latest Wireless Headphones",
      price: "99.50",
      subBanner: item1,
    },
    {
      id: 2,
      title: "Latest Smart Watch",
      price: "54.00",
      subBanner: item2,
    },
    {
      id: 3,
      title: "Motorola New SmartPhone",
      price: "97.50",
      subBanner: item3,
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <section className="max-w-7xl mx-auto pt-24 md:pt-34 px-4">
        <div className="flex items-center justify-between border-b border-gray-400 pb-3">
          <div className="relative">
            <h1 className="text-2xl sm:text-4xl font-semibold">Categories</h1>
            <span className=" absolute top-12 sm:top-13 h-0.5 max-w-44 w-full  bg-gradient-to-r from-indigo-600 via-teal-500  to-indigo-600 inline-block"></span>
          </div>

          <div className="flex gap-5 items-center">
            <Button button={"View All"} />

            {/* prev + Next */}
            <div className="md:flex shrink-0 gap-2 hidden">
              <FaChevronLeft
                onClick={scrollLeft}
                color="white"
                className="max-w-9 w-full h-9 bg-indigo-400 rounded-full p-2 hover:bg-orange-500 hover:text-black transition-all duration-300 cursor-pointer"
              />
              <FaChevronRight
                onClick={scrollRight}
                color="white"
                className="max-w-9 w-full h-9 bg-indigo-600 rounded-full p-2 hover:bg-orange-500 hover:text-black transition-all duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* 📱 Mobile grid */}
        <div className="grid grid-cols-3 gap-4 mt-8 md:hidden">
          {categories.map((item, index) => (
            <CategorieCard key={index} name={item.name} image={item.image} />
          ))}
        </div>

        {/* 💻 Tablet/Desktop: Horizontal scroll */}
        <div
          ref={scrollRef}
          className="hidden md:block overflow-x-auto scrollbar-hide no-scrollbar mt-8"
        >
          <div className="flex gap-6 min-w-max px-2">
            {categories.map((item, index) => (
              <div key={index} className="flex-shrink-0">
                <CategorieCard name={item.name} image={item.image} />
              </div>
            ))}
          </div>
        </div>

        {/* Sub Offer Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-14 place-items-center">
          {subOfferbanner.map((item, index) => (
            <CategoriSubBannerCard
              key={index}
              SubBanner={item.subBanner}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Categories;
