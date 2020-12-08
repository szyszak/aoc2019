const INPUT = require('./input');

const arr = INPUT.split('\n').map(str => Number(str));

let totalFuel = 0;

for (const mass of arr) {
  const fuel = Math.floor(mass / 3) - 2;

  totalFuel += fuel;
}

console.log(totalFuel);
