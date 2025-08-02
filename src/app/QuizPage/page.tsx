"use client";

import React from 'react';
import QuestList from '../Components/questList';
import { useState } from 'react';
import "../globals.css";
import {quests as initialQuests} from "../data/QuestList"
import type {Quest} from "../data/QuestList"

const HomePage: React.FC = () => {
  const [quests, setQuests] = useState<Quest[]>(initialQuests);

  const toggleQuest = (index: number) => {
    setQuests((prev) =>
      // This switches button state between done and not done
      prev.map((quest, i) =>
        i === index ? { ...quest, completed: !quest.completed } : quest
      )
    );
  };

  return (
    <>
    <div className="min-h-screen bg-[url('/assets/background.png')] bg-fixed bg-center flex flex-col items-center px-4 py-3">
      {/* You can put header/nav here if needed */}
      <QuestList quests={quests} toggleQuest={toggleQuest} />
    </div>
    </>
  );
};

export default HomePage;
