import React from "react";

const CategorieCard = ({ name, image }) => {
  return (
    <>
      <div className="w-20 sm:w-40">
        <div className="flex flex-col items-center gap-1 font-semibold text-gray-80">
          <img
            src={image}
            alt="Image-1"
            className="rounded-full object-cover w-20 h-20 sm:w-40 sm:h-40"
          />
          <h1>{name}</h1>
        </div>
      </div>
    </>
  );
};

export default CategorieCard;
