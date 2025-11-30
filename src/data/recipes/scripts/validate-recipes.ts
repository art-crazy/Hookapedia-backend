import * as fs from 'fs';
import * as path from 'path';
import Ajv from 'ajv';

const ajv = new Ajv({ allErrors: true });
const schemaPath = path.join(__dirname, '../schema.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));
const validate = ajv.compile(schema);

function validateRecipes() {
    const baseDir = path.join(__dirname, '../by-strength');
    const strengthCategories = ['legkaya-krepost', 'srednyaya-krepost', 'krepkaya-krepost'];
    let hasErrors = false;

    strengthCategories.forEach(category => {
        const categoryPath = path.join(baseDir, category);
        if (!fs.existsSync(categoryPath)) return;

        const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.json'));

        files.forEach(file => {
            const filePath = path.join(categoryPath, file);
            console.log(`Validating ${category}/${file}...`);

            try {
                const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
                const valid = validate(content);

                if (!valid) {
                    console.error(`  ❌ Invalid: ${filePath}`);
                    validate.errors?.forEach(err => {
                        console.error(`    - ${err.instancePath} ${err.message}`);
                    });
                    hasErrors = true;
                } else {
                    console.log(`  ✓ Valid`);
                }
            } catch (err) {
                console.error(`  ❌ Error parsing JSON: ${filePath}`, err);
                hasErrors = true;
            }
        });
    });

    if (hasErrors) {
        console.error('\n❌ Validation failed with errors.');
        process.exit(1);
    } else {
        console.log('\n✓ All recipe files are valid!');
    }
}

validateRecipes();
