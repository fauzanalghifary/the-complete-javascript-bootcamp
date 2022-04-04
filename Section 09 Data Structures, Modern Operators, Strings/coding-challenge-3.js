const gameEvents = new Map([
  [17, 'Goal'],
  [36, 'Substitution'],
  [47, 'Goal'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'Goal'],
  [80, 'Goal'],
  [92, 'Yellow card'],
]);

// 1
const eventsSet = new Set();
for (const [key, value] of gameEvents) {
  eventsSet.add(value);
}
// const events = Array.from(eventsSet);
const events = [...eventsSet];
console.log(events);

// 1 Jonas
const events2 = [...new Set(gameEvents.values())];
console.log(events2);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happend, on average, every ${time / gameEvents.size} minutes`
);

// 4
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${key}: ${value}`);
}
