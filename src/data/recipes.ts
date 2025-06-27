export enum Unit {
  g = 'г',
  ml = 'мл',
  pcs = 'шт.',
  tbsp = 'ст. л.',
  tsp = 'ч. л.',
  to_taste = 'по вкусу',
  kcal = 'ккал',
}

// Интерфейс для питательной ценности
interface Nutrition {
  calories: { value: number; unit: Unit };
  protein: { value: number; unit: Unit };
  fat: { value: number; unit: Unit };
  carbs: { value: number; unit: Unit };
}

// Интерфейс для рецепта
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

// Рецепты
export const recipes: Record<number, Recipe> = {
  1: {
    id: 1,
    name: 'ovsyanka-s-kornishinami',
    title: 'Хворост на кефире',
    description: 'Хрустящий, румяный хворост на кефире — классическая выпечка для чаепития. Быстрое и простое угощение с минимальным набором ингредиентов.',
    cookTime: '40 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 364.04, unit: Unit.ml },
      protein: { value: 7.49, unit: Unit.g },
      fat: { value: 13.81, unit: Unit.g },
      carbs: { value: 50.47, unit: Unit.g },
    },
    cuisine: 'Русская',
    servings: 6,
    ingredients: [
      { name: 'Кефир', amount: 200, unit: Unit.ml },
      { name: 'Яйцо куриное', amount: 1, unit: Unit.pcs },
      { name: 'Сахар', amount: 1, unit: Unit.tbsp },
      { name: 'Соль', amount: 1, unit: Unit.to_taste },
      { name: 'Разрыхлитель', amount: 1, unit: Unit.tsp },
      { name: 'Мука', amount: 400, unit: Unit.g },
      { name: 'Масло растительное (для жарки)', amount: 400, unit: Unit.ml },
      { name: 'Сахарная пудра (для посыпки)', amount: 0, unit: Unit.to_taste },
    ],
    steps: [
      {
        image: '/hvorost/hvorost-na-kefire-1.webp',
        title: 'Шаг 1: Замешиваем тесто',
        text: 'В глубокой миске взбей яйцо с сахаром и щепоткой соли. Влей кефир, хорошо перемешай. Добавь разрыхлитель и частями просеянную муку, замешивая тесто. Вымеси плотное, но мягкое тесто, которое не липнет к рукам. Оставь его под плёнкой на 10–15 минут отдохнуть.'
      },
      {
        image: '/hvorost/hvorost-na-kefire-2.webp',
        title: 'Шаг 2: Формируем хворост',
        text: 'Раздели тесто на 2–3 части. Раскатай каждую часть в тонкий пласт (примерно 2 мм). Нарежь на полоски шириной 2–3 см и длиной 8–10 см. В центре каждой полоски сделай надрез и выверни один край через надрез.'
      },
      {
        image: '/hvorost/hvorost-na-kefire-5.webp',
        title: 'Шаг 3: Обжариваем',
        text: 'Разогрей масло до температуры около 180 °C (если бросить кусочек теста, он должен сразу всплыть с пузырьками). Партиями обжаривай хворост до золотистой корочки с обеих сторон. Выложи на бумажные полотенца, чтобы убрать лишнее масло.'
      },
      {
        image: '/hvorost/hvorost-na-kefire-6.webp',
        title: 'Шаг 4: Подача',
        text: 'Переложи хворост на блюдо и щедро посыпь сахарной пудрой. Подавай тёплым или полностью остывшим.'
      },
    ],
    imageMain: '/hvorost/hvorost-na-kefire-main-image-final.webp',
    categories: [
      'выпечка', 'хворост', 'на кефире', 'жареное тесто', 'сладкое к чаю', 'русская кухня', 'десерт', 'быстрый рецепт', 'домашняя выпечка', 'дешево и вкусно', 'просто'
    ],
    rating: 4.5,
    reviews: 128,
    dishCategoriesList: {
      breakfasts: {
        id: 'breakfasts',
        title: 'Завтраки'
      }
    },
    dishCategoriesSubList: {
      porridge: {
        id: 'porridge',
        title: 'Каши'
      },
    },
    cuisineCategoriesList: {
      italian: {
        id: 'italian',
        title: 'Итальянская кухня'
      },
    },
    dietCategoriesList: {
      vegan: {
        id: 'vegan',
        title: 'Веганская диета'
      },
    }
  },
  2: {
    id: 2,
    name: 'ovsyanka-s-kornishinami',
    title: 'Соль',
    description: 'Хрустящий, румяный хворост на кефире — классическая выпечка для чаепития. Быстрое и простое угощение с минимальным набором ингредиентов.',
    cookTime: '40 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 364.04, unit: Unit.ml },
      protein: { value: 7.49, unit: Unit.g },
      fat: { value: 13.81, unit: Unit.g },
      carbs: { value: 50.47, unit: Unit.g },
    },
    cuisine: 'Русская',
    servings: 6,
    ingredients: [
      { name: 'Кефир', amount: 200, unit: Unit.ml },
      { name: 'Яйцо куриное', amount: 1, unit: Unit.pcs },
      { name: 'Сахар', amount: 1, unit: Unit.tbsp },
      { name: 'Соль', amount: 1, unit: Unit.to_taste },
      { name: 'Разрыхлитель', amount: 1, unit: Unit.tsp },
      { name: 'Мука', amount: 400, unit: Unit.g },
      { name: 'Масло растительное (для жарки)', amount: 400, unit: Unit.ml },
      { name: 'Сахарная пудра (для посыпки)', amount: 0, unit: Unit.to_taste },
    ],
    steps: [
      {
        image: '/hvorost/hvorost-na-kefire-1.webp',
        title: 'Шаг 1: Замешиваем тесто',
        text: 'В глубокой миске взбей яйцо с сахаром и щепоткой соли. Влей кефир, хорошо перемешай. Добавь разрыхлитель и частями просеянную муку, замешивая тесто. Вымеси плотное, но мягкое тесто, которое не липнет к рукам. Оставь его под плёнкой на 10–15 минут отдохнуть.'
      },
      {
        image: '/hvorost/hvorost-na-kefire-2.webp',
        title: 'Шаг 2: Формируем хворост',
        text: 'Раздели тесто на 2–3 части. Раскатай каждую часть в тонкий пласт (примерно 2 мм). Нарежь на полоски шириной 2–3 см и длиной 8–10 см. В центре каждой полоски сделай надрез и выверни один край через надрез.'
      },
      {
        image: '/hvorost/hvorost-na-kefire-5.webp',
        title: 'Шаг 3: Обжариваем',
        text: 'Разогрей масло до температуры около 180 °C (если бросить кусочек теста, он должен сразу всплыть с пузырьками). Партиями обжаривай хворост до золотистой корочки с обеих сторон. Выложи на бумажные полотенца, чтобы убрать лишнее масло.'
      },
      {
        image: '/hvorost/hvorost-na-kefire-6.webp',
        title: 'Шаг 4: Подача',
        text: 'Переложи хворост на блюдо и щедро посыпь сахарной пудрой. Подавай тёплым или полностью остывшим.'
      },
    ],
    imageMain: '/hvorost/hvorost-na-kefire-main-image-final.webp',
    categories: [
      'выпечка', 'хворост', 'на кефире', 'жареное тесто', 'сладкое к чаю', 'русская кухня', 'десерт', 'быстрый рецепт', 'домашняя выпечка', 'дешево и вкусно', 'просто'
    ],
    rating: 4.5,
    reviews: 128,
    dishCategoriesList: {
      breakfasts: {
        id: 'breakfasts',
        title: 'Завтраки'
      }
    },
    dishCategoriesSubList: {
      porridge: {
        id: 'porridge',
        title: 'Каши'
      },
    },
    cuisineCategoriesList: {
      italian: {
        id: 'italian',
        title: 'Итальянская кухня'
      },
    },
    dietCategoriesList: {
      vegan: {
        id: 'vegan',
        title: 'Веганская диета'
      },
    }
  },
  3: {
    id: 3,
    name: 'ovsyanka-s-kornishinami',
    title: 'Сахар',
    description: 'Хрустящий, румяный хворост на кефире — классическая выпечка для чаепития. Быстрое и простое угощение с минимальным набором ингредиентов.',
    cookTime: '40 минут',
    difficulty: '2/5',
    nutrition: {
      calories: { value: 364.04, unit: Unit.ml },
      protein: { value: 7.49, unit: Unit.g },
      fat: { value: 13.81, unit: Unit.g },
      carbs: { value: 50.47, unit: Unit.g },
    },
    cuisine: 'Русская',
    servings: 6,
    ingredients: [
      { name: 'Кефир', amount: 200, unit: Unit.ml },
      { name: 'Яйцо куриное', amount: 1, unit: Unit.pcs },
      { name: 'Сахар', amount: 1, unit: Unit.tbsp },
      { name: 'Соль', amount: 1, unit: Unit.to_taste },
      { name: 'Разрыхлитель', amount: 1, unit: Unit.tsp },
      { name: 'Мука', amount: 400, unit: Unit.g },
      { name: 'Масло растительное (для жарки)', amount: 400, unit: Unit.ml },
      { name: 'Сахарная пудра (для посыпки)', amount: 0, unit: Unit.to_taste },
    ],
    steps: [
      {
        image: '/hvorost/hvorost-na-kefire-1.webp',
        title: 'Шаг 1: Замешиваем тесто',
        text: 'В глубокой миске взбей яйцо с сахаром и щепоткой соли. Влей кефир, хорошо перемешай. Добавь разрыхлитель и частями просеянную муку, замешивая тесто. Вымеси плотное, но мягкое тесто, которое не липнет к рукам. Оставь его под плёнкой на 10–15 минут отдохнуть.'
      },
      {
        image: '/hvorost/hvorost-na-kefire-2.webp',
        title: 'Шаг 2: Формируем хворост',
        text: 'Раздели тесто на 2–3 части. Раскатай каждую часть в тонкий пласт (примерно 2 мм). Нарежь на полоски шириной 2–3 см и длиной 8–10 см. В центре каждой полоски сделай надрез и выверни один край через надрез.'
      },
      {
        image: '/hvorost/hvorost-na-kefire-5.webp',
        title: 'Шаг 3: Обжариваем',
        text: 'Разогрей масло до температуры около 180 °C (если бросить кусочек теста, он должен сразу всплыть с пузырьками). Партиями обжаривай хворост до золотистой корочки с обеих сторон. Выложи на бумажные полотенца, чтобы убрать лишнее масло.'
      },
      {
        image: '/hvorost/hvorost-na-kefire-6.webp',
        title: 'Шаг 4: Подача',
        text: 'Переложи хворост на блюдо и щедро посыпь сахарной пудрой. Подавай тёплым или полностью остывшим.'
      },
    ],
    imageMain: '/hvorost/hvorost-na-kefire-main-image-final.webp',
    categories: [
      'выпечка', 'хворост', 'на кефире', 'жареное тесто', 'сладкое к чаю', 'русская кухня', 'десерт', 'быстрый рецепт', 'домашняя выпечка', 'дешево и вкусно', 'просто'
    ],
    rating: 4.5,
    reviews: 128,
    dishCategoriesList: {
      breakfasts: {
        id: 'breakfasts',
        title: 'Завтраки'
      }
    },
    dishCategoriesSubList: {
      porridge: {
        id: 'porridge',
        title: 'Каши'
      },
    },
    cuisineCategoriesList: {
      italian: {
        id: 'italian',
        title: 'Итальянская кухня'
      },
    },
    dietCategoriesList: {
      vegan: {
        id: 'vegan',
        title: 'Веганская диета'
      },
    }
  },
