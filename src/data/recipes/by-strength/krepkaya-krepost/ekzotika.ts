import { Recipe } from '../../types';

export const krepkayaKrepostEkzotika: Recipe[] = [
  {
    id: '1',
    title: 'Тропический Закат',
    description: 'Яркий и сочный микс, напоминающий о лете. Сочетание сладкого манго и кисленькой маракуйи с ноткой холодка.',
    imageUrl: 'https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=1000&auto=format&fit=crop',
    ingredients: [
      { name: 'Манго', brand: 'Musthave', percentage: 40 },
      { name: 'Маракуйя', brand: 'Darkside', percentage: 40 },
      { name: 'Supernova', brand: 'Darkside', percentage: 20 },
    ],
    strength: 6,
    tags: ['Тропический', 'Сладкий', 'Свежий'],
    author: 'HookahMaster',
    createdAt: '2023-10-15',
    likes: 124,
  },
];
