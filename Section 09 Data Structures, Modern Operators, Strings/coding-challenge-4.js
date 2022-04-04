// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

//GAVE UP

// const btn = document.querySelector('button');

// btn.addEventListener('click', function (e) {
//   let text = document.querySelector('textarea').value;
//   //   let lowerText = text.toLowerCase().split('_');
//   //   const namesUpper = [];
//   //   for (let i = 0; i < lowerText.length; i++) {
//   //     let n = lowerText[i];
//   //     if (i === 1) {
//   //       namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   //     } else {
//   //       namesUpper.push(n);
//   //     }
//   //   }
//   //   let camelName = namesUpper.join('');
//   //   console.log(camelName);

//   let eachText = text.toLowerCase().split('\n');
//   console.log(eachText);
//   for (let i = 0; i < eachText.length; i++) {
//     let eachWord = eachText[i].split('_');
//     console.log(eachWord);
//     const namesUpper = [];
//     for (let j = 0; j < eachWord.length; j++) {
//       if (j === 0) {
//         namesUpper.push(eachWord[j]);
//       } else {
//         for (let k = 0; k < eachWord[j].length; k++) {}
//       }

//       //   let n = eachWord[i];
//       //   if (i === 1) {
//       //     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//       //   } else {
//       //     namesUpper.push(n);
//       //   }
//     }
//     // let camelName = namesUpper.join('');
//     // console.log(camelName);
//   }
// });

// Jonas's

// document.querySelector('button').addEventListener('click', function (e) {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20, ' ')}${'🎈'.repeat(i + 1)}`);
//   }
// });

// ---------------------------------------------------------------------------------

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const rows = flights.split('+');

for (const row of rows) {
  // _Delayed_Departure;fao93766109;txl2133758440;11:25
  const [event, from, to, hour] = row.split(';');
  let output = '';
  output += event.replace('_', '').replace('_', ' ');
  output += ` from ${from.slice(0, 3).toUpperCase()}`;
  output += ` to ${to.slice(0, 3).toUpperCase()}`;
  output += ` (${hour.replace(':', 'h')})`;
  output.startsWith('Delayed') ? (output = '🔴 ' + output) : output;
  console.log(output.padStart(45));
}
