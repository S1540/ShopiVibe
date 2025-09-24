import { Icon } from "lucide-react";
import React from "react";

const ServiceShortCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="w-full sm:w-72 h-8 sm:h-40 bg-gray-200 flex items-center justify-center gap-4 border border-gray-300 rounded-sm">
      <div className="flex-shrink-0">
        <Icon className="text-2xl sm:text-4xl text-blue-500 " />
      </div>

      <div className="max-w-[180px] flex flex-col justify-center space-y-1">
        <h1 className="font-medium text-lg pr-4">{title}</h1>
        <p className="text-gray-600 hidden sm:block text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceShortCard;
