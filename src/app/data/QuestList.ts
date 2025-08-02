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