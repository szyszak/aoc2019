const INPUT = require('./input');
// SOLUTION: 3409710
const arr = INPUT.split(',').map(Number);

arr[1] = 12;
arr[2] = 2;

const applyOperations = arr => {
  for (let i = 0; i < arr.length; i += 4) {
    const opcode = arr[i];
    const firstValue = arr[i + 1];
    const secondValue = arr[i + 2];
    const memoryAddress = arr[i + 3];

    if (opcode === 99) {
      return;
    }

    if (opcode === 1) {
      arr[memoryAddress] = arr[firstValue] + arr[secondValue];
    } else if (opcode === 2) {
      arr[memoryAddress] = arr[firstValue] * arr[secondValue];
    } else {
      throw Error(`UNKNOWN OPERATION: ${opcode}`);
    }
  }
};

applyOperations(arr);

console.log(arr[0]);
