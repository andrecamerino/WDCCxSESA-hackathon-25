// src/data/QuestList.ts

export type Quest = {
  id: string;
  title: string;
  completed: boolean;
};

export async function getQuests(): Promise<Quest[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/quests`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch quests');
  }
  return res.json();
}

export async function toggleQuestCompletion(id: string, completed: boolean) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/quests/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ completed }),
  });
  if (!res.ok) {
    throw new Error('Failed to update quest status');
  }
  return res.json();
}

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
