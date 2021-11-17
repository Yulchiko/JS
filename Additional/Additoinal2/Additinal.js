//1. Створити пустий масив та :
//   a. заповнити його 50 парними числами за допомоги циклу.
//   b. заповнити його 50 непарними числами за допомоги циклу.
let array = [];
let array1 = [];
for (let i = 0; i < 50; i++) {
    if (i % 2 === 0 ? array[i] = i : array1[i] = i) {
        console.log(array);
        console.log(array1);
    }
}
//    c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
array = [];
for (let i = 0; i < 20; i++) {
    array[i] = Math.floor((Math.random() * (732 - 8)) + 8);
}
console.log(array);

//2. Вивести за допомогою console.log кожен третій елемен
array1 = [];
for (let i = 0; i < array1.length; i += 3) {
    console.log(array1[i]);
}
//3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < array.length; i += 3) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }

}
//4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let array2 = [];
for (let i = 2; i < array.length; i += 3) {
    if (array[i] % 2 === 0) {
        array2.push(array[i]);
        console.log(array2);
    }
}
//5. Вивести кожен елемент масиву, сусід справа якого є парним
//EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let array3 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < array3.length; i++) {
    if (array3[i + 1] % 2 === 0) {
        console.log(array3 [i]);
    }
}
//6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let name = [100, 250, 50, 168, 120, 345, 188];
let key = 0;
for (let i = 0; i < name.length; i++) {
    key = key + name[i];
}
console.log(key);
key = +key / name.length;
console.log(Math.floor(key));
//7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
name = [100, 250, 50, 168, 120, 345, 188];
let key1 = [];
for (let i = 0; i < name.length; i++) {
    key1.push(name[i] * 5);
}
console.log(key1);
//8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
name1 = ['lilia', 76, 25, true, true,];
let key2 = [];
for (let i = 0; i < name1.length; i++) {
    if (typeof name1[i] === `number`) {
        key2.push(name1[i])
    }
}
console.log(key2);


//- Дано 2 масиви з рівною кількістю об'єктів.
//Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'Polya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//    Записати цей об'єкт в новий масив
//Example:
//   let usersWithCities = [
//            {
//                id: 1, // <===
//               name: 'vasya',
//                age: 31,
//                status: false,
//               address: {
//                    user_id: 1, // <===
//                    country: 'Ukraine',
//                   city: 'Ternopil'
//               }
//            },
//            // TO BE CONTINUED .....
//        ]
//for (let i = 0; i < usersWithId; i++){
//    let user = usersWithId[i];
//    for (const city of citiesWithId){
 //           if (city.user_id === user.id){
//                user.city = city;
//            }
//    }
//}
//console.log(usersWithId);
let usersWithCities = [];

for (const userWithId of usersWithId) {
    for (const cityWidthId of citiesWithId) {
        if (userWithId.id === cityWidthId.user_id) {
            const userWithCity = userWithId;
            userWithCity.address = cityWidthId;
            usersWithCities[usersWithCities.length] = userWithCity;
        }
    }
}
console.log(usersWithCities);
//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//       - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу
// скопіювати значення одного масиву в інший.
let numbers1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let numbers2 = [];
for (let i = 0; i < numbers2.length; i++) {
    numbers1.push(numbers2[i]);

}
console.log(numbers2);
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let name3 = ['a', 'b', 'c'];
let str = "";
for (let i = 0; i < name3.length; i++) {
    str = str + name3[i];
}
console.log(str);
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let name4 = ['a', 'b', 'c'];
i = 0;
while (i < name4.length) {
    i++;
}
console.log(str);
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let name5 = ['a', 'b', 'c'];
let str2 = "";
for (const string in name5) {
    str2 = str2 + name5[string];
}
console.log(str2);