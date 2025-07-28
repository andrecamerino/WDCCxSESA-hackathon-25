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
  // Use the set functions to update each variable.
  const [currentIndex, setCurrentIndex] = useState(0); // Current question
  const [score, setScore] = useState(0); // Track score
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null)); // Selected answers will be saved to an array called selectedAnswers
  const [quizComplete, setQuizComplete] = useState(false); // Check if quiz is copmlete

  const handleSelect = (choiceIndex: number) => {
    // Save the answer
    const updated = [...selectedAnswers];
    updated[currentIndex] = choiceIndex;
    setSelectedAnswers(updated);
  };

  const handleSubmit = () => {
    // This function hamdles the submit button
    const selected = selectedAnswers[currentIndex];
    const correct = questions[currentIndex].correct;
    
    // Add score if correct
    if (selected == correct){
      setScore((prev) => prev + 1);
    }

    // Advance page
    if (currentIndex < questions.length - 1){
      setCurrentIndex(currentIndex + 1);
    }else{
      // If no more pages to advance, then the quiz is complete
      setQuizComplete(true);
    }
  }

  if(quizComplete){
    // If the quiz is complete, then show results etc
    return(
      <><h2>Quiz complete!</h2><p>Your score: {score} / {questions.length}</p></>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      <MCQQuestion // MCQQuestion uses the MCQQuestion.tsx file to format.
        question={questions[currentIndex].question}
        choices={questions[currentIndex].choices}
        selected={selectedAnswers[currentIndex]}
        onSelect={handleSelect}
      />
      <button
        onClick={handleSubmit}
        disabled={selectedAnswers[currentIndex] === null}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
      Submit
      </button>
    </div>  
    
  );
  
};

export default Quiz;
