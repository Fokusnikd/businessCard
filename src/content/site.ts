export type NavItem = {
  href: string
  label: string
  variant?: 'contact'
}

export type Principle = {
  index: string
  label: string
}

export type Project = {
  id: string
  visual: 'kadr' | 'flowboard' | 'forma'
  category: string
  index: string
  title: string
  description: string
  tags: readonly string[]
  detailsTitle: string
  details: string
}

export type ContactChannel = {
  id: string
  label: string
  value: string
  href: string
  hint: string
  external?: boolean
}

export const site = {
  skipLink: 'Перейти к содержимому',
  document: {
    title: 'Fokusnik D. — React-разработчик',
    description:
      'Сайт-визитка React-разработчика Fokusnik D.: стек, выбранные проекты и контакты. Текст-плейсхолдер, пока нет финальных данных.',
  },
  brand: {
    homeLabel: 'На главную: Fokusnik D.',
    initials: 'FD',
  },
  nav: [
    { href: '#stack', label: 'Стек' },
    { href: '#projects', label: 'Проекты' },
    { href: '#contact', label: 'Связаться', variant: 'contact' },
  ] satisfies NavItem[],
  hero: {
    eyebrow: 'Плейсхолдер · визитка / React',
    role: 'React-разработчик',
    name: 'Fokusnik D.',
    bio: 'Собираю интерфейсы, в которых внимание не рассеивается: ясные состояния, быстрый отклик и аккуратная типизация. Этот абзац — заглушка; замените его своим.',
    cta: {
      href: '#contact',
      label: 'Написать',
    },
    secondary: {
      href: '#projects',
      label: 'Смотреть проекты',
    },
    bottom: {
      note: 'Имя, стек и контакты меняются в одном файле — src/content/site.ts',
      scroll: 'Дальше',
      href: '#stack',
    },
    art: {
      index: 'FIG. 01 — APERTURE',
      fStop: 'f/1.4',
      caption: 'фокус на React',
      coordinate: 'REACT · TYPESCRIPT · UI',
    },
  },
  tech: {
    eyebrow: '01 / СТЕК',
    title: 'Что в кадре',
    note: 'Плейсхолдер набора',
    ariaLabel: 'Стек технологий',
    items: [
      'React',
      'TypeScript',
      'Vite',
      'CSS Modules',
      'Node.js',
      'Git',
      'Vitest',
      'Figma',
    ],
  },
  about: {
    eyebrow: '02 / ПОДХОД',
    titleLead: 'Сначала',
    titleSoft: 'резкость.',
    lead: [
      'Мне интересны задачи, где интерфейс должен быть',
      'понятным с первого взгляда и быстрым в работе.',
    ],
    paragraphs: [
      'Разработку начинаю с вопроса «зачем?» и с состояний экрана: пустой, загрузка, ошибка, успех. Потом собираю компоненты так, чтобы их было легко читать и менять.',
      'Этот блок — плейсхолдер. Добавьте опыт, формат работы и задачи, которые вам интересны.',
    ],
    principles: [
      { index: '01', label: 'Резкий фокус' },
      { index: '02', label: 'Предсказуемое состояние' },
      { index: '03', label: 'Код, который читают' },
    ] satisfies Principle[],
  },
  projects: {
    eyebrow: '03 / ПРАКТИКА',
    title: 'Выбранные кадры',
    note: 'Примеры-плейсхолдеры, не заявленные кейсы',
    items: [
      {
        id: 'kadr',
        visual: 'kadr',
        category: 'ВЕБ-ПРИЛОЖЕНИЕ',
        index: 'ПЛЕЙСХОЛДЕР / 01',
        title: 'Kadr',
        description:
          'Галерея с клавиатурной навигацией и крупным просмотром — чтобы смотреть снимки, не теряя ритм.',
        tags: ['React', 'TypeScript', 'Vite'],
        detailsTitle: 'Подробнее о концепте',
        details:
          'Демонстрационный концепт, а не выполненный проект. Замените описанием задачи, своего вклада и ссылками на сайт и репозиторий.',
      },
      {
        id: 'flowboard',
        visual: 'flowboard',
        category: 'ВЕБ-ПРИЛОЖЕНИЕ',
        index: 'ПЛЕЙСХОЛДЕР / 02',
        title: 'Flowboard',
        description:
          'Канбан для небольших команд: колонки, карточки и понятный путь от идеи к готовому.',
        tags: ['React', 'TypeScript', 'Node.js'],
        detailsTitle: 'Подробнее о концепте',
        details:
          'Пример оформления кейса. Опишите задачу, ограничения и результат. Не указывайте выдуманные цифры.',
      },
      {
        id: 'forma',
        visual: 'forma',
        category: 'САЙТ БРЕНДА',
        index: 'ПЛЕЙСХОЛДЕР / 03',
        title: 'Forma Studio',
        description:
          'Сайт студии с крупной типографикой, спокойной сеткой и аккуратной адаптивной вёрсткой.',
        tags: ['React', 'CSS Modules', 'Figma'],
        detailsTitle: 'Подробнее о концепте',
        details:
          'Визуальный плейсхолдер. Для настоящего кейса добавьте контекст, стек и проверяемый результат.',
      },
    ] satisfies Project[],
  },
  contact: {
    eyebrow: '04 / НА СВЯЗИ',
    titleLead: 'Напишите —',
    titleEmphasis: 'я на связи.',
    body: 'Есть задача, вопрос или идея? Эти контакты — плейсхолдеры, пока нет финальных ссылок.',
    channels: [
      {
        id: 'github',
        label: 'GitHub',
        value: 'github.com/Fokusnikd',
        href: 'https://github.com/Fokusnikd',
        hint: 'профиль репозитория; замените, если нужен другой',
        external: true,
      },
      {
        id: 'telegram',
        label: 'Telegram',
        value: '@fokusnik_d',
        href: 'https://t.me/fokusnik_d',
        hint: 'плейсхолдер — подставьте свой username',
        external: true,
      },
      {
        id: 'email',
        label: 'Почта',
        value: 'fokusnik.d@example.com',
        href: 'mailto:fokusnik.d@example.com',
        hint: 'плейсхолдер — замените на рабочий адрес',
      },
    ] satisfies ContactChannel[],
  },
  footer: {
    credit: 'Fokusnik D. · сайт-визитка · плейсхолдер',
    toTop: 'Наверх',
  },
} as const
