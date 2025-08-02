export type QuestionData = {
  question: string;
  choices: string[];
  correct: number;
};

export const questions: QuestionData[] = [
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
  {
    question: 'What is the first letter in Samuel"?',
    choices: ['a', 'S', 'c', 'p'],
    correct: 1,
  },
  {
    question: 'Who is the current PM"?',
    choices: ['Obama', 'Trump', 'Christopher Luxon', 'Queen Elizabeth'],
    correct: 2,
  },
];
