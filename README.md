# KandAI Systems Landing

Профессиональный лендинг для KandAI Systems — экосистемы автоматизации для маркетплейсов и бизнеса.

## 🚀 Технологии

- **Astro** — современный фреймворк для статических сайтов
- **Tailwind CSS** — утилитарный CSS фреймворк
- **TypeScript** — типизация для надежности
- **GitHub Pages** — хостинг и деплой

## 🎨 Дизайн

- **Dark Mode** — глубокий серый/черный фон
- **Неоновый зеленый** — акцентный цвет (#39FF14)
- **Mobile First** — адаптивный дизайн
- **Современные шрифты** — Inter, Geist

## 📁 Структура проекта

```
src/
├── components/          # Компоненты
│   ├── Header.astro     # Шапка сайта
│   ├── Hero.astro       # Главный экран
│   ├── KaspiTools.astro # Инструменты Kaspi.kz
│   ├── MoySkladIntegration.astro # Интеграция Мой Склад
│   ├── CustomDevelopment.astro # Кастомная разработка
│   ├── Community.astro  # Сообщество
│   └── Footer.astro     # Подвал
├── layouts/
│   └── Layout.astro     # Основной лейаут
├── pages/
│   └── index.astro      # Главная страница
└── styles/
    └── global.css       # Глобальные стили
```

## 🛠️ Разработка

### Установка зависимостей
```bash
npm install
```

### Запуск dev сервера
```bash
npm run dev
```

### Сборка проекта
```bash
npm run build
```

### Предпросмотр сборки
```bash
npm run preview
```

## 🚀 Деплой

Проект автоматически деплоится на GitHub Pages при пуше в ветку `main`.

### Настройка GitHub Pages

1. В настройках репозитория перейдите в "Pages"
2. Выберите источник "GitHub Actions"
3. Убедитесь что workflow в `.github/workflows/deploy.yml` активен

### URL сайта
После деплоя сайт будет доступен по адресу:
`https://[username].github.io/kandai-systems-landing/`

## 🎯 SEO оптимизация

- Мета-теги для поисковых систем
- Open Graph для социальных сетей
- Семантическая HTML разметка
- Оптимизация изображений
- Mobile-first подход

## 📱 Адаптивность

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🌈 Кастомизация

### Изменение цветов
В файле `tailwind.config.mjs` можно изменить цветовую схему:

```javascript
theme: {
  extend: {
    colors: {
      'neon-green': '#39FF14',
      'electric-green': '#00FF41',
      'dark-bg': '#0A0A0A',
      // ... другие цвета
    }
  }
}
```

### Добавление новых секций
1. Создайте новый компонент в `src/components/`
2. Добавьте его в `src/pages/index.astro`
3. При необходимости добавьте навигационную ссылку в `Header.astro`

## 📊 Производительность

- Lighthouse score: 95+
- Core Web Vitals оптимизированы
- Lazy loading для изображений
- Минимизированный CSS/JS

## 🤝 Поддержка

- **Telegram**: [@kandai_systems](https://t.me/kandai_systems)
- **GitHub Issues**: [Issues](https://github.com/cablemanpunk/kandai/issues)
- **Email**: support@kandai.systems

## 📄 Лицензия

MIT License — можете использовать в коммерческих проектах

---

**Создано с ❤️ для KandAI Systems**
