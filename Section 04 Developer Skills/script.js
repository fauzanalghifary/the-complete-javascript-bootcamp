// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = ['error', 3, -2, 1, 3, 5, -4, 2, 'error', -10, 32, 44];

// const calcAmplitude = function (temps) {
//   const filteredTemps = temps.filter((x) => typeof x === 'number');
//   let max = filteredTemps[0];
//   let min = filteredTemps[0];

//   for (let i = 0; i < filteredTemps.length; i++) {
//     if (filteredTemps[i] > max) {
//       max = filteredTemps[i];
//     }

//     if (filteredTemps[i] < min) min = filteredTemps[i];
//   }
//   return max - min;
// };

// const amplitude = calcAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2

// const calcAmplitudeNew = function (temps1, temps2) {
//   const temps = temps1.concat(temps2);

//   const filteredTemps = temps.filter((x) => typeof x === 'number');
//   let max = filteredTemps[0];
//   let min = filteredTemps[0];

//   for (let i = 0; i < filteredTemps.length; i++) {
//     if (filteredTemps[i] > max) {
//       max = filteredTemps[i];
//     }

//     if (filteredTemps[i] < min) min = filteredTemps[i];
//   }
//   return max - min;
// };

// const amplitudeNew = calcAmplitudeNew([1, -2, 3], [0, 100, 2]);
// console.log(amplitudeNew);

// // -----

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',
//     // value: Number(prompt('Degress celcius')),
//     value: 10,
//   };
//   console.log(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// -----------------------BUGGG----------------------

// const calcAmplitudeNew = function (temps1, temps2) {
//   const temps = temps1.concat(temps2);

//   const filteredTemps = temps.filter((x) => typeof x === 'number');
//   let max = filteredTemps[0];
//   let min = filteredTemps[0];

//   for (let i = 0; i < filteredTemps.length; i++) {
//     if (filteredTemps[i] > max) {
//       max = filteredTemps[i];
//     }

//     if (filteredTemps[i] < min) min = filteredTemps[i];
//   }
//   return max - min;
// };

// const amplitudeNew = calcAmplitudeNew([1, -2, 3], [0, 100, 2]);
// console.log(amplitudeNew);

// ----------------------------CODING CHALLENGE------------

const printForecast = function (arr) {
  let theText = '';
  for (let i = 0; i < arr.length; i++) {
    theText += `... ${arr[i]}°C in day ${i + 1}`;
  }
  return theText;
};

console.log(printForecast([17, 21, 23, -5, -3, 0]));
