'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FaHouse } from 'react-icons/fa6';
import { FaScroll } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

const KidsNavbar = () => {
  const { childID } = useParams();

  if (!childID) return null;

  return (
    <div className="fixed bottom-0 w-full bg-white border-t-6 border-l-6 border-r-6 border-black rounded-t-3xl flex justify-around items-center py-3 z-[999] h-[100px] text-2xl">
      {/* Quests */}
      <Link
        href={`/Kids/${childID}/QuestPage`}
        className="text-gray-700 text-center flex items-center justify-center w-[70px] h-[70px] border-6 border-black bg-yellow-300 hover:scale-105 transition-transform"
        style={{
          borderRadius: '30% 70% 35% 65% / 58% 25% 75% 42%',
        }}
      >
        <FaScroll className="text-black text-4xl font-bold" />
      </Link>

      {/* Home */}
      <Link
        href={`/Kids/${childID}/HomePage`}
        className="text-gray-700 text-center flex items-center justify-center w-[70px] h-[70px] border-6 border-black bg-[#F164A9] hover:scale-105 transition-transform"
        style={{
          borderRadius: '54% 46% 56% 44% / 42% 58% 42% 58%',
        }}
      >
        <FaHouse className="text-black text-4xl font-bold" />
      </Link>

      {/* Shop */}
      <Link
        href={`/Kids/${childID}/ShopPage`}
        className="text-gray-700 text-center flex items-center justify-center w-[70px] h-[70px] border-6 border-black bg-green-300 hover:scale-105 transition-transform"
        style={{
          borderRadius: '68% 32% 63% 37% / 28% 72% 28% 72%',
        }}
      >
        <FaShoppingCart className="text-black text-4xl font-bold" />
      </Link>
    </div>
  );
};

export default KidsNavbar;