interface User {
    id: number;
    name: string;
    email: string;
}

let user: User = {
    id: 1,
    name: 'Иван',
    email: 'ivan@ivanov.ru'
};

// проверка в логах консоли
console.log(user.name + " " + user.email); 