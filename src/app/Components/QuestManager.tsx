'use client';

import { useEffect, useState } from 'react';
import {
  createQuest,
  loadQuests,
  saveQuests,
  type Quest,
} from '../data/QuestList';
import QuestList from './questList';

export default function QuestManager() {
  const [quests, setQuests] = useState<Quest[]>([]);
  const [title, setTitle] = useState('');

  // ✅ Load quests on mount and sync with other tabs/windows
  useEffect(() => {
    setQuests(loadQuests());

    const syncQuests = () => {
      const updated = loadQuests();
      setQuests(updated);
    };

    window.addEventListener('storage', syncQuests);
    return () => window.removeEventListener('storage', syncQuests);
  }, []);

  // ✅ Add a new quest with correct syncing
  const handleAdd = (title: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;

    const latest = loadQuests();
    const updated = [...latest, createQuest(trimmed)];

    setQuests(updated);
    saveQuests(updated);
    setTitle('');
  };

  // ✅ Toggle quest completion (always load fresh)
  const toggleQuest = (index: number) => {
    const latest = loadQuests();
    latest[index].completed = !latest[index].completed;
    setQuests(latest);
    saveQuests(latest);
  };

  // ✅ Delete quest (always load fresh)
  const deleteQuest = (index: number) => {
    const latest = loadQuests();
    latest.splice(index, 1);
    setQuests(latest);
    saveQuests(latest);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new quest"
        className="border px-4 py-2 rounded"
      />

      <button
        onClick={() => handleAdd(title)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Quest
      </button>

      <QuestList
        quests={quests}
        toggleQuest={toggleQuest}
        deleteQuest={deleteQuest}
      />
    </div>
  );
}
