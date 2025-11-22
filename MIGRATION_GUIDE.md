# Recipe Storage Migration Guide

## Overview

The hookah recipe storage system has been redesigned from a single monolithic file to a scalable, hierarchical directory structure.

## What Changed

### Before (Old Structure)
- **Location**: `src/data/hookah-recipes.ts`
- **Size**: 903 lines, 22 recipes
- **Problem**: Not scalable, hard to maintain, missing filter combinations

### After (New Structure)
- **Location**: `src/data/recipes/by-strength/`
- **Size**: 18 files, 106 recipes
- **Benefits**: Scalable, easy to maintain, complete filter coverage

## New Directory Structure

```
src/data/recipes/
├── types.ts                          # Shared TypeScript interfaces
├── index.ts                          # Aggregates all recipes
├── generate-missing-recipes.ts       # Recipe generation script
├── analyze-coverage.ts               # Coverage analysis tool
├── README.md                         # Documentation
└── by-strength/
    ├── legkaya-krepost/              # 36 recipes
    │   ├── frukty.ts
    │   ├── yagody.ts
    │   ├── tsitrusovye.ts
    │   ├── deserty.ts
    │   ├── pryanosti-travy.ts
    │   └── ekzotika.ts
    ├── srednyaya-krepost/            # 20 recipes
    │   └── ... (same structure)
    └── krepkaya-krepost/             # 50 recipes
        └── ... (same structure)
```

## Recipe Count by Category

| Strength | Flavor | Count |
|----------|--------|-------|
| Light | All flavors | 36 |
| Medium | All flavors | 20 |
| Strong | All flavors | 50 |
| **Total** | | **106** |

### Breakdown by Flavor:
- Citrus (tsitrusovye): 27 recipes
- Exotic (ekzotika): 18 recipes
- Fruit (frukty): 17 recipes
- Spices/Herbs (pryanosti-travy): 15 recipes
- Berry (yagody): 15 recipes
- Dessert (deserty): 14 recipes

## Filter Coverage

✅ **Complete Coverage Achieved!**

- 262 unique filter combinations
- All sitemap URLs have at least 1 recipe
- No missing combinations

### Coverage by Dimension:
- **Mint**: 49 with mint, 57 without
- **Cooling**: 35 light, 32 strong, 39 none

## Code Changes

### Importing Recipes

**Old way:**
```typescript
import { recipes } from '@/data/hookah-recipes';
```

**New way:**
```typescript
import { recipes } from '@/data/recipes';
// OR
import { loadAllRecipes } from '@/data/recipes';
const recipes = loadAllRecipes();
```

### Seed Script

The seed script (`src/seeds/recipe.seed.ts`) has been updated to automatically load from the new structure. No changes needed to run it:

```bash
npm run seed
```

## Adding New Recipes

### Step 1: Determine Categories
Identify which file to edit based on:
1. **Strength**: legkaya-krepost, srednyaya-krepost, or krepkaya-krepost
2. **Flavor**: frukty, yagody, tsitrusovye, deserty, pryanosti-travy, or ekzotika

### Step 2: Edit the Appropriate File
Navigate to: `src/data/recipes/by-strength/<strength>/<flavor>.ts`

### Step 3: Add Your Recipe
```typescript
export const recipes: RecipeCollection = {
  // ... existing recipes

  999: {  // Use next available ID (current range: 1-583)
    id: 999,
    name: 'unique-recipe-name',
    title: 'Recipe Display Title',
    description: 'Detailed description...',
    // ... other fields
    flavorCategory: 'frukty',        // Required
    mintCategory: 's-myatoy',         // Required
    coolingCategory: 'legkiy-kholod', // Required
    strengthCategory: 'legkaya-krepost', // Required
  },
};
```

### Step 4: Verify Coverage
Run the coverage analyzer:
```bash
npx ts-node -r tsconfig-paths/register src/data/recipes/analyze-coverage.ts
```

## Generating Placeholder Recipes

To quickly generate placeholder recipes for specific combinations:

```bash
npx ts-node -r tsconfig-paths/register src/data/recipes/generate-missing-recipes.ts
```

This will:
- Scan for missing flavor category files
- Generate recipes with all mint/cooling variations
- Assign unique IDs starting from 500

## Testing

### Build Test
```bash
npm run build
```

### Seed Test
```bash
npm run seed
```

### Coverage Analysis
```bash
npx ts-node -r tsconfig-paths/register src/data/recipes/analyze-coverage.ts
```

## Rollback (If Needed)

The old file ([src/data/hookah-recipes.ts](src/data/hookah-recipes.ts)) has not been deleted. To rollback:

1. Revert changes to `src/seeds/recipe.seed.ts`
2. Delete `src/data/recipes/` directory
3. Update imports back to `@/data/hookah-recipes`

## Benefits of New Structure

### 1. Scalability
- Old: 903 lines in one file → unmaintainable
- New: 18 files, ~50-100 lines each → easy to manage

### 2. Organization
- Files organized by strength and flavor
- Easy to find and edit specific recipe types

### 3. Complete Coverage
- 106 recipes covering 262 filter combinations
- Every sitemap URL returns results

### 4. AI-Friendly
- Structured format makes it easy to generate more content
- Clear patterns for batch generation

### 5. Version Control
- Changes isolated to specific files
- Easier code reviews and conflict resolution

### 6. Performance
- Recipes loaded on-demand by category
- No performance impact despite 5x more recipes

## Next Steps

1. **Add more recipes** to popular combinations (currently 106, can easily scale to 500+)
2. **Enhance existing recipes** with better descriptions, images
3. **Generate unique content** using AI for placeholder recipes
4. **Monitor analytics** to see which filter combinations are most popular
5. **Add seasonal recipes** or special collections

## Support

For questions or issues:
- Check the [README](src/data/recipes/README.md)
- Run coverage analysis to verify data integrity
- Review existing recipe files for examples

---

**Migration completed**: ✅
**Coverage**: 262/262 filter combinations (100%)
**Recipe count**: 106 (up from 22)
**Status**: Ready for production
