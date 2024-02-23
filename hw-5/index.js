// Задание 1

function refundNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
// Задание 2

function parity(n) {
    if (n % 2 === 0) {
        return 'Четное число';
    } else {
        return 'Число не четное';
    }
}

// Задание 3

function squareNumber(a) {
    console.log(a ** 2);
}
function squareNumber(a) {
    return (a ** 2);
}

// Задание 4

let age = prompt(`Сколько тебе лет`);
function askAge(age) {
    if (age < 0) {
        return 'Вы ввели неправильное значение';
    } else if (age >= 0 && age <= 12) {
        return 'Привет, друг!';
    } else {
        return 'Добро пожаловать!';
    }
}
alert(askAge(age));

// Задание 5

function trueNum(a, b){
if (isNan(a) || isNan(b)) {
    return 'Одно или оба значения не являются числом';
} else {
    return a * b;
}
}

// Задание 6

function comback() {

    let numberFirst = prompt('какое число?');

    if (!isNaN(numberFirst)) {
        const сube = numberFirst ** 3;
        return `n в кубе равняется ${сube}`;

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

let month = Number(prompt(`Введите номер месяца`));
function monthNum() {
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
console.log(monthNum);
