import React from 'react';
import Image from 'next/image';

type UserProfileProps = {
  username: string;
  accountType: string;
  subscription: string;
  balance?: number;
  onLogout: () => void;
};

const UserProfile: React.FC<UserProfileProps> = ({
  username,
  accountType,
  subscription,
  balance = 0,
  onLogout,
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--parent-blue)] font-squada-one text-black select-none">
      <div className="w-full max-w-xs h-[400px] rounded-t-3xl overflow-hidden flex flex-col items-center justify-center relative">
        {/* User Icon */}
        <Image
          src="/assets/profile.png"
          alt="User Icon"
          className="rounded-full border-white shadow-lg"
          width={140}
          height={96}
        />

        {/* Username */}
        <div className="text-2xl font-bold tracking-wide lowercase mt-4">{username}</div>

        {/* Account info card */}
        <div className="bg-white text-black rounded-xl px-4 py-4 w-80 flex items-center shadow-lg mt-4">
          {/* Left: Coin icon and balance */}
          <div className="flex flex-col items-center w-20 space-y-2">
            <Image
              src="/assets/coin.png"
              alt="Coin Icon"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold">$</span>
              <input
                type="number"
                readOnly
                value={balance.toFixed(2)}
                className="w-[60px] text-center text-md font-bold bg-transparent border-b-2 border-black focus:outline-none"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-l h-16 mx-4" />

          {/* Right: Account info */}
          <div className="flex flex-col text-sm space-y-2">
            <div>
              <span className="font-bold">account type:</span> {accountType}
            </div>
            <div>
              <span className="font-bold">subscription:</span> {subscription}
            </div>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="text-black underline text-sm cursor-pointer mt-3"
        >
          log out
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
