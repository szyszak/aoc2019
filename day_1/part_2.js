const INPUT = require('./input');

const arr = INPUT.split('\n').map(str => Number(str));

let totalFuel = 0;

const calculateFuel = mass => {
  const fuel = Math.floor(mass / 3) - 2;

  if (fuel <= 0) {
    return 0;
  }

  return fuel + calculateFuel(fuel);
};

for (const mass of arr) {
  totalFuel += calculateFuel(mass);
}

console.log(totalFuel);
