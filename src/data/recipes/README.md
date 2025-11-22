# Hookah Recipes Storage Structure

This directory contains all hookah recipes organized in a scalable, hierarchical structure.

## Directory Structure

```
recipes/
├── types.ts                          # Shared TypeScript interfaces and types
├── index.ts                          # Main export that aggregates all recipes
├── generate-missing-recipes.ts       # Script to generate placeholder recipes
└── by-strength/                      # Recipes organized by strength level
    ├── legkaya-krepost/              # Light strength recipes
    │   ├── frukty.ts                 # Fruit flavor recipes
    │   ├── yagody.ts                 # Berry flavor recipes
    │   ├── tsitrusovye.ts            # Citrus flavor recipes
    │   ├── deserty.ts                # Dessert flavor recipes
    │   ├── pryanosti-travy.ts        # Spices & herbs recipes
    │   └── ekzotika.ts               # Exotic flavor recipes
    ├── srednyaya-krepost/            # Medium strength recipes
    │   └── ... (same structure)
    └── krepkaya-krepost/             # Strong strength recipes
        └── ... (same structure)
```

## Filter Dimensions

Each recipe is tagged with four filter dimensions to ensure complete coverage of all sitemap filter combinations:

1. **Strength Category** (`strengthCategory`)
   - `legkaya-krepost` - Light strength
   - `srednyaya-krepost` - Medium strength
   - `krepkaya-krepost` - Strong strength

2. **Flavor Category** (`flavorCategory`)
   - `frukty` - Fruit flavors
   - `yagody` - Berry flavors
   - `tsitrusovye` - Citrus flavors
   - `deserty` - Dessert flavors
   - `pryanosti-travy` - Spices & herbs
   - `ekzotika` - Exotic flavors

3. **Mint Category** (`mintCategory`)
   - `s-myatoy` - With mint
   - `bez-myaty` - Without mint

4. **Cooling Category** (`coolingCategory`)
   - `bez-kholoda` - No cooling
   - `legkiy-kholod` - Light cooling
   - `silnyy-kholod` - Strong cooling

## File Organization

Each file (e.g., `legkaya-krepost/frukty.ts`) contains multiple recipe variations with different mint and cooling combinations. This ensures:

- **Complete coverage** of all filter combinations
- **Manageable file sizes** (~10-20 recipes per file)
- **Easy navigation** - Find recipes by strength → flavor
- **Scalability** - Easy to add more recipes to specific categories

## Usage

### Import all recipes:
```typescript
import { recipes } from '@/data/recipes';
```

### Import specific types:
```typescript
import { Recipe, RecipeCollection, Unit } from '@/data/recipes/types';
```

### Load recipes dynamically:
```typescript
import { loadAllRecipes } from '@/data/recipes';
const allRecipes = loadAllRecipes();
```

## Adding New Recipes

1. Navigate to the appropriate strength directory
2. Open the flavor category file (e.g., `frukty.ts`)
3. Add your recipe with a unique ID
4. Ensure all filter categories are set correctly

Example:
```typescript
export const recipes: RecipeCollection = {
  123: {
    id: 123,
    name: 'my-new-recipe',
    title: 'My New Recipe',
    // ... other fields
    flavorCategory: 'frukty',
    mintCategory: 's-myatoy',
    coolingCategory: 'legkiy-kholod',
    strengthCategory: 'legkaya-krepost',
  },
};
```

## Generating Missing Recipes

To generate placeholder recipes for missing filter combinations:

```bash
npm run ts-node src/data/recipes/generate-missing-recipes.ts
```

## Statistics

- **Current recipe count**: ~106 recipes (22 original + 84 generated)
- **Files**: 18 flavor category files (3 strengths × 6 flavors)
- **Coverage**: All major filter combinations covered
- **Scalability**: Easy to add 100s more recipes without performance issues

## Migration from Old Structure

The old structure ([src/data/hookah-recipes.ts](../hookah-recipes.ts)) has been replaced with this new hierarchical system. The seed script has been updated to load from the new structure automatically.

**Benefits over old structure:**
- ✅ Scalable (was 903 lines, now distributed across 18 files)
- ✅ Easy to navigate and maintain
- ✅ Better version control (isolated changes)
- ✅ Easier for AI to read and generate content
- ✅ Complete filter coverage guaranteed
