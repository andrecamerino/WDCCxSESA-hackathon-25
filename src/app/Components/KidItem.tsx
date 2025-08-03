import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { useShopState } from "./ShopStateContext";

interface KidItemProps {
  _id: string;
  name: string;
  price: number;
  imgSrc?: string;
  stock?: number;
  uploadedBy?: string;
}

const KidItem: React.FC<KidItemProps> = ({
  _id,
  name,
  price,
  imgSrc = "/assets/example-photo.jpeg",
  stock = 1,
  uploadedBy,
}) => {
  const { isPurchased, markAsPurchased } = useShopState();
  const [showPopup, setShowPopup] = useState(false);

  // This is the amount of money the user currently has (link to DB later)
  const userMoney = 10; // example value

  // Determine background color based on whether user has enough money
  const canBuy = userMoney >= price;
  const buttonBgColor = canBuy ? "bg-green-500" : "bg-red-500";

  const purchased = isPurchased(_id);
  const globalProgress = 40;

  const handleClick = () => {
    if (purchased || !canBuy) return;
    setShowPopup(true);
  };

  const handleConfirmPurchase = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    
    markAsPurchased(_id);
    setShowPopup(false);
    console.log(`Purchased ${name}`);
  };

  const handleCancelPurchase = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="relative w-72 mx-auto p-2">
        {/* Bottom wooden carton background */}
        <Image
          src="/assets/full-wooden-carton.png"
          alt="Wooden Box Background"
          fill
          className="absolute bottom-0 left-1/2 transform translate-y-1/4 z-10"
        />

        {/* entire item container */}
        <div 
          className={`relative z-20 w-55 h-55 bg-white shadow-2xl rounded-4xl mx-auto my-4 p-4 cursor-pointer transition-all duration-300 ${
            purchased ? 'opacity-30 pointer-events-none' : 'hover:scale-105'
          }`}
          onClick={handleClick}
        >
          {/* text describing what the item is */}
          <div className="p-1">
            <span className="text-md font-semibold">{name}</span>
            {uploadedBy && (
              <span className="text-sm text-gray-500">Uploaded by {uploadedBy}</span>
            )}
          </div>

          {/* image showing the item */}
          {imgSrc !== "" && (
            <Image
              src={imgSrc}
              alt="Item"
              width={0}
              height={0}
              className="rounded-2xl justify-center w-full h-15 object-cover p-2"
            />
          )}

          {/* progress bar */}
          <div className="w-full px-2 pb-2 pt-4">
            <div className="w-full h-3 bg-gray-200 rounded-full">
              <div
                className="h-full bg-green-800 rounded-full transition-all duration-300"
                style={{ width: `${globalProgress}%` }}
              />
            </div>
          </div>

          {stock > 1 && (
            <div className="text-2xl text-gray-600 text-right pr-2">x{stock}</div>
          )}
        </div>
        <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-4/10 w-[285px] h-[160px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/top-wooden-carton.png"
            alt="Top Wooden Carton"
            fill
            className=""
          />
        </div>

        {/* Price container with dynamic background color */}
        <div
          className={`absolute bottom-0 left-1/4 z-20 -translate-x-6 -translate-y-1 w-[200px] h-[80px] rounded-3xl ${buttonBgColor} border-4 border-black flex items-center justify-center gap-2 cursor-pointer transition-transform duration-200 hover:scale-105 ${
            purchased ? 'pointer-events-none' : ''
          }`}
          onClick={handleClick}
        >
          <Image
            src="/assets/coin.png"
            alt="Coin"
            width={60}
            height={60}
            className=""
          />
          <span className="text-black text-2xl font-semibold select-none">
            : ${price}
          </span>
        </div>
      </div>

      {/* Purchase Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-6 mx-4 max-w-sm w-full shadow-2xl border-4 border-black">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Confirm Purchase</h3>
              
              <div className="mb-6">
                <div className="flex items-center justify-center mb-3">
                  {imgSrc !== "" && (
                    <Image
                      src={imgSrc}
                      alt={name}
                      width={80}
                      height={80}
                      className="rounded-2xl object-cover"
                    />
                  )}
                </div>
                <p className="text-lg font-semibold text-gray-700 mb-2">{name}</p>
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src="/assets/coin.png"
                    alt="Coin"
                    width={30}
                    height={30}
                  />
                  <span className="text-xl font-bold text-gray-800">${price}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleCancelPurchase}
                  className="flex-1 bg-gray-500 text-white py-3 px-4 rounded-2xl font-semibold hover:bg-gray-600 transition-colors border-2 border-black"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmPurchase}
                  className="flex-1 bg-green-500 text-white py-3 px-4 rounded-2xl font-semibold hover:bg-green-600 transition-colors border-2 border-black"
                >
                  Buy Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KidItem;