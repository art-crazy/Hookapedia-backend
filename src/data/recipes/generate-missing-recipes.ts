/**
 * This script generates missing recipe files to ensure complete coverage
 * of all filter combinations in the sitemap
 */

import * as fs from 'fs';
import * as path from 'path';

// Define the structure
const strengthCategories = ['legkaya-krepost', 'srednyaya-krepost', 'krepkaya-krepost'];
const flavorCategories = ['frukty', 'yagody', 'tsitrusovye', 'deserty', 'pryanosti-travy', 'ekzotika'];

const strengthLabels = {
  'legkaya-krepost': 'Light strength',
  'srednyaya-krepost': 'Medium strength',
  'krepkaya-krepost': 'Strong strength',
};

const flavorLabels = {
  'frukty': 'Fruit',
  'yagody': 'Berry',
  'tsitrusovye': 'Citrus',
  'deserty': 'Dessert',
  'pryanosti-travy': 'Spices & herbs',
  'ekzotika': 'Exotic',
};

// Base ID for generated recipes (starting after existing ones)
let currentId = 500;

// Recipe templates for different combinations
const recipeTemplates = {
  frukty: [
    {
      name: (id: number) => ` apple-peach-mix-${id}`,
      title: 'Яблоко-персик',
      description: 'Гармоничное сочетание сочного яблока и нежного персика. Классический фруктовый микс.',
      ingredients: ['Табак яблоко', 'Табак персик'],
    },
    {
      name: (id: number) => `melon-grape-mix-${id}`,
      title: 'Дыня-виноград',
      description: 'Освежающая комбинация сладкой дыни и винограда. Летний фруктовый микс.',
      ingredients: ['Табак дыня', 'Табак виноград'],
    },
  ],
  yagody: [
    {
      name: (id: number) => `blueberry-raspberry-${id}`,
      title: 'Черника-малина',
      description: 'Насыщенный ягодный микс с черникой и малиной. Богатый вкус лесных ягод.',
      ingredients: ['Табак черника', 'Табак малина'],
    },
    {
      name: (id: number) => `strawberry-cherry-${id}`,
      title: 'Клубника-вишня',
      description: 'Сладкая клубника с кисловатой вишней создают яркий ягодный букет.',
      ingredients: ['Табак клубника', 'Табак вишня'],
    },
  ],
  tsitrusovye: [
    {
      name: (id: number) => `grapefruit-lime-${id}`,
      title: 'Грейпфрут-лайм',
      description: 'Бодрящий цитрусовый микс с грейпфрутом и лаймом. Освежающая кислинка.',
      ingredients: ['Табак грейпфрут', 'Табак лайм'],
    },
    {
      name: (id: number) => `orange-lemon-${id}`,
      title: 'Апельсин-лимон',
      description: 'Классический цитрусовый дуэт. Яркий и освежающий вкус.',
      ingredients: ['Табак апельсин', 'Табак лимон'],
    },
  ],
  deserty: [
    {
      name: (id: number) => `caramel-vanilla-${id}`,
      title: 'Карамель-ваниль',
      description: 'Нежный десертный микс с карамелью и ванилью. Сладкое удовольствие.',
      ingredients: ['Табак карамель', 'Табак ваниль'],
    },
    {
      name: (id: number) => `chocolate-hazelnut-${id}`,
      title: 'Шоколад-орех',
      description: 'Роскошный десертный вкус шоколада с лесным орехом. Для гурманов.',
      ingredients: ['Табак шоколад', 'Табак фундук'],
    },
  ],
  'pryanosti-travy': [
    {
      name: (id: number) => `mint-eucalyptus-${id}`,
      title: 'Мята-эвкалипт',
      description: 'Освежающий травяной микс с мятой и эвкалиптом. Ментоловая свежесть.',
      ingredients: ['Табак мята', 'Табак эвкалипт'],
    },
    {
      name: (id: number) => `cinnamon-cardamom-${id}`,
      title: 'Корица-кардамон',
      description: 'Пряный восточный микс с корицей и кардамоном. Согревающий вкус.',
      ingredients: ['Табак корица', 'Табак кардамон'],
    },
  ],
  ekzotika: [
    {
      name: (id: number) => `lychee-dragon-fruit-${id}`,
      title: 'Личи-питайя',
      description: 'Экзотический тропический микс с личи и питайей. Необычное сочетание.',
      ingredients: ['Табак личи', 'Табак питайя'],
    },
    {
      name: (id: number) => `guava-papaya-${id}`,
      title: 'Гуава-папайя',
      description: 'Тропический дуэт гуавы и папайи. Сладкая экзотика.',
      ingredients: ['Табак гуава', 'Табак папайя'],
    },
  ],
};

