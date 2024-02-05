// Задание-1

let password = String(prompt('Введите пароль'));
let chek;
if (password === 'Пароль') {
    chek = 'Пароль введен верно';
} else {
    chek = 'Пароль введен неправильно';
}
alert(chek);

// Задание-2

let c = prompt('Введите любое число');
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание-3

let d = prompt('Введите первое число');
let e = prompt('Введите второе число');
if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
}

// Задание-4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));


// Задание-5

let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    case '12':
        console.log('Зима');
        break;
    case '1':
        console.log('Зима');
        break;
    case '2':
        console.log('Зима');
        break;
    case '3':
        console.log('Весна');
         break;
    case '4': console.log('Весна')
        ; break;
    case '5':
        console.log('Весна');
        break;
    case '6':
        console.log('Лето');
        break;
    case '7':
        console.log('Лето');
        break;
    case '8':
        console.log('Лето');
        break;
    case '9':
        console.log('Осень');
        break;
    case '10':
        console.log('Осень');
        break;
    case '11':
        console.log('Осень');
        break;
    default:
        console.log('Нет такого месяца!');
}