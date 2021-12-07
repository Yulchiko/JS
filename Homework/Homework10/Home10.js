//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let div = document.createElement('div');
div.id = 'text';
document.body.appendChild(div);
div.innerText = 'Lorem';
document.getElementById('hider').onclick = function() {
    document.getElementById('text').hidden = true;
}
  //  - Создайте меню, которое раскрывается/сворачивается при клике
//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.getElementById('buttonA').onclick = function () {
       let age =   document.getElementById('age').value;
        if (!age) {
             alert('Не Ваш возраст');
         } else if (+age < 18) {
             alert('О, мало очень лет');
         } else {
             alert('Привет! Ты у нас!');
         }
     }
//- Создайте меню, которое раскрывается/сворачивается при клике

let menuElement = document.querySelector('.menu');
let titleElement = menuElement.querySelector('.title');

titleElement.onclick = function() {
    menuElement.classList.toggle('hidden');
};
//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
  // Вывести список комментариев в документ, каждый в своем блоке.<input type="number" id="number" name="number" value="2">
// <input type="submit" id="submit">
  //  Добавьте каждому комментарию по кнопке для сворачивания его body.
let com = [ {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
{title : 'lorem1', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem2', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem3', body:'lorem ipsum dolo sit ameti'}];
let divElement = document.createElement('div');
document.body.
    appendChild(divElement);
for (const c of com){
    let div1 = document.createElement('div');
    div1.onclick = function (){

        this.style.display = 'none';
    }
    divElement.appendChild(div1);
    let h3 = document.createElement('h3');
    h3.innerText = c.title;
    div1.appendChild(h3);
    let p = document.createElement('p');
    p.innerText = c.body;
    div1.appendChild(p);
    let btn = document.createElement('button');
    btn.innerText = 'Закрой меня!';
    let hr = document.createElement('hr');
    divElement.appendChild(hr);
    div1.appendChild(btn);
}

