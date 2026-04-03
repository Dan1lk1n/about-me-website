# Feature Requests — Лендинг «Данил»

Статический одностраничный лендинг на Next.js 15. Только тёмная тема, только русский язык.

---

## F-01 · Проект и инфраструктура

- Инициализировать Next.js 15 (App Router) + TypeScript
- Установить зависимости: `tailwindcss` v4, `framer-motion`, `lucide-react`
- Подключить шрифты через `next/font`: **JetBrains Mono** и **Geist**
- Настроить Tailwind: кастомный `globals.css` с CSS-переменными дизайн-системы (цвета, типографика, радиусы — см. `docs/design-system.md`)
- Структура `src/`: `app/`, `components/sections/`, `components/ui/`, `lib/`, `styles/`

---

## F-02 · Конфиг ссылок (`src/lib/links.ts`)

Отдельный файл-конфиг, единственное место где хранятся все внешние ссылки сайта.

```ts
export const LINKS = {
  telegram: "https://t.me/...",
  email: "mailto:...",
  hhru: "https://hh.ru/resume/...",
  githubSite: "https://github.com/...",
}
```

- Все компоненты импортируют ссылки только из этого файла
- Менять ссылки — только здесь, без поиска по всему проекту

---

## F-03 · Контент (`src/lib/content.ts`)

Весь текстовый контент сайта — TypeScript-объекты, не CMS.

Содержимое:
- Данные Hero-секции (имя, роль, подзаголовок)
- Массив карточек инструментов (4 шт.) — иконка, название, описание
- Массив категорий стека — label + список технологий
- Массив карточек проектов (4 шт.) — иконка, название, описание, роль
- Объект контактов — тип, иконка, текст, ссылка из `LINKS`

---

## F-04 · Дизайн-система (`src/styles/globals.css`)

CSS-переменные в `:root` / `.dark`, точно по `docs/design-system.md`:

**Цвета:** `--primary`, `--foreground`, `--muted-foreground`, `--background`, `--card`, `--card-foreground`, `--border`, `--secondary`, `--secondary-foreground`, `--muted`, `--accent`, `--accent-foreground`, `--destructive`

**Типографика:** `--font-primary` (JetBrains Mono), `--font-secondary` (Geist); размеры `--fs-h1` (72px) → `--fs-label` (12px); высоты строк `--lh-tight` (1.1), `--lh-normal` (1.6), `--lh-relaxed` (1.7); `--ls-wide` (2px)

**Радиусы:** `--radius-m` (16px), `--radius-pill` (999px)

Тема: только Dark — `#111111` фон, `#FFFFFF` основной текст, `#FF8400` акцент.

---

## F-05 · UI-компоненты (`src/components/ui/`)

Переиспользуемые компоненты по дизайн-системе:

### SectionHeader

Вертикальный стек (gap 24px), ширина `fill`:

- **Eyebrow** — JetBrains Mono, 14px, 500, `--primary`, letter-spacing 2px
- **Title** — JetBrains Mono, 48px, 700, `--foreground`, line-height 1.1
- **Subtitle** (опционально) — Geist, 18px, normal, `--muted-foreground`, line-height 1.7

Props: `eyebrow`, `title`, `subtitle?`

### ProjectCard

Карточка 400px (или 100%), padding 32px, bg `--card`, radius 16px, вертикальный layout, gap 16px:

- Header: horizontal, иконка Lucide 24×24 (`--primary`) + название (JetBrains Mono, 16px, 600)
- Description: Geist, 14px, `--muted-foreground`
- Role: JetBrains Mono, 12px, 500, `--primary`, letter-spacing 2px

Props: `icon`, `title`, `description`, `role`

### ToolCard

Карточка 280px (или 100%), padding 32px, bg `--card`, radius 16px, вертикальный layout, gap 16px:

- Header: horizontal, иконка Lucide 32×32 (`--primary`) + название (JetBrains Mono, 16px, 600)
- Description: Geist, 14px, `--muted-foreground`

Props: `icon`, `title`, `description`

### ContactLink

Горизонтальный layout, gap 12px, alignItems center:

- Иконка Lucide 24×24, `--primary`
- Текст: Geist, 16px, 500, `--foreground`
- Обёрнут в `<a>` с href из `LINKS`

Props: `icon`, `label`, `href`

### StackCategory

Вертикальный layout, gap 2px:

- Label: JetBrains Mono, 12px, 600, `--primary`, letter-spacing 2px
- Value: Geist, 14px, normal, `--foreground`

Props: `label`, `value`

---

## F-06 · Секция Hero

**Десктоп:** горизонтальный layout, padding 80px top/bottom, 120px left/right, gap 80px между текстом и фото.

Левый блок (fill):

- Eyebrow `// ПРИВЕТ`
- Имя `Данил` — H1, JetBrains Mono, 72px, 700
- Роль `AI-First Developer` — JetBrains Mono, 48px, 300, `--muted-foreground`
- Подзаголовок — Geist, 18px, `--muted-foreground`
- Кнопки (gap 16px): «Написать в Telegram» (Primary, large, ссылка на Telegram) + «GitHub сайта →» (Ghost/outline, large, ссылка на репозиторий)

