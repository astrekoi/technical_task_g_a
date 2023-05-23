const express = require('express');
const app = express();

// Функция middleware requestLogger
const requestLogger = (req, res, next) => {
    const start = Date.now();
    
    // Когда ответ завершен
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`Method: ${req.method}, URL: ${req.originalUrl}, Duration: ${duration} ms`);
    });
    
    // Передаем управление следующей функции middleware
    next();
};

// Используем middleware requestLogger в приложении
app.use(requestLogger);

app.get('/', (req, res) => {
    res.status(200).send('Last task! HORAY');
});

// Экспортируем приложение как модуль
module.exports = app;
