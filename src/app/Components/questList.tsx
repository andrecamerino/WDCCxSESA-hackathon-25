import React from 'react';
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
    <div className="flex flex-col gap-2 w-full max-w-md max-h-[600px] overflow-y-auto rounded-t-3xl">
      {quests.map((quest, index) => (
        <div
          key={index}
          style={{ fontFamily: 'var(--font-sour-gummy)' }}
          className="rounded-[60px] bg-white shadow-[6px_10px_0px_rgba(0,0,0,0.2)] p-8 flex flex-col items-center"
        >
          <p className="font-bold text-2xl mb-5 text-center">{quest.title}</p>
          <button
            className={`text-center px-20 py-3 rounded-full 
                shadow-[4px_3px_0px_rgba(0,0,0,0.2)] 
                active:shadow-[0px_0px_0px_rgba(0,0,0,0.2)] 
                active:translate-x-[3px] active:translate-y-[3px] 
                transition-all duration-200 
                text-white font--font-sour-gummy text-2xl 
                ${quest.completed ? 'bg-green-900' : 'bg-red-600'}`}
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