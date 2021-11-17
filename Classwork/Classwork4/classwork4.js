//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function min(arr){
   let min = arr[1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
document.write(min([10, 20, 45]));
//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
document.write(max([10, 20, 45]));
//- створити функцію яка повертає найбільше число з масиву

const funMax = (array)=> {
     let max = array[0];
     for (const funMaxElement of array) {
         if (funMaxElement > max) max = funMaxElement;
     }
    return max;
 };
 const funMaxReturn = funMax([2,3,4,5,6,10,4,3,6]);
 console.log(funMaxReturn);

//- створити функцію яка повертає найменьше число з масиву

const funMin1 = (array)=> {
    let min = array[0];
    for (const funMaxElement of array) {
        if (funMaxElement < min) min = funMaxElement;
    }
    return min;
};
const funMaxReturn1 = funMin1([2,3,4,5,6,10,4,3,6]);
console.log(funMaxReturn1);
//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function calculator(action, a, b, c){
    return action (a, b, c);
}
console.log(calculator(function (a, b, c ){return a + b + c}, 1, 2,  10));
//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function calculator1(action, a, b, c){
    return action (a, b, c);
}
console.log(calculator1(function (a, b, c ){return (a + b + c)/3}, 1, 2,  10));
//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let list = [34, 1, 529, -78, 89.7, 1243, 2000, 300000];
function maxElement (list){
    let max;
    let min = list[0];
    for(let i = 0; i < list.length; i++){
        if((list[i]) < min){
            min = list[i];
        } else {
            max = list[i];
        }
    }
    return max;
}
console.log(maxElement(list));
//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function randomW(limit){
    for (let i = 0; i < 100; i++){
        let t = Math.round(Math.random()*limit);
        document.write(`<div>${t}</div>`);
    }
}
randomW(100);
//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let i = 0;
function randomWrite(i, limit){
    i++;
    console.log(i);
    if (i > limit){
        return
    }
    randomWrite (i, limit);
}
randomWrite (0, 25);
//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function reverseArr(arr){
    let outArr = [];
    for (let i = arr.length-1;i>=0;i--){
        outArr.push(arr[i]);
    }
    return outArr;
}
console.log(reverseArr([1,2,3]));
