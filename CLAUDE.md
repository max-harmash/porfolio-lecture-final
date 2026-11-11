@AGENTS.md

# Портфоліо Максима Гармаша

## Стек

Next.js 16 (App Router) + TypeScript + Tailwind v4. Storybook 10 (`@storybook/nextjs-vite`) для компонентів.
План сайту: `docs/plan.html`. Макет: Figma «HW-1 Example».

## Токени

Єдине джерело значень — блок `@theme` у `src/app/globals.css`. Шрифти — `src/app/fonts.ts` (next/font).
Зразки всіх токенів: сторінка `/tokens`. Повний перелік і правила використання — у скілі `.claude/skills/storybook/SKILL.md`, розділ «Токени системи».

## Компоненти

Лежать у `src/components/<Назва>/`: компонент, історія `<Назва>.stories.tsx` і опис для docs поруч.

- `Button` — кнопка або посилання-кнопка, варіанти `primary` і `secondary`.

## Скіли проєкту

- `storybook` — історії й документація компонентів, налаштування й збірка Storybook.
- `vercel` — превʼю й продакшн-деплой. Продакшн, пуш і злиття в `main` лише після «так» у чаті.
