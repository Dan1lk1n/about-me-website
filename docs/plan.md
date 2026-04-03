# План реализации лендинга

## 0. Инициализация проекта

**Что делаем:** создаём Next.js 15 проект и устанавливаем зависимости.

```bash
npx create-next-app@latest . --yes
# флаг --yes: TypeScript + Tailwind CSS v4 + ESLint + App Router + Turbopack + алиас @/*
npm install framer-motion lucide-react
```

**Структура после init:**
```
src/app/layout.tsx
src/app/page.tsx
src/app/globals.css
public/
```

**Удалить из шаблона:** весь контент в `page.tsx`, стили в `globals.css` (оставить только `@import "tailwindcss"`).

---

## 1. Дизайн-система: globals.css + шрифты

### globals.css

Tailwind v4 использует `@theme {}` вместо `tailwind.config.js`. Все токены дизайн-системы из `docs/design-system.md` переносим сюда.

```css
@import "tailwindcss";

@theme {
  /* Шрифты — CSS-переменные пробрасываются из next/font */
  --font-primary: var(--font-jetbrains-mono), monospace;
  --font-secondary: var(--font-geist), sans-serif;

  /* Цвета dark-темы */
  --color-primary:           #FF8400;
  --color-primary-foreground:#111111;
  --color-foreground:        #FFFFFF;
  --color-muted-foreground:  #B8B9B6;
  --color-background:        #111111;
  --color-card:              #1A1A1A;
  --color-card-foreground:   #FFFFFF;
  --color-border:            #2E2E2E;

  /* Радиусы */
  --radius-m:    16px;
  --radius-pill: 999px;

  /* Типографика */
  --text-h1:       72px;
  --text-h2:       48px;
  --text-h3:       16px;
  --text-body:     18px;
  --text-body-sm:  14px;
  --text-eyebrow:  14px;
  --text-label:    12px;
}

/* Базовые стили */
html { background: var(--color-background); color: var(--color-foreground); }
body { font-family: var(--font-secondary); }
```

После `@theme` Tailwind автоматически генерирует утилиты: `bg-card`, `text-primary`, `font-primary`, `text-h2`, `rounded-m` и т.д.

### layout.tsx — подключение шрифтов

```tsx
import { JetBrains_Mono } from 'next/font/google'
import { Geist } from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-jetbrains-mono',
})
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${jetbrainsMono.variable} ${geist.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

CSS-переменные `--font-jetbrains-mono` и `--font-geist` появляются на `<html>`, затем подхватываются через `var()` в `@theme`.

---

## 2. Контент: src/lib/content.ts

**Что делаем:** единый файл с TypeScript-объектами — весь текст, проекты, стек, инструменты. Никакой CMS.

**Структура экспортов:**
```ts
// Тип для Tool Card
export type Tool = { icon: string; name: string; description: string }

// Тип для Project Card
export type Project = { icon: string; name: string; role: string; description: string }

// Тип для Stack Category
export type StackCategory = { label: string; value: string }

// Тип для Contact Link
export type Contact = { icon: string; label: string; href: string }

export const hero = {
  eyebrow: '// ПРИВЕТ',
  name: 'Данил',
  role: 'AI-First Developer',
  subtitle: 'Этот сайт я собрал за пару часов специально для вас. Остальные проекты потребовали чуть больше.',
  telegramHref: 'https://t.me/...',
  githubHref: 'https://github.com/...',
}

export const about = { eyebrow, title, description, toolsEyebrow }
export const tools: Tool[] = [...]
export const stack: { left: StackCategory[]; right: StackCategory[] } = {...}
export const projects: Project[] = [...]
export const contacts: Contact[] = [...]
```

Иконки хранятся как строки (имена Lucide), компоненты рендерят их через `lucide-react` динамически (см. п.3).

---

## 3. UI-компоненты: src/components/ui/

### SectionHeader

`src/components/ui/SectionHeader.tsx`

**Props:** `eyebrow: string`, `title: string`, `subtitle?: string`

**Разметка:**
```tsx
<div className="flex flex-col gap-[24px]">
  <span className="font-primary text-[14px] font-medium text-primary tracking-[2px] uppercase">
    {eyebrow}
  </span>
  <h2 className="font-primary text-[48px] font-bold text-foreground leading-[1.1]">
    {title}
  </h2>
  {subtitle && (
    <p className="font-secondary text-[18px] text-muted-foreground leading-[1.7]">
      {subtitle}
    </p>
  )}
