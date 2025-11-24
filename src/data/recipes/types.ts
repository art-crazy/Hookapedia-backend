export interface Recipe {
  id: string;
  name?: string;
  title: string;
  description: string;
  imageUrl: string;
  ingredients: Ingredient[];
  strength: number; // 1-10
  tags: string[];
  author: string;
  createdAt: string;
  likes: number;
  // Optional metadata used by analyzers/filters
  flavorCategory?: string;
  mintCategory?: string;
  coolingCategory?: string;
  strengthCategory?: string;
  imageMain?: string;
  rating?: number;
  reviews?: number;
}

export interface Ingredient {
  name: string;
  brand: string;
  percentage: number;
}
