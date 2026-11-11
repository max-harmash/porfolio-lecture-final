@AGENTS.md

# Портфоліо Максима Гармаша

## Стек

Next.js 16 (App Router) + TypeScript + Tailwind v4. Storybook 10 (`@storybook/nextjs-vite`) для компонентів.
План сайту: `docs/plan.html`. Макет: Figma «HW-1 Example».

## Токени

Єдине джерело значень — блок `@theme` у `src/app/globals.css`. Шрифти — `src/app/fonts.ts` (next/font).
Перегляд усіх токенів: Storybook, `Foundations/Tokens` (`src/design-system/Tokens.mdx`).
Ролі кольору: `canvas`, `surface`, `line`, `accent`, `ink`, `ink-muted`, `danger`. Радіуси `rounded-control`, `rounded-card` (обидва 0). Відступи в компонентах — лише кроки 2, 3, 4, 6, 8. Для розкладки сторінок є ще `max-w-page` (1224px) і `section` (72px: `gap-section`, `pt-section`); у компонентах їх не використовуйте. Повні правила — у скілі `.claude/skills/storybook/SKILL.md`, розділ «Токени системи».

## Компоненти

Лежать у `src/components/<Назва>/`: компонент і історія `<Назва>.stories.tsx` з описом для docs.

- `Button` — кнопка або посилання-кнопка: `primary` (accent) і `secondary` (межа ink-muted), розміри `md` і `lg`, вимкнений стан з поясненням `disabledReason`.
- `TextField` — текстове поле з підписом над ним: помилка з іконкою й текстом danger, підказка, вимкнений стан.
- `WorkCard` — картка роботи: обкладинка, номер і назва, опис; уся картка — посилання.
- `Nav` — навігація: логотип, пункти з активним станом, кнопка праворуч; до 768px згортається в «Меню».

## Картинки

Картинки компонентів імпортуються статично з `src/assets/` (`import cover from "@/assets/cases/training.jpg"`). Файли з `public/` у Storybook недоступні: `staticDirs` навмисно вимкнено, бо Storybook збирається в `public/storybook`.

## Скіли проєкту

- `storybook` — історії й документація компонентів, налаштування й збірка Storybook.
- `vercel` — превʼю й продакшн-деплой. Продакшн, пуш і злиття в `main` лише після «так» у чаті.