</div>
```

### ProjectCard

`src/components/ui/ProjectCard.tsx`

**Props:** `icon: string`, `name: string`, `role: string`, `description: string`

**Иконка** — динамический импорт из Lucide через `LucideIcon`:
```tsx
import { icons } from 'lucide-react'
const Icon = icons[toPascalCase(icon)] // 'bot' → 'Bot'
```

**Разметка:**
```tsx
<div className="bg-card rounded-[16px] p-[32px] flex flex-col gap-[16px]">
  <div className="flex items-center gap-3">
    <Icon size={24} className="text-foreground" />
    <span className="font-primary text-[16px] font-semibold text-card-foreground">{name}</span>
  </div>
  <p className="font-secondary text-[14px] text-muted-foreground leading-[1.6]">{description}</p>
  <span className="font-primary text-[12px] font-medium text-primary tracking-[2px] uppercase">{role}</span>
</div>
```

### ToolCard

`src/components/ui/ToolCard.tsx`

**Props:** `icon: string`, `name: string`, `description: string`

Аналогичен ProjectCard, иконка 32×32, без поля `role`.

### ContactLink

`src/components/ui/ContactLink.tsx`

**Props:** `icon: string`, `label: string`, `href: string`

```tsx
<a href={href} target="_blank" rel="noopener noreferrer"
   className="flex items-center gap-[12px] group">
  <Icon size={24} className="text-primary" />
  <span className="font-secondary text-[16px] font-medium text-foreground group-hover:text-primary transition-colors">
    {label}
  </span>
</a>
```

### StackCategory

`src/components/ui/StackCategory.tsx`

**Props:** `label: string`, `value: string`

```tsx
<div className="flex flex-col gap-[2px]">
  <span className="font-primary text-[12px] font-semibold text-primary tracking-[2px] uppercase">{label}</span>
  <span className="font-secondary text-[14px] text-foreground leading-[1.6]">{value}</span>
</div>
```

---

## 4. Секции: src/components/sections/

### Hero.tsx

**Разметка:** `<section>` с двумя колонками (`flex flex-row`).
- Левый блок: eyebrow + h1 + h2 + p + две кнопки
- Правый блок: `<Image>` (Next.js `next/image`, fill или fixed 480×560)
- Отступы: `py-[80px] px-[120px]`, gap между колонками: `gap-[80px]`

**Кнопки:**
```tsx
// Primary button
<a href={hero.telegramHref} className="bg-primary text-primary-foreground rounded-pill px-8 py-4 font-primary font-bold">
  Написать в Telegram
</a>

// Ghost button
<a href={hero.githubHref} className="text-foreground hover:text-primary transition-colors font-primary">
  GitHub сайта →
