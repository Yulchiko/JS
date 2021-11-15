//--створити масив з:
//- з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let mass = ['number1', 'number2', 'number3', 'number4', 'number5', 'string1', 'string2',  'string3',  'string4',  'string5', 'boolean1', 'boolean2', 'boolean3', 'boolean4', 'boolean5'];
console.log(mass);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array = [];
array [0] = 1;
array [1] = 'hello';
array [3] = 25;
array [2] = 'hay';
array [4] = 458;
console.log(array[1][2]);
document.write(array[1][2]);
//  - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++ ) {
    document.write(`<div>Have a nice day!</div>`)
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>Hold on! ${i}</div>`)}

//  - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let u = 0;
while (u < 20) {
    u++
    document.write(`<h1>I'm glad to see you</h1>`);
}
//  - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i = 0;
while (i < 20){
    i++;
    document.write(`<h1>Long time, no see ${i}</h1>`);
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let time = [12, 14, 18, 20, 22, 24, 32, 44, 88, 144];
for (i = 0; i < time.length; i++){
    console.log(time[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let name = ['Lina', 'Marina', 'lilia', 'Ivan', 'Gleb', 'Oleh', 'fggfg', 'owu', 'com', 'ua'];
for (i = 0; i < 10; i++){
    console.log(name[i]);
}
//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let key = [24, 22, 1, 2.222221, 76, 25, 'Oleh','owu', 'com', 'ua'];
for (i = 0; i < 10; i++){
    console.log(key[i]);
}
//  - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві
let user = ['Lina', 'Marina', 'lilia', 76, 25, true, true, false, true, false ];
for (u = 0; u < user.length; u++){
    if (typeof user[u] === `boolean`){
        console.log(user[u])
    }
}
//  - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (u = 0; u < user.length; u++){
    if (typeof user[u] === `string`){
        console.log(user[u])
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (u = 0; u < user.length; u++){
    if (typeof user[u] === `number`){
        console.log(user[u])
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let array1 = [];
array1 [5] = 'space';
array1 [9] = 'Lina';
array1 [0] = 1;
array1 [1] = 'hello';
array1 [6] = 'owu';
array1 [3] = 25;
array1 [7] = 'com';
array1 [2] = 'hay';
array1 [4] = 458;
array1 [8] = 1042;
for (let u = 0; u < array1.length; u++){
    console.log(array1[u]);
}
//  - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let u = 0; u < 10; u++){
    console.log(`step:`, u);
    document.write(`step:, u`)
}
//  - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let u = 0; u < 100; u++){
    console.log(`step:`, u);
    document.write(`step:, ${u} <br>`);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
let step = 0;
for (let u = 0; u < 100; u++){
    console.log(`step :`, step);
    document.write(`step : ${step} <br>`);
    step+=2;
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let u = 0; u < 100; u++){
    if (u%2 === 0){
        console.log(`step :`, u);
        document.write(`step : ${u} <br>`);
    }
}
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let u = 0; u < 100; u++){
    if (u%2 !== 0){
        console.log(`step :`, u);
        document.write(`step : ${u} <br>`);
    }
}