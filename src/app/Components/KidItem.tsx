import React from 'react'
import Image from 'next/image';

const KidItem = () => {
    const progressPercent = 60;
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
            <div className="relative z-20 w-55 h-55 bg-white shadow-2xl rounded-4xl mx-auto my-4 p-4">
                {/* text describing what the item is */}
                <div className="p-1">
                    <span className="text-md font-semibold">New Toy</span>
                </div>

                {/* image showing the item */}
                <Image
                    src="/assets/example-photo.jpeg"
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
                            style={{ width: `${progressPercent}%` }}
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
                    : $xxx
                </span>

            </div>



        </div>


    )
}

export default KidItem