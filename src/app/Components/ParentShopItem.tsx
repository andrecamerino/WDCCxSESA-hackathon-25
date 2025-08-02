import React from "react";
import Image from "next/image";
import confetti from 'canvas-confetti';
import { useShopState } from './ShopStateContext';

type ShopItem = {
  id: number;
  name: string;
  value: number;
  imgSrc?: string;
  details?: string;
};

const ParentShopItem: React.FC<ShopItem> = ({ id, name, value, imgSrc, details }) => {
  const { globalProgress, purchaseItem, isItemPurchased } = useShopState();
  const isPurchased = isItemPurchased(id);

  const handleClick = () => {
    if (isPurchased) return; // Don't allow clicking if already purchased
    
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    // Purchase the item
    purchaseItem(id);
  };

  return (
    <div
      key={id}
      className={`bg-white rounded-3xl p-4 flex flex-col border-2 border-blue-200 cursor-pointer transition-all duration-300 ${
        isPurchased ? 'opacity-50 pointer-events-none' : 'hover:scale-105 hover:shadow-lg'
      }`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-lg font-semibold text-gray-800">{name}</span>
        <div className="flex items-center bg-yellow-100 rounded-full px-3 py-1">
          <span className="text-md font-medium text-yellow-700 mr-1">
            Value:
          </span>
          <span className="text-md font-bold text-yellow-800">$</span>
          <span className="text-md font-bold text-yellow-800">{value}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 rounded-lg flex items-center justify-center p-4 h-24 relative">
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt={name}
              layout="fill"
              objectFit="contain"
              className="rounded"
            />
          ) : (
            <span className="text-gray-500 text-sm">No image</span>
          )}
        </div>
        <div className="bg-gray-100 rounded-lg flex items-center justify-center p-4 h-24">
          <span className="text-gray-500 text-sm">{details || "No details"}</span>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mt-3">
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-green-600 rounded-full transition-all duration-300"
            style={{ width: `${globalProgress}%` }}
          />
        </div>
        <div className="text-xs text-gray-500 mt-1 text-center">
          Progress: {globalProgress}%
        </div>
      </div>
    </div>
  );
};

export default ParentShopItem;