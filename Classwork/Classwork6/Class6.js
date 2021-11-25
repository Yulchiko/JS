//- Дано список імен.
 //   let n1 = 'Harry..Potter'
//let n2 = 'Ron---Whisley'
//let n3 = 'Hermione__Granger'
//Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//let n1 = 'Harry Potter'
//let n2 = 'Ron Whisley'
//let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
console.log (n1.replaceAll('..', ' '));
console.log (n2.replaceAll('---', ' '));
console.log (n3.replaceAll('__', ' '));
//    - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function randomW(num){
    for (let i = 0; i < 100; i++){
        let t = Math.round(Math.random()*num);
        document.write(`<div>${t}</div>`);
    }
}
let result = randomW(100);
//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
function randomW1(num){
    let arr = [];
    for (let i = 0; i < 100; i++){
        arr.push( Math.round(Math.random()*num));
           }
    return arr.sort((a, b) => a -b);
}
console.log(randomW1(100));
//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
function randomW2(num){
    let arr = [];
    for (let i = 0; i < 100; i++){
        arr.push( Math.round(Math.random()*num));
    }
    return  arr.filter(value => value % 2 === 0);
}
console.log(randomW2(100));
//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
function randomW3(num){
    let arr = [];
    for (let i = 0; i < 100; i++){
        arr.push( Math.round(Math.random()*num));
    }
    return arr.map(value => value.toString());
}
console.log(randomW3(100));
//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
 //   let nums = [11,21,3];
//sortNums('ascending') // [3,11,21]
//sortNums('descending') // [21,11,3]
let nums = [11,21,3];
function sortNums(arr, direction) {
      if (direction === 'asc'){
        let sort = nums.filter(value => value).sort((a, b) => (a) - (b));
        console.log(sort);
    }else if (direction === 'desc'){
       let sort1 =  arr.filter(value => value).sort((a, b) => (b) - (a));
         console.log(sort1);
    }
    return [];
}
console.log(sortNums([11, 21, 3],'desc'));
///- є масив
let users= [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
   {title: 'Frontend', monthDuration: 4}
];
let sort = users.filter(value => value.monthDuration).sort((a, b) => (a.monthDuration) - (b.monthDuration));
console.log(sort);
let filter = users.filter(value => {return value.monthDuration > 5});
console.log(filter);
//-- відсортувати його за спаданням за monthDuration
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
//document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
    function cutString(str, n) {
        let res = [];
        for (let i = 0; i < str.length; i += n) {
            res.push(str.substr(i, n));
        }
        return res;
}
document.writeln(cutString('наслаждение',3));