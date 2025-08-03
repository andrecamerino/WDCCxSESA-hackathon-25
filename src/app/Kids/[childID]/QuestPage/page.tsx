"use client";

import React, { useState, useEffect } from "react";
import QuestList from "../../../Components/QuestContainer";
import { getQuests, toggleQuestCompletion } from "../../../data/QuestList";
import type { Quest } from "../../../data/QuestList";

const KidsQuestPage: React.FC = () => {
  const [quests, setQuests] = useState<Quest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getQuests();
        setQuests(data);
      } catch (err) {
        console.error("Failed to load quests:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleToggle = async (index: number) => {
    const quest = quests[index];
    const updated = { ...quest, completed: !quest.completed };

    try {
      await toggleQuestCompletion(quest.id, updated.completed);
      setQuests((prev) => prev.map((q, i) => (i === index ? updated : q)));
    } catch (err) {
      console.error("Failed to update quest:", err);
    }
  };

  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <div className="pt-30 min-h-screen bg-[url('/assets/background.png')] bg-fixed bg-center flex flex-col items-center px-4 py-3">
      <QuestList quests={quests} toggleQuest={handleToggle} />
    </div>
  );
};

export default KidsQuestPage;
