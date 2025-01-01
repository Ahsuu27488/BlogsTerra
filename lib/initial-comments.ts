import { Comment } from './types';

export const getInitialComments = (postId: string): Comment[] => {
  const baseComments: Record<string, Comment[]> = {
    '1': [
      {
        id: '1',
        author: 'Sarah Chen',
        content: 'Great introduction to Next.js 14! The new features are really impressive, especially the improved streaming capabilities.',
        date: '2024-03-21T08:30:00Z'
      },
      {
        id: '2',
        author: 'Mark Thompson',
        content: 'Would love to see a follow-up post about Server Components best practices!',
        date: '2024-03-21T09:15:00Z'
      }
    ],
    '2': [
      {
        id: '3',
        author: 'Alex Rivera',
        content: 'Tailwind has been a game-changer for my projects. The utility-first approach really speeds up development.',
        date: '2024-03-20T15:45:00Z'
      }
    ],
    '3': [
      {
        id: '4',
        author: 'Emily Watson',
        content: 'TypeScript has helped catch so many bugs before they reach production. Essential knowledge for modern web development.',
        date: '2024-03-19T11:20:00Z'
      }
    ]
  };

  return baseComments[postId] || [];
};