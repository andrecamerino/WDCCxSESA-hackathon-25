// src/components/MCQQuestion.tsx
import React from "react";

type Props = {
  question: string;
  choices: string[];
  selected: number | null;
  onSelect: (index: number) => void;
};

const MCQQuestion: React.FC<Props> = ({ question, choices, selected, onSelect }) => {
  
  return (
    <div className="p-4 border rounded-xl">
      <h2 className="text-xl mb-4">{question}</h2>
      <ul>
        {choices.map((choice, index) => (
          <li key={index}>
            <button
              onClick={() => onSelect(index)}
            >
              {choice}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MCQQuestion;
