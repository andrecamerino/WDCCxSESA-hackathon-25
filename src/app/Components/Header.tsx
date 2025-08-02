import React from "react";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full bg-transparent fixed">
      <div className="grid grid-cols-[1fr_1fr_1fr] justify-evenly items-center w-full py-8 text-2xl font-medium text-black">
        <a href="/ProfilePage" className="flex">
          <Image
            src="/assets/coin.png"
            alt="coin"
            width={50}
            height={50}
            className="rounded-full"
          />
          <p>$xxx</p>
        </a>
        <a href="/Home" className="text-2xl">
          PiggyQuest
        </a>
        <a href="/ProfilePage" className="justify-center flex">
          <CgProfile size={40} />
        </a>
      </div>
    </div>
  );
};

export default Header;
