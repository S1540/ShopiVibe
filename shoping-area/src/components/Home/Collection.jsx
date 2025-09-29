import React, { useState } from "react";

const Collection = () => {
  const [activeTab, setActiveTab] = useState("In Demand");

  const tabs = ["In Demand", "Widest Collection", "Special Offers"];

  return (
    <section>
      <div className="max-w-7xl mx-auto py-5 px-4 flex gap-5 bg-black/10 overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-sm font-semibold transition-colors duration-300 cursor-pointer ${
              activeTab === tab
                ? "bg-[#ff4500] text-white"
                : "bg-gray-400 text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Collection;
