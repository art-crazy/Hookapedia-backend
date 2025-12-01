import * as fs from 'fs';
import * as path from 'path';

const baseDir = path.join(__dirname, '../data/recipes/by-strength/krepkaya-krepost');
const files = ['deserty.json', 'ekzotika.json'];

const updates: Record<number, string> = {
    755: '/recipe-images/ekzotika_mango_bez_myaty_bez_kholoda_krepkaya_krepost.png',
    756: '/recipe-images/ekzotika_lichi_bez_myaty_legkiy_kholod_krepkaya_krepost.png'
};

for (const file of files) {
    const filePath = path.join(baseDir, file);
    if (!fs.existsSync(filePath)) continue;

    const content = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(content);
    let modified = false;

    for (const recipe of data.recipes) {
        if (updates[recipe.id]) {
            recipe.imageMain = updates[recipe.id];
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log(`Updated ${file}`);
    }
}
