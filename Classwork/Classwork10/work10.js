//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//   Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
document.getElementById('t').onclick = function () {
    let f = document.forms.form.input.value;
    let f1 = document.forms.form.inputO.value;
    let f2 = document.forms.formA.inputP.value;
    let f3 = document.forms.formA.inputT.value;
    console.log(f, f1, f2, f3);
}
//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//   При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додатковачастина для завдання)
let form1 = document.forms['tabElement'];
form1.onsubmit = function (e) {
    e.preventDefault();
    let rows = +form1.rows.value;
  let colums = +form1.colums.value;
    let content = form1.content.value;
    let table = document.createElement('table');

    let tab = document.getElementById('tab');
    tab.onclick = function () {
        for (let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < colums; j++) {
               let td = document.createElement('td');
                td.innerText = content;
                tr.appendChild(td);
           }
            table.appendChild(tr);
       }
    }
    document.body.appendChild(table);
}
//- Створити масив не цензцрних слів.
//    Створити інпут текстового типу.
//   Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//кинути алерт з попередженням.
//   Перевірку робити при натисканні на кнопку

let array = ['лапочка', 'свинья', 'единорог'];
let inputRE = document.createElement('input');
let button = document.createElement('button');
document.body.appendChild(inputRE)
document.body.appendChild(button);
button.innerText = 'Exam';
button.addEventListener('click', function () {
    let valueInput = inputRE.value;
    for (const a of array) {
        if (a === valueInput) {
            alert('Offensiver');
            inputRE.value = 'Very good';
            return;
        }
    }
    if (valueInput) {
        alert('');
        inputRE.value = ''
    }
});
//- Сворити масив не цензцрних слів.
//    Сворити інпут текстового типу.
//   Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//   Кинути алерт з попередженням у випадку якщо містить.
//   Перевірку робити при натисканні на кнопку
let badWords = ['лапочка', 'свинья', 'единорог'];
let btn1 = document.getElementById('btn');
btn1.onclick = function () {
    let sentence = document.getElementById('inpValue');
    for (let word of badWords) {
        if (sentence.value.includes(word)) {
            alert();
        }
    }
};

