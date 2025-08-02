import React, { useState } from 'react'
import Image from 'next/image';
import confetti from 'canvas-confetti';
import { useShopState } from './ShopStateContext';

interface KidItemProps {
  id: number;
  name?: string;
  price?: number;
  imageSrc?: string;
}

const KidItem: React.FC<KidItemProps> = ({ 
  id, 
  name = "New Toy", 
  price = 100, 
  imageSrc = "/assets/example-photo.jpeg" 
}) => {
    const { globalProgress, purchaseItem, isItemPurchased } = useShopState();
    const isPurchased = isItemPurchased(id);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleClick = () => {
        if (isPurchased) return; // Don't allow clicking if already purchased
        setShowConfirm(true);
    };

    const handleConfirmPurchase = () => {
        // Trigger confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        
        // Purchase the item
        purchaseItem(id);
        setShowConfirm(false);
    };

    const handleCancel = () => {
        setShowConfirm(false);
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
                </div>

                {/* image showing the item */}
                <Image
                    src={imageSrc}
                    alt="Item"
                    width={0}
                    height={0}
                    className="rounded-2xl justify-center w-full h-15 object-cover p-2"
                />

                {/* progress bar */}
                <div className="w-full px-2 pb-2 pt-4">
                    <div className="w-full h-3 bg-gray-200 rounded-full">
                        <div
                            className="h-full bg-green-800 rounded-full transition-all duration-300"
                            style={{ width: `${globalProgress}%` }}
                        />
                    </div>
                </div>

            </div>
            <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1/2 w-[285px] h-[160px] rounded-3xl overflow-hidden">
                <Image
                    src="/assets/top-wooden-carton.png"
                    alt="Top Wooden Carton"
                    fill
                    className=""
                />
            </div>
            <div className="absolute bottom-0 left-1/4 z-20 -translate-x-6 -translate-y-1 w-[100px] h-[80px] rounded-3xl">
                <Image
                    src="/assets/coin.png"
                    alt="Coin"
                    fill
                    className=""
                />
                <span className="absolute bottom-0 transform translate-x-20 -translate-y-6 text-white text-2xl font-semibold">
                    : ${price}
                </span>

            </div>

            {/* Confirmation Popup */}
            {showConfirm && (
                <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white rounded-3xl p-6 mx-4 max-w-sm w-full shadow-2xl">
                        <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                            Confirm Purchase
                        </h3>
                        <p className="text-center mb-6 text-gray-600">
                            Are you sure you want to buy <span className="font-semibold">{name}</span> for <span className="font-semibold">${price}</span>?
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={handleCancel}
                                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-2xl transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirmPurchase}
                                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-2xl transition-colors"
                            >
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default KidItem