//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calculator(action, a, b) {
    return action(a, b);
}
console.log(calculator(function (a, b) {
    return a * b
}, 10, 20));

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function calculator1(action, pi, r) {
    return action(pi, r);
}
console.log(calculator1(function (pi, r) {
    return pi * r * r
}, 3.14, 5));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calculator2(action, pi, r, h) {
    return action(pi, r, h);
}
console.log(calculator2(function (pi, r, h) {
    return 2 * pi * r * (h + r)
}, 3.14, 3, 8));

//- створити функцію яка приймає масив та виводить кожен його елемент
let numb = [1, 4, 6, 8, 10, 5, 9];
numb.forEach(function (numbers) {
    console.log(numbers);
});

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function dataP (Coucou) {
        document.write(`<p>${Coucou}</p>`)
         document.write(`<p>${Coucou}</p>`)
         document.write(`<hr>`)
            for (let i = 0; i <= 3; i++) {
           document.write(`<p>${i} - ${Coucou}</p>`)
        }
     }
     dataP('empty coucou')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listCreator(Coucou) {
    document.write(`<ul>`);
    document.write(`<li>Coucou</li>`);
    document.write(`<li>Coucou</li>`);
    document.write(`<li>Coucou</li>`);
    document.write(`</ul>`);
}

listCreator(Text);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listCreator1(size) {
    document.write(`<ul>`);
    for (let i = 0; i < size; i++) {
        document.write(`<li>Coucou ${i + 1}</li>`);
    }
    document.write(`</ul>`);
}

listCreator1(3);
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let t = [24, 22, 1, 2.222221, true, false, 'Oleh', 'owu', 'com', 'ua'];

function rec(t) {
    console.log(t);
}

rec(t);
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users =
    {
        id: 1,
        name: 'lina',
        age: 12
    };
function objArray(array) {
    for (const array in users) {
        document.write(`<div>${array.id}.${array.name}.${array.age}</div>`);
    }
    objArray(array);
}
console.log(users);