// Mint and cooling variations for each recipe template
const mintVariations = ['s-myatoy', 'bez-myaty'];
const coolingVariations = ['bez-kholoda', 'legkiy-kholod', 'silnyy-kholod'];

function generateRecipeFile(strength: string, flavor: string) {
  const filePath = path.join(__dirname, 'by-strength', strength, `${flavor}.ts`);

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`File already exists: ${strength}/${flavor}.ts - skipping`);
    return;
  }

  const templates = recipeTemplates[flavor as keyof typeof recipeTemplates] || [];
  const recipes: string[] = [];

  // Generate recipes with different mint/cooling combinations
  templates.forEach((template, idx) => {
    mintVariations.forEach(mint => {
      coolingVariations.forEach(cooling => {
        const recipeId = currentId++;
        const mintIngredient = mint === 's-myatoy' ? `{ name: 'Табак мята', amount: 5, unit: Unit.g },` : '';
        const coolingIngredient =
          cooling === 'legkiy-kholod' ? `{ name: 'Табак лёгкий лёд', amount: 3, unit: Unit.g },` :
          cooling === 'silnyy-kholod' ? `{ name: 'Табак сильный лёд', amount: 6, unit: Unit.g },` : '';

        const recipe = `  ${recipeId}: {
    id: ${recipeId},
    name: '${template.name(recipeId)}',
    title: '${template.title}',
    description: '${template.description}',
    cookTime: '${15 + idx * 3} минут',
    difficulty: '${Math.ceil((idx + 1) / 2)}/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Современная',
    servings: 1,
    ingredients: [
      { name: '${template.ingredients[0]}', amount: 15, unit: Unit.g },
      { name: '${template.ingredients[1]}', amount: 10, unit: Unit.g },
      ${mintIngredient}
      ${coolingIngredient}
      { name: 'Лёд в колбе', amount: 1, unit: Unit.to_taste },
      { name: 'Холодная вода', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Подготовьте чашу и тщательно промойте её.' },
      { title: 'Шаг 2.', text: 'Смешайте все табаки в указанных пропорциях.' },
      { title: 'Шаг 3.', text: 'Равномерно распределите смесь в чаше.' },
      { title: 'Шаг 4.', text: 'Наполните колбу холодной водой со льдом.' },
      { title: 'Шаг 5.', text: 'Начинайте курение на ${strength === 'legkaya-krepost' ? 'слабом' : strength === 'srednyaya-krepost' ? 'среднем' : 'сильном'} жаре.' }
    ],
    imageMain: '/mock.webp',
    categories: ['${flavor}', '${strength}'],
    rating: ${(4.0 + Math.random() * 0.9).toFixed(1)},
    reviews: ${Math.floor(50 + Math.random() * 150)},
    flavorCategory: '${flavor}',
    mintCategory: '${mint}',
    coolingCategory: '${cooling}',
    strengthCategory: '${strength}',
  },`;

        recipes.push(recipe);
      });
    });
  });

  const fileContent = `import { Recipe, RecipeCollection, Unit } from '../../types';

// ${flavorLabels[flavor as keyof typeof flavorLabels]} recipes with ${strengthLabels[strength as keyof typeof strengthLabels]}
export const recipes: RecipeCollection = {
${recipes.join('\n\n')}
};
`;

  fs.writeFileSync(filePath, fileContent, 'utf-8');
  console.log(`Generated: ${strength}/${flavor}.ts with ${recipes.length} recipes`);
}

// Generate all missing files
strengthCategories.forEach(strength => {
  flavorCategories.forEach(flavor => {
    generateRecipeFile(strength, flavor);
  });
});

console.log(`Recipe generation complete! Starting ID was 500, ending ID is ${currentId - 1}`);
console.log(`Total new recipes generated: ${currentId - 500}`);
