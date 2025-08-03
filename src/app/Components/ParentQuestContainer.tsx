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

const ParentQuestContainer: React.FC = () => {
  const [quests, setQuests] = useState<Quest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newQuestTitle, setNewQuestTitle] = useState("");
  const [newQuestReward, setNewQuestReward] = useState(10);

  const refreshQuests = async () => {
    try {
      const response = await fetch("/api/quests");
      const data = await response.json();
      setQuests(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching quests:", err);
      setError("Failed to load quests");
    } finally {
      setLoading(false);
    }
  };

  const addQuest = async () => {
    if (!newQuestTitle.trim()) return;

    try {
      const response = await fetch("/api/quests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: newQuestTitle.trim(),
          reward: newQuestReward,
          person: "Parent",
        }),
      });

      if (!response.ok) throw new Error("Failed to create quest");

      setNewQuestTitle("");
      setNewQuestReward(10);
      refreshQuests(); // Refresh to show the new quest
    } catch (err) {
      console.error("Error creating quest:", err);
      setError("Failed to create quest");
    }
  };

  const deleteQuest = async (id: string) => {
    try {
      const response = await fetch(`/api/quests/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete quest");

      refreshQuests(); // Refresh to remove the deleted quest
    } catch (err) {
      console.error("Error deleting quest:", err);
      setError("Failed to delete quest");
    }
  };

  useEffect(() => {
    refreshQuests();
  }, []);

  if (loading) return <p>Loading quests...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      {/* Add Quest Form */}
      <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-black">
        <h3 className="text-lg font-semibold mb-3 text-center">Add New Quest</h3>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={newQuestTitle}
            onChange={(e) => setNewQuestTitle(e.target.value)}
            placeholder="Enter quest title"
            className="border-2 border-gray-300 px-3 py-2 rounded-lg focus:border-blue-500 focus:outline-none"
            onKeyPress={(e) => e.key === 'Enter' && addQuest()}
          />
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Reward:</label>
            <input
              type="number"
              value={newQuestReward}
              onChange={(e) => setNewQuestReward(Number(e.target.value))}
              min="1"
              className="border-2 border-gray-300 px-3 py-2 rounded-lg w-20 focus:border-blue-500 focus:outline-none"
            />
            <span className="text-sm">coins</span>
          </div>
          <button
            onClick={addQuest}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add Quest
          </button>
        </div>
      </div>

      {/* Quest List */}
      <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto rounded-t-3xl pb-20">
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
            <div key={quest._id} className="relative">
              <QuestItem
                id={quest._id}
                task={quest.task}
                reward={quest.reward}
                completed={quest.completed}
                person={quest.person}
                isParent={true}
              />
              <button
                onClick={() => deleteQuest(quest._id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs hover:bg-red-600 transition-colors"
              >
                ×
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ParentQuestContainer; 