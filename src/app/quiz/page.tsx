// src/pages/Quiz.tsx
'use client';
import React, { useState } from "react";
import MCQQuestion from "../MCQquestions/MCQquestions";

type QuestionData = {
  question: string;
  choices: string[];
  correct: number;
};

const questions: QuestionData[] = [
  // This format is basic but should work for our website
    {
    question: 'What is the capital of Japan?',
    choices: ['Seoul', 'Tokyo', 'Kyoto', 'Osaka'],
    correct: 1,
  },
  {
    question: 'Which planet is known as the Red Planet?',
    choices: ['Earth', 'Venus', 'Mars', 'Jupiter'],
    correct: 2,
  },
  {
    question: 'Who wrote "Hamlet"?',
    choices: ['Charles Dickens', 'Mark Twain', 'Shakespeare', 'Hemingway'],
    correct: 2,
  },
]

const Quiz: React.FC = () => {
  // currentlySelected is the variable where the selected answer will be saved to.
  const [selected, currentlySelected] = useState<number | null>(null);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <MCQQuestion
      // You have to increment the index everytime to load a new question.
      // Currently only loads one question at a time...
      // Should be an easys fix to load the entire question on one page. Just need to change page layout
        question={questions[0].question}
        choices={questions[0].choices}
        selected={selected}
        onSelect={(index) => currentlySelected(index)}
      />
    </div>
  );
};

export default Quiz;
