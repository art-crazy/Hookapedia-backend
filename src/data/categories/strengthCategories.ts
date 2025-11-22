// Типы для категорий крепости
import {BaseCategory} from "./type";

type StrengthCategories = {
    'legkaya-krepost': BaseCategory;
    'srednyaya-krepost': BaseCategory;
    'krepkaya-krepost': BaseCategory;
};

// Крепость
export const strengthCategories: StrengthCategories = {
    'legkaya-krepost': {
        id: 'legkaya-krepost',
        title: 'Лёгкая крепость'
    },
    'srednyaya-krepost': {
        id: 'srednyaya-krepost',
        title: 'Средняя крепость'
    },
    'krepkaya-krepost': {
        id: 'krepkaya-krepost',
        title: 'Крепкая крепость'
    }
};
