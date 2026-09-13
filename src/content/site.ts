export type NavItem = {
  href: string;
  label: string;
  variant?: "contact";
};

export type Principle = {
  index: string;
  label: string;
};

export type Project = {
  id: string;
  visual: "service" | "catalog" | "board";
  previewLabel: string;
  category: string;
  index: string;
  title: string;
  description: string;
  tags: readonly string[];
  features: readonly string[];
  status: string;
  siteUrl?: string;
  repoUrl?: string;
};

export const site = {
  skipLink: "Перейти к содержимому",
  brand: {
    homeLabel: "На главную",
  },
  nav: [
    { href: "#about", label: "Обо мне" },
    { href: "#projects", label: "Проекты" },
    { href: "#contact", label: "Связаться", variant: "contact" },
  ] satisfies NavItem[],
  hero: {
    eyebrow: "ЛИЧНОЕ ПОРТФОЛИО / DEVELOPER",
    greeting: "Привет, я",
    name: "Ваше имя",
    lineLead: "Превращаю идеи",
    lineEmphasis: "работающий код.",
    description:
      "Веб-разработчик. Создаю понятные интерфейсы, быстрые сайты и приложения, которыми приятно пользоваться.",
    cta: {
      href: "#projects",
      label: "Посмотреть проекты",
    },
    bottom: {
      note: "От первой идеи до последнего пикселя",
      scroll: "Листайте ниже",
      href: "#about",
    },
    art: {
      index: "FIG. 01 — IDEA INTO CODE",
      comment: "// начало чего-то хорошего",
      idea: "'Что, если?'",
      ready: "↳ ready to make it real_",
      coordinate: "DESIGN + LOGIC + A LITTLE CURIOSITY",
    },
  },
  tech: {
    label: "МОЙ ИНСТРУМЕНТАРИЙ",
    ariaLabel: "Пример стека",
    items: ["JavaScript", "TypeScript", "React", "Node.js", "Git", "Figma"],
  },
  about: {
    eyebrow: "01 / ЗНАКОМСТВО",
    titleLead: "За кодом —",
    titleSoft: "человек.",
    lead: [
      "Мне нравится разбираться в сложном",
      "и делать его простым для пользователя.",
    ],
    paragraphs: [
      "Для меня разработка начинается с вопроса «зачем?». Сначала понимаю задачу, затем продумываю решение и довожу детали: от структуры кода до поведения кнопки на маленьком экране.",
      "Здесь можно рассказать о своём опыте, любимых технологиях и о том, какие задачи вам интересно решать.",
    ],
    principles: [
      { index: "01", label: "Понятный интерфейс" },
      { index: "02", label: "Внимание к деталям" },
      { index: "03", label: "Поддерживаемый код" },
    ] satisfies Principle[],
  },
  projects: {
    eyebrow: "02 / ПРАКТИКА",
    title: "Выбранные проекты",
    note: "Три учебных проекта. Скоро — демо и открытый код.",
    items: [
      {
        id: "service",
        visual: "service",
        previewLabel: "SERVICE / STUDIO",
        category: "САЙТ УСЛУГИ",
        index: "01",
        title: "Бизнес в деталях",
        description:
          "Сайт для специалиста или небольшой компании: представить услуги, показать работы и помочь клиенту обратиться.",
        tags: ["React", "TypeScript", "CSS Modules"],
        features: ["Адаптивная вёрстка и внимание к деталям", "Услуги, галерея и путь к обращению"],
        status: "Запланирован",
      },
      {
        id: "catalog",
        visual: "catalog",
        previewLabel: "OBJECTS / COLLECTION",
        category: "КАТАЛОГ ТОВАРОВ",
        index: "02",
        title: "Найти своё",
        description:
          "Каталог, в котором удобно исследовать ассортимент, сравнивать варианты и сохранять понравившиеся товары.",
        tags: ["React", "TypeScript", "LocalStorage"],
        features: ["Поиск, фильтры и сортировка", "Карточки товаров и избранное"],
        status: "Запланирован",
      },
      {
        id: "planner",
        visual: "board",
        previewLabel: "TASKS / WORKSPACE",
        category: "ВЕБ-ПРИЛОЖЕНИЕ",
        index: "03",
        title: "От идеи к делу",
        description: "Личный планировщик: разложить работу по задачам, расставить приоритеты и видеть, что уже сделано.",
        tags: ["React", "TypeScript", "LocalStorage"],
        features: ["Создание, редактирование и статусы задач", "Состояние интерфейса и сохранение данных"],
        status: "Запланирован",
      },
    ] satisfies Project[],
  },
  contact: {
    eyebrow: "03 / НА СВЯЗИ",
    titleLead: "Хорошие проекты",
    titleMid: "начинаются с",
    titleEmphasis: "«привет».",
    body: ["Есть идея, задача или предложение?", "Буду рад познакомиться."],
    email: "hello@example.com",
    note: "Пример адреса — замените на свой",
  },
  footer: {
    credit: "Ваше имя · Персональный сайт",
    toTop: "Наверх ↑",
  },
} as const;
