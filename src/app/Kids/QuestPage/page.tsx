"use client";

import React from "react";
import QuestContainer from "../../Components/QuestContainer";

const KidsQuestPage: React.FC = () => {
  return (
    <div className="pt-30 min-h-screen bg-[url('/assets/background.png')] bg-fixed bg-center flex flex-col items-center px-4 py-3">
      <QuestContainer />
    </div>
  );
};

export default KidsQuestPage;
