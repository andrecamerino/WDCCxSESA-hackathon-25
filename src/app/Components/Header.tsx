import React from "react";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";

interface HeaderProps {
  title?: string;
}

const Header = ({ title = "PiggyQuest" }: HeaderProps) => {
  const isKidsPage = title === "PiggyQuest Kids";
  
  return (
    <div className="w-full bg-transparent fixed">
      <div className="grid grid-cols-[1fr_1fr_1fr] justify-evenly items-center w-full py-8 text-2xl font-medium text-black">
        <a href="/ProfilePage" className="flex">

        </a>
        <a href="/Home" className="text-2xl flex items-start justify-center">
          <span>PiggyQuest</span>
          {isKidsPage && (
            <span className="text-sm font-normal ml-1 mt-1">kids</span>
          )}
        </a>
        <a href="/ProfilePage" className="justify-center flex">
          <CgProfile size={40} />
        </a>
      </div>
    </div>
  );
};

export default Header;
