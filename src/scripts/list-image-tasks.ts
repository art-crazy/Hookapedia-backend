import * as fs from 'fs';
import * as path from 'path';

interface Ingredient {
    name: string;
}

interface Recipe {
    id: number;
    name: string;
    title: string;
    ingredients: Ingredient[];
    imageMain: string;
}

interface RecipeFile {
    recipes: Recipe[];
}

const RECIPES_DIR = path.join(__dirname, '../data/recipes/by-strength');
const STYLE_PROMPT_TEMPLATE = "Professional macro photography of a glass bowl filled with [INGREDIENTS_LIST], ice cubes, and fresh mint leaves. Swirling colorful smoke surrounding the bowl. Dark textured slate background, dramatic cinematic lighting, vibrant colors, hyper-realistic, raw photo, sharp focus, highly detailed texture, 8k resolution.";

function getIngredientsList(ingredients: Ingredient[]): string {
    return ingredients.map(i => i.name).join(', ');
}

function generatePrompt(recipe: Recipe): string {
    const ingredientsList = getIngredientsList(recipe.ingredients);
    return STYLE_PROMPT_TEMPLATE.replace('[INGREDIENTS_LIST]', ingredientsList);
}

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith('.json')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

function scanRecipes() {
    const files = getAllFiles(RECIPES_DIR);
    const tasks: any[] = [];

    for (const file of files) {
        const content = fs.readFileSync(file, 'utf-8');
        const data: RecipeFile = JSON.parse(content);

        for (const recipe of data.recipes) {
            if (!recipe.imageMain || recipe.imageMain.includes('mock') || recipe.imageMain.startsWith('/images/')) {
                if (recipe.imageMain === '/vanilla_caramel_mint.png') continue;

                tasks.push({
                    id: recipe.id,
                    name: recipe.name,
                    filePath: file,
                    prompt: generatePrompt(recipe),
                    targetImageName: recipe.name.replace(/-/g, '_')
                });
            }
        }
    }

    fs.writeFileSync('tasks.json', JSON.stringify(tasks.slice(0, 5), null, 2));
}

scanRecipes();
