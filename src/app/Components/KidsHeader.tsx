'use client';

import React from 'react';
import { CgProfile } from 'react-icons/cg';
import Image from 'next/image';
import Link from 'next/link';
import { useChild } from '@/context/ChildContext'; // ← use the context hook

const Header = () => {
  const { childID, money } = useChild(); // ← get shared state

  if (!childID) return null;

  return (
    <div className="w-full bg-transparent fixed">
      <div className="grid grid-cols-[1fr_1fr_1fr] justify-evenly items-center w-full py-8 text-2xl font-medium text-black">
        <Link href={`/Kids/${childID}/ShopPage`} className="flex items-center gap-2">
          <Image
            src="/assets/coin.png"
            alt="PiggyQuest Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <p>${money !== null ? money : '...'}</p>
        </Link>
        <Link href={`/Kids/${childID}/HomePage`} className="text-2xl">
          PiggyQuest
        </Link>
        <Link href={`/Kids/${childID}/ProfilePage`} className="justify-center flex">
          <CgProfile size={40} />
        </Link>
      </div>
    </div>
  );
};

export default Header;