import React, { useState } from "react";
import Image from "next/image";

type Quest = {
  id: string;
  task: string;
  reward: number;
  completed: boolean;
  person: string;
};

const QuestItem: React.FC<Quest> = ({
  id,
  task,
  reward,
  completed,
  person,
}) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  const toggleQuest = async () => {
    try {
      const response = await fetch(`/api/quests/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !isCompleted }),
      });

      if (!response.ok) throw new Error("Failed to update quest");

      setIsCompleted(!isCompleted);
    } catch (error) {
      console.error("Error updating quest:", error);
    }
  };

  return (
    <div
      key={id}
      style={{ fontFamily: "var(--font-sour-gummy)" }}
      className="rounded-[60px] bg-white shadow-[6px_10px_0px_rgba(0,0,0,0.2)] p-8 flex flex-col items-start"
    >
      <div className="flex justify-between items-center w-full mb-4">
        <p className="text-lg">Quest from: {person}</p>
        <div className="flex items-center justify-center bg-amber-200 rounded-full px-3 py-1 gap-x-2">
          <Image
            src="/assets/coin.png"
            alt="coin"
            width={40}
            height={24}
            className="inline-block"
          />
          <p className="text-lg">{reward}</p>
        </div>
      </div>

      <p className="font-bold text-2xl mb-5 text-center w-full">{task}</p>

      <button
        className={`text-center w-full px-6 py-3 rounded-full 
          shadow-[4px_3px_0px_rgba(0,0,0,0.2)] 
          active:shadow-[0px_0px_0px_rgba(0,0,0,0.2)] 
          active:translate-x-[3px] active:translate-y-[3px] 
          transition-all duration-200 
          text-white font--font-sour-gummy text-2xl 
          ${isCompleted ? "bg-green-900" : "bg-red-600"}`}
        onClick={toggleQuest}
      >
        {isCompleted ? "done" : "not done"}
      </button>
    </div>
  );
};

export default QuestItem;
