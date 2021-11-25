//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
let str = 'hello world';
let str1 = 'lorem ipsum';
let str2 ='javascript is cool';
console.log(str.length);
console.log(str1.length);
console.log(str2.length);
//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
let toUpperCase = str.toUpperCase();
let toUpperCase1 = str1.toUpperCase();
let toUpperCase2 = str2.toUpperCase();
console.log(toUpperCase);
console.log(toUpperCase1);
console.log(toUpperCase2);
//- Перевести до нижнього регістру настипні стрінгові значення
//
let str3 =  'HELLO WORLD';
let str4 =  'LOREM IPSUM';
let str5 = 'JAVASCRIPT IS COOL';
let toLowerCase = toUpperCase.toLowerCase();
let toLowerCase1 = toUpperCase1.toLowerCase();
let toLowerCase2 = toUpperCase2.toLowerCase();
console.log(toLowerCase);
console.log(toLowerCase1);
console.log(toLowerCase2);
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str6 = ' dirty string   ';
let trim = str6.trim();
console.log(trim);
//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Каждый охотник желает знать';
//let arr = stringToarray(str);
//document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str7 = 'Каждый охотник желает знать';
function stringToarray(str7) {
    return str7.trim().split(" ");
}
let arr = stringToarray(str7);
document.writeln(arr);
//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//    let str = '';
//document.writeln(delete_characters(str, 7)); // Каждый
function delete_characters(str7, length) {
    if ((str7.constructor === String) && (length>0)) {
        return str7.slice(0, length);
    }
}
document.writeln(delete_characters(str7, 7));
//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str8 = "HTML JavaScript PHP";
function insert_dash(str8) {
    return str8.trim().toUpperCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
}
document.writeln(insert_dash(str8));
//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let str9 = 'каждый охотник желает знать';
function ucFirst(str9) {
    if (!str9) return str9;
   return str9[0].toUpperCase() + str9.slice(1);
}
console.log( ucFirst(str9))
/// Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
function capitalize(str7) {
    return str7.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}
console.log(capitalize(str7));
