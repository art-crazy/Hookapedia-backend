export enum Unit {
  g = 'г',
  ml = 'мл',
  pcs = 'шт.',
  tbsp = 'ст. л.',
  tsp = 'ч. л.',
  to_taste = 'по вкусу',
  kcal = 'ккал',
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
  }
};
