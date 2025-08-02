"use client";

import React from 'react';
import QuestList from '../Components/QuestList';
import { useState } from 'react';
import "../globals.css";
import {quests as initialQuests, Quest} from "../data/QuestList"

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
    <div>
      <h1 className='bg---primary-background flex flex-col items-center px-4 py-4'>Piggy Quest</h1>
    </div>
    <div className="min-h-screen bg---primary-background flex flex-col items-center px-4 py-3">
      {/* You can put header/nav here if needed */}
      <QuestList quests={quests} toggleQuest={toggleQuest} />
    </div>
    </>
  );
};

export default HomePage;
