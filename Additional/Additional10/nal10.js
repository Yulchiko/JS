//- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//   При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//   Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
let elem = document.getElementById('elem');
elem.onclick = function (event) {
    console.log(event.target.localName + ":" + event.target.classList + " : " + event.target.id + " : " + event.target.clientHeight + ": " + event.target.clientWidth);
};
//- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//  При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
let a1 = document.getElementById('а1');
a1.addEventListener('click', function (event) {
    alert(event.target.localName);
});
let a2 = document.getElementById('а2');
a2.addEventListener('click', function (event) {
    alert(event.target.id);
});
let a3 = document.getElementById('а3');
a3.addEventListener('click', function (event) {
    alert(event.target.clientHeight);
});
let a4 = document.getElementById('а4');
a4.addEventListener('click', function (event) {
    alert(event.target.clientWidth);
});

//-- взять массив пользователей

//- Создать три чекбокса. Каждый из них активирует фильтр для вышесказанного массива. Фильтры могут работать как вместе так и по отдельности.
//1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
//2й - оставляет старше 29 лет включительно
//3й - оставляет тех у кого город киев
//Данные выводить в документ
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
let statusInput = document.getElementById('status');
let ageInput = document.getElementById('age');
let cityInput = document.getElementById('city');
let filter = document.getElementById("filter");
let newArray = [];
filter.onclick = function () {
     let newArray = JSON.parse(JSON.stringify(usersWithAddress));
    if (statusInput.checked) newArray = newArray.filter(user => !user.status);
    if (ageInput.checked) newArray = newArray.filter(user => user.age > 29);
    if (cityInput.checked) newArray = newArray.filter(user => user.address.city === 'Kyiv');
  document.body.appendChild(filterUsers(newArray));
}
function filterUsers(array) {
    const wrap = document.createElement('div');
wrap.innerText = 'content';
    array.forEach(user => {
        newArray.push(user);
        const p = document.createElement('p');
        p.innerHTML =
            `<hr>
             Ім'я: <b>${user.name}</b>
             вік:  <b>${user.age}</b><br>
             місто: <b>${user.address.city}</b><br>
             статус: <b>${user.status}</b>`;
        wrap.appendChild(p);
    });
    return wrap;
    content.append(filterUsers(usersWithAddress));
}
//*****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
//при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
//НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//  Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let lis = document.getElementsByTagName('li');
for (let i = 0; i < lis.length; i++) {
    lis[i].style.position = 'relative';
    let span = document.createElement('span');
    span.style.cssText = 'position:absolute;left:0;top:0';
    span.innerHTML = i + 1;
    lis[i].appendChild(span);
}

let width = 130;
let count = 3;

let carousel = document.getElementById('carousel');
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0;

carousel.querySelector('.prev').onclick = function () {
    if (position >= 0) return;

    position = Math.min(position + width * count, 0);
    list.style.marginLeft = position + 'px';
}

carousel.querySelector('.next').onclick = function () {
    if (position <= -width * (listElems.length - count)) return;

    position = Math.max(position - width * count, -width
        * listElems.length - count);
    list.style.marginLeft = position + 'px';
}
//   Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
//*** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан


