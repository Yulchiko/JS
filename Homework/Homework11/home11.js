//-створити форму з інпутами для name та age.
 //   При відправці форми записати об'єкт в localstorage
let circles = document.getElementById('circles');

circles.onclick = function (e){
    e.preventDefault();
let users = [{name: 'o', age: 15}];
    localStorage.setItem('users', JSON.stringify(users));
}
//-створити форму з інпутами для model,type та volume автівки.
 //   при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let circles1 = document.getElementById('circles1');
let car = [];
circles1.onclick = function (e){
    e.preventDefault();
    let auto = [{model: 'Ferrari', type: 'SF90', volume: 340}];
    localStorage.setItem('auto',  JSON.stringify(auto));

    let autoJSON = localStorage.getItem('auto');
    let parse = JSON.parse(autoJSON);
         parse.push({});
         console.log(parse);
        localStorage.setItem('auto',JSON.stringify(parse));


}