export enum Unit {
  g = 'г',
  ml = 'мл',
  pcs = 'шт.',
  tbsp = 'ст. л.',
  tsp = 'ч. л.',
  to_taste = 'по вкусу',
  kcal = 'ккал',
  l = 'л',
  pinch = 'щепотка',
}

// Интерфейс для питательной ценности (для кальянов не применимо, но сохраняем структуру)
interface Nutrition {
  calories: { value: number; unit: Unit };
  protein: { value: number; unit: Unit };
  fat: { value: number; unit: Unit };
  carbs: { value: number; unit: Unit };
}

// Интерфейс для рецепта кальяна
export interface Recipe {
  id: number;
  name: string;
  title: string;
  description: string;
  cookTime: string;
  difficulty: string;
  nutrition: Nutrition;
  cuisine: string;
  servings: number;
  ingredients: { name: string; amount: number; unit: Unit }[];
  steps: { title: string; text: string; image?: string }[];
  imageMain?: string;
  categories: string[];
  rating: number;
  reviews: number;
  comments?: { user: string; date: string; text: string; likes: number; replies: number }[];
  dishCategoriesList: { [key: string]: { id: string; title: string } };
  dishCategoriesSubList: { [key: string]: { id: string; title: string } };
  cuisineCategoriesList: { [key: string]: { id: string; title: string } };
  dietCategoriesList: { [key: string]: { id: string; title: string } };
}

