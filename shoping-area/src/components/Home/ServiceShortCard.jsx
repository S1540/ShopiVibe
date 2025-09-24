import { Icon } from "lucide-react";
import React from "react";

const ServiceShortCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="w-72 h-24 sm:h-40 bg-gray-200 flex items-center justify-center gap-4 border border-gray-300">
      <div className="flex-shrink-0">
        <Icon className="text-2xl sm:text-4xl text-blue-500" />
      </div>

      <div className=" max-w-52 flex flex-col justify-center text-left space-y-1 pr-8">
        <h1 className="font-medium text-lg">{title}</h1>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceShortCard;
