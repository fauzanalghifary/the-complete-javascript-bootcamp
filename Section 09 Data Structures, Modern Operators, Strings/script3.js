// SETS ------------------------------------------

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Rissoto',
  'Pizza',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Jonass'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Pizza');
// ordersSet.clear() //delete all

console.log(ordersSet);

for (const order of ordersSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Chef', 'Manager', 'Chef'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Chef', 'Manager', 'Chef']).size);
console.log(new Set('Jonasss').size);
