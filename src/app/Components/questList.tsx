import React from 'react';

type Quest = {
  title: string;
  completed: boolean;
};

type QuestListProps = {
  quests: Quest[];
};

const QuestList: React.FC<QuestListProps> = ({ quests }) => {
  return (
    <div className="min-h-screen bg-[#e0f7fa] flex flex-col items-center px-4 py-6">
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-6">
        <div className="text-lg font-bold flex items-center">
          <span className="mr-2 text-yellow-500 text-xl">🪙</span>
          $xx
        </div>
        <h1 className="text-xl font-bold">Piggy Quest</h1>
        <div className="text-2xl">👤</div>
      </div>

      {/* Quest Cards */}
      <div className="flex flex-col gap-4 w-full max-w-md">
        {quests.map((quest, index) => (
          <div key={index} className="rounded-xl bg-white shadow-md p-4 flex flex-col items-center">
            <p className="font-bold text-lg mb-2">Possible quest</p>
            <button
              className={`px-6 py-2 rounded-full shadow-md text-white font-semibold ${
                quest.completed ? 'bg-green-600' : 'bg-red-600'
              }`}
            >
              {quest.completed ? 'done' : 'not done'}
            </button>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 w-full bg-white border-t flex justify-around py-3 text-center text-sm font-bold">
        <div className="flex flex-col items-center">
          <span>📜</span>
          Quests
        </div>
        <div className="flex flex-col items-center">
          <span>🏠</span>
          Home
        </div>
        <div className="flex flex-col items-center">
          <span>🛒</span>
          Shop
        </div>
      </div>
    </div>
  );
};

export default QuestList;
