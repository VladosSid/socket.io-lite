# Chat Socket.io-1.0.0

This Chat created be learning technolegies [socket.io](https://socket.io/). To improve the understanding of working with socket.io and learning in practice, the capabilities of the library. This chat is a basic version that does not reveal all the possibilities of the library and is the first step in mastering this technology. We are planning to create a more functional Chat.

[Click me](https://socket-io-lite.vercel.app/) to join the chat.
## Application capabilities

- created name User
- send and receive real-time messages
- see the number of participants online
- message connecting new User

## Technologies

- [React](https://ru.legacy.reactjs.org/)
- [socket.io-client](https://socket.io/docs/v4/client-installation/)

- [Node.js](https://nodejs.org/en/docs/guides/getting-started-guide)
- [express](https://expressjs.com/)
- [socket.io](https://socket.io/docs/v4/server-installation/)

## Installing and launching the app

Clone this repository.
```bash
    git clone https://github.com/VladosSid/socket.io-lite.git
```

### To start the local server:

- go to the server directory
```bash
    cd server
```

- install dependencies
```bash
    npm install
```

- start the server
```bash
    npm run dev
```

### To start the client part:

- go to the client directory
```bash
    cd client
```

- install dependencies
```bash
    npm install
```

**Before starting development, you should change the link to connect to the local server:**
  1. Open the file: "./client/src/pages/Chat.jsx"
  2. In the variable

```javascript
const socket = io('https://api-chat-lite.onrender.com');
```
  3. Replace the link with "http://localhost:5050/"

```javascript
const socket = io('http://localhost:5050/');
```

- launch the application
```bash
    npm run dev
```

- go to the link [http://localhost:5173/](http://localhost:5173/)

***

# Чат Socket.io-1.0.0

Чат було створено під час вивчення технології [socket.io](https://socket.io/). Для покращення розуміння роботи з socket.io та засвоення на практиці, можливостей бібліотеки. Цей чат - є базовою версією, яка не розкриває всіх можливостей бібліотеки та є першим кроком у засвоєнні цієї технології. В планах ствоерння більш функціонального Чату.

[Натисни](https://socket-io-lite.vercel.app/) щоб доєднатися до чату.

## Можливості додатку

- додавання імені користувача
- листування в реальному часі
- моніторинг кількості онлайн участників у чаті
- повідомлення про приєднання нового користувача

## Використані технології

- [React](https://ru.legacy.reactjs.org/)
- [socket.io-client](https://socket.io/docs/v4/client-installation/)

- [Node.js](https://nodejs.org/en/docs/guides/getting-started-guide)
- [express](https://expressjs.com/)
- [socket.io](https://socket.io/docs/v4/server-installation/)

## Встановлення та запук додатку

Клонуйте репозиторій
```bash
    git clone https://github.com/VladosSid/socket.io-lite.git
```
### Для запуска локального сервера:

- перейдіть до папки сервера
```bash
    cd server
```

- встановіть залежності
```bash
    npm install
```

- запустіть сервер
```bash
    npm run dev
```

### Для запуска клієнтської частини:

- перейдіть до папки кліеєта
```bash
    cd client
```

- встановіть залежності
```bash
    npm install
```

**Перед стартом розробки слід змінити посилання для доєднання до локального сервера:**
  1. Відкрийте файл: "./client/src/pages/Chat.jsx"
  2. У змінній 

```javascript
const socket = io('https://api-chat-lite.onrender.com');
```
  3. замініть посилання на "http://localhost:5050/"

```javascript
const socket = io('http://localhost:5050/');
```

- запустіть додаток
```bash
    npm run dev
```

- перейдіть за посиланням [http://localhost:5173/](http://localhost:5173/)