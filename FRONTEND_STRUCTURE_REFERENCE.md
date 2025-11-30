# Frontend Structure Reference for Hookapedia

This document describes how the frontend structures hookah recipes, generates URLs, and expects data from the backend API.

## Table of Contents
1. [Recipe Type Structure](#recipe-type-structure)
2. [Category Systems](#category-systems)
3. [URL Generation & Routing](#url-generation--routing)
4. [API Endpoints Expected](#api-endpoints-expected)
5. [Backend Entity Mapping](#backend-entity-mapping)

---

## Recipe Type Structure

### Frontend Recipe Interface
**Location:** `Hookapedia-frontend/src/types.ts`

```typescript
interface Recipe {
  id: string | number;
  slug?: string;              // URL-friendly transliterated slug (OPTIONAL)
  title: string;              // Display title (e.g., "Цитрусовый взрыв")
  description: string;        // Full text description
  imageUrl: string;           // Main recipe image URL
  ingredients: Ingredient[];  // Array of ingredients
  strength: number;           // Numeric strength 1-10

  // Category filters (slug IDs)
  strengthCategory?: string;   // 'legkaya-krepost' | 'srednyaya-krepost' | 'krepkaya-krepost'
  mintCategory?: string;       // 's-myatoy' | 'bez-myaty'
  coolingCategory?: string;    // 'bez-kholoda' | 'legkiy-kholod' | 'silnyy-kholod'
  flavorCategory?: string;     // 'frukty' | 'yagody' | 'tsitrusovye' | 'deserty' | 'pryanosti-travy' | 'ekzotika'

  tags: string[];             // Search tags
  author: string;             // Creator name
  createdAt: string;          // ISO date string
  likes: number;              // Like count
  steps?: Step[];             // Optional cooking instructions
}

interface Ingredient {
  name: string;               // Tobacco flavor name (e.g., "Double Apple")
  brand?: string;             // Brand name (e.g., "Darkside")
  percentage: number;         // Mix percentage (e.g., 40 = 40%)
  amount?: number;            // Amount value
  unit?: string;              // Unit (e.g., "g", "ml")
}

interface Step {
  title: string;              // Step title
  text: string;               // Step description
  image?: string;             // Optional step image URL
}
```

---

## Category Systems

### 1. Strength Categories (Крепость)
**Location:** `Hookapedia-frontend/src/data/categories/strengthCategories.ts`

| Slug ID | Title | Numeric Value | Range | Tobacco Type |
|---------|-------|---------------|-------|--------------|
| `legkaya-krepost` | Лёгкая крепость | 3 | 1-3 | Virginia |
| `srednyaya-krepost` | Средняя крепость | 6 | 4-7 | Burley |
| `krepkaya-krepost` | Крепкая крепость | 9 | 8-10 | Dark Blend |

**IMPORTANT:** Each recipe has TWO strength properties:
1. **`strength`** (number) - Numeric value for display/comparison (3, 6, or 9)
2. **`strengthCategory`** (string) - Category slug for filtering ('legkaya-krepost', 'srednyaya-krepost', 'krepkaya-krepost')

**Mapping in URL parsing:**
```typescript
if (slug === 'legkaya-krepost') state.strength = 3;
else if (slug === 'srednyaya-krepost') state.strength = 6;
else if (slug === 'krepkaya-krepost') state.strength = 9;
```

**Strength Calculation:**
```typescript
function calculateStrength(strengthCategory: string): number {
  switch (strengthCategory) {
    case 'legkaya-krepost': return 3;
    case 'srednyaya-krepost': return 6;
    case 'krepkaya-krepost': return 9;
    default: return 5;
  }
}
```

### 2. Flavor Categories (Вкусовые категории)
**Location:** `Hookapedia-frontend/src/data/categories/flavorCategoryCategories.ts`

| Slug ID | Title (Russian) | Title (English) |
|---------|-----------------|-----------------|
| `frukty` | Фруктовый вкус | Fruit Flavor |
| `yagody` | Ягодный вкус | Berry Flavor |
| `tsitrusovye` | Цитрусовый вкус | Citrus Flavor |
| `deserty` | Десертный вкус | Dessert Flavor |
| `pryanosti-travy` | Пряности и травы | Spices & Herbs |
| `ekzotika` | Экзотический вкус | Exotic Flavor |

### 3. Mint Categories (Мята)
**Location:** `Hookapedia-frontend/src/data/categories/mintCategories.ts`

| Slug ID | Title |
|---------|-------|
| `s-myatoy` | С мятой (With mint) |
| `bez-myaty` | Без мяты (Without mint) |

### 4. Cooling Categories (Холодок)
**Location:** `Hookapedia-frontend/src/data/categories/coolingCategories.ts`

| Slug ID | Title |
|---------|-------|
| `bez-kholoda` | Без холодка (No cooling) |
| `legkiy-kholod` | Лёгкий холодок (Light cooling) |
| `silnyy-kholod` | Сильный холодок (Strong cooling) |

---

## URL Generation & Routing

### Recipe Detail Pages

**Pattern:** `/recept/[slug]`

**Slug Format:** `{transliterated-title}-{id}` or `{recipe.slug}-{id}`

**Examples:**
- `/recept/tsitrusovyy-vzryv-101`
- `/recept/yagodnaya-svejest-202`
- `/recept/myatnyy-desert-303`

**Generation Logic:**
```typescript
// Location: Hookapedia-frontend/src/utils/slug.ts

function generateRecipeSlug(recipe: Recipe): string {
  const baseSlug = recipe.slug || toSlug(recipe.title);
  return `${baseSlug}-${recipe.id}`;
}

// Transliteration map (Cyrillic → Latin)
const translitMap = {
  'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e',
  'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
  'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
  'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
  'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
};

function toSlug(text: string): string {
  return text
    .toLowerCase()
    .split('')
    .map(char => translitMap[char] || char)
    .join('')
    .replace(/[^a-z0-9\s-]/g, '')  // Remove special chars
    .replace(/\s+/g, '-')           // Spaces → hyphens
    .replace(/-+/g, '-')            // Multiple hyphens → single
    .trim();
}
```

**ID Extraction:**
```typescript
// From URL: /recept/tsitrusovyy-vzryv-101
function extractIdFromSlug(slug: string): string {
  const parts = slug.split('-');
  return parts[parts.length - 1];  // Returns "101"
}
```

### Catalog Filter Pages

**Pattern:** `/recepty/[...filters]`

**Dynamic Catch-all Routes:**
- `/recepty` - All recipes
- `/recepty/krepkaya-krepost` - Strong recipes only
- `/recepty/yagody` - Berry flavor only
- `/recepty/krepkaya-krepost/yagody` - Strong berry recipes
- `/recepty/legkaya-krepost/s-myatoy/legkiy-kholod` - Light strength + mint + light cooling

**URL Parsing Logic:**
```typescript
// Location: Hookapedia-frontend/src/app/recepty/[...filters]/page.tsx

interface FilterState {
  search: string;
  strength: number | null;           // Maps to numeric value (3, 6, or 9)
  flavorCategory: string | null;     // Category slug
  mintCategory: string | null;       // Category slug
  coolingCategory: string | null;    // Category slug
}

function parseFiltersFromUrl(filters: string[]): FilterState {
  const state: FilterState = {
    search: '',
    strength: null,
    flavorCategory: null,
    mintCategory: null,
    coolingCategory: null
  };

  filters.forEach(slug => {
    if (slug === 'all') return;

    // Detect category type by checking against known slugs
    if (getStrengthBySlug(slug)) {
      if (slug === 'legkaya-krepost') state.strength = 3;
      else if (slug === 'srednyaya-krepost') state.strength = 6;
      else if (slug === 'krepkaya-krepost') state.strength = 9;
    } else if (getFlavorBySlug(slug)) {
      state.flavorCategory = slug;
    } else if (getCoolingBySlug(slug)) {
      state.coolingCategory = slug;
    } else if (getMintBySlug(slug)) {
      state.mintCategory = slug;
    }
  });

  return state;
}
```

---

## API Endpoints Expected

### 1. Get Recipes with Filters
**Endpoint:** `GET /api/recipes`

**Query Parameters:**
```typescript
{
  page?: number;                    // Pagination page (default: 1)
  limit?: number;                   // Items per page (default: 20)
  search?: string;                  // Text search query
  flavor_category?: string;         // Filter by flavor slug
  mint_category?: string;           // Filter by mint slug
  cooling_category?: string;        // Filter by cooling slug
  strength_category?: string;       // Filter by strength slug
}
```

**Example Requests:**
```
GET /api/recipes?page=1&limit=20
GET /api/recipes?flavor_category=yagody
GET /api/recipes?strength_category=krepkaya-krepost&mint_category=s-myatoy
GET /api/recipes?search=цитрус&flavor_category=tsitrusovye
```

**Response Format:**
```typescript
{
  recipes: Recipe[];              // Array of recipe objects
  total: number;                  // Total count for pagination
  page: number;                   // Current page
  limit: number;                  // Items per page
}
```

### 2. Get Recipe by ID
**Endpoint:** `GET /api/recipes/:id`

**Example:** `GET /api/recipes/101`

**Response Format:**
```typescript
Recipe  // Single recipe object or 404 if not found
```

### 3. Get Similar Recipes
**Endpoint:** `GET /api/recipes/:id/similar` (or custom implementation)

**Logic:** Return recipes with same `flavorCategory` or `strengthCategory`, excluding current recipe.

**Response Format:**
```typescript
Recipe[]  // Array of similar recipes (typically 3-6 items)
```

### 4. Get Collections
**Endpoint:** `GET /api/collections`

**Response Format:**
```typescript
{
  id: number;
  name: string;
  description: string;
  image: string;
  url?: string;                   // Link to filtered recipe page
}[]
```

---

## Backend Entity Mapping

### Updated Backend Entity (recipe.entity.ts)

**✅ REMOVED (food-related fields):**
- ❌ `nutrition` (calories, protein, fat, carbs)
- ❌ `cuisine`
- ❌ `servings`
- ❌ `cookTime`
- ❌ `categories` array
- ❌ `createdAt`
- ❌ `author`

**✅ ADDED (hookah-specific fields):**
- ✅ `preparationTime` - Preparation time (e.g., "10-15 минут")
- ✅ `smokingDuration` - Smoking duration (e.g., "45-60 минут")
- ✅ `recipeType` - Recipe type (Фруктовый, Десертный, etc.)
- ✅ `persons` - Number of people (1-3)
- ✅ `bowlType` - Bowl type (Phunnel, Funnel, Egyptian)
- ✅ `packingMethod` - Packing method (Воздушная, Плотная, Оверпак)
- ✅ `charcoal` - Charcoal setup (type, brand, pieces, size)
- ✅ `smokeLevel` - Smoke level (Низкий, Средний, Высокий)
- ✅ `tags` - Search tags array
- ✅ `tips` - Smoking tips array
- ✅ `likes` - Number of likes

**✅ UPDATED (ingredient structure):**
```typescript
// OLD (food-based)
ingredients: Array<{
  name: string;
  amount: number;
  unit: string;
}>

// NEW (hookah-based)
ingredients: Array<{
  name: string;              // Tobacco flavor name (MUST BE IN RUSSIAN)
  brand: string;             // Brand (Darkside, Adalya, etc.)
  percentage: number;        // Mix percentage
  tobaccoType?: string;      // Virginia, Burley, Dark Blend
  amount?: number;           // Optional grams
  unit?: string;             // Optional unit
  alternatives?: string[];   // Alternative flavors
}>
```

### Data Storage Format
Recipes are stored in JSON format to facilitate AI processing and easier editing. The structure follows the schema defined in `src/data/recipes/schema.json`.
```

### Current Structure (TypeScript)
```typescript
@Entity('recipes')
class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;                    // Backend "name" = Frontend "slug"

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  preparationTime: string;         // NEW

  @Column()
  smokingDuration: string;         // NEW

  @Column()
  difficulty: string;              // Updated values

  @Column()
  recipeType: string;              // NEW (replaces cuisine)

  @Column({ default: 1 })
  persons: number;                 // NEW (replaces servings)

  @Column('jsonb')
  ingredients: Array<{             // UPDATED structure
    name: string;
    brand: string;
    percentage: number;
    tobaccoType?: string;
    amount?: number;
    unit?: string;
    alternatives?: string[];
  }>;

  @Column('jsonb')
  steps: Array<{
    title: string;
    text: string;
    image?: string;
  }>;

  @Column()
  imageMain: string;               // Maps to frontend "imageUrl"

  @Column()
  bowlType: string;                // NEW

  @Column()
  packingMethod: string;           // NEW

  @Column('jsonb')
  charcoal: {                      // NEW
    type: string;
    brand?: string;
    pieces: number;
    size: string;
  };

  @Column()
  smokeLevel: string;              // NEW

  @Column('simple-array')
  tags: string[];                  // NEW

  @Column('simple-array', { nullable: true })
  tips: string[];                  // NEW

  @Column({ nullable: true })
  flavorCategory: string;

  @Column({ nullable: true })
  mintCategory: string;

  @Column({ nullable: true })
  coolingCategory: string;

  @Column({ nullable: true })
  strengthCategory: string;

  @Column('decimal', { precision: 3, scale: 1, default: 0 })
  rating: number;

  @Column({ default: 0 })
  reviews: number;

  @Column({ default: 0 })
  likes: number;                   // NEW

  @UpdateDateColumn()
  updatedAt: Date;
}
```

### Required Transformations for API Responses

**Backend → Frontend mapping:**
```typescript
// DTO Transformation
{
  id: recipe.id,
  slug: recipe.name,                    // Backend "name" → Frontend "slug"
  title: recipe.title,
  description: recipe.description,
  imageUrl: recipe.imageMain,           // Backend "imageMain" → Frontend "imageUrl"
  ingredients: recipe.ingredients,      // Already in correct format
  strength: calculateStrength(recipe.strengthCategory),
  strengthCategory: recipe.strengthCategory,
  mintCategory: recipe.mintCategory,
  coolingCategory: recipe.coolingCategory,
  flavorCategory: recipe.flavorCategory,
  tags: recipe.tags,
  likes: recipe.likes,
  steps: recipe.steps
}

// Helper: Convert category to numeric strength
function calculateStrength(strengthCategory: string): number {
  switch (strengthCategory) {
    case 'legkaya-krepost': return 3;
    case 'srednyaya-krepost': return 6;
    case 'krepkaya-krepost': return 9;
    default: return 5;
  }
}
```

---

## Summary for AI/Claude Code

When generating recipe data or API responses:

1. **Recipe slug generation:** Use Cyrillic→Latin transliteration + recipe ID
2. **Category slugs:** Use exact slug IDs from the tables above (e.g., `yagody`, not `berries`)
3. **Strength mapping:**
   - `legkaya-krepost` → strength: 3
   - `srednyaya-krepost` → strength: 6
   - `krepkaya-krepost` → strength: 9
4. **URL structure:**
   - Detail: `/recept/{slug}-{id}`
   - Catalog: `/recepty/{category-slug}/{category-slug}/...`
5. **Field mapping:**
   - Backend `name` → Frontend `slug`
   - Backend `imageMain` → Frontend `imageUrl`
   - Add `strength` number based on `strengthCategory`
6. **Ingredient structure:** Include `brand` and `percentage` fields for hookah tobacco mixes
7. **Hookah-specific fields:** Include `bowlType`, `packingMethod`, `charcoal`, `smokeLevel`, `preparationTime`, `smokingDuration`

---

## Example Recipe JSON

### Backend Database Format
```json
{
  "id": 740,
  "name": "vanil-karamel-s-myatoy-krepkaya",
  "title": "Ваниль-карамель с мятой (крепкая)",
  "description": "Насыщенный десертный микс с ванилью, карамелью и освежающей мятой",
  "preparationTime": "10-15 минут",
  "smokingDuration": "45-60 минут",
  "difficulty": "Средне",
  "recipeType": "Десертный",
  "persons": 2,
  "ingredients": [
    {
      "name": "Vanilla Sky",
      "brand": "Darkside",
      "percentage": 40,
      "tobaccoType": "Dark Blend",
      "amount": 12,
      "unit": "г"
    },
    {
      "name": "Caramel",
      "brand": "Adalya",
      "percentage": 35,
      "amount": 10,
      "unit": "г"
    },
    {
      "name": "Ice Mint",
      "brand": "Fumari",
      "percentage": 25,
      "amount": 8,
      "unit": "г"
    }
  ],
  "bowlType": "Phunnel",
  "packingMethod": "Воздушная",
  "charcoal": {
    "type": "Кокосовый",
    "brand": "Cocobrico",
    "pieces": 3,
    "size": "25мм куб"
  },
  "smokeLevel": "Высокий",
  "steps": [
    {
      "title": "Подготовка чаши",
      "text": "Тщательно промойте чашу типа Phunnel"
    },
    {
      "title": "Смешивание табака",
      "text": "Смешайте табаки в указанных пропорциях: 40% Vanilla Sky, 35% Caramel, 25% Ice Mint"
    },
    {
      "title": "Забивка",
      "text": "Воздушно распределите смесь в чаше, не утрамбовывая"
    },
    {
      "title": "Розжиг",
      "text": "Разожгите 3 кубика кокосового угля Cocobrico 25мм"
    }
  ],
  "tips": [
    "Не перегревайте первые 5 минут",
    "Лучше курить вечером после еды",
    "Можно добавить лёд в колбу для усиления охлаждения"
  ],
  "imageMain": "/images/vanil-karamel-myata.jpg",
  "tags": ["десерт", "ваниль", "карамель", "мята", "крепкая", "вечерний"],
  "strength": 9,
  "flavorCategory": "deserty",
  "mintCategory": "s-myatoy",
  "coolingCategory": "bez-kholoda",
  "strengthCategory": "krepkaya-krepost",
  "rating": 4.7,
  "reviews": 89,
  "likes": 234,
  "updatedAt": "2024-11-25T10:30:00Z"
}
```

### Frontend Expected Format
```json
{
  "id": 740,
  "slug": "vanil-karamel-s-myatoy-krepkaya",
  "title": "Ваниль-карамель с мятой (крепкая)",
  "description": "Насыщенный десертный микс с ванилью, карамелью и освежающей мятой",
  "imageUrl": "/images/vanil-karamel-myata.jpg",
  "ingredients": [
    {
      "name": "Vanilla Sky",
      "brand": "Darkside",
      "percentage": 40
    },
    {
      "name": "Caramel",
      "brand": "Adalya",
      "percentage": 35
    },
    {
      "name": "Ice Mint",
      "brand": "Fumari",
      "percentage": 25
    }
  ],
  "strength": 9,
  "strengthCategory": "krepkaya-krepost",
  "mintCategory": "s-myatoy",
  "coolingCategory": "bez-kholoda",
  "flavorCategory": "deserty",
  "tags": ["десерт", "ваниль", "карамель", "мята", "крепкая", "вечерний"],
  "likes": 234,
  "steps": [...]
}
```

### Example Filter URL
`/recepty/krepkaya-krepost/deserty/s-myatoy`

**Parsed as:**
```typescript
{
  strength: 9,                      // krepkaya-krepost → 9
  flavorCategory: "deserty",        // dessert flavor
  mintCategory: "s-myatoy"          // with mint
}
```

**Backend API call:**
```
GET /api/recipes?strength_category=krepkaya-krepost&flavor_category=deserty&mint_category=s-myatoy
```
