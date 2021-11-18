//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function numMin(num1, num2, num3) {
         if (num1 < num2 && num1 < num3) {
          document.write(num1);
             console.log(num1);
        } else if (num2 < num3 && num2 < num1) {
            console.log(num2);
            document.write(num2);
        } else {
           console.log(num3);
           document.write(num3);
        }
    }
   numMin(8, 20, 125);

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

 function numMax(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        document.write(num1);
        console.log(num1);
     } else if (num2 > num3 && num2 > num1) {
         console.log(num2);
         document.write(num2);
     } else {
         console.log(num3);
         document.write(num3);
     }
 }
 numMax(8, 20, 125);
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
 let summArray = [1,2,3,4]; // 10
 function sumElement (array){
     let sum = 0;
    for (const arrayElement of array) {
                 sum = arrayElement + sum;
     }
     return sum;
 }
 document.write(sumElement(summArray))

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

 let seredArray = [1,2,3]; // 6/3=2
 function sered (array){
    let sum = 0;
     for (const arrayElement of array) {
         // sum += arrayElement; // // 1 спосіб скорочений
        sum = arrayElement + sum;
     }
    return sum/array.length;
 }
 document.write(sered(seredArray))
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
