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
      <Image
        src="/assets/piggy.png"
        alt="Piggy Quest"
        width={150}
        height={150}
        className="mx-auto mt-10"
      />
      <NotificationContainer />
    </div>
  );
};

export default Page;
