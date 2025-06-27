import {Recipe, Unit} from '@/types/recipe';

export const recipes: Record<number, Recipe> = {
    300: {
        id: 300,
        name: 'kuritsa-po-italyanski-s-tomatami',
        title: 'Курица по-итальянски с томатами',
        description: 'Сочная курица, тушенная в ароматном томатном соусе с итальянскими травами и чесноком.',
        cookTime: '50 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 365, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 21, unit: Unit.g },
            carbs: { value: 15, unit: Unit.g }
        },
        cuisine: 'Итальянская',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра', amount: 800, unit: Unit.g },
            { name: 'Помидоры в собственном соку', amount: 400, unit: Unit.g },
            { name: 'Помидоры черри', amount: 200, unit: Unit.g },
            { name: 'Чеснок', amount: 5, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 4, unit: Unit.tbsp },
            { name: 'Базилик свежий', amount: 1, unit: Unit.bunch },
            { name: 'Орегано сушеный', amount: 1, unit: Unit.tsp },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Вино белое сухое', amount: 100, unit: Unit.ml },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Натрите куриные бедра солью и перцем.'
            },
            {
                title: 'Шаг 2: Обжарка курицы',
                text: 'Обжарьте курицу на оливковом масле до золотистой корочки.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук, измельчите чеснок.'
            },
            {
                title: 'Шаг 4: Обжарка овощей',
                text: 'Обжарьте лук и чеснок до мягкости.'
            },
            {
                title: 'Шаг 5: Добавление вина',
                text: 'Влейте вино, дайте алкоголю выпариться.'
            },
            {
                title: 'Шаг 6: Добавление томатов',
                text: 'Добавьте помидоры в собственном соку и черри.'
            },
            {
                title: 'Шаг 7: Специи',
                text: 'Добавьте орегано, тимьян и половину базилика.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Тушите на медленном огне 30 минут.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Убедитесь, что курица полностью готова.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Украсьте свежим базиликом перед подачей.'
            }
        ],
        categories: ['курица', 'итальянская кухня', 'тушеные блюда'],
        rating: 4.8,
        reviews: 167,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            italian: {
                id: 'italian',
                title: 'Итальянская кухня'
            },
            stewed: {
                id: 'stewed',
                title: 'Тушеные блюда'
            }
        },
        cuisineCategoriesList: {
            italian: {
                id: 'italian',
                title: 'Итальянская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    299: {
        id: 299,
        name: 'kuritsa-po-derevenski-s-chesnokom',
        title: 'Курица по-деревенски с чесноком',
        description: 'Сочная курица, запеченная с чесноком, картофелем и ароматными травами в деревенском стиле.',
        cookTime: '65 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 405, unit: Unit.g },
            protein: { value: 32, unit: Unit.g },
            fat: { value: 25, unit: Unit.g },
            carbs: { value: 22, unit: Unit.g }
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            { name: 'Курица', amount: 1500, unit: Unit.g },
            { name: 'Картофель', amount: 800, unit: Unit.g },
            { name: 'Чеснок', amount: 8, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Масло растительное', amount: 4, unit: Unit.tbsp },
            { name: 'Сметана', amount: 200, unit: Unit.g },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Розмарин свежий', amount: 1, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Паприка', amount: 1, unit: Unit.tbsp },
            { name: 'Укроп свежий', amount: 1, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Разрежьте курицу на порционные куски.'
            },
            {
                title: 'Шаг 2: Маринад',
                text: 'Смешайте сметану, измельченный чеснок, паприку и специи.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Замаринуйте курицу в смеси на 30 минут.'
            },
            {
                title: 'Шаг 4: Подготовка картофеля',
                text: 'Нарежьте картофель крупными дольками.'
            },
            {
                title: 'Шаг 5: Подготовка лука',
                text: 'Нарежьте лук крупными кольцами.'
            },
            {
                title: 'Шаг 6: Сборка блюда',
                text: 'Выложите в форму картофель, лук и маринованную курицу.'
            },
            {
                title: 'Шаг 7: Добавление трав',
                text: 'Добавьте свежие травы и оставшийся чеснок.'
            },
            {
                title: 'Шаг 8: Запекание',
                text: 'Запекайте при 180°C около 45 минут.'
            },
            {
                title: 'Шаг 9: Финальный этап',
                text: 'Увеличьте температуру до 200°C на 10 минут для румяной корочки.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленым укропом перед подачей.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'русская кухня'],
        rating: 4.9,
        reviews: 198,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            },
            'comfort-food': {
                id: 'comfort-food',
                title: 'Домашняя кухня'
            }
        },
        cuisineCategoriesList: {
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    298: {
        id: 298,
        name: 'kuritsa-v-folge-s-rozmarinom',
        title: 'Курица в фольге с розмарином',
        description: 'Нежная курица, запеченная в фольге с розмарином, чесноком и лимоном.',
        cookTime: '55 минут',
        difficulty: '1/5',
        nutrition: {
            calories: { value: 320, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 19, unit: Unit.g },
            carbs: { value: 8, unit: Unit.g }
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            { name: 'Курица целая', amount: 1500, unit: Unit.g },
            { name: 'Розмарин свежий', amount: 3, unit: Unit.bunch },
            { name: 'Чеснок', amount: 6, unit: Unit.pcs },
            { name: 'Лимон', amount: 2, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 4, unit: Unit.tbsp },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Вино белое сухое', amount: 100, unit: Unit.ml },
            { name: 'Масло сливочное', amount: 50, unit: Unit.g },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Морковь', amount: 2, unit: Unit.pcs }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Промойте и обсушите курицу, натрите солью и перцем.'
            },
            {
                title: 'Шаг 2: Приготовление маринада',
                text: 'Смешайте оливковое масло с измельченным чесноком и травами.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Натрите курицу маринадом снаружи и внутри.'
            },
            {
                title: 'Шаг 4: Подготовка овощей',
                text: 'Нарежьте лук и морковь крупными кусками.'
            },
            {
                title: 'Шаг 5: Начинка',
                text: 'Положите внутрь курицы лимон, чеснок и травы.'
            },
            {
                title: 'Шаг 6: Подготовка фольги',
                text: 'Выложите овощи на фольгу, сверху положите курицу.'
            },
            {
                title: 'Шаг 7: Добавление вина',
                text: 'Полейте курицу вином и растопленным сливочным маслом.'
            },
            {
                title: 'Шаг 8: Запечатывание',
                text: 'Плотно заверните курицу в фольгу.'
            },
            {
                title: 'Шаг 9: Запекание',
                text: 'Запекайте при 180°C около 1 часа.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте с овощами и соком, образовавшимся при запекании.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'средиземноморская кухня'],
        rating: 4.8,
        reviews: 156,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            },
            mediterranean: {
                id: 'mediterranean',
                title: 'Средиземноморская кухня'
            }
        },
        cuisineCategoriesList: {
            mediterranean: {
                id: 'mediterranean',
                title: 'Средиземноморская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    297: {
        id: 297,
        name: 'kuritsa-v-souse-barbekyu-s-pertsem',
        title: 'Курица в соусе барбекю с перцем',
        description: 'Пикантная курица в остром соусе барбекю с болгарским перцем и специями.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 395, unit: Unit.g },
            protein: { value: 31, unit: Unit.g },
            fat: { value: 23, unit: Unit.g },
            carbs: { value: 16, unit: Unit.g }
        },
        cuisine: 'Американская',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра без кости', amount: 800, unit: Unit.g },
            { name: 'Соус BBQ острый', amount: 200, unit: Unit.ml },
            { name: 'Перец болгарский', amount: 3, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Перец чили', amount: 1, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Паприка копченая', amount: 1, unit: Unit.tsp },
            { name: 'Кумин молотый', amount: 1, unit: Unit.tsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Кинза свежая', amount: 1, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриные бедра крупными кусками.'
            },
            {
                title: 'Шаг 2: Маринование',
                text: 'Смешайте половину соуса BBQ со специями, замаринуйте курицу.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте перцы и лук крупными кусками.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу на сильном огне до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Добавление овощей',
                text: 'Добавьте перцы и лук, обжаривайте 5 минут.'
            },
            {
                title: 'Шаг 6: Добавление соуса',
                text: 'Влейте оставшийся соус BBQ, добавьте измельченный чили.'
            },
            {
                title: 'Шаг 7: Тушение',
                text: 'Тушите на среднем огне 15-20 минут.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Убедитесь, что курица полностью готова.'
            },
            {
                title: 'Шаг 9: Доведение соуса',
                text: 'При необходимости уварите соус до нужной консистенции.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте рубленой кинзой перед подачей.'
            }
        ],
        categories: ['курица', 'барбекю', 'острые блюда'],
        rating: 4.7,
        reviews: 143,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            bbq: {
                id: 'bbq',
                title: 'Барбекю'
            },
            spicy: {
                id: 'spicy',
                title: 'Острые блюда'
            }
        },
        cuisineCategoriesList: {
            american: {
                id: 'american',
                title: 'Американская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    296: {
        id: 296,
        name: 'kuritsa-bbq-s-medom',
        title: 'Курица BBQ с медом',
        description: 'Сочная курица, запеченная с медово-барбекю соусом, с карамелизированной корочкой.',
        cookTime: '50 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 410, unit: Unit.g },
            protein: { value: 32, unit: Unit.g },
            fat: { value: 24, unit: Unit.g },
            carbs: { value: 18, unit: Unit.g }
        },
        cuisine: 'Американская',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра', amount: 800, unit: Unit.g },
            { name: 'Соус BBQ', amount: 200, unit: Unit.ml },
            { name: 'Мед', amount: 3, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Паприка копченая', amount: 1, unit: Unit.tbsp },
            { name: 'Соевый соус', amount: 2, unit: Unit.tbsp },
            { name: 'Масло оливковое', amount: 2, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Тимьян свежий', amount: 1, unit: Unit.bunch },
            { name: 'Розмарин свежий', amount: 1, unit: Unit.bunch },
            { name: 'Лук зеленый', amount: 1, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте соус BBQ, мед, измельченный чеснок и специи.'
            },
            {
                title: 'Шаг 2: Маринование курицы',
                text: 'Замаринуйте курицу в соусе на 2-4 часа.'
            },
            {
                title: 'Шаг 3: Разогрев духовки',
                text: 'Разогрейте духовку до 180°C.'
            },
            {
                title: 'Шаг 4: Подготовка противня',
                text: 'Выложите курицу на противень с пергаментом.'
            },
            {
                title: 'Шаг 5: Первый этап запекания',
                text: 'Запекайте 20 минут под фольгой.'
            },
            {
                title: 'Шаг 6: Смазывание соусом',
                text: 'Снимите фольгу, смажьте оставшимся соусом.'
            },
            {
                title: 'Шаг 7: Второй этап запекания',
                text: 'Запекайте еще 20-25 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Проверьте готовность, проколов мясо.'
            },
            {
                title: 'Шаг 9: Отдых',
                text: 'Дайте постоять 10 минут перед подачей.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Украсьте зеленым луком и свежими травами.'
            }
        ],
        categories: ['курица', 'барбекю', 'запеченные блюда'],
        rating: 4.8,
        reviews: 167,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            bbq: {
                id: 'bbq',
                title: 'Барбекю'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            }
        },
        cuisineCategoriesList: {
            american: {
                id: 'american',
                title: 'Американская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    295: {
        id: 295,
        name: 'kurinyy-shnitsel-v-panirovke',
        title: 'Куриный шницель в панировке',
        description: 'Классический куриный шницель в хрустящей панировке с золотистой корочкой.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 385, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 22, unit: Unit.g },
            carbs: { value: 20, unit: Unit.g }
        },
        cuisine: 'Австрийская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Яйца', amount: 2, unit: Unit.pcs },
            { name: 'Мука пшеничная', amount: 100, unit: Unit.g },
            { name: 'Сухари панировочные', amount: 150, unit: Unit.g },
            { name: 'Масло растительное', amount: 100, unit: Unit.ml },
            { name: 'Горчица дижонская', amount: 1, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 2, unit: Unit.pcs },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Лимон', amount: 1, unit: Unit.pcs },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch },
            { name: 'Масло сливочное', amount: 30, unit: Unit.g }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка филе',
                text: 'Разрежьте филе вдоль, отбейте до толщины 0.5 см.'
            },
            {
                title: 'Шаг 2: Маринование',
                text: 'Натрите филе солью, перцем и измельченным чесноком.'
            },
            {
                title: 'Шаг 3: Подготовка панировки',
                text: 'Подготовьте три тарелки: с мукой, взбитыми яйцами и сухарями.'
            },
            {
                title: 'Шаг 4: Панировка',
                text: 'Обваляйте филе в муке, окуните в яйцо, затем в сухари.'
            },
            {
                title: 'Шаг 5: Разогрев масла',
                text: 'Разогрейте смесь растительного и сливочного масла.'
            },
            {
                title: 'Шаг 6: Жарка',
                text: 'Обжаривайте шницели по 4-5 минут с каждой стороны.'
            },
            {
                title: 'Шаг 7: Контроль температуры',
                text: 'Поддерживайте среднюю температуру для равномерного обжаривания.'
            },
            {
                title: 'Шаг 8: Удаление масла',
                text: 'Выложите на бумажные полотенца для удаления лишнего масла.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Убедитесь, что мясо полностью прожарилось.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте с дольками лимона и свежей петрушкой.'
            }
        ],
        categories: ['курица', 'жареные блюда', 'австрийская кухня'],
        rating: 4.7,
        reviews: 189,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            fried: {
                id: 'fried',
                title: 'Жареные блюда'
            },
            austrian: {
                id: 'austrian',
                title: 'Австрийская кухня'
            }
        },
        cuisineCategoriesList: {
            austrian: {
                id: 'austrian',
                title: 'Австрийская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    294: {
        id: 294,
        name: 'kurinyy-sup-s-lapshoy',
        title: 'Куриный суп с лапшой',
        description: 'Классический наваристый куриный суп с домашней лапшой и овощами.',
        cookTime: '60 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 245, unit: Unit.g },
            protein: { value: 18, unit: Unit.g },
            fat: { value: 8, unit: Unit.g },
            carbs: { value: 30, unit: Unit.g }
        },
        cuisine: 'Русская',
        servings: 6,
        ingredients: [
            { name: 'Курица', amount: 800, unit: Unit.g },
            { name: 'Лапша', amount: 200, unit: Unit.g },
            { name: 'Морковь', amount: 2, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Картофель', amount: 3, unit: Unit.pcs },
            { name: 'Чеснок', amount: 2, unit: Unit.pcs },
            { name: 'Лавровый лист', amount: 2, unit: Unit.pcs },
            { name: 'Перец черный горошком', amount: 5, unit: Unit.pcs },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Зелень (укроп, петрушка)', amount: 1, unit: Unit.bunch },
            { name: 'Вода', amount: 2500, unit: Unit.ml }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка бульона',
                text: 'Залейте курицу холодной водой, доведите до кипения.'
            },
            {
                title: 'Шаг 2: Варка курицы',
                text: 'Варите на медленном огне, снимая пену, 30-40 минут.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте морковь и лук, картофель кубиками.'
            },
            {
                title: 'Шаг 4: Добавление овощей',
                text: 'Добавьте в бульон морковь и лук.'
            },
            {
                title: 'Шаг 5: Варка картофеля',
                text: 'Добавьте картофель, варите 15 минут.'
            },
            {
                title: 'Шаг 6: Добавление специй',
                text: 'Добавьте лавровый лист, чеснок и перец горошком.'
            },
            {
                title: 'Шаг 7: Варка лапши',
                text: 'Добавьте лапшу, варите до готовности.'
            },
            {
                title: 'Шаг 8: Разделка курицы',
                text: 'Достаньте курицу, отделите мясо от костей.'
            },
            {
                title: 'Шаг 9: Завершение',
                text: 'Верните мясо в суп, добавьте соль и перец.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, посыпав рубленой зеленью.'
            }
        ],
        categories: ['курица', 'супы', 'первые блюда'],
        rating: 4.9,
        reviews: 234,
        dishCategoriesList: {
            soups: {
                id: 'soups',
                title: 'Супы'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            'first-courses': {
                id: 'first-courses',
                title: 'Первые блюда'
            },
            'comfort-food': {
                id: 'comfort-food',
                title: 'Домашняя кухня'
            }
        },
        cuisineCategoriesList: {
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'low-fat': {
                id: 'low-fat',
                title: 'Низкокалорийная диета'
            }
        }
    },
    293: {
        id: 293,
        name: 'kurinyy-steyk-s-kartofelem',
        title: 'Куриный стейк с картофелем',
        description: 'Сочный куриный стейк на гриле с хрустящим запеченным картофелем и ароматными травами.',
        cookTime: '45 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 420, unit: Unit.g },
            protein: { value: 35, unit: Unit.g },
            fat: { value: 22, unit: Unit.g },
            carbs: { value: 28, unit: Unit.g }
        },
        cuisine: 'Американская',
        servings: 2,
        ingredients: [
            { name: 'Куриная грудка', amount: 400, unit: Unit.g },
            { name: 'Картофель молодой', amount: 500, unit: Unit.g },
            { name: 'Масло оливковое', amount: 4, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Розмарин свежий', amount: 2, unit: Unit.bunch },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Паприка копченая', amount: 1, unit: Unit.tsp },
            { name: 'Горчица дижонская', amount: 1, unit: Unit.tbsp },
            { name: 'Масло сливочное', amount: 50, unit: Unit.g },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Лимон', amount: 1, unit: Unit.pcs }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Разрежьте грудку вдоль на два стейка, отбейте.'
            },
            {
                title: 'Шаг 2: Маринад',
                text: 'Смешайте оливковое масло, горчицу, паприку и измельченный чеснок.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Замаринуйте стейки в смеси на 30 минут.'
            },
            {
                title: 'Шаг 4: Подготовка картофеля',
                text: 'Нарежьте картофель дольками, смешайте с маслом и травами.'
            },
            {
                title: 'Шаг 5: Запекание картофеля',
                text: 'Выложите картофель на противень, запекайте при 200°C.'
            },
            {
                title: 'Шаг 6: Разогрев гриля',
                text: 'Разогрейте сковороду-гриль до высокой температуры.'
            },
            {
                title: 'Шаг 7: Жарка стейков',
                text: 'Обжарьте стейки по 5-7 минут с каждой стороны.'
            },
            {
                title: 'Шаг 8: Добавление масла',
                text: 'Добавьте сливочное масло и свежие травы.'
            },
            {
                title: 'Шаг 9: Отдых мяса',
                text: 'Дайте стейкам отдохнуть 5 минут под фольгой.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте с картофелем и дольками лимона.'
            }
        ],
        categories: ['курица', 'стейки', 'гриль'],
        rating: 4.8,
        reviews: 178,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            grill: {
                id: 'grill',
                title: 'Блюда на гриле'
            },
            steaks: {
                id: 'steaks',
                title: 'Стейки'
            }
        },
        cuisineCategoriesList: {
            american: {
                id: 'american',
                title: 'Американская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    292: {
        id: 292,
        name: 'kurinyy-sendvich-s-ovoschami',
        title: 'Куриный сэндвич с овощами',
        description: 'Аппетитный сэндвич с сочной куриной грудкой, свежими овощами и специальным соусом.',
        cookTime: '25 минут',
        difficulty: '1/5',
        nutrition: {
            calories: { value: 380, unit: Unit.g },
            protein: { value: 26, unit: Unit.g },
            fat: { value: 18, unit: Unit.g },
            carbs: { value: 35, unit: Unit.g }
        },
        cuisine: 'Американская',
        servings: 2,
        ingredients: [
            { name: 'Куриное филе', amount: 300, unit: Unit.g },
            { name: 'Хлеб тостовый', amount: 4, unit: Unit.pcs },
            { name: 'Помидоры', amount: 1, unit: Unit.pcs },
            { name: 'Огурцы свежие', amount: 1, unit: Unit.pcs },
            { name: 'Салат листовой', amount: 1, unit: Unit.bunch },
            { name: 'Майонез', amount: 2, unit: Unit.tbsp },
            { name: 'Горчица дижонская', amount: 1, unit: Unit.tsp },
            { name: 'Чеснок', amount: 1, unit: Unit.pcs },
            { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Сыр твердый', amount: 100, unit: Unit.g }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Отбейте куриное филе, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Жарка курицы',
                text: 'Обжарьте филе на растительном масле до готовности.'
            },
            {
                title: 'Шаг 3: Приготовление соуса',
                text: 'Смешайте майонез с горчицей и измельченным чесноком.'
            },
            {
                title: 'Шаг 4: Подготовка овощей',
                text: 'Нарежьте помидоры и огурцы тонкими кольцами.'
            },
            {
                title: 'Шаг 5: Подготовка хлеба',
                text: 'Подсушите тостовый хлеб в тостере.'
            },
            {
                title: 'Шаг 6: Сборка низа',
                text: 'Смажьте хлеб соусом, положите листья салата.'
            },
            {
                title: 'Шаг 7: Добавление курицы',
                text: 'Выложите куриное филе, посыпьте тертым сыром.'
            },
            {
                title: 'Шаг 8: Добавление овощей',
                text: 'Выложите помидоры и огурцы.'
            },
            {
                title: 'Шаг 9: Завершение',
                text: 'Смажьте второй кусок хлеба соусом, накройте сэндвич.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Разрежьте по диагонали и подавайте.'
            }
        ],
        categories: ['курица', 'сэндвичи', 'быстрые рецепты'],
        rating: 4.7,
        reviews: 156,
        dishCategoriesList: {
            sandwiches: {
                id: 'sandwiches',
                title: 'Сэндвичи'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            'fast-food': {
                id: 'fast-food',
                title: 'Фастфуд'
            },
            'quick-and-easy': {
                id: 'quick-and-easy',
                title: 'Быстрые рецепты'
            }
        },
        cuisineCategoriesList: {
            american: {
                id: 'american',
                title: 'Американская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    291: {
        id: 291,
        name: 'kurinyy-salat-s-risom',
        title: 'Куриный салат с рисом',
        description: 'Легкий и сытный салат с отварной курицей, рисом и свежими овощами под сливочной заправкой.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 285, unit: Unit.g },
            protein: { value: 22, unit: Unit.g },
            fat: { value: 14, unit: Unit.g },
            carbs: { value: 25, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 400, unit: Unit.g },
            { name: 'Рис', amount: 200, unit: Unit.g },
            { name: 'Огурцы свежие', amount: 2, unit: Unit.pcs },
            { name: 'Помидоры', amount: 2, unit: Unit.pcs },
            { name: 'Кукуруза консервированная', amount: 200, unit: Unit.g },
            { name: 'Лук зеленый', amount: 1, unit: Unit.bunch },
            { name: 'Майонез', amount: 100, unit: Unit.g },
            { name: 'Сметана', amount: 100, unit: Unit.g },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch },
            { name: 'Лимонный сок', amount: 1, unit: Unit.tbsp }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Отварите куриное филе до готовности в подсоленной воде.'
            },
            {
                title: 'Шаг 2: Приготовление риса',
                text: 'Отварите рис до готовности, остудите.'
            },
            {
                title: 'Шаг 3: Нарезка курицы',
                text: 'Нарежьте остывшее куриное филе кубиками.'
            },
            {
                title: 'Шаг 4: Подготовка овощей',
                text: 'Нарежьте огурцы и помидоры кубиками.'
            },
            {
                title: 'Шаг 5: Подготовка зелени',
                text: 'Мелко нарежьте зеленый лук и петрушку.'
            },
            {
                title: 'Шаг 6: Приготовление заправки',
                text: 'Смешайте майонез со сметаной и лимонным соком.'
            },
            {
                title: 'Шаг 7: Соединение ингредиентов',
                text: 'Соедините курицу, рис, овощи и кукурузу.'
            },
            {
                title: 'Шаг 8: Заправка',
                text: 'Добавьте заправку, перемешайте.'
            },
            {
                title: 'Шаг 9: Специи',
                text: 'Добавьте соль и перец по вкусу.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Украсьте зеленью и подавайте охлажденным.'
            }
        ],
        categories: ['курица', 'салаты', 'рис'],
        rating: 4.6,
        reviews: 145,
        dishCategoriesList: {
            salads: {
                id: 'salads',
                title: 'Салаты'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            'cold-appetizers': {
                id: 'cold-appetizers',
                title: 'Холодные закуски'
            },
            rice: {
                id: 'rice',
                title: 'Блюда из риса'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    290: {
        id: 290,
        name: 'kurinyy-rulet-s-syrom',
        title: 'Куриный рулет с сыром',
        description: 'Нежный куриный рулет с сырной начинкой, запеченный в духовке до золотистой корочки.',
        cookTime: '50 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 355, unit: Unit.g },
            protein: { value: 31, unit: Unit.g },
            fat: { value: 24, unit: Unit.g },
            carbs: { value: 4, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 6,
        ingredients: [
            { name: 'Куриное филе', amount: 800, unit: Unit.g },
            { name: 'Сыр твердый', amount: 200, unit: Unit.g },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Масло сливочное', amount: 50, unit: Unit.g },
            { name: 'Зелень (петрушка, укроп)', amount: 1, unit: Unit.bunch },
            { name: 'Паприка молотая', amount: 1, unit: Unit.tsp },
            { name: 'Горчица дижонская', amount: 1, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
            { name: 'Яйцо куриное', amount: 1, unit: Unit.pcs },
            { name: 'Сухари панировочные', amount: 100, unit: Unit.g }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка филе',
                text: 'Отбейте куриное филе между двумя слоями пленки.'
            },
            {
                title: 'Шаг 2: Приготовление начинки',
                text: 'Натрите сыр, смешайте с измельченным чесноком и зеленью.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Натрите филе солью, перцем и паприкой.'
            },
            {
                title: 'Шаг 4: Сборка рулета',
                text: 'Смажьте филе горчицей, выложите начинку.'
            },
            {
                title: 'Шаг 5: Формирование',
                text: 'Сверните филе в рулет, закрепите зубочистками.'
            },
            {
                title: 'Шаг 6: Панировка',
                text: 'Обмакните рулет в яйцо, обваляйте в сухарях.'
            },
            {
                title: 'Шаг 7: Подготовка к запеканию',
                text: 'Разогрейте духовку до 180°C.'
            },
            {
                title: 'Шаг 8: Запекание',
                text: 'Запекайте 35-40 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Убедитесь, что мясо полностью готово.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Дайте остыть 10 минут, нарежьте порционно.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'праздничные блюда'],
        rating: 4.9,
        reviews: 223,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            },
            holiday: {
                id: 'holiday',
                title: 'Праздничные блюда'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    289: {
        id: 289,
        name: 'kurinyy-ragu-s-kartofelem',
        title: 'Куриный рагу с картофелем',
        description: 'Сытное и ароматное рагу из курицы с картофелем и овощами в томатном соусе.',
        cookTime: '60 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 320, unit: Unit.g },
            protein: { value: 25, unit: Unit.g },
            fat: { value: 14, unit: Unit.g },
            carbs: { value: 30, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Картофель', amount: 600, unit: Unit.g },
            { name: 'Морковь', amount: 2, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Перец болгарский', amount: 2, unit: Unit.pcs },
            { name: 'Томатная паста', amount: 2, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Лавровый лист', amount: 2, unit: Unit.pcs },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка мяса',
                text: 'Нарежьте куриное филе крупными кусками.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте картофель кубиками, морковь и лук - соломкой.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление овощей',
                text: 'Обжарьте лук и морковь до мягкости.'
            },
            {
                title: 'Шаг 5: Добавление томатной пасты',
                text: 'Добавьте томатную пасту, обжарьте 2-3 минуты.'
            },
            {
                title: 'Шаг 6: Соединение',
                text: 'Добавьте картофель, перец и специи.'
            },
            {
                title: 'Шаг 7: Тушение',
                text: 'Залейте горячей водой, тушите до готовности картофеля.'
            },
            {
                title: 'Шаг 8: Специи',
                text: 'Добавьте измельченный чеснок, лавровый лист и тимьян.'
            },
            {
                title: 'Шаг 9: Финальное тушение',
                text: 'Тушите еще 5-7 минут для раскрытия ароматов.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, посыпав свежей зеленью.'
            }
        ],
        categories: ['курица', 'рагу', 'овощные блюда'],
        rating: 4.7,
        reviews: 189,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            stew: {
                id: 'stew',
                title: 'Тушеные блюда'
            },
            vegetables: {
                id: 'vegetables',
                title: 'Овощные блюда'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    288: {
        id: 288,
        name: 'kurinyy-plov-s-morkovyu',
        title: 'Куриный плов с морковью',
        description: 'Ароматный плов с нежным куриным мясом, морковью и специями, приготовленный по традиционному рецепту.',
        cookTime: '70 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 410, unit: Unit.g },
            protein: { value: 24, unit: Unit.g },
            fat: { value: 18, unit: Unit.g },
            carbs: { value: 45, unit: Unit.g }
        },
        cuisine: 'Узбекская',
        servings: 6,
        ingredients: [
            { name: 'Куриные бедра', amount: 800, unit: Unit.g },
            { name: 'Рис', amount: 500, unit: Unit.g },
            { name: 'Морковь', amount: 500, unit: Unit.g },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 1, unit: Unit.pcs },
            { name: 'Масло растительное', amount: 100, unit: Unit.ml },
            { name: 'Зира', amount: 2, unit: Unit.tsp },
            { name: 'Барбарис сушеный', amount: 1, unit: Unit.tbsp },
            { name: 'Куркума', amount: 1, unit: Unit.tsp },
            { name: 'Перец черный горошком', amount: 10, unit: Unit.pcs },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Вода', amount: 1000, unit: Unit.ml }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка риса',
                text: 'Замочите рис в холодной воде на 30 минут.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте морковь соломкой, лук полукольцами.'
            },
            {
                title: 'Шаг 3: Подготовка мяса',
                text: 'Нарежьте куриные бедра крупными кусками.'
            },
            {
                title: 'Шаг 4: Обжарка мяса',
                text: 'Обжарьте курицу в казане до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Приготовление зирвака',
                text: 'Добавьте лук и морковь, обжарьте до мягкости.'
            },
            {
                title: 'Шаг 6: Добавление специй',
                text: 'Добавьте зиру, барбарис, куркуму и перец.'
            },
            {
                title: 'Шаг 7: Закладка риса',
                text: 'Выложите промытый рис ровным слоем, добавьте соль.'
            },
            {
                title: 'Шаг 8: Варка',
                text: 'Залейте горячей водой, добавьте головку чеснока.'
            },
            {
                title: 'Шаг 9: Томление',
                text: 'Готовьте на медленном огне до готовности риса.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Дайте настояться 15 минут, перемешайте и подавайте.'
            }
        ],
        categories: ['курица', 'плов', 'узбекская кухня'],
        rating: 4.8,
        reviews: 212,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            rice: {
                id: 'rice',
                title: 'Блюда из риса'
            },
            uzbek: {
                id: 'uzbek',
                title: 'Узбекская кухня'
            }
        },
        cuisineCategoriesList: {
            uzbek: {
                id: 'uzbek',
                title: 'Узбекская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    287: {
        id: 287,
        name: 'kurinyy-kebab-na-shpazhkah',
        title: 'Куриный кебаб на шпажках',
        description: 'Сочный куриный кебаб с овощами, маринованный в ароматных специях и приготовленный на гриле.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 285, unit: Unit.g },
            protein: { value: 32, unit: Unit.g },
            fat: { value: 15, unit: Unit.g },
            carbs: { value: 9, unit: Unit.g }
        },
        cuisine: 'Ближневосточная',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Перец болгарский', amount: 3, unit: Unit.pcs },
            { name: 'Помидоры черри', amount: 200, unit: Unit.g },
            { name: 'Йогурт натуральный', amount: 200, unit: Unit.g },
            { name: 'Лимон', amount: 1, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 4, unit: Unit.tbsp },
            { name: 'Паприка молотая', amount: 1, unit: Unit.tbsp },
            { name: 'Зира молотая', amount: 1, unit: Unit.tsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте йогурт, лимонный сок, измельченный чеснок и специи.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте куриное филе крупными кубиками.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Замаринуйте курицу в йогуртовой смеси на 2-3 часа.'
            },
            {
                title: 'Шаг 4: Подготовка овощей',
                text: 'Нарежьте лук и перец крупными кусками.'
            },
            {
                title: 'Шаг 5: Сборка шпажек',
                text: 'Нанизывайте курицу и овощи на шпажки, чередуя их.'
            },
            {
                title: 'Шаг 6: Подготовка гриля',
                text: 'Разогрейте гриль или сковороду-гриль.'
            },
            {
                title: 'Шаг 7: Смазывание маслом',
                text: 'Смажьте шпажки оливковым маслом.'
            },
            {
                title: 'Шаг 8: Приготовление',
                text: 'Готовьте на гриле, периодически переворачивая, 15-20 минут.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Убедитесь, что курица полностью прожарилась.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим с лимоном и свежей зеленью.'
            }
        ],
        categories: ['курица', 'гриль', 'ближневосточная кухня'],
        rating: 4.8,
        reviews: 167,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            grill: {
                id: 'grill',
                title: 'Блюда на гриле'
            },
            'middle-eastern': {
                id: 'middle-eastern',
                title: 'Ближневосточная кухня'
            }
        },
        cuisineCategoriesList: {
            'middle-eastern': {
                id: 'middle-eastern',
                title: 'Ближневосточная кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    286: {
        id: 286,
        name: 'kurinyy-zhulyen-s-syrom',
        title: 'Куриный жюльен с сыром',
        description: 'Классическое французское блюдо из нежного куриного филе в сливочном соусе под сырной корочкой.',
        cookTime: '45 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 385, unit: Unit.g },
            protein: { value: 26, unit: Unit.g },
            fat: { value: 29, unit: Unit.g },
            carbs: { value: 8, unit: Unit.g }
        },
        cuisine: 'Французская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 400, unit: Unit.g },
            { name: 'Сыр твердый', amount: 200, unit: Unit.g },
            { name: 'Сливки 33%', amount: 300, unit: Unit.ml },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Масло сливочное', amount: 50, unit: Unit.g },
            { name: 'Мука пшеничная', amount: 2, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 2, unit: Unit.pcs },
            { name: 'Мускатный орех', amount: 0.25, unit: Unit.tsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch },
            { name: 'Масло растительное', amount: 2, unit: Unit.tbsp }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка ингредиентов',
                text: 'Нарежьте куриное филе мелкими кубиками.'
            },
            {
                title: 'Шаг 2: Обжарка курицы',
                text: 'Обжарьте курицу на сливочном масле до золотистого цвета.'
            },
            {
                title: 'Шаг 3: Приготовление лука',
                text: 'Обжарьте мелко нарезанный лук до прозрачности.'
            },
            {
                title: 'Шаг 4: Приготовление соуса',
                text: 'Добавьте муку, обжарьте, влейте сливки, помешивая.'
            },
            {
                title: 'Шаг 5: Специи',
                text: 'Добавьте измельченный чеснок, мускатный орех, соль и перец.'
            },
            {
                title: 'Шаг 6: Соединение',
                text: 'Соедините курицу с соусом, перемешайте.'
            },
            {
                title: 'Шаг 7: Раскладка',
                text: 'Разложите смесь по кокотницам.'
            },
            {
                title: 'Шаг 8: Посыпка сыром',
                text: 'Посыпьте тертым сыром.'
            },
            {
                title: 'Шаг 9: Запекание',
                text: 'Запекайте при 200°C до золотистой корочки 15-20 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив рубленой петрушкой.'
            }
        ],
        categories: ['курица', 'горячие закуски', 'французская кухня'],
        rating: 4.9,
        reviews: 245,
        dishCategoriesList: {
            appetizers: {
                id: 'appetizers',
                title: 'Закуски'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            'hot-appetizers': {
                id: 'hot-appetizers',
                title: 'Горячие закуски'
            },
            french: {
                id: 'french',
                title: 'Французская кухня'
            }
        },
        cuisineCategoriesList: {
            french: {
                id: 'french',
                title: 'Французская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    285: {
        id: 285,
        name: 'kurinyy-gulyash-s-podlivkoy',
        title: 'Куриный гуляш с подливкой',
        description: 'Нежный куриный гуляш в ароматной томатно-сметанной подливке с овощами.',
        cookTime: '60 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 295, unit: Unit.g },
            protein: { value: 26, unit: Unit.g },
            fat: { value: 18, unit: Unit.g },
            carbs: { value: 12, unit: Unit.g }
        },
        cuisine: 'Венгерская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Морковь', amount: 2, unit: Unit.pcs },
            { name: 'Перец болгарский', amount: 2, unit: Unit.pcs },
            { name: 'Томатная паста', amount: 2, unit: Unit.tbsp },
            { name: 'Сметана', amount: 200, unit: Unit.g },
            { name: 'Мука пшеничная', amount: 2, unit: Unit.tbsp },
            { name: 'Паприка молотая', amount: 2, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка мяса',
                text: 'Нарежьте куриное филе кубиками среднего размера.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте лук, морковь и перец соломкой.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте курицу на растительном масле до золотистого цвета.'
            },
            {
                title: 'Шаг 4: Приготовление овощей',
                text: 'Обжарьте лук, морковь и перец до мягкости.'
            },
            {
                title: 'Шаг 5: Добавление специй',
                text: 'Добавьте паприку, измельченный чеснок, соль и перец.'
            },
            {
                title: 'Шаг 6: Приготовление соуса',
                text: 'Добавьте муку, обжарьте, добавьте томатную пасту.'
            },
            {
                title: 'Шаг 7: Тушение',
                text: 'Влейте горячую воду, добавьте сметану, перемешайте.'
            },
            {
                title: 'Шаг 8: Соединение',
                text: 'Добавьте курицу, тушите на медленном огне 20-25 минут.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Убедитесь, что соус загустел, а мясо стало мягким.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим с любым гарниром.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'венгерская кухня'],
        rating: 4.8,
        reviews: 203,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            stew: {
                id: 'stew',
                title: 'Тушеные блюда'
            },
            hungarian: {
                id: 'hungarian',
                title: 'Венгерская кухня'
            }
        },
        cuisineCategoriesList: {
            hungarian: {
                id: 'hungarian',
                title: 'Венгерская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    284: {
        id: 284,
        name: 'kurinyy-burger-s-sousom',
        title: 'Куриный бургер с соусом',
        description: 'Сочный бургер с куриной котлетой, свежими овощами и специальным соусом.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 420, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 23, unit: Unit.g },
            carbs: { value: 32, unit: Unit.g }
        },
        cuisine: 'Американская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Булочки для бургеров', amount: 4, unit: Unit.pcs },
            { name: 'Помидоры', amount: 2, unit: Unit.pcs },
            { name: 'Салат листовой', amount: 1, unit: Unit.bunch },
            { name: 'Лук красный', amount: 1, unit: Unit.pcs },
            { name: 'Майонез', amount: 100, unit: Unit.g },
            { name: 'Горчица дижонская', amount: 2, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 2, unit: Unit.pcs },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Сыр чеддер', amount: 4, unit: Unit.pcs }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка филе',
                text: 'Отбейте куриное филе до толщины 1 см.'
            },
            {
                title: 'Шаг 2: Маринование',
                text: 'Натрите филе солью и перцем.'
            },
            {
                title: 'Шаг 3: Приготовление соуса',
                text: 'Смешайте майонез, горчицу и измельченный чеснок.'
            },
            {
                title: 'Шаг 4: Подготовка овощей',
                text: 'Нарежьте помидоры и лук кольцами, подготовьте листья салата.'
            },
            {
                title: 'Шаг 5: Жарка курицы',
                text: 'Обжарьте филе на растительном масле до готовности.'
            },
            {
                title: 'Шаг 6: Добавление сыра',
                text: 'Положите на филе по ломтику сыра, дайте расплавиться.'
            },
            {
                title: 'Шаг 7: Подготовка булочек',
                text: 'Подсушите булочки на сковороде или в тостере.'
            },
            {
                title: 'Шаг 8: Сборка низа',
                text: 'Смажьте нижнюю часть булочки соусом, положите салат.'
            },
            {
                title: 'Шаг 9: Добавление котлеты',
                text: 'Выложите куриное филе с сыром, помидоры и лук.'
            },
            {
                title: 'Шаг 10: Завершение',
                text: 'Смажьте верхнюю часть булочки соусом и накройте бургер.'
            }
        ],
        categories: ['курица', 'бургеры', 'фастфуд'],
        rating: 4.7,
        reviews: 178,
        dishCategoriesList: {
            'fast-food': {
                id: 'fast-food',
                title: 'Фастфуд'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            burgers: {
                id: 'burgers',
                title: 'Бургеры'
            },
            sandwiches: {
                id: 'sandwiches',
                title: 'Сэндвичи'
            }
        },
        cuisineCategoriesList: {
            american: {
                id: 'american',
                title: 'Американская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    283: {
        id: 283,
        name: 'kurino-gribnoy-zhulyen',
        title: 'Курино-грибной жюльен',
        description: 'Классический французский жюльен с курицей и грибами в сливочном соусе под сырной корочкой.',
        cookTime: '40 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 375, unit: Unit.g },
            protein: { value: 24, unit: Unit.g },
            fat: { value: 28, unit: Unit.g },
            carbs: { value: 11, unit: Unit.g }
        },
        cuisine: 'Французская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 400, unit: Unit.g },
            { name: 'Грибы шампиньоны', amount: 400, unit: Unit.g },
            { name: 'Сливки 33%', amount: 300, unit: Unit.ml },
            { name: 'Сыр твердый', amount: 200, unit: Unit.g },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Масло сливочное', amount: 50, unit: Unit.g },
            { name: 'Мука пшеничная', amount: 2, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 2, unit: Unit.pcs },
            { name: 'Мускатный орех', amount: 0.25, unit: Unit.tsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка ингредиентов',
                text: 'Нарежьте курицу, грибы и лук мелкими кубиками.'
            },
            {
                title: 'Шаг 2: Обжарка курицы',
                text: 'Обжарьте курицу на сливочном масле до золотистого цвета.'
            },
            {
                title: 'Шаг 3: Приготовление грибов',
                text: 'Обжарьте грибы с луком до испарения жидкости.'
            },
            {
                title: 'Шаг 4: Приготовление соуса',
                text: 'Добавьте муку, обжарьте, влейте сливки, помешивая.'
            },
            {
                title: 'Шаг 5: Специи',
                text: 'Добавьте измельченный чеснок, мускатный орех, соль и перец.'
            },
            {
                title: 'Шаг 6: Соединение',
                text: 'Соедините курицу с грибным соусом, перемешайте.'
            },
            {
                title: 'Шаг 7: Раскладка',
                text: 'Разложите смесь по кокотницам или формочкам.'
            },
            {
                title: 'Шаг 8: Посыпка сыром',
                text: 'Посыпьте тертым сыром.'
            },
            {
                title: 'Шаг 9: Запекание',
                text: 'Запекайте при 200°C до золотистой корочки 10-15 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив рубленой петрушкой.'
            }
        ],
        categories: ['курица', 'грибы', 'горячие закуски'],
        rating: 4.9,
        reviews: 234,
        dishCategoriesList: {
            appetizers: {
                id: 'appetizers',
                title: 'Закуски'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            mushrooms: {
                id: 'mushrooms',
                title: 'Грибные блюда'
            },
            'hot-appetizers': {
                id: 'hot-appetizers',
                title: 'Горячие закуски'
            }
        },
        cuisineCategoriesList: {
            french: {
                id: 'french',
                title: 'Французская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    282: {
        id: 282,
        name: 'kurinye-nozhki-s-medom-i-paprikoy',
        title: 'Куриные ножки с мёдом и паприкой',
        description: 'Аппетитные куриные ножки в медово-пряном маринаде с паприкой, запеченные до золотистой корочки.',
        cookTime: '55 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 340, unit: Unit.g },
            protein: { value: 27, unit: Unit.g },
            fat: { value: 22, unit: Unit.g },
            carbs: { value: 14, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриные голени', amount: 800, unit: Unit.g },
            { name: 'Мед', amount: 3, unit: Unit.tbsp },
            { name: 'Паприка копченая', amount: 2, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 5, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Горчица дижонская', amount: 1, unit: Unit.tbsp },
            { name: 'Соевый соус', amount: 2, unit: Unit.tbsp },
            { name: 'Тимьян свежий', amount: 1, unit: Unit.bunch },
            { name: 'Розмарин свежий', amount: 1, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Лимон', amount: 1, unit: Unit.pcs }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте мед, паприку, измельченный чеснок и горчицу.'
            },
            {
                title: 'Шаг 2: Добавление масла',
                text: 'Добавьте оливковое масло и соевый соус, перемешайте.'
            },
            {
                title: 'Шаг 3: Подготовка курицы',
                text: 'Натрите куриные голени солью и перцем.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Залейте курицу маринадом, добавьте веточки тимьяна и розмарина.'
            },
            {
                title: 'Шаг 5: Время маринования',
                text: 'Оставьте мариноваться на 2-3 часа или на ночь.'
            },
            {
                title: 'Шаг 6: Подготовка к запеканию',
                text: 'Разогрейте духовку до 190°C.'
            },
            {
                title: 'Шаг 7: Выкладывание',
                text: 'Выложите голени в форму для запекания вместе с маринадом.'
            },
            {
                title: 'Шаг 8: Запекание',
                text: 'Запекайте 40-45 минут, периодически поливая маринадом.'
            },
            {
                title: 'Шаг 9: Финальное запекание',
                text: 'Включите режим гриль на 5 минут для румяной корочки.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячими с дольками лимона и свежими травами.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'медовый маринад'],
        rating: 4.8,
        reviews: 189,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            },
            marinade: {
                id: 'marinade',
                title: 'Маринады'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    281: {
        id: 281,
        name: 'kurinye-nozhki-v-souse-pesto',
        title: 'Куриные ножки в соусе песто',
        description: 'Сочные куриные ножки, запеченные с ароматным соусом песто и сыром.',
        cookTime: '50 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 365, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 26, unit: Unit.g },
            carbs: { value: 7, unit: Unit.g }
        },
        cuisine: 'Итальянская',
        servings: 4,
        ingredients: [
            { name: 'Куриные голени', amount: 800, unit: Unit.g },
            { name: 'Соус песто', amount: 150, unit: Unit.g },
            { name: 'Сыр моцарелла', amount: 200, unit: Unit.g },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Базилик свежий', amount: 1, unit: Unit.bunch },
            { name: 'Помидоры черри', amount: 200, unit: Unit.g },
            { name: 'Лимон', amount: 1, unit: Unit.pcs },
            { name: 'Орегано сушеный', amount: 1, unit: Unit.tsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Натрите куриные голени солью и перцем.'
            },
            {
                title: 'Шаг 2: Маринование',
                text: 'Смешайте песто с измельченным чесноком и лимонным соком.'
            },
            {
                title: 'Шаг 3: Нанесение маринада',
                text: 'Обмажьте куриные голени смесью песто.'
            },
            {
                title: 'Шаг 4: Подготовка к запеканию',
                text: 'Разогрейте духовку до 180°C.'
            },
            {
                title: 'Шаг 5: Выкладывание',
                text: 'Выложите курицу в форму для запекания, добавьте помидоры черри.'
            },
            {
                title: 'Шаг 6: Первый этап запекания',
                text: 'Запекайте 30 минут, периодически поливая соком.'
            },
            {
                title: 'Шаг 7: Добавление сыра',
                text: 'Посыпьте тертой моцареллой и орегано.'
            },
            {
                title: 'Шаг 8: Финальное запекание',
                text: 'Запекайте еще 10-15 минут до расплавления сыра.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Убедитесь, что курица полностью готова.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежим базиликом и петрушкой.'
            }
        ],
        categories: ['курица', 'итальянская кухня', 'запеченные блюда'],
        rating: 4.7,
        reviews: 156,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            italian: {
                id: 'italian',
                title: 'Итальянская кухня'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            }
        },
        cuisineCategoriesList: {
            italian: {
                id: 'italian',
                title: 'Итальянская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    280: {
        id: 280,
        name: 'kurinye-krylyshki-s-chesnochnym-sousom',
        title: 'Куриные крылышки с чесночным соусом',
        description: 'Хрустящие куриные крылышки, подаваемые с ароматным чесночным соусом.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 335, unit: Unit.g },
            protein: { value: 25, unit: Unit.g },
            fat: { value: 24, unit: Unit.g },
            carbs: { value: 8, unit: Unit.g }
        },
        cuisine: 'Американская',
        servings: 4,
        ingredients: [
            { name: 'Куриные крылышки', amount: 1000, unit: Unit.g },
            { name: 'Чеснок', amount: 8, unit: Unit.pcs },
            { name: 'Майонез', amount: 150, unit: Unit.g },
            { name: 'Сметана', amount: 100, unit: Unit.g },
            { name: 'Лимонный сок', amount: 2, unit: Unit.tbsp },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Паприка', amount: 2, unit: Unit.tsp },
            { name: 'Орегано сушеный', amount: 1, unit: Unit.tsp },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Укроп свежий', amount: 1, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка крылышек',
                text: 'Разделите крылышки на фаланги, удалите кончики.'
            },
            {
                title: 'Шаг 2: Маринование',
                text: 'Натрите крылышки солью, перцем и паприкой.'
            },
            {
                title: 'Шаг 3: Подготовка к запеканию',
                text: 'Разогрейте духовку до 190°C.'
            },
            {
                title: 'Шаг 4: Запекание',
                text: 'Выложите крылышки на противень и запекайте 30-35 минут.'
            },
            {
                title: 'Шаг 5: Приготовление соуса',
                text: 'Измельчите чеснок и смешайте с майонезом и сметаной.'
            },
            {
                title: 'Шаг 6: Добавление специй',
                text: 'Добавьте в соус лимонный сок, орегано и рубленую зелень.'
            },
            {
                title: 'Шаг 7: Финальное запекание',
                text: 'Включите режим гриль на 5 минут для хрустящей корочки.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Убедитесь, что крылышки прожарились до готовности.'
            },
            {
                title: 'Шаг 9: Охлаждение соуса',
                text: 'Поставьте соус в холодильник на 15-20 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячие крылышки с охлажденным чесночным соусом.'
            }
        ],
        categories: ['курица', 'закуски', 'соусы'],
        rating: 4.8,
        reviews: 212,
        dishCategoriesList: {
            appetizers: {
                id: 'appetizers',
                title: 'Закуски'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            sauces: {
                id: 'sauces',
                title: 'Соусы'
            },
            'party-food': {
                id: 'party-food',
                title: 'Праздничные блюда'
            }
        },
        cuisineCategoriesList: {
            american: {
                id: 'american',
                title: 'Американская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    279: {
        id: 279,
        name: 'kurinye-krylyshki-v-ostrom-marinade',
        title: 'Куриные крылышки в остром маринаде',
        description: 'Хрустящие куриные крылышки в пикантном остром маринаде, запеченные до золотистой корочки.',
        cookTime: '55 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 320, unit: Unit.g },
            protein: { value: 24, unit: Unit.g },
            fat: { value: 23, unit: Unit.g },
            carbs: { value: 6, unit: Unit.g }
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            { name: 'Куриные крылышки', amount: 1000, unit: Unit.g },
            { name: 'Соус чили', amount: 4, unit: Unit.tbsp },
            { name: 'Соус соевый', amount: 3, unit: Unit.tbsp },
            { name: 'Мед', amount: 2, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 6, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 30, unit: Unit.g },
            { name: 'Масло кунжутное', amount: 2, unit: Unit.tbsp },
            { name: 'Перец чили', amount: 2, unit: Unit.pcs },
            { name: 'Кунжут', amount: 2, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Зеленый лук', amount: 2, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте соус чили, соевый соус и мед.'
            },
            {
                title: 'Шаг 2: Добавление специй',
                text: 'Добавьте измельченные чеснок, имбирь и перец чили.'
            },
            {
                title: 'Шаг 3: Подготовка крылышек',
                text: 'Разделите крылышки на фаланги, удалите кончики.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Залейте крылышки маринадом, добавьте кунжутное масло.'
            },
            {
                title: 'Шаг 5: Время маринования',
                text: 'Оставьте мариноваться на 2-3 часа или на ночь.'
            },
            {
                title: 'Шаг 6: Подготовка к запеканию',
                text: 'Разогрейте духовку до 200°C.'
            },
            {
                title: 'Шаг 7: Выкладывание',
                text: 'Выложите крылышки на противень, полейте маринадом.'
            },
            {
                title: 'Шаг 8: Запекание',
                text: 'Запекайте 35-40 минут, периодически переворачивая.'
            },
            {
                title: 'Шаг 9: Финальное запекание',
                text: 'Посыпьте кунжутом и запекайте еще 5 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячими, посыпав рубленым зеленым луком.'
            }
        ],
        categories: ['курица', 'острые блюда', 'закуски'],
        rating: 4.9,
        reviews: 245,
        dishCategoriesList: {
            appetizers: {
                id: 'appetizers',
                title: 'Закуски'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            spicy: {
                id: 'spicy',
                title: 'Острые блюда'
            },
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        cuisineCategoriesList: {
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    278: {
        id: 278,
        name: 'kurinye-bedra-s-limonom-i-medom',
        title: 'Куриные бедра с лимоном и медом',
        description: 'Сочные куриные бедра в медово-лимонном маринаде, запеченные до золотистой корочки.',
        cookTime: '50 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 345, unit: Unit.g },
            protein: { value: 26, unit: Unit.g },
            fat: { value: 21, unit: Unit.g },
            carbs: { value: 15, unit: Unit.g }
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра', amount: 800, unit: Unit.g },
            { name: 'Мед', amount: 4, unit: Unit.tbsp },
            { name: 'Лимон', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 6, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 4, unit: Unit.tbsp },
            { name: 'Розмарин свежий', amount: 2, unit: Unit.bunch },
            { name: 'Тимьян свежий', amount: 1, unit: Unit.bunch },
            { name: 'Горчица дижонская', amount: 2, unit: Unit.tbsp },
            { name: 'Соевый соус', amount: 2, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Паприка', amount: 1, unit: Unit.tsp }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте мед, сок и цедру лимона, измельченный чеснок.'
            },
            {
                title: 'Шаг 2: Добавление специй',
                text: 'Добавьте в маринад оливковое масло, горчицу и соевый соус.'
            },
            {
                title: 'Шаг 3: Подготовка курицы',
                text: 'Натрите бедра солью, перцем и паприкой.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Залейте курицу маринадом, добавьте веточки розмарина и тимьяна.'
            },
            {
                title: 'Шаг 5: Время маринования',
                text: 'Оставьте мариноваться на 2-3 часа или на ночь.'
            },
            {
                title: 'Шаг 6: Подготовка к запеканию',
                text: 'Разогрейте духовку до 180°C.'
            },
            {
                title: 'Шаг 7: Выкладывание',
                text: 'Выложите бедра в форму для запекания вместе с маринадом.'
            },
            {
                title: 'Шаг 8: Запекание',
                text: 'Запекайте 35-40 минут, периодически поливая маринадом.'
            },
            {
                title: 'Шаг 9: Финальное запекание',
                text: 'Включите режим гриль на 5 минут для румяной корочки.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим с дольками лимона и свежими травами.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'медовый маринад'],
        rating: 4.8,
        reviews: 195,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            },
            marinade: {
                id: 'marinade',
                title: 'Маринады'
            }
        },
        cuisineCategoriesList: {
            mediterranean: {
                id: 'mediterranean',
                title: 'Средиземноморская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    277: {
        id: 277,
        name: 'kurinye-bedra-s-brokkoli-i-slivkami',
        title: 'Куриные бедра с брокколи и сливками',
        description: 'Нежные куриные бедра, тушеные со свежей брокколи в сливочном соусе.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 355, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 25, unit: Unit.g },
            carbs: { value: 8, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра без кости', amount: 800, unit: Unit.g },
            { name: 'Брокколи', amount: 500, unit: Unit.g },
            { name: 'Сливки 33%', amount: 250, unit: Unit.ml },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Тимьян свежий', amount: 1, unit: Unit.bunch },
            { name: 'Сыр пармезан', amount: 50, unit: Unit.g },
            { name: 'Мускатный орех', amount: 0.25, unit: Unit.tsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Натрите куриные бедра солью и перцем.'
            },
            {
                title: 'Шаг 2: Обжарка курицы',
                text: 'Обжарьте бедра на оливковом масле до золотистой корочки.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук, измельчите чеснок, разделите брокколи на соцветия.'
            },
            {
                title: 'Шаг 4: Обжарка овощей',
                text: 'Обжарьте лук и чеснок до мягкости.'
            },
            {
                title: 'Шаг 5: Добавление брокколи',
                text: 'Добавьте брокколи и обжаривайте 3-4 минуты.'
            },
            {
                title: 'Шаг 6: Приготовление соуса',
                text: 'Влейте сливки, добавьте тимьян и мускатный орех.'
            },
            {
                title: 'Шаг 7: Соединение',
                text: 'Верните курицу в сковороду к овощам и соусу.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Тушите под крышкой 15-20 минут до готовности.'
            },
            {
                title: 'Шаг 9: Добавление сыра',
                text: 'Посыпьте тертым пармезаном и дайте ему расплавиться.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежей петрушкой.'
            }
        ],
        categories: ['курица', 'овощи', 'сливочный соус'],
        rating: 4.7,
        reviews: 168,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            vegetables: {
                id: 'vegetables',
                title: 'Овощные блюда'
            },
            'cream-sauce': {
                id: 'cream-sauce',
                title: 'Блюда со сливочным соусом'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    276: {
        id: 276,
        name: 'kurinaya-grudka-s-chesnokom-i-gribami',
        title: 'Куриная грудка с чесноком и грибами',
        description: 'Сочная куриная грудка, тушеная с грибами в сливочно-чесночном соусе.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 315, unit: Unit.g },
            protein: { value: 34, unit: Unit.g },
            fat: { value: 17, unit: Unit.g },
            carbs: { value: 9, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриная грудка', amount: 600, unit: Unit.g },
            { name: 'Грибы шампиньоны', amount: 400, unit: Unit.g },
            { name: 'Чеснок', amount: 6, unit: Unit.pcs },
            { name: 'Сливки 20%', amount: 200, unit: Unit.ml },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Масло сливочное', amount: 50, unit: Unit.g },
            { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
            { name: 'Тимьян свежий', amount: 1, unit: Unit.bunch },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Мука пшеничная', amount: 1, unit: Unit.tbsp }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриную грудку на медальоны толщиной 1.5-2 см.'
            },
            {
                title: 'Шаг 2: Подготовка грибов',
                text: 'Нарежьте грибы пластинками, лук мелкими кубиками.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте курицу на смеси масел до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление грибов',
                text: 'В той же сковороде обжарьте лук и грибы до готовности.'
            },
            {
                title: 'Шаг 5: Добавление чеснока',
                text: 'Добавьте измельченный чеснок и обжарьте 1-2 минуты.'
            },
            {
                title: 'Шаг 6: Приготовление соуса',
                text: 'Добавьте муку, обжарьте, влейте сливки, помешивая.'
            },
            {
                title: 'Шаг 7: Соединение ингредиентов',
                text: 'Верните курицу в сковороду, добавьте тимьян.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Тушите под крышкой 10-15 минут до готовности.'
            },
            {
                title: 'Шаг 9: Доведение вкуса',
                text: 'Добавьте соль и перец по вкусу.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте, посыпав рубленой петрушкой.'
            }
        ],
        categories: ['курица', 'грибы', 'сливочный соус'],
        rating: 4.9,
        reviews: 234,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            mushrooms: {
                id: 'mushrooms',
                title: 'Грибные блюда'
            },
            'cream-sauce': {
                id: 'cream-sauce',
                title: 'Блюда со сливочным соусом'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    275: {
        id: 275,
        name: 'kurinaya-grudka-s-karri',
        title: 'Куриная грудка с карри',
        description: 'Ароматная куриная грудка в соусе карри с кокосовым молоком.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 310, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 18, unit: Unit.g },
            carbs: { value: 12, unit: Unit.g }
        },
        cuisine: 'Индийская',
        servings: 4,
        ingredients: [
            { name: 'Куриная грудка', amount: 600, unit: Unit.g },
            { name: 'Молоко кокосовое', amount: 400, unit: Unit.ml },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 30, unit: Unit.g },
            { name: 'Карри порошок', amount: 2, unit: Unit.tbsp },
            { name: 'Куркума', amount: 1, unit: Unit.tsp },
            { name: 'Кориандр молотый', amount: 1, unit: Unit.tsp },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Кинза свежая', amount: 1, unit: Unit.bunch },
            { name: 'Лайм', amount: 1, unit: Unit.pcs }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриную грудку кубиками среднего размера.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Измельчите лук, чеснок и имбирь.'
            },
            {
                title: 'Шаг 3: Обжарка специй',
                text: 'Обжарьте карри, куркуму и кориандр на масле до появления аромата.'
            },
            {
                title: 'Шаг 4: Обжарка овощей',
                text: 'Добавьте лук, чеснок и имбирь, обжарьте до мягкости.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Добавьте курицу и обжарьте до золотистого цвета.'
            },
            {
                title: 'Шаг 6: Добавление кокосового молока',
                text: 'Влейте кокосовое молоко, перемешайте.'
            },
            {
                title: 'Шаг 7: Тушение',
                text: 'Тушите на среднем огне 15-20 минут.'
            },
            {
                title: 'Шаг 8: Приправы',
                text: 'Добавьте соль и перец по вкусу.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Готовьте еще 5 минут до загустения соуса.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте с рисом, украсив кинзой и дольками лайма.'
            }
        ],
        categories: ['курица', 'карри', 'индийская кухня'],
        rating: 4.8,
        reviews: 192,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            curry: {
                id: 'curry',
                title: 'Карри'
            },
            indian: {
                id: 'indian',
                title: 'Индийская кухня'
            }
        },
        cuisineCategoriesList: {
            indian: {
                id: 'indian',
                title: 'Индийская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    274: {
        id: 274,
        name: 'kurinaya-grudka-s-ananasami-v-duhovke',
        title: 'Куриная грудка с ананасами в духовке',
        description: 'Сочная куриная грудка, запеченная с ананасами под сырной корочкой.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 325, unit: Unit.g },
            protein: { value: 31, unit: Unit.g },
            fat: { value: 16, unit: Unit.g },
            carbs: { value: 19, unit: Unit.g }
        },
        cuisine: 'Фьюжн',
        servings: 4,
        ingredients: [
            { name: 'Куриная грудка', amount: 600, unit: Unit.g },
            { name: 'Ананасы консервированные', amount: 400, unit: Unit.g },
            { name: 'Сыр твердый', amount: 200, unit: Unit.g },
            { name: 'Майонез', amount: 100, unit: Unit.g },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Карри порошок', amount: 1, unit: Unit.tsp },
            { name: 'Паприка', amount: 1, unit: Unit.tsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Разрежьте куриные грудки вдоль на 2-3 тонких пласта.'
            },
            {
                title: 'Шаг 2: Маринование',
                text: 'Натрите курицу солью, перцем, карри и паприкой.'
            },
            {
                title: 'Шаг 3: Подготовка соуса',
                text: 'Смешайте майонез с измельченным чесноком.'
            },
            {
                title: 'Шаг 4: Подготовка ананасов',
                text: 'Нарежьте ананасы небольшими кусочками.'
            },
            {
                title: 'Шаг 5: Сборка блюда',
                text: 'Выложите курицу в форму для запекания, смазанную маслом.'
            },
            {
                title: 'Шаг 6: Добавление соуса',
                text: 'Смажьте курицу чесночным майонезом.'
            },
            {
                title: 'Шаг 7: Добавление ананасов',
                text: 'Выложите сверху кусочки ананаса.'
            },
            {
                title: 'Шаг 8: Посыпка сыром',
                text: 'Посыпьте тертым сыром.'
            },
            {
                title: 'Шаг 9: Запекание',
                text: 'Запекайте при 180°C 25-30 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежей петрушкой.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'фрукты'],
        rating: 4.7,
        reviews: 156,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            },
            fruit: {
                id: 'fruit',
                title: 'Блюда с фруктами'
            }
        },
        cuisineCategoriesList: {
            fusion: {
                id: 'fusion',
                title: 'Фьюжн'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    273: {
        id: 273,
        name: 'kurinaya-grudka-v-klyare-s-kunzhutom',
        title: 'Куриная грудка в кляре с кунжутом',
        description: 'Нежная куриная грудка в хрустящем кляре с кунжутом, подается с соусом.',
        cookTime: '40 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 385, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 24, unit: Unit.g },
            carbs: { value: 16, unit: Unit.g }
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            { name: 'Куриная грудка', amount: 600, unit: Unit.g },
            { name: 'Мука пшеничная', amount: 200, unit: Unit.g },
            { name: 'Яйца', amount: 2, unit: Unit.pcs },
            { name: 'Молоко', amount: 200, unit: Unit.ml },
            { name: 'Кунжут', amount: 50, unit: Unit.g },
            { name: 'Соус соевый', amount: 50, unit: Unit.ml },
            { name: 'Масло растительное', amount: 500, unit: Unit.ml },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 20, unit: Unit.g },
            { name: 'Крахмал кукурузный', amount: 30, unit: Unit.g },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриную грудку на полоски толщиной 1-1.5 см.'
            },
            {
                title: 'Шаг 2: Маринование',
                text: 'Замаринуйте курицу в соевом соусе с измельченным чесноком и имбирем.'
            },
            {
                title: 'Шаг 3: Приготовление кляра',
                text: 'Смешайте муку, яйца и молоко до однородной массы.'
            },
            {
                title: 'Шаг 4: Добавление кунжута',
                text: 'Добавьте в кляр кунжут и перемешайте.'
            },
            {
                title: 'Шаг 5: Подготовка к жарке',
                text: 'Обваляйте каждый кусочек курицы в крахмале.'
            },
            {
                title: 'Шаг 6: Обмакивание в кляр',
                text: 'Окуните курицу в кляр, чтобы она была полностью покрыта.'
            },
            {
                title: 'Шаг 7: Разогрев масла',
                text: 'Нагрейте масло в глубокой сковороде до 180°C.'
            },
            {
                title: 'Шаг 8: Жарка',
                text: 'Жарьте курицу в кляре до золотистого цвета 4-5 минут.'
            },
            {
                title: 'Шаг 9: Просушка',
                text: 'Выложите на бумажные полотенца для удаления лишнего масла.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим с соевым соусом или сладким чили.'
            }
        ],
        categories: ['курица', 'жареные блюда', 'азиатская кухня'],
        rating: 4.6,
        reviews: 178,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            fried: {
                id: 'fried',
                title: 'Жареные блюда'
            },
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        cuisineCategoriesList: {
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    272: {
        id: 272,
        name: 'kuritsa-gril-s-chesnochnym-sousom',
        title: 'Курица-гриль с чесночным соусом',
        description: 'Ароматная курица на гриле, подаваемая с нежным чесночным соусом.',
        cookTime: '50 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 340, unit: Unit.g },
            protein: { value: 31, unit: Unit.g },
            fat: { value: 22, unit: Unit.g },
            carbs: { value: 7, unit: Unit.g }
        },
        cuisine: 'Американская',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра без кости', amount: 800, unit: Unit.g },
            { name: 'Чеснок', amount: 8, unit: Unit.pcs },
            { name: 'Майонез', amount: 150, unit: Unit.g },
            { name: 'Сметана', amount: 100, unit: Unit.g },
            { name: 'Лимонный сок', amount: 2, unit: Unit.tbsp },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch },
            { name: 'Паприка копченая', amount: 1, unit: Unit.tsp },
            { name: 'Орегано сушеный', amount: 1, unit: Unit.tsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Укроп свежий', amount: 1, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте оливковое масло, паприку, орегано, соль и перец.'
            },
            {
                title: 'Шаг 2: Маринование курицы',
                text: 'Натрите курицу маринадом и оставьте на 1-2 часа.'
            },
            {
                title: 'Шаг 3: Приготовление соуса',
                text: 'Измельчите чеснок и смешайте с майонезом и сметаной.'
            },
            {
                title: 'Шаг 4: Добавление зелени',
                text: 'Добавьте в соус измельченную петрушку и укроп.'
            },
            {
                title: 'Шаг 5: Завершение соуса',
                text: 'Добавьте лимонный сок, соль и перец, перемешайте.'
            },
            {
                title: 'Шаг 6: Подготовка гриля',
                text: 'Разогрейте гриль до средне-высокой температуры.'
            },
            {
                title: 'Шаг 7: Готовка курицы',
                text: 'Готовьте курицу на гриле по 7-8 минут с каждой стороны.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Убедитесь, что курица прожарилась до готовности.'
            },
            {
                title: 'Шаг 9: Отдых',
                text: 'Дайте курице отдохнуть 5 минут после приготовления.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте курицу с чесночным соусом и свежей зеленью.'
            }
        ],
        categories: ['курица', 'гриль', 'соусы'],
        rating: 4.7,
        reviews: 187,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            grill: {
                id: 'grill',
                title: 'Блюда на гриле'
            },
            sauces: {
                id: 'sauces',
                title: 'Соусы'
            }
        },
        cuisineCategoriesList: {
            american: {
                id: 'american',
                title: 'Американская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    271: {
        id: 271,
        name: 'kuritsa-gril-s-bazilikom',
        title: 'Курица-гриль с базиликом',
        description: 'Сочная курица-гриль, маринованная в ароматном базиликовом маринаде с чесноком и специями.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 295, unit: Unit.g },
            protein: { value: 32, unit: Unit.g },
            fat: { value: 17, unit: Unit.g },
            carbs: { value: 5, unit: Unit.g }
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра без кости', amount: 800, unit: Unit.g },
            { name: 'Базилик свежий', amount: 2, unit: Unit.bunch },
            { name: 'Чеснок', amount: 6, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 4, unit: Unit.tbsp },
            { name: 'Лимон', amount: 1, unit: Unit.pcs },
            { name: 'Орегано сушеный', amount: 1, unit: Unit.tsp },
            { name: 'Тимьян свежий', amount: 1, unit: Unit.bunch },
            { name: 'Паприка', amount: 1, unit: Unit.tsp },
            { name: 'Перец красный молотый', amount: 0.5, unit: Unit.tsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Измельчите базилик и чеснок в блендере с оливковым маслом.'
            },
            {
                title: 'Шаг 2: Добавление специй',
                text: 'Добавьте в маринад орегано, паприку, соль и оба вида перца.'
            },
            {
                title: 'Шаг 3: Подготовка курицы',
                text: 'Натрите курицу маринадом со всех сторон.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Оставьте мариноваться на 2-3 часа или на ночь.'
            },
            {
                title: 'Шаг 5: Подготовка гриля',
                text: 'Разогрейте гриль до средне-высокой температуры.'
            },
            {
                title: 'Шаг 6: Начало готовки',
                text: 'Выложите курицу на гриль.'
            },
            {
                title: 'Шаг 7: Первый этап',
                text: 'Готовьте 6-7 минут с каждой стороны.'
            },
            {
                title: 'Шаг 8: Переворачивание',
                text: 'Периодически переворачивайте и смазывайте оставшимся маринадом.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Готовьте до появления характерных полосок и полной готовности.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте с дольками лимона и свежим базиликом.'
            }
        ],
        categories: ['курица', 'гриль', 'основные блюда'],
        rating: 4.8,
        reviews: 215,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            grill: {
                id: 'grill',
                title: 'Блюда на гриле'
            }
        },
        cuisineCategoriesList: {
            mediterranean: {
                id: 'mediterranean',
                title: 'Средиземноморская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    270: {
        id: 270,
        name: 'kuritsa-s-yaytsom-i-mayonezom',
        title: 'Курица с яйцом и майонезом',
        description: 'Нежный салат из отварной курицы с яйцами под майонезным соусом.',
        cookTime: '40 минут',
        difficulty: '1/5',
        nutrition: {
            calories: { value: 315, unit: Unit.g },
            protein: { value: 26, unit: Unit.g },
            fat: { value: 22, unit: Unit.g },
            carbs: { value: 6, unit: Unit.g }
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 500, unit: Unit.g },
            { name: 'Яйца', amount: 4, unit: Unit.pcs },
            { name: 'Майонез', amount: 150, unit: Unit.g },
            { name: 'Лук зеленый', amount: 1, unit: Unit.bunch },
            { name: 'Огурцы свежие', amount: 2, unit: Unit.pcs },
            { name: 'Горошек зеленый консервированный', amount: 100, unit: Unit.g },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Укроп свежий', amount: 1, unit: Unit.bunch },
            { name: 'Лавровый лист', amount: 2, unit: Unit.pcs }
        ],
        steps: [
            {
                title: 'Шаг 1: Варка курицы',
                text: 'Отварите куриное филе с лавровым листом до готовности.'
            },
            {
                title: 'Шаг 2: Варка яиц',
                text: 'Сварите яйца вкрутую (8-10 минут).'
            },
            {
                title: 'Шаг 3: Подготовка курицы',
                text: 'Остудите и нарежьте курицу небольшими кубиками.'
            },
            {
                title: 'Шаг 4: Подготовка яиц',
                text: 'Очистите и нарежьте яйца кубиками.'
            },
            {
                title: 'Шаг 5: Подготовка овощей',
                text: 'Нарежьте огурцы кубиками, измельчите зеленый лук.'
            },
            {
                title: 'Шаг 6: Подготовка зелени',
                text: 'Измельчите укроп.'
            },
            {
                title: 'Шаг 7: Соединение ингредиентов',
                text: 'Смешайте курицу, яйца, огурцы и горошек.'
            },
            {
                title: 'Шаг 8: Заправка',
                text: 'Добавьте майонез, перемешайте.'
            },
            {
                title: 'Шаг 9: Приправы',
                text: 'Добавьте соль и перец по вкусу.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Украсьте зеленым луком и укропом.'
            }
        ],
        categories: ['курица', 'салаты', 'закуски'],
        rating: 4.6,
        reviews: 143,
        dishCategoriesList: {
            salads: {
                id: 'salads',
                title: 'Салаты'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            'cold-appetizers': {
                id: 'cold-appetizers',
                title: 'Холодные закуски'
            },
            salads: {
                id: 'salads',
                title: 'Салаты'
            }
        },
        cuisineCategoriesList: {
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    269: {
        id: 269,
        name: 'kuritsa-s-yablokami-i-spetsiyami',
        title: 'Курица с яблоками и специями',
        description: 'Ароматная запеченная курица с яблоками и пряными специями в медовой глазури.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 345, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 18, unit: Unit.g },
            carbs: { value: 24, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра', amount: 800, unit: Unit.g },
            { name: 'Яблоки', amount: 3, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Мед', amount: 2, unit: Unit.tbsp },
            { name: 'Горчица дижонская', amount: 1, unit: Unit.tbsp },
            { name: 'Корица молотая', amount: 1, unit: Unit.tsp },
            { name: 'Имбирь молотый', amount: 0.5, unit: Unit.tsp },
            { name: 'Гвоздика молотая', amount: 0.25, unit: Unit.tsp },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Розмарин свежий', amount: 2, unit: Unit.bunch },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Сидр яблочный', amount: 200, unit: Unit.ml }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте мед, горчицу и все специи.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Натрите курицу маринадом, солью и перцем.'
            },
            {
                title: 'Шаг 3: Подготовка яблок',
                text: 'Нарежьте яблоки крупными дольками, удалив сердцевину.'
            },
            {
                title: 'Шаг 4: Подготовка лука',
                text: 'Нарежьте лук крупными кольцами.'
            },
            {
                title: 'Шаг 5: Маринование',
                text: 'Оставьте курицу мариноваться на 30 минут.'
            },
            {
                title: 'Шаг 6: Подготовка формы',
                text: 'Выложите курицу, яблоки и лук в форму для запекания.'
            },
            {
                title: 'Шаг 7: Добавление трав',
                text: 'Добавьте веточки розмарина и тимьяна.'
            },
            {
                title: 'Шаг 8: Начальное запекание',
                text: 'Запекайте при 180°C 30 минут.'
            },
            {
                title: 'Шаг 9: Добавление сидра',
                text: 'Влейте яблочный сидр и запекайте еще 20 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим с запеченными яблоками и луком.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'фрукты'],
        rating: 4.7,
        reviews: 165,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            },
            fruit: {
                id: 'fruit',
                title: 'Блюда с фруктами'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    268: {
        id: 268,
        name: 'kuritsa-s-chesnokom-i-syrom',
        title: 'Курица с чесноком и сыром',
        description: 'Сочное куриное филе, запеченное с ароматным чесноком под сырной корочкой.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 385, unit: Unit.g },
            protein: { value: 34, unit: Unit.g },
            fat: { value: 24, unit: Unit.g },
            carbs: { value: 8, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Сыр моцарелла', amount: 200, unit: Unit.g },
            { name: 'Сыр пармезан', amount: 50, unit: Unit.g },
            { name: 'Чеснок', amount: 6, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Сливки 20%', amount: 200, unit: Unit.ml },
            { name: 'Базилик свежий', amount: 1, unit: Unit.bunch },
            { name: 'Орегано сушеный', amount: 1, unit: Unit.tsp },
            { name: 'Масло сливочное', amount: 30, unit: Unit.g },
            { name: 'Мука пшеничная', amount: 2, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе на медальоны толщиной 1.5-2 см.'
            },
            {
                title: 'Шаг 2: Маринование',
                text: 'Натрите курицу солью, перцем и измельченным чесноком.'
            },
            {
                title: 'Шаг 3: Подготовка соуса',
                text: 'Растопите сливочное масло, добавьте муку, обжарьте.'
            },
            {
                title: 'Шаг 4: Приготовление соуса',
                text: 'Влейте сливки, добавьте орегано, варите до загустения.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу на оливковом масле до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Сборка блюда',
                text: 'Выложите курицу в форму для запекания.'
            },
            {
                title: 'Шаг 7: Добавление соуса',
                text: 'Залейте курицу сливочным соусом.'
            },
            {
                title: 'Шаг 8: Добавление сыра',
                text: 'Посыпьте тертой моцареллой и пармезаном.'
            },
            {
                title: 'Шаг 9: Запекание',
                text: 'Запекайте при 180°C 15-20 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежим базиликом и петрушкой.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'сыр'],
        rating: 4.8,
        reviews: 189,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            },
            cheese: {
                id: 'cheese',
                title: 'Блюда с сыром'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    267: {
        id: 267,
        name: 'kuritsa-s-tykvennym-pyure',
        title: 'Курица с тыквенным пюре',
        description: 'Нежное куриное филе с ароматным тыквенным пюре и пряными травами.',
        cookTime: '50 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 320, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 14, unit: Unit.g },
            carbs: { value: 25, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Тыква', amount: 800, unit: Unit.g },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Сливки 20%', amount: 150, unit: Unit.ml },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Масло сливочное', amount: 30, unit: Unit.g },
            { name: 'Шалфей свежий', amount: 1, unit: Unit.bunch },
            { name: 'Тимьян свежий', amount: 1, unit: Unit.bunch },
            { name: 'Мускатный орех', amount: 0.25, unit: Unit.tsp },
            { name: 'Бульон куриный', amount: 200, unit: Unit.ml },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Семечки тыквенные', amount: 2, unit: Unit.tbsp }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка тыквы',
                text: 'Очистите и нарежьте тыкву кубиками.'
            },
            {
                title: 'Шаг 2: Варка тыквы',
                text: 'Отварите тыкву до мягкости в подсоленной воде.'
            },
            {
                title: 'Шаг 3: Приготовление пюре',
                text: 'Измельчите тыкву блендером со сливками и сливочным маслом.'
            },
            {
                title: 'Шаг 4: Подготовка курицы',
                text: 'Нарежьте куриное филе порционными кусками.'
            },
            {
                title: 'Шаг 5: Маринование',
                text: 'Натрите курицу солью, перцем и измельченными травами.'
            },
            {
                title: 'Шаг 6: Обжарка курицы',
                text: 'Обжарьте курицу на оливковом масле до золотистой корочки.'
            },
            {
                title: 'Шаг 7: Приготовление соуса',
                text: 'Добавьте бульон и тушите под крышкой 15 минут.'
            },
            {
                title: 'Шаг 8: Финальное приготовление пюре',
                text: 'Добавьте в пюре мускатный орех, соль и перец.'
            },
            {
                title: 'Шаг 9: Прогрев',
                text: 'Прогрейте пюре, при необходимости добавьте сливки.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте курицу с тыквенным пюре, украсив тыквенными семечками и свежими травами.'
            }
        ],
        categories: ['курица', 'овощные блюда', 'диетические блюда'],
        rating: 4.7,
        reviews: 156,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            vegetables: {
                id: 'vegetables',
                title: 'Овощные блюда'
            },
            diet: {
                id: 'diet',
                title: 'Диетические блюда'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-fat': {
                id: 'low-fat',
                title: 'Низкокалорийная диета'
            }
        }
    },
    266: {
        id: 266,
        name: 'kuritsa-s-syrom-i-ananasami',
        title: 'Курица с сыром и ананасами',
        description: 'Сочное куриное филе, запеченное с сыром и сладкими ананасами под сливочным соусом.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 395, unit: Unit.g },
            protein: { value: 35, unit: Unit.g },
            fat: { value: 23, unit: Unit.g },
            carbs: { value: 16, unit: Unit.g }
        },
        cuisine: 'Фьюжн',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Ананасы консервированные', amount: 400, unit: Unit.g },
            { name: 'Сыр твердый', amount: 200, unit: Unit.g },
            { name: 'Сливки 20%', amount: 200, unit: Unit.ml },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Масло сливочное', amount: 30, unit: Unit.g },
            { name: 'Мука пшеничная', amount: 2, unit: Unit.tbsp },
            { name: 'Карри порошок', amount: 1, unit: Unit.tsp },
            { name: 'Паприка', amount: 1, unit: Unit.tsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе на медальоны, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка ананасов',
                text: 'Нарежьте ананасы небольшими кусочками.'
            },
            {
                title: 'Шаг 3: Подготовка соуса',
                text: 'Обжарьте измельченный лук и чеснок на сливочном масле.'
            },
            {
                title: 'Шаг 4: Приготовление соуса',
                text: 'Добавьте муку, карри, влейте сливки, перемешайте до загустения.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Сборка блюда',
                text: 'Выложите курицу в форму, добавьте ананасы.'
            },
            {
                title: 'Шаг 7: Добавление соуса',
                text: 'Залейте сливочным соусом.'
            },
            {
                title: 'Шаг 8: Добавление сыра',
                text: 'Посыпьте тертым сыром.'
            },
            {
                title: 'Шаг 9: Запекание',
                text: 'Запекайте при 180°C 20-25 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежей петрушкой.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'сыр'],
        rating: 4.5,
        reviews: 167,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            },
            cheese: {
                id: 'cheese',
                title: 'Блюда с сыром'
            }
        },
        cuisineCategoriesList: {
            fusion: {
                id: 'fusion',
                title: 'Фьюжн'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    265: {
        id: 265,
        name: 'kuritsa-s-seldereem',
        title: 'Курица с сельдереем',
        description: 'Легкое и полезное блюдо из курицы с сельдереем и овощами в азиатском стиле.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 285, unit: Unit.g },
            protein: { value: 32, unit: Unit.g },
            fat: { value: 12, unit: Unit.g },
            carbs: { value: 18, unit: Unit.g }
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Сельдерей стебли', amount: 6, unit: Unit.pcs },
            { name: 'Морковь', amount: 2, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 20, unit: Unit.g },
            { name: 'Соус соевый', amount: 3, unit: Unit.tbsp },
            { name: 'Масло кунжутное', amount: 1, unit: Unit.tbsp },
            { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
            { name: 'Перец чили', amount: 1, unit: Unit.pcs },
            { name: 'Кунжут', amount: 1, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Лук зеленый', amount: 2, unit: Unit.pcs }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе тонкими полосками.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте сельдерей и морковь наискосок, лук полукольцами.'
            },
            {
                title: 'Шаг 3: Подготовка специй',
                text: 'Измельчите чеснок, имбирь и чили.'
            },
            {
                title: 'Шаг 4: Маринование курицы',
                text: 'Смешайте курицу с частью соевого соуса.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Приготовление овощей',
                text: 'Обжарьте овощи с чесноком и имбирем.'
            },
            {
                title: 'Шаг 7: Соединение',
                text: 'Добавьте курицу к овощам.'
            },
            {
                title: 'Шаг 8: Добавление соуса',
                text: 'Влейте оставшийся соевый соус и кунжутное масло.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Готовьте все вместе 3-4 минуты.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте, посыпав кунжутом и зеленым луком.'
            }
        ],
        categories: ['курица', 'овощные блюда', 'азиатская кухня'],
        rating: 4.6,
        reviews: 142,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            vegetables: {
                id: 'vegetables',
                title: 'Овощные блюда'
            },
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        cuisineCategoriesList: {
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-fat': {
                id: 'low-fat',
                title: 'Низкокалорийная диета'
            }
        }
    },
    264: {
        id: 264,
        name: 'kuritsa-s-rozmarinom-i-kartoshkoy',
        title: 'Курица с розмарином и картошкой',
        description: 'Ароматная запеченная курица с хрустящим картофелем и свежим розмарином.',
        cookTime: '1 час 15 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 425, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 22, unit: Unit.g },
            carbs: { value: 35, unit: Unit.g }
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра', amount: 800, unit: Unit.g },
            { name: 'Картофель', amount: 800, unit: Unit.g },
            { name: 'Розмарин свежий', amount: 4, unit: Unit.bunch },
            { name: 'Чеснок', amount: 8, unit: Unit.pcs },
            { name: 'Лимон', amount: 1, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 4, unit: Unit.tbsp },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Вино белое сухое', amount: 150, unit: Unit.ml },
            { name: 'Бульон куриный', amount: 200, unit: Unit.ml },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Паприка', amount: 1, unit: Unit.tsp }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Натрите курицу солью, перцем и паприкой.'
            },
            {
                title: 'Шаг 2: Подготовка картофеля',
                text: 'Нарежьте картофель крупными дольками.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук крупно, чеснок разрежьте пополам.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Смешайте оливковое масло с розмарином и тимьяном, натрите курицу и картофель.'
            },
            {
                title: 'Шаг 5: Подготовка формы',
                text: 'Выложите курицу, картофель, лук и чеснок в форму для запекания.'
            },
            {
                title: 'Шаг 6: Добавление трав',
                text: 'Разложите веточки розмарина и тимьяна между курицей и картофелем.'
            },
            {
                title: 'Шаг 7: Начальное запекание',
                text: 'Запекайте при 180°C 30 минут.'
            },
            {
                title: 'Шаг 8: Добавление жидкости',
                text: 'Влейте вино и бульон.'
            },
            {
                title: 'Шаг 9: Финальное запекание',
                text: 'Запекайте еще 30-35 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, сбрызнув лимонным соком.'
            }
        ],
        categories: ['курица', 'картофель', 'запеченные блюда'],
        rating: 4.8,
        reviews: 203,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            potato: {
                id: 'potato',
                title: 'Блюда с картофелем'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            }
        },
        cuisineCategoriesList: {
            mediterranean: {
                id: 'mediterranean',
                title: 'Средиземноморская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    263: {
        id: 263,
        name: 'kuritsa-s-risom-po-aziatski',
        title: 'Курица с рисом по-азиатски',
        description: 'Ароматное блюдо из курицы с рисом, овощами и соевым соусом в азиатском стиле.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 410, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 15, unit: Unit.g },
            carbs: { value: 45, unit: Unit.g }
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 500, unit: Unit.g },
            { name: 'Рис жасминовый', amount: 300, unit: Unit.g },
            { name: 'Морковь', amount: 2, unit: Unit.pcs },
            { name: 'Перец болгарский', amount: 1, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 20, unit: Unit.g },
            { name: 'Соус соевый', amount: 4, unit: Unit.tbsp },
            { name: 'Масло кунжутное', amount: 2, unit: Unit.tbsp },
            { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
            { name: 'Горошек зеленый', amount: 100, unit: Unit.g },
            { name: 'Кунжут', amount: 2, unit: Unit.tbsp },
            { name: 'Лук зеленый', amount: 3, unit: Unit.pcs },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Приготовление риса',
                text: 'Отварите рис согласно инструкции.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте куриное филе небольшими кубиками.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте морковь соломкой, перец и лук кубиками.'
            },
            {
                title: 'Шаг 4: Подготовка специй',
                text: 'Измельчите чеснок и имбирь.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Приготовление овощей',
                text: 'Обжарьте овощи с чесноком и имбирем.'
            },
            {
                title: 'Шаг 7: Соединение',
                text: 'Добавьте курицу к овощам, влейте соевый соус.'
            },
            {
                title: 'Шаг 8: Добавление риса',
                text: 'Добавьте рис и зеленый горошек, перемешайте.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Добавьте кунжутное масло, прогрейте все вместе.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте, посыпав кунжутом и зеленым луком.'
            }
        ],
        categories: ['курица', 'рис', 'азиатская кухня'],
        rating: 4.7,
        reviews: 198,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            rice: {
                id: 'rice',
                title: 'Блюда с рисом'
            },
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        cuisineCategoriesList: {
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    262: {
        id: 262,
        name: 'kuritsa-s-pryanostyami-i-medom',
        title: 'Курица с пряностями и мёдом',
        description: 'Ароматная курица, запеченная с медово-пряной глазурью и восточными специями.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 380, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 21, unit: Unit.g },
            carbs: { value: 22, unit: Unit.g }
        },
        cuisine: 'Ближневосточная',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра', amount: 800, unit: Unit.g },
            { name: 'Мед', amount: 3, unit: Unit.tbsp },
            { name: 'Соевый соус', amount: 2, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 5, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 30, unit: Unit.g },
            { name: 'Корица молотая', amount: 1, unit: Unit.tsp },
            { name: 'Кардамон молотый', amount: 0.5, unit: Unit.tsp },
            { name: 'Куркума', amount: 1, unit: Unit.tsp },
            { name: 'Паприка копченая', amount: 1, unit: Unit.tsp },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Лимон', amount: 1, unit: Unit.pcs },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Кинза свежая', amount: 1, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте мед, соевый соус и все специи.'
            },
            {
                title: 'Шаг 2: Подготовка чеснока и имбиря',
                text: 'Измельчите чеснок и натрите имбирь, добавьте в маринад.'
            },
            {
                title: 'Шаг 3: Подготовка курицы',
                text: 'Натрите курицу солью и перцем.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Залейте курицу маринадом и оставьте на 30 минут.'
            },
            {
                title: 'Шаг 5: Подготовка к запеканию',
                text: 'Разогрейте духовку до 180°C.'
            },
            {
                title: 'Шаг 6: Начальное запекание',
                text: 'Запекайте курицу 20 минут.'
            },
            {
                title: 'Шаг 7: Глазирование',
                text: 'Полейте курицу оставшимся маринадом.'
            },
            {
                title: 'Шаг 8: Финальное запекание',
                text: 'Запекайте еще 20-25 минут до готовности.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте, что курица полностью готова.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте, сбрызнув лимонным соком и посыпав кинзой.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'восточная кухня'],
        rating: 4.8,
        reviews: 176,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            },
            'middle-eastern': {
                id: 'middle-eastern',
                title: 'Ближневосточная кухня'
            }
        },
        cuisineCategoriesList: {
            'middle-eastern': {
                id: 'middle-eastern',
                title: 'Ближневосточная кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    261: {
        id: 261,
        name: 'kuritsa-s-pomidorami-i-syrom',
        title: 'Курица с помидорами и сыром',
        description: 'Сочное куриное филе, запеченное с ароматными помидорами и тающим сыром под итальянскими травами.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 355, unit: Unit.g },
            protein: { value: 32, unit: Unit.g },
            fat: { value: 19, unit: Unit.g },
            carbs: { value: 15, unit: Unit.g }
        },
        cuisine: 'Итальянская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Помидоры', amount: 4, unit: Unit.pcs },
            { name: 'Сыр моцарелла', amount: 200, unit: Unit.g },
            { name: 'Сыр пармезан', amount: 50, unit: Unit.g },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Базилик свежий', amount: 1, unit: Unit.bunch },
            { name: 'Орегано сушеный', amount: 1, unit: Unit.tsp },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Бальзамический уксус', amount: 1, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе на медальоны толщиной 1.5-2 см.'
            },
            {
                title: 'Шаг 2: Маринование',
                text: 'Натрите курицу солью, перцем и измельченным чесноком.'
            },
            {
                title: 'Шаг 3: Подготовка помидоров',
                text: 'Нарежьте помидоры кружочками средней толщины.'
            },
            {
                title: 'Шаг 4: Подготовка сыра',
                text: 'Нарежьте моцареллу тонкими ломтиками, натрите пармезан.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу на оливковом масле до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Добавление помидоров',
                text: 'Выложите на курицу помидоры, сбрызните бальзамическим уксусом.'
            },
            {
                title: 'Шаг 7: Добавление специй',
                text: 'Посыпьте орегано и выложите веточки тимьяна.'
            },
            {
                title: 'Шаг 8: Добавление сыра',
                text: 'Выложите моцареллу и посыпьте тертым пармезаном.'
            },
            {
                title: 'Шаг 9: Запекание',
                text: 'Запекайте в духовке при 180°C 15-20 минут до расплавления сыра.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежим базиликом.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'сыр'],
        rating: 4.7,
        reviews: 189,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            },
            cheese: {
                id: 'cheese',
                title: 'Блюда с сыром'
            }
        },
        cuisineCategoriesList: {
            italian: {
                id: 'italian',
                title: 'Итальянская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    260: {
        id: 260,
        name: 'kuritsa-s-pesto-i-tomatami',
        title: 'Курица с песто и томатами',
        description: 'Ароматное блюдо из курицы с соусом песто и сочными томатами в итальянском стиле.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 375, unit: Unit.g },
            protein: { value: 32, unit: Unit.g },
            fat: { value: 22, unit: Unit.g },
            carbs: { value: 14, unit: Unit.g }
        },
        cuisine: 'Итальянская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Томаты черри', amount: 400, unit: Unit.g },
            { name: 'Соус песто', amount: 150, unit: Unit.g },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Сыр моцарелла', amount: 150, unit: Unit.g },
            { name: 'Базилик свежий', amount: 1, unit: Unit.bunch },
            { name: 'Орегано сушеный', amount: 1, unit: Unit.tsp },
            { name: 'Вино белое сухое', amount: 100, unit: Unit.ml },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе средними кусочками.'
            },
            {
                title: 'Шаг 2: Маринование',
                text: 'Смешайте половину песто с оливковым маслом, замаринуйте курицу.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Разрежьте томаты пополам, нарежьте лук, измельчите чеснок.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Приготовление овощей',
                text: 'Обжарьте лук и чеснок до мягкости.'
            },
            {
                title: 'Шаг 6: Добавление вина',
                text: 'Влейте вино, дайте алкоголю выпариться.'
            },
            {
                title: 'Шаг 7: Добавление томатов',
                text: 'Добавьте томаты и орегано, готовьте 5 минут.'
            },
            {
                title: 'Шаг 8: Добавление песто',
                text: 'Добавьте оставшееся песто, перемешайте.'
            },
            {
                title: 'Шаг 9: Добавление сыра',
                text: 'Выложите кусочки моцареллы сверху.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте, украсив свежим базиликом.'
            }
        ],
        categories: ['курица', 'итальянская кухня', 'песто'],
        rating: 4.8,
        reviews: 167,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            italian: {
                id: 'italian',
                title: 'Итальянская кухня'
            }
        },
        cuisineCategoriesList: {
            italian: {
                id: 'italian',
                title: 'Итальянская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    259: {
        id: 259,
        name: 'kuritsa-s-persikami',
        title: 'Курица с персиками',
        description: 'Оригинальное сочетание нежного куриного мяса с сочными персиками в медово-соевом соусе.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 320, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 15, unit: Unit.g },
            carbs: { value: 24, unit: Unit.g }
        },
        cuisine: 'Фьюжн',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Персики свежие', amount: 4, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Мед', amount: 2, unit: Unit.tbsp },
            { name: 'Соус соевый', amount: 3, unit: Unit.tbsp },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Имбирь свежий', amount: 20, unit: Unit.g },
            { name: 'Розмарин свежий', amount: 2, unit: Unit.bunch },
            { name: 'Перец чили', amount: 1, unit: Unit.pcs },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Кинза свежая', amount: 1, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе средними кусочками.'
            },
            {
                title: 'Шаг 2: Маринование',
                text: 'Смешайте мед, соевый соус и измельченный имбирь, замаринуйте курицу.'
            },
            {
                title: 'Шаг 3: Подготовка персиков',
                text: 'Разрежьте персики на дольки.'
            },
            {
                title: 'Шаг 4: Подготовка овощей',
                text: 'Нарежьте лук, измельчите чеснок и чили.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Приготовление овощей',
                text: 'Обжарьте лук, чеснок и чили с розмарином.'
            },
            {
                title: 'Шаг 7: Добавление персиков',
                text: 'Добавьте персики, обжаривайте 2-3 минуты.'
            },
            {
                title: 'Шаг 8: Соединение',
                text: 'Соедините курицу с персиками и овощами.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Тушите все вместе 5-7 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте, украсив свежей кинзой.'
            }
        ],
        categories: ['курица', 'фрукты', 'азиатская кухня'],
        rating: 4.6,
        reviews: 134,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            'sweet-and-sour': {
                id: 'sweet-and-sour',
                title: 'Кисло-сладкие блюда'
            },
            fusion: {
                id: 'fusion',
                title: 'Фьюжн'
            }
        },
        cuisineCategoriesList: {
            fusion: {
                id: 'fusion',
                title: 'Фьюжн'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-fat': {
                id: 'low-fat',
                title: 'Низкокалорийная диета'
            }
        }
    },
    258: {
        id: 258,
        name: 'kuritsa-s-pastoy-i-gribami',
        title: 'Курица с пастой и грибами',
        description: 'Сытное итальянское блюдо из пасты с курицей и грибами в сливочном соусе.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 465, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 21, unit: Unit.g },
            carbs: { value: 48, unit: Unit.g }
        },
        cuisine: 'Итальянская',
        servings: 4,
        ingredients: [
            { name: 'Паста феттуччине', amount: 400, unit: Unit.g },
            { name: 'Куриное филе', amount: 500, unit: Unit.g },
            { name: 'Грибы шампиньоны', amount: 400, unit: Unit.g },
            { name: 'Сливки 20%', amount: 300, unit: Unit.ml },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Сыр пармезан', amount: 100, unit: Unit.g },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Масло сливочное', amount: 30, unit: Unit.g }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка пасты',
                text: 'Отварите пасту в подсоленной воде согласно инструкции.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте куриное филе небольшими кусочками.'
            },
            {
                title: 'Шаг 3: Подготовка грибов',
                text: 'Нарежьте грибы тонкими ломтиками.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Приготовление грибов',
                text: 'Обжарьте грибы с луком и чесноком.'
            },
            {
                title: 'Шаг 6: Приготовление соуса',
                text: 'Добавьте сливки и тимьян к грибам.'
            },
            {
                title: 'Шаг 7: Соединение',
                text: 'Добавьте курицу к грибному соусу.'
            },
            {
                title: 'Шаг 8: Добавление пасты',
                text: 'Смешайте пасту с соусом.'
            },
            {
                title: 'Шаг 9: Добавление сыра',
                text: 'Добавьте тертый пармезан, перемешайте.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте, посыпав свежей петрушкой и дополнительным пармезаном.'
            }
        ],
        categories: ['курица', 'паста', 'грибы'],
        rating: 4.8,
        reviews: 192,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            pasta: {
                id: 'pasta',
                title: 'Паста'
            },
            mushrooms: {
                id: 'mushrooms',
                title: 'Блюда с грибами'
            }
        },
        cuisineCategoriesList: {
            italian: {
                id: 'italian',
                title: 'Итальянская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    257: {
        id: 257,
        name: 'kuritsa-s-paprikoy-i-slivkami',
        title: 'Курица с паприкой и сливками',
        description: 'Нежное куриное филе в сливочном соусе с паприкой и ароматными специями.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 385, unit: Unit.g },
            protein: { value: 31, unit: Unit.g },
            fat: { value: 24, unit: Unit.g },
            carbs: { value: 12, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Сливки 33%', amount: 300, unit: Unit.ml },
            { name: 'Паприка сладкая', amount: 2, unit: Unit.tbsp },
            { name: 'Паприка копченая', amount: 1, unit: Unit.tsp },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Масло сливочное', amount: 30, unit: Unit.g },
            { name: 'Масло оливковое', amount: 2, unit: Unit.tbsp },
            { name: 'Бульон куриный', amount: 200, unit: Unit.ml },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе крупными кусочками.'
            },
            {
                title: 'Шаг 2: Маринование',
                text: 'Натрите курицу солью, перцем и половиной паприки.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук, измельчите чеснок.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки на оливковом масле.'
            },
            {
                title: 'Шаг 5: Приготовление соуса',
                text: 'Обжарьте лук и чеснок на сливочном масле.'
            },
            {
                title: 'Шаг 6: Добавление специй',
                text: 'Добавьте оставшуюся паприку и тимьян.'
            },
            {
                title: 'Шаг 7: Добавление сливок',
                text: 'Влейте сливки и бульон, перемешайте.'
            },
            {
                title: 'Шаг 8: Соединение',
                text: 'Верните курицу в соус.'
            },
            {
                title: 'Шаг 9: Тушение',
                text: 'Тушите на медленном огне 10-15 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте, посыпав свежей петрушкой.'
            }
        ],
        categories: ['курица', 'сливочные соусы'],
        rating: 4.7,
        reviews: 168,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            'cream-sauce': {
                id: 'cream-sauce',
                title: 'Блюда со сливочным соусом'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    256: {
        id: 256,
        name: 'kuritsa-s-ostrym-sousom-i-kartoshkoy',
        title: 'Курица с острым соусом и картошкой',
        description: 'Пикантное блюдо из курицы с картофелем в остром томатном соусе с чесноком и специями.',
        cookTime: '1 час',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 410, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 19, unit: Unit.g },
            carbs: { value: 42, unit: Unit.g }
        },
        cuisine: 'Фьюжн',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра', amount: 800, unit: Unit.g },
            { name: 'Картофель', amount: 800, unit: Unit.g },
            { name: 'Томатная паста', amount: 3, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 6, unit: Unit.pcs },
            { name: 'Перец чили', amount: 2, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Паприка копченая', amount: 2, unit: Unit.tsp },
            { name: 'Кориандр молотый', amount: 1, unit: Unit.tsp },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Масло оливковое', amount: 4, unit: Unit.tbsp },
            { name: 'Бульон куриный', amount: 300, unit: Unit.ml },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Натрите куриные бедра солью, перцем и кориандром.'
            },
            {
                title: 'Шаг 2: Подготовка картофеля',
                text: 'Нарежьте картофель крупными кубиками.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук, измельчите чеснок и чили.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Приготовление соуса',
                text: 'Обжарьте лук, чеснок и чили, добавьте томатную пасту.'
            },
            {
                title: 'Шаг 6: Добавление специй',
                text: 'Добавьте паприку и тимьян, обжарьте до появления аромата.'
            },
            {
                title: 'Шаг 7: Соединение',
                text: 'Добавьте картофель и курицу к соусу.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Влейте бульон и тушите под крышкой 30-35 минут.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Проверьте готовность картофеля и курицы.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, посыпав рубленой петрушкой.'
            }
        ],
        categories: ['курица', 'картофель', 'острые блюда'],
        rating: 4.6,
        reviews: 145,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            potato: {
                id: 'potato',
                title: 'Блюда с картофелем'
            },
            spicy: {
                id: 'spicy',
                title: 'Острые блюда'
            }
        },
        cuisineCategoriesList: {
            fusion: {
                id: 'fusion',
                title: 'Фьюжн'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    255: {
        id: 255,
        name: 'kuritsa-s-orehovym-sousom',
        title: 'Курица с ореховым соусом',
        description: 'Нежное куриное филе под кремовым ореховым соусом с восточными специями.',
        cookTime: '45 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 445, unit: Unit.g },
            protein: { value: 34, unit: Unit.g },
            fat: { value: 28, unit: Unit.g },
            carbs: { value: 16, unit: Unit.g }
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Арахис жареный', amount: 150, unit: Unit.g },
            { name: 'Кокосовое молоко', amount: 400, unit: Unit.ml },
            { name: 'Имбирь свежий', amount: 30, unit: Unit.g },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Соус соевый', amount: 3, unit: Unit.tbsp },
            { name: 'Масло кунжутное', amount: 2, unit: Unit.tbsp },
            { name: 'Перец чили', amount: 1, unit: Unit.pcs },
            { name: 'Лук зеленый', amount: 3, unit: Unit.pcs },
            { name: 'Кинза свежая', amount: 1, unit: Unit.bunch },
            { name: 'Лайм', amount: 1, unit: Unit.pcs },
            { name: 'Мед', amount: 1, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе крупными кусочками.'
            },
            {
                title: 'Шаг 2: Приготовление орехового соуса',
                text: 'Измельчите арахис в блендере до пастообразного состояния.'
            },
            {
                title: 'Шаг 3: Подготовка специй',
                text: 'Измельчите чеснок, имбирь и чили.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Приготовление соуса',
                text: 'Смешайте ореховую пасту с кокосовым молоком.'
            },
            {
                title: 'Шаг 6: Добавление специй',
                text: 'Добавьте в соус чеснок, имбирь, чили и мед.'
            },
            {
                title: 'Шаг 7: Соединение',
                text: 'Добавьте соус к курице, перемешайте.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Тушите на медленном огне 15-20 минут.'
            },
            {
                title: 'Шаг 9: Добавление сока',
                text: 'Добавьте сок лайма и кунжутное масло.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте, посыпав зеленым луком и кинзой.'
            }
        ],
        categories: ['курица', 'азиатская кухня', 'орехи'],
        rating: 4.8,
        reviews: 178,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            },
            nuts: {
                id: 'nuts',
                title: 'Блюда с орехами'
            }
        },
        cuisineCategoriesList: {
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    254: {
        id: 254,
        name: 'kuritsa-s-omletom-i-risom',
        title: 'Курица с омлетом и рисом',
        description: 'Азиатское блюдо из курицы с пушистым омлетом и ароматным рисом. Идеально для сытного обеда или ужина.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 420, unit: Unit.g },
            protein: { value: 32, unit: Unit.g },
            fat: { value: 18, unit: Unit.g },
            carbs: { value: 38, unit: Unit.g }
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 500, unit: Unit.g },
            { name: 'Рис жасминовый', amount: 300, unit: Unit.g },
            { name: 'Яйца', amount: 6, unit: Unit.pcs },
            { name: 'Лук зеленый', amount: 4, unit: Unit.pcs },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 20, unit: Unit.g },
            { name: 'Соус соевый', amount: 4, unit: Unit.tbsp },
            { name: 'Масло растительное', amount: 4, unit: Unit.tbsp },
            { name: 'Масло кунжутное', amount: 1, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Кунжут', amount: 2, unit: Unit.tbsp }
        ],
        steps: [
            {
                title: 'Шаг 1: Приготовление риса',
                text: 'Отварите рис согласно инструкции на упаковке.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте куриное филе тонкими полосками.'
            },
            {
                title: 'Шаг 3: Подготовка омлета',
                text: 'Взбейте яйца с солью и перцем.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу с чесноком и имбирем.'
            },
            {
                title: 'Шаг 5: Приготовление омлета',
                text: 'Приготовьте тонкий омлет, сверните его и нарежьте полосками.'
            },
            {
                title: 'Шаг 6: Заправка риса',
                text: 'Заправьте рис кунжутным маслом.'
            },
            {
                title: 'Шаг 7: Соединение',
                text: 'Смешайте рис с курицей и полосками омлета.'
            },
            {
                title: 'Шаг 8: Добавление соуса',
                text: 'Добавьте соевый соус, перемешайте.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Прогрейте все ингредиенты вместе.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте, посыпав зеленым луком и кунжутом.'
            }
        ],
        categories: ['курица', 'рис', 'азиатская кухня'],
        rating: 4.7,
        reviews: 165,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            rice: {
                id: 'rice',
                title: 'Блюда с рисом'
            },
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        cuisineCategoriesList: {
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    253: {
        id: 253,
        name: 'kuritsa-s-olivkami-i-limonom',
        title: 'Курица с оливками и лимоном',
        description: 'Средиземноморское блюдо из курицы с оливками, лимоном и ароматными травами.',
        cookTime: '50 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 325, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 20, unit: Unit.g },
            carbs: { value: 8, unit: Unit.g }
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра', amount: 800, unit: Unit.g },
            { name: 'Оливки без косточек', amount: 200, unit: Unit.g },
            { name: 'Лимон', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 6, unit: Unit.pcs },
            { name: 'Розмарин свежий', amount: 2, unit: Unit.bunch },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Масло оливковое', amount: 4, unit: Unit.tbsp },
            { name: 'Вино белое сухое', amount: 150, unit: Unit.ml },
            { name: 'Бульон куриный', amount: 200, unit: Unit.ml },
            { name: 'Каперсы', amount: 2, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Орегано сушеный', amount: 1, unit: Unit.tsp }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Натрите куриные бедра солью, перцем и орегано.'
            },
            {
                title: 'Шаг 2: Подготовка лимона',
                text: 'Нарежьте один лимон тонкими кружочками, из второго выжмите сок.'
            },
            {
                title: 'Шаг 3: Подготовка чеснока',
                text: 'Разрежьте зубчики чеснока пополам.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Добавление чеснока',
                text: 'Добавьте чеснок и обжаривайте еще 2-3 минуты.'
            },
            {
                title: 'Шаг 6: Добавление вина',
                text: 'Влейте вино и дайте алкоголю выпариться.'
            },
            {
                title: 'Шаг 7: Добавление ингредиентов',
                text: 'Добавьте оливки, каперсы, лимонный сок и кружочки лимона.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Влейте бульон, добавьте травы и тушите 30 минут.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Дайте блюду настояться 5-10 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежими травами.'
            }
        ],
        categories: ['курица', 'средиземноморская кухня', 'горячие блюда'],
        rating: 4.8,
        reviews: 187,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            mediterranean: {
                id: 'mediterranean',
                title: 'Средиземноморская кухня'
            }
        },
        cuisineCategoriesList: {
            mediterranean: {
                id: 'mediterranean',
                title: 'Средиземноморская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    252: {
        id: 252,
        name: 'kuritsa-s-ogurtsami-i-sousom',
        title: 'Курица с огурцами и соусом',
        description: 'Легкое летнее блюдо из курицы со свежими огурцами под сливочно-йогуртовым соусом.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 295, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 16, unit: Unit.g },
            carbs: { value: 12, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Огурцы свежие', amount: 3, unit: Unit.pcs },
            { name: 'Йогурт греческий', amount: 200, unit: Unit.ml },
            { name: 'Сметана', amount: 100, unit: Unit.ml },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Укроп свежий', amount: 1, unit: Unit.bunch },
            { name: 'Лимонный сок', amount: 1, unit: Unit.tbsp },
            { name: 'Масло оливковое', amount: 2, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Зелень петрушки', amount: 1, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе тонкими полосками.'
            },
            {
                title: 'Шаг 2: Подготовка огурцов',
                text: 'Нарежьте огурцы тонкими полукольцами.'
            },
            {
                title: 'Шаг 3: Приготовление соуса',
                text: 'Смешайте йогурт, сметану, измельченный чеснок и укроп.'
            },
            {
                title: 'Шаг 4: Маринование курицы',
                text: 'Замаринуйте курицу в лимонном соке и специях.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Охлаждение курицы',
                text: 'Дайте курице немного остыть.'
            },
            {
                title: 'Шаг 7: Соединение',
                text: 'Смешайте курицу с огурцами.'
            },
            {
                title: 'Шаг 8: Добавление соуса',
                text: 'Полейте блюдо приготовленным соусом.'
            },
            {
                title: 'Шаг 9: Настаивание',
                text: 'Дайте блюду настояться 10-15 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте, украсив свежей зеленью.'
            }
        ],
        categories: ['курица', 'легкие блюда', 'салаты'],
        rating: 4.6,
        reviews: 142,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            salads: {
                id: 'salads',
                title: 'Салаты'
            },
            'light-meals': {
                id: 'light-meals',
                title: 'Легкие блюда'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    251: {
        id: 251,
        name: 'kuritsa-s-nutom-po-vostochnomu',
        title: 'Курица с нутом по-восточному',
        description: 'Ароматное восточное блюдо из курицы с нутом, приготовленное с традиционными специями и травами.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 385, unit: Unit.g },
            protein: { value: 32, unit: Unit.g },
            fat: { value: 16, unit: Unit.g },
            carbs: { value: 34, unit: Unit.g }
        },
        cuisine: 'Ближневосточная',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра', amount: 800, unit: Unit.g },
            { name: 'Нут консервированный', amount: 400, unit: Unit.g },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Морковь', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Томаты в собственном соку', amount: 400, unit: Unit.g },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Зира молотая', amount: 1, unit: Unit.tsp },
            { name: 'Кориандр молотый', amount: 1, unit: Unit.tsp },
            { name: 'Куркума', amount: 1, unit: Unit.tsp },
            { name: 'Паприка', amount: 1, unit: Unit.tsp },
            { name: 'Бульон куриный', amount: 300, unit: Unit.ml },
            { name: 'Кинза свежая', amount: 1, unit: Unit.bunch },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриные бедра крупными кусками, натрите специями.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте лук, морковь, измельчите чеснок.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление овощей',
                text: 'Обжарьте лук, морковь и чеснок до мягкости.'
            },
            {
                title: 'Шаг 5: Добавление специй',
                text: 'Добавьте все специи, обжарьте до появления аромата.'
            },
            {
                title: 'Шаг 6: Добавление томатов',
                text: 'Добавьте томаты, готовьте 5 минут.'
            },
            {
                title: 'Шаг 7: Добавление нута',
                text: 'Добавьте промытый нут и бульон.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Тушите под крышкой 30-35 минут.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Добавьте рубленую зелень, готовьте еще 5 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежей зеленью.'
            }
        ],
        categories: ['курица', 'бобовые', 'восточная кухня'],
        rating: 4.7,
        reviews: 156,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            legumes: {
                id: 'legumes',
                title: 'Блюда с бобовыми'
            },
            'middle-eastern': {
                id: 'middle-eastern',
                title: 'Ближневосточная кухня'
            }
        },
        cuisineCategoriesList: {
            'middle-eastern': {
                id: 'middle-eastern',
                title: 'Ближневосточная кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    250: {
        id: 250,
        name: 'kuritsa-s-medom-i-apelsinom',
        title: 'Курица с медом и апельсином',
        description: 'Сочная запеченная курица в медово-апельсиновом маринаде с ароматными специями.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 365, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 19, unit: Unit.g },
            carbs: { value: 26, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра', amount: 800, unit: Unit.g },
            { name: 'Апельсины', amount: 2, unit: Unit.pcs },
            { name: 'Мед', amount: 4, unit: Unit.tbsp },
            { name: 'Соевый соус', amount: 2, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 20, unit: Unit.g },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Розмарин свежий', amount: 2, unit: Unit.bunch },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Горчица дижонская', amount: 1, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте сок одного апельсина, мед, соевый соус и горчицу.'
            },
            {
                title: 'Шаг 2: Подготовка специй',
                text: 'Измельчите чеснок и имбирь, добавьте в маринад.'
            },
            {
                title: 'Шаг 3: Подготовка курицы',
                text: 'Натрите курицу солью и перцем.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Замаринуйте курицу на 30 минут.'
            },
            {
                title: 'Шаг 5: Подготовка апельсина',
                text: 'Нарежьте второй апельсин тонкими кружочками.'
            },
            {
                title: 'Шаг 6: Подготовка формы',
                text: 'Выложите курицу в форму для запекания.'
            },
            {
                title: 'Шаг 7: Добавление трав',
                text: 'Добавьте розмарин, тимьян и кружочки апельсина.'
            },
            {
                title: 'Шаг 8: Запекание',
                text: 'Запекайте при 180°C 40 минут.'
            },
            {
                title: 'Шаг 9: Глазирование',
                text: 'Полейте курицу маринадом каждые 15 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим с апельсиновыми дольками и свежими травами.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'праздничные блюда'],
        rating: 4.9,
        reviews: 189,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            },
            festive: {
                id: 'festive',
                title: 'Праздничные блюда'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    249: {
        id: 249,
        name: 'kuritsa-s-mango-i-sousom',
        title: 'Курица с манго и соусом',
        description: 'Экзотическое блюдо из нежного куриного филе со спелым манго в кисло-сладком соусе с восточными специями.',
        cookTime: '40 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 340, unit: Unit.g },
            protein: { value: 26, unit: Unit.g },
            fat: { value: 14, unit: Unit.g },
            carbs: { value: 32, unit: Unit.g }
        },
        cuisine: 'Тайская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Манго спелое', amount: 2, unit: Unit.pcs },
            { name: 'Лук красный', amount: 1, unit: Unit.pcs },
            { name: 'Перец чили', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 30, unit: Unit.g },
            { name: 'Соус рыбный', amount: 2, unit: Unit.tbsp },
            { name: 'Соус соевый', amount: 3, unit: Unit.tbsp },
            { name: 'Сок лайма', amount: 2, unit: Unit.pcs },
            { name: 'Мед', amount: 2, unit: Unit.tbsp },
            { name: 'Масло кокосовое', amount: 3, unit: Unit.tbsp },
            { name: 'Кинза свежая', amount: 1, unit: Unit.bunch },
            { name: 'Мята свежая', amount: 1, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе тонкими полосками.'
            },
            {
                title: 'Шаг 2: Подготовка манго',
                text: 'Очистите и нарежьте манго кубиками.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук, чили, измельчите чеснок и имбирь.'
            },
            {
                title: 'Шаг 4: Приготовление соуса',
                text: 'Смешайте рыбный и соевый соусы, сок лайма и мед.'
            },
            {
                title: 'Шаг 5: Маринование',
                text: 'Замаринуйте курицу в части соуса на 15 минут.'
            },
            {
                title: 'Шаг 6: Обжарка курицы',
                text: 'Обжарьте курицу в кокосовом масле до золотистого цвета.'
            },
            {
                title: 'Шаг 7: Приготовление овощей',
                text: 'Обжарьте лук, чили, чеснок и имбирь.'
            },
            {
                title: 'Шаг 8: Добавление манго',
                text: 'Добавьте манго и оставшийся соус.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Готовьте все вместе 5-7 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив кинзой и мятой.'
            }
        ],
        categories: ['курица', 'экзотические блюда', 'тайская кухня'],
        rating: 4.8,
        reviews: 167,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            exotic: {
                id: 'exotic',
                title: 'Экзотические блюда'
            },
            thai: {
                id: 'thai',
                title: 'Тайская кухня'
            }
        },
        cuisineCategoriesList: {
            thai: {
                id: 'thai',
                title: 'Тайская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    248: {
        id: 248,
        name: 'kuritsa-s-lukom-i-paprikoj',
        title: 'Курица с луком и паприкой',
        description: 'Сочное куриное мясо с карамелизированным луком и ароматной паприкой в венгерском стиле.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 315, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 18, unit: Unit.g },
            carbs: { value: 12, unit: Unit.g }
        },
        cuisine: 'Венгерская',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра', amount: 800, unit: Unit.g },
            { name: 'Лук репчатый', amount: 4, unit: Unit.pcs },
            { name: 'Паприка молотая', amount: 2, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Бульон куриный', amount: 200, unit: Unit.ml },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Лавровый лист', amount: 2, unit: Unit.pcs },
            { name: 'Сметана', amount: 100, unit: Unit.ml },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Натрите куриные бедра солью, перцем и половиной паприки.'
            },
            {
                title: 'Шаг 2: Подготовка лука',
                text: 'Нарежьте лук полукольцами.'
            },
            {
                title: 'Шаг 3: Подготовка чеснока',
                text: 'Измельчите чеснок.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Приготовление лука',
                text: 'Обжарьте лук до карамелизации.'
            },
            {
                title: 'Шаг 6: Добавление специй',
                text: 'Добавьте оставшуюся паприку, чеснок и травы.'
            },
            {
                title: 'Шаг 7: Добавление бульона',
                text: 'Влейте бульон, добавьте лавровый лист.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Тушите под крышкой 25-30 минут.'
            },
            {
                title: 'Шаг 9: Добавление сметаны',
                text: 'Добавьте сметану, перемешайте.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, посыпав петрушкой.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'венгерская кухня'],
        rating: 4.7,
        reviews: 178,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            hungarian: {
                id: 'hungarian',
                title: 'Венгерская кухня'
            }
        },
        cuisineCategoriesList: {
            hungarian: {
                id: 'hungarian',
                title: 'Венгерская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    247: {
        id: 247,
        name: 'kuritsa-s-lapshoj-i-ovoshchami',
        title: 'Курица с лапшой и овощами',
        description: 'Азиатское блюдо из куриного филе с яичной лапшой и свежими овощами в ароматном соусе.',
        cookTime: '30 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 395, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 12, unit: Unit.g },
            carbs: { value: 48, unit: Unit.g }
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 500, unit: Unit.g },
            { name: 'Лапша яичная', amount: 300, unit: Unit.g },
            { name: 'Морковь', amount: 2, unit: Unit.pcs },
            { name: 'Перец болгарский', amount: 2, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 20, unit: Unit.g },
            { name: 'Соус соевый', amount: 4, unit: Unit.tbsp },
            { name: 'Масло кунжутное', amount: 2, unit: Unit.tbsp },
            { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
            { name: 'Перец чили', amount: 1, unit: Unit.pcs },
            { name: 'Зеленый лук', amount: 3, unit: Unit.pcs },
            { name: 'Кунжут', amount: 2, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе тонкими полосками.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте морковь и перец соломкой, лук полукольцами.'
            },
            {
                title: 'Шаг 3: Подготовка специй',
                text: 'Измельчите чеснок, имбирь и чили.'
            },
            {
                title: 'Шаг 4: Приготовление лапши',
                text: 'Отварите лапшу согласно инструкции на упаковке.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу в растительном масле до золотистого цвета.'
            },
            {
                title: 'Шаг 6: Приготовление овощей',
                text: 'Обжарьте овощи с чесноком и имбирем.'
            },
            {
                title: 'Шаг 7: Соединение',
                text: 'Добавьте курицу к овощам, влейте соевый соус.'
            },
            {
                title: 'Шаг 8: Добавление лапши',
                text: 'Добавьте отваренную лапшу, перемешайте.'
            },
            {
                title: 'Шаг 9: Финальная обжарка',
                text: 'Добавьте кунжутное масло, обжаривайте 2-3 минуты.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, посыпав кунжутом и зеленым луком.'
            }
        ],
        categories: ['курица', 'лапша', 'азиатская кухня'],
        rating: 4.8,
        reviews: 203,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            noodles: {
                id: 'noodles',
                title: 'Блюда с лапшой'
            },
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        cuisineCategoriesList: {
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    246: {
        id: 246,
        name: 'kuritsa-s-kuragoj',
        title: 'Курица с курагой',
        description: 'Нежное куриное мясо с ароматной курагой в медово-горчичном соусе. Оригинальное сочетание сладкого и пикантного вкусов.',
        cookTime: '50 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 320, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 15, unit: Unit.g },
            carbs: { value: 24, unit: Unit.g }
        },
        cuisine: 'Авторская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Курага', amount: 200, unit: Unit.g },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Мед', amount: 2, unit: Unit.tbsp },
            { name: 'Горчица дижонская', amount: 1, unit: Unit.tbsp },
            { name: 'Масло оливковое', amount: 2, unit: Unit.tbsp },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Бульон куриный', amount: 200, unit: Unit.ml },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе средними кусочками.'
            },
            {
                title: 'Шаг 2: Подготовка кураги',
                text: 'Замочите курагу в горячей воде на 15 минут, затем нарежьте.'
            },
            {
                title: 'Шаг 3: Подготовка лука',
                text: 'Нарежьте лук полукольцами.'
            },
            {
                title: 'Шаг 4: Приготовление соуса',
                text: 'Смешайте мед с горчицей и небольшим количеством бульона.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Добавление лука',
                text: 'Добавьте лук и обжаривайте до прозрачности.'
            },
            {
                title: 'Шаг 7: Добавление кураги',
                text: 'Добавьте курагу и тимьян.'
            },
            {
                title: 'Шаг 8: Добавление соуса',
                text: 'Влейте медово-горчичный соус и бульон.'
            },
            {
                title: 'Шаг 9: Тушение',
                text: 'Тушите под крышкой 20-25 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив петрушкой.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'оригинальные рецепты'],
        rating: 4.7,
        reviews: 156,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            'sweet-and-savory': {
                id: 'sweet-and-savory',
                title: 'Сладко-острые блюда'
            }
        },
        cuisineCategoriesList: {
            fusion: {
                id: 'fusion',
                title: 'Фьюжн'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    245: {
        id: 245,
        name: 'kuritsa-s-konservirovannymi-tomatami',
        title: 'Курица с консервированными томатами',
        description: 'Сочное куриное филе, тушенное в соусе из консервированных томатов с ароматными травами и специями.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 285, unit: Unit.g },
            protein: { value: 31, unit: Unit.g },
            fat: { value: 14, unit: Unit.g },
            carbs: { value: 16, unit: Unit.g }
        },
        cuisine: 'Итальянская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Томаты в собственном соку', amount: 800, unit: Unit.g },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Базилик свежий', amount: 1, unit: Unit.bunch },
            { name: 'Орегано сушеный', amount: 1, unit: Unit.tsp },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Вино белое сухое', amount: 100, unit: Unit.ml },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Сахар', amount: 1, unit: Unit.tsp }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе крупными кусочками.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте лук, измельчите чеснок.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки на оливковом масле.'
            },
            {
                title: 'Шаг 4: Приготовление овощей',
                text: 'Обжарьте лук и чеснок до мягкости.'
            },
            {
                title: 'Шаг 5: Добавление вина',
                text: 'Влейте вино и дайте алкоголю выпариться.'
            },
            {
                title: 'Шаг 6: Добавление томатов',
                text: 'Добавьте томаты, разомните их вилкой.'
            },
            {
                title: 'Шаг 7: Специи',
                text: 'Добавьте травы, специи и сахар.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Тушите на медленном огне 20-25 минут.'
            },
            {
                title: 'Шаг 9: Загущение соуса',
                text: 'Уварите соус до желаемой консистенции.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежим базиликом.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'итальянская кухня'],
        rating: 4.6,
        reviews: 145,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            italian: {
                id: 'italian',
                title: 'Итальянская кухня'
            }
        },
        cuisineCategoriesList: {
            italian: {
                id: 'italian',
                title: 'Итальянская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-fat': {
                id: 'low-fat',
                title: 'Низкокалорийная диета'
            }
        }
    },
    244: {
        id: 244,
        name: 'kuritsa-s-keshyu-i-pertsem',
        title: 'Курица с кешью и перцем',
        description: 'Ароматное азиатское блюдо из курицы с обжаренными орехами кешью и сладким перцем в пикантном соусе.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 410, unit: Unit.g },
            protein: { value: 32, unit: Unit.g },
            fat: { value: 28, unit: Unit.g },
            carbs: { value: 14, unit: Unit.g }
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Орехи кешью', amount: 150, unit: Unit.g },
            { name: 'Перец болгарский', amount: 3, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 30, unit: Unit.g },
            { name: 'Соус соевый', amount: 4, unit: Unit.tbsp },
            { name: 'Масло кунжутное', amount: 2, unit: Unit.tbsp },
            { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
            { name: 'Перец чили', amount: 1, unit: Unit.pcs },
            { name: 'Зеленый лук', amount: 3, unit: Unit.pcs },
            { name: 'Крахмал кукурузный', amount: 1, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе небольшими кубиками.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте перец и лук, измельчите чеснок и имбирь.'
            },
            {
                title: 'Шаг 3: Обжарка кешью',
                text: 'Обжарьте орехи кешью до золотистого цвета.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу в растительном масле до готовности.'
            },
            {
                title: 'Шаг 5: Приготовление овощей',
                text: 'Обжарьте лук, чеснок, имбирь и перец.'
            },
            {
                title: 'Шаг 6: Приготовление соуса',
                text: 'Смешайте соевый соус с разведенным крахмалом.'
            },
            {
                title: 'Шаг 7: Соединение',
                text: 'Добавьте курицу к овощам, влейте соус.'
            },
            {
                title: 'Шаг 8: Добавление орехов',
                text: 'Добавьте обжаренные орехи кешью.'
            },
            {
                title: 'Шаг 9: Финальная обжарка',
                text: 'Обжаривайте все вместе 2-3 минуты.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, посыпав зеленым луком.'
            }
        ],
        categories: ['курица', 'орехи', 'горячие блюда'],
        rating: 4.8,
        reviews: 167,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            nuts: {
                id: 'nuts',
                title: 'Блюда с орехами'
            }
        },
        cuisineCategoriesList: {
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    243: {
        id: 243,
        name: 'kuritsa-s-kartoshkoj-i-smetanoj',
        title: 'Курица с картошкой и сметаной',
        description: 'Нежная курица с картофелем в сметанном соусе. Традиционное домашнее блюдо с богатым вкусом.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 375, unit: Unit.g },
            protein: { value: 27, unit: Unit.g },
            fat: { value: 22, unit: Unit.g },
            carbs: { value: 28, unit: Unit.g }
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Картофель', amount: 800, unit: Unit.g },
            { name: 'Сметана 20%', amount: 300, unit: Unit.ml },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Укроп свежий', amount: 1, unit: Unit.bunch },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Паприка молотая', amount: 1, unit: Unit.tsp }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе средними кусочками.'
            },
            {
                title: 'Шаг 2: Подготовка картофеля',
                text: 'Очистите и нарежьте картофель кубиками.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук, измельчите чеснок.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Приготовление овощей',
                text: 'Добавьте лук и чеснок, обжарьте до мягкости.'
            },
            {
                title: 'Шаг 6: Добавление картофеля',
                text: 'Добавьте картофель, обжаривайте 5-7 минут.'
            },
            {
                title: 'Шаг 7: Добавление сметаны',
                text: 'Добавьте сметану, специи и травы.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Тушите под крышкой 25-30 минут до готовности.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте готовность картофеля вилкой.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, посыпав свежей зеленью.'
            }
        ],
        categories: ['курица', 'картофель', 'горячие блюда'],
        rating: 4.7,
        reviews: 189,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            potatoes: {
                id: 'potatoes',
                title: 'Блюда с картофелем'
            }
        },
        cuisineCategoriesList: {
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    242: {
        id: 242,
        name: 'kuritsa-s-kartoshkoj-v-rukave',
        title: 'Курица с картошкой в рукаве',
        description: 'Сочная курица с картофелем, запеченная в рукаве для запекания. Простое и вкусное блюдо с минимумом хлопот.',
        cookTime: '1 час 30 минут',
        difficulty: '1/5',
        nutrition: {
            calories: { value: 355, unit: Unit.g },
            protein: { value: 26, unit: Unit.g },
            fat: { value: 16, unit: Unit.g },
            carbs: { value: 32, unit: Unit.g }
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            { name: 'Курица целая', amount: 1500, unit: Unit.g },
            { name: 'Картофель', amount: 800, unit: Unit.g },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Морковь', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 5, unit: Unit.pcs },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Майоран сушеный', amount: 1, unit: Unit.tsp },
            { name: 'Паприка молотая', amount: 1, unit: Unit.tsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Лавровый лист', amount: 2, unit: Unit.pcs }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Промойте и обсушите курицу, натрите специями и солью.'
            },
            {
                title: 'Шаг 2: Подготовка картофеля',
                text: 'Очистите и нарежьте картофель крупными кусками.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук кольцами, морковь кружочками.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Смешайте овощи с маслом и специями.'
            },
            {
                title: 'Шаг 5: Подготовка рукава',
                text: 'Выложите в рукав для запекания курицу.'
            },
            {
                title: 'Шаг 6: Добавление овощей',
                text: 'Разложите вокруг курицы картофель и овощи.'
            },
            {
                title: 'Шаг 7: Добавление специй',
                text: 'Добавьте чеснок и лавровый лист.'
            },
            {
                title: 'Шаг 8: Запекание',
                text: 'Запекайте при 180°C 1 час.'
            },
            {
                title: 'Шаг 9: Финальное запекание',
                text: 'Разрежьте рукав сверху и запекайте еще 15-20 минут до румяной корочки.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, полив образовавшимся соком.'
            }
        ],
        categories: ['курица', 'картофель', 'запеченные блюда'],
        rating: 4.9,
        reviews: 278,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            potatoes: {
                id: 'potatoes',
                title: 'Блюда с картофелем'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            }
        },
        cuisineCategoriesList: {
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    241: {
        id: 241,
        name: 'kuritsa-s-kartofelem-po-derevenski',
        title: 'Курица с картофелем по-деревенски',
        description: 'Ароматное деревенское блюдо из курицы с хрустящим картофелем и травами. Готовится в духовке с чесноком и специями.',
        cookTime: '1 час 15 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 385, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 18, unit: Unit.g },
            carbs: { value: 35, unit: Unit.g }
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра', amount: 800, unit: Unit.g },
            { name: 'Картофель', amount: 800, unit: Unit.g },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 6, unit: Unit.pcs },
            { name: 'Масло растительное', amount: 4, unit: Unit.tbsp },
            { name: 'Розмарин свежий', amount: 2, unit: Unit.bunch },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Паприка молотая', amount: 1, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Лавровый лист', amount: 2, unit: Unit.pcs }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Натрите куриные бедра солью, перцем и паприкой.'
            },
            {
                title: 'Шаг 2: Подготовка картофеля',
                text: 'Нарежьте картофель крупными дольками.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук крупно, измельчите чеснок.'
            },
            {
                title: 'Шаг 4: Маринование картофеля',
                text: 'Смешайте картофель с маслом, специями и травами.'
            },
            {
                title: 'Шаг 5: Подготовка формы',
                text: 'Выложите картофель в форму для запекания.'
            },
            {
                title: 'Шаг 6: Добавление курицы',
                text: 'Положите курицу поверх картофеля.'
            },
            {
                title: 'Шаг 7: Добавление овощей',
                text: 'Разложите лук, чеснок и лавровый лист.'
            },
            {
                title: 'Шаг 8: Запекание',
                text: 'Запекайте при 200°C 45-50 минут.'
            },
            {
                title: 'Шаг 9: Финальное запекание',
                text: 'Снимите фольгу и запекайте еще 15 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежими травами.'
            }
        ],
        categories: ['курица', 'картофель', 'запеченные блюда'],
        rating: 4.8,
        reviews: 234,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            potatoes: {
                id: 'potatoes',
                title: 'Блюда с картофелем'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            }
        },
        cuisineCategoriesList: {
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    240: {
        id: 240,
        name: 'kuritsa-s-izyumom-i-orehami',
        title: 'Курица с изюмом и орехами',
        description: 'Праздничное блюдо из курицы с изюмом и орехами в медово-винном соусе. Оригинальное сочетание сладких и пикантных вкусов.',
        cookTime: '1 час',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 395, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 24, unit: Unit.g },
            carbs: { value: 22, unit: Unit.g }
        },
        cuisine: 'Восточная',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Изюм золотой', amount: 100, unit: Unit.g },
            { name: 'Грецкие орехи', amount: 100, unit: Unit.g },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Вино белое сухое', amount: 150, unit: Unit.ml },
            { name: 'Мед', amount: 2, unit: Unit.tbsp },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Корица молотая', amount: 1, unit: Unit.tsp },
            { name: 'Кардамон молотый', amount: 0.5, unit: Unit.tsp },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка изюма',
                text: 'Замочите изюм в горячей воде на 15 минут.'
            },
            {
                title: 'Шаг 2: Подготовка орехов',
                text: 'Подсушите и измельчите грецкие орехи.'
            },
            {
                title: 'Шаг 3: Подготовка курицы',
                text: 'Нарежьте куриное филе крупными кусочками.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Натрите курицу специями, солью и перцем.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Приготовление лука',
                text: 'Обжарьте нарезанный лук и чеснок до мягкости.'
            },
            {
                title: 'Шаг 7: Добавление вина',
                text: 'Влейте вино, добавьте мед и специи.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Добавьте изюм и орехи, тушите 15-20 минут.'
            },
            {
                title: 'Шаг 9: Загущение соуса',
                text: 'Уварите соус до желаемой консистенции.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив петрушкой и орехами.'
            }
        ],
        categories: ['курица', 'праздничные блюда', 'горячие блюда'],
        rating: 4.7,
        reviews: 156,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            festive: {
                id: 'festive',
                title: 'Праздничные блюда'
            }
        },
        cuisineCategoriesList: {
            eastern: {
                id: 'eastern',
                title: 'Восточная кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    239: {
        id: 239,
        name: 'kuritsa-s-grechkoj-v-duhovke',
        title: 'Курица с гречкой в духовке',
        description: 'Сытное и полезное блюдо из курицы с гречневой крупой, запеченное в духовке. Идеальное сочетание белка и сложных углеводов.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 385, unit: Unit.g },
            protein: { value: 32, unit: Unit.g },
            fat: { value: 15, unit: Unit.g },
            carbs: { value: 38, unit: Unit.g }
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра', amount: 800, unit: Unit.g },
            { name: 'Гречневая крупа', amount: 300, unit: Unit.g },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Морковь', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Бульон куриный', amount: 600, unit: Unit.ml },
            { name: 'Лавровый лист', amount: 2, unit: Unit.pcs },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste },
            { name: 'Паприка молотая', amount: 1, unit: Unit.tsp }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка гречки',
                text: 'Промойте гречневую крупу до прозрачной воды.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Натрите куриные бедра солью, перцем и паприкой.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук и морковь, измельчите чеснок.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте куриные бедра до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Подготовка формы',
                text: 'Выложите гречку в форму для запекания.'
            },
            {
                title: 'Шаг 6: Добавление овощей',
                text: 'Добавьте обжаренные лук, морковь и чеснок к гречке.'
            },
            {
                title: 'Шаг 7: Добавление бульона',
                text: 'Залейте горячим бульоном, добавьте лавровый лист.'
            },
            {
                title: 'Шаг 8: Выкладка курицы',
                text: 'Выложите обжаренную курицу поверх гречки.'
            },
            {
                title: 'Шаг 9: Запекание',
                text: 'Запекайте при 180°C 40-45 минут под фольгой.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив рубленой петрушкой.'
            }
        ],
        categories: ['курица', 'крупы', 'запеченные блюда'],
        rating: 4.8,
        reviews: 203,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            grains: {
                id: 'grains',
                title: 'Блюда из круп'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            }
        },
        cuisineCategoriesList: {
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    238: {
        id: 238,
        name: 'kuritsa-s-gribami-i-lukom',
        title: 'Курица с грибами и луком',
        description: 'Сочное куриное филе, тушенное с грибами и луком в сливочном соусе. Классическое сочетание ингредиентов.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 305, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 18, unit: Unit.g },
            carbs: { value: 14, unit: Unit.g }
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Грибы шампиньоны', amount: 400, unit: Unit.g },
            { name: 'Лук репчатый', amount: 3, unit: Unit.pcs },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Сливки 20%', amount: 200, unit: Unit.ml },
            { name: 'Масло сливочное', amount: 30, unit: Unit.g },
            { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе средними кусочками.'
            },
            {
                title: 'Шаг 2: Подготовка грибов',
                text: 'Нарежьте грибы пластинками.'
            },
            {
                title: 'Шаг 3: Подготовка лука',
                text: 'Нарежьте лук полукольцами, измельчите чеснок.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки на растительном масле.'
            },
            {
                title: 'Шаг 5: Приготовление грибов',
                text: 'Обжарьте грибы до золотистого цвета на отдельной сковороде.'
            },
            {
                title: 'Шаг 6: Приготовление лука',
                text: 'Обжарьте лук до прозрачности, добавьте чеснок.'
            },
            {
                title: 'Шаг 7: Соединение',
                text: 'Соедините курицу, грибы и лук.'
            },
            {
                title: 'Шаг 8: Добавление сливок',
                text: 'Добавьте сливки и сливочное масло, тушите 10 минут.'
            },
            {
                title: 'Шаг 9: Специи',
                text: 'Добавьте соль, перец и измельченные травы.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежей петрушкой.'
            }
        ],
        categories: ['курица', 'грибы', 'горячие блюда'],
        rating: 4.7,
        reviews: 189,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            mushrooms: {
                id: 'mushrooms',
                title: 'Грибные блюда'
            }
        },
        cuisineCategoriesList: {
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    237: {
        id: 237,
        name: 'kuritsa-s-vishnevym-sousom',
        title: 'Курица с вишневым соусом',
        description: 'Сочное куриное филе под изысканным вишневым соусом. Идеальное сочетание мяса птицы с кисло-сладким фруктовым вкусом.',
        cookTime: '45 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 320, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 16, unit: Unit.g },
            carbs: { value: 20, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Вишня без косточек', amount: 300, unit: Unit.g },
            { name: 'Вино красное сухое', amount: 200, unit: Unit.ml },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Мед', amount: 1, unit: Unit.tbsp },
            { name: 'Бальзамический уксус', amount: 1, unit: Unit.tbsp },
            { name: 'Розмарин свежий', amount: 2, unit: Unit.bunch },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Крахмал кукурузный', amount: 1, unit: Unit.tsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе на порционные кусочки.'
            },
            {
                title: 'Шаг 2: Маринование',
                text: 'Натрите курицу солью, перцем и измельченными травами.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте курицу на оливковом масле до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление основы соуса',
                text: 'Обжарьте мелко нарезанный лук и чеснок до прозрачности.'
            },
            {
                title: 'Шаг 5: Добавление вишни',
                text: 'Добавьте вишню, обжаривайте 2-3 минуты.'
            },
            {
                title: 'Шаг 6: Добавление вина',
                text: 'Влейте вино, добавьте мед и бальзамический уксус.'
            },
            {
                title: 'Шаг 7: Уваривание соуса',
                text: 'Уварите соус на медленном огне до загустения.'
            },
            {
                title: 'Шаг 8: Загущение',
                text: 'При необходимости добавьте разведенный крахмал.'
            },
            {
                title: 'Шаг 9: Соединение',
                text: 'Добавьте курицу в соус, прогрейте 5 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте, украсив свежими травами.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'праздничные блюда'],
        rating: 4.8,
        reviews: 167,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            festive: {
                id: 'festive',
                title: 'Праздничные блюда'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    236: {
        id: 236,
        name: 'kuritsa-s-belym-sousom',
        title: 'Курица с белым соусом',
        description: 'Нежное куриное филе под классическим французским белым соусом бешамель. Изысканное блюдо с тонким вкусом.',
        cookTime: '40 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 345, unit: Unit.g },
            protein: { value: 32, unit: Unit.g },
            fat: { value: 21, unit: Unit.g },
            carbs: { value: 12, unit: Unit.g }
        },
        cuisine: 'Французская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Масло сливочное', amount: 50, unit: Unit.g },
            { name: 'Мука пшеничная', amount: 3, unit: Unit.tbsp },
            { name: 'Молоко', amount: 500, unit: Unit.ml },
            { name: 'Сливки 20%', amount: 200, unit: Unit.ml },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Чеснок', amount: 2, unit: Unit.pcs },
            { name: 'Мускатный орех', amount: 0.25, unit: Unit.tsp },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch },
            { name: 'Масло оливковое', amount: 2, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец белый молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе на медальоны толщиной 1.5 см.'
            },
            {
                title: 'Шаг 2: Обжарка курицы',
                text: 'Обжарьте курицу на оливковом масле до золотистой корочки.'
            },
            {
                title: 'Шаг 3: Приготовление основы соуса',
                text: 'Растопите сливочное масло, обжарьте мелко нарезанный лук и чеснок.'
            },
            {
                title: 'Шаг 4: Приготовление ру',
                text: 'Добавьте муку, обжаривайте 2-3 минуты до золотистого цвета.'
            },
            {
                title: 'Шаг 5: Добавление молока',
                text: 'Постепенно влейте горячее молоко, постоянно помешивая.'
            },
            {
                title: 'Шаг 6: Добавление сливок',
                text: 'Влейте сливки, добавьте мускатный орех.'
            },
            {
                title: 'Шаг 7: Варка соуса',
                text: 'Варите соус на медленном огне до загустения.'
            },
            {
                title: 'Шаг 8: Соединение',
                text: 'Добавьте курицу в соус, прогрейте 5 минут.'
            },
            {
                title: 'Шаг 9: Приправы',
                text: 'Добавьте соль, белый перец по вкусу.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте, украсив рубленой петрушкой.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'французская кухня'],
        rating: 4.8,
        reviews: 145,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            french: {
                id: 'french',
                title: 'Французская кухня'
            }
        },
        cuisineCategoriesList: {
            french: {
                id: 'french',
                title: 'Французская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    235: {
        id: 235,
        name: 'kuritsa-s-baklazhanami',
        title: 'Курица с баклажанами',
        description: 'Сочное сочетание курицы и баклажанов в томатном соусе. Ароматное блюдо с овощами и специями.',
        cookTime: '50 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 275, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 14, unit: Unit.g },
            carbs: { value: 16, unit: Unit.g }
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 700, unit: Unit.g },
            { name: 'Баклажаны', amount: 2, unit: Unit.pcs },
            { name: 'Помидоры', amount: 4, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Перец болгарский', amount: 1, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 4, unit: Unit.tbsp },
            { name: 'Томатная паста', amount: 2, unit: Unit.tbsp },
            { name: 'Базилик свежий', amount: 1, unit: Unit.bunch },
            { name: 'Орегано сушеный', amount: 1, unit: Unit.tsp },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка баклажанов',
                text: 'Нарежьте баклажаны кубиками, посолите и оставьте на 15 минут.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте куриное филе средними кусочками.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук, помидоры, перец, измельчите чеснок.'
            },
            {
                title: 'Шаг 4: Обжарка баклажанов',
                text: 'Промойте баклажаны и обжарьте до золотистого цвета.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу до румяной корочки.'
            },
            {
                title: 'Шаг 6: Приготовление овощей',
                text: 'Обжарьте лук, чеснок и перец до мягкости.'
            },
            {
                title: 'Шаг 7: Добавление томатов',
                text: 'Добавьте помидоры и томатную пасту, тушите 5 минут.'
            },
            {
                title: 'Шаг 8: Соединение',
                text: 'Соедините все ингредиенты, добавьте специи.'
            },
            {
                title: 'Шаг 9: Тушение',
                text: 'Тушите под крышкой 15-20 минут на медленном огне.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежим базиликом.'
            }
        ],
        categories: ['курица', 'овощные блюда', 'горячие блюда'],
        rating: 4.7,
        reviews: 159,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            vegetables: {
                id: 'vegetables',
                title: 'Овощные блюда'
            }
        },
        cuisineCategoriesList: {
            mediterranean: {
                id: 'mediterranean',
                title: 'Средиземноморская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    234: {
        id: 234,
        name: 'kuritsa-s-ananasami-i-risom',
        title: 'Курица с ананасами и рисом',
        description: 'Экзотическое блюдо из курицы с ананасами в кисло-сладком соусе, подаваемое с рассыпчатым рисом.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 315, unit: Unit.g },
            protein: { value: 26, unit: Unit.g },
            fat: { value: 12, unit: Unit.g },
            carbs: { value: 35, unit: Unit.g }
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Ананас свежий', amount: 400, unit: Unit.g },
            { name: 'Рис басмати', amount: 300, unit: Unit.g },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Перец болгарский', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 20, unit: Unit.g },
            { name: 'Соус соевый', amount: 3, unit: Unit.tbsp },
            { name: 'Соус кисло-сладкий', amount: 4, unit: Unit.tbsp },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Крахмал кукурузный', amount: 1, unit: Unit.tbsp },
            { name: 'Зеленый лук', amount: 1, unit: Unit.bunch },
            { name: 'Кунжут', amount: 1, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка риса',
                text: 'Промойте рис и отварите его до готовности.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте куриное филе небольшими кубиками.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук, перец, ананас кубиками, измельчите чеснок и имбирь.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Приготовление овощей',
                text: 'Добавьте лук, перец, обжаривайте 3-4 минуты.'
            },
            {
                title: 'Шаг 6: Добавление ананасов',
                text: 'Добавьте ананасы, чеснок и имбирь.'
            },
            {
                title: 'Шаг 7: Приготовление соуса',
                text: 'Смешайте соевый и кисло-сладкий соусы с разведенным крахмалом.'
            },
            {
                title: 'Шаг 8: Соединение',
                text: 'Влейте соус, доведите до загустения.'
            },
            {
                title: 'Шаг 9: Финальные штрихи',
                text: 'Добавьте рубленый зеленый лук.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте с рисом, посыпав кунжутом.'
            }
        ],
        categories: ['курица', 'рис', 'горячие блюда'],
        rating: 4.7,
        reviews: 168,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            rice: {
                id: 'rice',
                title: 'Блюда с рисом'
            }
        },
        cuisineCategoriesList: {
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'dairy-free': {
                id: 'dairy-free',
                title: 'Без молочных продуктов'
            }
        }
    },
    233: {
        id: 233,
        name: 'kuritsa-s-abrikosami',
        title: 'Курица с абрикосами',
        description: 'Нежная курица, запеченная с абрикосами и медом. Оригинальное сочетание сладких и пикантных вкусов.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 295, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 14, unit: Unit.g },
            carbs: { value: 22, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 800, unit: Unit.g },
            { name: 'Абрикосы свежие', amount: 400, unit: Unit.g },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Мед', amount: 2, unit: Unit.tbsp },
            { name: 'Горчица дижонская', amount: 1, unit: Unit.tbsp },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Розмарин свежий', amount: 1, unit: Unit.bunch },
            { name: 'Вино белое сухое', amount: 100, unit: Unit.ml },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте мед, горчицу, измельченный чеснок и травы.'
            },
            {
                title: 'Шаг 2: Маринование курицы',
                text: 'Натрите курицу маринадом и оставьте на 30 минут.'
            },
            {
                title: 'Шаг 3: Подготовка абрикосов',
                text: 'Разрежьте абрикосы пополам, удалите косточки.'
            },
            {
                title: 'Шаг 4: Подготовка лука',
                text: 'Нарежьте лук крупными кольцами.'
            },
            {
                title: 'Шаг 5: Подготовка формы',
                text: 'Выложите лук на дно формы для запекания.'
            },
            {
                title: 'Шаг 6: Выкладка курицы',
                text: 'Положите маринованную курицу поверх лука.'
            },
            {
                title: 'Шаг 7: Добавление абрикосов',
                text: 'Разложите абрикосы вокруг курицы.'
            },
            {
                title: 'Шаг 8: Запекание',
                text: 'Запекайте при 180°C 40-45 минут, периодически поливая соком.'
            },
            {
                title: 'Шаг 9: Глазирование',
                text: 'За 10 минут до готовности полейте медом.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежими травами.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'горячие блюда'],
        rating: 4.6,
        reviews: 142,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    232: {
        id: 232,
        name: 'kuritsa-po-tajski-s-arahisom',
        title: 'Курица по-тайски с арахисом',
        description: 'Сочная курица в пикантном арахисовом соусе с овощами. Аутентичное тайское блюдо с идеальным балансом вкусов.',
        cookTime: '45 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 385, unit: Unit.g },
            protein: { value: 31, unit: Unit.g },
            fat: { value: 24, unit: Unit.g },
            carbs: { value: 16, unit: Unit.g }
        },
        cuisine: 'Тайская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Арахис жареный', amount: 200, unit: Unit.g },
            { name: 'Кокосовое молоко', amount: 400, unit: Unit.ml },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Перец болгарский', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 30, unit: Unit.g },
            { name: 'Паста карри красная', amount: 2, unit: Unit.tbsp },
            { name: 'Соус рыбный', amount: 2, unit: Unit.tbsp },
            { name: 'Соус соевый', amount: 2, unit: Unit.tbsp },
            { name: 'Масло арахисовое', amount: 3, unit: Unit.tbsp },
            { name: 'Лайм', amount: 2, unit: Unit.pcs },
            { name: 'Кинза свежая', amount: 1, unit: Unit.bunch },
            { name: 'Перец чили', amount: 2, unit: Unit.pcs },
            { name: 'Соль', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка арахисового соуса',
                text: 'Измельчите арахис в блендере, добавьте кокосовое молоко и специи.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте куриное филе тонкими полосками.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук, перец соломкой, измельчите чеснок, имбирь и чили.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу на арахисовом масле до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Приготовление овощей',
                text: 'Добавьте овощи и обжаривайте 3-4 минуты.'
            },
            {
                title: 'Шаг 6: Добавление пасты',
                text: 'Добавьте карри пасту, обжарьте до появления аромата.'
            },
            {
                title: 'Шаг 7: Соус',
                text: 'Влейте арахисовый соус, добавьте рыбный и соевый соусы.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Тушите на медленном огне 10-15 минут.'
            },
            {
                title: 'Шаг 9: Финальные штрихи',
                text: 'Добавьте сок лайма и рубленую кинзу.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте с рисом, посыпав измельченным арахисом.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'тайская кухня'],
        rating: 4.8,
        reviews: 187,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            thai: {
                id: 'thai',
                title: 'Тайская кухня'
            }
        },
        cuisineCategoriesList: {
            thai: {
                id: 'thai',
                title: 'Тайская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'dairy-free': {
                id: 'dairy-free',
                title: 'Без молочных продуктов'
            }
        }
    },
    231: {
        id: 231,
        name: 'kuritsa-po-meksikanski-s-fasolyu',
        title: 'Курица по-мексикански с фасолью',
        description: 'Острое и ароматное блюдо из курицы с фасолью, кукурузой и мексиканскими специями. Яркий вкус латиноамериканской кухни.',
        cookTime: '1 час',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 355, unit: Unit.g },
            protein: { value: 32, unit: Unit.g },
            fat: { value: 15, unit: Unit.g },
            carbs: { value: 28, unit: Unit.g }
        },
        cuisine: 'Мексиканская',
        servings: 6,
        ingredients: [
            { name: 'Куриное филе', amount: 800, unit: Unit.g },
            { name: 'Фасоль красная консервированная', amount: 400, unit: Unit.g },
            { name: 'Кукуруза консервированная', amount: 300, unit: Unit.g },
            { name: 'Перец болгарский', amount: 2, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Помидоры', amount: 4, unit: Unit.pcs },
            { name: 'Перец халапеньо', amount: 2, unit: Unit.pcs },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Кумин молотый', amount: 2, unit: Unit.tsp },
            { name: 'Паприка копченая', amount: 1, unit: Unit.tsp },
            { name: 'Орегано сушеный', amount: 1, unit: Unit.tsp },
            { name: 'Кинза свежая', amount: 1, unit: Unit.bunch },
            { name: 'Лайм', amount: 2, unit: Unit.pcs },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе средними кубиками, натрите специями.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте лук, перец и помидоры кубиками, измельчите чеснок и халапеньо.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки на растительном масле.'
            },
            {
                title: 'Шаг 4: Приготовление овощей',
                text: 'Добавьте лук и чеснок, обжаривайте 3-4 минуты.'
            },
            {
                title: 'Шаг 5: Добавление перца',
                text: 'Добавьте болгарский перец и халапеньо, готовьте еще 5 минут.'
            },
            {
                title: 'Шаг 6: Томатная основа',
                text: 'Добавьте помидоры, тушите до мягкости.'
            },
            {
                title: 'Шаг 7: Добавление фасоли',
                text: 'Добавьте фасоль и кукурузу, перемешайте.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Тушите все вместе 15-20 минут на среднем огне.'
            },
            {
                title: 'Шаг 9: Финальные штрихи',
                text: 'Добавьте сок лайма и рубленую кинзу.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив кинзой и дольками лайма.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'мексиканская кухня'],
        rating: 4.7,
        reviews: 156,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            mexican: {
                id: 'mexican',
                title: 'Мексиканская кухня'
            }
        },
        cuisineCategoriesList: {
            mexican: {
                id: 'mexican',
                title: 'Мексиканская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'dairy-free': {
                id: 'dairy-free',
                title: 'Без молочных продуктов'
            }
        }
    },
    230: {
        id: 230,
        name: 'kuritsa-po-kitajski-s-ovoshchami',
        title: 'Курица по-китайски с овощами',
        description: 'Сочное куриное филе с хрустящими овощами в китайском соусе. Быстрое и вкусное блюдо в азиатском стиле.',
        cookTime: '30 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 265, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 12, unit: Unit.g },
            carbs: { value: 16, unit: Unit.g }
        },
        cuisine: 'Китайская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Брокколи', amount: 300, unit: Unit.g },
            { name: 'Морковь', amount: 2, unit: Unit.pcs },
            { name: 'Перец болгарский', amount: 2, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 30, unit: Unit.g },
            { name: 'Соус соевый', amount: 4, unit: Unit.tbsp },
            { name: 'Соус устричный', amount: 2, unit: Unit.tbsp },
            { name: 'Масло кунжутное', amount: 2, unit: Unit.tbsp },
            { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
            { name: 'Крахмал кукурузный', amount: 1, unit: Unit.tbsp },
            { name: 'Кунжут', amount: 2, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе тонкими полосками.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте брокколи на соцветия, морковь и перец соломкой, лук полукольцами.'
            },
            {
                title: 'Шаг 3: Приготовление соуса',
                text: 'Смешайте соевый и устричный соусы, добавьте измельченные чеснок и имбирь.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Замаринуйте курицу в части соуса на 15 минут.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу на сильном огне до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Приготовление овощей',
                text: 'В той же сковороде обжарьте овощи до полуготовности.'
            },
            {
                title: 'Шаг 7: Соединение',
                text: 'Верните курицу к овощам, добавьте оставшийся соус.'
            },
            {
                title: 'Шаг 8: Загущение соуса',
                text: 'Добавьте крахмал, разведенный в воде, доведите до загустения.'
            },
            {
                title: 'Шаг 9: Финальные штрихи',
                text: 'Добавьте кунжутное масло и перемешайте.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, посыпав кунжутом.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'китайская кухня'],
        rating: 4.7,
        reviews: 192,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            chinese: {
                id: 'chinese',
                title: 'Китайская кухня'
            }
        },
        cuisineCategoriesList: {
            chinese: {
                id: 'chinese',
                title: 'Китайская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'dairy-free': {
                id: 'dairy-free',
                title: 'Без молочных продуктов'
            }
        }
    },
    229: {
        id: 229,
        name: 'kuritsa-po-indijski-s-jogurtom',
        title: 'Курица по-индийски с йогуртом',
        description: 'Нежная курица в ароматном йогуртовом маринаде со специями. Традиционное индийское блюдо с богатым вкусом.',
        cookTime: '1 час 30 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 285, unit: Unit.g },
            protein: { value: 32, unit: Unit.g },
            fat: { value: 14, unit: Unit.g },
            carbs: { value: 8, unit: Unit.g }
        },
        cuisine: 'Индийская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 800, unit: Unit.g },
            { name: 'Йогурт натуральный', amount: 300, unit: Unit.ml },
            { name: 'Чеснок', amount: 6, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 40, unit: Unit.g },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Куркума', amount: 1, unit: Unit.tsp },
            { name: 'Гарам масала', amount: 2, unit: Unit.tsp },
            { name: 'Кориандр молотый', amount: 1, unit: Unit.tsp },
            { name: 'Кумин', amount: 1, unit: Unit.tsp },
            { name: 'Паприка', amount: 1, unit: Unit.tsp },
            { name: 'Кинза свежая', amount: 1, unit: Unit.bunch },
            { name: 'Мята свежая', amount: 1, unit: Unit.bunch },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Лимон', amount: 1, unit: Unit.pcs },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте йогурт с измельченными чесноком и имбирем, добавьте все специи.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте куриное филе крупными кусками.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Замаринуйте курицу в йогуртовой смеси на 4-6 часов или на ночь.'
            },
            {
                title: 'Шаг 4: Подготовка лука',
                text: 'Нарежьте лук тонкими полукольцами.'
            },
            {
                title: 'Шаг 5: Обжарка лука',
                text: 'Обжарьте лук до золотистого цвета на растительном масле.'
            },
            {
                title: 'Шаг 6: Приготовление курицы',
                text: 'Выложите маринованную курицу на сковороду с луком.'
            },
            {
                title: 'Шаг 7: Тушение',
                text: 'Тушите под крышкой на среднем огне 25-30 минут.'
            },
            {
                title: 'Шаг 8: Финальная обжарка',
                text: 'Готовьте без крышки 5-7 минут для загустения соуса.'
            },
            {
                title: 'Шаг 9: Добавление зелени',
                text: 'Добавьте рубленую кинзу и мяту.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте с рисом басмати, украсив свежей зеленью и дольками лимона.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'индийская кухня'],
        rating: 4.8,
        reviews: 178,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            indian: {
                id: 'indian',
                title: 'Индийская кухня'
            }
        },
        cuisineCategoriesList: {
            indian: {
                id: 'indian',
                title: 'Индийская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    228: {
        id: 228,
        name: 'kuritsa-po-gruzinski-s-orehami',
        title: 'Курица по-грузински с орехами',
        description: 'Нежная курица в ароматном ореховом соусе с традиционными грузинскими специями. Классическое блюдо грузинской кухни.',
        cookTime: '1 час',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 420, unit: Unit.g },
            protein: { value: 32, unit: Unit.g },
            fat: { value: 28, unit: Unit.g },
            carbs: { value: 12, unit: Unit.g }
        },
        cuisine: 'Грузинская',
        servings: 6,
        ingredients: [
            { name: 'Курица целая', amount: 1500, unit: Unit.g },
            { name: 'Грецкие орехи', amount: 300, unit: Unit.g },
            { name: 'Чеснок', amount: 6, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Кинза свежая', amount: 2, unit: Unit.bunch },
            { name: 'Хмели-сунели', amount: 2, unit: Unit.tbsp },
            { name: 'Уцхо-сунели', amount: 1, unit: Unit.tsp },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Винный уксус', amount: 2, unit: Unit.tbsp },
            { name: 'Гранат', amount: 1, unit: Unit.pcs },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Разрежьте курицу на порционные куски, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Приготовление ореховой пасты',
                text: 'Измельчите грецкие орехи в блендере до состояния пасты.'
            },
            {
                title: 'Шаг 3: Подготовка соуса',
                text: 'Смешайте ореховую пасту с измельченным чесноком, специями и уксусом.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Приготовление лука',
                text: 'Обжарьте нарезанный лук до прозрачности.'
            },
            {
                title: 'Шаг 6: Соединение',
                text: 'Добавьте к курице ореховый соус и лук.'
            },
            {
                title: 'Шаг 7: Тушение',
                text: 'Тушите на медленном огне 30-35 минут.'
            },
            {
                title: 'Шаг 8: Добавление зелени',
                text: 'Добавьте рубленую кинзу за 5 минут до готовности.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Убедитесь, что курица полностью готова.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте, украсив зернами граната и свежей кинзой.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'грузинская кухня'],
        rating: 4.9,
        reviews: 203,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            georgian: {
                id: 'georgian',
                title: 'Грузинская кухня'
            }
        },
        cuisineCategoriesList: {
            georgian: {
                id: 'georgian',
                title: 'Грузинская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'dairy-free': {
                id: 'dairy-free',
                title: 'Без молочных продуктов'
            }
        }
    },
    227: {
        id: 227,
        name: 'kuritsa-po-brazilski',
        title: 'Курица по-бразильски',
        description: 'Пикантная курица в соусе с кокосовым молоком и лаймом. Яркое блюдо бразильской кухни с тропическими нотками.',
        cookTime: '45 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 325, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 21, unit: Unit.g },
            carbs: { value: 9, unit: Unit.g }
        },
        cuisine: 'Бразильская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 800, unit: Unit.g },
            { name: 'Кокосовое молоко', amount: 400, unit: Unit.ml },
            { name: 'Лайм', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Перец чили', amount: 2, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 30, unit: Unit.g },
            { name: 'Кинза свежая', amount: 1, unit: Unit.bunch },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Куркума', amount: 1, unit: Unit.tsp },
            { name: 'Кориандр молотый', amount: 1, unit: Unit.tsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте сок лайма, измельченный чеснок, имбирь и специи.'
            },
            {
                title: 'Шаг 2: Маринование курицы',
                text: 'Нарежьте курицу кусочками, замаринуйте на 20 минут.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте лук, чили и измельчите чеснок.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Приготовление основы',
                text: 'Добавьте лук, чили и обжаривайте 3-4 минуты.'
            },
            {
                title: 'Шаг 6: Добавление специй',
                text: 'Добавьте куркуму и кориандр, обжарьте 1 минуту.'
            },
            {
                title: 'Шаг 7: Кокосовое молоко',
                text: 'Влейте кокосовое молоко, доведите до кипения.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Тушите на медленном огне 15-20 минут.'
            },
            {
                title: 'Шаг 9: Финальные штрихи',
                text: 'Добавьте сок половины лайма и рубленую кинзу.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте с рисом, украсив кинзой и дольками лайма.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'экзотические блюда'],
        rating: 4.8,
        reviews: 134,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            exotic: {
                id: 'exotic',
                title: 'Экзотические блюда'
            }
        },
        cuisineCategoriesList: {
            brazilian: {
                id: 'brazilian',
                title: 'Бразильская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'dairy-free': {
                id: 'dairy-free',
                title: 'Без молочных продуктов'
            }
        }
    },
    226: {
        id: 226,
        name: 'kuritsa-po-bolgarski',
        title: 'Курица по-болгарски',
        description: 'Нежная курица, тушенная с болгарским перцем и овощами в томатном соусе. Традиционное болгарское блюдо.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 295, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 16, unit: Unit.g },
            carbs: { value: 14, unit: Unit.g }
        },
        cuisine: 'Болгарская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 800, unit: Unit.g },
            { name: 'Перец болгарский', amount: 4, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Морковь', amount: 2, unit: Unit.pcs },
            { name: 'Помидоры', amount: 4, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Масло подсолнечное', amount: 3, unit: Unit.tbsp },
            { name: 'Паприка молотая', amount: 2, unit: Unit.tbsp },
            { name: 'Томатная паста', amount: 2, unit: Unit.tbsp },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе крупными кусками, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте перец соломкой, лук полукольцами, морковь кружочками.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки на растительном масле.'
            },
            {
                title: 'Шаг 4: Приготовление овощей',
                text: 'Добавьте лук и морковь, обжаривайте 5 минут.'
            },
            {
                title: 'Шаг 5: Добавление перца',
                text: 'Добавьте болгарский перец, обжаривайте еще 5 минут.'
            },
            {
                title: 'Шаг 6: Томатная основа',
                text: 'Добавьте измельченные помидоры и томатную пасту.'
            },
            {
                title: 'Шаг 7: Специи',
                text: 'Добавьте паприку, измельченный чеснок и специи.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Тушите под крышкой на медленном огне 30 минут.'
            },
            {
                title: 'Шаг 9: Финальная проверка',
                text: 'Проверьте готовность курицы и овощей, при необходимости посолите.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, посыпав рубленой петрушкой.'
            }
        ],
        categories: ['курица', 'тушеные блюда', 'горячие блюда'],
        rating: 4.7,
        reviews: 156,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            stewed: {
                id: 'stewed',
                title: 'Тушеные блюда'
            }
        },
        cuisineCategoriesList: {
            bulgarian: {
                id: 'bulgarian',
                title: 'Болгарская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    225: {
        id: 225,
        name: 'kuritsa-po-balkanski',
        title: 'Курица по-балкански',
        description: 'Сочная курица, запеченная с овощами и специями по традиционному балканскому рецепту.',
        cookTime: '1 час 30 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 345, unit: Unit.g },
            protein: { value: 31, unit: Unit.g },
            fat: { value: 19, unit: Unit.g },
            carbs: { value: 15, unit: Unit.g }
        },
        cuisine: 'Балканская',
        servings: 6,
        ingredients: [
            { name: 'Курица целая', amount: 1500, unit: Unit.g },
            { name: 'Картофель', amount: 800, unit: Unit.g },
            { name: 'Перец болгарский', amount: 3, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Помидоры', amount: 4, unit: Unit.pcs },
            { name: 'Чеснок', amount: 8, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 4, unit: Unit.tbsp },
            { name: 'Паприка', amount: 2, unit: Unit.tbsp },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Розмарин свежий', amount: 2, unit: Unit.bunch },
            { name: 'Вино белое сухое', amount: 200, unit: Unit.ml },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Натрите курицу солью, перцем и паприкой снаружи и внутри.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте картофель крупными дольками, перец и помидоры крупными кусками.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Смешайте оливковое масло с измельченным чесноком и травами, натрите курицу.'
            },
            {
                title: 'Шаг 4: Подготовка противня',
                text: 'Выложите овощи на противень, сверху положите курицу.'
            },
            {
                title: 'Шаг 5: Добавление вина',
                text: 'Влейте вино и немного воды на противень.'
            },
            {
                title: 'Шаг 6: Начало запекания',
                text: 'Запекайте при 180°C под фольгой 45 минут.'
            },
            {
                title: 'Шаг 7: Румяная корочка',
                text: 'Снимите фольгу и запекайте еще 30 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Проверьте готовность курицы и овощей.'
            },
            {
                title: 'Шаг 9: Отдых',
                text: 'Дайте блюду отдохнуть 10-15 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежими травами.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'горячие блюда'],
        rating: 4.8,
        reviews: 189,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            }
        },
        cuisineCategoriesList: {
            balkan: {
                id: 'balkan',
                title: 'Балканская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    224: {
        id: 224,
        name: 'kuritsa-po-arabski',
        title: 'Курица по-арабски',
        description: 'Ароматная курица, приготовленная с традиционными арабскими специями и рисом. Яркое блюдо ближневосточной кухни.',
        cookTime: '1 час 15 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 385, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 18, unit: Unit.g },
            carbs: { value: 32, unit: Unit.g }
        },
        cuisine: 'Арабская',
        servings: 6,
        ingredients: [
            { name: 'Курица целая', amount: 1500, unit: Unit.g },
            { name: 'Рис басмати', amount: 400, unit: Unit.g },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 6, unit: Unit.pcs },
            { name: 'Изюм', amount: 100, unit: Unit.g },
            { name: 'Миндаль', amount: 100, unit: Unit.g },
            { name: 'Масло оливковое', amount: 4, unit: Unit.tbsp },
            { name: 'Куркума', amount: 2, unit: Unit.tsp },
            { name: 'Кардамон', amount: 4, unit: Unit.pcs },
            { name: 'Корица палочки', amount: 2, unit: Unit.pcs },
            { name: 'Шафран', amount: 0.25, unit: Unit.tsp },
            { name: 'Зира', amount: 1, unit: Unit.tsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Натрите курицу смесью специй (куркума, зира, соль, перец) снаружи и внутри.'
            },
            {
                title: 'Шаг 2: Подготовка риса',
                text: 'Замочите рис в холодной воде на 30 минут.'
            },
            {
                title: 'Шаг 3: Обжарка специй',
                text: 'Обжарьте кардамон, корицу в оливковом масле до появления аромата.'
            },
            {
                title: 'Шаг 4: Приготовление основы',
                text: 'Добавьте нарезанный лук, обжарьте до золотистого цвета.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу со всех сторон до румяной корочки.'
            },
            {
                title: 'Шаг 6: Добавление риса',
                text: 'Добавьте промытый рис, обжарьте 2-3 минуты.'
            },
            {
                title: 'Шаг 7: Заливка бульоном',
                text: 'Залейте горячим бульоном или водой, добавьте шафран.'
            },
            {
                title: 'Шаг 8: Тушение',
                text: 'Тушите на медленном огне 40-45 минут под крышкой.'
            },
            {
                title: 'Шаг 9: Добавление сухофруктов',
                text: 'Добавьте обжаренный миндаль и изюм.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте, украсив свежей зеленью и орехами.'
            }
        ],
        categories: ['курица', 'рис', 'горячие блюда'],
        rating: 4.8,
        reviews: 167,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            rice: {
                id: 'rice',
                title: 'Блюда с рисом'
            }
        },
        cuisineCategoriesList: {
            arabic: {
                id: 'arabic',
                title: 'Арабская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    223: {
        id: 223,
        name: 'kuritsa-na-shpazhkah-v-duhovke',
        title: 'Курица на шпажках в духовке',
        description: 'Сочные куриные шашлычки, запеченные в духовке с овощами. Легкая альтернатива традиционному шашлыку.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 255, unit: Unit.g },
            protein: { value: 31, unit: Unit.g },
            fat: { value: 13, unit: Unit.g },
            carbs: { value: 7, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 800, unit: Unit.g },
            { name: 'Перец болгарский', amount: 3, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Цукини', amount: 1, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 4, unit: Unit.tbsp },
            { name: 'Лимон', amount: 1, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Орегано сушеный', amount: 1, unit: Unit.tsp },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Паприка', amount: 1, unit: Unit.tsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте оливковое масло, сок лимона, измельченный чеснок и специи.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте куриное филе крупными кубиками.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Замаринуйте курицу в приготовленном маринаде на 30 минут.'
            },
            {
                title: 'Шаг 4: Подготовка овощей',
                text: 'Нарежьте овощи крупными кусочками.'
            },
            {
                title: 'Шаг 5: Сборка шпажек',
                text: 'Нанижите на шпажки поочередно курицу и овощи.'
            },
            {
                title: 'Шаг 6: Подготовка противня',
                text: 'Выложите шпажки на противень, застеленный фольгой.'
            },
            {
                title: 'Шаг 7: Запекание',
                text: 'Запекайте в разогретой до 200°C духовке 20-25 минут.'
            },
            {
                title: 'Шаг 8: Переворачивание',
                text: 'Переверните шпажки и готовьте еще 10 минут.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Убедитесь, что курица полностью прожарилась.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячими, украсив свежими травами и дольками лимона.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'шашлык'],
        rating: 4.7,
        reviews: 145,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    222: {
        id: 222,
        name: 'kuritsa-v-souse-chili',
        title: 'Курица в соусе чили',
        description: 'Острое азиатское блюдо из курицы в пикантном соусе чили. Идеальное сочетание остроты и сладости.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 275, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 15, unit: Unit.g },
            carbs: { value: 12, unit: Unit.g }
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 700, unit: Unit.g },
            { name: 'Соус чили сладкий', amount: 4, unit: Unit.tbsp },
            { name: 'Соус соевый', amount: 3, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 30, unit: Unit.g },
            { name: 'Перец чили красный', amount: 2, unit: Unit.pcs },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Перец болгарский', amount: 1, unit: Unit.pcs },
            { name: 'Лук зеленый', amount: 1, unit: Unit.bunch },
            { name: 'Кунжут', amount: 2, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте соус чили, соевый соус, измельченные чеснок и имбирь.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте куриное филе на средние кусочки.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Замаринуйте курицу в соусе на 20 минут.'
            },
            {
                title: 'Шаг 4: Подготовка овощей',
                text: 'Нарежьте лук полукольцами, болгарский перец соломкой, чили тонкими кольцами.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу на сильном огне до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Приготовление овощей',
                text: 'Добавьте овощи и обжаривайте еще 3-4 минуты.'
            },
            {
                title: 'Шаг 7: Добавление соуса',
                text: 'Влейте оставшийся маринад и готовьте до загустения.'
            },
            {
                title: 'Шаг 8: Финальное приготовление',
                text: 'Тушите все вместе 5-7 минут на среднем огне.'
            },
            {
                title: 'Шаг 9: Проверка вкуса',
                text: 'При необходимости добавьте соль или соус чили.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте кунжутом и зеленым луком перед подачей.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'острые блюда'],
        rating: 4.7,
        reviews: 168,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            spicy: {
                id: 'spicy',
                title: 'Острые блюда'
            }
        },
        cuisineCategoriesList: {
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'dairy-free': {
                id: 'dairy-free',
                title: 'Без молочных продуктов'
            }
        }
    },
    221: {
        id: 221,
        name: 'kuritsa-v-smetannom-souse-s-gribami',
        title: 'Курица в сметанном соусе с грибами',
        description: 'Нежное куриное филе в сливочно-грибном соусе. Классическое сочетание курицы, грибов и сметаны.',
        cookTime: '50 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 315, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 22, unit: Unit.g },
            carbs: { value: 8, unit: Unit.g }
        },
        cuisine: 'Русская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 700, unit: Unit.g },
            { name: 'Грибы шампиньоны', amount: 400, unit: Unit.g },
            { name: 'Сметана 20%', amount: 300, unit: Unit.ml },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Масло сливочное', amount: 50, unit: Unit.g },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Мука пшеничная', amount: 2, unit: Unit.tbsp },
            { name: 'Бульон куриный', amount: 200, unit: Unit.ml },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе на средние кусочки, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка грибов',
                text: 'Нарежьте грибы пластинками, лук мелкими кубиками.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте курицу на смеси сливочного и растительного масла до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление грибов',
                text: 'В той же сковороде обжарьте лук и грибы до готовности.'
            },
            {
                title: 'Шаг 5: Приготовление соуса',
                text: 'Добавьте муку, обжарьте 1-2 минуты, влейте бульон и сметану.'
            },
            {
                title: 'Шаг 6: Соединение',
                text: 'Верните курицу в сковороду, добавьте измельченный чеснок.'
            },
            {
                title: 'Шаг 7: Тушение',
                text: 'Тушите на медленном огне 15-20 минут до загустения соуса.'
            },
            {
                title: 'Шаг 8: Проверка вкуса',
                text: 'При необходимости добавьте соль и перец.'
            },
            {
                title: 'Шаг 9: Финальный штрих',
                text: 'Добавьте измельченную петрушку, перемешайте.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежей зеленью.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'грибные блюда'],
        rating: 4.8,
        reviews: 215,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            mushrooms: {
                id: 'mushrooms',
                title: 'Грибные блюда'
            }
        },
        cuisineCategoriesList: {
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    220: {
        id: 220,
        name: 'kuritsa-v-medovom-souse',
        title: 'Курица в медовом соусе',
        description: 'Нежные кусочки курицы в сладко-пряном медовом соусе. Идеальное сочетание сладости меда и пикантных специй.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 290, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 16, unit: Unit.g },
            carbs: { value: 14, unit: Unit.g }
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 700, unit: Unit.g },
            { name: 'Мед', amount: 4, unit: Unit.tbsp },
            { name: 'Соус соевый', amount: 3, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 20, unit: Unit.g },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Перец чили', amount: 1, unit: Unit.pcs },
            { name: 'Кунжут', amount: 2, unit: Unit.tbsp },
            { name: 'Лук зеленый', amount: 1, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка соуса',
                text: 'Смешайте мед, соевый соус, измельченные чеснок и имбирь.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте куриное филе на средние кусочки.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Замаринуйте курицу в медовом соусе на 20 минут.'
            },
            {
                title: 'Шаг 4: Подготовка овощей',
                text: 'Нарежьте лук полукольцами, чили тонкими кольцами.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу на растительном масле до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Добавление овощей',
                text: 'Добавьте лук и чили, обжаривайте 2-3 минуты.'
            },
            {
                title: 'Шаг 7: Добавление соуса',
                text: 'Влейте оставшийся маринад и готовьте до загустения.'
            },
            {
                title: 'Шаг 8: Карамелизация',
                text: 'Дайте соусу немного карамелизоваться, помешивая.'
            },
            {
                title: 'Шаг 9: Финальный штрих',
                text: 'Посыпьте обжаренным кунжутом.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив зеленым луком.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'азиатская кухня'],
        rating: 4.8,
        reviews: 192,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            asian: {
                id: 'asian',
                title: 'Азиатские блюда'
            }
        },
        cuisineCategoriesList: {
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'dairy-free': {
                id: 'dairy-free',
                title: 'Без молочных продуктов'
            }
        }
    },
    219: {
        id: 219,
        name: 'kuritsa-v-marinade-s-soevym-sousom',
        title: 'Курица в маринаде с соевым соусом',
        description: 'Сочное куриное филе в ароматном азиатском маринаде. Идеальное сочетание соевого соуса, имбиря и чеснока.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 265, unit: Unit.g },
            protein: { value: 33, unit: Unit.g },
            fat: { value: 14, unit: Unit.g },
            carbs: { value: 5, unit: Unit.g }
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 700, unit: Unit.g },
            { name: 'Соус соевый', amount: 6, unit: Unit.tbsp },
            { name: 'Имбирь свежий', amount: 30, unit: Unit.g },
            { name: 'Чеснок', amount: 5, unit: Unit.pcs },
            { name: 'Масло кунжутное', amount: 2, unit: Unit.tbsp },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Мед', amount: 2, unit: Unit.tbsp },
            { name: 'Лук зеленый', amount: 1, unit: Unit.bunch },
            { name: 'Кунжут', amount: 2, unit: Unit.tbsp },
            { name: 'Перец чили', amount: 1, unit: Unit.pcs },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте соевый соус, измельченные имбирь, чеснок, мед и кунжутное масло.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте куриное филе на средние кусочки.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Залейте курицу маринадом и оставьте на 30-40 минут.'
            },
            {
                title: 'Шаг 4: Подготовка сковороды',
                text: 'Разогрейте растительное масло в глубокой сковороде.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу порциями до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Приготовление соуса',
                text: 'Влейте оставшийся маринад и доведите до кипения.'
            },
            {
                title: 'Шаг 7: Добавление чили',
                text: 'Добавьте нарезанный чили и готовьте еще 2-3 минуты.'
            },
            {
                title: 'Шаг 8: Загущение соуса',
                text: 'Уварите соус до желаемой консистенции.'
            },
            {
                title: 'Шаг 9: Финальный штрих',
                text: 'Посыпьте кунжутом и перемешайте.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив зеленым луком.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'азиатская кухня'],
        rating: 4.7,
        reviews: 178,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            asian: {
                id: 'asian',
                title: 'Азиатские блюда'
            }
        },
        cuisineCategoriesList: {
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'dairy-free': {
                id: 'dairy-free',
                title: 'Без молочных продуктов'
            }
        }
    },
    218: {
        id: 218,
        name: 'kuritsa-v-gorchichnom-souse',
        title: 'Курица в горчичном соусе',
        description: 'Нежное куриное филе в ароматном горчичном соусе со сливками. Идеальное сочетание пикантности и нежности.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 285, unit: Unit.g },
            protein: { value: 30, unit: Unit.g },
            fat: { value: 17, unit: Unit.g },
            carbs: { value: 7, unit: Unit.g }
        },
        cuisine: 'Французская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 700, unit: Unit.g },
            { name: 'Горчица дижонская', amount: 3, unit: Unit.tbsp },
            { name: 'Сливки 33%', amount: 200, unit: Unit.ml },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Вино белое сухое', amount: 100, unit: Unit.ml },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Масло сливочное', amount: 30, unit: Unit.g },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе на средние кусочки, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Мелко нарежьте лук и чеснок.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте курицу на оливковом масле до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление основы соуса',
                text: 'В той же сковороде обжарьте лук и чеснок до прозрачности.'
            },
            {
                title: 'Шаг 5: Добавление вина',
                text: 'Влейте вино и готовьте до уменьшения объема вдвое.'
            },
            {
                title: 'Шаг 6: Приготовление соуса',
                text: 'Добавьте горчицу, сливки и веточки тимьяна.'
            },
            {
                title: 'Шаг 7: Финальное приготовление',
                text: 'Верните курицу в соус, добавьте сливочное масло.'
            },
            {
                title: 'Шаг 8: Томление',
                text: 'Томите на медленном огне 10-15 минут до загустения соуса.'
            },
            {
                title: 'Шаг 9: Проверка вкуса',
                text: 'При необходимости добавьте соль и перец.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежей петрушкой.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'соусы'],
        rating: 4.8,
        reviews: 203,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            sauces: {
                id: 'sauces',
                title: 'Блюда с соусами'
            }
        },
        cuisineCategoriesList: {
            french: {
                id: 'french',
                title: 'Французская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    217: {
        id: 217,
        name: 'zharenaya-kuritsa-s-chesnokom-i-zelenyu',
        title: 'Жареная курица с чесноком и зеленью',
        description: 'Сочные кусочки курицы, обжаренные с чесноком и свежей зеленью. Простое и вкусное блюдо на каждый день.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 275, unit: Unit.g },
            protein: { value: 32, unit: Unit.g },
            fat: { value: 15, unit: Unit.g },
            carbs: { value: 6, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 800, unit: Unit.g },
            { name: 'Чеснок', amount: 8, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 4, unit: Unit.tbsp },
            { name: 'Петрушка свежая', amount: 1, unit: Unit.bunch },
            { name: 'Укроп свежий', amount: 1, unit: Unit.bunch },
            { name: 'Базилик свежий', amount: 1, unit: Unit.bunch },
            { name: 'Лимон', amount: 1, unit: Unit.pcs },
            { name: 'Вино белое сухое', amount: 100, unit: Unit.ml },
            { name: 'Масло сливочное', amount: 30, unit: Unit.g },
            { name: 'Перец чили', amount: 1, unit: Unit.pcs },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе на средние кусочки, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка чеснока и зелени',
                text: 'Измельчите чеснок и свежую зелень, чили нарежьте тонкими кольцами.'
            },
            {
                title: 'Шаг 3: Разогрев сковороды',
                text: 'Нагрейте оливковое масло в большой сковороде.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки со всех сторон.'
            },
            {
                title: 'Шаг 5: Добавление чеснока',
                text: 'Добавьте чеснок и чили, обжаривайте еще 2-3 минуты.'
            },
            {
                title: 'Шаг 6: Добавление вина',
                text: 'Влейте вино и готовьте до его выпаривания.'
            },
            {
                title: 'Шаг 7: Добавление масла',
                text: 'Добавьте сливочное масло и дайте ему растаять.'
            },
            {
                title: 'Шаг 8: Добавление зелени',
                text: 'Всыпьте измельченную зелень, перемешайте.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Готовьте еще 2-3 минуты, чтобы зелень отдала аромат.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, сбрызнув соком лимона и украсив свежей зеленью.'
            }
        ],
        categories: ['курица', 'жареные блюда', 'горячие блюда'],
        rating: 4.8,
        reviews: 189,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            fried: {
                id: 'fried',
                title: 'Жареные блюда'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    216: {
        id: 216,
        name: 'zharenaya-kuritsa-s-kunzhutom',
        title: 'Жареная курица с кунжутом',
        description: 'Хрустящие кусочки курицы в кунжутной панировке с медово-соевым соусом. Азиатский вариант популярного блюда.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 295, unit: Unit.g },
            protein: { value: 31, unit: Unit.g },
            fat: { value: 16, unit: Unit.g },
            carbs: { value: 11, unit: Unit.g }
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 700, unit: Unit.g },
            { name: 'Кунжут', amount: 100, unit: Unit.g },
            { name: 'Соус соевый', amount: 4, unit: Unit.tbsp },
            { name: 'Мед', amount: 2, unit: Unit.tbsp },
            { name: 'Масло растительное', amount: 4, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 30, unit: Unit.g },
            { name: 'Яйцо', amount: 2, unit: Unit.pcs },
            { name: 'Крахмал кукурузный', amount: 50, unit: Unit.g },
            { name: 'Лук зеленый', amount: 1, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте соевый соус, мед, измельченные чеснок и имбирь.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте куриное филе на одинаковые кусочки.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Замаринуйте курицу в соевой смеси на 30 минут.'
            },
            {
                title: 'Шаг 4: Подготовка панировки',
                text: 'Обжарьте кунжут на сухой сковороде до золотистого цвета.'
            },
            {
                title: 'Шаг 5: Приготовление кляра',
                text: 'Взбейте яйца с крахмалом до однородной массы.'
            },
            {
                title: 'Шаг 6: Панировка',
                text: 'Обмакните каждый кусочек курицы в кляр, затем обваляйте в кунжуте.'
            },
            {
                title: 'Шаг 7: Разогрев масла',
                text: 'Нагрейте растительное масло в глубокой сковороде.'
            },
            {
                title: 'Шаг 8: Жарка',
                text: 'Обжарьте курицу до золотистой корочки со всех сторон.'
            },
            {
                title: 'Шаг 9: Завершение',
                text: 'Выложите на бумажные полотенца для удаления лишнего масла.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив зеленым луком и оставшимся соусом.'
            }
        ],
        categories: ['курица', 'жареные блюда', 'горячие блюда'],
        rating: 4.7,
        reviews: 167,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            fried: {
                id: 'fried',
                title: 'Жареные блюда'
            }
        },
        cuisineCategoriesList: {
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    215: {
        id: 215,
        name: 'tsyplenok-s-rozmarinom-i-chesnokom',
        title: 'Цыпленок с розмарином и чесноком',
        description: 'Ароматный цыпленок, запеченный с розмарином, чесноком и оливковым маслом. Классическое средиземноморское блюдо.',
        cookTime: '1 час 20 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 315, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 21, unit: Unit.g },
            carbs: { value: 5, unit: Unit.g }
        },
        cuisine: 'Средиземноморская',
        servings: 6,
        ingredients: [
            { name: 'Цыпленок целый', amount: 1500, unit: Unit.g },
            { name: 'Чеснок', amount: 12, unit: Unit.pcs },
            { name: 'Розмарин свежий', amount: 4, unit: Unit.bunch },
            { name: 'Масло оливковое', amount: 6, unit: Unit.tbsp },
            { name: 'Лимон', amount: 2, unit: Unit.pcs },
            { name: 'Вино белое сухое', amount: 200, unit: Unit.ml },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Морковь', amount: 2, unit: Unit.pcs },
            { name: 'Сельдерей стебель', amount: 2, unit: Unit.pcs },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте оливковое масло, измельченный чеснок, листья розмарина и сок одного лимона.'
            },
            {
                title: 'Шаг 2: Подготовка цыпленка',
                text: 'Натрите цыпленка солью и перцем снаружи и внутри.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Натрите цыпленка маринадом, оставив часть для последующего использования.'
            },
            {
                title: 'Шаг 4: Подготовка овощей',
                text: 'Нарежьте крупно лук, морковь и сельдерей.'
            },
            {
                title: 'Шаг 5: Фаршировка',
                text: 'Наполните цыпленка половиной лимона, чесноком и веточками розмарина.'
            },
            {
                title: 'Шаг 6: Подготовка противня',
                text: 'Выложите овощи на противень, сверху положите цыпленка.'
            },
            {
                title: 'Шаг 7: Начало запекания',
                text: 'Запекайте при 180°C 45 минут, периодически поливая маринадом.'
            },
            {
                title: 'Шаг 8: Добавление вина',
                text: 'Влейте вино и запекайте еще 25-30 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте готовность цыпленка в самой толстой части бедра.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Дайте отдохнуть 10 минут, подавайте с запеченными овощами и соусом.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'горячие блюда'],
        rating: 4.9,
        reviews: 212,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            }
        },
        cuisineCategoriesList: {
            mediterranean: {
                id: 'mediterranean',
                title: 'Средиземноморская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    214: {
        id: 214,
        name: 'tsyplenok-s-apelsinami',
        title: 'Цыпленок с апельсинами',
        description: 'Ароматный цыпленок, запеченный с сочными апельсинами и пряными травами. Оригинальное сочетание вкусов.',
        cookTime: '1 час 15 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 325, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 20, unit: Unit.g },
            carbs: { value: 12, unit: Unit.g }
        },
        cuisine: 'Средиземноморская',
        servings: 6,
        ingredients: [
            { name: 'Цыпленок целый', amount: 1500, unit: Unit.g },
            { name: 'Апельсины', amount: 3, unit: Unit.pcs },
            { name: 'Чеснок', amount: 8, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 4, unit: Unit.tbsp },
            { name: 'Розмарин свежий', amount: 3, unit: Unit.bunch },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Мед', amount: 2, unit: Unit.tbsp },
            { name: 'Горчица дижонская', amount: 1, unit: Unit.tbsp },
            { name: 'Вино белое сухое', amount: 150, unit: Unit.ml },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте сок одного апельсина, оливковое масло, мед, горчицу и измельченные травы.'
            },
            {
                title: 'Шаг 2: Подготовка цыпленка',
                text: 'Натрите цыпленка солью и перцем снаружи и внутри.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Натрите цыпленка маринадом и оставьте на 1 час.'
            },
            {
                title: 'Шаг 4: Подготовка апельсинов',
                text: 'Нарежьте апельсины дольками, сохранив кожуру.'
            },
            {
                title: 'Шаг 5: Фаршировка',
                text: 'Наполните цыпленка дольками апельсина, чесноком и травами.'
            },
            {
                title: 'Шаг 6: Подготовка противня',
                text: 'Выложите нарезанный лук и оставшиеся апельсины на противень.'
            },
            {
                title: 'Шаг 7: Запекание',
                text: 'Запекайте при 190°C 45 минут под фольгой.'
            },
            {
                title: 'Шаг 8: Глазирование',
                text: 'Снимите фольгу, полейте вином и медом, запекайте еще 20-25 минут.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте готовность цыпленка в самой толстой части.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Дайте отдохнуть 10 минут, подавайте с запеченными апельсинами и соусом.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'горячие блюда'],
        rating: 4.8,
        reviews: 189,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            }
        },
        cuisineCategoriesList: {
            mediterranean: {
                id: 'mediterranean',
                title: 'Средиземноморская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'dairy-free': {
                id: 'dairy-free',
                title: 'Без молочных продуктов'
            }
        }
    },
    213: {
        id: 213,
        name: 'tsyplenok-po-domashnemu-s-kartoshkoy',
        title: 'Цыпленок по-домашнему с картошкой',
        description: 'Сочный цыпленок, запеченный с молодым картофелем и ароматными травами. Традиционное домашнее блюдо.',
        cookTime: '1 час 30 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 385, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 24, unit: Unit.g },
            carbs: { value: 18, unit: Unit.g }
        },
        cuisine: 'Русская',
        servings: 6,
        ingredients: [
            { name: 'Цыпленок целый', amount: 1500, unit: Unit.g },
            { name: 'Картофель молодой', amount: 1000, unit: Unit.g },
            { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
            { name: 'Чеснок', amount: 8, unit: Unit.pcs },
            { name: 'Масло сливочное', amount: 100, unit: Unit.g },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Тимьян свежий', amount: 3, unit: Unit.bunch },
            { name: 'Розмарин свежий', amount: 2, unit: Unit.bunch },
            { name: 'Лимон', amount: 1, unit: Unit.pcs },
            { name: 'Паприка', amount: 1, unit: Unit.tsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка цыпленка',
                text: 'Промойте и обсушите цыпленка, натрите солью и перцем снаружи и внутри.'
            },
            {
                title: 'Шаг 2: Приготовление масла',
                text: 'Смешайте размягченное сливочное масло с измельченными травами, чесноком и цедрой лимона.'
            },
            {
                title: 'Шаг 3: Натирание цыпленка',
                text: 'Аккуратно отделите кожу от мяса и натрите масляной смесью.'
            },
            {
                title: 'Шаг 4: Подготовка картофеля',
                text: 'Нарежьте картофель дольками, лук крупными кусками.'
            },
            {
                title: 'Шаг 5: Маринование картофеля',
                text: 'Смешайте картофель с растительным маслом, солью, перцем и паприкой.'
            },
            {
                title: 'Шаг 6: Подготовка противня',
                text: 'Выложите картофель и лук на противень, сверху положите цыпленка.'
            },
            {
                title: 'Шаг 7: Начало запекания',
                text: 'Запекайте при 180°C 45 минут под фольгой.'
            },
            {
                title: 'Шаг 8: Румяная корочка',
                text: 'Снимите фольгу и запекайте еще 30 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте готовность цыпленка и картофеля.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Дайте постоять 10 минут, подавайте с зеленью и дольками лимона.'
            }
        ],
        categories: ['курица', 'запеченные блюда', 'горячие блюда'],
        rating: 4.9,
        reviews: 234,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            }
        },
        cuisineCategoriesList: {
            russian: {
                id: 'russian',
                title: 'Русская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    212: {
        id: 212,
        name: 'file-kuritsy-s-kunzhutom',
        title: 'Филе курицы с кунжутом',
        description: 'Сочное куриное филе в хрустящей кунжутной панировке. Азиатский акцент в привычном блюде.',
        cookTime: '25 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 280, unit: Unit.g },
            protein: { value: 32, unit: Unit.g },
            fat: { value: 15, unit: Unit.g },
            carbs: { value: 9, unit: Unit.g }
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Кунжут', amount: 100, unit: Unit.g },
            { name: 'Соус соевый', amount: 4, unit: Unit.tbsp },
            { name: 'Масло кунжутное', amount: 2, unit: Unit.tbsp },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 3, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 20, unit: Unit.g },
            { name: 'Мед', amount: 1, unit: Unit.tbsp },
            { name: 'Лук зеленый', amount: 1, unit: Unit.bunch },
            { name: 'Кунжутное масло', amount: 1, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте соевый соус, измельченные чеснок и имбирь, мед.'
            },
            {
                title: 'Шаг 2: Маринование курицы',
                text: 'Замаринуйте нарезанное филе на 20-30 минут.'
            },
            {
                title: 'Шаг 3: Подготовка панировки',
                text: 'Обжарьте кунжут на сухой сковороде до золотистого цвета.'
            },
            {
                title: 'Шаг 4: Панировка',
                text: 'Обваляйте каждый кусочек курицы в кунжуте.'
            },
            {
                title: 'Шаг 5: Разогрев сковороды',
                text: 'Нагрейте смесь растительного и кунжутного масла.'
            },
            {
                title: 'Шаг 6: Обжарка',
                text: 'Обжарьте курицу до золотистой корочки с двух сторон.'
            },
            {
                title: 'Шаг 7: Доведение до готовности',
                text: 'Уменьшите огонь и готовьте еще 5-7 минут.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Убедитесь, что курица полностью прожарилась.'
            },
            {
                title: 'Шаг 9: Финальный штрих',
                text: 'Сбрызните готовое блюдо кунжутным маслом.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте, посыпав рубленым зеленым луком.'
            }
        ],
        categories: ['курица', 'азиатская кухня', 'горячие блюда'],
        rating: 4.8,
        reviews: 178,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            asian: {
                id: 'asian',
                title: 'Азиатские блюда'
            }
        },
        cuisineCategoriesList: {
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'dairy-free': {
                id: 'dairy-free',
                title: 'Без молочных продуктов'
            }
        }
    },
    211: {
        id: 211,
        name: 'file-kuritsy-s-kabachkami',
        title: 'Филе курицы с кабачками',
        description: 'Легкое и полезное блюдо из нежного куриного филе с молодыми кабачками. Идеально подходит для правильного питания.',
        cookTime: '30 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 245, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 12, unit: Unit.g },
            carbs: { value: 8, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Кабачки молодые', amount: 500, unit: Unit.g },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Базилик свежий', amount: 1, unit: Unit.bunch },
            { name: 'Лимон', amount: 1, unit: Unit.pcs },
            { name: 'Перец болгарский', amount: 1, unit: Unit.pcs },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе на средние кусочки, посолите и поперчите.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Нарежьте кабачки кружочками, лук полукольцами, перец соломкой.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте курицу на оливковом масле до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление овощей',
                text: 'В той же сковороде обжарьте лук и чеснок до прозрачности.'
            },
            {
                title: 'Шаг 5: Добавление кабачков',
                text: 'Добавьте кабачки и болгарский перец, готовьте 5-7 минут.'
            },
            {
                title: 'Шаг 6: Соединение',
                text: 'Верните курицу в сковороду к овощам.'
            },
            {
                title: 'Шаг 7: Специи и травы',
                text: 'Добавьте измельченные травы и сок половины лимона.'
            },
            {
                title: 'Шаг 8: Финальное приготовление',
                text: 'Тушите все вместе 5-7 минут до готовности кабачков.'
            },
            {
                title: 'Шаг 9: Проверка вкуса',
                text: 'При необходимости добавьте соль и перец.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежими травами и дольками лимона.'
            }
        ],
        categories: ['курица', 'овощи', 'диетические блюда', 'горячие блюда'],
        rating: 4.7,
        reviews: 156,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            vegetables: {
                id: 'vegetables',
                title: 'Овощные блюда'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'low-calorie': {
                id: 'low-calorie',
                title: 'Низкокалорийная диета'
            },
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            }
        }
    },
    210: {
        id: 210,
        name: 'file-kuritsy-s-brokkoli-v-slivkah',
        title: 'Филе курицы с брокколи в сливках',
        description: 'Нежное куриное филе с брокколи в сливочном соусе. Полезное и вкусное блюдо для всей семьи.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 285, unit: Unit.g },
            protein: { value: 32, unit: Unit.g },
            fat: { value: 16, unit: Unit.g },
            carbs: { value: 8, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриное филе', amount: 600, unit: Unit.g },
            { name: 'Брокколи', amount: 500, unit: Unit.g },
            { name: 'Сливки 33%', amount: 300, unit: Unit.ml },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Масло сливочное', amount: 30, unit: Unit.g },
            { name: 'Масло оливковое', amount: 2, unit: Unit.tbsp },
            { name: 'Сыр пармезан', amount: 50, unit: Unit.g },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Мускатный орех', amount: 0.25, unit: Unit.tsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Нарежьте куриное филе на средние кусочки.'
            },
            {
                title: 'Шаг 2: Подготовка овощей',
                text: 'Разделите брокколи на соцветия, нарежьте лук и чеснок.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте курицу на оливковом масле до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Приготовление овощей',
                text: 'Обжарьте лук и чеснок на сливочном масле.'
            },
            {
                title: 'Шаг 5: Добавление брокколи',
                text: 'Добавьте брокколи и готовьте 5 минут.'
            },
            {
                title: 'Шаг 6: Соус',
                text: 'Влейте сливки, добавьте тертый мускатный орех.'
            },
            {
                title: 'Шаг 7: Соединение',
                text: 'Добавьте курицу к овощам в соусе.'
            },
            {
                title: 'Шаг 8: Финальное приготовление',
                text: 'Тушите все вместе 7-10 минут до готовности брокколи.'
            },
            {
                title: 'Шаг 9: Добавление сыра',
                text: 'Посыпьте тертым пармезаном и дайте ему расплавиться.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежим тимьяном.'
            }
        ],
        categories: ['курица', 'овощи', 'горячие блюда'],
        rating: 4.8,
        reviews: 167,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            vegetables: {
                id: 'vegetables',
                title: 'Овощные блюда'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    209: {
        id: 209,
        name: 'kurinye-nozhki-s-medom-i-pertsem',
        title: 'Куриные ножки с медом и перцем',
        description: 'Пикантные куриные ножки в медово-перечном маринаде. Идеальное сочетание сладкого и острого вкусов.',
        cookTime: '55 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 305, unit: Unit.g },
            protein: { value: 26, unit: Unit.g },
            fat: { value: 19, unit: Unit.g },
            carbs: { value: 12, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриные ножки', amount: 8, unit: Unit.pcs },
            { name: 'Мед', amount: 4, unit: Unit.tbsp },
            { name: 'Соус соевый', amount: 3, unit: Unit.tbsp },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 6, unit: Unit.pcs },
            { name: 'Перец чили', amount: 2, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 30, unit: Unit.g },
            { name: 'Перец черный горошком', amount: 1, unit: Unit.tbsp },
            { name: 'Перец красный молотый', amount: 1, unit: Unit.tsp },
            { name: 'Кориандр молотый', amount: 1, unit: Unit.tsp },
            { name: 'Лимон', amount: 1, unit: Unit.pcs },
            { name: 'Соль', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте мед, соевый соус, измельченные чеснок, имбирь и чили.'
            },
            {
                title: 'Шаг 2: Добавление специй',
                text: 'Добавьте в маринад все специи и сок половины лимона.'
            },
            {
                title: 'Шаг 3: Подготовка курицы',
                text: 'Сделайте на ножках несколько надрезов до кости.'
            },
            {
                title: 'Шаг 4: Маринование',
                text: 'Замаринуйте ножки на 2-3 часа или на ночь.'
            },
            {
                title: 'Шаг 5: Разогрев духовки',
                text: 'Разогрейте духовку до 190°C.'
            },
            {
                title: 'Шаг 6: Подготовка противня',
                text: 'Выложите ножки на противень с бортиками.'
            },
            {
                title: 'Шаг 7: Первый этап запекания',
                text: 'Запекайте 25 минут, периодически поливая маринадом.'
            },
            {
                title: 'Шаг 8: Второй этап',
                text: 'Переверните ножки и запекайте еще 20 минут.'
            },
            {
                title: 'Шаг 9: Финальное глазирование',
                text: 'Смажьте ножки оставшимся маринадом и запекайте 5-7 минут.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячими с дольками лимона.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'острые блюда'],
        rating: 4.8,
        reviews: 203,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            spicy: {
                id: 'spicy',
                title: 'Острые блюда'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'dairy-free': {
                id: 'dairy-free',
                title: 'Без молочных продуктов'
            }
        }
    },
    208: {
        id: 208,
        name: 'kurinye-nozhki-v-duhovke-s-gorchitsey',
        title: 'Куриные ножки в духовке с горчицей',
        description: 'Сочные куриные ножки, запеченные в духовке с ароматной горчичной корочкой. Простое и вкусное блюдо для семейного ужина.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 290, unit: Unit.g },
            protein: { value: 27, unit: Unit.g },
            fat: { value: 18, unit: Unit.g },
            carbs: { value: 5, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриные ножки', amount: 8, unit: Unit.pcs },
            { name: 'Горчица дижонская', amount: 4, unit: Unit.tbsp },
            { name: 'Масло оливковое', amount: 3, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 6, unit: Unit.pcs },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Розмарин свежий', amount: 2, unit: Unit.bunch },
            { name: 'Лимон', amount: 1, unit: Unit.pcs },
            { name: 'Мед', amount: 1, unit: Unit.tbsp },
            { name: 'Паприка', amount: 1, unit: Unit.tsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте горчицу, оливковое масло, измельченный чеснок, мед и специи.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Промойте и обсушите куриные ножки.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Натрите ножки маринадом и оставьте на 30 минут.'
            },
            {
                title: 'Шаг 4: Разогрев духовки',
                text: 'Разогрейте духовку до 180°C.'
            },
            {
                title: 'Шаг 5: Подготовка противня',
                text: 'Выложите ножки на противень, добавьте веточки трав.'
            },
            {
                title: 'Шаг 6: Начало запекания',
                text: 'Запекайте 30 минут под фольгой.'
            },
            {
                title: 'Шаг 7: Продолжение запекания',
                text: 'Снимите фольгу и запекайте еще 20 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Проверьте готовность, проткнув ножку у кости.'
            },
            {
                title: 'Шаг 9: Отдых',
                text: 'Дайте постоять 10 минут перед подачей.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте с дольками лимона и свежими травами.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'запеченные блюда'],
        rating: 4.7,
        reviews: 189,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    207: {
        id: 207,
        name: 'kurinye-krylyshki-po-taiski',
        title: 'Куриные крылышки по-тайски',
        description: 'Ароматные куриные крылышки в тайском стиле с лемонграссом, имбирем и кокосовым молоком. Экзотическое сочетание вкусов.',
        cookTime: '45 минут',
        difficulty: '3/5',
        nutrition: {
            calories: { value: 315, unit: Unit.g },
            protein: { value: 23, unit: Unit.g },
            fat: { value: 22, unit: Unit.g },
            carbs: { value: 10, unit: Unit.g }
        },
        cuisine: 'Тайская',
        servings: 4,
        ingredients: [
            { name: 'Куриные крылышки', amount: 1000, unit: Unit.g },
            { name: 'Лемонграсс', amount: 2, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 40, unit: Unit.g },
            { name: 'Чеснок', amount: 6, unit: Unit.pcs },
            { name: 'Молоко кокосовое', amount: 400, unit: Unit.ml },
            { name: 'Соус рыбный', amount: 3, unit: Unit.tbsp },
            { name: 'Соус устричный', amount: 2, unit: Unit.tbsp },
            { name: 'Перец чили', amount: 3, unit: Unit.pcs },
            { name: 'Лайм', amount: 2, unit: Unit.pcs },
            { name: 'Листья кафир-лайма', amount: 4, unit: Unit.pcs },
            { name: 'Базилик тайский', amount: 1, unit: Unit.bunch },
            { name: 'Кориандр свежий', amount: 1, unit: Unit.bunch },
            { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
            { name: 'Сахар коричневый', amount: 2, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка крылышек',
                text: 'Разрежьте крылышки по суставам, промойте и обсушите.'
            },
            {
                title: 'Шаг 2: Приготовление пасты',
                text: 'Измельчите лемонграсс, имбирь, чеснок и чили в пасту.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Смешайте пасту с рыбным и устричным соусами, замаринуйте крылышки на 2 часа.'
            },
            {
                title: 'Шаг 4: Подготовка соуса',
                text: 'Смешайте кокосовое молоко с коричневым сахаром и соком лайма.'
            },
            {
                title: 'Шаг 5: Обжарка крылышек',
                text: 'Обжарьте крылышки на растительном масле до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Добавление соуса',
                text: 'Добавьте кокосовый соус и листья кафир-лайма.'
            },
            {
                title: 'Шаг 7: Тушение',
                text: 'Тушите на медленном огне 15-20 минут до загустения соуса.'
            },
            {
                title: 'Шаг 8: Добавление трав',
                text: 'Добавьте порванные листья тайского базилика.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Готовьте еще 5 минут, чтобы соус пропитал крылышки.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте, украсив кориандром и дольками лайма.'
            }
        ],
        categories: ['курица', 'тайская кухня', 'острые блюда'],
        rating: 4.8,
        reviews: 167,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            spicy: {
                id: 'spicy',
                title: 'Острые блюда'
            }
        },
        cuisineCategoriesList: {
            thai: {
                id: 'thai',
                title: 'Тайская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'dairy-free': {
                id: 'dairy-free',
                title: 'Без молочных продуктов'
            }
        }
    },
    206: {
        id: 206,
        name: 'kurinye-krylyshki-v-souse-chili',
        title: 'Куриные крылышки в соусе чили',
        description: 'Острые и ароматные куриные крылышки в пикантном соусе чили. Идеальная закуска для вечеринки или просмотра спортивных матчей.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 310, unit: Unit.g },
            protein: { value: 24, unit: Unit.g },
            fat: { value: 21, unit: Unit.g },
            carbs: { value: 9, unit: Unit.g }
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            { name: 'Куриные крылышки', amount: 1000, unit: Unit.g },
            { name: 'Соус чили сладкий', amount: 200, unit: Unit.ml },
            { name: 'Соус соевый', amount: 4, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 6, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 30, unit: Unit.g },
            { name: 'Мед', amount: 2, unit: Unit.tbsp },
            { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
            { name: 'Перец чили свежий', amount: 2, unit: Unit.pcs },
            { name: 'Кунжут', amount: 2, unit: Unit.tbsp },
            { name: 'Лук зеленый', amount: 1, unit: Unit.bunch },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка крылышек',
                text: 'Промойте и обсушите крылышки, разрежьте по суставам.'
            },
            {
                title: 'Шаг 2: Маринад',
                text: 'Смешайте соевый соус, измельченные чеснок и имбирь.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Замаринуйте крылышки на 30 минут.'
            },
            {
                title: 'Шаг 4: Разогрев духовки',
                text: 'Разогрейте духовку до 200°C.'
            },
            {
                title: 'Шаг 5: Запекание',
                text: 'Выложите крылышки на противень и запекайте 20 минут.'
            },
            {
                title: 'Шаг 6: Приготовление соуса',
                text: 'Смешайте соус чили, мед и измельченный свежий чили.'
            },
            {
                title: 'Шаг 7: Первое покрытие',
                text: 'Смажьте крылышки соусом и запекайте еще 10 минут.'
            },
            {
                title: 'Шаг 8: Финальное покрытие',
                text: 'Повторно смажьте соусом и запекайте 5-7 минут до карамелизации.'
            },
            {
                title: 'Шаг 9: Обжарка кунжута',
                text: 'Обжарьте кунжут на сухой сковороде до золотистого цвета.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте крылышки кунжутом и нарезанным зеленым луком.'
            }
        ],
        categories: ['курица', 'закуски', 'острые блюда'],
        rating: 4.9,
        reviews: 234,
        dishCategoriesList: {
            appetizers: {
                id: 'appetizers',
                title: 'Закуски'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            spicy: {
                id: 'spicy',
                title: 'Острые блюда'
            }
        },
        cuisineCategoriesList: {
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'gluten-free': {
                id: 'gluten-free',
                title: 'Без глютена'
            }
        }
    },
    205: {
        id: 205,
        name: 'kurinye-bedra-s-chesnokom-i-sousom',
        title: 'Куриные бедра с чесноком и соусом',
        description: 'Ароматные куриные бедра в чесночно-сливочном соусе. Нежное и сочное мясо с насыщенным вкусом.',
        cookTime: '45 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 320, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 22, unit: Unit.g },
            carbs: { value: 6, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра', amount: 800, unit: Unit.g },
            { name: 'Чеснок', amount: 8, unit: Unit.pcs },
            { name: 'Сливки 33%', amount: 200, unit: Unit.ml },
            { name: 'Масло сливочное', amount: 50, unit: Unit.g },
            { name: 'Масло оливковое', amount: 2, unit: Unit.tbsp },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Розмарин свежий', amount: 1, unit: Unit.bunch },
            { name: 'Бульон куриный', amount: 200, unit: Unit.ml },
            { name: 'Вино белое сухое', amount: 100, unit: Unit.ml },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка курицы',
                text: 'Посолите и поперчите куриные бедра.'
            },
            {
                title: 'Шаг 2: Подготовка чеснока',
                text: 'Очистите и крупно нарежьте чеснок.'
            },
            {
                title: 'Шаг 3: Обжарка курицы',
                text: 'Обжарьте бедра на оливковом масле до золотистой корочки.'
            },
            {
                title: 'Шаг 4: Добавление чеснока',
                text: 'Добавьте чеснок и обжаривайте еще 2-3 минуты.'
            },
            {
                title: 'Шаг 5: Добавление вина',
                text: 'Влейте вино и дайте алкоголю выпариться.'
            },
            {
                title: 'Шаг 6: Приготовление соуса',
                text: 'Добавьте бульон, сливки и травы.'
            },
            {
                title: 'Шаг 7: Тушение',
                text: 'Тушите на медленном огне 20-25 минут.'
            },
            {
                title: 'Шаг 8: Загущение соуса',
                text: 'Добавьте сливочное масло для загущения соуса.'
            },
            {
                title: 'Шаг 9: Финальное приготовление',
                text: 'Доведите соус до желаемой консистенции.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, полив соусом и украсив свежими травами.'
            }
        ],
        categories: ['курица', 'горячие блюда', 'соусы'],
        rating: 4.8,
        reviews: 178,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            sauce: {
                id: 'sauce',
                title: 'Блюда с соусом'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    },
    204: {
        id: 204,
        name: 'kurinye-bedra-s-kabachkami',
        title: 'Куриные бедра с кабачками',
        description: 'Сочные куриные бедра, запеченные с молодыми кабачками и ароматными травами. Легкое и полезное блюдо для всей семьи.',
        cookTime: '50 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 295, unit: Unit.g },
            protein: { value: 26, unit: Unit.g },
            fat: { value: 19, unit: Unit.g },
            carbs: { value: 8, unit: Unit.g }
        },
        cuisine: 'Европейская',
        servings: 4,
        ingredients: [
            { name: 'Куриные бедра', amount: 800, unit: Unit.g },
            { name: 'Кабачки молодые', amount: 500, unit: Unit.g },
            { name: 'Чеснок', amount: 6, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 4, unit: Unit.tbsp },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Розмарин свежий', amount: 2, unit: Unit.bunch },
            { name: 'Лимон', amount: 1, unit: Unit.pcs },
            { name: 'Паприка', amount: 1, unit: Unit.tsp },
            { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте оливковое масло, измельченный чеснок, тимьян, розмарин, сок лимона и специи.'
            },
            {
                title: 'Шаг 2: Маринование курицы',
                text: 'Натрите куриные бедра маринадом и оставьте на 30 минут.'
            },
            {
                title: 'Шаг 3: Подготовка овощей',
                text: 'Нарежьте кабачки кружочками, лук полукольцами.'
            },
            {
                title: 'Шаг 4: Подготовка противня',
                text: 'Выложите овощи на противень, сбрызните маслом.'
            },
            {
                title: 'Шаг 5: Выкладка курицы',
                text: 'Положите маринованные бедра поверх овощей.'
            },
            {
                title: 'Шаг 6: Начало запекания',
                text: 'Поставьте в разогретую до 200°C духовку.'
            },
            {
                title: 'Шаг 7: Первый этап',
                text: 'Запекайте 25 минут под фольгой.'
            },
            {
                title: 'Шаг 8: Второй этап',
                text: 'Снимите фольгу и запекайте еще 15-20 минут до золотистой корочки.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте готовность курицы и овощей.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Подавайте горячим, украсив свежими травами.'
            }
        ],
        categories: ['курица', 'овощи', 'запеченные блюда', 'горячие блюда'],
        rating: 4.7,
        reviews: 156,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            baked: {
                id: 'baked',
                title: 'Запеченные блюда'
            }
        },
        cuisineCategoriesList: {
            european: {
                id: 'european',
                title: 'Европейская кухня'
            }
        },
        dietCategoriesList: {
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            },
            'gluten-free': {
                id: 'gluten-free',
                title: 'Без глютена'
            }
        }
    },
    203: {
        id: 203,
        name: 'kurinaya-grudka-s-medom-i-soevym-sousom',
        title: 'Куриная грудка с медом и соевым соусом',
        description: 'Сочная куриная грудка в медово-соевом маринаде. Идеальное сочетание сладкого и соленого вкусов.',
        cookTime: '35 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 285, unit: Unit.g },
            protein: { value: 31, unit: Unit.g },
            fat: { value: 11, unit: Unit.g },
            carbs: { value: 18, unit: Unit.g }
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            { name: 'Куриная грудка', amount: 600, unit: Unit.g },
            { name: 'Соус соевый', amount: 4, unit: Unit.tbsp },
            { name: 'Мед', amount: 3, unit: Unit.tbsp },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 20, unit: Unit.g },
            { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
            { name: 'Масло кунжутное', amount: 1, unit: Unit.tbsp },
            { name: 'Уксус рисовый', amount: 1, unit: Unit.tbsp },
            { name: 'Кунжут', amount: 2, unit: Unit.tbsp },
            { name: 'Лук зеленый', amount: 1, unit: Unit.bunch },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте соевый соус, мед, измельченные чеснок и имбирь, кунжутное масло и рисовый уксус.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте грудку на ровные кусочки толщиной 1-1.5 см.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Замаринуйте курицу в приготовленном соусе на 20-30 минут.'
            },
            {
                title: 'Шаг 4: Подготовка сковороды',
                text: 'Разогрейте сковороду с растительным маслом.'
            },
            {
                title: 'Шаг 5: Обжарка курицы',
                text: 'Обжарьте курицу на среднем огне до золотистой корочки.'
            },
            {
                title: 'Шаг 6: Добавление маринада',
                text: 'Влейте оставшийся маринад в сковороду.'
            },
            {
                title: 'Шаг 7: Приготовление соуса',
                text: 'Готовьте, пока соус не загустеет и не покроет курицу глазурью.'
            },
            {
                title: 'Шаг 8: Проверка готовности',
                text: 'Убедитесь, что курица полностью готова внутри.'
            },
            {
                title: 'Шаг 9: Обжарка кунжута',
                text: 'Слегка обжарьте кунжут на сухой сковороде.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте курицу кунжутом и нарезанным зеленым луком.'
            }
        ],
        categories: ['курица', 'азиатская кухня', 'горячие блюда'],
        rating: 4.8,
        reviews: 212,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            }
        },
        cuisineCategoriesList: {
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-fat': {
                id: 'low-fat',
                title: 'Низкокалорийная диета'
            }
        }
    },
    202: {
        id: 202,
        name: 'kurinaya-grudka-v-apelsinovom-souse',
        title: 'Куриная грудка в апельсиновом соусе',
        description: 'Нежная куриная грудка в ароматном апельсиновом соусе с медом и имбирем. Легкое и вкусное блюдо с азиатскими нотками.',
        cookTime: '40 минут',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 275, unit: Unit.g },
            protein: { value: 29, unit: Unit.g },
            fat: { value: 12, unit: Unit.g },
            carbs: { value: 16, unit: Unit.g }
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            { name: 'Куриная грудка', amount: 600, unit: Unit.g },
            { name: 'Апельсины', amount: 3, unit: Unit.pcs },
            { name: 'Имбирь свежий', amount: 30, unit: Unit.g },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Соус соевый', amount: 3, unit: Unit.tbsp },
            { name: 'Мед', amount: 2, unit: Unit.tbsp },
            { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
            { name: 'Крахмал кукурузный', amount: 1, unit: Unit.tbsp },
            { name: 'Перец чили', amount: 1, unit: Unit.pcs },
            { name: 'Лук зеленый', amount: 1, unit: Unit.bunch },
            { name: 'Кунжут', amount: 2, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка соуса',
                text: 'Выжмите сок из апельсинов, добавьте мед и соевый соус.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Нарежьте грудку тонкими медальонами, посолите и поперчите.'
            },
            {
                title: 'Шаг 3: Подготовка специй',
                text: 'Измельчите чеснок, имбирь и чили.'
            },
            {
                title: 'Шаг 4: Обжарка курицы',
                text: 'Обжарьте курицу до золотистой корочки.'
            },
            {
                title: 'Шаг 5: Приготовление соуса',
                text: 'Обжарьте чеснок, имбирь и чили.'
            },
            {
                title: 'Шаг 6: Соединение',
                text: 'Добавьте апельсиновый соус к курице.'
            },
            {
                title: 'Шаг 7: Загущение',
                text: 'Добавьте крахмал, разведенный в воде.'
            },
            {
                title: 'Шаг 8: Финальное приготовление',
                text: 'Готовьте до загустения соуса.'
            },
            {
                title: 'Шаг 9: Проверка вкуса',
                text: 'Отрегулируйте вкус солью и перцем.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Посыпьте кунжутом и зеленым луком.'
            }
        ],
        categories: ['курица', 'азиатская кухня', 'горячие блюда'],
        rating: 4.8,
        reviews: 189,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            }
        },
        cuisineCategoriesList: {
            asian: {
                id: 'asian',
                title: 'Азиатская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-fat': {
                id: 'low-fat',
                title: 'Низкокалорийная диета'
            }
        }
    },
    201: {
        id: 201,
        name: 'kuritsa-gril-s-rozmarinom',
        title: 'Курица-гриль с розмарином',
        description: 'Сочная курица на гриле с ароматным розмарином и чесноком. Идеальное блюдо для летнего барбекю или домашнего ужина.',
        cookTime: '1 час',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 305, unit: Unit.g },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 18, unit: Unit.g },
            carbs: { value: 8, unit: Unit.g }
        },
        cuisine: 'Средиземноморская',
        servings: 4,
        ingredients: [
            { name: 'Курица целая', amount: 1500, unit: Unit.g },
            { name: 'Розмарин свежий', amount: 4, unit: Unit.bunch },
            { name: 'Чеснок', amount: 8, unit: Unit.pcs },
            { name: 'Лимон', amount: 2, unit: Unit.pcs },
            { name: 'Масло оливковое', amount: 6, unit: Unit.tbsp },
            { name: 'Тимьян свежий', amount: 2, unit: Unit.bunch },
            { name: 'Паприка копченая', amount: 1, unit: Unit.tsp },
            { name: 'Перец красный молотый', amount: 0.5, unit: Unit.tsp },
            { name: 'Орегано сушеный', amount: 1, unit: Unit.tsp },
            { name: 'Горчица дижонская', amount: 2, unit: Unit.tbsp },
            { name: 'Мед', amount: 1, unit: Unit.tbsp },
            { name: 'Соль', amount: 0, unit: Unit.to_taste },
            { name: 'Перец черный молотый', amount: 0, unit: Unit.to_taste }
        ],
        steps: [
            {
                title: 'Шаг 1: Подготовка маринада',
                text: 'Смешайте оливковое масло, измельченный чеснок, листья розмарина, сок лимона, мед и специи.'
            },
            {
                title: 'Шаг 2: Подготовка курицы',
                text: 'Разрежьте курицу вдоль грудки, раскройте и слегка отбейте.'
            },
            {
                title: 'Шаг 3: Маринование',
                text: 'Натрите курицу маринадом, оставьте на 2-4 часа в холодильнике.'
            },
            {
                title: 'Шаг 4: Подготовка гриля',
                text: 'Разогрейте гриль до средней температуры.'
            },
            {
                title: 'Шаг 5: Начало готовки',
                text: 'Выложите курицу на гриль кожей вниз.'
            },
            {
                title: 'Шаг 6: Первый этап',
                text: 'Готовьте 15-20 минут, периодически смазывая маринадом.'
            },
            {
                title: 'Шаг 7: Переворот',
                text: 'Переверните курицу, продолжайте готовить.'
            },
            {
                title: 'Шаг 8: Финальный этап',
                text: 'Готовьте еще 15-20 минут до готовности.'
            },
            {
                title: 'Шаг 9: Проверка готовности',
                text: 'Проверьте готовность термометром или надрезом.'
            },
            {
                title: 'Шаг 10: Подача',
                text: 'Дайте отдохнуть 10 минут, украсьте свежим розмарином и лимоном.'
            }
        ],
        categories: ['курица', 'гриль', 'средиземноморская кухня', 'горячие блюда'],
        rating: 4.9,
        reviews: 245,
        dishCategoriesList: {
            'main-dishes': {
                id: 'main-dishes',
                title: 'Основные блюда'
            }
        },
        dishCategoriesSubList: {
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            grill: {
                id: 'grill',
                title: 'Блюда на гриле'
            }
        },
        cuisineCategoriesList: {
            mediterranean: {
                id: 'mediterranean',
                title: 'Средиземноморская кухня'
            }
        },
        dietCategoriesList: {
            'high-protein': {
                id: 'high-protein',
                title: 'Высокопротеиновая диета'
            },
            'low-carb': {
                id: 'low-carb',
                title: 'Низкоуглеводная диета'
            }
        }
    }
};
