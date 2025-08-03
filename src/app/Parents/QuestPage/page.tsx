"use client";

import React, { useState } from "react";
import "../../globals.css";
import { quests as initialQuests } from "../../data/QuestList";
import type { Quest } from "../../data/QuestList";
import QuestItem from "@/app/Components/QuestItem";

const QuestPage: React.FC = () => {
  const [quests, setQuests] = useState<Quest[]>(initialQuests);

  const toggleQuest = (index: number) => {
    setQuests((prevQuests) =>
      prevQuests.map((quest, i) =>
        i === index ? { ...quest, completed: !quest.completed } : quest
      )
    );
  };

  return (
    <div className="pt-30 min-h-screen bg-[url('/assets/background.png')] bg-fixed bg-center bg-cover flex flex-col items-center px-4 py-3">
      <QuestItem quests={quests} toggleQuest={toggleQuest} />
    </div>
  );
};

export default QuestPage;
