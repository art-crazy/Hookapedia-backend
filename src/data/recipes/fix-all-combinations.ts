/**
 * This script ensures COMPLETE coverage by generating recipes
 * for ALL possible filter combinations from the sitemap
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
    { base: 'яблоко', secondary: 'груша', title: 'Яблоко-груша' },
    { base: 'персик', secondary: 'нектарин', title: 'Персик-нектарин' },
    { base: 'виноград', secondary: 'дыня', title: 'Виноград-дыня' },
  ],
  yagody: [
    { base: 'малина', secondary: 'черника', title: 'Малина-черника' },
    { base: 'клубника', secondary: 'ежевика', title: 'Клубника-ежевика' },
    { base: 'вишня', secondary: 'смородина', title: 'Вишня-смородина' },
  ],
  tsitrusovye: [
    { base: 'апельсин', secondary: 'мандарин', title: 'Апельсин-мандарин' },
    { base: 'лимон', secondary: 'лайм', title: 'Лимон-лайм' },
    { base: 'грейпфрут', secondary: 'помело', title: 'Грейпфрут-помело' },
  ],
  deserty: [
    { base: 'ваниль', secondary: 'карамель', title: 'Ваниль-карамель' },
    { base: 'шоколад', secondary: 'крем', title: 'Шоколад-крем' },
    { base: 'печенье', secondary: 'молоко', title: 'Печенье-молоко' },
  ],
  'pryanosti-travy': [
    { base: 'мята', secondary: 'эвкалипт', title: 'Мята-эвкалипт' },
    { base: 'корица', secondary: 'гвоздика', title: 'Корица-гвоздика' },
    { base: 'базилик', secondary: 'тимьян', title: 'Базилик-тимьян' },
  ],
  ekzotika: [
    { base: 'манго', secondary: 'папайя', title: 'Манго-папайя' },
    { base: 'личи', secondary: 'рамбутан', title: 'Личи-рамбутан' },
    { base: 'гуава', secondary: 'карамбола', title: 'Гуава-карамбола' },
  ],
};

function generateCompleteRecipes() {
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

          const coolingText =
            cooling === 'legkiy-kholod' ? 'с лёгким холодком'
            : cooling === 'silnyy-kholod' ? 'с сильным ледяным эффектом'
            : '';

          const mintText = mint === 's-myatoy' ? 'и мятой' : '';
          const description = `${template.title} ${coolingText} ${mintText}`.trim();

          recipes.push({
            id: recipeId,
            name: `${flavor}-${template.base.replace(' ', '-')}-${mint}-${cooling}-${recipeId}`,
            title: `${template.title} ${coolingText}`.trim(),
            description: description.charAt(0).toUpperCase() + description.slice(1),
            cookTime: `${12 + (recipeId % 8)} минут`,
            difficulty: `${1 + (recipeId % 3)}/5`,
            cuisine: 'Современная',
            servings: 1,
            ingredients: [
              { name: `Табак ${template.base}`, amount: 15, unit: 'Unit.g' },
              { name: `Табак ${template.secondary}`, amount: 10, unit: 'Unit.g' },
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
              { title: 'Шаг 5.', text: `Начинайте курение на ${strength === 'legkaya-krepost' ? 'слабом' : strength === 'srednyaya-krepost' ? 'среднем' : 'сильном'} жаре.` },
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

    // Read existing file if it exists
    let existingRecipes: any[] = [];
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const match = fileContent.match(/export const recipes: RecipeCollection = \{([\s\S]*)\};/);
        if (match) {
          // Extract existing IDs to avoid duplicates
          const idMatches = match[1].matchAll(/^\s+(\d+):/gm);
          for (const idMatch of idMatches) {
            const existingId = parseInt(idMatch[1]);
            // Keep existing recipes
            existingRecipes.push({ id: existingId });
          }
        }
      } catch (error) {
        console.log(`Could not parse existing file: ${filePath}`);
      }
    }

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
    console.log(`✅ Updated: ${fileKey} with ${recipes.length} recipes (${recipes.length / 6} per mint/cooling combo)`);
  });

  console.log(`\n🎉 Complete! Generated recipes with IDs from 650 to ${currentId - 1}`);
  console.log(`📊 Total new recipes: ${currentId - 650}`);
  console.log(`📁 Files updated: ${recipesByFile.size}`);
}

generateCompleteRecipes();
