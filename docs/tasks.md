# Атомарные задачи реализации лендинга

---

## 0. Инициализация проекта

- [x] **0.1** Выполнить `npx create-next-app@latest . --yes` в корне репозитория — создаст TypeScript + Tailwind CSS v4 + ESLint + App Router + Turbopack + алиас `@/*`
- [x] **0.2** Установить доп. зависимости: `npm install framer-motion lucide-react`
- [x] **0.3** Удалить весь JSX-контент из `src/app/page.tsx` — оставить только пустой `<main></main>`
- [x] **0.4** Очистить `src/app/globals.css` — удалить все стили шаблона, оставить только строку `@import "tailwindcss";`
- [x] **0.5** Удалить лишние файлы шаблона: `public/next.svg`, `public/vercel.svg`, `src/app/page.module.css` (если есть)
- [x] **0.6** Проверить что `npm run dev` запускается без ошибок и открывается пустая страница

---

## 1. Дизайн-система

### 1.1 globals.css — токены через `@theme`

- [x] **1.1.1** Добавить блок `@theme {}` после `@import "tailwindcss"` в `src/app/globals.css`
- [x] **1.1.2** Прописать переменные шрифтов внутри `@theme`:
  ```css
  --font-primary: var(--font-jetbrains-mono), monospace;
  --font-secondary: var(--font-geist), sans-serif;
  ```
- [x] **1.1.3** Прописать все цвета dark-темы внутри `@theme` (значения из `docs/design-system.md`):
  - `--color-primary: #FF8400`
  - `--color-primary-foreground: #111111`
  - `--color-foreground: #FFFFFF`
  - `--color-muted-foreground: #B8B9B6`
  - `--color-background: #111111`
  - `--color-card: #1A1A1A`
  - `--color-card-foreground: #FFFFFF`
  - `--color-border: #2E2E2E`
  - `--color-secondary: #2E2E2E`
  - `--color-secondary-foreground: #FFFFFF`
- [x] **1.1.4** Прописать радиусы внутри `@theme`:
  - `--radius-m: 16px`
  - `--radius-pill: 999px`
- [x] **1.1.5** Прописать размеры шрифтов внутри `@theme`:
  - `--text-h1: 72px`
  - `--text-h2: 48px`
  - `--text-h3: 16px`
  - `--text-body: 18px`
  - `--text-body-sm: 14px`
  - `--text-eyebrow: 14px`
  - `--text-label: 12px`
- [x] **1.1.6** Прописать базовые стили вне `@theme` (после блока):
  ```css
  html { background: var(--color-background); color: var(--color-foreground); }
  body { font-family: var(--font-secondary); }
  * { box-sizing: border-box; }
  ```
- [x] **1.1.7** Убедиться что в браузере фон страницы стал `#111111` и текст белым

### 1.2 layout.tsx — подключение шрифтов

- [x] **1.2.1** Импортировать `JetBrains_Mono` и `Geist` из `next/font/google` в `src/app/layout.tsx`
- [x] **1.2.2** Создать экземпляр `JetBrains_Mono` с `subsets: ['latin', 'cyrillic']` и `variable: '--font-jetbrains-mono'`
- [x] **1.2.3** Создать экземпляр `Geist` с `subsets: ['latin']` и `variable: '--font-geist'`
- [x] **1.2.4** Добавить обе CSS-переменные (`jetbrainsMono.variable`, `geist.variable`) в `className` тега `<html>`
- [x] **1.2.5** Добавить `<meta name="description">` и `<title>` через `export const metadata` — `"Данил — AI-First Developer"`
- [x] **1.2.6** Проверить в DevTools что на `<html>` появились классы `__variable_...` от next/font, и `--font-jetbrains-mono` резолвится в правильный шрифт

---

## 2. Контент: src/lib/content.ts

- [x] **2.1** Создать файл `src/lib/content.ts`
- [x] **2.2** Объявить и экспортировать типы:
  - `Tool = { icon: string; name: string; description: string }`
  - `Project = { icon: string; name: string; role: string; description: string }`
  - `StackCategory = { label: string; value: string }`
  - `Contact = { icon: string; label: string; href: string }`
