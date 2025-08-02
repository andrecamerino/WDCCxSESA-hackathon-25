import React from 'react';
import Image from 'next/image'; // Ensure you have the correct import for images

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
    <div
      className="min-h-screen flex flex-col items-center justify-center relative font-squada-one text-white select-none"
      style={{
        backgroundImage: "url('/assets/userbackground.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Wooden planks background container */}
      <div className="w-full max-w-xs h-[400px] rounded-t-3xl overflow-hidden relative items-center">
        <div className="absolute inset-0 bg-center" />

        <div className="relative z-10 flex flex-col items-center pt-1">
          {/* User Icon */}
          <Image
            src="/assets/profile.png"
            alt="User Icon"
            className="rounded-full  border-white shadow-lg"
            width={140}
            height={96}
          />

          {/* Username */}
          <div className="text-2xl font-bold tracking-wide lowercase">{username}</div>

          {/* Account info card */}
          <div className="bg-white text-black rounded-xl px-6 py-4 w-72 flex items-center space-x-6 shadow-lg">
            {/* Balance box */}
            <div className="flex flex-col items-center justify-center bg-yellow-300 rounded-lg w-16 h-16">
              <div className="text-lg font-bold">$</div>
              <input
                type="number"
                readOnly
                value={balance.toFixed(2)}
                className="w-full text-center text-lg font-bold bg-transparent focus:outline-none"
              />
            </div>
            {/* Account info */}
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
            className="text-white underline text-sm cursor-pointer mt-3"
          >
            log out
          </button>
        </div>
      </div>


    </div>
  );
};

export default UserProfile;
