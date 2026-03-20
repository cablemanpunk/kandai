# 🚀 Настройка GitHub Secrets для деплоя

## Обязательные Secrets для GitHub Actions

### 1. Vercel Configuration
- `VERCEL_TOKEN` - токен для доступа к Vercel API
  - Получить: https://vercel.com/account/tokens
  - Права: Full Access

- `ORG_ID` - ID организации Vercel
  - Получить: `vercel link` → проверка файла `.vercel/project.json`

- `PROJECT_ID` - ID проекта Vercel
  - Получить: `vercel link` → проверка файла `.vercel/project.json`

### 2. Database Configuration
- `DATABASE_URL` - URL базы данных для продакшена
  - Пример для Turso: `libsql://your-db-name.turso.io`
  - Пример для PostgreSQL: `postgresql://user:pass@host:5432/db`

- `DATABASE_AUTH_TOKEN` - токен для доступа к БД (если требуется)
  - Для Turso: получить в панели Turso

### 3. Security
- `STUDIOCMS_SECRET` - секретный ключ для StudioCMS
  - Генерировать: `openssl rand -base64 32`

- `SESSION_SECRET` - секрет для сессий
  - Генерировать: `openssl rand -base64 32`

## 📋 Инструкция по добавлению Secrets

1. Перейдите в репозиторий GitHub
2. Settings → Secrets and variables → Actions
3. Нажмите "New repository secret"
4. Добавьте каждый секрет из списка выше

## 🔄 Рабочий процесс

### Локальная разработка:
```bash
# Запуск локально с файловой БД
npm run dev

# Доступ к админ-панели:
# http://localhost:4321/admin
```

### Деплой на продакшен:
1. Сделать `git push` в ветку `main`
2. GitHub Actions автоматически соберет и задеплоит проект
3. CMS будет работать с продакшен БД
4. Админ-панель доступна по адресу: `https://your-domain.com/admin`

## 🎯 Рекомендуемый хостинг

### Vercel (рекомендуется)
- Бесплатный SSL
- Автоматический деплой
- Serverless функции
- Поддержка Node.js

### Альтернативы:
- Railway.app
- Render.com
- DigitalOcean App Platform
- Heroku

## ⚠️ Важные замечания

1. **Никогда не храните секреты в коде!**
2. Используйте разные секреты для dev и prod
3. Регулярно обновляйте токены безопасности
4. Для продакшена используйте внешнюю БД (не файловую)

## 🔧 Проверка деплоя

После первого деплоя проверьте:
- [ ] Сайт загружается корректно
- [ ] Админ-панель доступна
- [ ] База данных подключена
- [ ] Все статичные ресурсы работают

## 📞 Поддержка

Если возникли проблемы:
1. Проверьте логи GitHub Actions
2. Убедитесь что все secrets добавлены
3. Проверьте конфигурацию Vercel
4. Проверьте доступность БД
