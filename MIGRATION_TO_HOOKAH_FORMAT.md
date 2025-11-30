# Migration to Hookah-Specific Format - Summary

This document summarizes all changes made to convert the recipe system from food-based to hookah-specific format.

## ✅ Completed Changes

### 1. Entity Updates ([recipe.entity.ts](src/entities/recipe.entity.ts))

**Removed (food-related):**
- ❌ `nutrition` - Calories, protein, fat, carbs
- ❌ `cuisine` - Cuisine type
- ❌ `servings` - Number of servings
- ❌ `cookTime` - Cooking time
- ❌ `categories` - Category array
- ❌ `createdAt` - Creation timestamp
- ❌ `author` - Author field

**Added (hookah-specific):**
- ✅ `preparationTime` - Preparation time (string)
- ✅ `smokingDuration` - Smoking duration (string)
- ✅ `recipeType` - Recipe type (Фруктовый, Десертный, etc.)
- ✅ `persons` - Number of people (number)
- ✅ `bowlType` - Bowl type (string)
- ✅ `packingMethod` - Packing method (string)
- ✅ `charcoal` - Charcoal setup (jsonb object)
- ✅ `smokeLevel` - Smoke level (string)
- ✅ `tags` - Search tags (simple-array)
- ✅ `tips` - Smoking tips (simple-array)
- ✅ `likes` - Number of likes (number)

**Updated:**
- ✅ `ingredients` - Now includes `brand`, `percentage`, `tobaccoType`, `alternatives`
- ✅ `difficulty` - Changed from "1/5" to "Легко/Средне/Сложно"

### 2. Type Definitions ([src/data/recipes/types.ts](src/data/recipes/types.ts))

- ✅ Created `HookahIngredient` interface with brand and percentage
- ✅ Created `CharcoalSetup` interface
- ✅ Created `RecipeStep` interface
- ✅ Updated `Recipe` interface to match new structure

### 3. DTOs ([src/api/dto/recipe.dto.ts](src/api/dto/recipe.dto.ts))

- ✅ Created `HookahIngredientDto`
- ✅ Created `CharcoalSetupDto`
- ✅ Created `RecipeStepDto`
- ✅ Updated `RecipeDto` with all new hookah fields
- ✅ Updated `RecipeResponseDto` to return `recipes` array instead of `items`
- ✅ Created `RecipeQueryDto` for API query parameters

### 4. Reference Documentation ([FRONTEND_STRUCTURE_REFERENCE.md](FRONTEND_STRUCTURE_REFERENCE.md))

- ✅ Complete guide for frontend-backend integration
- ✅ URL generation patterns
- ✅ Category systems documentation
- ✅ API endpoint specifications
- ✅ Example JSON structures

### 5. Recipe Data ([src/data/recipes/by-strength/krepkaya-krepost/deserty.ts](src/data/recipes/by-strength/krepkaya-krepost/deserty.ts))

- ✅ Updated example file with 6 recipes in new format
- ✅ Added tobacco brands (Darkside, Adalya, Fumari, etc.)
- ✅ Added percentage-based mixes
- ✅ Added bowl types, packing methods, charcoal setups
- ✅ Added smoking tips and tags

### 6. Database Migration ([src/migrations/1733000000000-UpdateToHookahFormat.ts](src/migrations/1733000000000-UpdateToHookahFormat.ts))

- ✅ Migration to add new columns
- ✅ Migration to remove old columns
- ✅ Migration to update difficulty values
- ✅ Rollback support

---

## 📋 Next Steps for Full Implementation

### Step 1: Update Remaining Recipe Files

You have 18 recipe files total (3 strength levels × 6 flavor categories). Currently only one file is updated.

**Option A: Manual Update (Recommended for Quality)**

Use [deserty.ts](src/data/recipes/by-strength/krepkaya-krepost/deserty.ts) as a template and manually update each file:

1. `legkaya-krepost/` (6 files)
   - deserty.ts
   - ekzotika.ts
   - frukty.ts
   - pryanosti-travy.ts
   - tsitrusovye.ts
   - yagody.ts

2. `srednyaya-krepost/` (6 files)
   - Same files as above

3. `krepkaya-krepost/` (6 files)
   - ✅ deserty.ts (DONE)
   - ekzotika.ts
   - frukty.ts
   - pryanosti-travy.ts
   - tsitrusovye.ts
   - yagody.ts

**Option B: Automated Script**

A script has been created at [src/data/recipes/update-to-hookah-format.ts](src/data/recipes/update-to-hookah-format.ts), but it may need adjustments.

### Step 2: Run Database Migration

```bash
cd Hookapedia-backend

# Generate migration (if using TypeORM CLI)
npm run migration:generate -- -n UpdateToHookahFormat

# Or run the existing migration
npm run migration:run
```

### Step 3: Run Seed Script

```bash
npm run seed
```

**Expected Output:**
```
Loaded 6 recipes from krepkaya-krepost/deserty.ts
Loaded 6 recipes from krepkaya-krepost/ekzotika.ts
...
Total recipes loaded: 108
Starting seed process...
Database connection established
Starting to seed recipes...
Seeding completed successfully
```

### Step 4: Test API Endpoints

```bash
# Start the server
npm run start:dev

# Visit Swagger UI
open http://localhost:3001/api/docs
```

