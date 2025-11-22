// Типы для категорий мяты
import {BaseCategory} from "./type";

type MintCategories = {
    's-myatoy': BaseCategory;
    'bez-myaty': BaseCategory;
};

// Наличие мяты
export const mintCategories: MintCategories = {
    's-myatoy': {
        id: 's-myatoy',
        title: 'С мятой'
    },
    'bez-myaty': {
        id: 'bez-myaty',
        title: 'Без мяты'
    }
};
