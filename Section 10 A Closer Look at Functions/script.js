'use strict';

// Default Parameters-----------------------------

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 2,
//   price = 199 * numPassengers
// ) {
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', undefined, 600);

// Passing arguments (Value vs References) -----------------------------

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 242345537,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH888';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 242345537) {
//     alert('Check in');
//   } else {
//     alert('Wrong alert');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// JS ONLY PASS BY VALUE (NOT PASS BY REFERENCE)

// First Class and Higher Order Function -----------------------------

// Function are just another 'type' of object
// HOF = a function ... that receives another function as an argument, that returns a new function, or both.
// Callback function => function that passed as an argument to HOF.

// Function Accepting Callback Function -----------------------------------------

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // HOF
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best', upperFirstWord);
// transformer('Javascript is the best', oneWord);

// const high5 = function () {
//   console.log(`🎉`);
// };

// document.body.addEventListener('click', high5);

// Function returning Function -----------------------------------------

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Pojan');

// greet('Hello')('Colt');

// The Call and Apply Methods -----------------------------------------

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked on a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Fauzan Al Ghifary');
// lufthansa.book(635, 'Colt Steele');
// console.log(lufthansa.bookings);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // DOESN'T WORK
// // book(23, 'Elmia');

// book.call(eurowings, 23, 'Elmia');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Yos');

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// // Apply Methods.

// const flightData = [583, 'George Cooper'];

// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);
// console.log(swiss);

// The Bind Methods -----------------------------------------
// book.call(eurowings, 23, 'Elmia');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(221, 'Steven');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Schmedtmann');

// // With Event Listeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.3);
// console.log(addVAT(200));

// // same as bind
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT3 = addTaxRate(0.3);
// console.log(addVAT3(200));

// --------------- CODING CHALLENGE 1 -------------------------

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );

//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     // if (answer === 0) {
//     //   this.answers[0]++;
//     // } else if (answer === 1) {
//     //   this.answers[1]++;
//     // } else if (answer === 2) {
//     //   this.answers[2]++;
//     // } else if (answer === 3) {
//     //   this.answers[3]++;
//     // }
//     // console.log(this.answers);
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`poll result are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document.querySelector('.poll');
// //   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// // [5, 2, 3];
// // [1, 5, 3, 9, 6, 1];

// --------------- IMMEDIATELY INVOKED FUNCTION EXPRESSION -------------------------

// const runOnce = function () {
//   console.log(`This will never run again`);
// };

// (function () {
//   console.log(`This will never run again`);
// })();

// (() => console.log(`This will never run again`))();

// {
//   const isPrivate = 23;
// }

// --------------- CLOSURE -------------------------

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// Example 1

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// h();
// f();

// Example 2

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Start boarding in ${wait} seconds`);
// };

// const perGroup = 1000; //LESS PRIORITY
// boardPassengers(180, 3);

// CODING CHALLENGE 2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function (e) {
    header.style.color = header.style.color === 'red' ? 'blue' : 'red';
  });
})();
