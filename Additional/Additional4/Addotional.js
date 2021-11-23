//- Дано натуральное число n. Выведите все числа от 1 до n.
let numberOutput = (n) => {
  return n ? numberOutput(n - 1) + n.toString() : "";
}
console.log(numberOutput(9));

//- Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let b = 10;
let recursion = (a) => {
  console.log(a);
  a++;
if (a > b){
  return;
}
  recursion(a);
}
recursion(5);
//-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
  //EXAMPLE:
  //let foo = [9,8,0,4]; //0) // ==> [ 8, 9, 0, 4 ]
function swap(arr) {
  [arr[0], arr[1]] = [arr[1], arr[0]];
  return arr;
}
console.log(swap([9,8,0,4]));
  //let foo1 = [9,8,0,4]; //1) // ==> [ 9 ,0, 8, 4 ]
function swap1(arr) {
  [arr[1], arr[2]] = [arr[2], arr[1]];
  return arr;
}
console.log(swap1([9,8,0,4]));
  //let foo2 = [9,8,0,4]; //2) // ==> [ 9, 8, 4, 0 ]
function swap2(arr) {
  [arr[2], arr[3]] = [arr[3], arr[2]];
  return arr;
}
console.log(swap2([9,8,0,4]));
//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//Двожина масиву від 2 до 100
//EXAMPLE:
//[1,0,6,0,3] => [1,6,3,0,0]
function swap3(arr) {
  [arr[1], arr[2], arr[3], arr[4]] = [arr[2], arr[4], arr[1], arr[3]];
  return arr;
}
console.log(swap3([1,0,6,0,3]));
//[0,1,2,3,4] => [1,2,3,4,0]
function swap4(arr) {
  [arr[0], arr[1], arr[2], arr[3], arr[4]] = [arr[1], arr[2], arr[3], arr[4], arr[0]];
  return arr;
}
console.log(swap4([0,1,2,3,4]));
//[0,0,1,0]   => [1,0,0,0]
function swap5(arr) {
  [arr[0], arr[2]] = [arr[2], arr[0]];
  return arr;
}
console.log(swap5([0,0,1,0]));