#!/bin/bash

echo "========================================="
echo "Recipe Structure Verification Script"
echo "========================================="
echo ""

echo "1. Checking directory structure..."
if [ -d "src/data/recipes/by-strength" ]; then
    echo "   ✅ Recipe directory exists"
else
    echo "   ❌ Recipe directory missing"
    exit 1
fi

echo ""
echo "2. Counting recipe files..."
STRENGTH_DIRS=$(find src/data/recipes/by-strength -type d -mindepth 1 -maxdepth 1 | wc -l)
RECIPE_FILES=$(find src/data/recipes/by-strength -name "*.ts" -type f | wc -l)
echo "   ✅ $STRENGTH_DIRS strength categories found"
echo "   ✅ $RECIPE_FILES recipe files found"

echo ""
echo "3. Testing TypeScript compilation..."
if npm run build > /dev/null 2>&1; then
    echo "   ✅ Build successful"
else
    echo "   ❌ Build failed - check TypeScript errors"
    exit 1
fi

echo ""
echo "4. Analyzing recipe coverage..."
npx ts-node -r tsconfig-paths/register src/data/recipes/analyze-coverage.ts | grep -A 3 "Summary"

echo ""
echo "5. File structure overview:"
tree -L 3 src/data/recipes/ 2>/dev/null || find src/data/recipes/ -type f -name "*.ts" | head -20

echo ""
echo "========================================="
echo "Verification Complete!"
echo "========================================="
echo ""
echo "Next steps:"
echo "  - Run 'npm run seed' to populate database"
echo "  - Check MIGRATION_GUIDE.md for details"
echo "  - Review src/data/recipes/README.md"
echo ""
