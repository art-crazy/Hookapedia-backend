// Типы для категорий вкуса
import {BaseCategory} from "./type";

type FlavorCategoryCategories = {
    'frukty': BaseCategory;
    'yagody': BaseCategory;
    'tsitrusovye': BaseCategory;
    'deserty': BaseCategory;
    'pryanosti-travy': BaseCategory;
    'ekzotika': BaseCategory;
};

// Категории вкуса
export const flavorCategoryCategories: FlavorCategoryCategories = {
    'frukty': {
        id: 'frukty',
        title: 'Фруктовый вкус'
    },
    'yagody': {
        id: 'yagody',
        title: 'Ягодный вкус'
    },
    'tsitrusovye': {
        id: 'tsitrusovye',
        title: 'Цитрусовый вкус'
    },
    'deserty': {
        id: 'deserty',
        title: 'Десертный вкус'
    },
    'pryanosti-travy': {
        id: 'pryanosti-travy',
        title: 'Пряности и травы'
    },
    'ekzotika': {
        id: 'ekzotika',
        title: 'Экзотический вкус'
    }
};
