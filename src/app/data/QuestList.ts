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

// createQuest is the function that actually creates the quest
export function createQuest(title: string): Quest {
  return {
    id: '', // id is required now, but since this is a local creation, leaving empty string
    title,
    completed: false,
  };
}

export const quests: Quest[] = [
  createQuest('Feed the pet'),
  createQuest('Clean your room'),
  createQuest('Brush your teeth'),
  createQuest('Do your homework'),
  createQuest('Help with dinner'),
  createQuest('Water the plants'),
  createQuest('Take out the trash'),
  createQuest('Read for 20 minutes'),
  createQuest('Organise your backpack'),
  createQuest('Set the table'),
  createQuest('Tidy your desk'),
  createQuest('Make your bed'),
];