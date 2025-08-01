"use client";

import React from "react";
import ParentShopItem from "../Components/ParentShopItem";
import { useShopState, ShopStateProvider } from "../Components/ShopStateContext";

const ParentShopContent = () => {
  const { filters, addFilter, removeFilter, clearFilters } = useShopState();

  // Dummy data for shop items
  const shopItems = [
    { id: 1, name: "Golden Apple", value: 100 },
    { id: 2, name: "Magic Potion", value: 50 },
    { id: 3, name: "Dragon Scale", value: 250 },
    { id: 4, name: "Mystic Orb", value: 500 },
    { id: 5, name: "Phoenix Feather", value: 300 },
    { id: 6, name: "Invisibility Cloak", value: 700 },
    { id: 7, name: "Crystal Shard", value: 150 },
    { id: 8, name: "Time Turner", value: 1000 },
  ];

  const availableFilters = ["Toys", "Books", "Electronics", "Clothing", "Food", "Magic"];

  return (
    <div className="h-screen bg-gradient-to-tr from-[#DDFDFB] to-[#D4EEFF] flex flex-col items-center p-4 pt-20 overflow-hidden">
      <h1 className="text-[40px] pb-10">CURRENT QUESTS</h1>
      
      {/* Shop Items Container - Scrollable */}
      <div className="w-full max-w-md flex-1 space-y-2 overflow-y-auto pb-48">
        {shopItems.map((item) => (
          <ParentShopItem
            key={item.id}
            id={item.id}
            name={item.name}
            value={item.value}
            imgSrc={`/assets/shop-items/${item.name.toLowerCase().replace(/ /g, "-")}.png`}
            details={`Details about ${item.name}`}
          />
        ))}
      </div>

      {/* Filters Section at Bottom - Fixed */}
      <div className="w-full max-w-md fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Filters</h3>
          
          {/* Active Filters */}
          {filters.length > 0 && (
            <div className="mb-3">
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => removeFilter(filter)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition-colors"
                  >
                    {filter} ×
                  </button>
                ))}
                <button
                  onClick={clearFilters}
                  className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-600 transition-colors"
                >
                  Clear All
                </button>
              </div>
            </div>
          )}

          {/* Available Filters */}
          <div className="flex flex-wrap gap-2">
            {availableFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => addFilter(filter)}
                disabled={filters.includes(filter)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  filters.includes(filter)
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <ShopStateProvider>
      <ParentShopContent />
    </ShopStateProvider>
  );
};

export default Page;