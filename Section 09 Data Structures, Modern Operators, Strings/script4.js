'use strict';

// PART 1 ---------------------------------------

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log('ABC'[0]);

// console.log(airline.indexOf('P'));
// console.log(airline.lastIndexOf('P'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got middle seat');
//   } else console.log('You got lucky');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('11C');

// PART 2---------------------------------------

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix Capitalization
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing Email

const email = 'hello@jonas.io';
const loginEmail = ' Hello@jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// Replacing

const priceGB = '288,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Booleans

const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Air'));
console.log(plane2.endsWith('eo'));

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed!');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some food, and a pocket Knife');
checkBaggage('Socks and camera');

// PART 2---------------------------------------

// SPLIT and JOIN

console.log('a+very+nice+string'.split('+'));
console.log('Fauzan Al Ghifary'.split(' '));

const [firstName, lastName] = 'Fauzan Ghifary'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Capitalize name

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

const passenger2 = 'muhammad fauzan al ghifary';
capitalizeName(passenger2);

// Padding

const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(35, '-'));
console.log('Jonas'.padStart(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  console.log(last.padStart(str.length, '*'));
  return last.padStart(str.length, '*');
};

maskCreditCard(4333456431562);
maskCreditCard('33546432223344444');

// Repeat

const message2 = 'Bad weather... All departures delayed... ';

console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${'🎈'.repeat(n)} `);
};
planesInline(5);
planesInline(3);
