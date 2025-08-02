"use client";

import React from "react";
import ParentShopItem from "../../Components/ParentShopItem";

const Page = () => {

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

  return (
    <div className="h-screen bg-gradient-to-tr from-[#DDFDFB] to-[#D4EEFF] flex flex-col items-center p-4 pt-20 antialiased">
      <h1 className="text-[40px] pb-10">CURRENT QUESTS</h1>
      {/* Shop Items Container */}
      <div className="w-full max-w-md flex-grow space-y-2 pb-34 overflow-y-auto rounded-3xl">
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
    </div>
  );
};

export default Page;