// console.log("hi");
// console.log(23);

//--------------------------------------- Lecture 10 Values and Variable

// let firstName = 'Fauzan';
// console.log(firstName);

// Use camel case for variable name (camelCase)
// Don't start variable with number
// Variable name can only contain letters, numbers, underscores, and dollar sign
// Can't use reserve name (new, name, etc)
// Don't start variable name with uppercase letter
// ALL uppercase if the variable value is constant
// VARIABLE NAME SHOULD BE DESCRIPTIVE!

// --------------------------------------- Lecture 11 Data Types

// console.log(typeof 23);

// let year;
// console.log(typeof year);
// year = 1997;
// console.log(typeof year);

// --------------------------------------- LET, CONST, VAR

// let age = 30;
// age = 31;
// const birthYear = 1991;
// birthYear = 1991 THIS WILL PRODUCE ERROR

// --------------------------------------- BASIC OPERATOR

// const now = 2022;
// const ageFauzan = now - 1997;
// const ageElmia = now - 1998;
// console.log(ageFauzan, ageElmia);

// const firstName = 'Fauzan';
// const lastName = 'Al Ghifary';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// x += 10; // x = x+10
// x *= 4; // x = x*4
// x++; // x+1
// console.log(x);

// console.log(ageFauzan > ageElmia);
// console.log(ageFauzan >= ageElmia);

// --------------------------------------- OPERATOR PRECEDENCE

// console.log(now - 1997 > now - 1998);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// --------------------------------------- CODING CHALLENGE 1

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// --------------------------------------- STRING AND TEMPLATE LITERALS

// const firstName = 'Fauzan';
// const job = 'Programmer';
// const birthYear = 1997;
// const year = 2022;

// // const fauzan = "I'm " + firstName + ', a ' + (year - birthYear) + " years old " + job + '!';

// const fauzanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!
// Here is the second line`; //just click enter

// const fauzanNew2 = `I'm ${firstName}, a ${year - birthYear} years old ${job}! \n Here is the second line`;

// console.log(`first line
// second line
// thir line`);



// console.log(fauzanNew);
// console.log(fauzanNew2);
// console.log(`Hello There!`);


// --------------------------------------- IF ELSE STATEMENT

// const age = 14;
// // const isOldEnough = age >= 18;

// if (age >= 18) {
//     console.log(`Sarah can start driving license`);
// } else {
//     console.log(`not old enough`);
// }

// const birthYear = 2022;

// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// --------------------------------------- CODING CHALLENGE 2

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBMI = Math.round((markMass / markHeight ** 2) * 1000) / 1000;
// const johnBMI = (johnMass / johnHeight ** 2).toFixed(2);

// if (markBMI > johnBMI) {
//     console.log(`Mark BMI (${markBMI}) is higher than John BMI (${johnBMI})`);
// } else if (markBMI < johnBMI) {
//     console.log(`Mark BMI (${markBMI}) is lower than John BMI (${johnBMI})`);
// } else {
//     console.log(`Mark BMI (${markBMI}) is same as John BMI (${johnBMI})`);
// }

// --------------------------------------- TYPE CONVERSION AND COERCION

// // Type conversion
// const inputYear = '1997';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas')); //NaN
// console.log(String(23));

// // Type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('12' - 2);
// console.log('12' + 2);
// console.log('12' * 2);
// console.log('12' / 2);

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// --------------------------------------- TRUTHY AND FALSY

// 5 FALSY VALUES: 0, '', undefined, null, NaN

// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean('.'));

// const money = 0;

// if (100) {
//     console.log('You have money');
// } else {
//     console.log('Poor you!');
// }

// let height;
// if (height) {
//     console.log('Yey, height is defined');
// } else {
//     console.log('height is undefined');
// }

// --------------------------------------- EQUALITY OPERATOR

// === is strict. it doesn't do type coercion
// == is not strict. it does type coercion.

// const age = 18;

// if (age === 18) console.log('You just become an adult');

// if (0 == false) console.log('whaaat');
// if (18 == '18') console.log('whaaat');

// const favorite = Number(prompt('what is your favorite number?'));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 24) {
//     console.log('it is a good number');
// }

// if (favorite !== 2424) {
//     console.log('Why not 24???');
// }

// --------------------------------------- BOOLEAN LOGIC

// --------------------------------------- LOGICAL OPERATORS

// const hasDriversLicense = true;
// const hasGoodVision = true;
// const isTired = false;

// // console.log(hasDriversLicense && hasGoodVision);
// // console.log(hasDriversLicense || hasGoodVision);
// // console.log(!hasDriversLicense);

// const canDrive = hasDriversLicense && hasGoodVision && !isTired;
// console.log(canDrive);

// --------------------------------------- CODING CHALLENGE 3

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// // const isDolphinWin = dolphinsScore > koalasScore;

// // if (isDolphinWin && dolphinsScore >= 100) {
// //     console.log('dolphins win');
// // } else if (!isDolphinWin && koalasScore >= 100) {
// //     console.log('koalas win');
// // }
// // else if (dolphinsScore === koalasScore && dolphinsScore > 100 && koalasScore > 100) {
// //     console.log('draw');
// // } else {
// //     console.log('no one win');
// // }

// // It's better
// if (scoreDolphins >= 100 || scoreKoalas >= 100) {
//     if (scoreDolphins > scoreKoalas) {
//         console.log(`Dolphins win!`);
//     } else if (scoreKoalas > scoreDolphins) {
//         console.log(`Koalas win!`);
//     } else {
//         console.log(`Both win the trophy!`);
//     }
// } else {
//     console.log(`No team wins the trophy! Score were less than 100.`);
// }

// --------------------------------------- THE SWITCH STATEMENT

// const day = 'saturday';

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         break;
//     case 'tuesday':
//         console.log('Plan course structure 2 ');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Plan course structure 3');
//         break;
//     case 'friday':
//         console.log('Plan course structure 4');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('THIS IS THE WEEKEND!');
//         break;
//     default:
//         console.log('not a valid day');
// }

// --------------------------------------- STATEMENT AND EXPRESSION

// // Expression produce value

// 1 * 4;
// 1991;
// true && false;
// '23 is bigger';

// // Statement (PERFORM ACTION, BUT DOESN'T PRODUCE VALUE)

// if (23 > 10) {
//     const str = '23 is bigger';
// }


// --------------------------------------- CONDITIONAL (TERNARY) OPERATOR
// TERNARY OPERATOR IS AN EXPRESSION


// const age = 23;

// // age >= 18 ? console.log('You are adult') : console.log('You are child');

// const adultOrChild = age >= 18 ? 'adult' : 'child';
// console.log(adultOrChild);

// console.log(`You are ${age >= 18 ? 'adult' : 'child'}`);

// --------------------------------------- CODING CHALLENGE 4


// const bill = 275;
// const tip = bill > 50 && bill < 300 ? 0.15 * bill : 0.2 * bill;

// console.log(`the bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);