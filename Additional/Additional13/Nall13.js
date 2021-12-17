//Імітуємо наповнення інтернет магазину товарами :
 //   Створити форму з наступними полями :
 //   - назва товару
//- кількість товару
//- ціна товару
//- картинка товару (посилання з інтернету)
//Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
//створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
//На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//    До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар



let animals = [
    {
        animal_species: 'Dogs',
        price: 100,
         pic_url: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_960_720.jpg'
    },
    {
        animal_species: 'Fox',
        price: 100,
        pic_url: 'https://cdn.pixabay.com/photo/2015/04/07/03/44/fox-710454_960_720.jpg'
    },
    {
        animal_species: 'Horse',
        price: 100,
        pic_url: 'https://cdn.pixabay.com/photo/2018/01/22/14/13/animal-3099035_960_720.jpg'
    },
    {
        animal_species: 'Raccoons',
        price: 100,
        pic_url: 'https://cdn.pixabay.com/photo/2019/08/11/12/47/raccoons-4398911_960_720.jpg'
    },
    {
        animal_species: 'Meerkat',
        price: 100,
        pic_url: 'https://cdn.pixabay.com/photo/2021/11/27/02/46/meerkat-6827075_960_720.jpg'
    },
    {
        animal_species: 'lion',
        price: 100,
        pic_url: 'https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg'
    },
    {
        animal_species: 'Panda',
        price: 100,
        pic_url: 'https://cdn.pixabay.com/photo/2019/08/21/16/03/panda-4421395_960_720.jpg'
    },
    {
        animal_species: 'Rabbit',
        price: 100,
        pic_url: 'https://cdn.pixabay.com/photo/2016/12/13/00/13/rabbit-1903016_960_720.jpg'
    },
    {
        animal_species: 'Red-panda',
        price: 100,
        pic_url: 'https://cdn.pixabay.com/photo/2016/11/23/01/15/red-panda-1851650_960_720.jpg'
    },
    {
        animal_species: 'Squirel',
        price: 100,
        pic_url: 'https://cdn.pixabay.com/photo/2021/09/18/16/31/squirel-6635578_960_720.jpg'
    },
    {
        animal_species: 'Tiger',
        price: 100,
        pic_url: 'https://cdn.pixabay.com/photo/2017/11/06/09/53/tiger-2923186_960_720.jpg'
    },
    {
        animal_species: 'Grizzlies',
        price: 100,
        pic_url: 'https://cdn.pixabay.com/photo/2013/11/15/18/14/grizzlies-210996_960_720.jpg'
    }
];
for (const animal of animals){
    let div = document.createElement('div');
    //div.innerText = JSON.stringify(animal);
    document.write(`<h1> ${animal.animal_species}</h1> <h3>Price ${animal.price}</h3>`);
    document.write(`<img src="${animal.pic_url}" alt="animal" class="image">`);
    let btn = document.createElement('button')
    btn.innerHTML = '<h4>Корзина </h4>';
    btn.onclick = function (){
        let list = JSON.parse(localStorage.getItem('list')) || [];
        list.push(animal);
        localStorage.setItem('list', JSON.stringify(list));

    }
    div.appendChild(btn);
    document.body.appendChild(div);
}