- [x] **2.3** Экспортировать объект `hero` с полями: `eyebrow`, `name`, `role`, `subtitle`, `telegramHref`, `githubHref` — данные из `design/CONTENT.md`
- [x] **2.4** Экспортировать объект `about` с полями: `eyebrow: '// ОБО МНЕ'`, `title`, `description` (3 абзаца из CONTENT.md), `toolsEyebrow: '// МОЙ ИНСТРУМЕНТАРИЙ'`
- [x] **2.5** Экспортировать массив `tools: Tool[]` — 4 инструмента из `docs/structure.md` (иконки: `terminal`, `pen-tool`, `git-branch`, `users`)
- [x] **2.6** Экспортировать объект `stack` с полями `left: StackCategory[]` и `right: StackCategory[]` — 4 категории слева, 4 справа согласно `docs/structure.md`
- [x] **2.7** Экспортировать массив `projects: Project[]` — 4 проекта с иконками `bot`, `scissors`, `shopping-bag`, `heart-pulse`, описания из `design/CONTENT.md`
- [x] **2.8** Экспортировать массив `contacts: Contact[]` — 3 контакта: Telegram (`send`), Email (`mail`), hh.ru (`briefcase`) с реальными ссылками

---

## 3. Хелпер LucideIcon

- [x] **3.1** Создать файл `src/components/ui/LucideIcon.tsx`
- [x] **3.2** Импортировать `icons` и `type LucideProps` из `lucide-react`
- [x] **3.3** Объявить тип `Props = LucideProps & { name: string }`
- [x] **3.4** Реализовать функцию `toPascalCase(str: string): string` — разбивает строку по `-`, каждое слово капитализирует, склеивает обратно (`'heart-pulse'` → `'HeartPulse'`)
- [x] **3.5** Реализовать и экспортировать компонент `LucideIcon({ name, ...props })` — берёт `icons[toPascalCase(name)]`, если не найдено — возвращает `null`, иначе рендерит с переданными props
- [x] **3.6** Проверить работу: временно использовать `<LucideIcon name="bot" size={24} />` в `page.tsx`, убедиться что иконка рендерится

---

## 4. UI-компоненты

### 4.1 SectionHeader

- [x] **4.1.1** Создать `src/components/ui/SectionHeader.tsx`
- [x] **4.1.2** Объявить props: `eyebrow: string`, `title: string`, `subtitle?: string`
- [x] **4.1.3** Разметка — `<div>` с `flex flex-col gap-[24px]`:
  - `<span>` для eyebrow: `font-primary text-[14px] font-medium text-primary tracking-[2px] uppercase`
  - `<h2>` для title: `font-primary text-[32px] lg:text-[48px] font-bold text-foreground leading-[1.1]`
  - `<p>` для subtitle (если передан): `font-secondary text-[18px] text-muted-foreground leading-[1.7]`
- [x] **4.1.4** Компонент — Server Component (без `'use client'`)

### 4.2 StackCategory

- [x] **4.2.1** Создать `src/components/ui/StackCategory.tsx`
- [x] **4.2.2** Объявить props: `label: string`, `value: string`
- [x] **4.2.3** Разметка — `<div>` с `flex flex-col gap-[2px]`:
  - `<span>` для label: `font-primary text-[12px] font-semibold text-primary tracking-[2px] uppercase`
  - `<span>` для value: `font-secondary text-[14px] text-foreground leading-[1.6]`
- [x] **4.2.4** Компонент — Server Component

### 4.3 ToolCard

- [x] **4.3.1** Создать `src/components/ui/ToolCard.tsx`
- [x] **4.3.2** Объявить props: `icon: string`, `name: string`, `description: string`
- [x] **4.3.3** Разметка — `<div>` с `bg-card rounded-[16px] p-[32px] flex flex-col gap-[16px]`:
  - Header-строка `flex items-center gap-3`: `<LucideIcon name={icon} size={32} className="text-primary" />` + `<span>` с именем (`font-primary text-[16px] font-semibold text-card-foreground`)
  - `<p>` с описанием: `font-secondary text-[14px] text-muted-foreground leading-[1.6]`
