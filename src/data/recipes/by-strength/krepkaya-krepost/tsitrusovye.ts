import { Recipe } from '../../types';

export const krepkayaKrepostTsitrusovye: Recipe[] = [
  {
    id: '3',
    title: 'Цитрусовый Взрыв',
    description: 'Максимально кислый и бодрящий микс для любителей цитрусов.',
    imageUrl: 'https://images.unsplash.com/photo-1557800636-894a64c1e793?q=80&w=1000&auto=format&fit=crop',
    ingredients: [
      { name: 'Лимон', brand: 'Spectrum', percentage: 40 },
      { name: 'Лайм', brand: 'Element', percentage: 30 },
      { name: 'Грейпфрут', brand: 'Musthave', percentage: 30 },
    ],
    strength: 7,
    tags: ['Кислый', 'Свежий', 'Цитрус'],
    author: 'SourKing',
    createdAt: '2023-09-20',
    likes: 210,
  },
  {
    id: '86',
    title: 'Лимон + Грейпфрут + Мята',
    description: 'Цитрусовый холодный микс. Максимальная прохлада и кислота.',
    imageUrl: 'https://images.unsplash.com/photo-1557800636-894a64c1e793',
    ingredients: [
      { name: 'Лимон', brand: 'Spectrum', percentage: 35 },
      { name: 'Грейпфрут', brand: 'Element', percentage: 35 },
      { name: 'Мята', brand: 'Darkside', percentage: 30 },
    ],
    strength: 6,
    tags: ['Цитрус', 'Кислый', 'Охлаждающий'],
    author: 'CitrusIce',
    createdAt: '2024-10-18',
    likes: 145,
  },
];
