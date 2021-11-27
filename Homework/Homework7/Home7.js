//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.greeting = function (){
        console.log(`Hello ${this.name}`);
    }
}
//створити пустий масив, наповнити його 10 об'єктами new User(....)
const arr = [
    new User(1, 'Lina', 'Ivanova', 'rut@i.ua','0685236541' ),
 new User(2, 'Marina', 'Serna', 'Marina@gmail.com', '0501373866'),
 new User(3, 'Svetlana', 'Sidorenko', 'sidora@mail.ru', '0634522121'),
new User(4, 'Dina', 'Andrienko', 'Andr@gmail.com', '0501212121'),
 new User(5, 'Maksim', 'Stepanenko', 'Step@gmail.com', '0661211214'),
 new User(6, 'Oleg', 'Fedorenko', 'Fedoren@gmail.com', '0503212121'),
 new User(7, 'Roden', 'Ivanenko', 'Ivan@i.ua', '0687898989'),
 new User(8, 'Serge', 'Lapenko', '1234@i.ua', '0501111111'),
 new User(9, 'Anna', 'Fesenko', 'Fesenko@gmail.com', '0635645252'),
 new User(10, 'Roden', 'Spanenko', 'nen@gmail.com', '0507458585')
    ];
console.log(arr);
//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUser = arr.filter((item) =>{
    if (item.id % 2 === 0){
        return item;
    }
});
console.log(filterUser);
//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(arr.sort((a, b) => a.id - b.id));
//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class  Client{
   constructor(id, name, surname , email, phone, order) {
        this.id = id;  this.name = name;  this.surname = surname;  this.email = email;  this.phone = phone;  this.order = order;
    }
}
//створити пустий масив, наповнити його 10 об'єктами Client
const clientArr = [
    new Client(1, 'chocolate', 'bounty', 'bounty@gmail.com', '0800000001', ['sweets', 'bars', 'chocolates']),
    new Client(2, 'chocolate', 'snickers', 'snickers@gmail.com', '08001000002', ['bars', 'chocolates']),
    new Client(3, 'chocolate', 'mars', 'mars@gmail.com', '0900000025', ['sweets', 'bars', 'chocolates']),
    new Client(4, 'chocolate', 'toblerone', 'toblerone@gmail.com', '08001000002', ['mini bars', 'chocolates']),
    new Client(5, 'chocolate', 'kitkat', 'kitkat@gmail.com', '0800000002', ['sweets', 'bars', 'chocolates']),
    new Client(6, 'chocolate', 'twix', 'twix@gmail.com', '08001000005', ['sweets', 'bars', 'chocolates']),
    new Client(7, 'pastry', 'oreo', 'oreo@gmail.com', '0900000001', ['chocolate biscuits with filling']),
    new Client(8, 'chocolate', 'm&m', 'm&m@gmail.com', '08001000002', ['mini sweets']),
    new Client(9, 'chocolate', 'picnic', 'picnic@gmail.com', '0900000008', ['sweets', 'bars', 'chocolates']),
    new Client(10, 'chocolate', 'lion', 'lion@gmail.com', '08001000018', ['sweets', 'bars', 'chocolates']),
]
console.log(clientArr);
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clientArr.sort((a, b) => a.order.length - b.order.length));