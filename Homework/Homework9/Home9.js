//Все робити за допомоги js.
//- створити блок,
//    - додати йому класи wrap, collapse, alpha, beta
//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//- додати цей блок в body.
//- клонувати його повністю, та додати клон в body.
let div = document.createElement('div');
document.body.appendChild(div);
    div.classList.add('wrap');
    div.classList.add('collapse');
    div.classList.add('alpha');
    div.classList.add('beta');
    div.innerText = 'hello';
    div.style.background = 'pink';
    div.style.color = 'green';
    div.style.fontWeight = '500';
let divClone = div.cloneNode(true);
divClone.innerText= 'Coucou';
document.body.insertBefore(divClone, div);

//- Є масив:
let main = ['Main','Products','About_us','Contacts'];
//Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
//Завдання робити через цикли.
    for (const l of main){
              let li = document.createElement('li');
        li.innerText = l;
        let ul = document.getElementsByClassName('menu')[0];
        ul.appendChild(li);
    }

//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
   {title: 'Frontend', monthDuration: 4}
];
for (const cours of coursesAndDurationArray){
              console.log(cours);
              let  divElement = document.createElement('div');
              divElement.innerText = cours.title + '' + cours.monthDuration;
              document.body.appendChild(divElement);
}
//Для кожногоcours елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.

//- Є масив
//let coursesAndDurationArray = [
 //   {title: 'JavaScript Complex', monthDuration: 5},
  //  {title: 'Java Complex', monthDuration: 6},
  //  {title: 'Python Complex', monthDuration: 6},
 //   {title: 'QA Complex', monthDuration: 4},
  //  {title: 'FullStack', monthDuration: 7},
  //  {title: 'Frontend', monthDuration: 4}
//];
//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
 //   Завдання робити через цикли.
for (const courses of coursesAndDurationArray){
    console.log(courses);
    let div = document.createElement('div');
    div.classList.add('item');
    document.body.appendChild(div);
    let h1 = document.createElement('hi');
    h1.classList.add('heading');
    h1.innerText = courses.title;
       let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = courses.monthDuration;
    div.appendChild(h1);
    h1.appendChild(p);
}

