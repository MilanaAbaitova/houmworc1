//Задание 1

const mstr = 'js';
console.log(mstr.toUpperCase());

// Задание 2

function searchStart(arr, str) {
    return arr.filter(el => el.toLowerCase().startsWith(str.toLowerCase()));
  }
  console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
  console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); 
  console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// Задание 3

const circle = 32.58884;
console.log(Math.ceil(circle), Math.floor(circle), Math.round(circle));

// Задание 4 

const numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbers), Math.max(...numbers));

// Задание 5

function randNumber() {
    console.log(Math.floor(Math.random() * 10) + 1);
}
randNumber();

// Задание 6

function getRandomInt(minValue, maxValue) {

    return Math.round(Math.random() * (maxValue - minValue)) + minValue;

}
console.log(getRandomInt(5, 10));

// Задание 7

function inNumb3(a = Number(prompt('Enter number')), b = Number(prompt('Enter number'))) {
    let randNumb2 = Math.floor(Math.random() * (b - a) + a);
    return randNumb2;
}
console.log(inNumb3());

// Задание 8

let todayDate = new Date();
console.log(todayDate);

// Задание 9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

// Задание 10

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

let myDate = new Date();
let fullDate = 'Сегодня: ' + myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + ', ' + days[myDate.getDay()]
    + myDate.getHours() + ' ' + myDate.getMinutes() + ' ' + myDate.getSeconds();

console.log(fullDate);

// Задание 11 Игра 2

function fruits() {
    let fruitsArr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruitsArr = fruitsArr.sort(() => Math.random() - 0.5);
    alert(fruitsArr);
    let answer1 = prompt('Какой фрукт был первым?');
    let answer2 = prompt('Какой фрукт был последним?');

    if (answer1 === fruitsArr[0] && answer2 === fruitsArr[fruitsArr.length - 1]) {

        alert('Поздравляем вы угадали');
    } else if (answer1 === fruitsArr[0] || answer2 === fruitsArr[fruitsArr.length - 1]) {

        alert('Вы  были близки к победе!');
    } else {
        alert('Вы не угадали!');

    }
};

