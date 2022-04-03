'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is you pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// DESTRUCTURING ARRAY ------------------------------------

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // Destructuring array
// const [x, y, z] = arr;
// console.log(x, y, z);

// // Empty in between
// const [first, , second] = restaurant.categories;
// console.log(first, second);

// // Swap
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested array desctructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Set Default Values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// DESTRUCTURING OBJECTS ------------------------------------

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // Changes name
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested object
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// //  REAL LIFE EXAMPLE
// restaurant.orderDelivery({
//   time: '22.30',
//   address: 'Via del Sole',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Fire',
//   starterIndex: 2,
// });

// SPREAD OPERATORS ------------------------------------
// SPREAD for (separated VALUES separated by comma)

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// // pass argument to function

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array (shallow copy, but seemed like a deep copy)

// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT OBJECT.

// const str = 'Jonas';
// const letters = [...str];
// console.log(letters);

// console.log(...str); // same as below
// console.log('J', 'o', 'n', 'a', 's');

// // REAL LIFE EXAMPLE

// const ingredients = [
//   prompt("Let's make pasta! Ingredients1?"),
//   prompt("Let's make pasta! Ingredients2?"),
//   prompt("Let's make pasta! Ingredients3?"),
// ];

// restaurant.orderPasta(...ingredients);

// // for Objects
// const newRestaurtant = {
//   foundedIn: '1998',
//   ...restaurant,
//   founder: 'Guissepe',
// };
// console.log(newRestaurtant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante rome';

// REST PATTERNS AND PARAMETERS ---------------(opposite of spread operators)----------------------------------
// REST FOR (separated VARIABLE separated by comma)

// // --- 1) Desctructuring

// // SPREAD because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // REST because on LEFT side of = (IT COLLECT THE ELEMENT THAT IS UNUSED, BUT ONLY THE REST ELEMENT, NOT THE SKIPPED ONE)
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , rissoto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, rissoto, otherFood);

// // Objects

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // --- 2) Function

// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
//   return sum;
// };

// add(2, 3, 7);
// add(2, 3, 9, 10, 12);

// // -

// const x = [23, 5, 7];
// add(...x);

// // REAL LIFE EXAMPLE
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushroom');

// SHORT CIRCUITING ------------------------------------

// console.log('-------OR-------'); //RETURN FIRST TRUTHY
// // use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || '' || 'Hello' || 23 || null);

// const guests1 = restaurant.numGuests ? restaurant.numGuest : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('------AND-------'); //KEBALIKAN DARI OR (FIRST FALSY)

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushorrom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// NULLISH COALLESCING OPERATOR ------------------------------------

// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // Nullish: null and undefined (0 or '' not NULLISH)
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// LOGICAL ASSIGMENT OPERATOR ------------------------------------

// const res1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const res2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// OR ASSIGNMENT OPERATOR
// res1.numGuests = res1.numGuests || 10;
// res2.numGuests = res2.numGuests || 10;
// res1.numGuests ||= 10;
// res2.numGuests ||= 10;

// Nullish assignment operator
// res1.numGuests ??= 10;
// res2.numGuests ??= 10;

//
// res1.owner = res1.owner && '<ANONYMOUS>';
// res2.owner = res2.owner && '<ANONYMOUS>';

// res1.owner &&= '<ANONYMOUS>';
// res2.owner &&= '<ANONYMOUS>';

// console.log(res1);
// console.log(res2);