- [x] **4.3.4** Компонент — Server Component

### 4.4 ProjectCard

- [x] **4.4.1** Создать `src/components/ui/ProjectCard.tsx`
- [x] **4.4.2** Объявить props: `icon: string`, `name: string`, `role: string`, `description: string`
- [x] **4.4.3** Разметка — `<div>` с `bg-card rounded-[16px] p-[32px] flex flex-col gap-[16px]`:
  - Header-строка `flex items-center gap-3`: `<LucideIcon name={icon} size={24} className="text-foreground" />` + `<span>` с именем (`font-primary text-[16px] font-semibold text-card-foreground`)
  - `<p>` с описанием: `font-secondary text-[14px] text-muted-foreground leading-[1.6]`
  - `<span>` с ролью: `font-primary text-[12px] font-medium text-primary tracking-[2px] uppercase`
- [x] **4.4.4** Компонент — Server Component

### 4.5 ContactLink

- [x] **4.5.1** Создать `src/components/ui/ContactLink.tsx`
- [x] **4.5.2** Объявить props: `icon: string`, `label: string`, `href: string`
- [x] **4.5.3** Разметка — `<a href={href} target="_blank" rel="noopener noreferrer">` с `flex items-center gap-[12px] group`:
  - `<LucideIcon name={icon} size={24} className="text-primary" />`
  - `<span>`: `font-secondary text-[16px] font-medium text-foreground group-hover:text-primary transition-colors`
- [x] **4.5.4** Компонент — Server Component

---

## 5. Секции

### 5.1 Hero

- [x] **5.1.1** Создать `src/components/sections/Hero.tsx`, добавить `'use client'` (нужен для Framer Motion)
- [x] **5.1.2** Импортировать `hero` из `@/lib/content`, `motion` из `framer-motion`, `Image` из `next/image`
- [x] **5.1.3** Обернуть `<section>` в `<motion.section>` — но анимацию на секцию не вешать (Hero виден сразу), анимировать дочерние блоки
- [x] **5.1.4** Разметка секции: `<section className="flex flex-col lg:flex-row items-center py-[40px] px-[24px] lg:py-[80px] lg:px-[120px] gap-[80px]">`
- [x] **5.1.5** Левый блок (`motion.div`, `flex-1 flex flex-col gap-8`):
  - `<span>` eyebrow: `font-primary text-[14px] font-medium text-primary tracking-[2px] uppercase`
  - `<h1>`: `font-primary text-[48px] lg:text-[72px] font-bold text-foreground leading-[1.1]` — текст из `hero.name`
  - `<h2>`: `font-primary text-[28px] lg:text-[48px] font-light text-muted-foreground leading-[1.1]` — текст из `hero.role`
  - `<p>`: `font-secondary text-[16px] lg:text-[18px] text-muted-foreground leading-[1.7]` — текст из `hero.subtitle`
  - Блок кнопок `flex gap-4 mt-2`:
    - Primary: `<a>` — `bg-primary text-primary-foreground rounded-[999px] px-8 py-4 font-primary font-bold text-[16px] hover:opacity-90 transition-opacity`
    - Ghost: `<a>` — `font-primary text-[16px] text-foreground hover:text-primary transition-colors`
- [x] **5.1.6** Анимация левого блока: `initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}`
- [x] **5.1.7** Правый блок (`motion.div`): `<Image src="/photo.png" width={480} height={560} className="rounded-[16px] object-cover w-full lg:w-[480px] h-[400px] lg:h-[560px]" alt="Данил" />`; на мобайле блок идёт первым (порядок во flex-col: сначала фото, потом текст) — поменять порядок блоков в JSX для mobile-first
- [x] **5.1.8** Анимация правого блока: `initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}`
- [x] **5.1.9** Скопировать `design/images/generated-1775219693368.png` в `public/photo.png` и использовать `src="/photo.png"` в `<Image>`

### 5.2 About

