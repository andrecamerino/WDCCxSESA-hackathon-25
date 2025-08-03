import React, { useState } from "react";
import Image from "next/image";

type Quest = {
  id: string;
  task: string;
  reward: number;
  completed: boolean;
  person: string;
  isParent?: boolean;
};

const QuestItem: React.FC<Quest> = ({
  id,
  task,
  reward,
  completed,
  person,
  isParent = false,
}) => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const [isCoinJumping, setIsCoinJumping] = useState(false);

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

      const newCompletedState = !isCompleted;
      setIsCompleted(newCompletedState);
      
      // Trigger coin jump animation when quest is completed
      if (newCompletedState) {
        setIsCoinJumping(true);
        setTimeout(() => setIsCoinJumping(false), 1000); // Reset after animation
      }
    } catch (error) {
      console.error("Error updating quest:", error);
    }
  };

  // Different border sizes for parents vs kids
  const borderClass = isParent ? "border-2" : "border-6";
  const buttonBorderClass = isParent ? "border-4" : "border-6";
  const coinBorderClass = isParent ? "border-4" : "border-6";

  return (
    <div
      key={id}
      style={{ fontFamily: "var(--font-sour-gummy)" }}
      className={`rounded-[60px] bg-white shadow-[6px_10px_0px_rgba(0,0,0,0.2)] p-8 flex flex-col items-start ${borderClass} border-black`}
    >
      <div className="flex justify-between items-center w-full mb-4">
        <p className="text-lg">Quest from: {person}</p>
        <div className={`flex items-center justify-center bg-amber-200 rounded-full px-3 py-1 gap-x-2 ${coinBorderClass} border-black`}>
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
        className={`${buttonBorderClass} border-black text-center w-full px-6 py-3 rounded-full 
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

      <style jsx>{`
        @keyframes smoothJump {
          0% {
            transform: translateY(0px);
          }
          25% {
            transform: translateY(-7px);
          }
          50% {
            transform: translateY(-16px);
          }
          75% {
            transform: translateY(-7px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default QuestItem;
