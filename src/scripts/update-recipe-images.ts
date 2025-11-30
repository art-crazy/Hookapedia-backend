import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, '../data/recipes/by-strength/krepkaya-krepost/deserty.json');
const content = fs.readFileSync(filePath, 'utf-8');
const data = JSON.parse(content);

const updates = {
    740: '/recipe-images/vanilla_caramel_mint.png',
    741: '/recipe-images/deserty_shokolad_s_myatoy_legkiy_kholod_krepkaya_krepost.png',
    742: '/recipe-images/deserty_pechenie_s_myatoy_silnyy_kholod_krepkaya_krepost.png',
    743: '/recipe-images/deserty_vanil_bez_myaty_bez_kholoda_krepkaya_krepost.png'
};

for (const recipe of data.recipes) {
    if (updates[recipe.id]) {
        recipe.imageMain = updates[recipe.id];
    }
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('Updated deserty.json');
