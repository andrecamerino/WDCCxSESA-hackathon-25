'use client';

import React from 'react';
// Importing icons from react-icons
// If you encounter "Could not resolve" errors, ensure you have installed react-icons:
// npm install react-icons
// or
// yarn add react-icons
// After installation, restart your development server (e.g., npm run dev)
import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { IoBagOutline, IoDocumentTextOutline } from "react-icons/io5"; // Using IoDocumentTextOutline for Quests

const Page = () => {
  // Dummy data for shop items
  const shopItems = [
    { id: 1, name: 'Golden Apple', value: 100 },
    { id: 2, name: 'Magic Potion', value: 50 },
    { id: 3, name: 'Dragon Scale', value: 250 },
    { id: 4, name: 'Mystic Orb', value: 500 },
  ];

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center p-4 antialiased">
      {/* Header */}
      <header className="w-full max-w-md flex justify-between items-center mb-8 pt-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center flex-grow">
          Piggy Quest <br /> Shop
        </h1>
        {/* Replaced UserCircle with CgProfile */}
        <CgProfile size={40} className="text-gray-600" />
      </header>

      {/* Shop Items Container */}
      <main className="w-full max-w-md flex-grow space-y-4 pb-20">
        {shopItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col border border-blue-200"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg font-semibold text-gray-800">
                {item.name}
              </span>
              <div className="flex items-center bg-yellow-100 rounded-full px-3 py-1">
                <span className="text-md font-medium text-yellow-700 mr-1">
                  Value:
                </span>
                <span className="text-md font-bold text-yellow-800">$</span>
                <span className="text-md font-bold text-yellow-800">
                  {item.value}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg flex items-center justify-center p-4 h-24">
                <span className="text-gray-500 text-sm">Image</span>
              </div>
              <div className="bg-gray-100 rounded-lg flex items-center justify-center p-4 h-24">
                {/* This could be for description or more details */}
                <span className="text-gray-500 text-sm">Details</span>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-xl p-4 flex justify-around items-center max-w-md mx-auto border-t border-gray-200">
        <div className="flex flex-col items-center text-gray-600 hover:text-blue-500 cursor-pointer">
          {/* Replaced ScrollText with IoDocumentTextOutline */}
          <IoDocumentTextOutline size={24} />
          <span className="text-xs mt-1">Quests</span>
        </div>
        <div className="flex flex-col items-center text-gray-600 hover:text-blue-500 cursor-pointer">
          {/* Replaced Home with GoHome */}
          <GoHome size={24} />
          <span className="text-xs mt-1">Home</span>
        </div>
        <div className="flex flex-col items-center text-blue-500 cursor-pointer">
          {/* Replaced ShoppingBag with IoBagOutline */}
          <IoBagOutline size={24} />
          <span className="text-xs mt-1">Shop</span>
        </div>
      </nav>
    </div>
  );
};

export default Page;