Test these endpoints:
- `GET /api/recipes` - Get all recipes
- `GET /api/recipes?flavor_category=deserty` - Filter by flavor
- `GET /api/recipes?strength_category=krepkaya-krepost&mint_category=s-myatoy` - Multiple filters
- `GET /api/recipes/740` - Get single recipe

### Step 5: Update Controllers (if needed)

Check [src/api/recipe.controller.ts](src/api/recipe.controller.ts) to ensure it uses the new DTOs:

```typescript
@Get()
@ApiResponse({ type: RecipeResponseDto })
async getRecipes(@Query() query: RecipeQueryDto): Promise<RecipeResponseDto> {
  // Implementation
}
```

---

## 🔧 Key Changes Summary

### Ingredients Structure

**OLD (Food):**
```typescript
{
  name: 'Табак ваниль',
  amount: 15,
  unit: 'г'
}
```

**NEW (Hookah):**
```typescript
{
  name: 'Vanilla Sky',
  brand: 'Darkside',
  percentage: 50,
  tobaccoType: 'Dark Blend',
  amount: 15,
  unit: Unit.g
}
```

### Recipe Structure

**OLD:**
```typescript
{
  id: 740,
  cookTime: '16 минут',
  difficulty: '3/5',
  nutrition: { calories: ..., protein: ... },
  cuisine: 'Современная',
  servings: 1
}
```

**NEW:**
```typescript
{
  id: 740,
  preparationTime: '10-15 минут',
  smokingDuration: '60-75 минут',
  difficulty: 'Средне',
  recipeType: 'Десертный',
  persons: 2,
  bowlType: 'Phunnel',
  packingMethod: 'Плотная',
  charcoal: {
    type: 'Кокосовый',
    brand: 'Cocobrico',
    pieces: 3,
    size: '25мм куб'
  },
  smokeLevel: 'Высокий',
  tags: ['десерт', 'ваниль', 'крепкая'],
  tips: ['Не перегревайте первые 5 минут'],
  likes: 89
}
```

---

## 📊 Popular Tobacco Brands to Use

When updating recipes, use these real brands:

**Premium Brands:**
- Darkside (Russia) - Dark Blend
- Tangiers (USA) - Dark tobacco
- Fumari (USA) - Premium flavors
- Azure (USA) - Wide variety

**Popular Brands:**
- Adalya (Turkey) - Affordable, flavorful
- Element (Russia) - Natural ingredients
- Duft (Russia) - Ice/cooling flavors
- Must Have (Russia) - Strong flavors

**Mid-Range:**
- Chaos (Russia)
- Burn (Russia)
- Северный (Russia)
- BlackBurn (Russia)
- Daily Hookah (Russia)
- Satyr (Russia)

---

## 🎯 Difficulty Mapping

When updating recipes, convert difficulty:

| Old Value | New Value |
|-----------|-----------|
| 1/5 | Легко |
| 2/5 | Легко |
| 3/5 | Средне |
| 4/5 | Сложно |
| 5/5 | Сложно |

---

## 🔥 Strength Category Guidelines

**legkaya-krepost (Light):**
- Bowl: Phunnel, Funnel
- Packing: Воздушная
- Charcoal: 2 pieces
- Duration: 40-50 минут
- Persons: 1
- Tobacco Type: Virginia

**srednyaya-krepost (Medium):**
- Bowl: Phunnel, Силиконовая Phunnel
- Packing: Воздушная, Плотная
- Charcoal: 3 pieces
- Duration: 50-60 минут
- Persons: 2
- Tobacco Type: Burley

**krepkaya-krepost (Strong):**
- Bowl: Phunnel, Глиняная Phunnel
- Packing: Плотная, Оверпак
- Charcoal: 3 pieces
- Duration: 60-75 минут
- Persons: 2
- Tobacco Type: Dark Blend

---

## ✅ Verification Checklist

After completing all updates:

- [ ] All 18 recipe files updated to new format
- [ ] Database migration run successfully
- [ ] Seed script loads all 108 recipes
- [ ] API returns recipes in new format
- [ ] Swagger documentation shows new schema
- [ ] All filters work (flavor, mint, cooling, strength)
- [ ] Search works on tags and title
- [ ] No TypeScript compilation errors
- [ ] All tests pass (if applicable)

---

## 🚨 Important Notes

1. **Don't lose data:** The migration has a `down()` method to rollback if needed
2. **Test first:** Run seed on a test database before production
3. **Backup:** Backup your database before running migrations
4. **Frontend sync:** Update frontend to expect new ingredient structure with `brand` and `percentage`
5. **Missing fields:** All recipes must have `bowlType`, `packingMethod`, `charcoal`, etc.

---

## 📞 Need Help?

Reference these files for examples:
- [FRONTEND_STRUCTURE_REFERENCE.md](FRONTEND_STRUCTURE_REFERENCE.md) - Complete API contract
- [src/data/recipes/by-strength/krepkaya-krepost/deserty.ts](src/data/recipes/by-strength/krepkaya-krepost/deserty.ts) - Example updated recipes
- [src/data/recipes/types.ts](src/data/recipes/types.ts) - TypeScript interfaces
- [src/api/dto/recipe.dto.ts](src/api/dto/recipe.dto.ts) - API response format
