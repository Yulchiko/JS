//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
//https://jsonplaceholder.typicode.com/users
 //   кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
 //   Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (let oUser of users) {
            let div = document.createElement('div');
            div.innerHTML = `<h4>${oUser.name}</h4>`;
            div.classList.add('users');
            let btn = document.createElement('button');
            btn.innerText = 'details';
            div.appendChild(btn);
            btn.onclick = function (){
                alert(`${oUser.email} - ${oUser.username} - ${oUser.username} - ${oUser.address.street}- ${oUser.address.city}- ${oUser.address.zipcode} - ${oUser.address.geo.lat} - ${oUser.address.geo.lng} - ${oUser.phone}  - ${oUser.website} - ${oUser.company.name} - ${oUser.company.catchPhrase} - ${oUser.company.bs}`);
            };
            document.body.appendChild(div);
        }
    });

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (let post of posts) {
            let div = document.createElement('div');
            div.innerHTML = `<h4>${post.userId}</h4>`;
            div.classList.add('posts');
            let btn = document.createElement('button');
            btn.innerText = 'details';
            div.appendChild(btn);
            btn.onclick = function (){
                alert(` ${post.id} - ${post.title} - ${post.body}`);
            };
            document.body.appendChild(div);
        }
    });