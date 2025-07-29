'use client';
import React from "react";

type Props = {
  question: string;
  choices: string[];
  selected: number | null;
  onSelect: (index: number) => void;
};

const MCQQuestion: React.FC<Props> = ({ question, choices, selected, onSelect }) => {
  return (
    <div className="p-4 justify-center items-center">
      <h2 className="text-xl mb-4">{question}</h2>
      <ul className="grid grid-cols-2 gap-4">
        {choices.map((choice, index) => (
          <li key={index}>
            <button
              className={`w-full p-2 rounded text-black ${
                selected === index ? 'bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
              }`}
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