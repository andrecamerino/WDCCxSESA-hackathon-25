"use client";

import React from "react";
import NotificationContainer from "../../Components/NotificationContainer";
import Image from "next/image";

const Page = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/grass-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      
      className="overflow-hidden pt-20"
    >
      {/* Clouds Layer */}
      <div className="relative w-full h-40 mt-10 overflow-hidden">
        <Image
          src="/assets/cloud.png"
          alt="Cloud 1"
          width={100}
          height={60}
          className="absolute top-4 animate-cloud-left-to-right opacity-100"
        />

        <Image
          src="/assets/cloud.png"
          alt="Cloud 2"
          width={120}
          height={70}
          className="absolute top-20 animate-cloud-left-to-right-slow opacity-100"
        />

        {/* Piggy Image */}
        <div className="relative z-10 flex justify-center">
          <Image
            src="/assets/piggy.png"
            alt="Piggy Quest"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default Page;