- [x] **5.2.1** Создать `src/components/sections/About.tsx`, добавить `'use client'`
- [x] **5.2.2** Импортировать `about`, `tools` из `@/lib/content`, `motion` из `framer-motion`, `SectionHeader`, `ToolCard`
- [x] **5.2.3** Разметка: `<section className="py-[48px] px-[24px] lg:py-[64px] lg:px-[64px] flex flex-col gap-[40px] lg:gap-[80px]">`
- [x] **5.2.4** Первый блок — `<SectionHeader>` с `about.eyebrow`, `about.title`, `about.description`; в `SectionHeader` на title добавить responsive: `text-[32px] lg:text-[48px]`
- [x] **5.2.5** Второй блок — вложенный `<div className="flex flex-col gap-6">`:
  - `<SectionHeader eyebrow={about.toolsEyebrow} title="" />` (только eyebrow, без title)
  - Сетка карточек `<div className="grid grid-cols-1 lg:grid-cols-2 gap-[12px]">`
- [x] **5.2.6** Анимация секции целиком: `motion.section` с `whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 32 }} viewport={{ once: true }} transition={{ duration: 0.5 }}`
- [x] **5.2.7** Stagger карточек: каждая `<ToolCard>` обёрнута в `motion.div` с `delay: index * 0.1`

### 5.3 Stack

- [x] **5.3.1** Создать `src/components/sections/Stack.tsx`, добавить `'use client'`
- [x] **5.3.2** Импортировать `stack` из `@/lib/content`, `motion`, `useScroll`, `useTransform` из `framer-motion`, `Image`, `useRef`, `SectionHeader`, `StackCategory`
- [x] **5.3.3** Разметка: `<section className="relative overflow-hidden py-[48px] px-[24px] lg:py-[80px] lg:px-[120px]">` — обязательно `relative` и `overflow-hidden` для декоративного элемента
- [x] **5.3.4** `<SectionHeader eyebrow="// СТЕК" title="С LLM стек не ограничен" subtitle="Однако вот с чем уже успел поработать:" />`
- [x] **5.3.5** Блок колонок `<div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[48px] mt-12">`:
  - Левая `<div className="w-full lg:w-[425px] flex flex-col gap-[20px] lg:gap-[24px]">`: `{stack.left.map(c => <StackCategory key={c.label} {...c} />)}`
  - Правая `<div className="flex-1 flex flex-col gap-[20px] lg:gap-[24px]">`: `{stack.right.map(c => <StackCategory key={c.label} {...c} />)}`
  - На мобайле рендерить все 8 категорий в одну колонку (объединить `stack.left` и `stack.right`): `{[...stack.left, ...stack.right].map(...)}`; на десктопе — в две (оставить split)
- [x] **5.3.6** Создать `useRef(null)` для секции, передать в `ref` тега `<section>`
- [x] **5.3.7** Настроить parallax декоративного элемента:
  - `useScroll({ target: ref, offset: ['start end', 'end start'] })`
  - `useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])`
- [x] **5.3.8** Добавить декоративный элемент как `<motion.div style={{ y }} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">` с `<Image src="/decorative.png" width={844} height={672} className="rotate-[15deg] opacity-20" alt="" aria-hidden="true" />`; на мобайле скрыт (`hidden lg:block`)
- [x] **5.3.9** Скопировать `design/images/Metalic Water Infinity@1-1920x961.png` в `public/decorative.png`
- [x] **5.3.10** Анимация появления секции: `motion.section whileInView + viewport={{ once: true }}`

### 5.4 Projects

- [x] **5.4.1** Создать `src/components/sections/Projects.tsx`, добавить `'use client'`
- [x] **5.4.2** Импортировать `projects` из `@/lib/content`, `motion`, `SectionHeader`, `ProjectCard`
- [x] **5.4.3** Разметка: `<section className="py-[48px] px-[24px] lg:py-[80px] lg:px-[120px]">`
- [x] **5.4.4** `<SectionHeader eyebrow="// ПРОЕКТЫ" title="Проекты" subtitle="Всё это реализовано с помощью LLM — почти никакого рукоприкладства" />`
- [x] **5.4.5** Сетка карточек — `<div className="flex flex-col gap-[16px] mt-12">`:
  - Десктоп: два ряда `<div className="hidden lg:flex gap-[16px]">` — `ProjectCard` по 2 в ряду (`flex-1`)
  - Мобайл: `<div className="flex lg:hidden flex-col gap-[16px]">` — все 4 карточки в одну колонку (`w-full`)
