//Всі функції повинні бути описані стрілочним типом!!!!
   // - створити функцію яка обчислює та повертає площу прямокутника висотою
let calc  = (a, b) =>{ return a * b};
console.log(calc (10, 20));
//- створити функцію яка обчислює та повертає площу кола
let calc1  = (pi, r) =>{ return pi * r * r};
console.log(calc1 (3.14, 5));
//- створити функцію яка обчислює та повертає площу циліндру
let calc2  = (pi, r, h) =>{ return 2 * pi * r * (h + r)};
console.log(calc2 (3.14, 5, 8));
//- створити функцію яка приймає масив та виводить кожен його елемент
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
const array = ['coucou', 'bonjour'];
array.forEach(element => document.write(`<p>${element}</p>`));
//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
array.forEach(element => document.write(`<ul>`));
        document.write(`<li>coucou</li>`);
    document.write(`<li>coucou</li>`);
    document.write(`<li>coucou</li>`);
    document.write(`</ul>`);

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
array.forEach(size => document.write(`<ul>`));
for (let i = 0; i < 3; i++) {
        document.write(`<li>Coucou ${i + 1}</li>`);
    }
    document.write(`</ul>`);
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array2 = [24, 22, 1, 2.222221, true, false, 'Oleh', 'owu', 'com', 'ua'];
array2.forEach(element => console.log(element));
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users =
    {
        id: 1,
        name: 'lina',
        age: 12
    };
const objectArray = (array) => {
    let count = 0;
    for (const array in users) {
        document.write(`<div>${array.id}.${array.name}.${array.age}</div>`)
        return count;
    }
    objArray(array);
}
console.log(users);