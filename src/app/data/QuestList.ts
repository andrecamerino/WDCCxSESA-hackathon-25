// src/data/QuestList.ts

export type Quest = {
  title: string;
  completed: boolean;
};

export function createQuest(title: string): Quest {
  return {
    title,
    completed: false,
  };
}

const QUESTS_KEY = 'quests';

export function loadQuests(): Quest[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(QUESTS_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveQuests(quests: Quest[]) {
  localStorage.setItem(QUESTS_KEY, JSON.stringify(quests));
}
