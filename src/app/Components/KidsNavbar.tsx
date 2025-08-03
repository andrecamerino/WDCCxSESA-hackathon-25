'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaHouse } from "react-icons/fa6";
import { FaScroll } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const KidsNavbar = () => {
  const [clicked, setClicked] = useState("");
  const router = useRouter();

  const handleClick = (page: string, id: string) => {
    setClicked(id);

    setTimeout(() => {
      router.push(page);
      setClicked(""); // Reset after navigation
    }, 200); // Duration matches the animation time
  };

  const getClass = (id: string) =>
    `text-gray-700 text-center flex items-center justify-center w-[70px] h-[70px] border-6 border-black transition-transform duration-150 ease-in-out ${
      clicked === id ? "scale-90" : "scale-100"
    }`;

  return (
    <div className="fixed bottom-0 w-full bg-white border-t-6 border-l-6 border-r-6 border-black rounded-t-3xl flex justify-around items-center py-3 z-999 h-[100px] text-2xl">
      <button
        onClick={() => handleClick("/Kids/QuestPage", "quest")}
        style={{
          borderRadius: "30% 70% 35% 65% / 58% 25% 75% 42%",
        }}
        className={`${getClass("quest")} bg-yellow-300`}
      >
        <FaScroll className="text-black text-4xl font-bold" />
      </button>

      <button
        onClick={() => handleClick("/Kids/HomePage", "home")}
        style={{
          borderRadius: "54% 46% 56% 44% / 42% 58% 42% 58%",
        }}
        className={`${getClass("home")} bg-[#F164A9]`}
      >
        <FaHouse className="text-black text-4xl font-bold" />
      </button>

      <button
        onClick={() => handleClick("/Kids/ShopPage", "shop")}
        style={{
          borderRadius: "68% 32% 63% 37% / 28% 72% 28% 72%",
        }}
        className={`${getClass("shop")} bg-green-300`}
      >
        <FaShoppingCart className="text-black text-4xl font-bold" />
      </button>
    </div>
  );
};

export default KidsNavbar;
