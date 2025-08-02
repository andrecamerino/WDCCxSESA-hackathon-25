// src/data/QuestList.ts

export type Quest = {
  id: string;
  title: string;
  completed: boolean;
};

export function createQuest(title: string): Quest {
  return {
    id: '', // id is required now, but since this is a local creation, leaving empty string
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
