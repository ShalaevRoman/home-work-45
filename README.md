# Домашнє завдання 45 — Tailwind CSS у React

Каталог товарів на React + TypeScript + Vite з інтеграцією **Tailwind CSS**. Демонструє власні компоненти (`Header`, `ProductFilterForm`, `ProductCard`, `ProductList`, `CartPanel`), пошук/фільтрацію товарів за категорією та повноцінний кошик з можливістю додавання і видалення товарів.

## Технології

- React 19 + TypeScript
- Vite
- Tailwind CSS 4 (`@tailwindcss/vite`)

## Встановлення та запуск

```bash
git clone https://github.com/ShalaevRoman/home-work-45.git
cd home-work-45
npm install
npm run dev
```

Проєкт буде доступний на `http://localhost:5173`.

## Структура проєкту

```
src/
├── types/          # Типи та інтерфейси (models.ts, components.ts)
├── constants/       # Мокові дані товарів
├── components/      # Header, ProductFilterForm, ProductCard, ProductList, CartPanel
├── hooks/            # useProductFilter, useCart
├── App.tsx
└── main.tsx
```

## Посилання на проект

Демо: https://home-work-45-tau.vercel.app
GitHub: https://github.com/ShalaevRoman/home-work-45