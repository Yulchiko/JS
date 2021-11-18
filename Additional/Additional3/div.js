//створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function greeting(arg1, arg2) {
    console.log(arg1);
    console.log(arg1 + '' + arg2);
}

greeting('hello', ' world');
greeting('owu', '.com');
//- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами та повертає новий результуючий масив.
//   EXAMPLE:
//[1,2,3,4]
//   [2,3,4,5]
//результат
//   [3,5,7,9]
function sumArrays(...arrays) {
    const n = arrays.reduce((max, xs) => Math.max(max, xs.length), 0);
    const result = Array.from({length: n});
    return result.map((_, i) => arrays.map(xs => xs[i] || 0).reduce((sum, x) => sum + x, 0));
}

console.log(...sumArrays([1, 2, 3, 4], [2, 3, 4, 5]));

//- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//EXAMPLE:
//let obj = [{name: 'Dima', age: 13}, {model: 'Camry'}];  //===> [ name, age, model ]
array = [{name: 'Dima', age: 13}, {model: 'camry'}];

function newArr(x) {
    let keys = [];
    for (const key of x) {
        for (const keyKey in key) {
            keys.push(keyKey);
        }
    }
    console.log(keys);
}

newArr(array);

//  - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//EXAMPLE:
//  [{name: 'Dima', age: 13}, {model: 'Camry'}];
// ===> [ Dima, 13, Camry ]
function Object_values(x) {
    let vals = [];
    for (const key of x) {
        for (const prop in key) {
            vals.push(key[prop]);
        }
    }
        console.log(vals);
    }

Object_values(array);
