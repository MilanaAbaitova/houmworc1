// задание 1
let a = 10;
alert(a);
a =20;
alert(a);

// задание 2
const iPhone = "2007";
alert(iPhone);

// задание 3
const user = `EichBrendan`;
alert(user);

// задание 4 
let x = 10;
let y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

// задание 5
let b = 2;
result = b ** 5;
alert(`2 в 5-й степени = ${result}`);
 
//  задание 6
let a = 9;
let b = 2;
result = a % b;
alert(`Остаток = ${result}`);

//  задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//   задание 8
let age = prompt(`сколько вам лет`);
alert(age);

//    задание 9
const user = {
    name: "Mi",
    age: 43,
    isAdmin: false,
}

//    задание 9.1
user[`city of residence`] = "kirov";

//    задание 9.2
user.age = 43;

//    задание 9.3
delete user[`city of residence`];

//    задание 9.4
let info = prompt("что вы хотите узнать о пользователе", "name");
alert(user[info]);

// задание 10
let yourName = prompt(`Как вас зовут?`);
alert(`Привет,${yourName}!`);