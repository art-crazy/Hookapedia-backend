export enum Unit {
  g = 'г',
  ml = 'мл',
  pcs = 'шт.',
  tbsp = 'ст. л.',
  tsp = 'ч. л.',
  to_taste = 'по вкусу',
  bunch = 'пучок',
}

// Интерфейс для питательной ценности
interface Nutrition {
  calories: { value: number; unit: Unit };
  protein: { value: number; unit: Unit };
  fat: { value: number; unit: Unit };
  carbs: { value: number; unit: Unit };
}
console.log('пушу')
// Интерфейс для рецепта
export interface Recipe {
  id: number;
  name: string;
  title: string;
  description: string;
  cookTime: string;
  difficulty: string;
  nutrition: Nutrition;
  cuisine: string;
  servings: number;
  ingredients: { name: string; amount: number; unit: Unit }[];
  steps: { title: string; text: string; image?: string }[];
  imageMain?: string;
  categories: string[];
  rating: number;
  reviews: number;
  comments?: { user: string; date: string; text: string; likes: number; replies: number }[];
  dishCategoriesList: { [key: string]: { id: string; title: string } };
  dishCategoriesSubList: { [key: string]: { id: string; title: string } };
  cuisineCategoriesList: { [key: string]: { id: string; title: string } };
  dietCategoriesList: { [key: string]: { id: string; title: string } };
} 