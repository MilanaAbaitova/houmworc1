// Задание 1

let a = prompt('Число 1');
let b = prompt('Число 2');
function refundNumber() {
    if (a < b) {
        console.log(a);
    } else if (a > b) {
        console.log(b);
    }
}
refundNumber();

// Задание 2

let n = prompt('Введите число');
function parity() {
    if (n % 2 === 0) {
        alert('Четное число');
    } else {
        alert('Число не четное ');
    }
}
parity();

// Задание 3

let A = prompt('Введите число');
function square() {
    A = A ** 2;
    console.log(a);
}
function backSquare() {
    A = A ** 2;
    return A;
}
square();
backSquare();

// Задание 4

let Age = prompt('Сколько тебе лет');
function askAge(Age) {
    if (Age < 0) {
        return 'Вы ввели неправильное значение';
    } else if (Age >= 0 && Age <= 12) {
        return 'Привет, друг!';
    } else {
        return 'Добро пожаловать!';
    }
}
alert(askAge(Age));

// Задание 5

function trueNum() {
    let first = prompt('Введите первое число');
    let last = prompt('Введите второе число');
    if (!first, !last) {
        return ('Одно или оба значения не являются числом');
    } else {
        return (first * last);
    }
}
trueNum();

// Задание 6

function comback() {

    let numberFirst = prompt('какое число?');

    if (!isNaN(numberFirst)) {
        const сube = numberFirst ** 3;
        console.log(`n в кубе равняется ${сube}`);

    } else {
        console.log('Переданный параметр не являются числом');
    }
}

comback();

// Задание 7

function getArea() {
    return Math.PI * this.radius ** 2;
}
function getPerimeter() {
    return 2 * this.radius * Math.PI;
}

const circle1 = {
    radius: 10,
    getCircleleArea: getArea,
    getirclelePerimeter: getPerimeter,
};
const circle2 = {
    radius: 14,
    getCircleleArea: getArea,
    getirclelePerimeter: getPerimeter,
};
console.log(circle1.getCircleleArea());
console.log(circle1.getirclelePerimeter());
console.log(circle2.getCircleleArea());
console.log(circle2.getirclelePerimeter());

// Задание 8

function date(month) {
    let month = Number(prompt(`Введите номер месяца`));
    if ((month >= 1 && month <= 2) || month === 12) {
        return `Зима`;
    } else if (month >= 3 && month <= 5) {
        return `Весна`;
    } else if (month >= 6 && month <= 8) {
        return `Лето`;
    } else if (month >= 9 && month <= 11) {
        return `Осень`;
    } else {
        return ` Такого месяца нет`;
    }
}
console.log(date(month));