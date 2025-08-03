import React from "react";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className="w-full bg-transparent fixed top-0 z-50">
      <div className="grid grid-cols-3 items-center w-full py-8 text-2xl font-medium text-black px-4">
        {/* Left spacer to mimic coin section in kids version */}
        <div></div>

        {/* Center: title */}
        <a href="/Parents/HomePage" className="justify-center flex">
          PiggyQuest
        </a>

        {/* Right: profile icon */}
        <a href="/Parents/ProfilePage" className="justify-center flex">
          <CgProfile size={40} />
        </a>
      </div>
    </div>
  );
};

export default Header;
