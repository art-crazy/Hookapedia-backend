/**
 * Fix recipe titles:
 * 1. Remove Russian characters (transliterate)
 * 2. Make all titles unique
 * 3. Ensure no IDs in titles
 */

import * as fs from 'fs';
import * as path from 'path';

const strengthCategories = ['legkaya-krepost', 'srednyaya-krepost', 'krepkaya-krepost'];
const flavorCategories = ['frukty', 'yagody', 'tsitrusovye', 'deserty', 'pryanosti-travy', 'ekzotika'];
const mintCategories = ['s-myatoy', 'bez-myaty'];
const coolingCategories = ['bez-kholoda', 'legkiy-kholod', 'silnyy-kholod'];

let currentId = 650;

const flavorTemplates: Record<string, any[]> = {
  frukty: [
    { base: 'yabloko', secondary: 'grusha', titleEn: 'Apple-Pear', titleRu: 'Яблоко-груша' },
    { base: 'persik', secondary: 'nektarin', titleEn: 'Peach-Nectarine', titleRu: 'Персик-нектарин' },
    { base: 'vinograd', secondary: 'dynya', titleEn: 'Grape-Melon', titleRu: 'Виноград-дыня' },
  ],
  yagody: [
    { base: 'malina', secondary: 'chernika', titleEn: 'Raspberry-Blueberry', titleRu: 'Малина-черника' },
    { base: 'klubnika', secondary: 'ezhevika', titleEn: 'Strawberry-Blackberry', titleRu: 'Клубника-ежевика' },
    { base: 'vishnya', secondary: 'smorodina', titleEn: 'Cherry-Currant', titleRu: 'Вишня-смородина' },
  ],
  tsitrusovye: [
    { base: 'apelsin', secondary: 'mandarin', titleEn: 'Orange-Tangerine', titleRu: 'Апельсин-мандарин' },
    { base: 'limon', secondary: 'lajm', titleEn: 'Lemon-Lime', titleRu: 'Лимон-лайм' },
    { base: 'grejpfrut', secondary: 'pomelo', titleEn: 'Grapefruit-Pomelo', titleRu: 'Грейпфрут-помело' },
  ],
  deserty: [
    { base: 'vanil', secondary: 'karamel', titleEn: 'Vanilla-Caramel', titleRu: 'Ваниль-карамель' },
    { base: 'shokolad', secondary: 'krem', titleEn: 'Chocolate-Cream', titleRu: 'Шоколад-крем' },
    { base: 'pechenie', secondary: 'moloko', titleEn: 'Cookie-Milk', titleRu: 'Печенье-молоко' },
  ],
  'pryanosti-travy': [
    { base: 'myata', secondary: 'evkalipt', titleEn: 'Mint-Eucalyptus', titleRu: 'Мята-эвкалипт' },
    { base: 'koritsa', secondary: 'gvozdika', titleEn: 'Cinnamon-Clove', titleRu: 'Корица-гвоздика' },
    { base: 'bazilik', secondary: 'timyan', titleEn: 'Basil-Thyme', titleRu: 'Базилик-тимьян' },
  ],
  ekzotika: [
    { base: 'mango', secondary: 'papaya', titleEn: 'Mango-Papaya', titleRu: 'Манго-папайя' },
    { base: 'lichi', secondary: 'rambutan', titleEn: 'Lychee-Rambutan', titleRu: 'Личи-рамбутан' },
    { base: 'guava', secondary: 'karambola', titleEn: 'Guava-Starfruit', titleRu: 'Гуава-карамбола' },
  ],
};

const coolingTextEn: Record<string, string> = {
  'bez-kholoda': '',
  'legkiy-kholod': 'Light Ice',
  'silnyy-kholod': 'Strong Ice',
};

const mintTextEn: Record<string, string> = {
  's-myatoy': 'with Mint',
  'bez-myaty': '',
};

const strengthTextEn: Record<string, string> = {
  'legkaya-krepost': 'Light',
  'srednyaya-krepost': 'Medium',
  'krepkaya-krepost': 'Strong',
};

const coolingTextRu: Record<string, string> = {
  'bez-kholoda': '',
  'legkiy-kholod': 'с лёгким холодком',
  'silnyy-kholod': 'с сильным ледяным эффектом',
};

const mintTextRu: Record<string, string> = {
  's-myatoy': 'и мятой',
  'bez-myaty': '',
};

const strengthJar: Record<string, string> = {
  'legkaya-krepost': 'слабом',
  'srednyaya-krepost': 'среднем',
  'krepkaya-krepost': 'сильном',
};

function generateUniqueTitle(template: any, strength: string, mint: string, cooling: string): string {
  const parts: string[] = [template.titleEn];

  if (coolingTextEn[cooling]) {
    parts.push(coolingTextEn[cooling]);
  }

  if (mintTextEn[mint]) {
    parts.push(mintTextEn[mint]);
  }

  parts.push(`(${strengthTextEn[strength]})`);

  return parts.join(' ');
}

function generateDescription(template: any, cooling: string, mint: string): string {
  const parts: string[] = [template.titleRu];

  if (coolingTextRu[cooling]) {
    parts.push(coolingTextRu[cooling]);
  }

  if (mintTextRu[mint]) {
    parts.push(mintTextRu[mint]);
  }

  return parts.join(' ');
}

