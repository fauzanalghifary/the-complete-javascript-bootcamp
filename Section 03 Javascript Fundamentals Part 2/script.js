'use strict';

// ---------------------------------------- STRICT MODE

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';

// ---------------------------------------- FUNCTIONS (FUNCTION DECLARATION)

// function logger() {
//     console.log('My name is Jonas');
// }

// // Calling / Running / Invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleOrangeJuice = fruitProcessor(2, 3);
// console.log(appleOrangeJuice);

// const orangeJuice = fruitProcessor(0, 3);
// console.log(orangeJuice);

// ---------------------------------------- FUNCTIONS DECLARATION VS EXPRESSION

//  THIS IS FUNC DECLARATION
// birthYear is parameter, 1997 is argument


// function calcAge1(birthYear) {
//     return 2022 - birthYear;
// }

// const age1 = calcAge1(1997);
// // console.log(age1);

// // THIS IS FUNC EXPRESSION
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// };

// // console.log(calcAge1);
// // console.log(calcAge2);
// const age2 = calcAge2(1998);
// // console.log(age2);

// ---------------------------------------- ARROW FUNCTIONS

// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// };

// // Arrow func
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(2000);
// // console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 60 - age;
//     return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1997, 'Fauzan'));


// ---------------------------------------- FUNCTION CALLED OTHER FUNCTION

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// ---------------------------------------- REVIEWING FUNC

// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 60 - age;

//     if (retirement > 0) {
//         return retirement;
//     } else {
//         return -1;
//     }


// };

// console.log(yearsUntilRetirement(1997, 'Fauzan'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// ---------------------------------------- CODING CHALLENGE 1


// function calcAverage(score1, score2, score3) {
//     const avgScore = (score1 + score2 + score3) / 3;
//     return avgScore.toFixed(0);
// }

// const calcAverage = (a, b, c) => (a + b + c) / 3;


// function checkWinner(avgDolhins, avgKoalas) {

//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`);
//     } else {
//         console.log(`No one win (dolphins ${avgDolhins} vs koalas ${avgKoalas})`);
//     }
// };

// const dolphinsAvg = calcAverage(65, 59, 44);
// const koalasAvg = calcAverage(23, 34, 27);

// checkWinner(dolphinsAvg, koalasAvg);

// ---------------------------------------- ARRAY

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// ---------------------------------------- BASIC ARRAY METHOD

// const friends = ['Michael', 'Steven', 'Peter'];

// // add element
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength); //4

// friends.unshift('JohnMyFirstFriends');
// console.log(friends);

// // remove element
// const popped = friends.pop(); //last
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// //

// console.log(friends.indexOf('Steven'));
// console.log(friends.includes('Steven'));


// ---------------------------------------- CODING CHALLENGE 2
// const bills = [125, 555, 44];
// const tips = [];
// const total = [];
// let index = 0;

// const calcTip = function (bill) {

//     if (bill[index] > 50 && bill[index] < 300) {
//         tips.push(0.15 * bill[index]);
//     } else {
//         tips.push(0.2 * bill[index]);
//     }

//     total.push(bill[index] + tips[index]);
//     index++;

//     if (index === bill.length) {
//         index = 0;
//         return;
//     } else {
//         calcTip(bills);
//     }


// };

// calcTip(bills);
// console.log(tips, total);

// ---------------------------------------- OBJECT

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 25,
//     friends: ['Michael', 'Peter', 'Steven'],
// };

// ---------------------------------------- DOT vs BRACKET NOTATION

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);

// jonas.location = 'Portugal';

// ---------------------------------------- OBJECT METHODS

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     friends: ['Michael', 'Peter', 'Steven'],
//     // calcAge: function (birthYear) {
//     //     return 2022 - birthYear;
//     // }

//     // calcAge: function () {
//     //     return 2022 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

//     summary: function () {
//         return `${this.firstName} has ${this.friends.length} friends`;
//     }

// };

// console.log(jonas.calcAge());
// console.log(jonas.age);

// console.log(jonas.summary());

// ---------------------------------------- CODING CHALLENGE 3


// const Mark = {
//     weight: 78,
//     height: 1.69,
//     calcBMI: function () {
//         return (this.weight / this.height ** 2).toFixed(2);
//     }
// };

// const John = {
//     weight: 92,
//     height: 1.95,
//     calcBMI: function () {
//         return (this.weight / this.height ** 2).toFixed(2);
//     }
// };

// const markBMI = Mark.calcBMI();
// const johnBMI = John.calcBMI();

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
// } else if (markBMI < johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is lower than John's (${johnBMI})`);
// }

// ---------------------------------------- THE FOR LOOP

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repetition ${rep}`);
// }


// ---------------------------------------- LOOPING ARRAY, BREAKING, CONTINUING

// const friends = ['Michael', 'Steven', 'Peter'];
// const types = [];
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
//     // types[i] = typeof friends[i];
//     types.push(typeof friends[i]);
// }

// console.log(types);

// const years = [1991, 2002, 2005, 2010];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2022 - years[i]);
// }

// console.log(ages);

// CONTINUE AND BREAK

// const friends = ['Michael', 1997, 'Steven', true, 'Hamdan'];

// for (let i = 0; i < friends.length; i++) {
//     if (typeof friends[i] !== 'string') {
//         continue;
//     }
//     console.log(friends[i]);
// }

// for (let i = 0; i < friends.length; i++) {
//     if (typeof friends[i] === 'number') {
//         console.log(friends[i]);
//         break;
//     }

// }

// ---------------------------------------- LOOPING BACKWARD AND NESTED LOOPS

// const friends = ['Michael', 1997, 'Steven', true, 'Hamdan'];

// for (let i = friends.length - 1; i >= 0; i--) {
//     console.log(friends[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`----------Starting exercse ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise} - Lifting weight repetition ${rep}`);
//     }

// }

// ---------------------------------------- WHILE LOOPS

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     dice = Math.trunc(Math.random() * 6) + 1;
//     console.log(`you role a ${dice}`);
// };


// ---------------------------------------- CODING CHALLENGE 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = function (bills) {

    for (let i = 0; i < bills.length; i++) {
        const tip = bills[i] > 50 && bills[i] < 300 ? 0.15 * bills[i] : 0.2 * bills[i];
        tips.push(tip);
        total.push(bills[i] + tip);
    }
};



const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const avg = sum / arr.length;
    return avg;
};

calcTip(bills);
console.log(tips);
console.log(total);

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(total));