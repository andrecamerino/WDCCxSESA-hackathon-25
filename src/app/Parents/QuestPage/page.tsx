"use client";

import React from "react";
import "../../globals.css";
import ParentQuestContainer from "../../Components/ParentQuestContainer";

const QuestPage: React.FC = () => {
  return (
    <div className="pt-30 min-h-screen bg-[#D4EEFF] bg-fixed bg-center bg-cover flex flex-col items-center px-4 py-3">
      <ParentQuestContainer />
    </div>
  );
};

export default QuestPage;
