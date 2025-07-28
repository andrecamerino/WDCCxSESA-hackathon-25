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
  // Selected answers will be saved to an array called selectedAnswers
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));

  const handleSelect = (choiceIndex: number) => {
    // Save the answer
    const updated = [...selectedAnswers];
    updated[currentIndex] = choiceIndex;
    setSelectedAnswers(updated);

    setTimeout(() => {
      // Checks if next question exists.
      // If it exists then goes to next question
      // if not then it's the end of the test. Check console for selected questions.
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        // Change the logic in here to do stuff after the final question.
        console.log("Selected: ", updated);
      }
    }, 0);
  };


  // Update index. Use setCurrentIndex() to update index.
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <MCQQuestion
      // You have to increment the index everytime to load a new question.
      // Currently only loads one question at a time...
      // Should be an easys fix to load the entire question on one page. Just need to change page layout
        question={questions[currentIndex].question}
        choices={questions[currentIndex].choices}
        selected={selectedAnswers[currentIndex]}
        onSelect={handleSelect}
      />
      <button onClick={() => {
        // This prevents index going into negatives
        if (currentIndex > 0){
          setCurrentIndex(currentIndex - 1);
        }
      }}>Back</button> 
    </div>  
    
  );
  
};

export default Quiz;
