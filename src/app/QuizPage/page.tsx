import React from 'react';
import QuestList from '@/components/QuestList'; // adjust the import path as needed

const quests = [
  { title: 'Quest 1', completed: true },
  { title: 'Quest 2', completed: false },
  { title: 'Quest 3', completed: false },
  { title: 'Quest 4', completed: true }, // You can add or remove freely
];

const HomePage: React.FC = () => {
  return <QuestList quests={quests} />;
};

export default HomePage;
