//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
function max(arr){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

document.write(max([4,12])); //output is 12

let equal = prompt('a = b');
   if (a === b){
       document.write('equal');
   }else{
       document.write('unequal');
   }


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
let entrance = prompt('first, second, third');
if (entrance < 20) {
    document.write('<h1>first</h1>');
} else if (entrance > 21 && entrance <= 48) {
    document.write('<h1>second</h1>');
} else if (entrance > 49 && entrance <= 90) {
    document.write('<h1>third</h1>');
}
//- Ми маємо змінну number в яку користувач задає числове значення,
// якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let number = +prompt('Выбери число?');
if (number === 10) {
    document.write('<h1>true</h1>');
} else {
    document.write('<h1>false</h1>');
}
//Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
let data = {'number': 1, 'string': 2, 'boolean': 3, 'object': 4};
    let x = {1:'a', 2:'b', 3: 'c', 4: 'd'};
    if (typeof x === "number"){
        console.log(data.number);
    }else if (typeof x === "string"){
        console.log(data.string);
    }else if (typeof x === "boolean"){
        console.log(data.boolean);
    }else if (typeof x === "object"){
        console.log(data.object);
}else {
        console.log('Другое');
    }

//- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temperature = prompt('чи ми йдемо сьогодні в OKTEN на навчання?');
if (temperature > 10 && temperature < 22) {
    document.write('<h1>ВЧИТИСЯ</h1>');
} else if (temperature < 10 && temperature > 22) {
    document.write('<h1>сидимо вдома і вчимося ОНЛАЙН</h1>');
}

//  - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
let Quiz = 'one';
switch (Quiz) {
    case "one":
        console.log("приз - Авто");
        break;
    case "two":
        console.log("приз - Мото");
        break;
    case "three":
        console.log("приз - Телефон");
        break;
    case "four":
        console.log("приз - Ручка");
        break;
    case "five":
        console.log("приз - Чашка");
        break;

    default:
        console.log("Повідомлення - що число не вірне");
}