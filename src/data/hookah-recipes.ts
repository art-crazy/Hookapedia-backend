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
  672: {
    id: 672,
    name: 'caprese-salad',
    title: 'Салат Капрезе',
    description: 'Итальянский салат из помидоров, моцареллы и базилика. Простое и элегантное блюдо.',
    cookTime: '10 минут',
    difficulty: '1/5',
    nutrition: {
      calories: { value: 220, unit: Unit.kcal },
      protein: { value: 12, unit: Unit.g },
      fat: { value: 16, unit: Unit.g },
      carbs: { value: 6, unit: Unit.g },
    },
    cuisine: 'Итальянская',
    servings: 4,
    ingredients: [
      { name: 'Помидоры', amount: 400, unit: Unit.g },
      { name: 'Моцарелла', amount: 200, unit: Unit.g },
      { name: 'Базилик', amount: 30, unit: Unit.g },
      { name: 'Оливковое масло', amount: 60, unit: Unit.ml },
      { name: 'Бальзамический уксус', amount: 30, unit: Unit.ml },
      { name: 'Соль', amount: 1, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Нарежьте помидоры и моцареллу кружочками.' },
      { title: 'Шаг 2.', text: 'Выложите ингредиенты на блюдо, чередуя помидоры и моцареллу.' },
      { title: 'Шаг 3.', text: 'Добавьте листья базилика.' },
      { title: 'Шаг 4.', text: 'Полейте оливковым маслом и бальзамическим уксусом.' },
      { title: 'Шаг 5.', text: 'Посолите и поперчите по вкусу.' }
    ],
    imageMain: '/mock.webp',
    categories: ['салаты', 'капрезе', 'летние блюда', 'итальянская кухня', 'вегетарианское'],
    rating: 4.8,
    reviews: 189,
    dishCategoriesList: { 'salads': { id: 'salads', title: 'Салаты' } },
    dishCategoriesSubList: { 'vegetable-salads': { id: 'vegetable-salads', title: 'Овощные салаты' } },
    cuisineCategoriesList: { italian: { id: 'italian', title: 'Итальянская кухня' } },
    dietCategoriesList: { vegetarian: { id: 'vegetarian', title: 'Вегетарианская диета' } }
  },
  673: {
    id: 673,
    name: 'caesar-salad',
    title: 'Салат Цезарь',
    description: 'Классический салат с курицей, сухариками, листьями салата и соусом Цезарь.',
    cookTime: '25 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 350, unit: Unit.kcal },
      protein: { value: 25, unit: Unit.g },
      fat: { value: 22, unit: Unit.g },
      carbs: { value: 15, unit: Unit.g },
    },
    cuisine: 'Американская',
    servings: 4,
    ingredients: [
      { name: 'Куриная грудка', amount: 400, unit: Unit.g },
      { name: 'Листья салата', amount: 200, unit: Unit.g },
      { name: 'Сухарики', amount: 100, unit: Unit.g },
      { name: 'Пармезан', amount: 100, unit: Unit.g },
      { name: 'Яйца', amount: 2, unit: Unit.pcs },
      { name: 'Чеснок', amount: 2, unit: Unit.pcs },
      { name: 'Анчоусы', amount: 4, unit: Unit.pcs },
      { name: 'Оливковое масло', amount: 60, unit: Unit.ml },
      { name: 'Лимонный сок', amount: 30, unit: Unit.ml },
      { name: 'Горчица', amount: 1, unit: Unit.tsp },
      { name: 'Соль', amount: 1, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Обжарьте куриную грудку до готовности.' },
      { title: 'Шаг 2.', text: 'Приготовьте соус Цезарь, смешав все ингредиенты в блендере.' },
      { title: 'Шаг 3.', text: 'Нарежьте курицу и салат.' },
      { title: 'Шаг 4.', text: 'Смешайте все ингредиенты в большой миске.' },
      { title: 'Шаг 5.', text: 'Полейте соусом и посыпьте тертым пармезаном.' }
    ],
    imageMain: '/mock.webp',
    categories: ['салаты', 'цезарь', 'курица', 'летние блюда', 'американская кухня'],
    rating: 4.7,
    reviews: 312,
    dishCategoriesList: { 'salads': { id: 'salads', title: 'Салаты' } },
    dishCategoriesSubList: { 'meat-salads': { id: 'meat-salads', title: 'Мясные салаты' } },
    cuisineCategoriesList: { american: { id: 'american', title: 'Американская кухня' } },
    dietCategoriesList: { 'balanced': { id: 'balanced', title: 'Сбалансированное питание' } }
  },
  674: {
    id: 674,
    name: 'vanilla-ice-cream',
    title: 'Ванильное мороженое',
    description: 'Классическое домашнее ванильное мороженое с нежной кремовой текстурой.',
    cookTime: '4 часа',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 280, unit: Unit.kcal },
      protein: { value: 4, unit: Unit.g },
      fat: { value: 18, unit: Unit.g },
      carbs: { value: 24, unit: Unit.g },
    },
    cuisine: 'Итальянская',
    servings: 6,
    ingredients: [
      { name: 'Сливки 33%', amount: 500, unit: Unit.ml },
      { name: 'Молоко', amount: 250, unit: Unit.ml },
      { name: 'Сахар', amount: 150, unit: Unit.g },
      { name: 'Яичные желтки', amount: 4, unit: Unit.pcs },
      { name: 'Ванильный экстракт', amount: 1, unit: Unit.tsp },
      { name: 'Соль', amount: 1, unit: Unit.pinch }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Нагрейте молоко и сливки до горячего состояния.' },
      { title: 'Шаг 2.', text: 'Взбейте желтки с сахаром до пышной массы.' },
      { title: 'Шаг 3.', text: 'Медленно влейте горячую смесь в желтки, постоянно помешивая.' },
      { title: 'Шаг 4.', text: 'Варите на водяной бане до загустения.' },
      { title: 'Шаг 5.', text: 'Охладите и заморозьте в мороженице.' }
    ],
    imageMain: '/mock.webp',
    categories: ['десерты', 'мороженое', 'летние блюда', 'итальянская кухня', 'вегетарианское'],
    rating: 4.9,
    reviews: 178,
    dishCategoriesList: { 'desserts': { id: 'desserts', title: 'Десерты' } },
    dishCategoriesSubList: { 'ice-cream': { id: 'ice-cream', title: 'Мороженое' } },
    cuisineCategoriesList: { italian: { id: 'italian', title: 'Итальянская кухня' } },
    dietCategoriesList: { vegetarian: { id: 'vegetarian', title: 'Вегетарианская диета' } }
  },
  675: {
    id: 675,
    name: 'strawberry-sorbet',
    title: 'Клубничный сорбет',
    description: 'Освежающий сорбет из свежей клубники. Легкий и вкусный десерт без молочных продуктов.',
    cookTime: '3 часа',
    difficulty: '1/5',
    nutrition: {
      calories: { value: 120, unit: Unit.kcal },
      protein: { value: 1, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 28, unit: Unit.g },
    },
    cuisine: 'Французская',
    servings: 4,
    ingredients: [
      { name: 'Клубника', amount: 500, unit: Unit.g },
      { name: 'Сахар', amount: 150, unit: Unit.g },
      { name: 'Вода', amount: 100, unit: Unit.ml },
      { name: 'Лимонный сок', amount: 30, unit: Unit.ml }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Приготовьте сахарный сироп из воды и сахара.' },
      { title: 'Шаг 2.', text: 'Измельчите клубнику в пюре.' },
      { title: 'Шаг 3.', text: 'Смешайте пюре с сиропом и лимонным соком.' },
      { title: 'Шаг 4.', text: 'Охладите смесь.' },
      { title: 'Шаг 5.', text: 'Заморозьте в мороженице или морозилке, периодически перемешивая.' }
    ],
    imageMain: '/mock.webp',
    categories: ['десерты', 'сорбет', 'летние блюда', 'французская кухня', 'веганское'],
    rating: 4.8,
    reviews: 145,
    dishCategoriesList: { 'desserts': { id: 'desserts', title: 'Десерты' } },
    dishCategoriesSubList: { 'sorbet': { id: 'sorbet', title: 'Сорбеты' } },
    cuisineCategoriesList: { french: { id: 'french', title: 'Французская кухня' } },
    dietCategoriesList: { vegan: { id: 'vegan', title: 'Веганская диета' } }
  },
  676: {
    id: 676,
    name: 'berry-cheesecake',
    title: 'Чизкейк с ягодами',
    description: 'Нежный чизкейк с ягодным соусом. Идеальный летний десерт.',
    cookTime: '2 часа',
    difficulty: '3/5',
    nutrition: {
      calories: { value: 320, unit: Unit.kcal },
      protein: { value: 6, unit: Unit.g },
      fat: { value: 22, unit: Unit.g },
      carbs: { value: 25, unit: Unit.g },
    },
    cuisine: 'Американская',
    servings: 8,
    ingredients: [
      { name: 'Печенье', amount: 200, unit: Unit.g },
      { name: 'Сливочное масло', amount: 100, unit: Unit.g },
      { name: 'Творожный сыр', amount: 500, unit: Unit.g },
      { name: 'Сахар', amount: 200, unit: Unit.g },
      { name: 'Яйца', amount: 3, unit: Unit.pcs },
      { name: 'Сметана', amount: 200, unit: Unit.g },
      { name: 'Смесь ягод', amount: 300, unit: Unit.g },
      { name: 'Желатин', amount: 10, unit: Unit.g }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Измельчите печенье и смешайте с растопленным маслом.' },
      { title: 'Шаг 2.', text: 'Выложите в форму и утрамбуйте.' },
      { title: 'Шаг 3.', text: 'Взбейте творожный сыр с сахаром, добавьте яйца и сметану.' },
      { title: 'Шаг 4.', text: 'Выпекайте 1 час при 160°C.' },
      { title: 'Шаг 5.', text: 'Приготовьте ягодный соус и полейте остывший чизкейк.' }
    ],
    imageMain: '/mock.webp',
    categories: ['десерты', 'чизкейк', 'ягоды', 'летние блюда', 'американская кухня'],
    rating: 4.9,
    reviews: 234,
    dishCategoriesList: { 'desserts': { id: 'desserts', title: 'Десерты' } },
    dishCategoriesSubList: { 'cakes': { id: 'cakes', title: 'Торты' } },
    cuisineCategoriesList: { american: { id: 'american', title: 'Американская кухня' } },
    dietCategoriesList: { vegetarian: { id: 'vegetarian', title: 'Вегетарианская диета' } }
  },
  677: {
    id: 677,
    name: 'berry-pavlova',
    title: 'Павлова с ягодами',
    description: 'Воздушный десерт из безе с ягодным соусом и взбитыми сливками.',
    cookTime: '2 часа',
    difficulty: '3/5',
    nutrition: {
      calories: { value: 280, unit: Unit.kcal },
      protein: { value: 4, unit: Unit.g },
      fat: { value: 16, unit: Unit.g },
      carbs: { value: 32, unit: Unit.g },
    },
    cuisine: 'Австралийская',
    servings: 6,
    ingredients: [
      { name: 'Яичные белки', amount: 4, unit: Unit.pcs },
      { name: 'Сахар', amount: 200, unit: Unit.g },
      { name: 'Кукурузный крахмал', amount: 10, unit: Unit.g },
      { name: 'Уксус', amount: 5, unit: Unit.ml },
      { name: 'Сливки 33%', amount: 300, unit: Unit.ml },
      { name: 'Смесь ягод', amount: 300, unit: Unit.g },
      { name: 'Сахарная пудра', amount: 50, unit: Unit.g }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Взбейте белки с сахаром до устойчивых пиков.' },
      { title: 'Шаг 2.', text: 'Добавьте крахмал и уксус, аккуратно перемешайте.' },
      { title: 'Шаг 3.', text: 'Выложите на противень и выпекайте 1.5 часа при 120°C.' },
      { title: 'Шаг 4.', text: 'Взбейте сливки с сахарной пудрой.' },
      { title: 'Шаг 5.', text: 'Выложите сливки на остывшее безе и украсьте ягодами.' }
    ],
    imageMain: '/mock.webp',
    categories: ['десерты', 'павлова', 'ягоды', 'летние блюда', 'австралийская кухня'],
    rating: 4.8,
    reviews: 167,
    dishCategoriesList: { 'desserts': { id: 'desserts', title: 'Десерты' } },
    dishCategoriesSubList: { 'meringue': { id: 'meringue', title: 'Безе' } },
    cuisineCategoriesList: { australian: { id: 'australian', title: 'Австралийская кухня' } },
    dietCategoriesList: { vegetarian: { id: 'vegetarian', title: 'Вегетарианская диета' } }
  },
  678: {
    id: 678,
    name: 'grilled-corn',
    title: 'Кукуруза на гриле',
    description: 'Сочная кукуруза, запеченная на гриле с ароматными травами и маслом.',
    cookTime: '20 минут',
    difficulty: '1/5',
    nutrition: {
      calories: { value: 180, unit: Unit.kcal },
      protein: { value: 4, unit: Unit.g },
      fat: { value: 8, unit: Unit.g },
      carbs: { value: 28, unit: Unit.g },
    },
    cuisine: 'Американская',
    servings: 4,
    ingredients: [
      { name: 'Кукуруза в початках', amount: 4, unit: Unit.pcs },
      { name: 'Сливочное масло', amount: 50, unit: Unit.g },
      { name: 'Чеснок', amount: 2, unit: Unit.pcs },
      { name: 'Свежая зелень', amount: 30, unit: Unit.g },
      { name: 'Соль', amount: 1, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Очистите кукурузу от листьев.' },
      { title: 'Шаг 2.', text: 'Приготовьте масло с чесноком и зеленью.' },
      { title: 'Шаг 3.', text: 'Обжарьте кукурузу на гриле до золотистой корочки.' },
      { title: 'Шаг 4.', text: 'Смажьте горячую кукурузу ароматным маслом.' },
      { title: 'Шаг 5.', text: 'Посолите и поперчите по вкусу.' }
    ],
    imageMain: '/mock.webp',
    categories: ['гарниры', 'кукуруза', 'гриль', 'летние блюда', 'американская кухня'],
    rating: 4.7,
    reviews: 156,
    dishCategoriesList: { 'side-dishes': { id: 'side-dishes', title: 'Гарниры' } },
    dishCategoriesSubList: { 'vegetables': { id: 'vegetables', title: 'Овощные блюда' } },
    cuisineCategoriesList: { american: { id: 'american', title: 'Американская кухня' } },
    dietCategoriesList: { vegetarian: { id: 'vegetarian', title: 'Вегетарианская диета' } }
  },
  679: {
    id: 679,
    name: 'zucchini-fritters',
    title: 'Кабачковые оладьи',
    description: 'Хрустящие оладьи из кабачков с зеленью и сыром. Отличная закуска или гарнир.',
    cookTime: '30 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 220, unit: Unit.kcal },
      protein: { value: 8, unit: Unit.g },
      fat: { value: 14, unit: Unit.g },
      carbs: { value: 18, unit: Unit.g },
    },
    cuisine: 'Средиземноморская',
    servings: 4,
    ingredients: [
      { name: 'Кабачки', amount: 500, unit: Unit.g },
      { name: 'Яйца', amount: 2, unit: Unit.pcs },
      { name: 'Мука', amount: 100, unit: Unit.g },
      { name: 'Сыр', amount: 100, unit: Unit.g },
      { name: 'Зелень', amount: 50, unit: Unit.g },
      { name: 'Чеснок', amount: 2, unit: Unit.pcs },
      { name: 'Соль', amount: 1, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 1, unit: Unit.to_taste },
      { name: 'Растительное масло', amount: 50, unit: Unit.ml }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Натрите кабачки на терке и отожмите лишний сок.' },
      { title: 'Шаг 2.', text: 'Смешайте с яйцами, мукой, тертым сыром и зеленью.' },
      { title: 'Шаг 3.', text: 'Добавьте измельченный чеснок, соль и перец.' },
      { title: 'Шаг 4.', text: 'Обжарьте оладьи на разогретом масле до золотистой корочки.' },
      { title: 'Шаг 5.', text: 'Подавайте горячими со сметаной или йогуртом.' }
    ],
    imageMain: '/mock.webp',
    categories: ['закуски', 'кабачки', 'оладьи', 'летние блюда', 'средиземноморская кухня'],
    rating: 4.6,
    reviews: 189,
    dishCategoriesList: { 'appetizers': { id: 'appetizers', title: 'Закуски' } },
    dishCategoriesSubList: { 'vegetable-dishes': { id: 'vegetable-dishes', title: 'Овощные блюда' } },
    cuisineCategoriesList: { mediterranean: { id: 'mediterranean', title: 'Средиземноморская кухня' } },
    dietCategoriesList: { vegetarian: { id: 'vegetarian', title: 'Вегетарианская диета' } }
  },
  680: {
    id: 680,
    name: 'mint-lemonade',
    title: 'Мятный лимонад',
    description: 'Освежающий лимонад с мятой и лаймом. Идеальный напиток для жаркого дня.',
    cookTime: '15 минут',
    difficulty: '1/5',
    nutrition: {
      calories: { value: 120, unit: Unit.kcal },
      protein: { value: 0, unit: Unit.g },
      fat: { value: 0, unit: Unit.g },
      carbs: { value: 30, unit: Unit.g },
    },
    cuisine: 'Международная',
    servings: 4,
    ingredients: [
      { name: 'Лимон', amount: 2, unit: Unit.pcs },
      { name: 'Лайм', amount: 2, unit: Unit.pcs },
      { name: 'Сахар', amount: 100, unit: Unit.g },
      { name: 'Свежая мята', amount: 50, unit: Unit.g },
      { name: 'Вода', amount: 1, unit: Unit.l },
      { name: 'Лед', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Выжмите сок из лимонов и лаймов.' },
      { title: 'Шаг 2.', text: 'Приготовьте сахарный сироп, растворив сахар в горячей воде.' },
      { title: 'Шаг 3.', text: 'Смешайте сок, сироп и холодную воду.' },
      { title: 'Шаг 4.', text: 'Добавьте листья мяты и дайте настояться 10 минут.' },
      { title: 'Шаг 5.', text: 'Подавайте со льдом и украсьте листиками мяты.' }
    ],
    imageMain: '/mock.webp',
    categories: ['напитки', 'лимонад', 'летние блюда', 'безалкогольные напитки'],
    rating: 4.8,
    reviews: 245,
    dishCategoriesList: { 'drinks': { id: 'drinks', title: 'Напитки' } },
    dishCategoriesSubList: { 'non-alcoholic': { id: 'non-alcoholic', title: 'Безалкогольные напитки' } },
    cuisineCategoriesList: { international: { id: 'international', title: 'Международная кухня' } },
    dietCategoriesList: { vegan: { id: 'vegan', title: 'Веганская диета' } }
  },
  681: {
    id: 681,
    name: 'berry-smoothie',
    title: 'Ягодный смузи',
    description: 'Питательный смузи из свежих ягод с йогуртом и медом.',
    cookTime: '10 минут',
    difficulty: '1/5',
    nutrition: {
      calories: { value: 180, unit: Unit.kcal },
      protein: { value: 6, unit: Unit.g },
      fat: { value: 2, unit: Unit.g },
      carbs: { value: 35, unit: Unit.g },
    },
    cuisine: 'Международная',
    servings: 2,
    ingredients: [
      { name: 'Смесь ягод', amount: 300, unit: Unit.g },
      { name: 'Йогурт', amount: 200, unit: Unit.g },
      { name: 'Мед', amount: 2, unit: Unit.tbsp },
      { name: 'Лед', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Помойте и переберите ягоды.' },
      { title: 'Шаг 2.', text: 'Смешайте ягоды с йогуртом в блендере.' },
      { title: 'Шаг 3.', text: 'Добавьте мед и взбейте до однородной массы.' },
      { title: 'Шаг 4.', text: 'Добавьте лед и еще раз взбейте.' },
      { title: 'Шаг 5.', text: 'Подавайте сразу после приготовления.' }
    ],
    imageMain: '/mock.webp',
    categories: ['напитки', 'смузи', 'ягоды', 'летние блюда', 'здоровое питание'],
    rating: 4.7,
    reviews: 198,
    dishCategoriesList: { 'drinks': { id: 'drinks', title: 'Напитки' } },
    dishCategoriesSubList: { 'smoothies': { id: 'smoothies', title: 'Смузи' } },
    cuisineCategoriesList: { international: { id: 'international', title: 'Международная кухня' } },
    dietCategoriesList: { vegetarian: { id: 'vegetarian', title: 'Вегетарианская диета' } }
  },
  682: {
    id: 682,
    name: 'hummus',
    title: 'Домашний хумус',
    description: 'Классический хумус из нута с тахини и оливковым маслом. Отличная закуска для пикника.',
    cookTime: '20 минут',
    difficulty: '1/5',
    nutrition: {
      calories: { value: 250, unit: Unit.kcal },
      protein: { value: 8, unit: Unit.g },
      fat: { value: 15, unit: Unit.g },
      carbs: { value: 25, unit: Unit.g },
    },
    cuisine: 'Средиземноморская',
    servings: 4,
    ingredients: [
      { name: 'Нут', amount: 400, unit: Unit.g },
      { name: 'Тахини', amount: 60, unit: Unit.g },
      { name: 'Оливковое масло', amount: 60, unit: Unit.ml },
      { name: 'Лимонный сок', amount: 30, unit: Unit.ml },
      { name: 'Чеснок', amount: 2, unit: Unit.pcs },
      { name: 'Соль', amount: 1, unit: Unit.to_taste },
      { name: 'Перец черный', amount: 1, unit: Unit.to_taste },
      { name: 'Паприка', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Отварите нут до мягкости.' },
      { title: 'Шаг 2.', text: 'Смешайте нут с тахини, оливковым маслом и лимонным соком в блендере.' },
      { title: 'Шаг 3.', text: 'Добавьте измельченный чеснок, соль и перец.' },
      { title: 'Шаг 4.', text: 'Взбейте до получения однородной пасты.' },
      { title: 'Шаг 5.', text: 'Подавайте с паприкой и оливковым маслом.' }
    ],
    imageMain: '/mock.webp',
    categories: ['закуски', 'хумус', 'средиземноморская кухня', 'вегетарианские блюда'],
    rating: 4.8,
    reviews: 312,
    dishCategoriesList: { 'appetizers': { id: 'appetizers', title: 'Закуски' } },
    dishCategoriesSubList: { 'dips': { id: 'dips', title: 'Соусы и дипы' } },
    cuisineCategoriesList: { mediterranean: { id: 'mediterranean', title: 'Средиземноморская кухня' } },
    dietCategoriesList: { vegan: { id: 'vegan', title: 'Веганская диета' } }
  },
  683: {
    id: 683,
    name: 'guacamole',
    title: 'Гуакамоле',
    description: 'Классическая мексиканская закуска из авокадо с помидорами и лаймом.',
    cookTime: '15 минут',
    difficulty: '1/5',
    nutrition: {
      calories: { value: 220, unit: Unit.kcal },
      protein: { value: 3, unit: Unit.g },
      fat: { value: 20, unit: Unit.g },
      carbs: { value: 12, unit: Unit.g },
    },
    cuisine: 'Мексиканская',
    servings: 4,
    ingredients: [
      { name: 'Авокадо', amount: 3, unit: Unit.pcs },
      { name: 'Помидоры', amount: 2, unit: Unit.pcs },
      { name: 'Лук красный', amount: 1, unit: Unit.pcs },
      { name: 'Лайм', amount: 1, unit: Unit.pcs },
      { name: 'Кинза', amount: 30, unit: Unit.g },
      { name: 'Соль', amount: 1, unit: Unit.to_taste },
      { name: 'Перец чили', amount: 1, unit: Unit.to_taste }
    ],
    steps: [
      { title: 'Шаг 1.', text: 'Разомните авокадо вилкой.' },
      { title: 'Шаг 2.', text: 'Добавьте мелко нарезанные помидоры и лук.' },
      { title: 'Шаг 3.', text: 'Выжмите сок лайма и добавьте измельченную кинзу.' },
      { title: 'Шаг 4.', text: 'Посолите и добавьте перец чили по вкусу.' },
      { title: 'Шаг 5.', text: 'Подавайте с чипсами или овощами.' }
    ],
    imageMain: '/mock.webp',
    categories: ['закуски', 'гуакамоле', 'мексиканская кухня', 'вегетарианские блюда'],
    rating: 4.7,
    reviews: 278,
    dishCategoriesList: { 'appetizers': { id: 'appetizers', title: 'Закуски' } },
    dishCategoriesSubList: { 'dips': { id: 'dips', title: 'Соусы и дипы' } },
    cuisineCategoriesList: { mexican: { id: 'mexican', title: 'Мексиканская кухня' } },
    dietCategoriesList: { vegan: { id: 'vegan', title: 'Веганская диета' } }
  },
};