</a>
```

**Фото:** файл кладём в `public/photo.jpg`, рендерим через `<Image src="/photo.jpg" width={480} height={560} className="rounded-[16px]" alt="Данил" />`.

**Анимация (Framer Motion):** fade-in слева для текстового блока, fade-in справа для фото:
```tsx
<motion.div
  initial={{ opacity: 0, x: -32 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  {/* текстовый блок */}
</motion.div>
```

### About.tsx

**Разметка:** `<section className="py-[64px] px-[64px] flex flex-col gap-[80px]">`.
- `<SectionHeader eyebrow="// ОБО МНЕ" title="..." subtitle="..." />`
- Сетка инструментов:
  ```tsx
  <div>
    <SectionHeader eyebrow="// МОЙ ИНСТРУМЕНТАРИЙ" />
    <div className="grid grid-cols-2 gap-[12px] mt-6">
      {tools.map(t => <ToolCard key={t.name} {...t} />)}
    </div>
  </div>
  ```

**Анимация:** `whileInView` + `viewport={{ once: true }}` на секцию и карточки (stagger через `transition={{ delay: index * 0.1 }}`).

### Stack.tsx

**Разметка:** `<section className="py-[80px] px-[120px]">`.
- `<SectionHeader>` + две колонки `flex flex-row gap-[48px]`
- Левая: `w-[425px]`, правая: `flex-1`
- В каждой колонке: `flex flex-col gap-[24px]` из `<StackCategory>` компонентов

**Декоративный элемент:** абсолютно позиционированное изображение (металлическая вода/infinity). Секция нужна `relative overflow-hidden`:
```tsx
<section className="relative overflow-hidden py-[80px] px-[120px]">
  <Image
    src="/decorative.png"
    width={844} height={672}
    className="absolute right-0 top-1/2 -translate-y-1/2 rotate-[15deg] opacity-30 pointer-events-none"
    alt=""
    aria-hidden="true"
  />
  {/* контент */}
</section>
```

### Projects.tsx

**Разметка:** `<section className="py-[80px] px-[120px]">`.
- `<SectionHeader>`
- Два ряда по две карточки:
  ```tsx
  <div className="flex flex-col gap-[16px] mt-12">
    <div className="flex gap-[16px]">
      <ProjectCard {...projects[0]} />
      <ProjectCard {...projects[1]} />
    </div>
    <div className="flex gap-[16px]">
      <ProjectCard {...projects[2]} />
      <ProjectCard {...projects[3]} />
    </div>
  </div>
  ```
- Каждая карточка `flex-1`.

**Анимация:** `whileInView` fade-in с stagger (`delay: index * 0.15`).

### Contacts.tsx

**Разметка:** `<section className="py-[80px] px-[120px] flex flex-col items-center justify-center min-h-[497px]">`.
- `<SectionHeader eyebrow="// КОНТАКТЫ" title="Связаться" />` (по центру)
- Ссылки горизонтально: `<div className="flex gap-[32px] mt-8">`
  - `{contacts.map(c => <ContactLink key={c.label} {...c} />)}`

---

## 5. page.tsx — сборка секций

```tsx
import HeroSection from '@/components/sections/Hero'
import AboutSection from '@/components/sections/About'
import StackSection from '@/components/sections/Stack'
import ProjectsSection from '@/components/sections/Projects'
import ContactsSection from '@/components/sections/Contacts'

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <ContactsSection />
    </main>
  )
}
```

`page.tsx` — Server Component, нет `'use client'`. Секции, использующие Framer Motion, обязательно помечаем `'use client'` (хук `useScroll` и атрибуты `motion.*` работают только на клиенте).

---

## 6. Анимации: Framer Motion

**Паттерн для секций** (fade-in при скролле):
```tsx
'use client'
import { motion } from 'framer-motion'

<motion.section
  initial={{ opacity: 0, y: 32 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
  viewport={{ once: true }}
>
```

**Stagger для карточек:**
```tsx
{items.map((item, i) => (
  <motion.div
    key={item.name}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: i * 0.1 }}
    viewport={{ once: true }}
  >
    <ToolCard {...item} />
  </motion.div>
))}
```

**Parallax для декоративного элемента** (Stack секция):
```tsx
const ref = useRef(null)
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ['start end', 'end start'],
})
const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

<motion.div style={{ y }} className="absolute ...">
  <Image src="/decorative.png" ... />
</motion.div>
```

---

## 7. Динамический рендер иконок Lucide

Чтобы не импортировать каждую иконку вручную, используем `icons` из `lucide-react`:

```tsx
// src/components/ui/LucideIcon.tsx
import { icons, type LucideProps } from 'lucide-react'

type Props = LucideProps & { name: string }

export function LucideIcon({ name, ...props }: Props) {
  const Icon = icons[toPascalCase(name) as keyof typeof icons]
  if (!Icon) return null
  return <Icon {...props} />
}

function toPascalCase(str: string): string {
  return str
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('')
}
```

Все карточки используют `<LucideIcon name={icon} size={24} />`.

---

## Итоговый порядок задач

1. Init проекта (`create-next-app`, установить `framer-motion`, `lucide-react`)
2. `globals.css` — дизайн-система (`@theme` с токенами)
3. `layout.tsx` — шрифты JetBrains Mono + Geist
4. `src/lib/content.ts` — весь контент
5. `LucideIcon.tsx` — хелпер для иконок
6. UI-компоненты: `SectionHeader`, `StackCategory`, `ToolCard`, `ProjectCard`, `ContactLink`
7. Секции: `Hero`, `About`, `Stack`, `Projects`, `Contacts`
8. `page.tsx` — сборка
9. Анимации Framer Motion во всех секциях
10. Декоративный элемент в Stack (parallax)
11. Добавить фото в `public/photo.jpg`
12. `npm run build` — проверка статической генерации
