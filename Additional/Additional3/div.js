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
const sumArray = (array1,array2) => {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i] + array2[i]);
    }
    return newArray;
}
const returnArrayConst = sumArray([1,2,3,4],[2,3,4,5]);
console.log(returnArrayConst);


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
function object_values(x) {
    let vals = [];
    for (const key of x) {
        for (const prop in key) {
            vals.push(key[prop]);
        }
    }
        console.log(vals);
    }

object_values(array);
