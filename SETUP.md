# Настройка GitHub Pages и Decap CMS

## 🚀 Шаг 1: Включение GitHub Pages

1. Откройте репозиторий https://github.com/cablemanpunk/kandai
2. Перейдите в **Settings** (⚙️)
3. В левом меню выберите **Pages**
4. В разделе "Build and deployment" выберите **GitHub Actions** как источник
5. Сохраните настройки

GitHub Actions автоматически соберет и задеплоит сайт.

## 🔐 Шаг 2: Настройка OAuth для Decap CMS

### Вариант 1: Использование GitHub Gateway (простой)

1. Перейдите в настройки репозитория **Settings → Pages**
2. В разделе "Custom domain" добавьте домен (если нужно)
3. Decap CMS будет использовать встроенную GitHub аутентификацию

### Вариант 2: Настройка собственного OAuth приложения

1. **Создайте OAuth приложение:**
   - Перейдите в https://github.com/settings/applications/new
   - Application name: `Kandai Systems CMS`
   - Homepage URL: `https://cablemanpunk.github.io/kandai/`
   - Authorization callback URL: `https://cablemanpunk.github.io/kandai/admin/`

2. **Получите Client ID и Client Secret:**
   - После создания приложения скопируйте Client ID
   - Сгенерируйте Client Secret

3. **Добавьте secrets в репозиторий:**
   - В репозитории перейдите в **Settings → Secrets and variables → Actions**
   - Добавьте secrets:
     - `CMS_CLIENT_ID`: ваш Client ID
     - `CMS_CLIENT_SECRET`: ваш Client Secret

## 📋 Шаг 3: Проверка работы

### Проверка деплоя:
1. Откройте https://github.com/cablemanpunk/kandai/actions
2. Убедитесь что workflow успешно выполнился
3. Проверьте сайт по адресу https://cablemanpunk.github.io/kandai/

### Проверка админ-панели:
1. Откройте https://cablemanpunk.github.io/kandai/admin/
2. Нажмите "Login with GitHub"
3. Разрешите доступ к репозиторию
4. Вы должны увидеть интерфейс управления контентом

## 🔧 Шаг 4: Управление контентом

### Структура контента:
- **Страницы** (`src/content/pages/`): основные страницы сайта
- **Блог** (`src/content/blog/`): посты блога
- **Услуги** (`src/content/services/`): услуги компании
- **Настройки** (`src/content/settings/`): глобальные настройки сайта

### Как добавлять контент:
1. В админ-панели выберите нужный раздел
2. Нажмите "New entry" или "Create new"
3. Заполните поля
4. Нажмите "Publish"

Изменения автоматически сохранятся в репозитории и задеплоятся на сайт.

## 🚨 Возможные проблемы

### Если админ-панель не загружается:
1. Проверьте что сайт доступен по основному адресу
2. Проверьте консоль браузера на ошибки
3. Убедитесь что config.yml доступен по адресу /config.yml

### Если не работает аутентификация:
1. Проверьте что у вас есть права на запись в репозиторий
2. Убедитесь что OAuth приложение настроено правильно
3. Проверьте что callback URL совпадает

### Если сайт не деплоится:
1. Проверьте логи GitHub Actions
2. Убедитесь что сборка проходит без ошибок
3. Проверьте права доступа к Pages

## 📞 Поддержка

Если возникли проблемы:
1. Проверьте логи в GitHub Actions
2. Проверьте консоль браузера на ошибки
3. Напишите в Telegram: @kandai_systems

---

**Готово! Теперь у вас работает статический сайт с админ-панелью на GitHub Pages.**
