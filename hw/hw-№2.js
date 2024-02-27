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
