import React, { useEffect, useState } from "react";
import "../globals.css";
import QuestItem from "./QuestItem";

type Quest = {
  _id: string;
  task: string;
  reward: number;
  completed: boolean;
  person: string;
  createdAt: string;
};

const QuestContainer: React.FC = () => {
  const [quests, setQuests] = useState<Quest[]>([]);

  useEffect(() => {
    const fetchQuests = async () => {
      try {
        const response = await fetch("/api/quests");
        const data = await response.json();
        setQuests(data);
      } catch (error) {
        console.error("Error fetching quests:", error);
      }
    };

    fetchQuests();
  }, []);

  return (
    <div className="flex flex-col gap-2 w-full max-w-md max-h-[600px] overflow-y-auto rounded-t-3xl">
      {quests
        .slice()
        .sort((a, b) => {
          if (a.completed !== b.completed) {
            return Number(a.completed) - Number(b.completed); // incomplete first
          }
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          ); // newest first
        })
        .map((quest) => (
          <QuestItem
            key={quest._id}
            id={quest._id}
            task={quest.task}
            reward={quest.reward}
            completed={quest.completed}
            person={quest.person}
          />
        ))}
    </div>
  );
};

export default QuestContainer;
