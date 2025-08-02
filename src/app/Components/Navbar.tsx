import React from "react";
import { GoHome } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around items-center py-3 z-50 h-[100px] text-2xl">
      <a href="/QuestPage" className="text-gray-700 text-center">
        Quest
      </a>
      <a
        href="/Home"
        style={{
          borderRadius: "68% 32% 63% 37% / 28% 72% 28% 72%",
        }}
        className="text-gray-700 bg-[#F164A9] text-center flex items-center justify-center w-[70px] h-[70px]"
      >
        <GoHome className="text-white text-4xl" />
      </a>
      <a href="/ShopPage" className="text-gray-700 text-center">
        Shop
      </a>
    </div>
  );
};

export default Navbar;