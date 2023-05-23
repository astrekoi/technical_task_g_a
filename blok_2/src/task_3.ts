import { Request, Response } from 'express';
const express = require('express');
const app = express();
app.use(express.json());

// Определяем обработчик маршрута для POST запросов на корневой URL,
// извлекая необходимые значения, вычисляя сумму и отправляя результат обратно в виде JSON
app.post('/', (req: Request, res: Response) => {
    const a: number = req.body.number_a;
    const b: number = req.body.number_b;
    const result: number = add(a, b);
    res.json({ result });
});

// Функция для вычисления суммы двух чисел
function add(a: number, b: number): number {
    return a + b;
}

// Определяем порт и запускаем сервер на указанном порту
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port} ...`));
