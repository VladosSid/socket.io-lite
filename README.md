# Chat Socket.io-1.0.0

This Chat created be learning technolegies [socket.io](https://socket.io/). To improve the understanding of working with socket.io and learning in practice, the capabilities of the library. This chat is a basic version that does not reveal all the possibilities of the library and is the first step in mastering this technology. We are planning to create a more functional Chat.

[Click me](https://socket-io-lite.vercel.app/) to join the chat.
## Application capabilities

- created name User;
- send and receive real-time messages;
- see the number of participants online;
- message connecting new User.

## Technologies

- [React](https://ru.legacy.reactjs.org/);
- [socket.io-client](https://socket.io/docs/v4/client-installation/).

- [Node.js](https://nodejs.org/en/docs/guides/getting-started-guide);
- [express](https://expressjs.com/);
- [socket.io](https://socket.io/docs/v4/server-installation/).

## Installing and launching the app

Clone this repository.


***
***
***

# Чат Socket.io-1.0.0

Чат було створено під час вивчення технології [socket.io](https://socket.io/). Для покращення розуміння роботи з socket.io та засвоення на практиці, можливостей бібліотеки. Цей чат - є базовою версією, яки не розкриває всих можливостей бібліотеки та є першим кроком у засвоєнні цієї технології. В планах ствоерння більш функціонального Чату.

[Натисни](https://socket-io-lite.vercel.app/) щоб доєднатися до чату.

## Можливості додатку

- додавання імені користувача;
- листування в реальному часі;
- моніторинг кількості онлайн участників у чаті;
- повідомлення про приеднання нового користувача.

## Використані технології

- [React](https://ru.legacy.reactjs.org/);
- [socket.io-client](https://socket.io/docs/v4/client-installation/).

- [Node.js](https://nodejs.org/en/docs/guides/getting-started-guide);
- [express](https://expressjs.com/);
- [socket.io](https://socket.io/docs/v4/server-installation/).

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

- перейдіть до папки кліента
```bash
    cd client
```

- встановіть залежності
```bash
    npm install
```

**Перед стартом розробки слід змінити посилання для доеднання до локального сервера:**
  1. Відкрийте файл: "./client/src/pages/Chat.jsx"
  2. У змінній 

```javascript
const socket = io('https://api-chat-lite.onrender.com');
```
замініть посилання на "http://localhost:5050/"

```javascript
const socket = io('http://localhost:5050/');
```

- запустіть додаток
```bash
    npm run dev
```

- перейдіть за посиланням [http://localhost:5173/](http://localhost:5173/)