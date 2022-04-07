'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//------------------------------------

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>;
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//------------------------------------

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int > 1)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = `${String(interest).slice(0, 5)} €`;
};

//------------------------------------

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

//------------------------------------

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

//------------------------------------

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

//------------------------------------

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  sorted = false;
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // DISPLAY UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

//------------------------------------

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

//------------------------------------

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amount)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    console.log('here');
  }
  inputLoanAmount.value = '';
});

//------------------------------------
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

//------------------------------------

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//------------------------------------
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// --------------------------------- SIMPLE ARRAY METHODS ------------------------------THE-SECTION

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// // SLICE (DON'T MUTATE ORIGINAL)
// console.log(arr.slice(1));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -1));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE (MUTATE ORIGINAL)
// // console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE (MUTATE ORIGINAL)
// let arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
// arr2.reverse();
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log([...arr, ...arr2]);
// console.log(letters);

// --------------------------------- AT METHODS ------------------------------THE-SECTION

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('jonas'.at(0));

// --------------------------------- FOR EACH ------------------------------THE-SECTION

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}:You withdrew ${Math.abs(movement)}`);
//   }
// }

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// for each can't use break

// --------------------------------- FOR EACH  WITH MAPS AND SETS------------------------------THE-SECTION

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'IDR', 'EUR', 'IDR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// --------------------------------- CODING CHALLENGE 1 ------------------------------THE-SECTION

// const juliaArray = [3, 5, 2, 12, 7];
// const kateArray = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   // const correctJulia = dogsJulia.slice(1, -2);
//   const correctJulia = dogsJulia.slice();
//   correctJulia.splice(0, 1);
//   correctJulia.splice(-2);
//   // const bothDogs = correctJulia.concat(dogsKate);
//   const bothDogs = [...correctJulia, ...dogsKate];
//   bothDogs.forEach(function (dog, i) {
//     const age =
//       dog >= 3 ? `an adult, and is ${dog} years old` : 'still a puppy';
//     console.log(`Dog number ${i + 1} is ${age}`);
//   });
// };

// checkDogs(juliaArray, kateArray);

// --------------------------------- MAP, FILTER, REDUCE ------------------------------THE-SECTION

// --------------------------------- THE MAP METHODS ------------------------------THE-SECTION

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);

// const movementsUSD2 = movements.map(mov => mov * eurToUsd);

// console.log(movementsUSD2);

// const movementsDescription = movements.map((mov, i) => {
//   return `Movement ${i + 1}: You ${
//     mov > 0 ? 'deposited' : 'withdrew'
//   } ${Math.abs(mov)}`;
// });

// console.log(movementsDescription);

// --------------------------------- THE FILTER METHODS ------------------------------THE-SECTION

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(function (mov) {
//   return mov > 0; //boolean
// });

// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositsFor.push(mov);
//   }
// }

// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);

// console.log(withdrawals);

// --------------------------------- THE REDUCE METHODS ------------------------------THE-SECTION

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur) {
//   return acc + cur;
// }, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }

// console.log(balance2);

// // MAXIMUM VALUE

// const maximum = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);

// console.log(max);

// --------------------------------- CODING CHALLENGES 3 ------------------------------THE-SECTION

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(age => {
//     return age <= 2 ? 2 * age : 16 + age * 4;
//   });

//   const filteredDogs = humanAge.filter(age => {
//     return age >= 18;
//   });

//   // const totalAge = filteredDogs.reduce((acc, cur) => {
//   //   return acc + cur;
//   // }, 0);
//   // const average = totalAge / filteredDogs.length;

//   const average = filteredDogs.reduce((acc, age, i, arr) => {
//     return acc + age / arr.length;
//   }, 0);

//   return average;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// --------------------------------- CHAINING ARRAY METHODS ------------------------------THE-SECTION

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// // pipeline
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, cur) => acc + cur);

// console.log(totalDepositsUSD);

// --------------------------------- CODING CHALLENGES 4 ------------------------------THE-SECTION

// const calcAverageHumanAge = function (ages) {
//   const average = ages
//     .map(age => {
//       return age <= 2 ? 2 * age : 16 + age * 4;
//     })
//     .filter(age => {
//       return age >= 18;
//     })
//     .reduce((acc, age, i, arr) => {
//       return acc + age / arr.length;
//     }, 0);

//   return average;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// --------------------------------- FIND METHODS ------------------------------THE-SECTION

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// --------------------------------- FINDINDEX METHODS ------------------------------THE-SECTION

// --------------------------------- SOME AND EVERY METHODS ------------------------------THE-SECTION

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // const anyDeposits = movements.some(mov => mov > 5000);
// // console.log(anyDeposits);

// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Separated callback

// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.filter(deposit));

// --------------------------------- FLAT AND FLATMAP ------------------------------THE-SECTION

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, 5, 6], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovemeents = accounts.map(acc => acc.movements);
// console.log(accountMovemeents);
// const allMovements = accountMovemeents.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// const overallBalance2 = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);

// const overallBalance3 = accounts
//   .flatMap(acc => acc.movements) //CAN ONLY 1 DEEP
//   .reduce((acc, mov) => acc + mov, 0);

// --------------------------------- SORTING ARRAYS ------------------------------THE-SECTION

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

// console.log(owners.sort()); //MUTATE

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // return < 0, A B (keep order)
// // return > 0, B A (switch order)

// // ASCENDING
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
// });

// movements.sort((a, b) => a - b);

// // DESCENDING
// movements.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (a < b) {
//     return +1;
//   }
// });

// movements.sort((a, b) => b - a);

// console.log(movements);

// --------------------------------- CREATING AND FILLING ARRAYS ------------------------------THE-SECTION

// const x = new Array(7);
// console.log(x);

// x.fill(1, 3, 5);
// console.log(x);

// // Array.from

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function (e) {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });

// --------------------------------- ARRAY METHOD PRACTICE ------------------------------THE-SECTION

// // 1
// console.log(accounts);
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// // 2
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// const numDeposits1000v2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000v2);

// let a = 10;
// console.log(a++);
// console.log(++a);
// console.log(a);

// 3
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);

