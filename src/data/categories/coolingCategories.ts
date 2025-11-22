// Типы для категорий холодка
import {BaseCategory} from "./type";

type CoolingCategories = {
    'bez-kholoda': BaseCategory;
    'legkiy-kholod': BaseCategory;
    'silnyy-kholod': BaseCategory;
};

// Наличие холодка
export const coolingCategories: CoolingCategories = {
    'bez-kholoda': {
        id: 'bez-kholoda',
        title: 'Без холодка'
    },
    'legkiy-kholod': {
        id: 'legkiy-kholod',
        title: 'Лёгкий холодок'
    },
    'silnyy-kholod': {
        id: 'silnyy-kholod',
        title: 'Сильный холодок'
    }
};
