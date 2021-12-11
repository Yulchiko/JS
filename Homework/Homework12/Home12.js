//1.
//Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
//Для кожного елементу свій блок div.post
//Всі характеристики повинні мати свої блоки всередені div.post
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response =>{
    console.log(response);
    return response.json();
})
    .then(posts =>{
              for (const post of posts){
                     let p = document.createElement('div');
                p.classList.add('wrap');
                let div = document.createElement('p');
                div.classList.add('post');
                div.innerHTML = `<h4>userId: ${post.userId}</h4>  id: ${post.id };  title: ${post.title}; body: ${post.body}`;
                p.appendChild(div);
                document.body.appendChild(p);
            }
});

//    2.
//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//    Для кожного елементу свій блок div.comment
//Всі характеристики повинні мати свої блоки всередені div.comment
//https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response =>{
        console.log(response);
        return response.json();
    })
    .then(comments =>{
              for (const comment of comments){
                    let divO = document.createElement('div');
                    divO.classList.add('comment');
                    divO.innerHTML = `<h4>postId: ${comment.postId}</h4> id: ${comment.id }; name: ${comment.name}; email: ${comment.email}; body: ${comment.body}>`;
                    document.body.append(divO);
                }
            });

