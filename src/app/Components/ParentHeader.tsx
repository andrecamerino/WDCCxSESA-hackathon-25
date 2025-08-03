import React from "react";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className="w-full bg-transparent fixed">
      <div className="grid grid-cols-[1fr_1fr_1fr] justify-evenly items-center w-full py-8 text-2xl font-medium text-black">
        <a href="/Parents/HomePage" className="text-2xl">
          PiggyQuest
        </a>
        <a href="/Parents/ProfilePage" className="justify-center flex">
          <CgProfile size={40} />
        </a>
      </div>
    </div>
  );
};

export default Header;