// Рецепты кальянов
export const recipes: Record<number, Recipe> = {
  1: {
    id: 1,
    name: 'refreshing-lemon-mint',
    title: 'Освежающий лимон с мятой',
    description: 'Классическая освежающая смесь с ярким цитрусовым вкусом и прохладной мятой. Идеально подходит для жаркого дня.',
    cookTime: '10 минут',
    difficulty: '1/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Арабская',
    servings: 4,
    ingredients: [
      { name: 'Табак лимон', amount: 15, unit: Unit.g },
      { name: 'Табак мята', amount: 10, unit: Unit.g },
      { name: 'Лёд', amount: 200, unit: Unit.g },
    ],
    steps: [
      {
        image: '/hookah/lemon-mint-step1.webp',
        title: 'Подготовка табака',
        text: 'Смешайте лимонный и мятный табак в соотношении 3:2. Тщательно перемешайте для равномерного распределения вкусов.'
      },
      {
        image: '/hookah/lemon-mint-step2.webp',
        title: 'Забивка чаши',
        text: 'Рыхло забейте смесь в чашу, не утрамбовывая. Уровень табака должен быть чуть ниже края чаши.'
      },
      {
        image: '/hookah/lemon-mint-step3.webp',
        title: 'Подготовка углей',
        text: 'Разожгите 3-4 кокосовых угля до полного покраснения. Разместите их равномерно по краям чаши.'
      }
    ],
    imageMain: '/hookah/lemon-mint-main.webp',
    categories: ['освежающие', 'фруктовые', 'мятные', 'легкие', 'для начинающих'],
    rating: 4.7,
    reviews: 156,
    dishCategoriesList: {
      'light-mixes': {
        id: 'light-mixes',
        title: 'Легкие смеси'
      }
    },
    dishCategoriesSubList: {
      'citrus': {
        id: 'citrus',
        title: 'Цитрусовые'
      },
    },
    cuisineCategoriesList: {
      'arabic': {
        id: 'arabic',
        title: 'Арабская традиция'
      },
    },
    dietCategoriesList: {
      'beginner': {
        id: 'beginner',
        title: 'Для начинающих'
      },
    }
  },

  2: {
    id: 2,
    name: 'tropical-paradise',
    title: 'Тропический рай',
    description: 'Экзотическая смесь манго, ананаса и кокоса, которая перенесет вас на тропический остров.',
    cookTime: '15 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Карибская',
    servings: 4,
    ingredients: [
      { name: 'Табак манго', amount: 12, unit: Unit.g },
      { name: 'Табак ананас', amount: 8, unit: Unit.g },
      { name: 'Табак кокос', amount: 5, unit: Unit.g },
    ],
    steps: [
      {
        image: '/hookah/tropical-step1.webp',
        title: 'Смешивание табаков',
        text: 'Соедините манго, ананас и кокос в пропорции 12:8:5. Аккуратно перемешайте, сохраняя структуру табака.'
      },
      {
        image: '/hookah/tropical-step2.webp',
        title: 'Забивка чаши',
        text: 'Равномерно распределите смесь в чаше воронкообразным способом, оставив небольшое углубление в центре.'
      }
    ],
    imageMain: '/hookah/tropical-main.webp',
    categories: ['фруктовые', 'сладкие', 'экзотические', 'летние'],
    rating: 4.5,
    reviews: 89,
    dishCategoriesList: {
      'fruity-mixes': {
        id: 'fruity-mixes',
        title: 'Фруктовые смеси'
      }
    },
    dishCategoriesSubList: {
      'tropical': {
        id: 'tropical',
        title: 'Тропические'
      },
    },
    cuisineCategoriesList: {
      'caribbean': {
        id: 'caribbean',
        title: 'Карибская'
      },
    },
    dietCategoriesList: {
      'sweet': {
        id: 'sweet',
        title: 'Сладкие'
      },
    }
  },

  3: {
    id: 3,
    name: 'berry-blast',
    title: 'Ягодный взрыв',
    description: 'Насыщенная смесь лесных ягод: черника, малина и ежевика создают богатый ягодный букет.',
    cookTime: '12 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Европейская',
    servings: 4,
    ingredients: [
      { name: 'Табак черника', amount: 10, unit: Unit.g },
      { name: 'Табак малина', amount: 8, unit: Unit.g },
      { name: 'Табак ежевика', amount: 7, unit: Unit.g },
    ],
    steps: [
      {
        image: '/hookah/berry-step1.webp',
        title: 'Подготовка ягодной смеси',
        text: 'Смешайте черничный, малиновый и ежевичный табак. Дайте смеси настояться 5 минут для лучшего раскрытия вкуса.'
      }
    ],
    imageMain: '/hookah/berry-main.webp',
    categories: ['ягодные', 'насыщенные', 'кислые', 'освежающие'],
    rating: 4.6,
    reviews: 134,
    dishCategoriesList: {
      'berry-mixes': {
        id: 'berry-mixes',
        title: 'Ягодные смеси'
      }
    },
    dishCategoriesSubList: {
      'forest-berries': {
        id: 'forest-berries',
        title: 'Лесные ягоды'
      },
    },
    cuisineCategoriesList: {
      'european': {
        id: 'european',
        title: 'Европейская'
      },
    },
    dietCategoriesList: {
      'tart': {
        id: 'tart',
        title: 'Кислые'
      },
    }
  },

  4: {
    id: 4,
    name: 'vanilla-coffee',
    title: 'Ванильный кофе',
    description: 'Изысканное сочетание ароматного кофе с нежными нотками ванили. Идеально для вечернего курения.',
    cookTime: '20 минут',
    difficulty: '3/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Французская',
    servings: 3,
    ingredients: [
      { name: 'Табак кофе', amount: 18, unit: Unit.g },
      { name: 'Табак ваниль', amount: 7, unit: Unit.g },
    ],
    steps: [
      {
        image: '/hookah/vanilla-coffee-step1.webp',
        title: 'Смешивание ароматов',
        text: 'Соедините кофейный и ванильный табак в пропорции 18:7. Тщательно перемешайте для получения однородной смеси.'
      },
      {
        image: '/hookah/vanilla-coffee-step2.webp',
        title: 'Особая забивка',
        text: 'Используйте плотную забивку для раскрытия глубоких кофейных нот. Утрамбуйте табак, но оставьте воздушные каналы.'
      }
    ],
    imageMain: '/hookah/vanilla-coffee-main.webp',
    categories: ['десертные', 'кофейные', 'вечерние', 'насыщенные', 'гурманские'],
    rating: 4.8,
    reviews: 201,
    dishCategoriesList: {
      'dessert-mixes': {
        id: 'dessert-mixes',
        title: 'Десертные смеси'
      }
    },
    dishCategoriesSubList: {
      'coffee': {
        id: 'coffee',
        title: 'Кофейные'
      },
    },
    cuisineCategoriesList: {
      'french': {
        id: 'french',
        title: 'Французская'
      },
    },
    dietCategoriesList: {
      'gourmet': {
        id: 'gourmet',
        title: 'Гурманские'
      },
    }
  },

  5: {
    id: 5,
    name: 'double-apple-cinnamon',
    title: 'Двойное яблоко с корицей',
    description: 'Классическое двойное яблоко, дополненное теплой корицей. Традиционный вкус с современным акцентом.',
    cookTime: '15 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Турецкая',
    servings: 4,
    ingredients: [
      { name: 'Табак двойное яблоко', amount: 20, unit: Unit.g },
      { name: 'Табак корица', amount: 5, unit: Unit.g },
    ],
    steps: [
      {
        image: '/hookah/apple-cinnamon-step1.webp',
        title: 'Классическая основа',
        text: 'Возьмите качественный табак двойное яблоко как основу. Добавьте немного корицы для пикантности.'
      }
    ],
    imageMain: '/hookah/apple-cinnamon-main.webp',
    categories: ['классические', 'пряные', 'яблочные', 'традиционные'],
    rating: 4.4,
    reviews: 298,
    dishCategoriesList: {
      'classic-mixes': {
        id: 'classic-mixes',
        title: 'Классические смеси'
      }
    },
    dishCategoriesSubList: {
      'apple': {
        id: 'apple',
        title: 'Яблочные'
      },
    },
    cuisineCategoriesList: {
      'turkish': {
        id: 'turkish',
        title: 'Турецкая'
      },
    },
    dietCategoriesList: {
      'traditional': {
        id: 'traditional',
        title: 'Традиционные'
      },
    }
  },

  6: {
    id: 6,
    name: 'grape-mint-ice',
    title: 'Виноград с мятой и льдом',
    description: 'Холодный виноградный вкус с освежающей мятой и ледяным эффектом. Отлично утоляет жажду.',
    cookTime: '8 минут',
    difficulty: '1/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Средиземноморская',
    servings: 4,
    ingredients: [
      { name: 'Табак виноград', amount: 15, unit: Unit.g },
      { name: 'Табак мята', amount: 5, unit: Unit.g },
      { name: 'Табак лёд', amount: 5, unit: Unit.g },
    ],
    steps: [
      {
        image: '/hookah/grape-mint-step1.webp',
        title: 'Холодная смесь',
        text: 'Смешайте виноградный табак с мятой и ледяным табаком. Соотношение 15:5:5 даст идеальный баланс.'
      }
    ],
    imageMain: '/hookah/grape-mint-main.webp',
    categories: ['холодные', 'виноградные', 'мятные', 'летние', 'освежающие'],
    rating: 4.3,
    reviews: 167,
    dishCategoriesList: {
      'cool-mixes': {
        id: 'cool-mixes',
        title: 'Холодные смеси'
      }
    },
    dishCategoriesSubList: {
      'grape': {
        id: 'grape',
        title: 'Виноградные'
      },
    },
    cuisineCategoriesList: {
      'mediterranean': {
        id: 'mediterranean',
        title: 'Средиземноморская'
      },
    },
    dietCategoriesList: {
      'refreshing': {
        id: 'refreshing',
        title: 'Освежающие'
      },
    }
  },

  7: {
    id: 7,
    name: 'chocolate-cherry',
    title: 'Шоколад с вишней',
    description: 'Роскошное сочетание темного шоколада с сочной вишней. Десертный вкус для особых моментов.',
    cookTime: '25 минут',
    difficulty: '4/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Итальянская',
    servings: 3,
    ingredients: [
      { name: 'Табак шоколад', amount: 16, unit: Unit.g },
      { name: 'Табак вишня', amount: 9, unit: Unit.g },
    ],
    steps: [
      {
        image: '/hookah/chocolate-cherry-step1.webp',
        title: 'Премиум смесь',
        text: 'Используйте качественный шоколадный табак темных сортов. Добавьте сочную вишню в пропорции 16:9.'
      },
      {
        image: '/hookah/chocolate-cherry-step2.webp',
        title: 'Медленная забивка',
        text: 'Забивайте плотно, но аккуратно. Шоколаду нужно время для раскрытия, используйте низкий жар.'
      }
    ],
    imageMain: '/hookah/chocolate-cherry-main.webp',
    categories: ['десертные', 'шоколадные', 'сладкие', 'премиум', 'вечерние'],
    rating: 4.9,
    reviews: 145,
    dishCategoriesList: {
      'premium-mixes': {
        id: 'premium-mixes',
        title: 'Премиум смеси'
      }
    },
    dishCategoriesSubList: {
      'chocolate': {
        id: 'chocolate',
        title: 'Шоколадные'
      },
    },
    cuisineCategoriesList: {
      'italian': {
        id: 'italian',
        title: 'Итальянская'
      },
    },
    dietCategoriesList: {
      'premium': {
        id: 'premium',
        title: 'Премиум'
      },
    }
  },

  8: {
    id: 8,
    name: 'watermelon-basil',
    title: 'Арбуз с базиликом',
    description: 'Необычная комбинация сочного арбуза и ароматного базилика создает уникальный освежающий вкус.',
    cookTime: '10 минут',
    difficulty: '3/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Греческая',
    servings: 4,
    ingredients: [
      { name: 'Табак арбуз', amount: 18, unit: Unit.g },
      { name: 'Табак базилик', amount: 7, unit: Unit.g },
    ],
    steps: [
      {
        image: '/hookah/watermelon-basil-step1.webp',
        title: 'Экспериментальная смесь',
        text: 'Смешайте арбузный табак с небольшим количеством базилика. Пропорция 18:7 создаст гармоничный вкус.'
      }
    ],
    imageMain: '/hookah/watermelon-basil-main.webp',
    categories: ['экспериментальные', 'травяные', 'арбузные', 'необычные', 'летние'],
    rating: 4.2,
    reviews: 78,
    dishCategoriesList: {
      'experimental-mixes': {
        id: 'experimental-mixes',
        title: 'Экспериментальные смеси'
      }
    },
    dishCategoriesSubList: {
      'herbs': {
        id: 'herbs',
        title: 'Травяные'
      },
    },
    cuisineCategoriesList: {
      'greek': {
        id: 'greek',
        title: 'Греческая'
      },
    },
    dietCategoriesList: {
      'unusual': {
        id: 'unusual',
        title: 'Необычные'
      },
    }
  },

  9: {
    id: 9,
    name: 'peach-passion-fruit',
    title: 'Персик с маракуйей',
    description: 'Сладкий персик в сочетании с экзотической маракуйей создает яркий тропический микс.',
    cookTime: '12 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Бразильская',
    servings: 4,
    ingredients: [
      { name: 'Табак персик', amount: 14, unit: Unit.g },
      { name: 'Табак маракуйя', amount: 11, unit: Unit.g },
    ],
    steps: [
      {
        image: '/hookah/peach-passion-step1.webp',
        title: 'Тропический дуэт',
        text: 'Соедините персиковый и табак маракуйи в равных пропорциях. Дайте смеси настояться для лучшего смешивания ароматов.'
      }
    ],
    imageMain: '/hookah/peach-passion-main.webp',
    categories: ['тропические', 'персиковые', 'экзотические', 'сладкие', 'фруктовые'],
    rating: 4.6,
    reviews: 112,
    dishCategoriesList: {
      'tropical-mixes': {
        id: 'tropical-mixes',
        title: 'Тропические смеси'
      }
    },
    dishCategoriesSubList: {
      'stone-fruits': {
        id: 'stone-fruits',
        title: 'Косточковые фрукты'
      },
    },
    cuisineCategoriesList: {
      'brazilian': {
        id: 'brazilian',
        title: 'Бразильская'
      },
    },
    dietCategoriesList: {
      'exotic': {
        id: 'exotic',
        title: 'Экзотические'
      },
    }
  },

  10: {
    id: 10,
    name: 'rose-cardamom',
    title: 'Роза с кардамоном',
    description: 'Изысканная восточная смесь нежной розы с пряным кардамоном. Аристократический вкус с многовековой историей.',
    cookTime: '30 минут',
    difficulty: '5/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Персидская',
    servings: 2,
    ingredients: [
      { name: 'Табак роза', amount: 12, unit: Unit.g },
      { name: 'Табак кардамон', amount: 3, unit: Unit.g },
    ],
    steps: [
      {
        image: '/hookah/rose-cardamom-step1.webp',
        title: 'Восточная классика',
        text: 'Осторожно смешайте розовый табак с небольшим количеством кардамона. Соотношение 12:3 - кардамон очень интенсивен.'
      },
      {
        image: '/hookah/rose-cardamom-step2.webp',
        title: 'Мастерская забивка',
        text: 'Используйте традиционную технику забивки. Плотно, но с воздушными каналами. Требует опытной руки.'
      },
      {
        image: '/hookah/rose-cardamom-step3.webp',
        title: 'Контроль жара',
        text: 'Начинайте с минимального количества углей. Роза и кардамон требуют деликатного обращения с температурой.'
      }
    ],
    imageMain: '/hookah/rose-cardamom-main.webp',
    categories: ['восточные', 'пряные', 'элитные', 'цветочные', 'для знатоков'],
    rating: 4.8,
    reviews: 67,
    dishCategoriesList: {
      'elite-mixes': {
        id: 'elite-mixes',
        title: 'Элитные смеси'
      }
    },
    dishCategoriesSubList: {
      'floral': {
        id: 'floral',
        title: 'Цветочные'
      },
    },
    cuisineCategoriesList: {
      'persian': {
        id: 'persian',
        title: 'Персидская'
      },
    },
    dietCategoriesList: {
      'connoisseur': {
        id: 'connoisseur',
        title: 'Для знатоков'
      },
    }
  },
  364: {
    id: 364,
    name: 'lemon-mint-mix',
    title: 'Лимон-мята',
    description: 'Классический освежающий микс с ярким лимонным вкусом и холодящей мятой. Идеальное сочетание для жаркого летнего дня.',
    cookTime: '15 минут',
    difficulty: '1/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Освежающий',
    servings: 1,
    ingredients: [
      { name: 'Табак лимон', amount: 15, unit: Unit.g },
      { name: 'Табак мята', amount: 10, unit: Unit.g },
      { name: 'Лёд в колбе', amount: 1, unit: Unit.to_taste },
      { name: 'Холодная вода', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Подготовьте чашу и тщательно промойте её.' },
      { title: 'Шаг 2.', text: 'Смешайте табаки в пропорции 60% лимон, 40% мята.' },
      { title: 'Шаг 3.', text: 'Равномерно распределите смесь в чаше, не утрамбовывая.' },
      { title: 'Шаг 4.', text: 'Добавьте лёд в колбу и залейте холодной водой.' },
      { title: 'Шаг 5.', text: 'Начинайте курение на средней температуре, постепенно увеличивая жар.' }
    ],
    imageMain: '/mock.webp',
    categories: ['освежающие', 'лимон', 'мята', 'летние миксы', 'простые рецепты'],
    rating: 4.7,
    reviews: 128,
    dishCategoriesList: { 'refreshing': { id: 'refreshing', title: 'Освежающие' } },
    dishCategoriesSubList: { 'citrus-mint': { id: 'citrus-mint', title: 'Цитрус-мята' } },
    cuisineCategoriesList: { refreshing: { id: 'refreshing', title: 'Освежающие миксы' } },
    dietCategoriesList: { 'light': { id: 'light', title: 'Лёгкие миксы' } }
  },
  365: {
    id: 365,
    name: 'watermelon-ice-mix',
    title: 'Арбуз-лёд',
    description: 'Освежающий летний микс с сочным арбузным вкусом и ледяной прохладой. Идеальный выбор для жаркого дня.',
    cookTime: '15 минут',
    difficulty: '1/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Освежающий',
    servings: 1,
    ingredients: [
      { name: 'Табак арбуз', amount: 20, unit: Unit.g },
      { name: 'Табак лёд', amount: 5, unit: Unit.g },
      { name: 'Лёд в колбе', amount: 1, unit: Unit.to_taste },
      { name: 'Холодная вода', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Подготовьте чашу и убедитесь, что она полностью чистая.' },
      { title: 'Шаг 2.', text: 'Смешайте табаки в пропорции 80% арбуз, 20% лёд.' },
      { title: 'Шаг 3.', text: 'Аккуратно выложите смесь в чашу, создав небольшую горку в центре.' },
      { title: 'Шаг 4.', text: 'Наполните колбу холодной водой и добавьте много льда.' },
      { title: 'Шаг 5.', text: 'Разжигайте угли и начинайте курение на слабом жаре.' }
    ],
    imageMain: '/mock.webp',
    categories: ['освежающие', 'арбуз', 'лёд', 'летние миксы', 'фруктовые'],
    rating: 4.6,
    reviews: 95,
    dishCategoriesList: { 'refreshing': { id: 'refreshing', title: 'Освежающие' } },
    dishCategoriesSubList: { 'fruit-ice': { id: 'fruit-ice', title: 'Фрукты-лёд' } },
    cuisineCategoriesList: { refreshing: { id: 'refreshing', title: 'Освежающие миксы' } },
    dietCategoriesList: { 'light': { id: 'light', title: 'Лёгкие миксы' } }
  },
  366: {
    id: 366,
    name: 'grape-mint-mix',
    title: 'Виноград-мята',
    description: 'Изысканный микс со сладким виноградным вкусом и освежающей мятой. Элегантное сочетание для ценителей.',
    cookTime: '15 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Освежающий',
    servings: 1,
    ingredients: [
      { name: 'Табак виноград', amount: 18, unit: Unit.g },
      { name: 'Табак мята', amount: 7, unit: Unit.g },
      { name: 'Лёд в колбе', amount: 1, unit: Unit.to_taste },
      { name: 'Холодная вода', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Подготовьте чашу и проверьте её чистоту.' },
      { title: 'Шаг 2.', text: 'Смешайте табаки в пропорции 72% виноград, 28% мята.' },
      { title: 'Шаг 3.', text: 'Выложите смесь в чашу рыхло, не утрамбовывая.' },
      { title: 'Шаг 4.', text: 'Добавьте лёд в колбу и залейте холодной водой.' },
      { title: 'Шаг 5.', text: 'Начинайте курение на средней температуре, контролируя жар.' }
    ],
    imageMain: '/mock.webp',
    categories: ['освежающие', 'виноград', 'мята', 'летние миксы', 'фруктовые'],
    rating: 4.8,
    reviews: 112,
    dishCategoriesList: { 'refreshing': { id: 'refreshing', title: 'Освежающие' } },
    dishCategoriesSubList: { 'fruit-mint': { id: 'fruit-mint', title: 'Фрукты-мята' } },
    cuisineCategoriesList: { refreshing: { id: 'refreshing', title: 'Освежающие миксы' } },
    dietCategoriesList: { 'light': { id: 'light', title: 'Лёгкие миксы' } }
  },
  367: {
    id: 367,
    name: 'orange-ice-mix',
    title: 'Апельсин-лёд',
    description: 'Яркий цитрусовый микс с сочным апельсиновым вкусом и освежающим холодком. Энергичный заряд на весь день.',
    cookTime: '10 минут',
    difficulty: '1/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Освежающий',
    servings: 1,
    ingredients: [
      { name: 'Табак апельсин', amount: 22, unit: Unit.g },
      { name: 'Табак лёд', amount: 3, unit: Unit.g },
      { name: 'Лёд в колбе', amount: 1, unit: Unit.to_taste },
      { name: 'Холодная вода', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Убедитесь, что чаша полностью чистая и сухая.' },
      { title: 'Шаг 2.', text: 'Смешайте табаки в пропорции 88% апельсин, 12% лёд.' },
      { title: 'Шаг 3.', text: 'Равномерно распределите смесь по чаше.' },
      { title: 'Шаг 4.', text: 'Заполните колбу холодной водой со льдом.' },
      { title: 'Шаг 5.', text: 'Начинайте курение на низкой температуре.' }
    ],
    imageMain: '/mock.webp',
    categories: ['освежающие', 'апельсин', 'лёд', 'летние миксы', 'цитрусовые'],
    rating: 4.9,
    reviews: 156,
    dishCategoriesList: { 'refreshing': { id: 'refreshing', title: 'Освежающие' } },
    dishCategoriesSubList: { 'citrus-ice': { id: 'citrus-ice', title: 'Цитрус-лёд' } },
    cuisineCategoriesList: { refreshing: { id: 'refreshing', title: 'Освежающие миксы' } },
    dietCategoriesList: { 'light': { id: 'light', title: 'Лёгкие миксы' } }
  },
  368: {
    id: 368,
    name: 'kiwi-mint-mix',
    title: 'Киви-мята',
    description: 'Экзотический микс с кисло-сладким вкусом киви и освежающей мятой. Необычное сочетание для любителей новых вкусов.',
    cookTime: '15 минут',
    difficulty: '1/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Экзотический',
    servings: 1,
    ingredients: [
      { name: 'Табак киви', amount: 16, unit: Unit.g },
      { name: 'Табак мята', amount: 9, unit: Unit.g },
      { name: 'Лёд в колбе', amount: 1, unit: Unit.to_taste },
      { name: 'Холодная вода', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Подготовьте чашу и просушите её.' },
      { title: 'Шаг 2.', text: 'Смешайте табаки в пропорции 64% киви, 36% мята.' },
      { title: 'Шаг 3.', text: 'Равномерно выложите смесь в чашу.' },
      { title: 'Шаг 4.', text: 'Добавьте лёд в колбу и залейте холодной водой.' },
      { title: 'Шаг 5.', text: 'Начинайте курение на средней температуре.' }
    ],
    imageMain: '/mock.webp',
    categories: ['экзотические', 'киви', 'мята', 'летние миксы', 'фруктовые'],
    rating: 4.7,
    reviews: 89,
    dishCategoriesList: { 'exotic': { id: 'exotic', title: 'Экзотические' } },
    dishCategoriesSubList: { 'fruit-mint': { id: 'fruit-mint', title: 'Фрукты-мята' } },
    cuisineCategoriesList: { exotic: { id: 'exotic', title: 'Экзотические миксы' } },
    dietCategoriesList: { 'light': { id: 'light', title: 'Лёгкие миксы' } }
  },
  369: {
    id: 369,
    name: 'passion-fruit-ice-mix',
    title: 'Маракуйя-лёд',
    description: 'Многогранный тропический микс с ярким вкусом маракуйи и освежающим льдом. Перфектное сочетание для жаркого дня.',
    cookTime: '12 минут',
    difficulty: '1/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Освежающий',
    servings: 1,
    ingredients: [
      { name: 'Табак маракуйя', amount: 20, unit: Unit.g },
      { name: 'Табак лёд', amount: 5, unit: Unit.g },
      { name: 'Лёд в колбе', amount: 1, unit: Unit.to_taste },
      { name: 'Холодная вода', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Тщательно подготовьте чашу.' },
      { title: 'Шаг 2.', text: 'Смешайте табаки в пропорции 80% маракуйя, 20% лёд.' },
      { title: 'Шаг 3.', text: 'Выложите смесь в чашу, не придавливая.' },
      { title: 'Шаг 4.', text: 'Наполните колбу льдом и холодной водой.' },
      { title: 'Шаг 5.', text: 'Начинайте курение на маленьком жаре.' }
    ],
    imageMain: '/mock.webp',
    categories: ['освежающие', 'маракуйя', 'лёд', 'летние миксы', 'тропические'],
    rating: 4.6,
    reviews: 76,
    dishCategoriesList: { 'refreshing': { id: 'refreshing', title: 'Освежающие' } },
    dishCategoriesSubList: { 'tropical-ice': { id: 'tropical-ice', title: 'Тропики-лёд' } },
    cuisineCategoriesList: { refreshing: { id: 'refreshing', title: 'Освежающие миксы' } },
    dietCategoriesList: { 'light': { id: 'light', title: 'Лёгкие миксы' } }
  },
  370: {
    id: 370,
    name: 'double-apple-mint-classic',
    title: 'Двойное яблоко-мята',
    description: 'Легендарный классический микс с насыщенным яблочным вкусом и освежающей мятой. Проверенное временем сочетание.',
    cookTime: '20 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Классика',
    servings: 1,
    ingredients: [
      { name: 'Табак двойное яблоко', amount: 18, unit: Unit.g },
      { name: 'Табак мята', amount: 7, unit: Unit.g },
      { name: 'Лёд в колбе', amount: 1, unit: Unit.to_taste },
      { name: 'Холодная вода', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Подготовьте чашу и проверьте тягу.' },
      { title: 'Шаг 2.', text: 'Смешайте табаки в пропорции 72% яблоко, 28% мята.' },
      { title: 'Шаг 3.', text: 'Равномерно выложите смесь, слегка придавив по краям.' },
      { title: 'Шаг 4.', text: 'Наполните колбу холодной водой с льдом.' },
      { title: 'Шаг 5.', text: 'Разогрейте угли и начинайте курение на среднем жаре.' }
    ],
    imageMain: '/mock.webp',
    categories: ['классика', 'яблоко', 'мята', 'проверенные миксы'],
    rating: 4.8,
    reviews: 142,
    dishCategoriesList: { 'classic': { id: 'classic', title: 'Классические' } },
    dishCategoriesSubList: { 'apple-mint': { id: 'apple-mint', title: 'Яблоко-мята' } },
    cuisineCategoriesList: { classic: { id: 'classic', title: 'Классические миксы' } },
    dietCategoriesList: { 'medium': { id: 'medium', title: 'Средние миксы' } }
  },
  371: {
    id: 371,
    name: 'cherry-cola-classic',
    title: 'Вишня-кола',
    description: 'Популярный классический микс с ярким вишнёвым вкусом и освежающей колой. Идеальное сочетание для вечерних посиделок.',
    cookTime: '18 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Классика',
    servings: 1,
    ingredients: [
      { name: 'Табак вишня', amount: 15, unit: Unit.g },
      { name: 'Табак кола', amount: 10, unit: Unit.g },
      { name: 'Лёд в колбе', amount: 1, unit: Unit.to_taste },
      { name: 'Холодная вода', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Подготовьте и очистите чашу от остатков предыдущих табаков.' },
      { title: 'Шаг 2.', text: 'Тщательно смешайте табаки в пропорции 60% вишня, 40% кола.' },
      { title: 'Шаг 3.', text: 'Выложите смесь в чашу, создав равномерный слой.' },
      { title: 'Шаг 4.', text: 'Заполните колбу холодной водой и добавьте лёд.' },
      { title: 'Шаг 5.', text: 'Начинайте курение на умеренном жаре, постепенно увеличивая температуру.' }
    ],
    imageMain: '/mock.webp',
    categories: ['классика', 'вишня', 'кола', 'популярные', 'сладкие'],
    rating: 4.7,
    reviews: 98,
    dishCategoriesList: { 'classic': { id: 'classic', title: 'Классические' } },
    dishCategoriesSubList: { 'sweet': { id: 'sweet', title: 'Сладкие' } },
    cuisineCategoriesList: { classic: { id: 'classic', title: 'Классические миксы' } },
    dietCategoriesList: { 'medium': { id: 'medium', title: 'Средние миксы' } }
  },
  372: {
    id: 372,
    name: 'strawberry-banana-classic',
    title: 'Клубника-банан',
    description: 'Классический фруктовый микс с насыщенным вкусом клубники и мягким бананом. Любимое сочетание многих.',
    cookTime: '16 минут',
    difficulty: '1/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Классика',
    servings: 1,
    ingredients: [
      { name: 'Табак клубника', amount: 15, unit: Unit.g },
      { name: 'Табак банан', amount: 10, unit: Unit.g },
      { name: 'Лёд в колбе', amount: 1, unit: Unit.to_taste },
      { name: 'Холодная вода', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Подготовьте чашу и проверьте кальян.' },
      { title: 'Шаг 2.', text: 'Смешайте табаки в пропорции 60% клубника, 40% банан.' },
      { title: 'Шаг 3.', text: 'Равномерно выложите смесь в чашу.' },
      { title: 'Шаг 4.', text: 'Наполните колбу холодной водой с льдом.' },
      { title: 'Шаг 5.', text: 'Начинайте курение на малом жаре.' }
    ],
    imageMain: '/mock.webp',
    categories: ['классика', 'клубника', 'банан', 'фруктовые', 'популярные'],
    rating: 4.6,
    reviews: 87,
    dishCategoriesList: { 'classic': { id: 'classic', title: 'Классические' } },
    dishCategoriesSubList: { 'fruity': { id: 'fruity', title: 'Фруктовые' } },
    cuisineCategoriesList: { classic: { id: 'classic', title: 'Классические миксы' } },
    dietCategoriesList: { 'light': { id: 'light', title: 'Лёгкие миксы' } }
  },
  373: {
    id: 373,
    name: 'mango-peach-classic',
    title: 'Манго-персик',
    description: 'Яркий тропический микс с сочным манго и нежным персиком. Популярное летнее сочетание.',
    cookTime: '22 минут',
    difficulty: '1/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Классика',
    servings: 1,
    ingredients: [
      { name: 'Табак манго', amount: 14, unit: Unit.g },
      { name: 'Табак персик', amount: 11, unit: Unit.g },
      { name: 'Лёд в колбе', amount: 1, unit: Unit.to_taste },
      { name: 'Холодная вода', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Подготовьте чашу и проверьте все соединения.' },
      { title: 'Шаг 2.', text: 'Тщательно смешайте табаки в пропорции 56% манго, 44% персик.' },
      { title: 'Шаг 3.', text: 'Выложите смесь в чашу рыхло.' },
      { title: 'Шаг 4.', text: 'Заполните колбу холодной водой с льдом.' },
      { title: 'Шаг 5.', text: 'Начинайте курение на среднем жаре.' }
    ],
    imageMain: '/mock.webp',
    categories: ['классика', 'манго', 'персик', 'тропические', 'летние'],
    rating: 4.8,
    reviews: 112,
    dishCategoriesList: { 'classic': { id: 'classic', title: 'Классические' } },
    dishCategoriesSubList: { 'tropical': { id: 'tropical', title: 'Тропические' } },
    cuisineCategoriesList: { classic: { id: 'classic', title: 'Классические миксы' } },
    dietCategoriesList: { 'light': { id: 'light', title: 'Лёгкие миксы' } }
  },
  374: {
    id: 374,
    name: 'grape-mint-classic',
    title: 'Виноград-мята',
    description: 'Гармоничный классический микс с насыщенным виноградным вкусом и освежающей мятой. Отличный выбор для расслабления.',
    cookTime: '20 минут',
    difficulty: '1/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Классика',
    servings: 1,
    ingredients: [
      { name: 'Табак виноград', amount: 17, unit: Unit.g },
      { name: 'Табак мята', amount: 8, unit: Unit.g },
      { name: 'Лёд в колбе', amount: 1, unit: Unit.to_taste },
      { name: 'Холодная вода', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Тщательно подготовьте чашу и проверьте тягу.' },
      { title: 'Шаг 2.', text: 'Смешайте табаки в пропорции 68% виноград, 32% мята.' },
      { title: 'Шаг 3.', text: 'Равномерно распределите смесь по чаше.' },
      { title: 'Шаг 4.', text: 'Наполните колбу холодной водой с льдом.' },
      { title: 'Шаг 5.', text: 'Начинайте курение на среднем жаре.' }
    ],
    imageMain: '/mock.webp',
    categories: ['классика', 'виноград', 'мята', 'гармоничные', 'популярные'],
    rating: 4.7,
    reviews: 94,
    dishCategoriesList: { 'classic': { id: 'classic', title: 'Классические' } },
    dishCategoriesSubList: { 'fruit-mint': { id: 'fruit-mint', title: 'Фрукты-мята' } },
    cuisineCategoriesList: { classic: { id: 'classic', title: 'Классические миксы' } },
    dietCategoriesList: { 'medium': { id: 'medium', title: 'Средние миксы' } }
  },
  409: {
    id: 409,
    name: 'pineapple-coconut-classic',
    title: 'Ананас-кокос',
    description: 'Экзотический классический микс с ярким ананасом и нежным кокосом. Перфектное сочетание для отпускного настроения.',
    cookTime: '25 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 0, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 0, unit: Unit.g },
    },
    cuisine: 'Классика',
    servings: 1,
    ingredients: [
      { name: 'Табак ананас', amount: 16, unit: Unit.g },
      { name: 'Табак кокос', amount: 9, unit: Unit.g },
      { name: 'Лёд в колбе', amount: 1, unit: Unit.to_taste },
      { name: 'Холодная вода', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Подготовьте чашу и проверьте все соединения.' },
      { title: 'Шаг 2.', text: 'Тщательно смешайте табаки в пропорции 64% ананас, 36% кокос.' },
      { title: 'Шаг 3.', text: 'Аккуратно выложите смесь в чашу.' },
      { title: 'Шаг 4.', text: 'Наполните колбу холодной водой со льдом.' },
      { title: 'Шаг 5.', text: 'Начинайте курение на умеренном жаре.' }
    ],
    imageMain: '/mock.webp',
    categories: ['классика', 'ананас', 'кокос', 'экзотика', 'тропики'],
    rating: 4.8,
    reviews: 88,
    dishCategoriesList: { 'classic': { id: 'classic', title: 'Классические' } },
    dishCategoriesSubList: { 'exotic': { id: 'exotic', title: 'Экзотические' } },
    cuisineCategoriesList: { classic: { id: 'classic', title: 'Классические миксы' } },
    dietCategoriesList: { 'medium': { id: 'medium', title: 'Средние миксы' } }
  },
};
