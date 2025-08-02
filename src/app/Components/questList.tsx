import React from 'react';
import { useState } from 'react';
import "../globals.css";

type Quest = {
  title: string;
  completed: boolean;
};

type QuestListProps = {
  quests: Quest[];
  toggleQuest: (index: number) => void;
};

const QuestList: React.FC<QuestListProps> = ({ quests, toggleQuest }) => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-md ">
      {quests.map((quest, index) => (
        <div key={index} className="rounded-3xl bg-white shadow-[6px_10px_0px_rgba(0,0,0,0.2)] p-6 flex flex-col items-center">
          <p className="font-bold text-lg mb-2 text-center">{quest.title}</p>
          <button
            className={`text-center px-20 py-2 rounded-full shadow-[4px_3px_0px_rgba(0,0,0,0.2)] text-white font---font-sour-gummy ${
              quest.completed ? 'bg-green-600' : 'bg-red-600'
            }`}
            onClick={() => toggleQuest(index)}
          >
            {quest.completed ? 'done' : 'not done'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default QuestList;
