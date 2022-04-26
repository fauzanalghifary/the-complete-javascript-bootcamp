'use strict';


// CONSTRUCTOR FUNCTION ------------------- THE-SECTION
// const Person = function(firstName, birthYear) {
//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     // Never to this!
//     // this.calcAge = function () {
//     //   console.log(2037 - this.birthYear);
//     // };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}


// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(jonas instanceof Person);

// Person.hey = function() {
//     console.log('Hey there 👋');
//     console.log(this);
// };

// Person.hey();

// PROTOTYPE ------------------- THE-SECTION

// console.log(Person.prototype);
// Person.prototype.calcAge = function() {
//     console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas)); //true
// console.log(Person.prototype.isPrototypeOf(Person)); //false

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas);

// console.log(jonas.hasOwnProperty('firstName')); //true
// console.log(jonas.hasOwnProperty('species')); //false

// PROTOTYPAL INHERITANCE AND CHAINS ------------------- THE-SECTION

// console.log(jonas.__proto__);

// PROTOTYPAL INHERITANCE AND CHAINS ON BUILT IN OBJECT ------------------- THE-SECTION

// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__); //null

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 6, 7, 8];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');

// CHALLENGE 1 ------------------- THE-SECTION

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed += -5;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// console.log(bmw);
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// console.log(bmw);

// ES6 Classes ------------------- THE-SECTION

// // Class expression
// // const PersonCl2 = class {
// // }

// // Class Declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property (INSTANCES METHODS)
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hi, ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exist
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // STATIC METHODS
//   static hey() {
//     console.log('Hey there!!');
//   }
// }

// const jessica = new PersonCl('Jessica Davis', '1996');

// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype); //TRUE

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hi, ${this.firstName}`);
// // };

// jessica.greet();

// // 1. Classes are NOT hoisted
// // 2. Class are first-class citizens
// // 3. Classes are executed in strict mode

// // const walter = new PersonCl('Walter', 1965);
// // console.log(walter);

// Setters and Getters ------------------- THE-SECTION

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// STATIC METHODS ------------------- THE-SECTION

// // PersonCl.hey = function () {
// //   console.log('Hey there!!');
// // };

// PersonCl.hey();

// OBJECT.CREATE ------------------- THE-SECTION

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto); //true

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1978);
// sarah.calcAge();

// CODING CHALLENGE 2 ------------------- THE-SECTION

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}`);
//   }

//   brake() {
//     this.speed += -5;
//     console.log(`${this.make} is going at ${this.speed}`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const bmw = new CarCl('BMW', 120);
// console.log(bmw.speedUS);

// console.log(bmw);
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.speedUS = 50;
// console.log(bmw);

// INHERITANCE BETWEEN CLASSES (using constructor)  ------------------- THE-SECTION

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototype
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I studey ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// console.log(mike);
// mike.calcAge();

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// CHALLENGE 3 ------------------- THE-SECTION

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed += -5;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Linking prototype
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 0.01 * this.charge;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, whit a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(60);
// console.log(tesla.charge);

// INHERITANCE BETWEEN CLASSES (ES6)  ------------------- THE-SECTION


// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     // Methods will be added to .prototype property (INSTANCES METHODS)
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }

//     greet() {
//         console.log(`Hi, ${this.firstName}`);
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }

//     // Set a property that already exist
//     set fullName(name) {
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name`);
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     // STATIC METHODS
//     static hey() {
//         console.log('Hey there!!');
//     }
// }

// class StudentCl extends PersonCl {
//     constructor(fullName, birthYear, course) {
//         // Always needs to happen first
//         super(fullName, birthYear)
//         this.course = course;
//     }

//     introduce() {
//         console.log(`My name is ${this.fullName} and I study ${this.course}`);
//     }

//     calcAge() {
//         console.log(`I am ${2037-this.birthYear} years old students`);
//     }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science')

// martha.introduce();
// martha.calcAge()

// INHERITANCE BETWEEN CLASSES (Object.create)  ------------------- THE-SECTION


// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// const steven = Object.create(PersonProto)

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function(firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear)
//     this, course = course;
// }
// StudentProto.introduce = function() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const jay = Object.create(StudentProto)
// jay.init('Jay', 2010, 'CS')
// jay.introduce();
// jay.calcAge()


// ENCAPSULATION  ------------------- THE-SECTION


// class Account {
//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this._pin = pin;
//         // Protected property
//         this._movements = [];
//         this.locale = navigator.language;

//         console.log(`Thanks, ${owner}`);
//     }


//     getMovements() {
//         return this._movements;
//     }


//     deposit(val) {
//         this._movements.push(val);
//     }

//     withdraw(val) {
//         this.deposit(-val);
//     }

//     _approveLoan(val) {
//         return true;
//     }

//     requestLoan(val) {
//         if (this._approveLoan(val)) {
//             this.deposit(val);
//             console.log(`Loan approved`);
//         }
//     }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);

// // acc1.movements.push(2500);
// // acc1.movements.push(-1500);

// acc1.deposit(250);
// acc1.deposit(150);
// acc1.requestLoan(200);

// console.log(acc1);

// ENCAPSULATION (CLASS FIELD)  ------------------- THE-SECTION

// // Public fields
// // Private fields
// // Public methods
// // Private methods

// class Account {

//     // 1) Public fields (instances)
//     locale = navigator.language;

//     // 2) Private fields
//     // #movements = [];
//     _movements = [];
//     // #pin


//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this._pin = pin;
//         // this.#pin = pin

//         // Protected property
//         // this._movements = [];
//         // this.locale = navigator.language;

//         console.log(`Thanks, ${owner}`);
//     }


//     // 3) Public methods

//     getMovements() {
//         return this._movements;
//     }


//     deposit(val) {
//         this._movements.push(val);
//         return this;
//     }

//     withdraw(val) {
//         this.deposit(-val);
//         return this;
//     }


//     requestLoan(val) {
//         if (this._approveLoan(val)) {
//             this.deposit(val);
//             console.log(`Loan approved`);
//         }
//         return this;
//     }

//     // 4) Private methods
//     //  #approveLoan
//     _approveLoan(val) {
//         return true;
//     }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);

// // acc1.movements.push(2500);
// // acc1.movements.push(-1500);

// acc1.deposit(250);
// acc1.deposit(150);
// acc1.requestLoan(200);

// console.log(acc1);

// CHAINING METHODS  ------------------- THE-SECTION

// acc1.deposit(300).deposit(500).withdraw(200).requestLoan(200);


// CHALLENGE 4 ------------------- THE-SECTION



class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed}`);
        return this;
    }

    brake() {
        this.speed += -5;
        console.log(`${this.make} is going at ${this.speed}`);
        return this;
    }
}

class EV extends CarCl {

    #charge;


    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge -= 0.01 * this.#charge;
        console.log(
            `${this.make} going at ${this.speed} km/h, whit a charge of ${this.charge}`
        );
        return this;
    };
}

const car = new EV('Rivian', 120, 23);
car.accelerate().brake().chargeBattery(60);
// console.log(car.#charge);