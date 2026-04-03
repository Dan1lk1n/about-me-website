# Дизайн-система

## Темы

Поддерживаются две темы: **Light** и **Dark**. Текущий макет использует Dark.

---

## Цветовая палитра

### Основные цвета

| Токен | Light | Dark | Назначение |
|-------|-------|------|------------|
| `--primary` | `#FF8400` | `#FF8400` | Акцентный цвет (eyebrow, иконки, labels) |
| `--primary-foreground` | `#111111` | `#111111` | Текст поверх primary |
| `--foreground` | `#111111` | `#FFFFFF` | Основной текст |
| `--muted-foreground` | `#666666` | `#B8B9B6` | Вторичный текст (описания, подзаголовки) |
| `--background` | `#F2F3F0` | `#111111` | Фон страницы |
| `--card` | `#FFFFFF` | `#1A1A1A` | Фон карточек |
| `--card-foreground` | `#111111` | `#FFFFFF` | Текст на карточках |
| `--border` | `#CBCCC9` | `#2E2E2E` | Границы |
| `--input` | `#CBCCC9` | `#2E2E2E` | Поля ввода |
| `--ring` | `#666666` | `#666666` | Фокус-кольцо |

### Семантические цвета

| Токен | Light | Dark |
|-------|-------|------|
| `--secondary` | `#E7E8E5` | `#2E2E2E` |
| `--secondary-foreground` | `#111111` | `#FFFFFF` |
| `--muted` | `#F2F3F0` | `#2E2E2E` |
| `--accent` | `#F2F3F0` | `#111111` |
| `--accent-foreground` | `#111111` | `#F2F3F0` |
| `--destructive` | `#D93C15` | `#FF5C33` |

### Статусные цвета

| Статус | Фон (Light) | Фон (Dark) | Текст (Light) | Текст (Dark) |
|--------|-------------|------------|---------------|--------------|
| Success | `#DFE6E1` | `#222924` | `#004D1A` | `#B6FFCE` |
| Error | `#E5DCDA` | `#24100B` | `#8C1C00` | `#FF5C33` |
| Warning | `#E9E3D8` | `#291C0F` | `#804200` | `#FF8400` |
| Info | `#DFDFE6` | `#222229` | `#000066` | `#B2B2FF` |

### Константы

| Токен | Значение |
|-------|----------|
| `--black` | `#000000` |
| `--white` | `#FFFFFF` |

---

## Типографика

### Шрифты

| Токен | Значение | Использование |
|-------|----------|---------------|
| `--font-primary` | `JetBrains Mono` | Заголовки, eyebrow, labels, code-стиль |
| `--font-secondary` | `Geist` | Основной текст, описания |

### Размеры шрифтов

| Токен | Значение | Использование |
|-------|----------|---------------|
| `--fs-h1` | `72px` | Главный заголовок (имя) |
| `--fs-h2` | `48px` | Заголовки секций |
| `--fs-h3` | `16px` | Подзаголовки, названия в карточках |
| `--fs-body` | `18px` | Основной текст |
| `--fs-body-sm` | `14px` | Мелкий текст, описания в карточках |
| `--fs-eyebrow` | `14px` | Eyebrow-метки секций |
| `--fs-label` | `12px` | Метки категорий, роли |

### Высота строк

| Токен | Значение | Использование |
|-------|----------|---------------|
| `--lh-tight` | `1.1` | Заголовки (H1, H2) |
| `--lh-normal` | `1.6` | Обычный текст в карточках |
| `--lh-relaxed` | `1.7` | Описательный текст, подзаголовки |

### Межбуквенный интервал

| Токен | Значение | Использование |
|-------|----------|---------------|
| `--ls-wide` | `2px` | Eyebrow-метки, category labels |

---

## Радиусы скругления

| Токен | Значение | Использование |
|-------|----------|---------------|
| `--radius-m` | `16px` | Карточки, фото |
| `--radius-none` | `0` | Без скругления |
| `--radius-pill` | `999px` | Кнопки-таблетки |

---

## Компоненты

### Section Header

Заголовок секции с тремя уровнями текста.

- **Layout:** vertical, gap: 24px
- **Ширина:** 600px (или fill_container в контексте)
- **Тема:** Dark

| Элемент | ID | Шрифт | Размер | Вес | Цвет | textGrowth | width |
|---------|----|-------|--------|-----|------|------------|-------|
| Eyebrow | `shEyebrow` | JetBrains Mono | `--fs-eyebrow` | 500 | `--primary` | fixed-width | fill_container |
| Title | `shTitle` | JetBrains Mono | `--fs-h2` | 700 | `--foreground` | fixed-width | fill_container |
| Subtitle | `shSubtitle` | Geist | `--fs-body` | normal | `--muted-foreground` | fixed-width | fill_container |

### Project Card

Карточка проекта с иконкой, описанием и ролью.

- **Layout:** vertical, gap: 16px, padding: 32px
- **Фон:** `--card`, скругление: `--radius-m`
- **Ширина:** 400px (или fill_container)
- **Тема:** Dark

| Элемент | ID | Описание |
|---------|----|----------|
| Header | `joTxf` | horizontal frame: иконка (24×24, lucide) + название (JetBrains Mono, `--fs-h3`, 600) |
| Description | `tp4pP` | Geist, `--fs-body-sm`, `--muted-foreground`, fixed-width |
| Role | `F3Cbq` | JetBrains Mono, `--fs-label`, 500, `--primary` |

### Tool Card

Карточка инструмента.

- **Layout:** vertical, gap: 16px, padding: 32px
- **Фон:** `--card`, скругление: `--radius-m`
- **Ширина:** 280px (или fill_container)
- **Тема:** Dark

| Элемент | ID | Описание |
|---------|----|----------|
| Header | `bH3v3` | horizontal frame: иконка (32×32, lucide) + название (JetBrains Mono, `--fs-h3`, 600) |
| Description | `vdsV8` | Geist, `--fs-body-sm`, `--muted-foreground`, fixed-width |

### Contact Link

Ссылка контакта с иконкой.

- **Layout:** horizontal, gap: 12px, alignItems: center
- **Тема:** Dark

| Элемент | ID | Описание |
|---------|----|----------|
| Icon | `EbGKZ` | lucide, 24×24, `--primary` |
| Label | `FRxX6` | Geist, `--fs-h3`, 500, `--foreground` |

### Stack Category

Категория технологического стека.

- **Layout:** vertical, gap: 2px
- **Ширина:** 280px (или fill_container)
- **Тема:** Dark

| Элемент | ID | Описание |
|---------|----|----------|
| Label | `DuVSE` | JetBrains Mono, `--fs-label`, 600, `--primary`, letter-spacing: `--ls-wide` |
| Value | `TAd5P` | Geist, `--fs-body-sm`, normal, `--foreground`, fixed-width |

---

## Иконки

Библиотека: **Lucide**

Используемые иконки:

| Иконка | Контекст |
|--------|----------|
| `terminal` | Claude Code |
| `pen-tool` | Figma + AI-дизайн |
| `git-branch` | GitLab CI |
| `users` | Работа с командой |
| `bot` | Финансовый Telegram-бот |
| `scissors` | Швейное производство |
| `shopping-bag` | Интернет-магазин БАДов |
| `heart-pulse` | Медицинская платформа |
| `send` | Telegram |
| `mail` | Email |
| `briefcase` | hh.ru |
