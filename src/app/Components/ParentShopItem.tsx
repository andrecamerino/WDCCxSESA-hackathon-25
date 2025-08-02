import React from "react";
import Image from "next/image";

type ShopItem = {
  id: number;
  name: string;
  value: number;
  imgSrc?: string;
  details?: string;
};

const ParentShopItem: React.FC<ShopItem> = ({ id, name, value, imgSrc, details }) => {
  return (
    <div
      key={id}
      className="bg-white rounded-3xl p-4 flex flex-col border-2 border-blue-200"
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
    </div>
  );
};

export default ParentShopItem;