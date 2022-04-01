'use strict';

// ---------SCOPING CHAINS----------------

// const a ='jonas';
// first();

// function first(){
//   const b ='Hello'; // HOVER B
//   second();

//   function second(){
//     const c ='Hi'; // Hover c =
//     third();
//   }
// }

// function third(){
//   const d ='Hey';

//   console.log(d + c + b + a); // caller

// }

// ---------SCOPING CHAINS-----------------------

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';
//       // Reassigning outer
//       output = 'NEW OUTPUT';

//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }

//     console.log(output);
//     // console.log(add(5, 6)); //Error
//     // console.log(str); //Error
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// ---------HOISTING AND TDZ-----------------------

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'Teacher';
// const year = 1991;

// -----

// console.log(addDecl(1, 2));
// console.log(addExpr(1, 2));
// console.log(addArrow(1, 2));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// -----

// if (!numProducts) {
//   deleteShoppingCart();
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// -----

// var x = 1;
// let y = 2;
// const z = 3;

// ---------THIS-----------------------

// console.log(this); //window object

// const calcAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this);
// };

// calcAge(1990);

// const calcAge2 = birthYear => {
//   console.log(2021 - birthYear);
//   console.log(this);
// };

// calcAge2(1990);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2036 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// ---------Regular vs Arrow Func-----------------------

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2036 - this.year);

//     // SOLUTION 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   //   console.log(self); //Undefined if use 'this'
//     //   console.log(self.year >= 1981 && self.year <= 1990);
//     // };

//     // SOLUTION 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1990);
//     };

//     isMillenial();
//   },
//   greet: () => console.log(`Hey, ${this.firstName}`),
// };

// jonas.greet();
// jonas.calcAge();

// ----

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 3);
// addExpr(2, 3, 8, 12, 6);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8); //Error

// ---------PRIMITIVES VS OBJECTS-----------------------

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log('Friend:', friend);
// console.log('Me:', me);

// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// references types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);

//copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
