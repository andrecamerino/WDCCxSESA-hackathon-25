'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FaHouse } from 'react-icons/fa6';
import { FaScroll } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

const KidsNavbar = () => {
  const { childID } = useParams();

  if (!childID) return null; // Optional: render nothing if childID is missing

  return (
    <div className="fixed bottom-0 w-full bg-white border-t-6 border-l-6 border-r-6 border-black rounded-t-3xl flex justify-around items-center py-3 z-999 h-[100px] text-2xl ">
      <Link
        href={`/Kids/${childID}/QuestPage`}
        style={{
          borderRadius: '30% 70% 35% 65% / 58% 25% 75% 42%',
        }}
        className="text-gray-700 bg-yellow-300 text-center flex items-center justify-center w-[70px] h-[70px] border-6 border-black"
      >
        <FaScroll className="text-black text-4xl font-bold" />
      </Link>
      <Link
        href={`/Kids/${childID}/HomePage`}
        style={{
          borderRadius: '54% 46% 56% 44% / 42% 58% 42% 58%',
        }}
        className="text-gray-700 bg-[#F164A9] text-center flex items-center justify-center w-[70px] h-[70px] border-6 border-black"
      >
        <FaHouse className="text-black text-4xl font-bold" />
      </Link>
      <Link
        href={`/Kids/${childID}/ShopPage`}
        style={{
          borderRadius: '68% 32% 63% 37% / 28% 72% 28% 72%',
        }}
        className="text-gray-700 bg-green-300 text-center flex items-center justify-center w-[70px] h-[70px] border-6 border-black"
      >
        <FaShoppingCart className="text-black text-4xl font-bold" />
      </Link>
    </div>
  );
};

export default KidsNavbar;