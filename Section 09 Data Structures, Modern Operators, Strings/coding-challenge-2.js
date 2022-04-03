const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1

// for (let [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// 2

// const entries = Object.entries(game.odds);
// console.log(entries);
// let sum = 0;
// for (let [key, odd] of entries) {
//   sum += odd;
// }
// console.log(sum / entries.length);

// Jonas's version

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// 3
// const entries = Object.entries(game.odds);
// console.log(entries);

// for (let [team, odd] of entries) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// 4
const scorers = {};

for (let X of game.scored) {
  //   scorers[x]++ || (scorers[x] = 1);
  scorers[X] ? scorers[X]++ : (scorers[X] = 1);
  //   scorers[X] = scorers[X] ? scorers[X] + 1 : 1;
}

console.log(scorers);
