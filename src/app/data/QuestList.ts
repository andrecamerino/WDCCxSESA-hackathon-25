export type Quest = {
  title: string;
  completed: boolean;
};

export const quests: Quest[] = [
  { title: 'Feed the pet', completed: false },
  { title: 'Clean your room', completed: false  },
  { title: 'Brush your teeth', completed: false },
];
