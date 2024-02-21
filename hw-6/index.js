
// Задание-1

const arrNumber = [1, 5, 4, 10, 3];
for (let i = 0; i < arrNumber.length; i++) {
    console.log(arrNumber[i]);
    if (arrNumber[i] == 10) {
        break;
    }
}
//Задание-2

const arrNumber1 = [1, 5, 4, 10, 0, 3];
console.log([1, 5, 4, 10, 0, 3].indexOf(4));

// Задание-3

const arrNumber2 = [1, 3, 5, 10, 20];
console.log(arrNumber2.join(` `));

//Задание-4

let arrNumber3 = [];
for (let i = 0; i < 3; i++) {
    let inArr = [];
    for (let j = 0; j < 3; j++) {
        inArr.push(1);
    }
    arr.push(inArr);
}
console.log(arrNumber3)

// Задание-5

let arrNumber4 = [1, 1, 1];
arrNumber3.push(2, 2, 2);
console.log(arrNumber4);

// Задание-6

let arr = [9, 8, 7, `a`, 6, 5].sort()
let resultArr = arr.sort();
console.log(resultArr.pop());
console.log(resultArr);

// Задание-7

let arrNumber5 = [9, 8, 7, 6, 5];
let reguestNumber = prompt(`Угадай число`);
if (arrNumber5.includes(Number(reguestNumber))) {
    alert(`Угадал`);
} else {
    alert(`Не угадал`);
}

//Задание-8

let str = `abcdef`;
let arrStr = str.split(` `).reverse().join(` `);
console.log(arrStr);

// Задание-9

const arrNumber6 = [[1, 2, 3], [4, 5, 6]];
const flatArr = arrNumber6.flat();
console.log(flatArr);

// Задание-10

let arrCreate = [7, 4, 1, 8, 5, 0, 1, 10, 3];
for (let i = 0; i < arrCreate.length - 1; i++) {
    console.log(arrCreate[i] + arrCreate[i + 1]);
}

//Задание-11

function inArr1(arrNumber7) {
    return arrNumber7.map(num => num * num);
}

// Задание-12

function inArr2(array) {
    return array.map(el => el.length);
}

// Задание-13

function filterPositiv(array){
    return array.filter(value=> value<0);
}
    console.log(filterPositiv([-1,0,5,-10,56]))
    console.log(filterPositiv([-25,25,0,-1000,-2]))


