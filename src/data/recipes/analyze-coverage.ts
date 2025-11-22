/**
 * This script analyzes recipe coverage across all filter combinations
 * to ensure every sitemap URL has at least one recipe
 */

import { loadAllRecipes } from './index';

interface FilterCombination {
  strength?: string;
  flavor?: string;
  mint?: string;
  cooling?: string;
  count: number;
  recipes: number[];
}

function analyzeCoverage() {
  console.log('=== Analyzing Recipe Coverage ===\n');

  const allRecipes = loadAllRecipes();
  const recipeArray = Object.values(allRecipes);

  console.log(`Total recipes loaded: ${recipeArray.length}\n`);

  // Create a map of filter combinations
  const combinations = new Map<string, FilterCombination>();

  // Analyze each recipe
  recipeArray.forEach(recipe => {
    // Generate all relevant filter combination keys for this recipe
    const keys = generateCombinationKeys(recipe);

    keys.forEach(key => {
      if (!combinations.has(key)) {
        combinations.set(key, {
          ...parseKey(key),
          count: 0,
          recipes: [],
        });
      }
      const combo = combinations.get(key)!;
      combo.count++;
      combo.recipes.push(recipe.id);
    });
  });

  // Analyze coverage by dimension
  console.log('=== Coverage by Filter Dimension ===\n');

  const strengthCounts = new Map<string, number>();
  const flavorCounts = new Map<string, number>();
  const mintCounts = new Map<string, number>();
  const coolingCounts = new Map<string, number>();

  recipeArray.forEach(recipe => {
    if (recipe.strengthCategory) {
      strengthCounts.set(
        recipe.strengthCategory,
        (strengthCounts.get(recipe.strengthCategory) || 0) + 1
      );
    }
    if (recipe.flavorCategory) {
      flavorCounts.set(
        recipe.flavorCategory,
        (flavorCounts.get(recipe.flavorCategory) || 0) + 1
      );
    }
    if (recipe.mintCategory) {
      mintCounts.set(
        recipe.mintCategory,
        (mintCounts.get(recipe.mintCategory) || 0) + 1
      );
    }
    if (recipe.coolingCategory) {
      coolingCounts.set(
        recipe.coolingCategory,
        (coolingCounts.get(recipe.coolingCategory) || 0) + 1
      );
    }
  });

  console.log('Strength Categories:');
  strengthCounts.forEach((count, category) => {
    console.log(`  ${category}: ${count} recipes`);
  });

  console.log('\nFlavor Categories:');
  flavorCounts.forEach((count, category) => {
    console.log(`  ${category}: ${count} recipes`);
  });

  console.log('\nMint Categories:');
  mintCounts.forEach((count, category) => {
    console.log(`  ${category}: ${count} recipes`);
  });

  console.log('\nCooling Categories:');
  coolingCounts.forEach((count, category) => {
    console.log(`  ${category}: ${count} recipes`);
  });

  // Find gaps
  console.log('\n=== Filter Combination Analysis ===\n');

  const expectedCombinations = [
    // Basic pages
    'all',
    // Single filters
    ...['legkaya-krepost', 'srednyaya-krepost', 'krepkaya-krepost'].map(s => `s:${s}`),
    ...['frukty', 'yagody', 'tsitrusovye', 'deserty', 'pryanosti-travy', 'ekzotika'].map(f => `f:${f}`),
    ...['s-myatoy', 'bez-myaty'].map(m => `m:${m}`),
    ...['bez-kholoda', 'legkiy-kholod', 'silnyy-kholod'].map(c => `c:${c}`),
  ];

  const missingCombinations: string[] = [];

  expectedCombinations.forEach(key => {
    if (!combinations.has(key) || combinations.get(key)!.count === 0) {
      missingCombinations.push(key);
    }
  });

  console.log(`Total filter combinations in map: ${combinations.size}`);
  console.log(`Combinations with recipes: ${Array.from(combinations.values()).filter(c => c.count > 0).length}`);
  console.log(`Missing combinations: ${missingCombinations.length}`);

  if (missingCombinations.length > 0) {
    console.log('\nMissing filter combinations:');
    missingCombinations.forEach(key => {
      console.log(`  - ${key}`);
    });
  }

  // Show top combinations
  console.log('\n=== Top 10 Filter Combinations by Recipe Count ===\n');

  const sortedCombos = Array.from(combinations.entries())
    .map(([key, data]) => ({ key, ...data }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  sortedCombos.forEach(({ key, count, recipes }) => {
    console.log(`${key}: ${count} recipes (IDs: ${recipes.slice(0, 5).join(', ')}${recipes.length > 5 ? '...' : ''})`);
  });

  console.log('\n=== Summary ===\n');
  console.log(`✅ Total recipes: ${recipeArray.length}`);
  console.log(`✅ Unique filter combinations: ${combinations.size}`);
  console.log(`✅ Coverage: ${missingCombinations.length === 0 ? 'COMPLETE' : 'PARTIAL'}`);

  if (missingCombinations.length > 0) {
    console.log(`⚠️  Missing ${missingCombinations.length} combinations - consider adding more recipes`);
  }
}

function generateCombinationKeys(recipe: any): string[] {
  const keys: string[] = ['all'];

  // Single dimension filters
  if (recipe.strengthCategory) keys.push(`s:${recipe.strengthCategory}`);
  if (recipe.flavorCategory) keys.push(`f:${recipe.flavorCategory}`);
  if (recipe.mintCategory) keys.push(`m:${recipe.mintCategory}`);
  if (recipe.coolingCategory) keys.push(`c:${recipe.coolingCategory}`);

  // Two dimension combinations
  if (recipe.strengthCategory && recipe.flavorCategory) {
    keys.push(`s:${recipe.strengthCategory}|f:${recipe.flavorCategory}`);
  }
  if (recipe.strengthCategory && recipe.mintCategory) {
    keys.push(`s:${recipe.strengthCategory}|m:${recipe.mintCategory}`);
  }
  if (recipe.strengthCategory && recipe.coolingCategory) {
    keys.push(`s:${recipe.strengthCategory}|c:${recipe.coolingCategory}`);
  }
  if (recipe.flavorCategory && recipe.mintCategory) {
    keys.push(`f:${recipe.flavorCategory}|m:${recipe.mintCategory}`);
  }
  if (recipe.flavorCategory && recipe.coolingCategory) {
    keys.push(`f:${recipe.flavorCategory}|c:${recipe.coolingCategory}`);
  }
  if (recipe.mintCategory && recipe.coolingCategory) {
    keys.push(`m:${recipe.mintCategory}|c:${recipe.coolingCategory}`);
  }

  // Three dimension combinations
  if (recipe.strengthCategory && recipe.flavorCategory && recipe.mintCategory) {
    keys.push(`s:${recipe.strengthCategory}|f:${recipe.flavorCategory}|m:${recipe.mintCategory}`);
  }
  if (recipe.strengthCategory && recipe.flavorCategory && recipe.coolingCategory) {
    keys.push(`s:${recipe.strengthCategory}|f:${recipe.flavorCategory}|c:${recipe.coolingCategory}`);
  }
  if (recipe.strengthCategory && recipe.mintCategory && recipe.coolingCategory) {
    keys.push(`s:${recipe.strengthCategory}|m:${recipe.mintCategory}|c:${recipe.coolingCategory}`);
  }
  if (recipe.flavorCategory && recipe.mintCategory && recipe.coolingCategory) {
    keys.push(`f:${recipe.flavorCategory}|m:${recipe.mintCategory}|c:${recipe.coolingCategory}`);
  }

  // Four dimension combination
  if (recipe.strengthCategory && recipe.flavorCategory && recipe.mintCategory && recipe.coolingCategory) {
    keys.push(`s:${recipe.strengthCategory}|f:${recipe.flavorCategory}|m:${recipe.mintCategory}|c:${recipe.coolingCategory}`);
  }

  return keys;
}

function parseKey(key: string): Partial<FilterCombination> {
  if (key === 'all') return {};

  const parts = key.split('|');
  const result: any = {};

  parts.forEach(part => {
    const [dimension, value] = part.split(':');
    switch (dimension) {
      case 's': result.strength = value; break;
      case 'f': result.flavor = value; break;
      case 'm': result.mint = value; break;
      case 'c': result.cooling = value; break;
    }
  });

  return result;
}

// Run the analysis
analyzeCoverage();