4: {
  id:  4,
      name: 'pelmeni-klassicheskie',
      title: 'Пельмени классические',
      description: 'Традиционные русские пельмени с сочной мясной начинкой. Идеальное сочетание тонкого теста и ароматного фарша делает это блюдо любимым в каждой семье.',
      cookTime: '120 минут',
      difficulty: '3/5',
      nutrition: {
    calories: { value: 275.5, unit: Unit.g },
    protein: { value: 14.8, unit: Unit.g },
    fat: { value: 12.3, unit: Unit.g },
    carbs: { value: 28.4, unit: Unit.g },
  },
  cuisine: 'Русская',
      servings: 8,
      ingredients: [
    { name: 'Мука пшеничная', amount: 500, unit: Unit.g },
    { name: 'Яйцо куриное', amount: 2, unit: Unit.pcs },
    { name: 'Вода', amount: 200, unit: Unit.ml },
    { name: 'Соль', amount: 1, unit: Unit.tsp },
    { name: 'Фарш говяжий', amount: 400, unit: Unit.g },
    { name: 'Фарш свиной', amount: 400, unit: Unit.g },
    { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
    { name: 'Перец черный молотый', amount: 1, unit: Unit.to_taste },
    { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
  ],
      steps: [
    {
      image: '/hvorost/hvorost-na-kefire-1.webp',
      title: 'Шаг 1: Замешиваем тесто',
      text: 'В миску просейте муку, добавьте яйца, соль и воду. Замесите эластичное тесто и оставьте его отдохнуть под полотенцем на 30 минут.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-2.webp',
      title: 'Шаг 2: Готовим начинку',
      text: 'Мелко нарежьте лук и смешайте его с говяжьим и свиным фаршем. Добавьте соль и перец по вкусу, тщательно перемешайте.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-5.webp',
      title: 'Шаг 3: Лепим пельмени',
      text: 'Раскатайте тесто тонким слоем, вырежьте кружочки. На каждый кружочек положите начинку и защипните края, формируя пельмени.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-6.webp',
      title: 'Шаг 4: Варим',
      text: 'Вскипятите подсоленную воду, добавьте лавровый лист. Варите пельмени 7-8 минут после всплытия. Подавайте со сметаной или маслом.'
    },
  ],
      imageMain: '/hvorost/hvorost-na-kefire-main-image-final.webp',
      categories: [
    'пельмени', 'русская кухня', 'второе блюдо', 'домашняя кухня', 'мясные блюда', 'традиционное блюдо', 'обед', 'ужин'
  ],
      rating: 4.8,
      reviews: 256,
      dishCategoriesList: {
    'main-dishes': {
      id: 'main-dishes',
          title: 'Основные блюда'
    }
  },
  dishCategoriesSubList: {
    dumplings: {
      id: 'dumplings',
          title: 'Пельмени'
    },
  },
  cuisineCategoriesList: {
    russian: {
      id: 'russian',
          title: 'Русская кухня'
    },
  },
  dietCategoriesList: {
    'kids-menu': {
      id: 'kids-menu',
          title: 'Детское меню'
    },
  }
},
5: {
  id: 5,
      name: 'pelmeni-s-telyatinoy',
      title: 'Пельмени с телятиной',
      description: 'Нежные пельмени с сочной телятиной и ароматными специями. Более диетический вариант классических пельменей, который сохраняет все лучшие качества традиционного блюда.',
      cookTime: '90 минут',
      difficulty: '3/5',
      nutrition: {
    calories: { value: 245.5, unit: Unit.g },
    protein: { value: 16.8, unit: Unit.g },
    fat: { value: 8.3, unit: Unit.g },
    carbs: { value: 28.4, unit: Unit.g },
  },
  cuisine: 'Русская',
      servings: 6,
      ingredients: [
    { name: 'Мука пшеничная', amount: 400, unit: Unit.g },
    { name: 'Яйцо куриное', amount: 1, unit: Unit.pcs },
    { name: 'Вода', amount: 150, unit: Unit.ml },
    { name: 'Соль', amount: 1, unit: Unit.tsp },
    { name: 'Фарш телячий', amount: 500, unit: Unit.g },
    { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
    { name: 'Чеснок', amount: 2, unit: Unit.pcs },
    { name: 'Перец черный молотый', amount: 1, unit: Unit.to_taste },
    { name: 'Укроп свежий', amount: 1, unit: Unit.tbsp },
  ],
      steps: [
    {
      image: '/hvorost/hvorost-na-kefire-1.webp',
      title: 'Шаг 1: Замешиваем тесто',
      text: 'Просейте муку в миску, добавьте яйцо, соль и постепенно вливайте воду, замешивая эластичное тесто. Накройте пищевой пленкой и оставьте на 30 минут.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-2.webp',
      title: 'Шаг 2: Готовим начинку',
      text: 'Измельчите лук и чеснок, смешайте с телячьим фаршем. Добавьте рубленый укроп, соль и перец по вкусу. Тщательно перемешайте.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-5.webp',
      title: 'Шаг 3: Формируем пельмени',
      text: 'Раскатайте тесто тонко, вырежьте кружочки. В центр каждого положите начинку и защипните края, формируя пельмени.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-6.webp',
      title: 'Шаг 4: Варка',
      text: 'В кипящую подсоленную воду опустите пельмени. Варите 5-7 минут после всплытия. Подавайте со сметаной или сливочным маслом.'
    },
  ],
      imageMain: '/hvorost/hvorost-na-kefire-main-image-final.webp',
      categories: [
    'пельмени', 'русская кухня', 'второе блюдо', 'домашняя кухня', 'мясные блюда', 'телятина', 'обед', 'ужин', 'диетическое'
  ],
      rating: 4.7,
      reviews: 184,
      dishCategoriesList: {
    'main-dishes': {
      id: 'main-dishes',
          title: 'Основные блюда'
    }
  },
  dishCategoriesSubList: {
    dumplings: {
      id: 'dumplings',
          title: 'Пельмени'
    },
  },
  cuisineCategoriesList: {
    russian: {
      id: 'russian',
          title: 'Русская кухня'
    },
  },
  dietCategoriesList: {
    'low-calorie': {
      id: 'low-calorie',
          title: 'Низкокалорийные блюда'
    },
  }
},
6: {
  id: 6,
      name: 'pelmeni-s-baraninou',
      title: 'Пельмени с бараниной',
      description: 'Сочные пельмени с ароматной бараниной и восточными специями. Оригинальный вариант классического блюда с насыщенным вкусом и неповторимым ароматом.',
      cookTime: '100 минут',
      difficulty: '4/5',
      nutrition: {
    calories: { value: 285.5, unit: Unit.g },
    protein: { value: 15.8, unit: Unit.g },
    fat: { value: 16.3, unit: Unit.g },
    carbs: { value: 26.4, unit: Unit.g },
  },
  cuisine: 'Русская',
      servings: 6,
      ingredients: [
    { name: 'Мука пшеничная', amount: 400, unit: Unit.g },
    { name: 'Яйцо куриное', amount: 1, unit: Unit.pcs },
    { name: 'Вода', amount: 150, unit: Unit.ml },
    { name: 'Соль', amount: 1, unit: Unit.tsp },
    { name: 'Фарш из баранины', amount: 500, unit: Unit.g },
    { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
    { name: 'Чеснок', amount: 3, unit: Unit.pcs },
    { name: 'Зира', amount: 1, unit: Unit.tsp },
    { name: 'Кориандр молотый', amount: 1, unit: Unit.tsp },
    { name: 'Перец черный молотый', amount: 1, unit: Unit.to_taste },
    { name: 'Кинза свежая', amount: 1, unit: Unit.tbsp },
  ],
      steps: [
    {
      image: '/hvorost/hvorost-na-kefire-1.webp',
      title: 'Шаг 1: Готовим тесто',
      text: 'Просейте муку, добавьте яйцо, соль и воду. Замесите эластичное тесто и оставьте его под пленкой на 30 минут.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-2.webp',
      title: 'Шаг 2: Приготовление начинки',
      text: 'Измельчите лук и чеснок, добавьте к фаршу. Всыпьте зиру, кориандр, соль и перец. Добавьте мелко нарубленную кинзу. Тщательно перемешайте.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-5.webp',
      title: 'Шаг 3: Лепка пельменей',
      text: 'Раскатайте тесто, вырежьте кружочки. На каждый выложите начинку и защипните края, формируя пельмени.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-6.webp',
      title: 'Шаг 4: Варка',
      text: 'Варите пельмени в подсоленной воде 6-8 минут после всплытия. Подавайте с бараньим бульоном или сметаной.'
    },
  ],
      imageMain: '/hvorost/hvorost-na-kefire-main-image-final.webp',
      categories: [
    'пельмени', 'русская кухня', 'восточная кухня', 'второе блюдо', 'домашняя кухня', 'мясные блюда', 'баранина', 'обед', 'ужин'
  ],
      rating: 4.6,
      reviews: 142,
      dishCategoriesList: {
    'main-dishes': {
      id: 'main-dishes',
          title: 'Основные блюда'
    }
  },
  dishCategoriesSubList: {
    dumplings: {
      id: 'dumplings',
          title: 'Пельмени'
    },
  },
  cuisineCategoriesList: {
    russian: {
      id: 'russian',
          title: 'Русская кухня'
    },
  },
  dietCategoriesList: {
    'high-protein': {
      id: 'high-protein',
          title: 'Высокобелковые блюда'
    },
  }
},
7: {
  id: 7,
      name: 'pelmeni-s-kuritsey',
      title: 'Пельмени с курицей',
      description: 'Легкие и диетические пельмени с куриным фаршем. Отличный вариант для тех, кто следит за фигурой или предпочитает более легкие блюда.',
      cookTime: '80 минут',
      difficulty: '2/5',
      nutrition: {
    calories: { value: 220.5, unit: Unit.g },
    protein: { value: 18.8, unit: Unit.g },
    fat: { value: 6.3, unit: Unit.g },
    carbs: { value: 27.4, unit: Unit.g },
  },
  cuisine: 'Русская',
      servings: 6,
      ingredients: [
    { name: 'Мука пшеничная', amount: 400, unit: Unit.g },
    { name: 'Яйцо куриное', amount: 1, unit: Unit.pcs },
    { name: 'Вода', amount: 150, unit: Unit.ml },
    { name: 'Соль', amount: 1, unit: Unit.tsp },
    { name: 'Фарш куриный', amount: 500, unit: Unit.g },
    { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
    { name: 'Чеснок', amount: 2, unit: Unit.pcs },
    { name: 'Перец черный молотый', amount: 1, unit: Unit.to_taste },
    { name: 'Петрушка свежая', amount: 1, unit: Unit.tbsp },
  ],
      steps: [
    {
      image: '/hvorost/hvorost-na-kefire-1.webp',
      title: 'Шаг 1: Замешиваем тесто',
      text: 'В миску просейте муку, добавьте яйцо, соль и воду. Замесите эластичное тесто и оставьте его отдохнуть под пленкой на 30 минут.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-2.webp',
      title: 'Шаг 2: Готовим начинку',
      text: 'Измельчите лук и чеснок, смешайте с куриным фаршем. Добавьте рубленую петрушку, соль и перец по вкусу. Хорошо перемешайте.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-5.webp',
      title: 'Шаг 3: Лепим пельмени',
      text: 'Раскатайте тесто тонким слоем, вырежьте кружочки. На каждый положите начинку и защипните края, формируя пельмени.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-6.webp',
      title: 'Шаг 4: Варим',
      text: 'В кипящую подсоленную воду опустите пельмени. Варите 5-6 минут после всплытия. Подавайте со сметаной или куриным бульоном.'
    },
  ],
      imageMain: '/hvorost/hvorost-na-kefire-main-image-final.webp',
      categories: [
    'пельмени', 'русская кухня', 'второе блюдо', 'домашняя кухня', 'куриное мясо', 'диетическое', 'обед', 'ужин'
  ],
      rating: 4.7,
      reviews: 198,
      dishCategoriesList: {
    'main-dishes': {
      id: 'main-dishes',
          title: 'Основные блюда'
    }
  },
  dishCategoriesSubList: {
    dumplings: {
      id: 'dumplings',
          title: 'Пельмени'
    },
  },
  cuisineCategoriesList: {
    russian: {
      id: 'russian',
          title: 'Русская кухня'
    },
  },
  dietCategoriesList: {
    'low-calorie': {
      id: 'low-calorie',
          title: 'Низкокалорийные блюда'
    },
  }
},
8: {
  id: 8,
      name: 'pelmeni-s-ryboi',
      title: 'Пельмени с рыбой',
      description: 'Оригинальные пельмени с нежной рыбной начинкой. Прекрасная альтернатива мясным пельменям, особенно актуальная в пост или для любителей морепродуктов.',
      cookTime: '90 минут',
      difficulty: '3/5',
      nutrition: {
    calories: { value: 235.5, unit: Unit.g },
    protein: { value: 17.8, unit: Unit.g },
    fat: { value: 7.3, unit: Unit.g },
    carbs: { value: 27.4, unit: Unit.g },
  },
  cuisine: 'Русская',
      servings: 6,
      ingredients: [
    { name: 'Мука пшеничная', amount: 400, unit: Unit.g },
    { name: 'Яйцо куриное', amount: 1, unit: Unit.pcs },
    { name: 'Вода', amount: 150, unit: Unit.ml },
    { name: 'Соль', amount: 1, unit: Unit.tsp },
    { name: 'Филе трески', amount: 400, unit: Unit.g },
    { name: 'Филе лосося', amount: 200, unit: Unit.g },
    { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
    { name: 'Укроп свежий', amount: 1, unit: Unit.tbsp },
    { name: 'Перец черный молотый', amount: 1, unit: Unit.to_taste },
    { name: 'Масло сливочное', amount: 50, unit: Unit.g },
  ],
      steps: [
    {
      image: '/hvorost/hvorost-na-kefire-1.webp',
      title: 'Шаг 1: Готовим тесто',
      text: 'Просейте муку, добавьте яйцо, соль и воду. Замесите эластичное тесто и оставьте его отдохнуть под пленкой на 30 минут.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-2.webp',
      title: 'Шаг 2: Готовим начинку',
      text: 'Измельчите рыбное филе и лук в мясорубке. Добавьте размягченное масло, укроп, соль и перец. Тщательно перемешайте.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-5.webp',
      title: 'Шаг 3: Лепим пельмени',
      text: 'Раскатайте тесто, вырежьте кружочки. На каждый положите рыбную начинку и защипните края, формируя пельмени.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-6.webp',
      title: 'Шаг 4: Варим',
      text: 'Варите пельмени в подсоленной воде 4-5 минут после всплытия. Подавайте с растопленным сливочным маслом и зеленью.'
    },
  ],
      imageMain: '/hvorost/hvorost-na-kefire-main-image-final.webp',
      categories: [
    'пельмени', 'русская кухня', 'рыбные блюда', 'второе блюдо', 'домашняя кухня', 'морепродукты', 'постное', 'обед', 'ужин'
  ],
      rating: 4.5,
      reviews: 156,
      dishCategoriesList: {
    'main-dishes': {
      id: 'main-dishes',
          title: 'Основные блюда'
    }
  },
  dishCategoriesSubList: {
    dumplings: {
      id: 'dumplings',
          title: 'Пельмени'
    },
  },
  cuisineCategoriesList: {
    russian: {
      id: 'russian',
          title: 'Русская кухня'
    },
  },
  dietCategoriesList: {
    lean: {
      id: 'lean',
          title: 'Постные блюда'
    },
  }
},
9: {
  id: 9,
      name: 'pelmeni-s-gribami',
      title: 'Пельмени с грибами',
      description: 'Ароматные постные пельмени с грибной начинкой. Идеальное блюдо для вегетарианцев и постящихся, которое не уступает по вкусу классическим мясным пельменям.',
      cookTime: '100 минут',
      difficulty: '3/5',
      nutrition: {
    calories: { value: 198.5, unit: Unit.g },
    protein: { value: 6.8, unit: Unit.g },
    fat: { value: 4.3, unit: Unit.g },
    carbs: { value: 34.4, unit: Unit.g },
  },
  cuisine: 'Русская',
      servings: 6,
      ingredients: [
    { name: 'Мука пшеничная', amount: 400, unit: Unit.g },
    { name: 'Вода', amount: 200, unit: Unit.ml },
    { name: 'Соль', amount: 1, unit: Unit.tsp },
    { name: 'Грибы шампиньоны', amount: 500, unit: Unit.g },
    { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
    { name: 'Чеснок', amount: 2, unit: Unit.pcs },
    { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
    { name: 'Перец черный молотый', amount: 1, unit: Unit.to_taste },
    { name: 'Тимьян свежий', amount: 1, unit: Unit.tbsp },
  ],
      steps: [
    {
      image: '/hvorost/hvorost-na-kefire-1.webp',
      title: 'Шаг 1: Замешиваем тесто',
      text: 'Просейте муку, добавьте соль и воду. Замесите эластичное постное тесто и оставьте его отдохнуть под пленкой на 30 минут.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-2.webp',
      title: 'Шаг 2: Готовим начинку',
      text: 'Мелко нарежьте грибы и лук. Обжарьте лук до золотистого цвета, добавьте грибы и чеснок. Жарьте до испарения жидкости. В конце добавьте тимьян, соль и перец.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-5.webp',
      title: 'Шаг 3: Лепим пельмени',
      text: 'Раскатайте тесто, вырежьте кружочки. На каждый положите грибную начинку и защипните края, формируя пельмени.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-6.webp',
      title: 'Шаг 4: Варим',
      text: 'Варите пельмени в подсоленной воде 4-5 минут после всплытия. Подавайте с растительным маслом и зеленью.'
    },
  ],
      imageMain: '/hvorost/hvorost-na-kefire-main-image-final.webp',
      categories: [
    'пельмени', 'русская кухня', 'грибные блюда', 'второе блюдо', 'домашняя кухня', 'постное', 'вегетарианское', 'обед', 'ужин'
  ],
      rating: 4.6,
      reviews: 167,
      dishCategoriesList: {
    'main-dishes': {
      id: 'main-dishes',
          title: 'Основные блюда'
    }
  },
  dishCategoriesSubList: {
    dumplings: {
      id: 'dumplings',
          title: 'Пельмени'
    },
  },
  cuisineCategoriesList: {
    russian: {
      id: 'russian',
          title: 'Русская кухня'
    },
  },
  dietCategoriesList: {
    vegetarian: {
      id: 'vegetarian',
          title: 'Вегетарианские блюда'
    },
  }
},
10: {
  id: 10,
      name: 'pelmeni-s-tykvoi',
      title: 'Пельмени с тыквой',
      description: 'Необычные сладковатые пельмени с тыквенной начинкой. Яркое и полезное блюдо, которое понравится и взрослым, и детям. Отличный способ разнообразить постное меню.',
      cookTime: '90 минут',
      difficulty: '3/5',
      nutrition: {
    calories: { value: 205.5, unit: Unit.g },
    protein: { value: 5.8, unit: Unit.g },
    fat: { value: 3.3, unit: Unit.g },
    carbs: { value: 41.4, unit: Unit.g },
  },
  cuisine: 'Русская',
      servings: 6,
      ingredients: [
    { name: 'Мука пшеничная', amount: 400, unit: Unit.g },
    { name: 'Вода', amount: 200, unit: Unit.ml },
    { name: 'Соль', amount: 1, unit: Unit.tsp },
    { name: 'Тыква', amount: 600, unit: Unit.g },
    { name: 'Лук репчатый', amount: 1, unit: Unit.pcs },
    { name: 'Масло растительное', amount: 2, unit: Unit.tbsp },
    { name: 'Корица молотая', amount: 0.5, unit: Unit.tsp },
    { name: 'Мускатный орех', amount: 0.25, unit: Unit.tsp },
    { name: 'Сахар', amount: 1, unit: Unit.tbsp },
  ],
      steps: [
    {
      image: '/hvorost/hvorost-na-kefire-1.webp',
      title: 'Шаг 1: Готовим тесто',
      text: 'Просейте муку, добавьте соль и воду. Замесите эластичное постное тесто и оставьте его отдохнуть под пленкой на 30 минут.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-2.webp',
      title: 'Шаг 2: Готовим начинку',
      text: 'Нарежьте тыкву кубиками и припустите с небольшим количеством воды до мягкости. Обжарьте лук до золотистого цвета. Измельчите тыкву в пюре, добавьте лук, специи и сахар.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-5.webp',
      title: 'Шаг 3: Лепим пельмени',
      text: 'Раскатайте тесто, вырежьте кружочки. На каждый положите тыквенную начинку и защипните края, формируя пельмени.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-6.webp',
      title: 'Шаг 4: Варим',
      text: 'Варите пельмени в подсоленной воде 4-5 минут после всплытия. Подавайте с растительным маслом или медом.'
    },
  ],
      imageMain: '/hvorost/hvorost-na-kefire-main-image-final.webp',
      categories: [
    'пельмени', 'русская кухня', 'овощные блюда', 'второе блюдо', 'домашняя кухня', 'постное', 'вегетарианское', 'обед', 'ужин'
  ],
      rating: 4.4,
      reviews: 132,
      dishCategoriesList: {
    'main-dishes': {
      id: 'main-dishes',
          title: 'Основные блюда'
    }
  },
  dishCategoriesSubList: {
    dumplings: {
      id: 'dumplings',
          title: 'Пельмени'
    },
  },
  cuisineCategoriesList: {
    russian: {
      id: 'russian',
          title: 'Русская кухня'
    },
  },
  dietCategoriesList: {
    vegetarian: {
      id: 'vegetarian',
          title: 'Вегетарианские блюда'
    },
  }
},
11: {
  id: 11,
      name: 'pelmeni-s-kartoshkoi',
      title: 'Пельмени с картошкой',
      description: 'Сытные постные пельмени с картофельной начинкой. Простое и экономичное блюдо, которое напомнит вкус бабушкиных вареников.',
      cookTime: '80 минут',
      difficulty: '2/5',
      nutrition: {
    calories: { value: 225.5, unit: Unit.g },
    protein: { value: 5.8, unit: Unit.g },
    fat: { value: 2.3, unit: Unit.g },
    carbs: { value: 47.4, unit: Unit.g },
  },
  cuisine: 'Русская',
      servings: 6,
      ingredients: [
    { name: 'Мука пшеничная', amount: 400, unit: Unit.g },
    { name: 'Вода', amount: 200, unit: Unit.ml },
    { name: 'Соль', amount: 1, unit: Unit.tsp },
    { name: 'Картофель', amount: 600, unit: Unit.g },
    { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
    { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
    { name: 'Перец черный молотый', amount: 1, unit: Unit.to_taste },
    { name: 'Укроп свежий', amount: 1, unit: Unit.tbsp },
  ],
      steps: [
    {
      image: '/hvorost/hvorost-na-kefire-1.webp',
      title: 'Шаг 1: Замешиваем тесто',
      text: 'Просейте муку, добавьте соль и воду. Замесите эластичное постное тесто и оставьте его отдохнуть под пленкой на 30 минут.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-2.webp',
      title: 'Шаг 2: Готовим начинку',
      text: 'Отварите картофель, сделайте пюре. Обжарьте лук до золотистого цвета, добавьте к картофелю вместе с укропом, солью и перцем. Тщательно перемешайте.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-5.webp',
      title: 'Шаг 3: Лепим пельмени',
      text: 'Раскатайте тесто, вырежьте кружочки. На каждый положите картофельную начинку и защипните края, формируя пельмени.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-6.webp',
      title: 'Шаг 4: Варим',
      text: 'Варите пельмени в подсоленной воде 4-5 минут после всплытия. Подавайте с обжаренным луком и растительным маслом.'
    },
  ],
      imageMain: '/hvorost/hvorost-na-kefire-main-image-final.webp',
      categories: [
    'пельмени', 'русская кухня', 'овощные блюда', 'второе блюдо', 'домашняя кухня', 'постное', 'вегетарианское', 'обед', 'ужин', 'экономное'
  ],
      rating: 4.5,
      reviews: 178,
      dishCategoriesList: {
    'main-dishes': {
      id: 'main-dishes',
          title: 'Основные блюда'
    }
  },
  dishCategoriesSubList: {
    dumplings: {
      id: 'dumplings',
          title: 'Пельмени'
    },
  },
  cuisineCategoriesList: {
    russian: {
      id: 'russian',
          title: 'Русская кухня'
    },
  },
  dietCategoriesList: {
    vegetarian: {
      id: 'vegetarian',
          title: 'Вегетарианские блюда'
    },
  }
},
12: {
  id: 12,
      name: 'pelmeni-s-kapustoy',
      title: 'Пельмени с капустой',
      description: 'Постные пельмени с сочной капустной начинкой. Легкое и полезное блюдо, которое особенно актуально в пост или для вегетарианского меню.',
      cookTime: '90 минут',
      difficulty: '3/5',
      nutrition: {
    calories: { value: 195.5, unit: Unit.g },
    protein: { value: 4.8, unit: Unit.g },
    fat: { value: 2.3, unit: Unit.g },
    carbs: { value: 39.4, unit: Unit.g },
  },
  cuisine: 'Русская',
      servings: 6,
      ingredients: [
    { name: 'Мука пшеничная', amount: 400, unit: Unit.g },
    { name: 'Вода', amount: 200, unit: Unit.ml },
    { name: 'Соль', amount: 1, unit: Unit.tsp },
    { name: 'Капуста белокочанная', amount: 700, unit: Unit.g },
    { name: 'Лук репчатый', amount: 2, unit: Unit.pcs },
    { name: 'Морковь', amount: 1, unit: Unit.pcs },
    { name: 'Масло растительное', amount: 3, unit: Unit.tbsp },
    { name: 'Перец черный молотый', amount: 1, unit: Unit.to_taste },
    { name: 'Укроп свежий', amount: 1, unit: Unit.tbsp },
  ],
      steps: [
    {
      image: '/hvorost/hvorost-na-kefire-1.webp',
      title: 'Шаг 1: Готовим тесто',
      text: 'Просейте муку, добавьте соль и воду. Замесите эластичное постное тесто и оставьте его отдохнуть под пленкой на 30 минут.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-2.webp',
      title: 'Шаг 2: Готовим начинку',
      text: 'Нашинкуйте капусту, натрите морковь, нарежьте лук. Обжарьте овощи до мягкости, добавьте соль, перец и укроп. Остудите начинку.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-5.webp',
      title: 'Шаг 3: Лепим пельмени',
      text: 'Раскатайте тесто, вырежьте кружочки. На каждый положите капустную начинку и защипните края, формируя пельмени.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-6.webp',
      title: 'Шаг 4: Варим',
      text: 'Варите пельмени в подсоленной воде 4-5 минут после всплытия. Подавайте с растительным маслом и свежей зеленью.'
    },
  ],
      imageMain: '/hvorost/hvorost-na-kefire-main-image-final.webp',
      categories: [
    'пельмени', 'русская кухня', 'овощные блюда', 'второе блюдо', 'домашняя кухня', 'постное', 'вегетарианское', 'обед', 'ужин'
  ],
      rating: 4.3,
      reviews: 145,
      dishCategoriesList: {
    'main-dishes': {
      id: 'main-dishes',
          title: 'Основные блюда'
    }
  },
  dishCategoriesSubList: {
    dumplings: {
      id: 'dumplings',
          title: 'Пельмени'
    },
  },
  cuisineCategoriesList: {
    russian: {
      id: 'russian',
          title: 'Русская кухня'
    },
  },
  dietCategoriesList: {
    vegetarian: {
      id: 'vegetarian',
          title: 'Вегетарианские блюда'
    },
  }
},
13: {
  id: 13,
      name: 'pelmeni-s-syrom',
      title: 'Пельмени с сыром',
      description: 'Оригинальные пельмени с сырной начинкой. Сытное и вкусное блюдо, которое особенно понравится любителям сыра и детям.',
      cookTime: '70 минут',
      difficulty: '2/5',
      nutrition: {
    calories: { value: 285.5, unit: Unit.g },
    protein: { value: 14.8, unit: Unit.g },
    fat: { value: 15.3, unit: Unit.g },
    carbs: { value: 27.4, unit: Unit.g },
  },
  cuisine: 'Русская',
      servings: 6,
      ingredients: [
    { name: 'Мука пшеничная', amount: 400, unit: Unit.g },
    { name: 'Яйцо куриное', amount: 1, unit: Unit.pcs },
    { name: 'Вода', amount: 150, unit: Unit.ml },
    { name: 'Соль', amount: 1, unit: Unit.tsp },
    { name: 'Сыр твердый', amount: 300, unit: Unit.g },
    { name: 'Сыр плавленый', amount: 200, unit: Unit.g },
    { name: 'Масло сливочное', amount: 50, unit: Unit.g },
    { name: 'Перец черный молотый', amount: 1, unit: Unit.to_taste },
    { name: 'Зелень петрушки', amount: 1, unit: Unit.tbsp },
  ],
      steps: [
    {
      image: '/hvorost/hvorost-na-kefire-1.webp',
      title: 'Шаг 1: Замешиваем тесто',
      text: 'В миску просейте муку, добавьте яйцо, соль и воду. Замесите эластичное тесто и оставьте его отдохнуть под пленкой на 30 минут.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-2.webp',
      title: 'Шаг 2: Готовим начинку',
      text: 'Натрите твердый сыр, нарежьте плавленый сыр. Смешайте сыры с размягченным сливочным маслом, добавьте рубленую петрушку, соль и перец.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-5.webp',
      title: 'Шаг 3: Лепим пельмени',
      text: 'Раскатайте тесто, вырежьте кружочки. На каждый положите сырную начинку и защипните края, формируя пельмени.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-6.webp',
      title: 'Шаг 4: Варим',
      text: 'Варите пельмени в подсоленной воде 3-4 минуты после всплытия. Подавайте со сливочным маслом и свежей зеленью.'
    },
  ],
      imageMain: '/hvorost/hvorost-na-kefire-main-image-final.webp',
      categories: [
    'пельмени', 'русская кухня', 'второе блюдо', 'домашняя кухня', 'вегетарианское', 'сырные блюда', 'обед', 'ужин'
  ],
      rating: 4.7,
      reviews: 189,
      dishCategoriesList: {
    'main-dishes': {
      id: 'main-dishes',
          title: 'Основные блюда'
    }
  },
  dishCategoriesSubList: {
    dumplings: {
      id: 'dumplings',
          title: 'Пельмени'
    },
  },
  cuisineCategoriesList: {
    russian: {
      id: 'russian',
          title: 'Русская кухня'
    },
  },
  dietCategoriesList: {
    vegetarian: {
      id: 'vegetarian',
          title: 'Вегетарианские блюда'
    },
  }
},
14: {
  id: 14,
      name: 'pelmeni-po-sibirski',
      title: 'Пельмени по-сибирски (старый рецепт)',
      description: 'Традиционные сибирские пельмени по старинному рецепту. Сочная мясная начинка в тонком тесте - классика русской кухни, которая никогда не выходит из моды.',
      cookTime: '150 минут',
      difficulty: '4/5',
      nutrition: {
    calories: { value: 282.5, unit: Unit.g },
    protein: { value: 15.8, unit: Unit.g },
    fat: { value: 12.3, unit: Unit.g },
    carbs: { value: 29.4, unit: Unit.g },
  },
  cuisine: 'Русская',
      servings: 8,
      ingredients: [
    { name: 'Мука пшеничная', amount: 1500, unit: Unit.g },
    { name: 'Яйцо куриное', amount: 3, unit: Unit.pcs },
    { name: 'Вода', amount: 500, unit: Unit.ml },
    { name: 'Соль', amount: 1, unit: Unit.tsp },
    { name: 'Фарш говяжий', amount: 1000, unit: Unit.g },
    { name: 'Фарш свиной', amount: 500, unit: Unit.g },
    { name: 'Лук репчатый', amount: 1000, unit: Unit.g },
    { name: 'Перец черный молотый', amount: 1, unit: Unit.tsp },
    { name: 'Чеснок', amount: 2, unit: Unit.pcs },
  ],
      steps: [
    {
      image: '/hvorost/hvorost-na-kefire-1.webp',
      title: 'Шаг 1: Подготовка фарша',
      text: 'Пропустите через мясорубку говядину, свинину и репчатый лук. Добавьте измельченный чеснок, соль и перец. Тщательно перемешайте начинку до однородного состояния.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-2.webp',
      title: 'Шаг 2: Замешиваем тесто',
      text: 'В глубокой миске смешайте муку с солью. Взбейте яйца с водой и постепенно вливайте в муку, замешивая крутое тесто. Вымешивайте не менее 10-12 минут до эластичного состояния.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-5.webp',
      title: 'Шаг 3: Раскатываем и лепим',
      text: 'Разделите тесто на части. Раскатайте каждую часть в тонкий пласт. Вырежьте кружочки, выложите начинку и защипните края, формируя пельмени. Важно хорошо залепить края, чтобы начинка не вытекала при варке.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-6.webp',
      title: 'Шаг 4: Варка',
      text: 'Опустите пельмени в кипящую подсоленную воду. После всплытия варите 8 минут на среднем огне. Подавайте горячими со сметаной, маслом или бульоном.'
    },
  ],
      imageMain: '/hvorost/hvorost-na-kefire-main-image-final.webp',
      categories: [
    'пельмени', 'русская кухня', 'сибирская кухня', 'второе блюдо', 'домашняя кухня', 'мясные блюда', 'традиционное блюдо', 'обед', 'ужин'
  ],
      rating: 4.9,
      reviews: 272,
      dishCategoriesList: {
    'main-dishes': {
      id: 'main-dishes',
          title: 'Основные блюда'
    }
  },
  dishCategoriesSubList: {
    dumplings: {
      id: 'dumplings',
          title: 'Пельмени'
    },
  },
  cuisineCategoriesList: {
    russian: {
      id: 'russian',
          title: 'Русская кухня'
    },
  },
  dietCategoriesList: {
    'traditional': {
      id: 'traditional',
          title: 'Традиционная кухня'
    },
  }
},
15: {
  id: 15,
      name: 'shaurma-shashlychnaya',
      title: 'Шаурма «Шашлычная»',
      description: 'Аппетитная домашняя шаурма с сочным шашлыком из свинины и свежими овощами. Идеальное сочетание традиционного шашлыка в современной подаче - отличный вариант для пикника или домашнего обеда.',
      cookTime: '60 минут',
      difficulty: '2/5',
      nutrition: {
    calories: { value: 139.57, unit: Unit.g },
    protein: { value: 5.97, unit: Unit.g },
    fat: { value: 9.07, unit: Unit.g },
    carbs: { value: 8.22, unit: Unit.g },
  },
  cuisine: 'Русская',
      servings: 2,
      ingredients: [
    { name: 'Огурец', amount: 120, unit: Unit.g },
    { name: 'Помидор', amount: 90, unit: Unit.g },
    { name: 'Салат айсберг', amount: 20, unit: Unit.g },
    { name: 'Майонез постный', amount: 16, unit: Unit.g },
    { name: 'Сыр твердый', amount: 20, unit: Unit.g },
    { name: 'Свинина для шашлыка', amount: 80, unit: Unit.g },
    { name: 'Сок лимонный', amount: 20, unit: Unit.ml },
    { name: 'Лепешка пшеничная', amount: 40, unit: Unit.g }
  ],
      steps: [
    {
      image: '/hvorost/hvorost-na-kefire-1.webp',
      title: 'Шаг 1: Подготовка овощей',
      text: 'Тщательно вымойте все овощи. Нарежьте половину огурца, измельчите салат айсберг, нарежьте половину помидора. Сложите овощи в салатник.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-2.webp',
      title: 'Шаг 2: Приготовление начинки',
      text: 'Заправьте овощи постным майонезом. Натрите сыр на мелкой терке и добавьте к овощам. Сбрызните все лимонным соком и перемешайте.'
    },
    {
      image: '/hvorost/hvorost-na-kefire-5.webp',
      title: 'Шаг 3: Добавление мяса',
      text: 'Готовый шашлык из свинины нарежьте небольшими кусочками и добавьте к овощной смеси. Шашлык должен быть предварительно приготовлен на мангале (30-40 минут).'
    },
    {
      image: '/hvorost/hvorost-na-kefire-6.webp',
      title: 'Шаг 4: Сборка шаурмы',
      text: 'В центр пшеничной лепешки выложите 1-2 ложки начинки. Сверните шаурму удобным способом, постепенно добавляя оставшуюся начинку.'
    }
  ],
      imageMain: '/hvorost/hvorost-na-kefire-main-image-final.webp',
      categories: [
    'закуски', 'уличная еда', 'фастфуд', 'шаурма', 'мясные блюда', 'для пикника', 'обед', 'перекус'
  ],
      rating: 4.7,
      reviews: 19,
      dishCategoriesList: {
    'snacks': {
      id: 'snacks',
          title: 'Закуски'
    }
  },
  dishCategoriesSubList: {
    'street-food': {
      id: 'street-food',
          title: 'Уличная еда'
    }
  },
  cuisineCategoriesList: {
    'fusion': {
      id: 'fusion',
          title: 'Фьюжн'
    }
  },
  dietCategoriesList: {
    'meat': {
      id: 'meat',
          title: 'Мясные блюда'
    }
  }
},
};
