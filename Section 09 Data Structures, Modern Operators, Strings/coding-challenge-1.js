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
// let players1 = game.players[0];
// let players2 = game.players[1];
const [players1, players2] = game.players;

// 2
let [gk, ...fieldPlayers] = players1;

// 3
const allPlayers = [...players1, ...players2];

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5
// const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;

// 6
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  console.log(players.length);
};

printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7
console.log(
  `${
    (team1 < team2 && game.team1) || (team2 < team1 && game.team2)
  } is more likely to win`
);