function fixAllRecipes() {
  const recipesByFile = new Map<string, any[]>();

  strengthCategories.forEach(strength => {
    flavorCategories.forEach(flavor => {
      const fileKey = `${strength}/${flavor}`;
      const recipes: any[] = [];

      const templates = flavorTemplates[flavor];
      let templateIndex = 0;

      mintCategories.forEach(mint => {
        coolingCategories.forEach(cooling => {
          const template = templates[templateIndex % templates.length];
          templateIndex++;

          const recipeId = currentId++;
          const mintIngredient = mint === 's-myatoy'
            ? `      { name: 'Табак мята', amount: 5, unit: Unit.g },\n`
            : '';

          const coolingIngredient =
            cooling === 'legkiy-kholod'
              ? `      { name: 'Табак лёгкий лёд', amount: 3, unit: Unit.g },\n`
            : cooling === 'silnyy-kholod'
              ? `      { name: 'Табак сильный лёд', amount: 6, unit: Unit.g },\n`
            : '';

          const uniqueTitle = generateUniqueTitle(template, strength, mint, cooling);
          const description = generateDescription(template, cooling, mint);

          recipes.push({
            id: recipeId,
            name: `${flavor}-${template.base}-${mint}-${cooling}-${strength}`,
            title: uniqueTitle,
            description: description,
            cookTime: `${12 + (recipeId % 8)} минут`,
            difficulty: `${1 + (recipeId % 3)}/5`,
            cuisine: 'Современная',
            servings: 1,
            ingredients: [
              { name: `Табак ${template.titleRu.split('-')[0].toLowerCase()}`, amount: 15, unit: 'Unit.g' },
              { name: `Табак ${template.titleRu.split('-')[1].toLowerCase()}`, amount: 10, unit: 'Unit.g' },
              mintIngredient,
              coolingIngredient,
              { name: 'Лёд в колбе', amount: 1, unit: 'Unit.to_taste' },
              { name: 'Холодная вода', amount: 1, unit: 'Unit.to_taste' },
            ].filter(i => i),
            steps: [
              { title: 'Шаг 1.', text: 'Подготовьте чашу и тщательно промойте её.' },
              { title: 'Шаг 2.', text: 'Смешайте все табаки в указанных пропорциях.' },
              { title: 'Шаг 3.', text: 'Равномерно распределите смесь в чаше.' },
              { title: 'Шаг 4.', text: 'Наполните колбу холодной водой со льдом.' },
              { title: 'Шаг 5.', text: `Начинайте курение на ${strengthJar[strength]} жаре.` },
            ],
            imageMain: '/mock.webp',
            categories: [flavor, strength],
            rating: (4.0 + Math.random() * 0.9).toFixed(1),
            reviews: Math.floor(50 + Math.random() * 150),
            flavorCategory: flavor,
            mintCategory: mint,
            coolingCategory: cooling,
            strengthCategory: strength,
          });
        });
      });

      recipesByFile.set(fileKey, recipes);
    });
  });

  // Write recipes to files
  recipesByFile.forEach((recipes, fileKey) => {
    const [strength, flavor] = fileKey.split('/');
    const filePath = path.join(__dirname, 'by-strength', strength, `${flavor}.ts`);

    const allRecipesText = recipes.map(recipe => `  ${recipe.id}: {
    id: ${recipe.id},
    name: '${recipe.name}',
    title: '${recipe.title}',
    description: '${recipe.description}',
    cookTime: '${recipe.cookTime}',
    difficulty: '${recipe.difficulty}',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: '${recipe.cuisine}',
    servings: ${recipe.servings},
    ingredients: [
${recipe.ingredients.map((ing: any) =>
  typeof ing === 'string' ? ing : `      { name: '${ing.name}', amount: ${ing.amount}, unit: ${ing.unit} },`
).join('\n')}
    ],
    steps: [
${recipe.steps.map((step: any) => `      { title: '${step.title}', text: '${step.text}' },`).join('\n')}
    ],
    imageMain: '${recipe.imageMain}',
    categories: [${recipe.categories.map((c: string) => `'${c}'`).join(', ')}],
    rating: ${recipe.rating},
    reviews: ${recipe.reviews},
    flavorCategory: '${recipe.flavorCategory}',
    mintCategory: '${recipe.mintCategory}',
    coolingCategory: '${recipe.coolingCategory}',
    strengthCategory: '${recipe.strengthCategory}',
  },`).join('\n\n');

    const fileContent = `import { Recipe, RecipeCollection, Unit } from '../../types';

// ${flavor.charAt(0).toUpperCase() + flavor.slice(1)} recipes with ${strength}
export const recipes: RecipeCollection = {
${allRecipesText}
};
`;

    fs.writeFileSync(filePath, fileContent, 'utf-8');
    console.log(`✅ Updated: ${fileKey} with ${recipes.length} unique titles`);
  });

  console.log(`\n🎉 Complete! Fixed all recipes with unique transliterated titles`);
  console.log(`📊 Total recipes: ${currentId - 650}`);
  console.log(`📁 Files updated: ${recipesByFile.size}`);
}

fixAllRecipes();
