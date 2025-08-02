export type Quest = {
  title: string;
  completed: boolean;
};

// createQuest is the function that actually creates the quest
export function createQuest(title: string): Quest {
  return {
    title,
    completed: false,
  };
}

export const quests: Quest[] = [
  createQuest('Feed the pet'),
  createQuest('Clean your room'),
  createQuest('Brush your teeth'),
];
