//Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
//Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
function User(id, name, username,email, address, street, suite, city, zipcode, geo, lat,  lng, phone, website, company, companyName, catchPhrase, bs){
        this.id = 1,
        this.name = 'Leanne Graham',
        this.username = 'Bret',
        this.email = 'Sincere@april.biz',
        this.address = {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode:  '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
        }
    }
    this.phone = '1-770-736-8031 x56442',
        this.website = 'hildegard.org',
        this. company = {
            companyName: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
    }
}
let user = new User;
console.log(user);
//-  Створити функцію конструктор / клас  який описує об'єкт тегу
//Поля :
//    -назва тегу ()
//- опис його дій
//- масив з атрибутами (2-3 атрибути максимум)
//Кожен атрибут описати як окремий який буде містити
//-назву атрибуту
//-опис дії атрибуту
//інформацію брати з htmlbook.ru

//Таким чином описати теги
//-a
//-div
//-h1
//-span
//-input
//-form
//-option
//-select
//Приклад результуючого об'єкту
//{
 //   titleOfTag: 'area',
 //       action
//:
 //   `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
 //       attrs
//:
 //   [
 //       {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
 //       {/*some props and values*/},
//       {/*...*/},
 //       {/*...*/},
 //   ]
//}
 class Tag {
 	constructor(titleOfTag,action,attrs){
	this.titleoftag = titleOfTag;
 	this.action = action;
	this.attrs = attrs;
 	}
 }
 let title = "<a>";
 let action = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег " +
     "<a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. " +
     "При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.";
 let atribytes = [
	{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
 	{titleOfAttr: "coords", actionOfAttr: 'Устанавливает координаты активной области.'},
 	{titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
 ];
 let a = new Tag(title,action,atribytes);
 console.log(a);