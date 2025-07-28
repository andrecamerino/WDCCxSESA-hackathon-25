// src/pages/Quiz.tsx
'use client';
import React, { useEffect, useState } from "react";
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

  // Update index. Use setCurrentIndex() to update index.
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Check if index is less than 0, reset back to 0.
  useEffect(() => {
    if (currentIndex < 0){
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <MCQQuestion
      // You have to increment the index everytime to load a new question.
      // Currently only loads one question at a time...
      // Should be an easys fix to load the entire question on one page. Just need to change page layout
        question={questions[currentIndex].question}
        choices={questions[currentIndex].choices}
        selected={selected}
        onSelect={(index) => currentlySelected(index)}
      />
      <button onClick={() => setCurrentIndex(currentIndex - 1)}>Back</button> 
      <button onClick={() => setCurrentIndex(currentIndex + 1)}>Next</button>
    </div>
  );
};
export default Quiz;