Правый блок: фото 480×560px, radius 16px, object-fit cover.

**Мобайл:** вертикальный layout. Фото сверху (full width, height 400px). Текстовый блок снизу, padding 40px top/bottom, 24px left/right:

- Имя 48px, роль 28px, подзаголовок 16px, кнопки вертикально (gap 12px, full width)

---

## F-07 · Секция About

**Десктоп:** вертикальный layout, padding 64px, gap 80px между хедером и сеткой инструментов.

About Header: `SectionHeader` (eyebrow `// ОБО МНЕ`, title `Полный цикл разработки с LLM`, subtitle — текст об опыте).

Tools Grid:

- Eyebrow `// МОЙ ИНСТРУМЕНТАРИЙ`
- Сетка 2×2: два ряда по 2 `ToolCard`, gap 12px

**Мобайл:** padding 48px top/bottom, 24px left/right, gap 40px. Сетка инструментов — 1 колонка, full width.

---

## F-08 · Секция Stack

**Десктоп:** вертикальный layout, padding 80px top/bottom, 120px left/right. `SectionHeader` (eyebrow `// СТЕК`, title `С LLM стек не ограничен`, subtitle).

Контент — две колонки (gap 48px):

- Левая 425px: Языки, Backend (Python), Backend (JS/TS), Брокеры
- Правая fill: Frontend, LLM & AI, Хранение, Инфраструктура

Каждая категория — `StackCategory`, gap между категориями 24px.

Декоративный элемент: изображение `Metalic Water Infinity` (844×672px), абсолютно позиционированное, rotation ~15°, поверх секции стека.

**Мобайл:** padding 48px/24px. Одна колонка, все 8 категорий, gap 20px. Заголовок 32px, декоративный элемент скрыт.

---

## F-09 · Секция Projects

**Десктоп:** вертикальный layout, padding 80px/120px. `SectionHeader` (eyebrow `// ПРОЕКТЫ`, title `Проекты`, subtitle).

Карточки — 2 ряда по 2 `ProjectCard`, gap 16px между рядами и внутри рядов.

4 проекта (из `content.ts`): Финансовый Telegram-бот, Платформа швейного производства, AI-консультант БАДов, Умный Доктор.

**Мобайл:** padding 48px/24px. Одна колонка, 4 `ProjectCard` full width, gap 16px.

---

## F-10 · Секция Contacts

**Десктоп:** вертикальный layout, height 584px, контент по центру (justifyContent center, alignItems center). Padding 80px/120px. `SectionHeader` (eyebrow `// КОНТАКТЫ`, title `Связаться`). Три `ContactLink` горизонтально, gap 32px.

**Мобайл:** padding 64px/24px, height 469px. Контакты — вертикально, gap 20px, по центру.

Контакты: Telegram (`send`), Email (`mail`), hh.ru (`briefcase`). Ссылки из `LINKS`.

---

## F-11 · Анимации (Framer Motion)

- **Fade-in при скролле:** каждая секция появляется снизу вверх при попадании в viewport (`whileInView`, `once: true`, `amount: 0.2`)

- **Stagger для карточек:** `ProjectCard` и `ToolCard` появляются последовательно (delay 0.1s между каждой)

- **Parallax на фото Hero:** лёгкий сдвиг по Y при скролле (`useScroll` + `useTransform`)

- **Parallax на декоративном элементе** в Stack Section

- Все анимации уважают `prefers-reduced-motion`

---

## F-12 · Адаптивность (mobile-first)

Брейкпоинты Tailwind:

- `base` (< 1280px): мобильная версия — одна колонка, уменьшенные отступы и шрифты (см. F-06–F-10)
- `lg` (≥ 1280px): полный десктоп — макет 1440px с отступами 120px

Фото в Hero: на мобайле сверху full width, на десктопе справа 480×560.

---

## F-13 · SEO и мета

- `<title>`: «Данил — AI-First Developer»

- `<meta name="description">`: краткое описание из Hero-секции

- `<meta property="og:*">`: og:title, og:description, og:image (фото)

- Шрифты с `display: swap`

- Семантическая разметка: `<main>`, `<section>`, `<h1>`/`<h2>`, `<nav>` (если нужен), `<a>` для контактов

---

## F-14 · Производительность

- Фото Hero: `<Image>` с `priority`, WebP, `sizes` для responsive

- Статическая генерация (SSG) — `output: 'export'` или дефолтный Next.js SSG (нет `getServerSideProps`)

- Нет клиентских запросов к API во время рендера

- Lucide иконки — tree-shaking (именованные импорты)

---

## Итоговая структура файлов

```text
src/
  app/
    layout.tsx          # шрифты, темизация, мета
    page.tsx            # сборка секций
  components/
    sections/
      Hero.tsx
      About.tsx
      Stack.tsx
      Projects.tsx
      Contacts.tsx
    ui/
      SectionHeader.tsx
      ProjectCard.tsx
      ToolCard.tsx
      ContactLink.tsx
      StackCategory.tsx
  lib/
    content.ts          # весь текстовый контент
    links.ts            # все внешние ссылки (F-02)
  styles/
    globals.css         # CSS-переменные дизайн-системы
```