//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;

//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);

// 4
// this is a nice title => This Is a Nice Title

// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(titleCase);
// };

// console.log(convertTitleCase('this is a nice titile'));
// console.log(convertTitleCase('this is a LONG title, but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// --------------------------------- CODING CHALLENGE 4 ------------------------------THE-SECTION

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1

dogs.forEach(
  dog => (dog.recommendedFood = Number((dog.weight ** 0.75 * 28).toFixed(0)))
);

console.log(dogs);

// 2
// const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));

// console.log(
//   sarahDog.curFood > sarahDog.recommendedFood ? 'Too much' : 'Too little'
// );

// 3

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);

// 4
const cl1 = ownersEatTooMuch.reduce(
  (acc, cur, i) =>
    i === ownersEatTooMuch.length - 1
      ? (acc += `${cur}`)
      : (acc += `${cur} and `),
  ''
);

console.log(`${cl1}'s dogs are eating too much`);

const cl2 = ownersEatTooLittle.reduce(
  (acc, cur, i) =>
    i === ownersEatTooLittle.length - 1
      ? (acc += `${cur}`)
      : (acc += `${cur} and `),
  ''
);

console.log(`${cl2}'s dogs are eating too little`);

// atau 4

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

// 5
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6
console.log(
  dogs.some(
    dog =>
      dog.curFood > 0.9 * dog.recommendedFood &&
      dog.curFood < 1.1 * dog.recommendedFood
  )
);

// 7
const okayFood = dogs.filter(
  dog =>
    dog.curFood > 0.9 * dog.recommendedFood &&
    dog.curFood < 1.1 * dog.recommendedFood
);
console.log(okayFood);

// 8
// // return < 0, A B (keep order)
// // return > 0, B A (switch order)

// // ASCENDING
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
// });

const sortDog = dogs.slice().sort((a, b) => {
  if (a.recommendedFood > b.recommendedFood) {
    return 1;
  }
  if (a.recommendedFood < b.recommendedFood) {
    return -1;
  }
});

const sortDog2 = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(sortDog2);
