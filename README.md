
# Test project

## Описание

Этот проект представляет собой web-приложение на Node.js с использованием Express и PostgreSQL. 
## Установка

### 1. Клонирование репозитория

```sh
git clone https://github.com/vitali-filipovich/test-project-starpets.git
cd test-project-starpets
```

### 2. Установка зависимостей

Установите необходимые зависимости с помощью npm:

```sh
npm install
```

### 3. Настройка базы данных

Создайте базу данных PostgreSQL и добавьте настройки подключения в файл `.env`.

Создайте файл `.env` в корне проекта и добавьте следующие переменные, либо скопируйте из .env.example:

```
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_DATABASE=my_webapp_db
DB_HOST=127.0.0.1
PORT=3000
```

### 4. Миграции базы данных

Запустите миграции для создания необходимых таблиц в базе данных:

```sh
npm run migrate
```

## Запуск

### 1. Запуск в режиме разработки

Если вам нужно запустить только одну копию для разработки, используйте:

```sh
npm run start
```

## Структура проекта

```
test-project-starpets/
│
├── controllers/
│   ├── userController.js
│
├── migrations/
│   ├── 20230624123456-create-user.js
│
├── models/
│   ├── index.js
│   ├── user.js
│
├── routes/
│   ├── userRoutes.js
│
├── services/
│   ├── userService.js
│
├── validators/
│   └── userValidator.js
│
├── configs/
│   └── database.js
│
├── .env
├── migrate.js
├── index.js
├── package.json
└── package-lock.json
```

## API

### Обновление баланса пользователя

**URL:** `/user/update-balance`

**Метод:** `PUT`

**Тело запроса:**

```json
{
  "userId": 1,
  "amount": -2
}
```

**Описание:**

Обновляет баланс пользователя. Если на балансе недостаточно средств, возвращает ошибку.

---

Этот README файл предоставляет все необходимые инструкции для настройки и запуска приложения.