- [x] **5.4.6** Stagger анимация карточек: каждая обёрнута в `motion.div` с `whileInView`, `delay: index * 0.15`, `viewport={{ once: true }}`

### 5.5 Contacts

- [x] **5.5.1** Создать `src/components/sections/Contacts.tsx`, добавить `'use client'`
- [x] **5.5.2** Импортировать `contacts` из `@/lib/content`, `motion`, `SectionHeader`, `ContactLink`
- [x] **5.5.3** Разметка: `<section className="py-[64px] px-[24px] lg:py-[80px] lg:px-[120px] flex flex-col items-center justify-center min-h-[469px] lg:min-h-[584px] text-center">`
- [x] **5.5.4** `<SectionHeader eyebrow="// КОНТАКТЫ" title="Связаться" />` (без subtitle)
- [x] **5.5.5** Блок ссылок: `<div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[32px] mt-8 items-center">` — `{contacts.map(c => <ContactLink key={c.label} {...c} />)}`
- [x] **5.5.6** Анимация секции: `motion.section whileInView + viewport={{ once: true }}`

---

## 6. Сборка page.tsx

- [x] **6.1** Открыть `src/app/page.tsx`
- [x] **6.2** Импортировать все 5 секций: `HeroSection`, `AboutSection`, `StackSection`, `ProjectsSection`, `ContactsSection`
- [x] **6.3** Вернуть `<main>` с 5 секциями в нужном порядке
- [x] **6.4** Убедиться что `page.tsx` остаётся Server Component — НЕТ `'use client'` на уровне файла
- [x] **6.5** Проверить в браузере что все секции отображаются и нет консольных ошибок

---

## 7. Финальная проверка и сборка

- [x] **7.1** Запустить `npm run lint` — исправить все ошибки ESLint
- [x] **7.2** Запустить `npm run build` — убедиться что сборка проходит без ошибок
- [x] **7.3** Убедиться в выводе сборки что `page.tsx` помечен как `○ (Static)` — подтверждает SSG
- [ ] **7.4** Проверить адаптивность в DevTools: ширина 390px (мобайл) — фото сверху full-width, текст снизу, кнопки вертикально, карточки в одну колонку, декоративный элемент скрыт; ширина 1440px (десктоп) — полный макет
- [ ] **7.5** Проверить анимации: прокрутить страницу — все секции плавно появляются, декоративный элемент движется parallax, Hero анимируется при загрузке
- [ ] **7.6** Проверить ссылки: Telegram, Email, hh.ru, GitHub — все открываются в новой вкладке

---

## 8. Деплой на Vercel

- [ ] **8.1** В корне проекта выполнить `git init && git add . && git commit -m "init: landing page"`
- [ ] **8.2** Создать репозиторий на GitHub (например `my-site`) — без README, без .gitignore
- [ ] **8.3** Привязать и запушить: `git remote add origin https://github.com/<username>/my-site.git && git push -u origin main`
- [ ] **8.4** Открыть [vercel.com](https://vercel.com) → **Add New Project** → **Import** репозиторий `my-site`
- [ ] **8.5** Настройки Vercel: Framework = **Next.js**, Build Command = `npm run build`, Root Directory = `.` — оставить дефолтные, переменных окружения нет → нажать **Deploy**
- [ ] **8.6** Дождаться деплоя (~1 мин), открыть сгенерированный `*.vercel.app` URL — убедиться что сайт работает
- [ ] **8.7** (Опционально) В настройках Vercel → **Domains** → добавить кастомный домен и прописать DNS у регистратора
- [ ] **8.8** Убедиться что последующие пуши в `main` автоматически деплоятся (Vercel настраивает webhook при импорте)
