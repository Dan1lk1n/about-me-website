import { LINKS } from "./links";

export type Tool = {
  icon: string;
  name: string;
  description: string;
};

export type Project = {
  icon: string;
  name: string;
  role: string;
  description: string;
};

export type StackCategory = {
  label: string;
  value: string;
};

export type Contact = {
  icon: string;
  label: string;
  href: string;
};

export const hero = {
  eyebrow: "// ПРИВЕТ",
  name: "Данил",
  role: "AI-First Developer",
  subtitle:
    "Этот сайт я собрал за пару часов специально для вас. Остальные проекты потребовали чуть больше.",
  telegramHref: LINKS.telegram,
  githubHref: LINKS.githubSite,
};

export const about = {
  eyebrow: "// ОБО МНЕ",
  title: "Полный цикл разработки с LLM",
  paragraphs: [
    "Я разрабатываю веб-сервисы с помощью LLM. Не прототипы и не демо — полноценные продукты, которые работают в проде. Делаю это уже больше года.",
    "Активно участвовал в построении LLM development workflow в команде, где вместе довели PCW до 95%+. Результат — команда стала думать о продукте, а не о коде.",
    "Я проектирую архитектуру, выстраиваю LLM development workflow и закрываю полный цикл — от аналитики и бэкенда до фронтенда и CI/CD.",
  ],
  toolsEyebrow: "// МОЙ ИНСТРУМЕНТАРИЙ",
};

export const tools: Tool[] = [
  {
    icon: "terminal",
    name: "Claude Code",
    description:
      "По опыту, самый мощный инструмент для разработки с LLM на сегодня. MCP-серверы, кастомные skills.",
  },
  {
    icon: "pen-tool",
    name: "Figma + AI-дизайн",
    description:
      "Верстка как по макетам, так и генерация интерфейсов через нейросети. Быстрый путь от идеи до готового UI.",
  },
  {
    icon: "git-branch",
    name: "GitLab CI",
    description:
      "Автоматизация пайплайнов, деплой и контроль качества кода. Настройка CI/CD под проект.",
  },
  {
    icon: "users",
    name: "Работа с командой",
    description:
      "Коммуникация со стейкхолдерами, написание аналитики — я не только про код, но и процессы.",
  },
];

export const stack = {
  left: [
    {
      label: "Языки",
      value: "Python, JavaScript/TypeScript, Go",
    },
    {
      label: "Backend (Python)",
      value: "FastAPI, SQLAlchemy, Alembic, Pydantic, aiogram, FastStream",
    },
    {
      label: "Backend (JS/TS)",
      value: "Node.js, Drizzle, Prisma",
    },
    {
      label: "Брокеры",
      value: "RabbitMQ",
    },
  ] as StackCategory[],
  right: [
    {
      label: "Frontend",
      value: "React, Next.js, Tailwind CSS, shadcn/ui",
    },
    {
      label: "LLM & AI",
      value: "LangChain, LangGraph, Claude, OpenAI",
    },
    {
      label: "Хранение",
      value: "PostgreSQL, Redis, S3",
    },
    {
      label: "Инфраструктура",
      value: "Docker, GitLab CI",
    },
  ] as StackCategory[],
};

export const projects: Project[] = [
  {
    icon: "bot",
    name: "Финансовый Telegram-бот",
    role: "Backend-разработка",
    description:
      "AI-персонаж, который обучал пользователей финансовой грамотности и помогал подбирать микрозаймы. Внутри — база знаний, автоматические рассылки, подбор предложений от МФО. Для бизнеса — сбор статистики, маркетинговые метрики и аналитика.",
  },
  {
    icon: "scissors",
    name: "Платформа планирования швейного производства",
    role: "Fullstack-разработка",
    description:
      "Система управления швейным цехом: привязка сотрудников через Telegram, шаблоны операций с нормами по времени и стоимости, отчётность швей через бота, автоматический расчёт выплат, дашборд с аналитикой.",
  },
  {
    icon: "shopping-bag",
    name: "AI-консультант интернет-магазина БАДов",
    role: "Fullstack-разработка",
    description:
      "Умный чат-бот, который консультировал покупателей по подбору добавок, проверял наличие товаров, рассказывал об акциях и оформлял заказы. Интеграции: 1С-Битрикс, Битрикс24, СДЭК, Почта России, 5Post, OpenAI. Отдельная админ-панель для управления ботом.",
  },
  {
    icon: "heart-pulse",
    name: "Умный Доктор — медицинская платформа с AI",
    role: "Fullstack-разработка",
    description:
      "Медицинская платформа для пациентов, врачей и клиник. AI-чекер симптомов, электронная медкарта, OCR анализов — всё в Telegram Web App. Для врачей и клиник — веб-порталы с верификацией и аналитикой. Микросервисная архитектура из 6 сервисов, AI-диалоги, RAG.",
  },
];

export const contacts: Contact[] = [
  {
    icon: "send",
    label: "Telegram",
    href: LINKS.telegram,
  },
  {
    icon: "mail",
    label: "Email",
    href: LINKS.email,
  },
  {
    icon: "briefcase",
    label: "hh.ru",
    href: LINKS.hhru,
  },
];
