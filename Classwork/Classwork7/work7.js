//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення new назва поля - значення поля
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, year, maxspeed, volume){
    this.model = model;
         this.manufacturer = manufacturer;
         this.year = year;
        this.maxspeed = maxspeed;
      this.volume = volume;
          this.drive = function (){
        console.log (`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    this.info = function (){
        console.log(`
        model = ${this.model};
         manufacturer =${this.manufacturer};
         year = ${this.year};
        maxspeed = ${this.maxspeed};
      volume = ${this.volume};
             `)
    }
    this.increaseMaxSpeed =function (newSpeed){
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue){
        this.year = newValue;
    }
    this.addDriver = function (driver){
        this.drive = driver;
    }
}
let addCar = new Car('Audi', 'Germany', '2021', '250', '2.0');
console.log(addCar);
addCar.drive();
addCar.info();
addCar.increaseMaxSpeed(20);
addCar.changeYear(2020);
addCar.addDriver('my Husband');
console.log(addCar);

//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars{

    constructor(model1, manufacturer, year, maxspeed, volumeEngine) {
        this.model1 = model1;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.volumeEngine = volumeEngine;
    }
    driver(){
        console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
    };
    info()
    {
        console.log(`
			model : ${this.model1}
			manufacturer : ${this.manufacturer}
			year : ${this.year}
			maxSpeed : ${this.maxSpeed}
			volumeEngine : ${this.volumeEngine}
					`);
    };
    increaseMaxSpeed(newSpeed){
        this.maxSpeed += newSpeed;
    };
    changeYear(newValue){
        this.year = newValue;
    };
    addDriver(driver){
        this.shasher = driver;
    };
}
let addCars = new Cars('Audi', 'Germany', '2021', '250', '2.0');
console.log(addCars);
addCars.driver();
addCars.info();
addCars.increaseMaxSpeed(20);
addCars.changeYear(2020);
addCars.addDriver('my Husband');
console.log(addCars);
//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
 //   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella{
    constructor(name, age,foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }

}
const cinderellaArray = [
    new Cinderella('lina', '12', '37'),
    new Cinderella('Marina', '39', '38'),
    new Cinderella('Luna', '25', '38'),
    new Cinderella('Katia', '15', '35'),
    new Cinderella('Anastasia', '28', '38'),
    new Cinderella('Anna', '30', '39'),
    new Cinderella('Sofia', '16', '36'),
    new Cinderella('Vera', '31', '34'),
    new Cinderella('Svitlana', '45', '39'),
    new Cinderella('Mirabella', '18', '33'),
    ]
console.log(cinderellaArray);
class Prince{
    constructor(name, age, slipper) {
              this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}
let princ = new Prince('Sergey', '13', '37');
console.log(princ);

let pair = (cinderellaArray, princ) =>{
    for(const item of cinderellaArray){
        if (item.foot_size === princ.slipper){
            return`Your pair was found: ${item.name}`;
        }
    }
}
console.log(pair(cinderellaArray, princ));
 console.log(cinderellaArray.find((item) => item.foot_size === princ.slipper));