Mayin_gilam/
├── public/                # Статические файлы (favicon, логотипы брендов)
├── src/                   # Основной код приложения
│   ├── assets/            # Фотографии ковров, иконки (SVG)
│   ├── components/        # Маленькие детали (Кнопки, Карточки ковров)
│   ├── sections/          # Крупные блоки страницы (Header, Services, Map)
│   ├── types/             # Описания данных на TypeScript (Carpet.ts)
│   ├── App.tsx            # Главный «дирижер» — собирает все секции воедино
│   ├── main.tsx           # Точка запуска (связь React с HTML)
│   └── index.css          # Глобальные стили (цвета бренда, шрифты)
├── index.html             # Главный HTML-шаблон
├── package.json           # Список библиотек (React, Vite, TS)
└── tsconfig.json          # Правила поведения TypeScript