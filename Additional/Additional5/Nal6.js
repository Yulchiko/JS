//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
//document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
function cutString(str, n) {
    let res = [];
    for (let i = 0; i < str.length; i += n) {
        res.push(str.substr(i, n));
    }
    return res;
}
document.writeln(cutString('наслаждение',3));
//- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
//Протестувати на значеннях
 // noinspection StatementWithEmptyBodyJS

let email = "someemail@gmail.com";
let email1 = "someeMAIL@gmail.com";
let email2 = "someeMAIL@i.ua";
let email3 = "some.email@gmail.com";
let emailValidation = (email) => {
    let checkExistAndPositionOfSnail = (email) => {
        return email.indexOf('@') >= 1;
    }
    let checkExistAndPositionOfPoint = (email) => {
        const indexOfSnail = email.indexOf('@')
        if (indexOfSnail === -1) {
            return false
        }
        const lastIndexOfPoint = email.lastIndexOf('.')
        return lastIndexOfPoint - indexOfSnail >= 2;
    }
    return (
        checkExistAndPositionOfSnail(email) &&
        checkExistAndPositionOfPoint(email)
    )
}
let validEmail = emailValidation('someemail@gmail.com');
console.log('validEmail', validEmail);

//Примітка
//Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

//- є масив

let coursesArray = [
            {title: 'JavaScript Complex', monthDuration: 5, hourDuration: 909, modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']},

   {title: 'Java Complex',
       monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
           'css',
           'js',
           'mysql',
           'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
   {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
           'css', 'js',
            'mysql',
           'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
   {
        title: 'FullStack',
      monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
           'aws',
            'docker',
            'git',
           'node.js',
            'python',
           'java']
    },
   {
        title: 'Frontend',
       monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']}];

let sort = coursesArray.filter(value => value.modules).sort((a, b) => (a.modules.length) - (b.modules.length));
     console.log(sort);


//відсортувати його в спадаючому порядку за кількістю елементів в полі modules

//- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//    let symb = "о", str = "Астрономия это наука о небесных объектах";
//document.writeln(count(str, symb)) // 5
let symb = "о",
    str = "Астрономия это наука о небесных объектах";
function count(str, symb) {
    let x = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === symb) {
            x++; } }
    return x;}
document.writeln(count(str, symb));
//- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//    let str = "Сила тяжести приложена к центру масс тела";
//document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let str1 = "Сила тяжести приложена к центру масс тела";
function cutString1(str1, n) {
    return str1.split(" ").splice(0, n).join(" ");
}
document.writeln(cutString1(str1, 5));