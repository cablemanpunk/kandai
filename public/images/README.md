# Изображения для сайта

## Структура папки:

```
public/images/
├── logo/              # Логотипы и иконки
│   ├── kandai-logo.svg
│   ├── kandai-logo-white.svg
│   └── favicon.ico
├── tools/             # Изображения для инструментов
│   ├── pdf-flomaster.png
│   ├── excel-ai-bot.png
│   └── ai-designer.png
├── integration/       # Изображения для интеграций
│   ├── mc-item-bot.png
│   ├── mc-ai-bot.png
│   └── xml-script.png
├── social/           # Социальные сети и сообщества
│   ├── telegram-group.png
│   └── telegram-channel.png
├── hero/            # Изображения для Hero секции
│   ├── hero-bg.jpg
│   └── hero-illustration.svg
└── general/         # Общие изображения
    ├── og-image.jpg   # Для Open Graph
    └── favicon.svg
```

## Как использовать изображения в компонентах:

### 1. Для замены иконок в блоках инструментов:

В файле `src/components/KaspiTools.astro`:

```astro
<!-- Заменить иконку emoji на изображение -->
<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
  <img src="/images/tools/pdf-flomaster.png" alt="PDF Flomaster" class="w-10 h-10 object-contain" />
</div>
```

### 2. Для фоновых изображений:

```astro
<div class="relative bg-cover bg-center" style="background-image: url('/images/hero/hero-bg.jpg')">
  <!-- Контент -->
</div>
```

### 3. Для логотипа в шапке:

В файле `src/components/Header.astro`:

```astro
<a href="/" class="flex items-center space-x-3 group">
  <img src="/images/logo/kandai-logo-white.svg" alt="KandAI Systems" class="w-10 h-10 transform transition-transform group-hover:scale-105" />
  <span class="text-xl font-bold gradient-text">KandAI Systems</span>
</a>
```

### 4. Для Open Graph изображения:

В файле `src/layouts/Layout.astro`:

```astro
<meta property="og:image" content="/images/general/og-image.jpg" />
```

## Рекомендуемые размеры:

- **Логотип**: 40x40px (в шапке), 200x200px (для favicon)
- **Изображения инструментов**: 64x64px (иконки), 300x200px (превью)
- **Hero фон**: 1920x1080px
- **OG изображение**: 1200x630px
- **Favicon**: 32x32px, 192x192px, 512x512px

## Форматы:

- **SVG** для логотипов и иконок (векторная графика)
- **PNG** для изображений с прозрачностью
- **JPG** для фотографий и фонов
- **WebP** для оптимизации (опционально)

## Оптимизация:

Используйте сервисы вроде:
- TinyPNG для сжатия PNG
- Squoosh для конвертации в WebP
- SVGOMG для оптимизации SVG
