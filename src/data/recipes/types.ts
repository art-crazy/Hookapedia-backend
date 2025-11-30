export enum Unit {
  g = 'г',
  ml = 'мл',
  pcs = 'шт.',
  tbsp = 'ст. л.',
  tsp = 'ч. л.',
  to_taste = 'по вкусу',
  l = 'л',
  pinch = 'щепотка',
}

export interface HookahIngredient {
  name: string;              // Tobacco flavor name (e.g., 'Vanilla Ice Cream')
  brand: string;             // Brand name (e.g., 'Darkside', 'Adalya', 'Fumari')
  percentage: number;        // Percentage in the mix (e.g., 40 = 40%)
  tobaccoType?: string;      // Tobacco leaf type: 'Virginia', 'Burley', 'Dark Blend'
  amount?: number;           // Amount in grams (optional, calculated from percentage)
  unit?: Unit;               // Unit of measurement
  alternatives?: string[];   // Alternative flavors if not available
}

export interface CharcoalSetup {
  type: string;              // 'Кокосовый' | 'Быстроразжигающийся'
  brand?: string;            // 'Cocobrico' | 'Tom Cococha' | etc.
  pieces: number;            // Number of coal pieces (e.g., 3)
  size: string;              // Size (e.g., '25мм куб')
}

export interface RecipeStep {
  title: string;             // Step title
  text: string;              // Step description
  image?: string;            // Optional step image
}

export interface Recipe {
  id: number;
  name: string;              // URL slug
  title: string;             // Display title
  description: string;       // Full description

  // Timing
  preparationTime: string;   // Preparation time (e.g., '10-15 минут')
  smokingDuration: string;   // Smoking duration (e.g., '45-60 минут')

  // Classification
  difficulty: string;        // 'Легко' | 'Средне' | 'Сложно'
  recipeType: string;        // 'Фруктовый' | 'Десертный' | 'Экзотический' | etc.
  persons: number;           // Number of people (1-3)

  // Ingredients & Setup
  ingredients: HookahIngredient[];
  bowlType: string;          // 'Phunnel' | 'Funnel' | 'Egyptian' | 'Силиконовая' | 'Глиняная'
  packingMethod: string;     // 'Воздушная' | 'Плотная' | 'Оверпак'
  charcoal: CharcoalSetup;
  smokeLevel: string;        // 'Низкий' | 'Средний' | 'Высокий'

  // Instructions
  steps: RecipeStep[];
  tips?: string[];           // Optional smoking tips

  // Media
  imageMain: string;

  // Search & Filter
  tags: string[];

  // Metadata
  rating: number;            // 0-5
  reviews: number;
  likes: number;

  // Filter categories
  flavorCategory?: string;   // frukty, yagody, tsitrusovye, deserty, pryanosti-travy, ekzotika
  mintCategory?: string;     // s-myatoy, bez-myaty
  coolingCategory?: string;  // bez-kholoda, legkiy-kholod, silnyy-kholod
  strengthCategory?: string; // legkaya-krepost, srednyaya-krepost, krepkaya-krepost
}

export type RecipeCollection = Record<number, Recipe>;
