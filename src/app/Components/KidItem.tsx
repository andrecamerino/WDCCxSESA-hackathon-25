import React from "react";
import Image from "next/image";
import confetti from "canvas-confetti";

interface KidItemProps {
  name: string;
  price: number;
  imgSrc?: string;
  stock?: number;
  uploadedBy?: string;

  isPurchased: boolean;               // add this prop
  onPurchase: () => void;             // add this prop
  globalProgress?: number;            // optional, add if you want dynamic progress
}

const KidItem: React.FC<KidItemProps> = ({
  name,
  price,
  imgSrc = "/assets/example-photo.jpeg",
  stock = 1,
  uploadedBy,
  isPurchased,
  onPurchase,
  globalProgress = 40,
}) => {

  // Determine background color based on whether user has enough money
  const canBuy = true; // You can pass this as a prop if needed
  const buttonBgColor = canBuy ? "bg-green-500" : "bg-red-500";

  const handleClick = () => {
    if (isPurchased) return;
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    onPurchase();
  };

  return (
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
          isPurchased ? 'opacity-50 pointer-events-none' : 'hover:scale-105'
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
        className={`absolute bottom-0 left-1/4 z-20 -translate-x-6 -translate-y-1 w-[200px] h-[80px] rounded-3xl ${buttonBgColor} border-4 border-black flex items-center justify-center gap-2`}
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
  );
};

export default KidItem;