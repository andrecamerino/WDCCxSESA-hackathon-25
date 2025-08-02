'use client';

import { useEffect, useState } from 'react';
import { loadQuests, saveQuests, type Quest } from '../data/QuestList';
import QuestList from '../Components/questList';

export default function ChildQuestPage() {
  const [quests, setQuests] = useState<Quest[]>([]);

  useEffect(() => {
    setQuests(loadQuests());
  }, []);

  const toggleQuest = (index: number) => {
    const updated = [...quests];
    updated[index].completed = !updated[index].completed;
    setQuests(updated);
    saveQuests(updated);
  };

  return (
    <div className="min-h-screen bg-[url('/assets/background.png')] bg-fixed bg-center flex flex-col items-center px-4 py-3">
      <QuestList quests={quests} toggleQuest={toggleQuest} />
    </div>
  );
}
