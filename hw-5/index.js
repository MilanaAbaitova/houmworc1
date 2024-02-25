//Задание 1

let a = prompt('Число 1');
let b = prompt('Число 2');
function refundNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

//Задание 2

let n = prompt('Введите число');
function parity(n) {
    if (n % 2 === 0) {
        return 'Четное число';
    } else {
        return 'Число не четное ';
    }
}


//Задание 3

let e = prompt('Введите число');
function square(e) {
    console.log(e ** 2);
}
function square(e) {
    return e ** 2;
}

//Задание 4

let age = prompt('Сколько тебе лет');
function ascAge(age) {
    if (age < 0) {
        return 'Вы ввели неправильное значение';
    } else if (age >= 0 && age <= 12) {
        return 'Привет, друг!';
    } else {
        return 'Добро пожаловать!';
    }
}
alert(ascAge(age));

//Задание 5

function inNamber(a, b) {

    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
 
}

//Задание 6

function backNumber() {
    let numberFirst = prompt('Enter number');
    if (!isNaN(numberFirst)) {
        const numberInCube = numberFirst ** 3;
        return `n в кубе равняется ${numberInCube}`;
    } else {
        return `Переданный параметр не являются числом`;
    }
}

backNumber();

//Задание 7

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

//Задание 8

function monthNum() {

    let month = prompt(`Введите номер месяца`);

    if ((month >= 1 && month <= 2) || month === 12) {
        return "Зима";
    } else if (month >= 3 && month <= 5) {
        return "Весна";
    } else if (month >= 6 && month <= 8) {
        return "Лето";
    } else if (month >= 9 && month <= 11) {
        return "Осень";
    } else {
        console.log("Такого месяца нет");
    }

}
