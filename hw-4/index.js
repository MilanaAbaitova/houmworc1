// Задание 1

let hi = 0;
while (hi < 2) {
    console.log('Привет !');
    hi++
}

// Задание 2

let number = 1;
while (number <= 5) {
    console.log(number);
    number++
}

// Задание 3

let numbers = 7;
while (numbers <= 22) {
    console.log(numbers);
    numbers++

}

// Задание 4

const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
};
for (let key in obj) {
    alert(`${key} — зарплата: ${obj[key]} долларов.`);

}

// Задание 5

let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(`Количество итераций: ${num}`);
console.log(`Результат: ${n}`);

// Задание 6

let firstFriday = 5;
for (let i = firstFriday; i <= 31; i += 7) {
  console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}


