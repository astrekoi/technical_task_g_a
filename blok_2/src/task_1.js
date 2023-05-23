const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// Определяем путь к файлу с данными пользователей
const usersFilePath = path.join(__dirname, '/data/users.json');
// Читаем содержимое файла и парсим его как JSON
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

app.get('/', (req, res) => {
  res.send('HI go to: "http://localhost:3000/api/users"');
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

// Определяем порт и запускаем сервер на указанном порту
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port} ...`));
