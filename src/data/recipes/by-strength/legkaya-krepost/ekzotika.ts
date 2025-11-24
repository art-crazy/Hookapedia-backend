import { Recipe } from '../../types';

export const legkayaKrepostEkzotika: Recipe[] = [
  {
    id: '28',
    title: 'Кокос + Банан',
    description: 'Тропический классик. Кокос и банан – совершенная пара для создания ощущения пляжа и отпуска.',
    imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad576?q=80&w=1000&auto=format&fit=crop',
    ingredients: [
      { name: 'Кокос', brand: 'Darkside', percentage: 50 },
      { name: 'Банан', brand: 'Musthave', percentage: 50 },
    ],
    strength: 3,
    tags: ['Тропический', 'Сладкий', 'Мягкий'],
    author: 'BeachVibes',
    createdAt: '2024-05-30',
    likes: 201,
  },
  {
    id: '74',
    title: 'Банан + Кокос',
    description: 'Тропический дуэт. Банан и кокос – совершенная пара.',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19',
    ingredients: [
      { name: 'Банан', brand: 'Musthave', percentage: 50 },
      { name: 'Кокос', brand: 'Darkside', percentage: 50 },
    ],
    strength: 3,
    tags: ['Тропический', 'Сладкий', 'Мягкий'],
    author: 'BananaCoconut',
    createdAt: '2024-09-24',
    likes: 178,
  },
];
