import type { Product, ProductCategory } from '../types/models'

export const CATEGORY_LABELS: Record<ProductCategory | 'all', string> = {
  all: 'Всі категорії',
  electronics: 'Електроніка',
  clothing: 'Одяг',
  home: 'Дім',
  books: 'Книги',
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Бездротові навушники',
    description: 'Шумозаглушення, до 30 годин роботи від батареї',
    price: 2499,
    category: 'electronics',
    emoji: '🎧',
  },
  {
    id: '2',
    name: 'Механічна клавіатура',
    description: 'Компактна клавіатура з RGB-підсвіткою',
    price: 1899,
    category: 'electronics',
    emoji: '⌨️',
  },
  {
    id: '3',
    name: 'Худі оверсайз',
    description: 'Бавовняне худі вільного крою, кілька кольорів',
    price: 999,
    category: 'clothing',
    emoji: '👕',
  },
  {
    id: '4',
    name: 'Кросівки для бігу',
    description: 'Легкі кросівки з амортизацією для щоденних тренувань',
    price: 2199,
    category: 'clothing',
    emoji: '👟',
  },
  {
    id: '5',
    name: 'Ароматична свічка',
    description: 'Свічка ручної роботи з ароматом ванілі та кориці',
    price: 349,
    category: 'home',
    emoji: '🕯️',
  },
  {
    id: '6',
    name: 'Набір керамічних чашок',
    description: 'Комплект з 4 чашок для чаю чи кави',
    price: 599,
    category: 'home',
    emoji: '☕',
  },
  {
    id: '7',
    name: 'Атомні звички',
    description: 'Бестселер про формування корисних звичок',
    price: 449,
    category: 'books',
    emoji: '📘',
  },
  {
    id: '8',
    name: 'Чиста архітектура',
    description: 'Класика про принципи проєктування програмного забезпечення',
    price: 599,
    category: 'books',
    emoji: '📗',
  },
]
