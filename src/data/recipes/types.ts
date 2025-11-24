export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  ingredients: Ingredient[];
  strength: number; // 1-10
  tags: string[];
  author: string;
  createdAt: string;
  likes: number;
}

export interface Ingredient {
  name: string;
  brand: string;
  percentage: number;
}
