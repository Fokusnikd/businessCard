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
  visual: "flowboard" | "forma";
  category: string;
  index: string;
  title: string;
  description: string;
  tags: readonly string[];
  detailsTitle: string;
  details: string;
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
    note: "Примеры для вашего портфолио",
    items: [
      {
        id: "flowboard",
        visual: "flowboard",
        category: "ВЕБ-ПРИЛОЖЕНИЕ",
        index: "КОНЦЕПТ / 01",
        title: "Flowboard",
        description:
          "Менеджер задач с канбан-доской, чтобы видеть главное и двигаться от идеи к результату.",
        tags: ["React", "TypeScript", "Node.js"],
        detailsTitle: "Подробнее о концепте",
        details:
          "Пример оформления кейса, а не заявленный выполненный проект. Замените его своей работой: опишите задачу, ваш вклад и результат, затем добавьте ссылки на сайт и репозиторий.",
      },
      {
        id: "forma",
        visual: "forma",
        category: "САЙТ БРЕНДА",
        index: "КОНЦЕПТ / 02",
        title: "Forma Studio",
        description:
          "Сайт дизайн-студии с выразительной типографикой, аккуратной сеткой и адаптивной вёрсткой.",
        tags: ["HTML / CSS", "JavaScript", "Figma"],
        detailsTitle: "Подробнее о концепте",
        details:
          "Демонстрационный визуальный концепт. Для настоящего кейса добавьте контекст задачи, использованные технологии и проверяемый результат. Не указывайте выдуманные показатели.",
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
