// https://adventofcode.com/2019/day/3
// https://en.wikipedia.org/wiki/Taxicab_geometry#Formal_definition
const INPUT = require('./input');

const arr = INPUT.split('\n').map(str => str.split(','));

console.log(arr[0][arr[0].length - 1]);
