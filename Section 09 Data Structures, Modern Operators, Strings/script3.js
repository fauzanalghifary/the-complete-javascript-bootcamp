// SETS ------------------------------------------

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Rissoto',
//   'Pizza',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);

// console.log(new Set('Jonass'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Pizza');
// // ordersSet.clear() //delete all

// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Chef', 'Manager', 'Chef'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(['Waiter', 'Chef', 'Chef', 'Manager', 'Chef']).size);
// console.log(new Set('Jonasss').size);

// MAPS -----------------------------------

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// // console.log(rest.get('name'));
// // console.log(rest.get(true));

// const time = 24;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);

// console.log(rest);

// const arr = [1, 2];
// rest.set(arr, 'Test');

// rest.set(document.querySelector('h1'), 'Heading');

// console.log(rest.get(arr));
// console.log(rest);

// MAPS ITERATION -------------------------------

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct!!'],
//   [false, 'Try again!'],
// ]);

// console.log(question);

// // CONVERT object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Iteration

// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const answer = Number(prompt('Your answer'));

// // if (answer === question.get('correct')) {
// //   console.log(question.get(true));
// // } else {
// //   console.log(question.get(false));
// // }

// console.log(question.get(question.get('correct') === answer));

// // CONVERT Map to array

// console.log([...question]);
// console.log([...question.keys()]);
