"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NotificationContainer from "../../../Components/NotificationContainer";
import Image from "next/image";

interface Child {
  _id: string;
  name: string;
  email: string;
  money: number;
}

const greetingTemplates = [
  (name: string) => `Welcome back, superstar ${name}!`,
  (name: string) => `Hey there, explorer ${name}!`,
  (name: string) => `Good to see you, champ ${name}!`,
  (name: string) => `You're awesome, ${name}!`,
  (name: string) => `Let’s go, hero ${name}!`,
  (name: string) => `Ready for more quests, ${name}?`,
  (name: string) => `Keep shining, ${name}!`,
  (name: string) => `You're doing amazing, ${name}!`,
];

const recapTemplates = [
  (name: string) => `Here’s what you missed, ${name} 🕵️‍♂️`,
  (name: string) => `Catch up time, ${name}! 📬`,
  (name: string) => `Let’s see what’s new, ${name}! 🌟`,
  (name: string) => `Your updates await, ${name}! 🧾`,
  (name: string) => `Here’s your daily quest recap, ${name}! 🐷`,
];

const Page = () => {
  const { childID } = useParams();
  const [child, setChild] = useState<Child | null>(null);
  const [greeting, setGreeting] = useState<string>("");
  const [recap, setRecap] = useState<string>("");

  useEffect(() => {
    const fetchChild = async () => {
      try {
        if (!childID) return;
        const res = await fetch(`/api/children/${childID}`);
        const data = await res.json();
        setChild(data);

        const greetingFn =
          greetingTemplates[Math.floor(Math.random() * greetingTemplates.length)];
        const recapFn =
          recapTemplates[Math.floor(Math.random() * recapTemplates.length)];

        setGreeting(greetingFn(data.name));
        setRecap(recapFn(data.name));
      } catch (err) {
        console.error("Failed to fetch child info:", err);
      }
    };

    fetchChild();
  }, [childID]);

  return (
    <div
      style={{
        backgroundImage: "url('/assets/grass-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="overflow-hidden pt-20 flex flex-col items-center justify-start text-center"
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

      {/* Greeting + Recap */}
      <div className="text-center mt- px-4">
        <h1 className="text-3xl font-bold">
          {child ? greeting : "Loading..."}
        </h1>
        <h3 className="text-xl mt-2">
          {child ? recap : ""}
        </h3>
      </div>

      {/* Notifications */}
      <div className="w-full px-2">
        <NotificationContainer />
      </div>
    </div>
  );
};

export default Page;