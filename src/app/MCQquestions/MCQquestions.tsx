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
            // Change later to make this more stylish
              onClick={() => onSelect(index)}
              className={`block w-full p-2 text-left border my-2 rounded 
                ${selected === index ? "bg-blue-200" : "bg-white"}`}
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
