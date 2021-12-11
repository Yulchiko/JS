//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
//https://jsonplaceholder.typicode.com/posts
 //   зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
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